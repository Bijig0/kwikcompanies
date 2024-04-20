import { TSoleTraderFormContext } from "app/contact/SoleTraderFormContext";
import SoleTraderFormValues from "app/contact/soleTraderForm";
import { TPartnershipFormContext } from "app/partnership/PartnerShipFormContext";
import PartnerShipFormValues from "app/partnership/form";
import { useForm } from "react-hook-form";

export type FormValues = SoleTraderFormValues | PartnerShipFormValues;

export type FormContexts = TSoleTraderFormContext | TPartnershipFormContext;

export type ABNForms = {
  formValues: SoleTraderFormValues;
  context: TSoleTraderFormContext;
} & {
  formValues: PartnerShipFormValues;
  context: TPartnershipFormContext;
};

export type CreateFormRegisterable<T extends FormValues> = Parameters<
  ReturnType<typeof useForm<T>>["register"]
>[0];
