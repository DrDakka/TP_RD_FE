'use client';

import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  clientApi,
  GetProductsResponse,
  type Tags,
  type PropTags,
} from '@/shared';
import { useLoader } from '@/features/loader/useLoader';
import { useUrlReducer } from './useUrlReducer';
import { type FilterState } from './types';
import { createSearchParams } from '@/clientPages/catalogue/lib';

type Args = {
  initialState: FilterState;
  initialData: GetProductsResponse;
};

export const useClientCatalogue = ({ initialState, initialData }: Args) => {
  const [state, dispatch] = useUrlReducer(initialState);
  const [searchInput, setSearchInput] = useState(initialState.search ?? '');
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
    debounce: null as ReturnType<typeof setTimeout> | null,
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

    window.history.pushState(null, '', `${pathname}?${query}`);
    reload();

    return () => abort();
  }, [state, pathname]);

  const hndl = {
    query: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
      const value = e.target.value;

      setSearchInput(value);

      if (refs.current.debounce) clearTimeout(refs.current.debounce);

      if (value.length < 4 && value.length !== 0) return;

      refs.current.debounce = setTimeout(
        () => dispatch({ type: 'SET_SEARCH', payload: value }),
        300,
      );
    },
    tag: (arg: Tags) => {
      dispatch({ type: 'SET_TAG', payload: arg });
    },
    propTag: (arg: PropTags) => {
      dispatch({ type: 'TOGGLE_PROP', payload: arg });
    },

    reset: () => {
      setSearchInput('');
      dispatch({ type: 'RESET_FILTERS' });
    },
  };

  const activeFilters = {
    tag: state.tag,
    propTag: state.prop,
  };

  return { state, dispatch, data, status, hndl, searchInput, activeFilters };
};
