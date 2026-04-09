import { create } from 'zustand';
import { api } from '@/shared';
import { deleteItem, getAllKeys, openDb, putItem } from '@/shared/db/favorites';
import { getPending, setPending } from '@/shared/lib/pendingFavs';

type FavoritesStore = {
  prev: Set<number>;
  favorites: Set<number>;
  init: () => Promise<void>;
  toggle: (id: number) => void;
  flush: () => Promise<void>;
};

let isFlushing = false;

const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  prev: new Set(),
  favorites: new Set(),

  init: async () => {
    const db = await openDb();
    const keys = await getAllKeys(db);

    db.close();

    const { add, remove } = getPending();
    const favorites = new Set(keys);

    add.forEach(id => favorites.add(id));
    remove.forEach(id => favorites.delete(id));

    set({ prev: new Set(keys), favorites });
  },

  toggle: (id: number) => {
    const { favorites, prev } = get();
    const next = new Set(favorites);

    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }

    const pendingAdd = new Set([...next].filter(fid => !prev.has(fid)));
    const pendingRemove = new Set([...prev].filter(fid => !next.has(fid)));

    setPending(pendingAdd, pendingRemove);
    set({ favorites: next });
  },

  flush: async () => {
    if (isFlushing) return;
    isFlushing = true;

    const { prev, favorites } = get();
    const toAdd = [...favorites].filter(id => !prev.has(id));
    const toRemove = [...prev].filter(id => !favorites.has(id));

    if (toAdd.length === 0 && toRemove.length === 0) {
      isFlushing = false;

      return;
    }

    const db = await openDb();

    try {
      if (toAdd.length > 0) {
        const items = await api.products.batch({ ids: toAdd });

        await Promise.all(items.map(item => putItem(db, item)));
      }

      await Promise.all(toRemove.map(id => deleteItem(db, id)));

      const newIdbState = new Set(
        [...prev, ...toAdd].filter(id => !toRemove.includes(id)),
      );
      const currentFavorites = get().favorites;
      const newPendingAdd = new Set(
        [...currentFavorites].filter(fid => !newIdbState.has(fid)),
      );
      const newPendingRemove = new Set(
        [...newIdbState].filter(fid => !currentFavorites.has(fid)),
      );

      setPending(newPendingAdd, newPendingRemove);
      set({ prev: newIdbState });
    } finally {
      db.close();
      isFlushing = false;
    }
  },
}));

export { useFavoritesStore };
