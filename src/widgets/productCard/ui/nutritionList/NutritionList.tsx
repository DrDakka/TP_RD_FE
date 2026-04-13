import { CatalogueItem } from '@/shared/api/types';
import { ProgressBar } from '@/shared/ui';
import styles from './nutritionList.module.scss';

type Props = {
  base: CatalogueItem;
  className?: string;
};

/*
  Review: 
    Good component, I will talk to BE to refactor API to receive macronutrients as an array
    Same story about use of data-atribute to cease className prop drilling:)
*/

export const NutritionList: React.FC<Props> = ({ base, className }) => (
  <div className={`${className} ${styles.macrosWrapper}`}>
    <ProgressBar title="Protein" value={base.prot} color="#6C5CE7" />
    <ProgressBar title="Fat" value={base.fat} color="#F4B400" />
    <ProgressBar title="Carbs" value={base.carb} color="#339AF0" />
  </div>
);
