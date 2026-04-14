'use client';

import { useReducer } from 'react';
import {
  Core,
  FilterAction,
  FilterState,
  FreeFilters,
  StaticFilters,
} from './types';

const urlReducer = (state: FilterState, action: FilterAction): FilterState => {
  const prop = state[StaticFilters.PROP];

  switch (action.type) {
    // Free filters
    case FreeFilters.SEARCH:
      return { ...state, [FreeFilters.SEARCH]: action.payload, page: 1 };

    // Static filters
    case StaticFilters.TAG:
      return {
        ...state,
        [StaticFilters.TAG]:
          state[StaticFilters.TAG] === action.payload ? null : action.payload,
        page: 1,
      };
    case StaticFilters.PROP:
      return {
        ...state,
        [StaticFilters.PROP]: prop.includes(action.payload)
          ? prop.filter(p => p !== action.payload)
          : [...prop, action.payload],
        page: 1,
      };
    case StaticFilters.PAGE:
      return { ...state, [StaticFilters.PAGE]: action.payload };

    // Core func
    case Core.RESET:
      if (
        !state[FreeFilters.SEARCH] &&
        !state[StaticFilters.TAG] &&
        prop.length === 0 &&
        state[StaticFilters.PAGE] === 1
      )
        return state;

      return {
        [FreeFilters.SEARCH]: '',
        [StaticFilters.TAG]: null,
        [StaticFilters.PROP]: [],
        [StaticFilters.PAGE]: 1,
      };
    case Core.RESTORE:
      return { ...action.payload };
  }
};

const useUrlReducer = (initialState: FilterState) => {
  return useReducer(urlReducer, initialState);
};

export { useUrlReducer, urlReducer };
