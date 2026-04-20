'use client';

import React from 'react';
import { Actions, Kcal, MainTag, NutritionList, Pills, Title } from './ui';
import styles from './productCard.module.scss';
import { CatalogueItem } from '@/shared';
import { View } from './model';
import Link from 'next/link';

type ProductCardProps = {
  inc: CatalogueItem;
  variant?: View;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  inc,
  variant = View.GRID,
}) => {
  return (
    <li className={`${styles[variant]} ${styles.productCard}`}>
      <article>
        <Link href={`/product/${inc.id}`} className={styles.linkWrapper}>
          <Title title={inc.name} />
          <span className={styles.brand}>Brand * Category</span>
          <MainTag tag={inc.tag} className={styles.tag} />
          <Pills propertyTags={inc.properties} />
          <span className={styles.line}></span>
          <Kcal cal={inc.cal} />
          <NutritionList base={inc} />
          <Actions id={inc.id} variant={variant} />
        </Link>
      </article>
    </li>
  );
};
