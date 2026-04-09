import { ChangeEvent, useState } from 'react';
import s from './searchBar.module.scss';
import { IconRefresh } from '@/shared';
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
  const [spinning, setSpinning] = useState(false);

  const handleReset = () => {
    setSpinning(true);
    reset();
  };

  return (
    <div className={s.searchBar} data-widget="search-bar">
      <SearchInput query={query} onQuery={onQuery} reset={reset} />
      <button
        onClick={handleReset}
        onAnimationEnd={() => setSpinning(false)}
        className={`${s.refresh}${spinning ? ` ${s['refresh--spinning']}` : ''}`}
      >
        <IconRefresh />
      </button>
      <ToggleView view={view} onView={onView} />
    </div>
  );
};
