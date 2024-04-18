import { ComponentProps } from "react";
import { useSoleTraderFormContext } from "./SoleTraderFormContext";
import { FormRegisterable } from "./form";

type Props = ComponentProps<"input"> & { name: FormRegisterable };

const TextInput = (props: Props) => {
  const { name, required, placeholder } = props;
  const {
    formManager: { register },
    formDisabled,
  } = useSoleTraderFormContext();
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
