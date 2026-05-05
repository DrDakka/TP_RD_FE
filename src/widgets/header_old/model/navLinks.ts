import { IconCart, IconProfile } from '@shared/ui';
import { navRoutes } from '@shared/config/routes';

const navLinks = navRoutes;

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
