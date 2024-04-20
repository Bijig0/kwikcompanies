"use client";
import Select from "@components/Select";
import TextInput from "@components/TextInput";
import { useBoolean } from "@utils/useBoolean";
import { ABNForms } from "app/types/types";
import { ComponentProps, ReactNode, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  default as FormValues,
  default as PartnerShipFormValues,
} from "./companyForm";

export type TCompanyFormContext = {
  //   register: UseFormRegister<FormValues>;
  formManager: ReturnType<typeof useForm<FormValues>>;
  enableForm: () => void;
  disableForm: () => void;
  formDisabled: boolean;
  totalSteps: number;
};

const CompanyFormContext = createContext<TCompanyFormContext>(
  {} as TCompanyFormContext
);

type Props = {
  children: ReactNode;
  totalSteps: number;
};

export const createEmptyPartnerDetails =
  (): PartnerShipFormValues["partnerDetails"] => [
    {
      partnerType: "Individual",
      name: {
        title: "Mr",
        firstName: "",
        lastName: "",
        otherNames: {
          answer: false,
          otherName: "",
        },
      },
      email: "",
      phoneNumber: "",
      dateOfBirth: new Date(),
      birthLocation: {
        country: "Australia",
        state: "Australian Capital Territory",
        city: "",
      },
      taxFileNumber: "",
      homeAddress: "",
      declaredIsAustralianResidentForTaxPurposes: false,
    },
  ];

const CompanyFormProvider = (props: Props) => {
  const { totalSteps } = props;
  const formManager = useForm<FormValues>({
    defaultValues: {
      partnerDetails: createEmptyPartnerDetails(),
    },
  });

  const {
    value: formDisabled,
    setTrue: disableForm,
    setFalse: enableForm,
    toggle: toggleFormState,
  } = useBoolean(false);

  return (
    <CompanyFormContext.Provider
      value={{
        formManager,
        disableForm,
        enableForm,
        formDisabled,
        totalSteps,
      }}
    >
      {props.children}
    </CompanyFormContext.Provider>
  );
};

const CompanyTextInput = (
  props: Omit<
    ComponentProps<typeof TextInput<ABNForms["partnership"]>>,
    "context"
  >
) => {
  return (
    <TextInput<ABNForms["partnership"]>
      {...props}
      context={CompanyFormContext}
    />
  );
};

const CompanySelect = (
  props: Omit<ComponentProps<typeof Select<ABNForms["partnership"]>>, "context">
) => {
  return (
    <Select<ABNForms["partnership"]> context={CompanyFormContext} {...props} />
  );
};

// const Partnership

CompanyFormProvider.TextInput = CompanyTextInput;
CompanyFormProvider.Select = CompanySelect;
CompanyFormProvider.DatePicker = CompanySelect;

export const useCompanyFormContext = () => useContext(CompanyFormContext);

export default CompanyFormProvider;
