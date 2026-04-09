'use client';

import { useState } from 'react';
import { type GetProductsResponse } from '@/shared';
import { useClientCatalogue, View, type FilterState } from './model';
import { defaultState } from './constants';
import { SearchBar, Filters } from './widgets';
import { CatalogueGrid } from './ui/catalogueGrid/catalogueGrid';
import s from './cataloguePage.module.scss';

type Props = {
  initialState: Partial<FilterState> | null;
  initialData: GetProductsResponse;
};

export const CataloguePage: React.FC<Props> = ({
  initialState,
  initialData,
}) => {
  const { state, dispatch, data, status, hndl, searchInput, activeFilters } =
    useClientCatalogue({
      initialState: { ...defaultState, ...initialState },
      initialData,
    });

  const { items, count } = data ?? initialData;
  const totalPages = Math.ceil(count / 20);

  const [view, setView] = useState<View>(View.GRID);
  const onView = (arg: View) => {
    setView(arg);
  };

  return (
    <div className={s.container}>
      <SearchBar
        query={searchInput}
        onQuery={hndl.query}
        reset={hndl.reset}
        view={view}
        onView={onView}
      />
      <Filters
        tagHandler={hndl.tag}
        propTagHandler={hndl.propTag}
        active={activeFilters}
      />
      <CatalogueGrid items={items} status={status} display={view} />

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
