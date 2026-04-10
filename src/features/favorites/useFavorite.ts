import { useFavoritesStore } from './store';

const useFavorite = (id: number) => {
  const isFavorite = useFavoritesStore(state => state.favorites.has(id));
  const toggle = useFavoritesStore(state => state.toggle);

  return { isFavorite, toggle: () => toggle(id) };
};

export { useFavorite };
