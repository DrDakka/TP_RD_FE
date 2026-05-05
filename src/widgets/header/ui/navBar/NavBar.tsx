'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './navbar.module.scss';
import classNames from 'classnames';
import { navRoutes } from '@shared/config/routes';

const navLinks = navRoutes;

type NavHref = (typeof navLinks)[number]['href'];

export const NavBar = () => {
  const pathname = usePathname();
  const active: NavHref | null =
    navLinks.find(link => link.href === pathname)?.href ?? null;

  return (
    <nav data-header-nav className={s.navbar} aria-label="Website navigation">
      {navLinks.map(el => (
        <li key={el.href} className={s.li}>
          <Link
            href={el.href}
            className={classNames(s.link, {
              [s['link--active']]: active === el.href,
              [s['link--idle']]: active !== null && active !== el.href,
            })}
          >
            {el.name}
          </Link>
        </li>
      ))}
    </nav>
  );
};
