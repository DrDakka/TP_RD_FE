import styles from './basket.module.scss';
import b from '../shared/iconButton.module.scss';
import Link from 'next/link';
import { IconCart } from '@/shared';
import { useFavoritesStore } from '@/features';

export const Basket = () => {
  const favCount = useFavoritesStore(state => state.favorites.size);

  return (
    <div className={styles.basket} data-header-basket>
      <Link
        href="/account/basket"
        aria-label="Go to basket"
        className={b['icon-button']}
      >
        <IconCart />
      </Link>

      <span className={styles.badge} aria-hidden>
        {favCount > 99 ? '99+' : favCount}
      </span>
    </div>
  );
};
