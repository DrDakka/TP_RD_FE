import { PropTags, Tags } from '@/shared';
import {
  FreeFilters,
  StaticFilters,
  type FilterState,
  type FilterAction,
} from '../model';
import { urlReducer } from '../model/hooks/useUrlReducer';

export const normalizeProp = (prop: unknown): PropTags[] => {
  if (Array.isArray(prop)) return prop;
  if (typeof prop === 'string') return [prop as PropTags];

  return [];
};

export const parseParams = (params: URLSearchParams): FilterState => ({
  [FreeFilters.SEARCH]: params.get(FreeFilters.SEARCH) ?? '',
  [StaticFilters.TAG]: (params.get(StaticFilters.TAG) as Tags) ?? null,
  [StaticFilters.PROP]: params.getAll(StaticFilters.PROP) as PropTags[],
  [StaticFilters.PAGE]: Number(params.get(StaticFilters.PAGE)) || 1,
});

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

export const buildFilterUrl = (
  currentState: FilterState,
  actions: FilterAction[],
): string => {
  const nextState = actions.reduce(urlReducer, currentState);
  const query = createSearchParams(nextState);

  return query ? `/catalogue?${query}` : '/catalogue';
};
