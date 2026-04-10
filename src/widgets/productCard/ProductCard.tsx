'use client';

import React from 'react';
import { NutritionList } from './ui';
import styles from './productCard.module.scss';
import { Card, IconHeart, IconLink, CatalogueItem } from '@/shared';
import { getTag } from './functions';
import { Property } from './ui/property';
import { useFavorite } from '@/features';
import { View } from './model';

type ProductCardProps = {
  inc: CatalogueItem;
  variant?: View;
};

/* TODO:
  1. Move @shared/ui/card to widget (no need to use a wrapper, as it's functional belongs to widget)
  2. Change <div> main wrapper tag to article OR <li> <Link> </Link> <li> (whole widget supposed to be link);
  3. Move <div className={styles.actions}> ... </div> to ./ui/userActions component;
     Add aria-label tag to favButton (we don't have any text inside button, we need to 
     add some tag for screen readers. As well as label showing current status of button (pressed/unnpressed))
     Change link for a button-placeholder (whole widget is a link:) )
  4. Change <div> tag for brand => <span>
  5. KCAL + nutrients are supposed to be <dl> element with <dt> and <dd> inside
  6. Create component for pills (tag + propTags), move SCSS logic and components there
  7. card.module.scss => box-shadow: use constant from @shared/styles/constants/shadows.scss
  8. border-radius also is available in /shared/styles/constants as values are mostly the same
  9. export function getTag(tag: Tags): TagMeta {
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
