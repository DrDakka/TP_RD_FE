import { CatalogueItem } from '@/shared/api/types';
import { ProgressBar } from '@/shared/ui';
import styles from './nutritionList.module.scss';

type Props = {
  base: CatalogueItem;
};
export const NutritionList: React.FC<Props> = ({ base }) => (
  <div className={styles.macrosWrapper}>
    <ProgressBar title="Protein" value={base.prot} color="#6C5CE7" />
    <ProgressBar title="Fat" value={base.fat} color="#F4B400" />
    <ProgressBar title="Carbs" value={base.carb} color="#339AF0" />
  </div>
);
