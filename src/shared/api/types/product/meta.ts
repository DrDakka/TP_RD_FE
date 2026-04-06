import { PropTags, Tags } from './enums';
import { TagMeta } from './types';

export const TAG_META: Record<Tags, TagMeta> = {
  [Tags.LC]: { label: 'Low Calorie', color: '#22C55E' },
  [Tags.PRT]: { label: 'High Protein', color: '#6C5DD3' },
  [Tags.FAT]: { label: 'Fat', color: '#F59E0B' },
  [Tags.CRB]: { label: 'Carbs', color: '#3B82F6' },
  [Tags.P_F]: { label: 'Protein + Fat', color: '#8B5CF6' },
  [Tags.P_C]: { label: 'Protein + Carbs', color: '#6366F1' },
  [Tags.F_C]: { label: 'Fat + Carbs', color: '#F97316' },
  [Tags.F_P]: { label: 'Fat + Protein', color: '#A855F7' },
  [Tags.C_P]: { label: 'Carbs + Protein', color: '#0EA5E9' },
  [Tags.C_F]: { label: 'Carbs + Fat', color: '#FB923C' },
  [Tags.BAL]: { label: 'Balanced', color: '#10B981' },
};

export const PROP_TAG_META: Record<PropTags, TagMeta> = {
  [PropTags.HP]: { label: 'High Protein', color: '#6C5DD3' },
  [PropTags.HF]: { label: 'High Fat', color: '#F59E0B' },
  [PropTags.HC]: { label: 'High Carb', color: '#3B82F6' },
  [PropTags.HKCAL]: { label: 'High Calories', color: '#EF4444' },
  [PropTags.LP]: { label: 'Low Protein', color: '#A78BFA' },
  [PropTags.LF]: { label: 'Low Fat', color: '#FCD34D' },
  [PropTags.LC]: { label: 'Low Carb', color: '#93C5FD' },
  [PropTags.LKCAL]: { label: 'Low Calories', color: '#FCA5A5' },
  [PropTags.FBR]: { label: 'High Fiber', color: '#10B981' },
};
