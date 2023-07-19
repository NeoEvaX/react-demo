"use client";

import { Button } from "./ui/button";
import { resetAllSlices, useBoundStore } from "@/store/settingsSlice";

export default function ClearStorageButton() {
  return (
    <Button
      onClick={() => {
        useBoundStore.persist.clearStorage();
        resetAllSlices();
      }}
    >
      Clear Storage
    </Button>
  );
}
