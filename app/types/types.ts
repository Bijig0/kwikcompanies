import { TSoleTraderFormContext } from "app/contact/SoleTraderFormContext";
import SoleTraderFormValues from "app/contact/soleTraderForm";
import { TPartnershipFormContext } from "app/partnership/PartnerShipFormContext";
import PartnerShipFormValues from "app/partnership/partnershipForm";
import { useForm } from "react-hook-form";

export type UnionOfValues<T> = T[keyof T];

export type FormValues = SoleTraderFormValues | PartnerShipFormValues;

export type FormContexts = TSoleTraderFormContext | TPartnershipFormContext;

export type ABNForms = {
  soleTrader: {
    formValues: SoleTraderFormValues;
    context: TSoleTraderFormContext;
  };
  partnership: {
    formValues: PartnerShipFormValues;
    context: TPartnershipFormContext;
  };
};

export type CreateFormRegisterable<T extends FormValues> = Parameters<
  ReturnType<typeof useForm<T>>["register"]
>[0];
