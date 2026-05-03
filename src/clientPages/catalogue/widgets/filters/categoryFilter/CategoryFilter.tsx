'use client';

import { useState } from 'react';
import { DropDown } from '@/shared';
import s from './categoryFilter.module.scss';
import { IconCheckCircle } from '@/shared';

const USDA_CATEGORIES = [
  'Dairy and Egg Products',
  'Spices and Herbs',
  'Fats and Oils',
  'Poultry Products',
  'Soups, Sauces, and Gravies',
  'Sausages and Luncheon Meats',
  'Breakfast Cereals',
  'Fruits and Fruit Juices',
  'Pork Products',
  'Vegetables and Vegetable Products',
  'Nut and Seed Products',
  'Beef Products',
  'Beverages',
  'Finfish and Shellfish Products',
  'Legumes and Legume Products',
  'Lamb, Veal, and Game Products',
  'Baked Products',
  'Sweets',
  'Cereal Grains and Pasta',
  'Fast Foods',
  'Snacks',
  'Meals, Entrees, and Side Dishes',
] as const;

const DEFAULT_LABEL = 'Category';

export const CategoryFilter: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <DropDown
      label={selected ?? DEFAULT_LABEL}
      isSelected={!!selected}
      buttonProps={{ 'aria-haspopup': 'listbox' }}
    >
      <ul role="listbox">
        {USDA_CATEGORIES.map(cat => (
          <li
            key={cat}
            role="option"
            aria-selected={selected === cat}
            className={s.item}
            onClick={() => setSelected(prev => (prev === cat ? null : cat))}
          >
            <div>
              <span>{cat}</span>
              <IconCheckCircle active={selected === cat} />
            </div>
          </li>
        ))}
      </ul>
    </DropDown>
  );
};
