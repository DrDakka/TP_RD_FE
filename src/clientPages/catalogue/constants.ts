import { PropTags } from '@/shared/api/types';
import { FreeFilters, StaticFilters, type FilterState } from './model/hooks/types';

const defaultState: FilterState = {
  [FreeFilters.SEARCH]: '',
  [StaticFilters.TAG]: null,
  [StaticFilters.PROP]: [] as PropTags[],
  [StaticFilters.PAGE]: 1,
};

export { defaultState };
