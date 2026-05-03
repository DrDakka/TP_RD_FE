import { ChangeEvent, useRef } from 'react';
import s from './searchInput.module.scss';
import { IconPlus, IconSearch } from '@/shared/ui';
import classNames from 'classnames';

type Props = {
  query: string;
  onQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  expanded: boolean;
  onExpand: (v: boolean) => void;
};

const isDesktop = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(min-width: 1024px)').matches;

export const SearchInput: React.FC<Props> = ({
  query,
  reset,
  onQuery,
  expanded,
  onExpand,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (isDesktop()) {
      if (query) reset();

      return;
    }

    if (expanded && query) {
      reset();
      onExpand(false);

      return;
    }

    if (!expanded) {
      onExpand(true);
      inputRef.current?.focus();
    } else {
      onExpand(false);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (isDesktop()) return;
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onExpand(false);
    }
  };

  return (
    <div
      className={classNames(s.inputWrapper, {
        [s['inputWrapper--active']]: expanded,
      })}
      data-widget="search-container"
      onBlur={handleBlur}
    >
      <button
        className={s.inputIcon}
        aria-label={query ? 'Clear search' : 'Focus search'}
        onClick={handleClick}
      >
        {(isDesktop() ? query : expanded && query) ? (
          <IconPlus cross />
        ) : (
          <IconSearch />
        )}
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
