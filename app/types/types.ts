import { TCompanyFormContext } from "app/company/CompanyFormContext";
import CompanyFormValues from "app/company/companyForm";
import { TPartnershipFormContext } from "app/partnership/PartnerShipFormContext";
import PartnerShipFormValues from "app/partnership/partnershipForm";
import { TSoleTraderFormContext } from "app/sole-trader/SoleTraderFormContext";
import SoleTraderFormValues from "app/sole-trader/soleTraderForm";
import { useForm } from "react-hook-form";
import { Tables } from "./types_db";

export const titles = ["Mr", "Mrs", "Miss", "Ms", "Dr", "Other"] as const;

type Title = (typeof titles)[number];

export type UnionOfValues<T> = T[keyof T];

export type FormValues =
  | SoleTraderFormValues
  | PartnerShipFormValues
  | CompanyFormValues;

export type FormContexts =
  | TSoleTraderFormContext
  | TPartnershipFormContext
  | TCompanyFormContext;

export type ABNForms = {
  soleTrader: {
    formValues: SoleTraderFormValues;
    context: TSoleTraderFormContext;
  };
  partnership: {
    formValues: PartnerShipFormValues;
    context: TPartnershipFormContext;
  };
  company: {
    formValues: CompanyFormValues;
    context: TCompanyFormContext;
  };
};

export type CreateFormRegisterable<T extends FormValues> = Parameters<
  ReturnType<typeof useForm<T>>["register"]
>[0];

export type Price = Tables<"prices">;
