import { PropTags, Tags } from '@/shared/api/types';

// Free - no href (query, sliders)
// Static - have href (dropdowns, selects)
// Core - base reducer actions

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

export { Core, FreeFilters, StaticFilters };
export type { FilterAction, FilterState, FreeArgMap, StaticArgMap };
