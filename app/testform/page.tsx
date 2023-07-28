import TestFormForm from "./form";
import { env } from "@/env.mjs";
import { headers } from "next/headers";

export type SelectOption = {
  label: string;
  value: number;
};

async function getBrands() {
  const res = await fetch(env.API_URL + `/api/brands`);

  if (!res.ok) {
    throw new Error("Failed to fetch brands");
  }

  const data = await res.json();
  return data[0];
}

export default async function TestForm() {
  const data: SelectOption[] = await getBrands();

  return <TestFormForm brands={data} />;
}
