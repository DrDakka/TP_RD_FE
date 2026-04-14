'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { useUrlReducer } from './useUrlReducer';
import {
  Core,
  FilterAction,
  FilterState,
  FreeFilters,
  StaticArgMap,
  StaticFilters,
  StaticFiltersMap,
} from './types';
import { buildFilterUrl } from '../../lib';

type Props = {
  initialState: FilterState;
};

const MIN_QUERY = 4;

export const useFilters = ({ initialState }: Props) => {
  const [state, dispatch] = useUrlReducer(initialState);
  const [searchInput, setSearchInput] = useState(initialState.search ?? '');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const freeFilters = {
    [FreeFilters.SEARCH]: (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setSearchInput(value);

      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (value.length < MIN_QUERY && value.length !== 0) return;

      debounceRef.current = setTimeout(
        () => dispatch({ type: FreeFilters.SEARCH, payload: value }),
        300,
      );
    },
  };

  const staticFabric = <T extends keyof StaticArgMap>(filter: T) => {
    return (arg: StaticArgMap[T]) => {
      const conf = { type: filter, payload: arg } as FilterAction;

      return {
        handler: () => dispatch(conf),
        href: () => buildFilterUrl(state, conf),
      };
    };
  };

  const staticFilters = Object.fromEntries(
    Object.values(StaticFilters).map(filter => [filter, staticFabric(filter)]),
  ) as StaticFiltersMap;

  const handlers = {
    query: (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setSearchInput(value);

      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (value.length < MIN_QUERY && value.length !== 0) return;

      debounceRef.current = setTimeout(
        () => dispatch({ type: FreeFilters.SEARCH, payload: value }),
        300,
      );
    },
    reset: () => {
      setSearchInput('');
      dispatch({ type: Core.RESET });
    },
  };

  const restore = (state: FilterState) => {
    dispatch({ type: Core.RESTORE, payload: state });
  };

  return {
    state,
    searchInput,
    freeFilters,
    staticFilters,
    handlers,
    restore,
  };
};
