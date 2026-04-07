import { ChangeEvent } from 'react';
import s from './searchBar.module.scss';
import { IconRefresh } from '@/shared/ui';
import { View } from '../../model';
import { SearchInput, ToggleView } from './ui';

type Props = {
  query: string;
  onQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  view: View;
  onView: (v: View) => void;
};

export const SearchBar: React.FC<Props> = ({
  query,
  onQuery,
  reset,
  view,
  onView,
}) => {
  return (
    <div className={s.searchBar} data-widget="search-bar">
      <SearchInput query={query} onQuery={onQuery} reset={reset} />
      <button onClick={reset} className={s.refresh}>
        <IconRefresh />
      </button>
      <ToggleView view={view} onView={onView} />
    </div>
  );
};
