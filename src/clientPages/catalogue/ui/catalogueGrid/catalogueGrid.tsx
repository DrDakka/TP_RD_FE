import { type LoadStatus } from '@/features/loader/useLoader';
import { useFavorite } from '@/features/useFavorite';
import { CatalogueItem } from '@/shared/api/types';
import { ProductCard } from '@/widgets/productCard/ProductCard';

import s from './catalogueGrid.module.scss';
const ItemCard = ({ inc }: { inc: CatalogueItem }) => {
  const { isFavorite, toggle } = useFavorite(inc.id);

  return <ProductCard inc={inc} isFavorite={isFavorite} toggleFav={toggle} />;
};

type Props = {
  items: CatalogueItem[];
  status: LoadStatus;
};

export const CatalogueGrid: React.FC<Props> = ({ items, status }) => {
  return (
    <div className={s.catalogueGrid} data-widget="catalogue-grid">
      {items.length === 0 && status === 'idle' ? (
        <div>No items found</div>
      ) : (
        items.map(item => <ItemCard key={item.id} inc={item} />)
      )}
      {status === 'loading' && <div className={s.overlay}>Loading...</div>}
      {status === 'error' && (
        <div className={`${s.overlay} ${s['overlay--error']}`}>Error</div>
      )}
    </div>
  );
};
