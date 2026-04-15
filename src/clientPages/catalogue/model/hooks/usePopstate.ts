import { FilterState } from './types';
import { useEffect } from 'react';
import { parseParams } from '../../lib';

export const usePopstate = (restore: (state: FilterState) => void) => {
  useEffect(() => {
    const onPopState = () => {
      const state = parseParams(new URLSearchParams(window.location.search));

      restore(state);
    };

    window.addEventListener('popstate', onPopState);

    return () => window.removeEventListener('popstate', onPopState);
  }, [restore]);
};
