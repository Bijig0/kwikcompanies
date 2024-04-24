"use client";
import { useBoolean } from "@utils/useBoolean";
import { ReactNode, createContext, useContext } from "react";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import {
  default as FormValues,
  default as SoleTraderFormValues,
} from "./soleTraderForm";

export type TSoleTraderFormContext = {
  //   register: UseFormRegister<FormValues>;
  formManager: ReturnType<typeof useForm<FormValues>>;
  enableForm: () => void;
  disableForm: () => void;
  formDisabled: boolean;
  totalSteps: number;
  onError: SubmitErrorHandler<SoleTraderFormValues>;
};

export const SoleTraderFormContext = createContext<TSoleTraderFormContext>(
  {} as TSoleTraderFormContext
);

type Props = {
  children: ReactNode;
  totalSteps: number;
};

const SoleTraderFormProvider = (props: Props) => {
  const { totalSteps } = props;
  const formManager = useForm<FormValues>();

  const {
    value: formDisabled,
    setTrue: disableForm,
    setFalse: enableForm,
    toggle: toggleFormState,
  } = useBoolean(false);



  const onError: SubmitErrorHandler<SoleTraderFormValues> = (errors) => {
    // expandBusinessAddressForm()
  };

  return (
    <SoleTraderFormContext.Provider
      value={{
        formManager,
        disableForm,
        enableForm,
        formDisabled,
        totalSteps,
        onError,
      }}
    >
      {props.children}
    </SoleTraderFormContext.Provider>
  );
};

export const useSoleTraderFormContext = () => useContext(SoleTraderFormContext);

export default SoleTraderFormProvider;
