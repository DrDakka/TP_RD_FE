'use client';

import { useFavoritesSync } from '@/features/favorites/useFavoritesSync';

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useFavoritesSync();

  return <>{children}</>;
};
