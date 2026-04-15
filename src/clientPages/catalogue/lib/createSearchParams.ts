import { type FilterState } from '@/clientPages/catalogue/model/hooks/types';
import { FreeFilters, StaticFilters } from '@/clientPages/catalogue/model';

type Handlers = {
  [K in keyof FilterState]: (
    inc: FilterState[K] | undefined,
    params: URLSearchParams,
  ) => void;
};

const handlers: Handlers = {
  [FreeFilters.SEARCH]: (inc, params) => {
    if (inc) params.set(FreeFilters.SEARCH, inc);
  },
  [StaticFilters.TAG]: (inc, params) => {
    if (inc) params.set(StaticFilters.TAG, String(inc));
  },
  [StaticFilters.PAGE]: (inc, params) => {
    if (inc && inc > 1) params.set(StaticFilters.PAGE, String(inc));
  },
  [StaticFilters.PROP]: (inc, params) => {
    const arr = Array.isArray(inc) ? inc : inc ? [inc] : [];

    arr.forEach(p => params.append(StaticFilters.PROP, String(p)));
  },
};

const applyHandler = <K extends keyof FilterState>(
  key: K,
  state: Partial<FilterState>,
  params: URLSearchParams,
) => {
  handlers[key](state[key], params);
};

export const createSearchParams = (state: Partial<FilterState>): string => {
  const params = new URLSearchParams();

  (Object.keys(handlers) as Array<keyof FilterState>).forEach(key =>
    applyHandler(key, state, params),
  );

  return params.toString();
};
