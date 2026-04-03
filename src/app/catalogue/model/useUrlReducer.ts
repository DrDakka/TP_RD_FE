'use client';

import { Tags, PropTags } from '@/shared/api/types/product/enums';
import { useReducer } from 'react';
import { SearchParamKey } from '../lib';

export type FilterState = {
  [SearchParamKey.SEARCH]: string;
  [SearchParamKey.TAG]: Tags | null;
  [SearchParamKey.PROP]: PropTags[];
  [SearchParamKey.PAGE]: number;
};

type FilterAction =
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_TAG'; payload: Tags | null }
  | { type: 'SET_PROP'; payload: PropTags[] }
  | { type: 'TOGGLE_PROP'; payload: PropTags }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'RESET_FILTERS' };

const reducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, [SearchParamKey.SEARCH]: action.payload, page: 1 };
    case 'SET_TAG':
      return { ...state, [SearchParamKey.TAG]: action.payload, page: 1 };
    case 'SET_PROP':
      return { ...state, [SearchParamKey.PROP]: action.payload, page: 1 };
    case 'TOGGLE_PROP':
      return {
        ...state,
        [SearchParamKey.PROP]: state[SearchParamKey.PROP].includes(
          action.payload,
        )
          ? state[SearchParamKey.PROP].filter(p => p !== action.payload)
          : [...state[SearchParamKey.PROP], action.payload],
        page: 1,
      };
    case 'SET_PAGE':
      return { ...state, [SearchParamKey.PAGE]: action.payload };
    case 'RESET_FILTERS':
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
