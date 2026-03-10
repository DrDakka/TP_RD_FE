import { IconCart, IconProfile } from '@shared/ui';

const navLinks = [
  {
    name: 'Food Library',
    href: '/catalogue',
  },
  {
    name: 'Meal Plans',
    href: '/constructor',
  },
  {
    name: 'Science Database',
    href: '/sci-lib',
  },
] as const;

const uaLinks = [
  {
    label: 'Go to basket',
    href: '/account/basket',
    Icon: IconCart,
  },
  {
    label: 'Go to profile',
    href: '/account',
    Icon: IconProfile,
  },
];

export { navLinks, uaLinks };
