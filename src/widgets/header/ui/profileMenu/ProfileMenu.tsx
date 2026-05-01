import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './profileMenu.module.scss';
import Image from 'next/image';
import { IconChevron, IconLogOut, IconProfile } from '@/shared';

type User = {
  email: string;
  name: string;
  image?: string;
};

type ProfileMenuProps = {
  user: User;

  logIn: () => void;
};

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ user, logIn }) => {
  const [open, setOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;

    menuRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!profileMenuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  return (
    <div
      ref={profileMenuRef}
      className={styles.profileMenu}
      data-header-profile-menu
    >
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(prev => !prev)}
        onKeyDown={event => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setOpen(true);
          }

          if (event.key === 'Escape') {
            event.preventDefault();
            closeMenu();
          }
        }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Open profile menu"
      >
        <div className={styles.avatarWrapper}>
          <Image
            src={user.image ? user.image : '/img/avatar.png'}
            alt=""
            fill
            className={styles.avatar}
          />
        </div>
        <IconChevron
          className={styles.arrow}
          direction={open ? 'up' : 'down'}
        />
      </button>

      <div
        ref={menuRef}
        className={classNames(styles.dropdown, {
          [styles['dropdown--open']]: open,
        })}
        aria-label="user actions menu"
        role="menu"
        tabIndex={-1}
        onKeyDown={event => {
          if (event.key === 'Escape') {
            event.preventDefault();
            closeMenu();
          }
        }}
      >
        <div className={styles.userData}>
          <div role="presentation" className={styles.avatarWrapper}>
            <Image
              src={user.image ? user.image : '/img/avatar.png'}
              alt=""
              fill
              className={styles.avatar}
            />
          </div>
          <h3 className={styles.name}>{user.name}</h3>
          <a href={`mailto:${user.email}`} className={styles.email}>
            {user.email}
          </a>
        </div>

        <Link
          tabIndex={open ? 0 : -1}
          href="/profile"
          className={styles.item}
          role="menuitem"
        >
          <IconProfile /> <span>Profile</span>
        </Link>

        <button
          tabIndex={open ? 0 : -1}
          type="button"
          className={`${styles.item} ${styles['log-out']}`}
          role="menuitem"
          onClick={logIn}
        >
          <IconLogOut />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};
