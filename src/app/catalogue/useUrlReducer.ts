'use client';

import { Tags, PropTags } from '@/shared/api/types/product/enums';
import { useMemo } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export const useUrlReducer = () => {
  const searchParams = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();

  const state = useMemo(
    () => ({
      search: searchParams.get('search') || '',
      tag: (searchParams.get('tag') as Tags) || '',
      prop: (searchParams.getAll('prop') as PropTags[]) || [],
      page: Number(searchParams.get('page')) || 1,
    }),
    [searchParams],
  );

  type FilterAction =
    | { type: 'SET_SEARCH'; payload: string }
    | { type: 'SET_TAG'; payload: Tags | '' }
    | { type: 'SET_PROP'; payload: PropTags[] }
    | { type: 'TOGGLE_PROP'; payload: PropTags }
    | { type: 'SET_PAGE'; payload: number }
    | { type: 'RESET_FILTERS' };

  const dispatch = (action: FilterAction) => {
    const params = new URLSearchParams(searchParams.toString());

    switch (action.type) {
      case 'SET_SEARCH':
        if (action.payload) {
          params.set('search', action.payload);
        } else {
          params.delete('search');
        }

        params.delete('page');
        break;

      case 'SET_TAG':
        if (action.payload) {
          params.set('tag', action.payload);
        } else {
          params.delete('tag');
        }

        params.delete('page');
        break;

      case 'SET_PROP':
        params.delete('prop');
        action.payload.forEach(p => params.append('prop', p));
        params.delete('page');
        break;

      case 'TOGGLE_PROP': {
        const current = params.getAll('prop') as PropTags[];

        params.delete('prop');
        const next = current.includes(action.payload)
          ? current.filter(p => p !== action.payload)
          : [...current, action.payload];

        next.forEach(p => params.append('prop', p));
        params.delete('page');
        break;
      }

      case 'SET_PAGE':
        if (action.payload === 1) {
          params.delete('page');
        } else {
          params.set('page', action.payload.toString());
        }

        break;

      case 'RESET_FILTERS':
        params.delete('search');
        params.delete('tag');
        params.delete('prop');
        params.delete('page');
        break;
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return [state, dispatch] as const;
};
