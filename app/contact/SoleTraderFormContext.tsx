import { ReactNode, createContext } from "react";
import { useForm } from "react-hook-form";
import FormValues from "./form";

type UseFormReturnType = ReturnType<typeof useForm<FormValues>>;

type TSoleTraderFormContext = {
  //   register: UseFormRegister<FormValues>;
  register: UseFormReturnType["register"];
  handleSubmit: UseFormReturnType["handleSubmit"];
  formState: UseFormReturnType["formState"];
};

const StoreContext = createContext<TSoleTraderFormContext>(
  {} as TSoleTraderFormContext
);

type Props = {
  children: ReactNode;
};

const SoleTraderFormContext = (props: Props) => {
  const { register, handleSubmit, formState } = useForm<FormValues>();

  return (
    <StoreContext.Provider
      value={{
        register,
        handleSubmit,
        formState,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default SoleTraderFormContext;
