import { PropTagUiLabel, TagUiLabel } from '@/shared';
import { StaticArgMap, StaticFilters } from '@/clientPages/catalogue/model';

type StaticFilterEntry<T extends keyof StaticArgMap> = (
  arg: StaticArgMap[T],
) => { handler: () => void; href: () => string };

type StaticFiltersMap = {
  [K in keyof StaticArgMap]: StaticFilterEntry<K>;
};

type UiArgMap = {
  [StaticFilters.TAG]: TagUiLabel;
  [StaticFilters.PROP]: PropTagUiLabel;
};

type StaticDDEntry<T extends string> = {
  label: string;
  list: T[];
  multiselect: boolean;
};

type StaticDDs = {
  [K in Exclude<StaticFilters, StaticFilters.PAGE>]: StaticDDEntry<UiArgMap[K]>;
};

export type {
  StaticArgMap,
  StaticFilterEntry,
  StaticFiltersMap,
  UiArgMap,
  StaticDDEntry,
  StaticDDs,
};
