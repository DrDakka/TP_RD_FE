import { PropTags } from '@/shared/api/types';
import { FilterState, SearchParamKey } from './model/hooks/types';

const defaultState: FilterState = {
  [SearchParamKey.SEARCH]: '',
  [SearchParamKey.TAG]: null,
  [SearchParamKey.PROP]: [] as PropTags[],
  [SearchParamKey.PAGE]: 1,
};

export { defaultState };
