import { PropTags } from '@/shared';

export const normalizeProp = (prop: unknown): PropTags[] => {
  if (Array.isArray(prop)) return prop;
  if (typeof prop === 'string') return [prop as PropTags];

  return [];
};
