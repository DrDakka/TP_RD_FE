'use client';

import { clientApi, GetProductsResponse } from '@/shared';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { FilterState } from '..';
import { createSearchParams } from '../../lib';
import { useLoader } from '@/features';

type Props = {
  state: FilterState;
  initialData: GetProductsResponse;
};

export const useData = ({ state, initialData }: Props) => {
  const pathname = usePathname();
  const isFirst = useRef(true);

  const loadFn = useCallback(
    (signal: AbortSignal) =>
      clientApi.products.list(createSearchParams(state), signal),
    [state],
  );

  const { data, status, reload, abort } = useLoader(loadFn, false, initialData);

  const refs = useRef({
    reload,
    abort,
  });

  useEffect(() => {
    refs.current.reload = reload;
    refs.current.abort = abort;
  }, [reload, abort]);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;

      return;
    }

    const { reload, abort } = refs.current;
    const query = createSearchParams(state);

    const currentQuery = new URLSearchParams(window.location.search).toString();

    if (query !== currentQuery) {
      window.history.pushState(null, '', `${pathname}?${query}`);
    }

    reload();

    return () => abort();
  }, [state, pathname]);

  return {
    data,
    status,
    reload,
  };
};
