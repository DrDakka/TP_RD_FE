import { create } from 'zustand';
import { api } from '@/shared';
import type { UserProfile } from '@/shared';

type UserStore = {
  user: UserProfile | null;
  init: () => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: UserProfile) => void;
};

const useUserStore = create<UserStore>(set => ({
  user: null,

  init: async () => {
    try {
      const user = await api.auth.me();

      set({ user });
    } catch {
      // not authenticated
    }
  },

  logout: async () => {
    await api.auth.logout();

    set({ user: null });
  },

  setUser: user => set({ user }),
}));

export { useUserStore };
