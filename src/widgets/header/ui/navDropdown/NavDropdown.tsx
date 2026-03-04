'use client';

import { CloseIcon } from '@shared/ui';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import s from './navDropdown.module.scss';
import { NAV_LINKS } from '../../model';

type Props = {
  open: boolean;
  onClose: () => void;
};

const MobileNavDropdown: React.FC<Props> = ({ open, onClose }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();

    window.addEventListener('keydown', handler);

    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  return (
    <>
      <div
        className={cn(s.backdrop, { [s['backdrop--open']]: open })}
        onClick={onClose}
      />
      <div className={cn(s.panel, { [s['panel--open']]: open })}>
        <div className={s.header}>
          <span className={s.header__title}>Menu</span>
          <button
            className={s['close-btn']}
            onClick={onClose}
            aria-label="Close menu"
          >
            <CloseIcon size={18} />
          </button>
        </div>
        <nav className={s.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={cn(s.link, { [s['link--active']]: pathname === href })}
            >
              <span>{label}</span>
              <span className={s['link__arrow']}>›</span>
            </Link>
          ))}
        </nav>
        <div className={s.divider} />
        <div className={s.auth}>
          <Link href="/login" className={s['auth__login']}>
            Log in
          </Link>
          <Link href="/signup" className={s['auth__signup']}>
            Sign up free
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNavDropdown;
