import {
  ABNForms,
  CreateFormRegisterable,
  UnionOfValues,
} from "app/types/types";
import { ComponentProps, Context, useContext } from "react";
import { useForm } from "react-hook-form";

type Rules = Parameters<ReturnType<typeof useForm>["register"]>[1];

type Props<T extends UnionOfValues<ABNForms>> = ComponentProps<"input"> & {
  name: CreateFormRegisterable<T["formValues"]>;
  context: Context<T["context"]>;
  rules?: Rules;
};

// const Select = <T extends UnionOfValues<ABNForms>>(props: Props<T>) => {

const TextInput = <T extends UnionOfValues<ABNForms>>(props: Props<T>) => {
  const { name, required, placeholder, id, rules } = props;
  const {
    formManager: { register },
    formDisabled,
  } = useContext(props.context);
  return (
    <input
      // @ts-ignore
      {...register(name, rules)}
      // id={id}
      disabled={formDisabled}
      type="text"
      className={`rounded-md ${formDisabled ? "bg-gray-100" : "bg-white"} ${
        formDisabled ? "text-gray-400" : "text-gray-800"
      } py-3 border-gray-300 w-full font-medium px-4 rounded-lg w-full text-base font-normal leading-normal border border-gray-300 appearance-none rounded transition-colors transition-shadow`}
      defaultValue=""
      data-error="Please enter your Name"
      {...props}
    />
  );
};

export default TextInput;
