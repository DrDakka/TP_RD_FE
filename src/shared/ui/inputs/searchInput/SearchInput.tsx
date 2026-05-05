'use client';

import { ChangeEvent, useEffect, useRef } from 'react';
import s from './searchInput.module.scss';
import { IconPlus, IconSearch } from '../../icons';
import { useMediaQuery } from '@/shared/lib';
import classNames from 'classnames';

type Props = {
  query: string;
  onQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  expanded: boolean;
  onExpand: (v: boolean) => void;
};

export const SearchInput: React.FC<Props> = ({
  query,
  reset,
  onQuery,
  expanded,
  onExpand,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (expanded) inputRef.current?.focus();
  }, [expanded]);

  const handleDesktopClick = () => {
    if (query) {
      reset();

      onExpand(!expanded);
    } else {
      inputRef.current?.focus();
    }
  };

  const handleMobileClick = () => {
    onExpand(!expanded);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (isDesktop && query) {
      onExpand(false);
    }

    if (!e.currentTarget.contains(e.relatedTarget) && !query) {
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
        aria-label="Search"
        onClick={isDesktop ? handleDesktopClick : handleMobileClick}
      >
        {isDesktop && query ? <IconPlus cross /> : <IconSearch />}
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
