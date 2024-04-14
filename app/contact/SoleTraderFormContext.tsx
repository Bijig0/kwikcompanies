"use client";
import { useBoolean } from "@utils/useBoolean";
import { ReactNode, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import FormValues from "./form";

type UseFormReturnType = ReturnType<typeof useForm<FormValues>>;

type TSoleTraderFormContext = {
  //   register: UseFormRegister<FormValues>;
  register: UseFormReturnType["register"];
  handleSubmit: UseFormReturnType["handleSubmit"];
  formState: UseFormReturnType["formState"];
  getValues: UseFormReturnType["getValues"];
  watch: UseFormReturnType["watch"];
  setValue: UseFormReturnType["setValue"];
  enableForm: () => void;
  disableForm: () => void;
  formDisabled: boolean;
  totalSteps: number;
};

const SoleTraderFormContext = createContext<TSoleTraderFormContext>(
  {} as TSoleTraderFormContext
);

type Props = {
  children: ReactNode;
  totalSteps: number;
};

const SoleTraderFormProvider = (props: Props) => {
  const { totalSteps } = props;
  const { register, handleSubmit, formState, getValues, watch, setValue } =
    useForm<FormValues>();

  const {
    value: formDisabled,
    setTrue: disableForm,
    setFalse: enableForm,
    toggle: toggleFormState,
  } = useBoolean(false);

  return (
    <SoleTraderFormContext.Provider
      value={{
        register,
        handleSubmit,
        formState,
        getValues,
        watch,
        setValue,
        disableForm,
        enableForm,
        formDisabled,
        totalSteps,
      }}
    >
      {props.children}
    </SoleTraderFormContext.Provider>
  );
};

export const useSoleTraderFormContext = () => useContext(SoleTraderFormContext);

export default SoleTraderFormProvider;
