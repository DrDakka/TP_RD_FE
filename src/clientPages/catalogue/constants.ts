import { PropTags } from '@/shared/api/types';
import { type FilterState, FreeFilters, StaticFilters } from './model';

const PAGE_SIZE = 10;

const defaultState: FilterState = {
  [FreeFilters.SEARCH]: '',
  [StaticFilters.TAG]: null,
  [StaticFilters.PROP]: [] as PropTags[],
  [StaticFilters.PAGE]: 1,
};

export { defaultState, PAGE_SIZE };
