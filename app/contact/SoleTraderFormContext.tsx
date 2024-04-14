import { createContext } from "react";
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

const SoleTraderFormContext = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>();

  return (
    <StoreContext.Provider
      value={{
        register,
        handleSubmit,
        formState,
      }}
    >
      {/* Your Components */}
    </StoreContext.Provider>
  );
};

export default SoleTraderFormContext;
