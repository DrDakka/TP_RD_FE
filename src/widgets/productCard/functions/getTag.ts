import { Tags, TAG_META } from '@/shared/api/types';
import { TagMeta } from '@/shared/api/types/product/types';

export function getTag(tag: Tags): TagMeta {
  return TAG_META[tag];
}
