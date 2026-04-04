'use client';

import { type GetProductsResponse } from '@/shared/api/types';
import { Tags, PropTags } from '@/shared/api/types/product/enums';
import { useClientCatalogue, type FilterState } from './model';
import { defaultState } from './constants';
import { SearchBar } from './ui/searchBar/SearchBar';
import { CatalogueGrid } from './ui/catalogueGrid/catalogueGrid';
import { Filters } from './ui/filters/filters';

type Props = {
  initialState: Partial<FilterState> | null;
  initialData: GetProductsResponse;
};

export const CataloguePage: React.FC<Props> = ({
  initialState,
  initialData,
}) => {
  const { state, dispatch, data, status, hndl, searchInput } =
    useClientCatalogue({
      initialState: { ...defaultState, ...initialState },
      initialData,
    });

  const { items, count } = data ?? initialData;
  const totalPages = Math.ceil(count / 20);

  return (
    <div>
      <SearchBar query={searchInput} onQuery={hndl.query} reset={hndl.reset} />
      <Filters
        tag={state.tag}
        prop={state.prop}
        onSetTag={(tag: Tags | null) =>
          dispatch({ type: 'SET_TAG', payload: tag })
        }
        onToggleProp={(prop: PropTags) =>
          dispatch({ type: 'TOGGLE_PROP', payload: prop })
        }
      />
      <CatalogueGrid items={items} status={status} />

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
    </div>
  );
};
