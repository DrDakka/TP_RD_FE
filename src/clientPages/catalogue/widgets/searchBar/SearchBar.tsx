import { ChangeEvent, useState } from 'react';
import s from './searchBar.module.scss';
import { IconFilter, IconRefresh } from '@/shared';
import { View } from '../../model';
import { SearchInput, ToggleView } from './ui';
import classNames from 'classnames';

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
      ></div>

      <ToggleView view={view} onView={onView} />
    </div>
  );
};
