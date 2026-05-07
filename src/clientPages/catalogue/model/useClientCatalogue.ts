'use client';

import { GetProductsResponse } from '@/shared';
import { useData, useFilters } from './hooks';
import { Core, StaticFilters, type FilterState } from './hooks/types';
import { useEffect, useRef, useState } from 'react';
import { View } from '@/shared';
import { usePopstate } from './hooks/usePopstate';

type Args = {
  initialState: FilterState;
  initialData: GetProductsResponse;
};

export const useClientCatalogue = ({ initialState, initialData }: Args) => {
  const { state, searchInput, filters } = useFilters({
    initialState,
  });

  usePopstate(filters.base.restore);

  const { data, status, apply } = useData({ state, initialData });

  const { items, count } = data ?? initialData;

  const [view, setView] = useState<View>(View.GRID);
  const onView = (arg: View) => setView(arg);

  const pendingApply = useRef(false);

  useEffect(() => {
    if (!pendingApply.current) return;

    pendingApply.current = false;
    apply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const reset = () => {
    filters.base[Core.RESET]();
    pendingApply.current = true;
  };

  const goToPage = (page: number) => {
    filters.static[StaticFilters.PAGE](page).handler();
    pendingApply.current = true;
  };

  return {
    state,
    data: { items, count, status, searchInput },
    ui: { view, onView },
    apply,
    reset,
    goToPage,
    filters,
  };
};
