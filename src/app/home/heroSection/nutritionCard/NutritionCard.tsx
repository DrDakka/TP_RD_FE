import { ProgressBar } from '@/shared';
import styles from './nutritionCard.module.scss';

/*
  adding '/' without span l.17 makes structure invalid.
  It is better to render it as pseudoelement here
*/

export const NutritionCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Today’s nutrition</h3>
      <dl className={styles.kcal}>
        <dt>
          <span>1651 </span>kcal
        </dt>
        /<dd>100g</dd>
      </dl>
      <div className={styles.nutritions}>
        <ProgressBar title="Protein" value={31} color="#6C5CE7" />
        <ProgressBar title="Fat" value={3.6} color="#F4B400" />
        <ProgressBar title="Carbs" value={0} color="#339AF0" />
      </div>
    </div>
  );
};
