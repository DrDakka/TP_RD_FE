'use client';

import { BurgerButton, Logo, NavBar, UserActions } from './ui';
import s from './header.module.scss';
import { SearchBar } from './ui/searchBar/SearchBar';
import { useHeader } from './model/useHeader';
import classNames from 'classnames';

export const Header = () => {
  const { searchExpanded, query, handler, bmExpanded } = useHeader();

  const { menu, ...search } = handler;

  return (
    <header
      className={classNames(
        s.header,
        {
          [s['header--search-expanded']]: searchExpanded,
        },
        { [s['header--menu-expanded']]: bmExpanded && !searchExpanded },
      )}
    >
      <BurgerButton handler={menu} expanded={bmExpanded} />

      <Logo />

      <SearchBar expanded={searchExpanded} handlers={search} query={query} />

      <NavBar />
      <div className={s.spacer} />
      <UserActions />
    </header>
  );
};
