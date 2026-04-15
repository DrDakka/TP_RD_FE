import {
  propTagApiToUi,
  propTagUiToApi,
  tagApiToUi,
  tagUiToApi,
} from '@/shared';
import { StaticArgMap, StaticFilters } from '@/clientPages/catalogue/model';
import { UiArgMap } from './types';

type ApiToUiMap = {
  [K in keyof UiArgMap]: Record<StaticArgMap[K], UiArgMap[K]>;
};

type UiToApiMap = {
  [K in keyof UiArgMap]: Record<UiArgMap[K], StaticArgMap[K]>;
};

const apiToUi: ApiToUiMap = {
  [StaticFilters.TAG]: tagApiToUi,
  [StaticFilters.PROP]: propTagApiToUi,
};

const uiToApi: UiToApiMap = {
  [StaticFilters.TAG]: tagUiToApi,
  [StaticFilters.PROP]: propTagUiToApi,
};

export { apiToUi, uiToApi };
