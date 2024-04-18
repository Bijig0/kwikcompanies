"use client";
import { useBoolean } from "@utils/useBoolean";
import { ReactNode, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import FormValues from "./form";

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

export const usePartnershipFormContext = () =>
  useContext(PartnershipFormContext);

export default PartnershipFormProvider;
