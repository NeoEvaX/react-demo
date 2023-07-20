"use client";

import { useHiddenSettingsStore } from "./hiddenSettingsState";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";

export default function HiddenSettings() {
  const favoriteFood = useHiddenSettingsStore((state) => state.favoriteFood);
  const setFavoriteFood = useHiddenSettingsStore(
    (state) => state.updateFavoriteFood
  );
  return (
    <form action="/send-data-here" method="post">
      <label htmlFor="favoriteFood">Favorite Food</label>
      <Input
        type="text"
        id="favoritefood"
        name="favoriteFood"
        value={favoriteFood}
        onChange={(e) => setFavoriteFood(e.target.value)}
        required
      />

      <Button>Submit</Button>
    </form>
  );
}
