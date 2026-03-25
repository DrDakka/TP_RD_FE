import { useEffect } from 'react';
import { useFavoritesStore } from './store';

const useFavoritesSync = () => {
  const init = useFavoritesStore(state => state.init);
  const flush = useFavoritesStore(state => state.flush);

  useEffect(() => {
    init().then(flush);
  }, [init, flush]);
};

export { useFavoritesSync };
