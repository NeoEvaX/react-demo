"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBoundStore } from "@/store/settingsSlice";

export default function Settings() {
  const favoriteColor = useBoundStore((state) => state.favoriteColor);
  const favoriteNumber = useBoundStore((state) => state.favoriteNumber);
  const setFavoriteColor = useBoundStore((state) => state.updateFavoriteColor);
  const setFavoriteNumber = useBoundStore(
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
