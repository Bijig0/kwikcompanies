import { TSoleTraderFormContext } from "app/contact/SoleTraderFormContext";
import SoleTraderFormValues from "app/contact/soleTraderForm";
import { useForm } from "react-hook-form";

export type FormValues = SoleTraderFormValues;

export type FormContexts = TSoleTraderFormContext;

export type CreateFormRegisterable<T extends FormValues> = Parameters<
  ReturnType<typeof useForm<T>>["register"]
>[0];
