'use client';

import { GetProductsResponse } from '@/shared';
import { useData, useFilters } from './hooks';
import { type FilterState } from './hooks/types';
import { useState } from 'react';
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

  return {
    state,
    data: { items, count, status, searchInput },
    ui: { view, onView },
    apply,
    filters,
  };
};
