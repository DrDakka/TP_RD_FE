import { PropTags, Tags } from '@/shared/api/types';

enum SearchParamKey {
  SEARCH = 'search',
  TAG = 'tag',
  PROP = 'prop',
  PAGE = 'page',
}

type FilterState = {
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

export { SearchParamKey, type FilterAction, type FilterState };
