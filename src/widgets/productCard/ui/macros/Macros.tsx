import { CatalogueItem } from '@/shared/api/types';

type Props = {
  base: CatalogueItem;
};
export const Macros: React.FC<Props> = ({ base }) => (
  <>
    <p>
      <strong>{base.cal}</strong> kcal / 100g
    </p>
    <span>{base.tag}</span>
    <ul>
      {base.properties.map(prop => (
        <li key={prop}>{prop}</li>
      ))}
    </ul>
    <dl>
      <dt>Protein</dt>
      <dd>{base.prot}g</dd>
      <dt>Fat</dt>
      <dd>{base.fat}g</dd>
      <dt>Carbs</dt>
      <dd>{base.carb}g</dd>
    </dl>
  </>
);
