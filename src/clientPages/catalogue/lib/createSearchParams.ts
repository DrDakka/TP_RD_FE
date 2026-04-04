import {
  type FilterState,
  SearchParamKey,
} from '@/clientPages/catalogue/model/types';

type Handlers = {
  [K in SearchParamKey]: (
    inc: FilterState[K] | undefined,
    params: URLSearchParams,
  ) => void;
};

const handlers: Handlers = {
  [SearchParamKey.SEARCH]: (inc, params) => {
    if (inc) params.set(SearchParamKey.SEARCH, inc);
  },
  [SearchParamKey.TAG]: (inc, params) => {
    if (inc) params.set(SearchParamKey.TAG, String(inc));
  },
  [SearchParamKey.PAGE]: (inc, params) => {
    if (inc && inc > 1) params.set(SearchParamKey.PAGE, String(inc));
  },
  [SearchParamKey.PROP]: (inc, params) => {
    inc?.forEach(p => params.append(SearchParamKey.PROP, String(p)));
  },
};

const applyHandler = <K extends SearchParamKey>(
  key: K,
  state: Partial<FilterState>,
  params: URLSearchParams,
) => {
  handlers[key](state[key], params);
};

export const createSearchParams = (state: Partial<FilterState>): string => {
  const params = new URLSearchParams();

  (Object.keys(handlers) as SearchParamKey[]).forEach(key =>
    applyHandler(key, state, params),
  );

  return params.toString();
};
