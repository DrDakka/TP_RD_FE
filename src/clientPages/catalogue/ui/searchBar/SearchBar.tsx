import { ChangeEvent } from 'react';
import s from './searchBar.module.scss';
type Props = {
  query: string;
  onQuery: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
  reset: () => void;
};

export const SearchBar: React.FC<Props> = ({ query, onQuery, reset }) => {
  return (
    <div className={s.searchBar} data-widget="search-bar">
      <input
        type="text"
        placeholder="Search for foods"
        value={query}
        onChange={onQuery}
      />
      <button onClick={reset}>Reset filters</button>
      <button disabled>Toggle view</button>
    </div>
  );
};
