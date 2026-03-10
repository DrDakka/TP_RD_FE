import { IconSearch } from '@/shared/ui';
import s from './searchBar.module.scss';
import classNames from 'classnames';

type Props = {
  expanded: boolean;
  handlers: {
    query: (e: React.ChangeEvent<HTMLInputElement>) => void;
    expand: () => void;
  };
  query: string;
};

export const SearchBar: React.FC<Props> = ({ expanded, handlers, query }) => {
  return (
    <button
      className={classNames(s['search-wrapper'], {
        [s['search-wrapper--expanded']]: expanded,
      })}
      onClick={handlers.expand}
      aria-expanded={expanded}
    >
      <IconSearch />
      <input
        type="text"
        aria-label="search for foods"
        placeholder="Search for foods"
        value={query}
        onChange={e => handlers.query(e)}
      ></input>
    </button>
  );
};
