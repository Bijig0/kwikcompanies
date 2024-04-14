"use client";
import { ReactNode, createContext, useContext, useState } from "react";
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
  toggleFormState: () => void;
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

  const [formDisabled, setFormDisabled] = useState(false);
  const toggleFormState = () => setFormDisabled(true);

  return (
    <SoleTraderFormContext.Provider
      value={{
        register,
        handleSubmit,
        formState,
        getValues,
        watch,
        setValue,
        toggleFormState,
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
