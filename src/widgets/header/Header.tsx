'use client';

import { IconList, IconLogo } from '@shared/ui';
import { NavBar, UserActions } from './ui';
import s from './header.module.scss';
import Link from 'next/link';
import { SearchBar } from './ui/searchBar/SearchBar';
import { useHeader } from './model/useHeader';
import classNames from 'classnames';

// todo:
// searchbar
// search dd
// hover effects

export const Header = () => {
  const { searchExpanded, query, handler } = useHeader();

  return (
    <header
      className={classNames(s.header, {
        [s['header--search-expanded']]: searchExpanded,
      })}
    >
      <button className={s.menuBtn} aria-label="Open menu">
        <IconList />
      </button>
      <Link href="/" className={s.container}>
        <IconLogo />
        <span>NutriSpace</span>
      </Link>

      <SearchBar expanded={searchExpanded} handlers={handler} query={query} />

      <NavBar />
      <div className={s.spacer} />
      <UserActions />
    </header>
  );
};
