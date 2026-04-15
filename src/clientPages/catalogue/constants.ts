import { PropTags } from '@/shared/api/types';
import { type FilterState, FreeFilters, StaticFilters } from './model';

const defaultState: FilterState = {
  [FreeFilters.SEARCH]: '',
  [StaticFilters.TAG]: null,
  [StaticFilters.PROP]: [] as PropTags[],
  [StaticFilters.PAGE]: 1,
};

export { defaultState };
