'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '../../model';
import s from './navbar.module.scss';
import classNames from 'classnames';

type NavHref = (typeof navLinks)[number]['href'];

export const NavBar = () => {
  const pathname = usePathname();
  const active: NavHref | null =
    navLinks.find(link => link.href === pathname)?.href ?? null;

  return (
    <nav data-header-nav className={s.navbar} aria-label="Website navigation">
      {navLinks.map(el => (
        <Link
          key={el.href}
          href={el.href}
          className={classNames({
            [s['link-active']]: active === el.href || active === null,
          })}
        >
          {el.name}
        </Link>
      ))}
    </nav>
  );
};
