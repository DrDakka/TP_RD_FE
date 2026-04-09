import { type LoadStatus } from '@/features/loader/useLoader';
import { CatalogueItem } from '@/shared/api/types';
import { ProductCard } from '@/widgets/productCard/ProductCard';

import s from './catalogueGrid.module.scss';
import { View } from '../../model';

type Props = {
  items: CatalogueItem[];
  status: LoadStatus;
  display: View;
};

export const CatalogueGrid: React.FC<Props> = ({ items, status, display }) => {
  return (
    <div className={s.catalogueGrid} data-widget="catalogue-grid">
      {items.length === 0 && status === 'idle' ? (
        <div>No items found</div>
      ) : (
        items.map(item => (
          <ProductCard key={item.id} inc={item} variant={display} />
        ))
      )}
      {status === 'loading' && <div className={s.overlay}>Loading...</div>}
      {status === 'error' && (
        <div className={`${s.overlay} ${s['overlay--error']}`}>Error</div>
      )}
    </div>
  );
};
