import { PropTags, Tags } from './enums';
import { TagMeta } from './types';

export const TAG_META: Record<Tags, TagMeta> = {
  [Tags.LC]: {
    label: 'Low Calorie',
    color: '#38744C',
    background: '#E1F5EE',
  },
  [Tags.PRT]: {
    label: 'High Protein',
    color: '#362D9A',
    background: '#EEEDFE',
  },
  [Tags.FAT]: {
    label: 'Fat',
    color: '#A76400',
    background: '#FAEEDA',
  },
  [Tags.CRB]: {
    label: 'Carbs',
    color: '#0E5BA7',
    background: '#E6F1FB',
  },
  [Tags.P_F]: {
    label: 'Protein + Fat',
    color: '#8B5CF6',
    background: '#E1F5EE',
  },
  [Tags.P_C]: {
    label: 'Protein + Carbs',
    color: '#6366F1',
    background: '#E1F5EE',
  },
  [Tags.F_C]: {
    label: 'Fat + Carbs',
    color: '#F97316',
    background: '#E1F5EE',
  },
  [Tags.F_P]: {
    label: 'Fat + Protein',
    color: '#A855F7',
    background: '#E1F5EE',
  },
  [Tags.C_P]: {
    label: 'Carbs + Protein',
    color: '#0EA5E9',
    background: '#E1F5EE',
  },
  [Tags.C_F]: {
    label: 'Carbs + Fat',
    color: '#FB923C',
    background: '#E1F5EE',
  },
  [Tags.BAL]: {
    label: 'Balanced',
    color: '#5D6D21',
    background: '#EAF3DE',
  },
};

export const PROP_TAG_META: Record<PropTags, TagMeta> = {
  [PropTags.HP]: {
    label: 'High Protein',
    color: '#362D9A',
    background: '#EEEDFE',
  },
  [PropTags.HF]: {
    label: 'High Fat',
    color: '#A76400',
    background: '#FAEEDA',
  },
  [PropTags.HC]: {
    label: 'High Carb',
    color: '#0E5BA7',
    background: '#E6F1FB',
  },
  [PropTags.HKCAL]: {
    label: 'High Calories',
    color: '#38744C',
    background: '#E1F5EE',
  },
  [PropTags.LP]: {
    label: 'Low Protein',
    color: '#A78BFA',
    background: '#E1F5EE',
  },
  [PropTags.LF]: {
    label: 'Low Fat',
    color: '#FCD34D',
    background: '#E1F5EE',
  },
  [PropTags.LC]: {
    label: 'Low Carb',
    color: '#0E5BA7',
    background: '#E6F1FB',
  },
  [PropTags.LKCAL]: {
    label: 'Low Calories',
    color: '#38744C',
    background: '#E1F5EE',
  },
  [PropTags.FBR]: {
    label: 'High Fiber',
    color: '#5D6D21',
    background: '#EAF3DE',
  },
};
