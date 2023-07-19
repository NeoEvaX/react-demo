"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBoundStore } from "@/store/settingsSlice";

export default function HiddenSettings() {
  const favoritefood = useBoundStore((state) => state.favoritefood);
  const setFavoriteFood = useBoundStore((state) => state.updateFavoriteFood);
  return (
    <form action="/send-data-here" method="post">
      <label htmlFor="favoritefood">Favorite Food</label>
      <Input
        type="text"
        id="favoritefood"
        name="favoritefood"
        value={favoritefood}
        onChange={(e) => setFavoriteFood(e.target.value)}
        required
      />

      <Button>Submit</Button>
    </form>
  );
}
