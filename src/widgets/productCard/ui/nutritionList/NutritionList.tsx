import { CatalogueItem } from '@/shared/api/types';
import styles from './nutritionList.module.scss';

type Props = {
  base: CatalogueItem;
};

export const NutritionList: React.FC<Props> = ({ base }) => {
  return (
    <div className={styles.macrosWrapper} data-nutrition-list>
      <div className={styles.nutrition} style={{ flex: base.prot }}>
        <span className={`${styles.progress} ${styles.prot}`}></span>
        <p className={`${styles.description} ${styles.descriptionProt}`}>
          Protein
        </p>
      </div>
      <div className={styles.nutrition} style={{ flex: base.carb }}>
        <span className={`${styles.progress} ${styles.carb}`}></span>
        <p className={`${styles.description} ${styles.descriptionCarb}`}>Fat</p>
      </div>
      <div className={styles.nutrition} style={{ flex: base.fat }}>
        <span className={`${styles.progress} ${styles.fat}`}></span>
        <p className={`${styles.description} ${styles.descriptionFat}`}>
          Carbs
        </p>
      </div>
    </div>
  );
};
