import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  login: () => set({ user: { name: "Ashan", email: "ashan@gmail.com" } }),
  logout: () => set({ user: null }),
}));
