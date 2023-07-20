"use client";

import { useSettingsStore } from "./settingsState";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";

export default function Settings() {
  const favoriteColor = useSettingsStore((state) => state.favoriteColor);
  const favoriteNumber = useSettingsStore((state) => state.favoriteNumber);
  const setFavoriteColor = useSettingsStore(
    (state) => state.updateFavoriteColor
  );
  const setFavoriteNumber = useSettingsStore(
    (state) => state.updateFavoriteNumber
  );
  return (
    <form action="/send-data-here" method="post">
      <label htmlFor="favoriteColor">Favorite Color2</label>
      <Input
        type="text"
        id="favoriteColor"
        name="favoriteColor"
        value={favoriteColor}
        onChange={(e) => setFavoriteColor(e.target.value)}
        required
      />
      <label htmlFor="favoriteNumber">Favorite Number</label>
      <Input
        type="number"
        id="favoriteNumber"
        name="favoriteNumber"
        value={favoriteNumber}
        required
        onChange={(e) => setFavoriteNumber(parseInt(e.target.value))}
        minLength={1}
        maxLength={20}
      />
      <Button>Submit</Button>
    </form>
  );
}
