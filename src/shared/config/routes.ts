const navRoutes = [
  { name: 'Food Library', href: '/catalogue' },
  { name: 'Meal Plans', href: '/constructor' },
  { name: 'Science DB', href: '/sci-lib' },
] as const;

const supportRoutes = [
  { name: 'Help Center', href: '/help' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
] as const;

export { navRoutes, supportRoutes };
