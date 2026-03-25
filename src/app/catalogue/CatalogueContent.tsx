'use client';

import { CatalogueItem } from '@/shared/api/types';
import { useFavorite } from '@/features/useFavorite';
import { ProductCard } from '@/widgets/productCard/ProductCard';
import { useUrlReducer } from './useUrlReducer';
import { Tags, PropTags } from '@/shared/api/types/product/enums';

type Props = {
  items: CatalogueItem[];
};

const ItemCard = ({ inc }: { inc: CatalogueItem }) => {
  const { isFavorite, toggle } = useFavorite(inc.id);

  return <ProductCard inc={inc} isFavorite={isFavorite} toggleFav={toggle} />;
};

export const CatalogueContent = ({ items }: Props) => {
  const [state, dispatch] = useUrlReducer();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'SET_SEARCH', payload: 'test' })}>
        Set search
      </button>
      <button onClick={() => dispatch({ type: 'SET_TAG', payload: Tags.BAL })}>
        Set tag
      </button>
      <button
        onClick={() => dispatch({ type: 'TOGGLE_PROP', payload: PropTags.HP })}
      >
        Toggle hi-prot
      </button>
      <button
        onClick={() => dispatch({ type: 'SET_PAGE', payload: state.page + 1 })}
      >
        Next page
      </button>
      <button onClick={() => dispatch({ type: 'RESET_FILTERS' })}>Reset</button>
      <div>
        {items.map(item => (
          <ItemCard key={item.id} inc={item} />
        ))}
      </div>
    </div>
  );
};
