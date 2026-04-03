import { FilterState } from '../../model/useUrlReducer';
import { defaultState } from '../constants';
import { ValidationError } from '../ValidationError';
import { val } from './valSearchParam';
import { createSearchParams } from './createSearchParams';

type RawSearchParams = Record<string, string | string[] | undefined>;

type ParsedSearchParams = {
  initialState: FilterState;
  query: string;
};

export const getInit = (params: RawSearchParams): ParsedSearchParams => {
  const init = {
    initialState: defaultState,
    query: '',
  };

  if (!params) {
    return init;
  }

  if (!val.keys(params)) {
    throw new ValidationError();
  }

  if (!val.entr(params)) {
    throw new ValidationError();
  }

  init.initialState = { ...defaultState, ...params };
  init.query = createSearchParams(init.initialState);

  return init;
};
