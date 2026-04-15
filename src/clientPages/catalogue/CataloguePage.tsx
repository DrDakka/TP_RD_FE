'use client';

import { type GetProductsResponse } from '@/shared';
import {
  useClientCatalogue,
  type FilterState,
  Core,
  FreeFilters,
} from './model';
import { defaultState } from './constants';
import { normalizeProp } from './lib';
import { SearchBar, Filters, CatalogueGrid } from './widgets';
import s from './cataloguePage.module.scss';

type Props = {
  initialState: Partial<FilterState> | null;
  initialData: GetProductsResponse;
};

export const CataloguePage: React.FC<Props> = ({
  initialState,
  initialData,
}) => {
  const init = {
    ...defaultState,
    ...initialState,
    prop: normalizeProp(initialState?.prop),
  };

  const { state, data, ui, reload, filters } = useClientCatalogue({
    initialState: init,
    initialData,
  });

  return (
    <div className={s.container}>
      <SearchBar
        query={data.searchInput}
        onQuery={filters.free[FreeFilters.SEARCH]}
        reset={filters.base[Core.RESET]}
        view={ui.view}
        onView={ui.onView}
      />
      <Filters state={state} staticFilters={filters.static} />
      <CatalogueGrid
        items={data.items}
        status={data.status}
        display={ui.view}
        count={data.count}
        onRetry={reload}
      />
    </div>
  );
};
