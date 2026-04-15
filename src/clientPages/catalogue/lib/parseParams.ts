import { PropTags, Tags } from '@/shared';
import { type FilterState } from '../model/hooks/types';
import { FreeFilters, StaticFilters } from '../model';

export const parseParams = (params: URLSearchParams): FilterState => ({
  [FreeFilters.SEARCH]: params.get(FreeFilters.SEARCH) ?? '',
  [StaticFilters.TAG]: (params.get(StaticFilters.TAG) as Tags) ?? null,
  [StaticFilters.PROP]: params.getAll(StaticFilters.PROP) as PropTags[],
  [StaticFilters.PAGE]: Number(params.get(StaticFilters.PAGE)) || 1,
});
