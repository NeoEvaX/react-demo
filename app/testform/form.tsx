"use client";

import { SelectOption } from "./page";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import * as z from "zod";

const schema = z.object({
  brand: z.number().int(),
  cost: z.string().nonempty("Required").pipe(z.coerce.number().step(0.01)),
});

type Props = {
  brands: SelectOption[];
};

export default function TestFormForm(props: Props) {
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
            options={props.brands}
            onBlur={onBlur}
            ref={ref}
            value={props.brands.find((c) => c.value === value)}
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
      <Button type="submit">Submit</Button>
    </form>
  );
}
