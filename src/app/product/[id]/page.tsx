import { api } from '@/shared';
import { notFound } from 'next/navigation';
import styles from '@/shared/styles/layout/layout.module.scss';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const number = +id;

  if (!number || isNaN(number)) {
    notFound();
  }

  const { item, micro } = await api.products.byId(number);

  return (
    <div className={`${styles.container}`}>
      <h1>{item.name}</h1>
      <span>{item.id}</span>
      <span>{item.tag}</span>
      {item.properties.map(el => (
        <span key={el}>{el}</span>
      ))}
      <dl>
        <dt>Calories</dt>
        <dd>{item.cal}</dd>
        <dt>Protein</dt>
        <dd>{item.prot}</dd>
        <dt>Fats</dt>
        <dd>{item.fat}</dd>
        <dt>Carbohydrates</dt>
        <dd>{item.carb}</dd>
      </dl>

      <dl>
        {micro.map(el => {
          if (!(el.amount === 0)) {
            return (
              <div key={el.name}>
                <dt>{el.name}</dt>
                <dd>{`${el.amount} ${el.unit}`}</dd>
              </div>
            );
          }
        })}
      </dl>
    </div>
  );
}
