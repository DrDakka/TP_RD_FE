'use client';

import { BurgerButton, Logo, NavBar, UserActions, SearchDropdown } from './ui';
import s from './header.module.scss';
import { SearchBar } from './ui/searchBar/SearchBar';
import { useHeader } from './model/useHeader';
import classNames from 'classnames';
import { RefObject } from 'react';

export const Header = () => {
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
      className={classNames(
        s.header,
        {
          [s['header--search-expanded']]: searchExpanded,
          [s['header--scrolled']]: scrolled,
        },
        { [s['header--menu-expanded']]: bmExpanded && !searchExpanded },
      )}
    >
      <BurgerButton handler={menu} expanded={bmExpanded} />

      <Logo />

      <SearchBar
        expanded={searchExpanded}
        scrolled={scrolled}
        handlers={search}
        query={query}
        inputRef={inputRef as RefObject<HTMLInputElement>}
      />

      <NavBar />
      <div className={s.spacer} />
      <UserActions />
      <SearchDropdown visible={searchExpanded} query={query} />
    </header>
  );
};
