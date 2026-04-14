import { PropTags, Tags } from '@/shared';
import { FilterState, SearchParamKey } from '../model';

export const parseParams = (raw: Record<string, string>): FilterState => ({
  [SearchParamKey.SEARCH]: raw[SearchParamKey.SEARCH] ?? '',
  [SearchParamKey.TAG]: (raw[SearchParamKey.TAG] as Tags) ?? null,
  [SearchParamKey.PROP]:
    (raw[SearchParamKey.PROP]?.split(',') as PropTags[]) ?? [],
  [SearchParamKey.PAGE]: Number(raw[SearchParamKey.PAGE]) || 1,
});
