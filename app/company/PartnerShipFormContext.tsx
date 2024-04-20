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

export type TPartnershipFormContext = {
  //   register: UseFormRegister<FormValues>;
  formManager: ReturnType<typeof useForm<FormValues>>;
  enableForm: () => void;
  disableForm: () => void;
  formDisabled: boolean;
  totalSteps: number;
};

const PartnershipFormContext = createContext<TPartnershipFormContext>(
  {} as TPartnershipFormContext
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

const PartnershipFormProvider = (props: Props) => {
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
    <PartnershipFormContext.Provider
      value={{
        formManager,
        disableForm,
        enableForm,
        formDisabled,
        totalSteps,
      }}
    >
      {props.children}
    </PartnershipFormContext.Provider>
  );
};

const PartnershipTextInput = (
  props: Omit<
    ComponentProps<typeof TextInput<ABNForms["partnership"]>>,
    "context"
  >
) => {
  return (
    <TextInput<ABNForms["partnership"]>
      {...props}
      context={PartnershipFormContext}
    />
  );
};

const PartnershipSelect = (
  props: Omit<ComponentProps<typeof Select<ABNForms["partnership"]>>, "context">
) => {
  return (
    <Select<ABNForms["partnership"]>
      context={PartnershipFormContext}
      {...props}
    />
  );
};

// const Partnership

PartnershipFormProvider.TextInput = PartnershipTextInput;
PartnershipFormProvider.Select = PartnershipSelect;
PartnershipFormProvider.DatePicker = PartnershipSelect;

export const usePartnershipFormContext = () =>
  useContext(PartnershipFormContext);

export default PartnershipFormProvider;
