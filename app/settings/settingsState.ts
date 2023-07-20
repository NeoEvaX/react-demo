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
};

export const useSettingsStore = create<State & Action>()(
  persist(
    (set) => ({
      ...initialSettings,
      updateFavoriteColor: (color: string) => set({ favoriteColor: color }),
      updateFavoriteNumber: (number: number) => set({ favoriteNumber: number }),
    }),
    {
      name: "settingsStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// const createSettingsSlice: StateCreator<SettingsSlice> = (set) => {
//   resetters.push(() => set(initialSettings));
//   return {
//     ...initialSettings,
//     updateFavoriteColor: (color: string) => set({ favoriteColor: color }),
//     updateFavoriteNumber: (number: number) => set({ favoriteNumber: number }),
//   };
// };

// export const useBoundStore = create<SettingsSlice>()(
//   persist(
//     (...a) => ({
//       ...createSettingsSlice(...a),
//     }),
//     { name: "boundStore", storage: createJSONStorage(() => localStorage) }
//   )
// );

// export const resetAllSlices = () => resetters.forEach((resetter) => resetter());
