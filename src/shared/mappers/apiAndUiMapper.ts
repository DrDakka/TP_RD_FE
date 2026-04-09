import { PropTags, Tags } from '../api/types';

const tagApiToUi = {
  [Tags.BAL]: 'Balanced',
  [Tags.LC]: 'Low calories',
  [Tags.PRT]: 'Protein',
  [Tags.FAT]: 'Fat',
  [Tags.CRB]: 'Carb',
  [Tags.P_F]: 'Protein/Fat',
  [Tags.P_C]: 'Protein/Carb',
  [Tags.F_C]: 'Fat/Carb',
  [Tags.F_P]: 'Fat/Protein',
  [Tags.C_P]: 'Carb/Protein',
  [Tags.C_F]: 'Carb/Fat',
} as const satisfies Record<Tags, string>;

const propTagApiToUi = {
  [PropTags.HP]: 'High protein',
  [PropTags.HF]: 'High fat',
  [PropTags.HC]: 'High carbs',
  [PropTags.HKCAL]: 'High calories',
  [PropTags.LP]: 'Low protein',
  [PropTags.LF]: 'Low fat',
  [PropTags.LC]: 'Low carbs',
  [PropTags.LKCAL]: 'Low calories',
  [PropTags.FBR]: 'Fiber',
} as const satisfies Record<PropTags, string>;

type TagUiLabel = (typeof tagApiToUi)[keyof typeof tagApiToUi];
type PropTagUiLabel = (typeof propTagApiToUi)[keyof typeof propTagApiToUi];

const tagUiToApi: Record<TagUiLabel, Tags> = {
  Balanced: Tags.BAL,
  'Low calories': Tags.LC,
  Protein: Tags.PRT,
  Fat: Tags.FAT,
  Carb: Tags.CRB,
  'Protein/Fat': Tags.P_F,
  'Protein/Carb': Tags.P_C,
  'Fat/Carb': Tags.F_C,
  'Fat/Protein': Tags.F_P,
  'Carb/Protein': Tags.C_P,
  'Carb/Fat': Tags.C_F,
};

const propTagUiToApi: Record<PropTagUiLabel, PropTags> = {
  'High protein': PropTags.HP,
  'High fat': PropTags.HF,
  'High carbs': PropTags.HC,
  'High calories': PropTags.HKCAL,
  'Low protein': PropTags.LP,
  'Low fat': PropTags.LF,
  'Low carbs': PropTags.LC,
  'Low calories': PropTags.LKCAL,
  Fiber: PropTags.FBR,
};

const apiToUi = {
  tag: tagApiToUi,
  propTag: propTagApiToUi,
};

const uiToApi = {
  tag: tagUiToApi,
  propTag: propTagUiToApi,
};

export { apiToUi, uiToApi, type TagUiLabel, type PropTagUiLabel };
