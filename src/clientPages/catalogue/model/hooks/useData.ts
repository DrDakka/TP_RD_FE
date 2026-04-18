'use client';

import { clientApi, GetProductsResponse } from '@/shared';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
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
      clientApi.products.list(searchParams.create(state), signal),
    [state],
  );

  const { data, status, reload } = useLoader(loadFn, false, initialData);

  const apply = useCallback(() => {
    const query = searchParams.create(state);
    const currentQuery = new URLSearchParams(window.location.search).toString();

    if (query !== currentQuery) {
      window.history.pushState(null, '', `${pathname}?${query}`);
    }

    reload();
  }, [state, pathname, reload]);

  return {
    data,
    status,
    apply,
  };
};
