import { RangeSlider, Select } from './static/ui';
import { CategoryFilter } from './categoryFilter';

import s from './filters.module.scss';
import { FilterState, StaticFilters } from '../../model';
import { staticConfig, StaticFiltersMap } from '.';
import { uiToApi, apiToUi } from './static/mappers';
import { IconChevron, IconCheck, IconRefresh } from '@/shared';

type Props = {
  state: FilterState;
  staticFilters: StaticFiltersMap;
  apply: () => void;
  reset: () => void;
  onClose: () => void;
};

type FilterFn = (a: string) => { handler(): void; href(): string };
type ConfigEntries = [
  keyof typeof staticConfig,
  (typeof staticConfig)[keyof typeof staticConfig],
][];

export const Filters: React.FC<Props> = ({
  state,
  staticFilters,
  apply,
  reset,
  onClose,
}) => {
  const activeMap = {
    [StaticFilters.TAG]: state.tag
      ? [apiToUi[StaticFilters.TAG][state.tag]]
      : [],
    [StaticFilters.PROP]: state.prop.map(p => apiToUi[StaticFilters.PROP][p]),
  };

  return (
    <section className={s.backdrop} data-widget="filters">
      <h2>Filters</h2>
      <button className={s.close} onClick={onClose} aria-label="Close filters">
        <IconChevron direction="left" />
      </button>
      <div className={s.actions}>
        <button className={s.apply} onClick={apply}>
          <IconCheck />
          <span>Apply Filters</span>
        </button>
        <button className={s.reset} onClick={reset} aria-label="Reset filters">
          <IconRefresh />
        </button>
      </div>
      <div className={s.scrollable}>
        <div className={s.filterGroup}>
          <p className={s.filterTitle}>Category</p>
          <CategoryFilter />
        </div>
        {(Object.entries(staticConfig) as ConfigEntries).map(([key, conf]) => {
          if (conf.type === 'select') {
            return (
              <div key={key} className={s.filterGroup}>
                <p className={s.filterTitle}>{conf.title}</p>
                <Select
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
              </div>
            );
          }

          return null;
        })}

        <div className={s.filterGroup}>
          <p className={s.filterTitle}>Calories (per 100g)</p>
          <RangeSlider min={0} max={500} unit="kcal" onChange={() => {}} />
        </div>

        <div className={s.filterGroup}>
          <p className={s.filterTitle}>Protein (per 100g)</p>
          <RangeSlider min={0} max={100} unit="g" onChange={() => {}} />
        </div>

        <div className={s.filterGroup}>
          <p className={s.filterTitle}>Fat (per 100g)</p>
          <RangeSlider min={0} max={100} unit="g" onChange={() => {}} />
        </div>

        <div className={s.filterGroup}>
          <p className={s.filterTitle}>Carbohydrates (per 100g)</p>
          <RangeSlider min={0} max={100} unit="g" onChange={() => {}} />
        </div>
      </div>
    </section>
  );
};
