import { useFavoritesStore, useUserStore } from '@/features';
import { useEffect, useState } from 'react';

export const useHeader = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [bmExpanded, setBmExpanded] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const favStore = useFavoritesStore.getState();
    const userStore = useUserStore.getState();

    favStore.init().then(() => favStore.flush());
    userStore.init().catch(() => {});
  }, []);

  const user = useUserStore(s => s.user);

  return {
    searchExpanded,
    setSearchExpanded,
    bmExpanded,
    setBmExpanded,
    query,
    setQuery,
    user,
  };
};
