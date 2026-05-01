'use client';

import {
  BurgerButton,
  NavBar,
  SearchDropdown,
  SearchBar,
  ProfileMenu,
} from './ui';
import { Logo } from '@shared/ui';
import s from './header.module.scss';
import { useHeader } from './model/useHeader';
import classNames from 'classnames';
import { RefObject, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useFavoritesStore } from '@/features/favorites/store';
import { LogIn } from './ui/logIn';
import { Basket } from './ui/basket';

export const Header = () => {
  const pathname = usePathname();
  const [isLogIn, setIsLogin] = useState(false);

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

  const user = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
  };

  return (
    <header
      ref={containerRef as React.RefObject<HTMLElement>}
      className={classNames(s.header, {
        [s['header--search-expanded']]: searchExpanded,
        // [s['header--scrolled']]: scrolled && !searchExpanded && !bmExpanded,
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
      <Basket />
      {isLogIn ? (
        <ProfileMenu user={user} logIn={() => setIsLogin(false)} />
      ) : (
        <LogIn logIn={() => setIsLogin(true)} />
      )}
      <SearchDropdown visible={searchExpanded} query={query} />
    </header>
  );
};
