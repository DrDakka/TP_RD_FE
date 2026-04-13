import {
  type FilterState,
  SearchParamKey,
} from '@/clientPages/catalogue/model/hooks/types';
import { PropTags, Tags } from '@/shared/api/types';

const VALID_TAGS = new Set<string>(Object.values(Tags));
const VALID_PROPS = new Set<string>(Object.values(PropTags));
const SEARCH_FORBIDDEN = /[#${}[\]!><?]/;

export const valFields: Record<SearchParamKey, (inc: unknown) => boolean> = {
  [SearchParamKey.SEARCH]: (inc: unknown): inc is string =>
    typeof inc === 'string' && inc.length <= 40 && !SEARCH_FORBIDDEN.test(inc),

  [SearchParamKey.TAG]: (inc: unknown): inc is Tags =>
    typeof inc === 'string' && VALID_TAGS.has(inc),

  [SearchParamKey.PROP]: (inc: unknown): inc is PropTags | PropTags[] =>
    Array.isArray(inc)
      ? inc.every(p => VALID_PROPS.has(p))
      : typeof inc === 'string' && VALID_PROPS.has(inc),

  [SearchParamKey.PAGE]: (inc: unknown): inc is number =>
    typeof inc === 'string' && Number.isInteger(+inc) && +inc >= 0,
};

const val = {
  keys: (
    inc: unknown,
  ): inc is Record<Partial<SearchParamKey>, string | string[]> => {
    if (typeof inc !== 'object' || inc === null || Array.isArray(inc)) {
      return false;
    }

    const keys = Object.keys(inc);
    const allowedKeys = new Set<string>(Object.values(SearchParamKey));

    if (keys.some(el => !allowedKeys.has(el))) {
      return false;
    }

    return true;
  },
  entr: (
    inc: Partial<Record<SearchParamKey, unknown>>,
  ): inc is Partial<FilterState> => {
    const keys = Object.keys(inc);

    return keys.every(el =>
      valFields[el as SearchParamKey](inc[el as SearchParamKey]),
    );
  },
};

export { val };
