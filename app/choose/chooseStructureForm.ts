import { useForm } from "react-hook-form";

export const structures = ["Individual or Sole Trader"] as const;

export type Structure = (typeof structures)[number];

export type ChooseStructureFormValues = {
  structure: Structure;
};

export type StructureFormRegisterable = Parameters<
  ReturnType<typeof useForm<ChooseStructureFormValues>>["register"]
>[0];
