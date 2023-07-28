"use client";

import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { prisma } from "@/lib/prisma";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId, useState } from "react";
import { Controller, set, useForm } from "react-hook-form";
import Select from "react-select";
import * as z from "zod";

type SelectOption = {
  label: string;
  value: number;
};

const schema = z.object({
  brand: z.number().int(),
  cost: z.coerce.number().step(0.01),
});

export default function TestForm() {
  const [brands, setBrands] = useState<SelectOption[]>([]);

  async function loadBrands() {
    await fetch("/api/brands", {
      method: "GET",
    })
      .then(async (res) => {
        if (res.status === 200) {
          const results = await res.json();
          setBrands(results[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const selectId = useId();

  const saveData = (form_data: z.infer<typeof schema>) => {
    console.log("form_data", form_data);
  };

  return (
    <form onSubmit={handleSubmit(saveData)} noValidate>
      <Controller
        control={control}
        name="brand"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            instanceId={selectId}
            options={brands}
            onBlur={onBlur}
            ref={ref}
            value={brands.find((c) => c.value === value)}
            onChange={(val) => onChange(val?.value)}
          />
        )}
      />
      {errors.brand?.message && <p>{errors.brand?.message}</p>}
      <Input
        placeholder="Number"
        type="number"
        inputMode="decimal"
        {...register("cost")}
      />
      {errors.cost?.message && <p>{errors.cost?.message}</p>}
      <Button onClick={loadBrands}>Load</Button>
      <Button type="submit">Submit</Button>
      {/* <DevTool control={control} /> */}
    </form>
  );
}
