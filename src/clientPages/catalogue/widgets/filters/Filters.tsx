import { Select } from './static/ui';

import s from './filters.module.scss';
import { FilterState, StaticFilters } from '../../model';
import { staticConfig, StaticFiltersMap } from '.';
import { uiToApi, apiToUi } from './static/mappers';

type Props = {
  state: FilterState;
  staticFilters: StaticFiltersMap;
  apply: () => void;
};

type FilterFn = (a: string) => { handler(): void; href(): string };
type ConfigEntries = [
  keyof typeof staticConfig,
  (typeof staticConfig)[keyof typeof staticConfig],
][];

export const Filters: React.FC<Props> = ({ state, staticFilters, apply }) => {
  const activeMap = {
    [StaticFilters.TAG]: state.tag
      ? [apiToUi[StaticFilters.TAG][state.tag]]
      : [],
    [StaticFilters.PROP]: state.prop.map(p => apiToUi[StaticFilters.PROP][p]),
  };

  return (
    <section className={s.container} data-widget="filters">
      <h2>Filters</h2>
      <div className={s.scrollable}>
        <input type="text" disabled placeholder="Category filter"></input>
        {(Object.entries(staticConfig) as ConfigEntries).map(([key, conf]) => {
          if (conf.type === 'select') {
            return (
              <Select
                key={key}
                label={conf.label}
                list={conf.list}
                multiselect={conf.multiselect}
                onSelect={val =>
                  (staticFilters[key] as FilterFn)(
                    (uiToApi[key] as Record<string, string>)[val],
                  ).handler()
                }
                getHref={val =>
                  (staticFilters[key] as FilterFn)(
                    (uiToApi[key] as Record<string, string>)[val],
                  ).href()
                }
                active={activeMap[key]}
              />
            );
          }

          return null;
        })}
        <button onClick={apply}>Apply filters</button>
      </div>
    </section>
  );
};
