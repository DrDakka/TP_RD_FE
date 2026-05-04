'use client';

import { api, GetProductsResponse } from '@/shared';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { FilterState } from '..';
import { searchParams } from '../../lib';
import { useLoader } from '@/features';

type Props = {
  state: FilterState;
  initialData: GetProductsResponse;
};

export const useData = ({ state, initialData }: Props) => {
  const pathname = usePathname();

  const loadFn = useCallback(
    (signal: AbortSignal) =>
      api.products.list(searchParams.create(state), signal),
    [state],
  );

  const { data, status, reload } = useLoader(loadFn, false, initialData);

  const apply = () => {
    const query = searchParams.create(state);
    const currentQuery = new URLSearchParams(window.location.search).toString();

    if (query !== currentQuery) {
      window.history.pushState(null, '', `${pathname}?${query}`);
    }

    reload();
  };

  const isFirstSearch = useRef(true);

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = false;

      return;
    }

    apply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.search]);

  return {
    data,
    status,
    apply,
  };
};
