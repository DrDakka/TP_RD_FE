enum Tags {
  LC = 'lo_cal',
  PRT = 'prot',
  FAT = 'fat',
  CRB = 'carb',
  P_F = 'prot-fat',
  P_C = 'prot-carb',
  F_C = 'fat-carb',
  F_P = 'fat-prot',
  C_P = 'carb-prot',
  C_F = 'carb-fat',
  BAL = 'balanced',
}

enum PropTags {
  HP = 'hi-prot',
  HF = 'hi-fat',
  HC = 'hi-carb',
  HKCAL = 'hi-cal',
  LP = 'lo-prot',
  LF = 'lo-fat',
  LC = 'lo-carb',
  LKCAL = 'lo-cal',
  FBR = 'fiber',
}

enum MeasureUnits {
  G = 'g',
  MG = 'mg',
  MCG = 'mcg',
}

export { Tags, PropTags, MeasureUnits };
