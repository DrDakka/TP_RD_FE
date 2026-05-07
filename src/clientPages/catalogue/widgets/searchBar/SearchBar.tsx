import { ChangeEvent, useState } from 'react';
import s from './searchBar.module.scss';
import { IconFilter, IconRefresh, IconChevron } from '@/shared';
import { View } from '../../model';
import { SearchInput, ToggleView } from './ui';
import classNames from 'classnames';

const SORT_OPTIONS = ['Popular', 'Alphabet', 'Seasonal'] as const;

type SortOption = (typeof SORT_OPTIONS)[number];

type Props = {
  query: string;
  onQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  view: View;
  onView: (v: View) => void;
  filtersExpanded: boolean;
  setFiltersExpanded: () => void;
};

export const SearchBar: React.FC<Props> = ({
  query,
  onQuery,
  reset,
  view,
  onView,
  filtersExpanded,
  setFiltersExpanded,
}) => {
  const [spinning, setSpinning] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [sortExpanded, setSortExpanded] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>('Popular');
  const handleReset = () => {
    setSpinning(true);
    reset();
  };

  return (
    <div className={s.searchBar} data-widget="search-bar">
      <SearchInput
        query={query}
        onQuery={onQuery}
        reset={reset}
        expanded={searchExpanded}
        onExpand={setSearchExpanded}
      />
      <button
        className={classNames(s.filterBtn, {
          [s['filterBtn--active']]: filtersExpanded,
        })}
        onClick={setFiltersExpanded}
      >
        <IconFilter />
      </button>
      <button
        onClick={handleReset}
        onAnimationEnd={() => setSpinning(false)}
        className={`${s.refresh}${spinning ? ` ${s['refresh--spinning']}` : ''}`}
      >
        <IconRefresh />
      </button>
      <div
        className={classNames(s.input, {
          [s['input--hidden']]: searchExpanded,
        })}
      >
        <button
          className={s.sortTrigger}
          onClick={() => setSortExpanded(prev => !prev)}
          disabled
        >
          <span>Sort: {sortOption}</span>
          <IconChevron direction={sortExpanded ? 'up' : 'down'} />
        </button>
        {sortExpanded && (
          <ul className={s.sortMenu}>
            {SORT_OPTIONS.map(opt => (
              <li key={opt}>
                <button
                  className={classNames(s.sortOption, {
                    [s['sortOption--active']]: opt === sortOption,
                  })}
                  onClick={() => {
                    setSortOption(opt);
                    setSortExpanded(false);
                  }}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ToggleView view={view} onView={onView} />
    </div>
  );
};
