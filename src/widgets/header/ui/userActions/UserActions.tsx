import Link from 'next/link';
import { uaLinks } from '../../model';
import s from './userActions.module.scss';
import b from '../shared/iconButton.module.scss';
import { useFavoritesStore } from '@/features/favorites/store';

export const UserActions = () => {
  const favCount = useFavoritesStore(state => state.favorites.size);

  return (
    <nav
      data-header-actions
      aria-label="User action navigation"
      className={s.wrapper}
    >
      {uaLinks.map(el => (
        <div key={el.href} className={s.item}>
          <Link
            href={el.href}
            aria-label={el.label}
            className={b['icon-button']}
          >
            <el.Icon />
          </Link>
          {el.href === '/account/basket' && favCount > 0 && (
            <span className={s.badge} aria-hidden>
              {favCount > 99 ? '99+' : favCount}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};
