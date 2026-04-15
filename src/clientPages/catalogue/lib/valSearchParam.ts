import { type FilterState } from '@/clientPages/catalogue/model/hooks/types';
import { PropTags, Tags } from '@/shared/api/types';
import { FreeFilters, StaticFilters } from '@/clientPages/catalogue/model';

const VALID_TAGS = new Set<string>(Object.values(Tags));
const VALID_PROPS = new Set<string>(Object.values(PropTags));
const SEARCH_FORBIDDEN = /[#${}[\]!><?]/;

type FilterKey = keyof FilterState;

export const valFields: Record<FilterKey, (inc: unknown) => boolean> = {
  [FreeFilters.SEARCH]: (inc: unknown): inc is string =>
    typeof inc === 'string' && inc.length <= 40 && !SEARCH_FORBIDDEN.test(inc),

  [StaticFilters.TAG]: (inc: unknown): inc is Tags =>
    typeof inc === 'string' && VALID_TAGS.has(inc),

  [StaticFilters.PROP]: (inc: unknown): inc is PropTags | PropTags[] =>
    Array.isArray(inc)
      ? inc.every(p => VALID_PROPS.has(p))
      : typeof inc === 'string' && VALID_PROPS.has(inc),

  [StaticFilters.PAGE]: (inc: unknown): inc is number =>
    typeof inc === 'string' && Number.isInteger(+inc) && +inc >= 0,
};

const allowedKeys = new Set<string>([
  ...Object.values(FreeFilters),
  ...Object.values(StaticFilters),
]);

const val = {
  keys: (inc: unknown): inc is Record<FilterKey, string | string[]> => {
    if (typeof inc !== 'object' || inc === null || Array.isArray(inc)) {
      return false;
    }

    return Object.keys(inc).every(el => allowedKeys.has(el));
  },
  entr: (
    inc: Partial<Record<FilterKey, unknown>>,
  ): inc is Partial<FilterState> => {
    const keys = Object.keys(inc);

    return keys.every(el => valFields[el as FilterKey](inc[el as FilterKey]));
  },
};

export { val };
