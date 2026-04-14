import { ChangeEvent, useRef, useState } from 'react';
import { useUrlReducer } from './useUrlReducer';
import { FilterState } from './types';
import { PropTags, Tags } from '@/shared';

type Props = {
  initialState: FilterState;
};

export const useFilters = ({ initialState }: Props) => {
  const [state, dispatch] = useUrlReducer(initialState);
  const [searchInput, setSearchInput] = useState(initialState.search ?? '');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlers = {
    query: (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setSearchInput(value);

      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (value.length < 4 && value.length !== 0) return;

      debounceRef.current = setTimeout(
        () => dispatch({ type: 'SET_SEARCH', payload: value }),
        300,
      );
    },
    tag: (arg: Tags) => {
      dispatch({ type: 'SET_TAG', payload: arg });
    },
    propTag: (arg: PropTags) => {
      dispatch({ type: 'TOGGLE_PROP', payload: arg });
    },
    reset: () => {
      setSearchInput('');
      dispatch({ type: 'RESET_FILTERS' });
    },
    page: (idx: number) => {
      dispatch({ type: 'SET_PAGE', payload: idx });
    },
  };

  const restore = (state: FilterState) => {
    dispatch({ type: 'RESTORE', payload: state });
  };

  return {
    state,
    searchInput,
    handlers,
    restore,
  };
};
