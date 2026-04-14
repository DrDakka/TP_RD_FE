import { PropTags, Tags } from '@/shared';
import {
  FreeFilters,
  StaticFilters,
  type FilterState,
} from '../model/hooks/types';

export const parseParams = (raw: Record<string, string>): FilterState => ({
  [FreeFilters.SEARCH]: raw[FreeFilters.SEARCH] ?? '',
  [StaticFilters.TAG]: (raw[StaticFilters.TAG] as Tags) ?? null,
  [StaticFilters.PROP]:
    (raw[StaticFilters.PROP]?.split(',') as PropTags[]) ?? [],
  [StaticFilters.PAGE]: Number(raw[StaticFilters.PAGE]) || 1,
});
