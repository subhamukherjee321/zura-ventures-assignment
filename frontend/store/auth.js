import { create } from "zustand";
const getUserData = JSON.parse(localStorage.getItem("zura-store")) || null;

export const useAuthStore = create((set) => ({
  auth: getUserData,
  setAuth: (value) => set((state) => ({ auth: value })),
}));