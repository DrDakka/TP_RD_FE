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

type SelectDDEntry<T extends string> = {
  type: 'select';
  title: string;
  label: string;
  list: T[];
  multiselect: boolean;
};

type RangeDDEntry = {
  type: 'range';
  title: string;
  label: string;
  min: number;
  max: number;
};

type StaticDDEntry<T extends string> = SelectDDEntry<T> | RangeDDEntry;

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
