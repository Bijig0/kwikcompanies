import {
  CreateFormRegisterable,
  FormContexts,
  FormValues,
} from "app/types/types";
import { ComponentProps, Context, useContext } from "react";

type Props<
  T extends FormValues,
  FormContext extends FormContexts
> = ComponentProps<"input"> & {
  name: CreateFormRegisterable<T>;
  context: Context<FormContext>;
};

const TextInput = <T extends FormValues, FormContext extends FormContexts>(
  props: Props<T, FormContext>
) => {
  const { name, required, placeholder } = props;
  const {
    formManager: { register },
    formDisabled,
  } = useContext(props.context);
  return (
    <input
      {...register(name, { required: "This field is required" })}
      disabled={formDisabled}
      type="text"
      className={`rounded-md ${formDisabled ? "bg-gray-100" : "bg-white"} ${
        formDisabled ? "text-gray-400" : "text-gray-800"
      } py-3 border-gray-300 w-full font-medium px-4 rounded-lg w-full text-base font-normal leading-normal border border-gray-300 appearance-none rounded transition-colors transition-shadow`}
      defaultValue=""
      placeholder={placeholder}
      required={required}
      data-error="Please enter your Name"
    />
  );
};

export default TextInput;
