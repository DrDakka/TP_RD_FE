import { ChangeEvent, useRef } from 'react';
import s from './searchInput.module.scss';
import { IconPlus, IconSearch } from '@/shared/ui';

type Props = {
  query: string;
  onQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

export const SearchInput: React.FC<Props> = ({ query, reset, onQuery }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={s.inputWrapper}>
      <button
        className={s.inputIcon}
        aria-label={query ? 'Clear search' : 'Focus search'}
        onClick={() => (query ? reset() : inputRef.current?.focus())}
      >
        {query ? <IconPlus cross /> : <IconSearch />}
      </button>
      <input
        ref={inputRef}
        className={s.input}
        type="text"
        placeholder="Search for foods"
        aria-label="Query search"
        value={query}
        onChange={onQuery}
      />
    </div>
  );
};
