import s from './button.module.scss';
import b from './badge.module.scss';
import Link from 'next/link';
import { IconCart } from '@/shared';
import { useFavoritesStore } from '@/features';
import classNames from 'classnames';

export const Basket = () => {
  const favCount = useFavoritesStore(state => state.favorites.size);

  return (
    <>
      <Link
        href="/account/basket"
        aria-label="Go to basket"
        className={classNames(s.button, b.basket)}
      >
        <IconCart />
        <span className={b.badge} aria-hidden>
          {favCount > 99 ? '99+' : favCount}
        </span>
      </Link>
    </>
  );
};
