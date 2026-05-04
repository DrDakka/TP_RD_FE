'use client';

import { GetProductsResponse } from '@/shared';
import { useData, useFilters } from './hooks';
import { Core, type FilterState } from './hooks/types';
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

  const isFirstSearch = useRef(true);

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = false;

      return;
    }

    apply();
    // apply changes with state, but we only want to trigger on search change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.search]);

  const reset = () => {
    filters.base[Core.RESET]();
    pendingReset.current = true;
  };

  return {
    state,
    data: { items, count, status, searchInput },
    ui: { view, onView },
    apply,
    reset,
    filters,
  };
};
