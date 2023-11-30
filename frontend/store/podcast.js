import { create } from "zustand";

export const usePodcastStore = create((set) => ({
  loading: false,
  setLoading: () => set((state) => ({ loading: !state.loading })),
}));