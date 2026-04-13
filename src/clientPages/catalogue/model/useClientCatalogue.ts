'use client';

import { GetProductsResponse } from '@/shared';
import { useData, useFilters } from './hooks';
import { type FilterState } from './hooks/types';
import { useState } from 'react';
import { View } from '@/shared';

type Args = {
  initialState: FilterState;
  initialData: GetProductsResponse;
};

export const useClientCatalogue = ({ initialState, initialData }: Args) => {
  const { state, searchInput, handlers } = useFilters({ initialState });

  const { data, status, reload } = useData({ state, initialData });

  const { items, count } = data ?? initialData;
  const totalPages = Math.ceil(count / 20);

  const [view, setView] = useState<View>(View.GRID);

  const onView = (arg: View) => {
    setView(arg);
  };

  return {
    state,
    data: { items, count, totalPages, status, searchInput },
    ui: { view, onView },
    handlers,
    reload,
  };
};
