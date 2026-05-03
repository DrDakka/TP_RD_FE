import { CatalogueItem } from '@/shared/api/types';
import styles from './nutritionList.module.scss';

type Props = {
  base: CatalogueItem;
};

export const NutritionList: React.FC<Props> = ({ base }) => {
  return (
    <div className={styles.macrosWrapper} data-nutrition-list>
      <div className={styles.bars}>
        <span className={styles.prot} style={{ flex: base.prot }} />
        <span className={styles.fat} style={{ flex: base.fat }} />
        <span className={styles.carb} style={{ flex: base.carb }} />
      </div>
      <div className={styles.labels}>
        <dl className={styles.nutrition}>
          <dt className={`${styles.description} ${styles.descriptionProt}`}>Protein</dt>
          <dd className={styles.value}>{base.prot} g</dd>
        </dl>
        <dl className={styles.nutrition}>
          <dt className={`${styles.description} ${styles.descriptionFat}`}>Fat</dt>
          <dd className={styles.value}>{base.fat} g</dd>
        </dl>
        <dl className={styles.nutrition}>
          <dt className={`${styles.description} ${styles.descriptionCarb}`}>Carbs</dt>
          <dd className={styles.value}>{base.carb} g</dd>
        </dl>
      </div>
    </div>
  );
};
