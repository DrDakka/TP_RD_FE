import { type LoadStatus } from '@/features';
import { CatalogueItem } from '@/shared';
import { ProductCard } from '@/widgets';

import s from './catalogueGrid.module.scss';
import { View } from '../../model';
import { StatusItem } from './ui';

type Props = {
  items: CatalogueItem[];
  status: LoadStatus;
  display: View;
  count: number;
  onRetry: () => void;
};

const viewClass = {
  [View.GRID]: s.catalogueGrid,
  [View.LIST]: s.catalogueList,
};

export const CatalogueGrid: React.FC<Props> = ({
  items,
  status,
  display,
  count,
  onRetry,
}) => {
  return (
    <section
      aria-label="product list"
      className={s.container}
      data-widget="catalogue"
    >
      <span className={s.count}>{`${count} results`}</span>
      <ul className={`${viewClass[display]} ${s.catalogue}`}>
        <StatusItem stat={status} onRetry={onRetry} />

        {items.map(el => (
          <ProductCard key={el.id} inc={el} variant={display} />
        ))}
      </ul>
    </section>
  );
};
