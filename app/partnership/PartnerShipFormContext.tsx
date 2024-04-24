"use client";
import DatePicker from "@components/DatePicker";
import Select from "@components/Select";
import TextInput from "@components/TextInput";
import { useBoolean } from "@utils/useBoolean";
import { ABNForms } from "app/types/types";
import { ComponentProps, ReactNode, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { createEmptyPartnerDetails } from "./createEmptyPartnerDetails";
import FormValues from "./partnershipForm";

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

const PartnershipFormProvider = (props: Props) => {
  const { totalSteps } = props;
  const formManager = useForm<FormValues>({
    defaultValues: {
      partnerDetails: [createEmptyPartnerDetails()],
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

const PartnershipDatePicker = (
  props: Omit<
    ComponentProps<typeof DatePicker<ABNForms["partnership"]>>,
    "context"
  >
) => {
  return (
    <DatePicker<ABNForms["partnership"]>
      context={PartnershipFormContext}
      {...props}
    />
  );
};

// const Partnership

PartnershipFormProvider.TextInput = PartnershipTextInput;
PartnershipFormProvider.Select = PartnershipSelect;
PartnershipFormProvider.DatePicker = PartnershipDatePicker;

export const usePartnershipFormContext = () =>
  useContext(PartnershipFormContext);

export default PartnershipFormProvider;
