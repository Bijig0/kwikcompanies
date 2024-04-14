import { useSoleTraderFormContext } from "./SoleTraderFormContext";

type Props = {
  value: string;
};

const TextInput = (props: Props) => {
  const { formDisabled } = useSoleTraderFormContext();
  console.log({ formDisabled });
  return (
    <input
      disabled={formDisabled}
      type="text"
      id="name"
      name="name"
      className={`rounded-md ${formDisabled ? "bg-gray-100" : "bg-white"} ${
        formDisabled ? "text-gray-400" : "text-gray-800"
      } py-3 border-gray-300 w-full font-medium px-4 rounded-lg w-full text-base font-normal leading-normal border border-gray-300 appearance-none rounded transition-colors transition-shadow`}
      defaultValue=""
      placeholder="Somaia D. Silva"
      required={false}
      data-error="Please enter your Name"
    />
  );
};

export default TextInput;
