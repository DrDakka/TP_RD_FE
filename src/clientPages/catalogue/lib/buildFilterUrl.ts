import { FilterAction, FilterState } from '../model';
import { urlReducer } from '../model/hooks/useUrlReducer';
import { createSearchParams } from './createSearchParams';

export const buildFilterUrl = (
  currentState: FilterState,
  actions: FilterAction[],
): string => {
  const nextState = actions.reduce(urlReducer, currentState);
  const query = createSearchParams(nextState);

  return query ? `/catalogue?${query}` : '/catalogue';
};
