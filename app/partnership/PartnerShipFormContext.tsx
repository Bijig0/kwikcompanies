"use client";
import Select from "@components/Select";
import TextInput from "@components/TextInput";
import { useBoolean } from "@utils/useBoolean";
import { ComponentProps, ReactNode, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import FormValues, { PartnershipFormRegisterable } from "./form";

type TPartnershipFormContext = {
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
  const formManager = useForm<FormValues>();

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
  props: ComponentProps<typeof TextInput<PartnershipFormRegisterable>>
) => {
  return <TextInput<PartnershipFormRegisterable> {...props} />;
};

const PartnershipSelect = (
  props: ComponentProps<typeof Select<PartnershipFormRegisterable>>
) => {
  return <Select<PartnershipFormRegisterable> {...props} />;
};

// const Partnership

PartnershipFormProvider.TextInput = PartnershipTextInput;
PartnershipFormProvider.Select = PartnershipSelect;

export const usePartnershipFormContext = () =>
  useContext(PartnershipFormContext);

export default PartnershipFormProvider;
