import { ProgressBar } from '@/shared';
import styles from './nutritionCard.module.scss';

export const NutritionCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Today’s nutrition</h3>
      <dl className={styles.kcal}>
        <dt>
          <span>1651 </span>kcal
        </dt>
        <dd>2350 kcal</dd>
      </dl>
      <div className={styles.nutritions}>
        <ProgressBar title="Protein" value={31} color="#6C5CE7" />
        <ProgressBar title="Fat" value={3.6} color="#F4B400" />
        <ProgressBar title="Carbs" value={0} color="#339AF0" />
      </div>
    </div>
  );
};
