"use client";

import { useSettingsStore } from "./settingsState";
import { Alert } from "@/components/ui/Alert/Alert";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Label } from "@/components/ui/Label/Label";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

export default function Settings() {
  const favoriteColor = useSettingsStore((state) => state.favoriteColor);
  const favoriteNumber = useSettingsStore((state) => state.favoriteNumber);
  const setFavoriteColor = useSettingsStore(
    (state) => state.updateFavoriteColor,
  );
  const setFavoriteNumber = useSettingsStore(
    (state) => state.updateFavoriteNumber,
  );
  const resetSettingsStore = useSettingsStore((state) => state.reset);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const formSchema = z.object({
    favoriteColor: z.string(),
    favoriteNumber: z.coerce.number().step(0.001).min(0),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    getValues,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-10" noValidate>
      <Label>Favorite Color</Label>
      <Input placeholder="Color" {...register("favoriteColor")} />
      {errors.favoriteColor?.message && (
        <Alert>{errors.favoriteColor?.message}</Alert>
      )}

      <Label>Favorite Number</Label>
      <Input
        placeholder="Number"
        type="number"
        inputMode="decimal"
        {...register("favoriteNumber")}
      />
      {errors.favoriteNumber?.message && (
        <Alert>{errors.favoriteNumber?.message}</Alert>
      )}

      <Button type="submit">Submit</Button>
      <Button onClick={resetSettingsStore}>Reset</Button>
      <div>{JSON.stringify(getValues())}</div>
      <DevTool control={control} />
    </form>
  );
}
