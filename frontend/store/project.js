import { create } from "zustand";

export const useProjectStore = create((set) => ({
  loading: false,
  setLoading: () => set((state) => ({ loading: !state.loading })),
}));