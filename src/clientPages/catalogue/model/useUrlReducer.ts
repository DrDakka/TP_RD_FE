'use client';

import { useReducer } from 'react';
import { type PropTags } from '@/shared';
import { type FilterAction, type FilterState, SearchParamKey } from './types';

const normalizeProp = (prop: unknown): PropTags[] => {
  if (Array.isArray(prop)) return prop;
  if (typeof prop === 'string') return [prop as PropTags];

  return [];
};

const reducer = (state: FilterState, action: FilterAction): FilterState => {
  const prop = normalizeProp(state[SearchParamKey.PROP]);

  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, [SearchParamKey.SEARCH]: action.payload, page: 1 };
    case 'SET_TAG':
      return {
        ...state,
        [SearchParamKey.TAG]:
          state[SearchParamKey.TAG] === action.payload ? null : action.payload,
        page: 1,
      };
    case 'SET_PROP':
      return { ...state, [SearchParamKey.PROP]: action.payload, page: 1 };
    case 'TOGGLE_PROP':
      return {
        ...state,
        [SearchParamKey.PROP]: prop.includes(action.payload)
          ? prop.filter(p => p !== action.payload)
          : [...prop, action.payload],
        page: 1,
      };
    case 'SET_PAGE':
      return { ...state, [SearchParamKey.PAGE]: action.payload };
    case 'RESET_FILTERS':
      if (
        !state[SearchParamKey.SEARCH] &&
        !state[SearchParamKey.TAG] &&
        prop.length === 0 &&
        state[SearchParamKey.PAGE] === 1
      )
        return state;

      return {
        [SearchParamKey.SEARCH]: '',
        [SearchParamKey.TAG]: null,
        [SearchParamKey.PROP]: [],
        [SearchParamKey.PAGE]: 1,
      };
  }
};

export const useUrlReducer = (initialState: FilterState) => {
  return useReducer(reducer, initialState);
};
