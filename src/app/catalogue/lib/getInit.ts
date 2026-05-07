import { ValidationError } from '@/shared/errors/ValidationError';
import { val, searchParams } from '@/clientPages/catalogue/lib';
import { type FilterState } from '@/clientPages/catalogue/model';

type RawSearchParams = Record<string, string | string[] | undefined>;

type ParsedSearchParams = {
  initialState: Partial<FilterState> | null;
  query: string;
};

export const getInit = (params: RawSearchParams): ParsedSearchParams => {
  const init: ParsedSearchParams = {
    initialState: null,
    query: '',
  };

  if (!params) {
    return init;
  }

  if (!val.keys(params)) {
    throw new ValidationError(`Invalid param keys: ${params}`);
  }

  if (!val.entr(params)) {
    throw new ValidationError(`Invalid param values: ${params}`);
  }

  const urlParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => urlParams.append(key, v));
    } else if (value !== undefined) {
      urlParams.set(key, value);
    }
  });

  init.initialState = searchParams.parse(urlParams);
  init.query = searchParams.create(init.initialState);

  return init;
};
