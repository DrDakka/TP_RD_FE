'use client';

import {
  BurgerButton,
  NavBar,
  UserActions,
  SearchDropdown,
  SearchBar,
} from './ui';
import { Logo } from '@shared/ui';
import s from './header.module.scss';
import { useHeader } from './model/useHeader';
import classNames from 'classnames';
import { RefObject, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useFavoritesStore } from '@/features/favorites/store';

export const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    const store = useFavoritesStore.getState();

    store.init().then(() => store.flush());
  }, []);

  useEffect(() => {
    useFavoritesStore.getState().flush();
  }, [pathname]);

  const {
    searchExpanded,
    query,
    handler,
    bmExpanded,
    scrolled,
    inputRef,
    containerRef,
  } = useHeader();

  const { menu, ...search } = handler;

  return (
    <header
      ref={containerRef as React.RefObject<HTMLElement>}
      className={classNames(s.header, {
        [s['header--search-expanded']]: searchExpanded,
        [s['header--scrolled']]: scrolled && !searchExpanded && !bmExpanded,
        [s['header--menu-expanded']]: bmExpanded && !searchExpanded,
      })}
    >
      <BurgerButton handler={menu} expanded={bmExpanded} />

      <Logo className={s.logo} />

      <SearchBar
        expanded={searchExpanded}
        scrolled={scrolled}
        handlers={search}
        query={query}
        inputRef={inputRef as RefObject<HTMLInputElement>}
      />

      <NavBar />
      <div data-header-spacer />
      <UserActions />
      <SearchDropdown visible={searchExpanded} query={query} />
    </header>
  );
};
