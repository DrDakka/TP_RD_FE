import { PROP_TAG_META, PropTags } from '@/shared/api/types';
import { TagMeta } from '@/shared/api/types/product/types';

export function getPropTag(tag: PropTags): TagMeta {
  return PROP_TAG_META[tag];
}
