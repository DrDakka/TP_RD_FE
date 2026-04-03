'use client';

import { CatalogueItem, GetProductsResponse } from '@/shared/api/types';
import { useFavorite } from '@/features/useFavorite';
import { LoadStatus } from '@/features/loader/useLoader';
import { ProductCard } from '@/widgets/productCard/ProductCard';
import { FilterState } from '../model/useUrlReducer';
import { useClientCatalogue } from '../model/useClientCatalogue';
import { Tags, PropTags } from '@/shared/api/types/product/enums';

type Props = {
  initialState: FilterState;
  initialData: GetProductsResponse;
};

const ItemCard = ({ inc }: { inc: CatalogueItem }) => {
  const { isFavorite, toggle } = useFavorite(inc.id);

  return <ProductCard inc={inc} isFavorite={isFavorite} toggleFav={toggle} />;
};

export const ClientPage: React.FC<Props> = ({ initialState, initialData }) => {
  const { state, dispatch, data } = useClientCatalogue({
    initialState,
    initialData,
  });

  if (data === 'loading') return <div>Loading...</div>;
  if (data === 'error') return <div>Error</div>;

  const { items, count } = data as GetProductsResponse;
  const totalPages = Math.ceil(count / 20);

  return (
    <main>
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
      <button onClick={() => dispatch({ type: 'RESET_FILTERS' })}>Reset</button>
      <div>
        {items.map(item => (
          <ItemCard key={item.id} inc={item} />
        ))}
      </div>
      <div>
        <button
          disabled={state.page <= 1}
          onClick={() =>
            dispatch({ type: 'SET_PAGE', payload: state.page - 1 })
          }
        >
          &lt;
        </button>
        <span>
          {state.page} / {totalPages}
        </span>
        <button
          disabled={state.page >= totalPages}
          onClick={() =>
            dispatch({ type: 'SET_PAGE', payload: state.page + 1 })
          }
        >
          &gt;
        </button>
      </div>
    </main>
  );
};
