'use client';

import { useCallback, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { clientApi } from '@/shared/api/clientApi';
import { GetProductsResponse } from '@/shared/api/types';
import { useLoader } from '@/features/loader/useLoader';
import { createSearchParams } from '../lib/init/createSearchParams';
import { FilterState, useUrlReducer } from './useUrlReducer';

type Args = {
  initialState: FilterState;
  initialData: GetProductsResponse;
};

export const useClientCatalogue = ({ initialState, initialData }: Args) => {
  const [state, dispatch] = useUrlReducer(initialState);
  const pathname = usePathname();
  const isFirst = useRef(true);

  const loadFn = useCallback(
    (signal: AbortSignal) =>
      clientApi.products.list(createSearchParams(state), signal),
    [state],
  );

  const { data, reload, abort } = useLoader(loadFn, false, initialData);
  const reloadRef = useRef(reload);
  const abortRef = useRef(abort);

  useEffect(() => {
    reloadRef.current = reload;
    abortRef.current = abort;
  }, [reload, abort]);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;

      return;
    }

    const query = createSearchParams(state);

    window.history.pushState(null, '', `${pathname}?${query}`);
    reloadRef.current();

    return () => abortRef.current();
  }, [state, pathname]);

  return { state, dispatch, data };
};
