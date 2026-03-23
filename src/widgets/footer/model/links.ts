import { navRoutes, supportRoutes } from '@shared/config/routes';

const navLinks = [
  ...navRoutes,
  { name: "What's New", href: '/whats-new' },
] as const;

const supportLinks = supportRoutes;

export { navLinks, supportLinks };
