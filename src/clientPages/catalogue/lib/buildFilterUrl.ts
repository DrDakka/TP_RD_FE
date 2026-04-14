import { FilterAction, FilterState } from '../model';
import { urlReducer } from '../model/hooks/useUrlReducer';
import { createSearchParams } from './createSearchParams';

export const buildFilterUrl = (
  currentState: FilterState,
  action: FilterAction,
): string => {
  const nextState = urlReducer(currentState, action);
  const query = createSearchParams(nextState);

  return query ? `/catalogue?${query}` : '/catalogue';
};
