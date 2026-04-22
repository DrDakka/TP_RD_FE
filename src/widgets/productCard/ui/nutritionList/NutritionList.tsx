import { CatalogueItem } from '@/shared/api/types';
import styles from './nutritionList.module.scss';

type Props = {
  base: CatalogueItem;
};

export const NutritionList: React.FC<Props> = ({ base }) => {
  return (
    <div className={styles.macrosWrapper} data-nutrition-list>
      <dl
        className={styles.nutrition}
        style={{ flex: base.prot }}
        role="progressbar"
        aria-valuenow={base.prot}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span className={`${styles.progress} ${styles.prot}`}></span>
        <dt className={`${styles.description} ${styles.descriptionProt}`}>
          Protein
        </dt>
        <dd className={styles.value}>{base.prot} g</dd>
      </dl>

      <dl
        className={styles.nutrition}
        style={{ flex: base.fat }}
        role="progressbar"
        aria-valuenow={base.fat}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span className={`${styles.progress} ${styles.fat}`}></span>
        <dt className={`${styles.description} ${styles.descriptionFat}`}>
          Fat
        </dt>
        <dd className={styles.value}>{base.fat} g</dd>
      </dl>

      <dl
        className={styles.nutrition}
        style={{ flex: base.carb }}
        role="progressbar"
        aria-valuenow={base.carb}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span className={`${styles.progress} ${styles.carb}`}></span>
        <dt className={`${styles.description} ${styles.descriptionCarb}`}>
          Carbs
        </dt>
        <dd className={styles.value}>{base.carb} g</dd>
      </dl>
    </div>
  );
};
