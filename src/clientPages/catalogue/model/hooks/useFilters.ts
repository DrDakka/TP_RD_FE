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
} from './types';
import { StaticFiltersMap } from '../../widgets/filters';
import { buildFilterUrl } from '../../lib';

type Props = {
  initialState: FilterState;
};

const MIN_QUERY = 4;

export const useFilters = ({ initialState }: Props) => {
  const [state, dispatch] = useUrlReducer(initialState);
  const [searchInput, setSearchInput] = useState(initialState.search ?? '');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pageReset: FilterAction = { type: StaticFilters.PAGE, payload: 1 };

  const commandConfig: Record<keyof StaticArgMap, FilterAction[]> = {
    [StaticFilters.TAG]: [pageReset],
    [StaticFilters.PROP]: [pageReset],
    [StaticFilters.PAGE]: [],
  };

  const freeFilters = {
    [FreeFilters.SEARCH]: (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setSearchInput(value);

      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (value.length < MIN_QUERY && value.length !== 0) return;

      debounceRef.current = setTimeout(() => {
        dispatch({ type: FreeFilters.SEARCH, payload: value });
        dispatch(pageReset);
      }, 300);
    },
  };

  const staticFabric = <T extends keyof StaticArgMap>(filter: T) => {
    return (arg: StaticArgMap[T]) => {
      const conf = { type: filter, payload: arg } as FilterAction;
      const sideEffects = commandConfig[filter];
      const actions = [conf, ...sideEffects];

      return {
        handler: () => actions.forEach(a => dispatch(a)),
        href: () => buildFilterUrl(state, actions),
      };
    };
  };

  const staticFilters = Object.fromEntries(
    Object.values(StaticFilters).map(filter => [filter, staticFabric(filter)]),
  ) as StaticFiltersMap;

  const baseActions = {
    [Core.RESET]: () => {
      setSearchInput('');
      dispatch({ type: Core.RESET });
    },
    [Core.RESTORE]: (s: FilterState) =>
      dispatch({ type: Core.RESTORE, payload: s }),
  };

  const filters = {
    free: freeFilters,
    static: staticFilters,
    base: baseActions,
  };

  return {
    state,
    searchInput,
    filters,
  };
};
