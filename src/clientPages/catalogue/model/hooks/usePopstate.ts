import { FilterState } from './types';
import { useEffect } from 'react';
import { parseParams } from '../../lib';

export const usePopstate = (restore: (state: FilterState) => void) => {
  useEffect(() => {
    const onPopState = () => {
      const params = Object.fromEntries(
        new URLSearchParams(window.location.search),
      );

      const state = parseParams(params);

      restore(state);
    };

    window.addEventListener('popstate', onPopState);

    return () => window.removeEventListener('popstate', onPopState);
  }, []);
};
