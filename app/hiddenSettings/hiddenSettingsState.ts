import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// const resetters: (() => void)[] = [];

const initialSettings = {
  favoriteFood: "",
};

type State = {
  favoriteFood: string;
};

type Action = {
  updateFavoriteFood: (food: string) => void;
};

export const useHiddenSettingsStore = create<State & Action>()(
  persist(
    (set) => ({
      ...initialSettings,
      updateFavoriteFood: (food: string) => set({ favoriteFood: food }),
    }),
    {
      name: "hiddenSettingsStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
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
