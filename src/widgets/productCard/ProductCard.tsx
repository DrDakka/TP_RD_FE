'use client';

import React from 'react';
import { FavoriteButton, NutritionList, Pills } from './ui';
import styles from './productCard.module.scss';
import { CatalogueItem } from '@/shared';
import { View } from './model';
import Link from 'next/link';

type ProductCardProps = {
  inc: CatalogueItem;
  variant?: View;
};

/*
  Review: 
    Really solid piece of code!
    One remark: spacer is not bringing any content,
    so it's better to use <div> here, not <span> onn line 43;
*/

export const ProductCard: React.FC<ProductCardProps> = ({
  inc,
  variant = View.GRID,
}) => {
  return (
    <li className={`${styles[variant]} ${styles.productCard}`}>
      <Link href={`/product/${inc.id}`} className={styles.linkWrapper}>
        <h3 title={inc.name}>{inc.name}</h3>

        <FavoriteButton id={inc.id} className={styles.favorite} />
        <span className={styles.brand}>Brand</span>
        <dl className={styles.kcal}>
          <dt>{inc.cal} kcal</dt> / <dd>100g</dd>
        </dl>
        <Pills
          tag={inc.tag}
          propertyTags={inc.properties}
          variant={variant}
          className={styles.pills}
        />

        <span className={styles.line}></span>

        <NutritionList className={styles.nutrition} base={inc} />
      </Link>
    </li>
  );
};
