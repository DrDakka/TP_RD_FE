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

/* TODO:
  +1. Move @shared/ui/card to widget (no need to use a wrapper, as it's functional belongs to widget)
  +2. Change <div> main wrapper tag to article OR <li> <Link> </Link> <li> (whole widget supposed to be link);
  +3. Move <div className={styles.actions}> ... </div> to ./ui/userActions component;
     Add aria-label tag to favButton (we don't have any text inside button, we need to 
     add some tag for screen readers. As well as label showing current status of button (pressed/unnpressed))
     Change link for a button-placeholder (whole widget is a link:) )
  +4. Change <div> tag for brand => <span>
  +5. KCAL + nutrients are supposed to be <dl> element with <dt> and <dd> inside
  +6. Create component for pills (tag + propTags), move SCSS logic and components there
  7. card.module.scss => box-shadow: use constant from @shared/styles/constants/shadows.scss
  8. border-radius also is available in /shared/styles/constants as values are mostly the same
  +9. export function getTag(tag: Tags): TagMeta {
  return TAG_META[tag];
}

you can use object instead of function 

const { label, color } = TAG_META[inc.tag];

same for propTag 


  **SUMMARY**
  An excellent work, needs to be refactored a bit :)
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
