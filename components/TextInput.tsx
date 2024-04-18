import { ComponentProps } from "react";
import { useSoleTraderFormContext } from "../app/contact/SoleTraderFormContext";

type Props<TFormRegisterable extends string> = ComponentProps<"input"> & {
  name: TFormRegisterable;
};

const TextInput = <TFormRegisterable extends string>(
  props: Props<TFormRegisterable>
) => {
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
