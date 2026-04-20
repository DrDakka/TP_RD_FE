import { PropTagUiLabel, TagUiLabel } from '@/shared';
import { StaticFilters } from '@/clientPages/catalogue/model';
import { StaticDDs } from './types';
import { uiToApi } from './mappers';

const staticConfig: StaticDDs = {
  [StaticFilters.TAG]: {
    type: 'select',
    label: 'Tags filter',
    list: Object.keys(uiToApi[StaticFilters.TAG]) as TagUiLabel[],
    multiselect: false,
  },
  [StaticFilters.PROP]: {
    type: 'select',
    label: 'Property filter',
    list: Object.keys(uiToApi[StaticFilters.PROP]) as PropTagUiLabel[],
    multiselect: true,
  },
};

export { staticConfig };
