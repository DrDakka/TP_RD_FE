import { FullItem } from '@/shared/api/types';
import { MeasureUnits, PropTags, Tags } from '@/shared/api/types/product/enums';

const mockProducts: FullItem[] = [
  {
    item: {
      id: 1,
      name: 'Куряча грудка',
      cal: 165,
      prot: 31,
      fat: 3.6,
      carb: 0,
      tag: Tags.PRT,
      properties: [PropTags.HP, PropTags.LF, PropTags.LC],
    },
    micro: [
      { name: 'Вітамін B6', unit: MeasureUnits.MG, amount: 0.9 },
      { name: 'Фосфор', unit: MeasureUnits.MG, amount: 220 },
      { name: 'Ніацин', unit: MeasureUnits.MG, amount: 13.7 },
    ],
  },
  {
    item: {
      id: 2,
      name: 'Лосось',
      cal: 208,
      prot: 20,
      fat: 13,
      carb: 0,
      tag: Tags.P_F,
      properties: [PropTags.HP, PropTags.HF],
    },
    micro: [
      { name: 'Вітамін D', unit: MeasureUnits.MCG, amount: 11 },
      { name: 'Вітамін B12', unit: MeasureUnits.MCG, amount: 3.2 },
      { name: 'Омега-3', unit: MeasureUnits.G, amount: 2.3 },
    ],
  },
  {
    item: {
      id: 3,
      name: 'Бурий рис',
      cal: 215,
      prot: 4.5,
      fat: 1.8,
      carb: 45,
      tag: Tags.CRB,
      properties: [PropTags.HC],
    },
    micro: [
      { name: 'Магній', unit: MeasureUnits.MG, amount: 84 },
      { name: 'Залізо', unit: MeasureUnits.MG, amount: 1.8 },
      { name: 'Вітамін B1', unit: MeasureUnits.MG, amount: 0.2 },
    ],
  },
  {
    item: {
      id: 4,
      name: 'Куряче яйце',
      cal: 155,
      prot: 13,
      fat: 11,
      carb: 1.1,
      tag: Tags.BAL,
      properties: [PropTags.HP],
    },
    micro: [
      { name: 'Вітамін D', unit: MeasureUnits.MCG, amount: 2 },
      { name: 'Вітамін B12', unit: MeasureUnits.MCG, amount: 1.1 },
      { name: 'Холін', unit: MeasureUnits.MG, amount: 294 },
    ],
  },
  {
    item: {
      id: 5,
      name: 'Грецький йогурт',
      cal: 97,
      prot: 17,
      fat: 0.7,
      carb: 6,
      tag: Tags.PRT,
      properties: [PropTags.HP, PropTags.LF],
    },
    micro: [
      { name: 'Кальцій', unit: MeasureUnits.MG, amount: 200 },
      { name: 'Вітамін B12', unit: MeasureUnits.MCG, amount: 1.3 },
      { name: 'Фосфор', unit: MeasureUnits.MG, amount: 190 },
    ],
  },
  {
    item: {
      id: 6,
      name: 'Авокадо',
      cal: 160,
      prot: 2,
      fat: 15,
      carb: 9,
      tag: Tags.FAT,
      properties: [PropTags.HF, PropTags.FBR],
    },
    micro: [
      { name: 'Калій', unit: MeasureUnits.MG, amount: 485 },
      { name: 'Фолієва кислота', unit: MeasureUnits.MCG, amount: 81 },
      { name: 'Вітамін K', unit: MeasureUnits.MCG, amount: 21 },
    ],
  },
  {
    item: {
      id: 7,
      name: 'Вівсяна крупа',
      cal: 389,
      prot: 17,
      fat: 7,
      carb: 66,
      tag: Tags.CRB,
      properties: [PropTags.HC, PropTags.HP, PropTags.FBR, PropTags.HKCAL],
    },
    micro: [
      { name: 'Залізо', unit: MeasureUnits.MG, amount: 4.7 },
      { name: 'Магній', unit: MeasureUnits.MG, amount: 177 },
      { name: 'Цинк', unit: MeasureUnits.MG, amount: 4 },
    ],
  },
  {
    item: {
      id: 8,
      name: 'Яловичина нежирна',
      cal: 250,
      prot: 26,
      fat: 15,
      carb: 0,
      tag: Tags.PRT,
      properties: [PropTags.HP],
    },
    micro: [
      { name: 'Залізо', unit: MeasureUnits.MG, amount: 2.6 },
      { name: 'Вітамін B12', unit: MeasureUnits.MCG, amount: 2.5 },
      { name: 'Цинк', unit: MeasureUnits.MG, amount: 5.4 },
    ],
  },
  {
    item: {
      id: 9,
      name: 'Броколі',
      cal: 34,
      prot: 2.8,
      fat: 0.4,
      carb: 7,
      tag: Tags.LC,
      properties: [PropTags.LKCAL, PropTags.FBR],
    },
    micro: [
      { name: 'Вітамін C', unit: MeasureUnits.MG, amount: 89 },
      { name: 'Фолієва кислота', unit: MeasureUnits.MCG, amount: 63 },
      { name: 'Вітамін K', unit: MeasureUnits.MCG, amount: 102 },
    ],
  },
  {
    item: {
      id: 10,
      name: 'Мигдаль',
      cal: 579,
      prot: 21,
      fat: 50,
      carb: 22,
      tag: Tags.F_P,
      properties: [PropTags.HF, PropTags.HP, PropTags.HKCAL],
    },
    micro: [
      { name: 'Вітамін E', unit: MeasureUnits.MG, amount: 25.6 },
      { name: 'Магній', unit: MeasureUnits.MG, amount: 270 },
      { name: 'Кальцій', unit: MeasureUnits.MG, amount: 264 },
    ],
  },
  {
    item: {
      id: 11,
      name: 'Батат',
      cal: 86,
      prot: 1.6,
      fat: 0.1,
      carb: 20,
      tag: Tags.CRB,
      properties: [PropTags.HC, PropTags.FBR],
    },
    micro: [
      { name: 'Вітамін A', unit: MeasureUnits.MCG, amount: 961 },
      { name: 'Вітамін C', unit: MeasureUnits.MG, amount: 19.6 },
      { name: 'Калій', unit: MeasureUnits.MG, amount: 337 },
    ],
  },
  {
    item: {
      id: 12,
      name: 'Тунець консервований',
      cal: 132,
      prot: 29,
      fat: 1,
      carb: 0,
      tag: Tags.PRT,
      properties: [PropTags.HP, PropTags.LF, PropTags.LC],
    },
    micro: [
      { name: 'Вітамін B12', unit: MeasureUnits.MCG, amount: 2.5 },
      { name: 'Ніацин', unit: MeasureUnits.MG, amount: 11.7 },
      { name: 'Селен', unit: MeasureUnits.MCG, amount: 90 },
    ],
  },
  {
    item: {
      id: 13,
      name: 'Сир кисломолочний',
      cal: 98,
      prot: 11,
      fat: 4,
      carb: 4,
      tag: Tags.PRT,
      properties: [PropTags.HP],
    },
    micro: [
      { name: 'Кальцій', unit: MeasureUnits.MG, amount: 83 },
      { name: 'Фосфор', unit: MeasureUnits.MG, amount: 159 },
      { name: 'Вітамін B12', unit: MeasureUnits.MCG, amount: 0.4 },
    ],
  },
  {
    item: {
      id: 14,
      name: 'Оливкова олія',
      cal: 884,
      prot: 0,
      fat: 100,
      carb: 0,
      tag: Tags.FAT,
      properties: [PropTags.HF, PropTags.HKCAL],
    },
    micro: [
      { name: 'Вітамін E', unit: MeasureUnits.MG, amount: 14.4 },
      { name: 'Вітамін K', unit: MeasureUnits.MCG, amount: 60.2 },
    ],
  },
  {
    item: {
      id: 15,
      name: 'Банан',
      cal: 89,
      prot: 1.1,
      fat: 0.3,
      carb: 23,
      tag: Tags.CRB,
      properties: [PropTags.HC, PropTags.FBR],
    },
    micro: [
      { name: 'Вітамін B6', unit: MeasureUnits.MG, amount: 0.37 },
      { name: 'Калій', unit: MeasureUnits.MG, amount: 358 },
      { name: 'Магній', unit: MeasureUnits.MG, amount: 27 },
    ],
  },
];

export { mockProducts };
