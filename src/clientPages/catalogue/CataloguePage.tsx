'use client';

import { type GetProductsResponse } from '@/shared';
import { useClientCatalogue, type FilterState } from './model';
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
  const { state, data, ui, handlers, reload } = useClientCatalogue({
    initialState: init,
    initialData,
  });

  return (
    <div className={s.container}>
      <SearchBar
        query={data.searchInput}
        onQuery={handlers.query}
        reset={handlers.reset}
        view={ui.view}
        onView={ui.onView}
      />
      <Filters
        tagHandler={handlers.tag}
        propTagHandler={handlers.propTag}
        state={state}
      />
      <CatalogueGrid
        items={data.items}
        status={data.status}
        display={ui.view}
        count={data.count}
        onRetry={reload}
      />

      <div>
        <button disabled={state.page <= 1} onClick={() => handlers.page(1)}>
          &lt;
        </button>
        <span>
          {state.page} / {data.totalPages}
        </span>
        <button
          disabled={state.page >= data.totalPages}
          onClick={() => handlers.page(1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
