import { IconPlus, IconSearch } from '@/shared/ui';
import s from './searchBar.module.scss';
import classNames from 'classnames';

type Props = {
  expanded: boolean;
  scrolled: boolean;
  handlers: {
    query: (e: React.ChangeEvent<HTMLInputElement>) => void;
    expand: () => void;
    focus: () => void;
    clearQuery: () => void;
  };
  query: string;
  inputRef: React.RefObject<HTMLInputElement>;
};

export const SearchBar: React.FC<Props> = ({
  expanded,
  scrolled,
  handlers,
  query,
  inputRef,
}) => {
  return (
    <div
      data-header-search
      className={classNames(s['search-wrapper'], {
        [s['search-wrapper--expanded']]: expanded,
        [s['search-wrapper--scrolled']]: scrolled,
      })}
      onClick={handlers.focus}
    >
      <button
        className={s['icon-btn']}
        onClick={e => {
          e.stopPropagation();
          if (expanded || query !== '') {
            handlers.clearQuery();
          }

          handlers.expand();
        }}
        aria-expanded={expanded}
        aria-label={expanded ? 'Clear query and close search' : 'Open search'}
      >
        {expanded ? <IconPlus cross /> : <IconSearch />}
      </button>
      <input
        ref={inputRef}
        type="text"
        aria-label="search for foods"
        placeholder="Search for foods"
        value={query}
        onChange={e => handlers.query(e)}
        onFocus={handlers.focus}
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
};
