import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const resetters: (() => void)[] = [];

const initialSettings = {
  favoriteColor: "",
  favoriteNumber: 0,
};

type SettingsSlice = {
  favoriteColor: string;
  favoriteNumber: number;
  updateFavoriteColor: (color: string) => void;
  updateFavoriteNumber: (number: number) => void;
};

const createSettingsSlice: StateCreator<SettingsSlice> = (set) => {
  resetters.push(() => set(initialSettings));
  return {
    ...initialSettings,
    updateFavoriteColor: (color: string) => set({ favoriteColor: color }),
    updateFavoriteNumber: (number: number) => set({ favoriteNumber: number }),
  };
};

const initialSecretSettings = {
  favoritefood: "",
};

type SecretSettingsSlice = {
  favoritefood: string;
  updateFavoriteFood: (food: string) => void;
};

const createSecretSettingsSlice: StateCreator<SecretSettingsSlice> = (set) => {
  resetters.push(() => set(initialSecretSettings));
  return {
    ...initialSecretSettings,
    updateFavoriteFood: (food: string) => set({ favoritefood: food }),
  };
};

export const useBoundStore = create<SettingsSlice & SecretSettingsSlice>()(
  persist(
    (...a) => ({
      ...createSettingsSlice(...a),
      ...createSecretSettingsSlice(...a),
    }),
    { name: "boundStore", storage: createJSONStorage(() => localStorage) }
  )
);

export const resetAllSlices = () => resetters.forEach((resetter) => resetter());
