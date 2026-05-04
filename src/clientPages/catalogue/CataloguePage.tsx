'use client';

import { type GetProductsResponse } from '@/shared';
import { useClientCatalogue, type FilterState, FreeFilters } from './model';
import { defaultState } from './constants';
import { normalizeProp } from './lib';
import { SearchBar, Filters, CatalogueGrid } from './widgets';
import s from './cataloguePage.module.scss';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { View } from '@/shared';

const TAB_BREAKPOINT = 640;

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

  const { state, data, ui, apply, filters, reset } = useClientCatalogue({
    initialState: init,
    initialData,
  });

  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const expandFilters = () => setFiltersExpanded(prev => !prev);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width < TAB_BREAKPOINT) {
        ui.onView(View.GRID);
      }
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [ui]);

  return (
    <div
      ref={containerRef}
      className={classNames(s.container, {
        [s['container--filters-open']]: filtersExpanded,
      })}
    >
      <SearchBar
        query={data.searchInput}
        onQuery={filters.free[FreeFilters.SEARCH]}
        reset={reset}
        view={ui.view}
        onView={ui.onView}
        filtersExpanded={filtersExpanded}
        setFiltersExpanded={expandFilters}
      />
      {filtersExpanded && (
        <div
          className={s.filtersBackdrop}
          aria-hidden
          onClick={() => {
            apply();
            setFiltersExpanded(false);
          }}
        />
      )}
      <div className={s.filtersWrapper}>
        <Filters
          state={state}
          staticFilters={filters.static}
          apply={apply}
          reset={reset}
          onClose={() => setFiltersExpanded(false)}
        />
      </div>
      <CatalogueGrid
        items={data.items}
        status={data.status}
        display={ui.view}
        count={data.count}
        onRetry={apply}
      />
      <div className={s.spacer} aria-hidden />
    </div>
  );
};
