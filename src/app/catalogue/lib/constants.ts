import { PropTags } from '@/shared/api/types';
import { FilterState } from '../model/useUrlReducer';

export enum SearchParamKey {
  SEARCH = 'search',
  TAG = 'tag',
  PROP = 'prop',
  PAGE = 'page',
}

export const defaultState: FilterState = {
  [SearchParamKey.SEARCH]: '',
  [SearchParamKey.TAG]: null,
  [SearchParamKey.PROP]: [] as PropTags[],
  [SearchParamKey.PAGE]: 1,
};
