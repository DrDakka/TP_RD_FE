import { PropTags, Tags } from './enums';
import { TagMeta } from './types';

const COLORS = {
  protein: { color: '#362D9A', background: '#EEEDFE' },
  fat: { color: '#A76400', background: '#FAEEDA' },
  carbs: { color: '#0E5BA7', background: '#E6F1FB' },
  kcal: { color: '#38744C', background: '#E1F5EE' },
  neutral: { color: '#5D6D21', background: '#EAF3DE' },
} as const;

export const TAG_META: Record<Tags, TagMeta> = {
  [Tags.LC]: { label: 'Low Calorie', ...COLORS.kcal },
  [Tags.PRT]: { label: 'High Protein', ...COLORS.protein },
  [Tags.FAT]: { label: 'Fat', ...COLORS.fat },
  [Tags.CRB]: { label: 'Carbs', ...COLORS.carbs },
  [Tags.P_F]: { label: 'Protein + Fat', ...COLORS.protein },
  [Tags.P_C]: { label: 'Protein + Carbs', ...COLORS.protein },
  [Tags.F_C]: { label: 'Fat + Carbs', ...COLORS.fat },
  [Tags.F_P]: { label: 'Fat + Protein', ...COLORS.fat },
  [Tags.C_P]: { label: 'Carbs + Protein', ...COLORS.carbs },
  [Tags.C_F]: { label: 'Carbs + Fat', ...COLORS.carbs },
  [Tags.BAL]: { label: 'Balanced', ...COLORS.neutral },
};

export const PROP_TAG_META: Record<PropTags, TagMeta> = {
  [PropTags.HP]: { label: 'High Protein', ...COLORS.protein },
  [PropTags.HF]: { label: 'High Fat', ...COLORS.fat },
  [PropTags.HC]: { label: 'High Carb', ...COLORS.carbs },
  [PropTags.HKCAL]: { label: 'High Calories', ...COLORS.kcal },
  [PropTags.LP]: { label: 'Low Protein', ...COLORS.protein },
  [PropTags.LF]: { label: 'Low Fat', ...COLORS.fat },
  [PropTags.LC]: { label: 'Low Carb', ...COLORS.carbs },
  [PropTags.LKCAL]: { label: 'Low Calories', ...COLORS.kcal },
  [PropTags.FBR]: { label: 'High Fiber', ...COLORS.kcal },
};
