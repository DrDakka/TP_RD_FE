'use client';

import { type GetProductsResponse, AsidePanel, useMediaQuery } from '@/shared';
import {
  useClientCatalogue,
  type FilterState,
  FreeFilters,
  StaticFilters,
} from './model';
import { defaultState } from './constants';
import { normalizeProp } from './lib';
import { SearchBar, Filters, CatalogueGrid } from './widgets';
import s from './cataloguePage.module.scss';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { View } from '@/shared';
import { Pagination } from './widgets/pagination/Pagination';

const TAB_BREAKPOINT = 640;
const DSC_BREAKPOINT = '(min-width: 1024px)';

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

  const { state, data, ui, apply, filters, reset, goToPage } =
    useClientCatalogue({
      initialState: init,
      initialData,
    });

  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const isDesktop = useMediaQuery(DSC_BREAKPOINT);

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
  }, []);

  const closeFilters = () => setFiltersExpanded(false);

  const filtersContent = (
    <Filters
      state={state}
      staticFilters={filters.static}
      apply={() => {
        apply();
        closeFilters();
      }}
      reset={reset}
      onClose={closeFilters}
    />
  );

  return (
    <div ref={containerRef} className={classNames(s.container)}>
      {!isDesktop && (
        <AsidePanel open={filtersExpanded} onClose={closeFilters}>
          {filtersContent}
        </AsidePanel>
      )}
      <SearchBar
        query={data.searchInput}
        onQuery={filters.free[FreeFilters.SEARCH]}
        reset={reset}
        view={ui.view}
        onView={ui.onView}
        filtersExpanded={filtersExpanded}
        setFiltersExpanded={() => setFiltersExpanded(prev => !prev)}
      />
      <div className={s.filtersWrapper}>{isDesktop && filtersContent}</div>
      <CatalogueGrid
        items={data.items}
        status={data.status}
        display={ui.view}
        count={data.count}
        onRetry={apply}
      />

      <Pagination
        count={data.count}
        current={state.page}
        handler={goToPage}
        href={idx => filters.static[StaticFilters.PAGE](idx).href()}
      />
    </div>
  );
};
