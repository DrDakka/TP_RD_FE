import React from 'react';
import { CatalogueItem } from '@/shared/api/types';
import { Macros } from './ui';
import s from './productCard.module.scss';

type Props = {
  inc: CatalogueItem;
  isFavorite: boolean;
  toggleFav: () => void;
};

export const ProductCard: React.FC<Props> = ({
  inc,
  isFavorite,
  toggleFav,
}) => {
  return (
    <article className={s.productCard}>
      <h3>{inc.name}</h3>
      <button
        onClick={toggleFav}
        className={isFavorite ? s.fav__active : s.fav}
      >
        {isFavorite ? 'unfav' : 'toFav'}
      </button>
      <Macros base={inc} />
      <span>{inc.tag}</span>
      <ul>
        {inc.properties.map(prop => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
      <a href={`/product/${inc.id}`}>Подробнее</a>
    </article>
  );
};
