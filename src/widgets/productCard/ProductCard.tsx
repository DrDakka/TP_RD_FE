'use client';

import React from 'react';
import { CatalogueItem } from '@/shared/api/types';
import { NutritionList } from './ui';
import styles from './productCard.module.scss';
import { Card, IconHeart, IconLink } from '@/shared/ui';
import { getTag } from './functions';
import { Property } from './ui/property';
import { useFavorite } from '@/features/useFavorite';

type ProductCardProps = {
  inc: CatalogueItem;
};

export const ProductCard: React.FC<ProductCardProps> = ({ inc }) => {
  const { isFavorite, toggle } = useFavorite(inc.id);
  const { label, color } = getTag(inc.tag);

  return (
    <Card className={styles.productCard}>
      <div className={styles.header}>
        <h3>{inc.name}</h3>
        <div className={styles.actions}>
          <button onClick={toggle}>
            <IconHeart
              className={`${styles.heart} ${isFavorite && styles.heartActive}`}
            />
          </button>
          <a href={`/product/${inc.id}`}>
            <IconLink />
          </a>
        </div>
      </div>

      <div className={styles.kcal}>
        {inc.cal} kcal <span>/ 100g</span>
      </div>

      <div
        className={styles.tag}
        style={{
          color: color,
          backgroundColor: color + '33',
        }}
      >
        {label}
      </div>

      <div className={styles.property}>
        {inc.properties.map(property => (
          <Property key={property} property={property} />
        ))}
      </div>
      {/* <button
        onClick={toggleFav}
        className={isFavorite ? s.fav__active : s.fav}
      >
        {isFavorite ? 'unfav' : 'toFav'}
      </button> */}
      <NutritionList base={inc} />
      {/* <a href={`/product/${inc.id}`}>Подробнее</a> */}
    </Card>
  );
};
