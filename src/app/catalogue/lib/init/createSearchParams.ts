import { FilterState } from '../../model/useUrlReducer';
import { SearchParamKey } from '../constants';

type Handler = (
  inc: FilterState[SearchParamKey],
  params: URLSearchParams,
) => void;

const handlers: Record<SearchParamKey, Handler> = {
  [SearchParamKey.SEARCH]: (inc, params) => {
    if (inc) params.set(SearchParamKey.SEARCH, inc as string);
  },
  [SearchParamKey.TAG]: (inc, params) => {
    if (inc) params.set(SearchParamKey.TAG, inc as string);
  },
  [SearchParamKey.PAGE]: (inc, params) => {
    if ((inc as number) > 1) params.set(SearchParamKey.PAGE, String(inc));
  },
  [SearchParamKey.PROP]: (inc, params) => {
    (inc as string[]).forEach(p => params.append(SearchParamKey.PROP, p));
  },
};

export const createSearchParams = (state: FilterState): string => {
  const params = new URLSearchParams();

  (Object.keys(handlers) as SearchParamKey[]).forEach(key => {
    handlers[key](state[key], params);
  });

  return params.toString();
};
