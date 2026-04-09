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
  variant?: 'grid' | 'list';
};

export const ProductCard: React.FC<ProductCardProps> = ({
  inc,
  variant = 'grid',
}) => {
  const { isFavorite, toggle } = useFavorite(inc.id);
  const { label, color } = getTag(inc.tag);

  return (
    <Card className={`${styles[variant]} ${styles.productCard}`}>
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

      <div className={styles.brand}>Brand</div>

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
      <span className={styles.line}></span>

      <NutritionList className={styles.nutrition} base={inc} />
    </Card>
  );
};
