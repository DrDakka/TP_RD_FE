import { StaticFilters } from '@/clientPages/catalogue/model';

type RawSearchParams = Record<string, string | string[] | undefined>;

const paramDefaults: Partial<Record<StaticFilters, string>> = {
  [StaticFilters.PAGE]: '1',
};

export const redirectRouter = (params: RawSearchParams): boolean =>
  Object.entries(paramDefaults).some(([key, val]) => params[key] === val);
