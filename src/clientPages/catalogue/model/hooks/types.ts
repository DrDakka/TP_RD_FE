import { PropTags, Tags } from '@/shared/api/types';

// Free - does not have HREF, static - have;
// Core - reducer actions

enum FreeFilters {
  SEARCH = 'search',
}
enum StaticFilters {
  TAG = 'tag',
  PROP = 'prop',
  PAGE = 'page',
}

enum Core {
  RESET = 'reset',
  RESTORE = 'restore',
}

type FreeArgMap = {
  [FreeFilters.SEARCH]: string;
};

type StaticArgMap = {
  [StaticFilters.TAG]: Tags;
  [StaticFilters.PROP]: PropTags;
  [StaticFilters.PAGE]: number;
};

type ArgMap = {
  [Core.RESTORE]: FilterState;
};

type FilterState = {
  [FreeFilters.SEARCH]: string;
  [StaticFilters.TAG]: Tags | null;
  [StaticFilters.PROP]: PropTags[];
  [StaticFilters.PAGE]: number;
};

type ActionMap = FreeArgMap & StaticArgMap & ArgMap;

type Payloadless = { type: Core.RESET };

type FilterAction =
  | {
      [K in keyof ActionMap]: {
        type: K;
        payload: ActionMap[K];
      };
    }[keyof ActionMap]
  | Payloadless;

type StaticFilterEntry<T extends keyof StaticArgMap> = (
  arg: StaticArgMap[T],
) => { handler: () => void; href: () => string };

type StaticFiltersMap = {
  [K in keyof StaticArgMap]: StaticFilterEntry<K>;
};

export {
  Core,
  FreeFilters,
  StaticFilters,
  type FilterAction,
  type FilterState,
  type StaticArgMap,
  type StaticFiltersMap,
};
