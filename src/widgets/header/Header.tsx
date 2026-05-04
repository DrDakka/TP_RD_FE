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
import { RefObject, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useFavoritesStore } from '@/features/favorites/store';
import { useUserStore } from '@/features/user/store';
import { LogIn } from './ui/logIn';
import { Basket } from './ui/basket';

export const Header = () => {
  const pathname = usePathname();
  const user = useUserStore(s => s.user);

  useEffect(() => {
    const favStore = useFavoritesStore.getState();
    const userStore = useUserStore.getState();

    favStore.init().then(() => favStore.flush());
    userStore.init().catch(() => {});
  }, []);

  useEffect(() => {
    useFavoritesStore.getState().flush();
  }, [pathname]);

  console.log(user);

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
      {user ? (
        <ProfileMenu
          user={{ name: user.username, email: user.email }}
          logIn={() => useUserStore.getState().logout()}
        />
      ) : (
        <LogIn logIn={() => {}} />
      )}
      <SearchDropdown visible={searchExpanded} query={query} />
    </header>
  );
};
