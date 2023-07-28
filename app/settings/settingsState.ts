import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// const resetters: (() => void)[] = [];

const initialSettings = {
  favoriteColor: "",
  favoriteNumber: 0,
};

type State = {
  favoriteColor: string;
  favoriteNumber: number;
};

type Action = {
  updateFavoriteColor: (color: string) => void;
  updateFavoriteNumber: (number: number) => void;
  reset: () => void;
};

export const useSettingsStore = create<State & Action>()(
  persist(
    (set) => ({
      ...initialSettings,
      updateFavoriteColor: (color: string) => set({ favoriteColor: color }),
      updateFavoriteNumber: (number: number) => set({ favoriteNumber: number }),
      reset: () => {
        set(initialSettings);
        useSettingsStore.persist.clearStorage();
      },
    }),
    {
      name: "settingsStore",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ favoriteColor: state.favoriteColor }),
    },
  ),
);
