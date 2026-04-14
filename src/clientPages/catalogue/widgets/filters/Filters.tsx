import {
  type PropTagUiLabel,
  type TagUiLabel,
  uiToApi,
  apiToUi,
} from '@/shared';
import { DropDown } from './ui';

import s from './filters.module.scss';
import { FilterState, StaticFiltersMap } from '../../model';
import { StaticFilters } from '../../model/hooks';

type Props = {
  state: FilterState;
  staticFilters: StaticFiltersMap;
};

export const Filters: React.FC<Props> = ({ state, staticFilters }) => {
  const tags = Object.keys(uiToApi.tag) as TagUiLabel[];
  const propTags = Object.keys(uiToApi.propTag) as PropTagUiLabel[];

  const activeTag = state.tag ? [apiToUi.tag[state.tag]] : [];
  const activePropTags = state.prop.map(p => apiToUi.propTag[p]);

  return (
    <section className={s.container} data-widget="filters">
      <h2>Filters</h2>
      <div className={s.scrollable}>
        <input type="text" disabled placeholder="Category filter"></input>
        <DropDown
          label={'Tags filter'}
          list={tags}
          multiselect={false}
          onSelect={uiKey =>
            staticFilters[StaticFilters.TAG](uiToApi.tag[uiKey]).handler()
          }
          active={activeTag}
          getHref={uiKey =>
            staticFilters[StaticFilters.TAG](uiToApi.tag[uiKey]).href()
          }
        />
        <DropDown
          label={'Property filter'}
          list={propTags}
          multiselect={true}
          onSelect={uiKey =>
            staticFilters[StaticFilters.PROP](uiToApi.propTag[uiKey]).handler()
          }
          active={activePropTags}
          getHref={uiKey =>
            staticFilters[StaticFilters.PROP](uiToApi.propTag[uiKey]).href()
          }
        />
      </div>
    </section>
  );
};
