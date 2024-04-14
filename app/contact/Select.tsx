import { AiOutlineDown } from "react-icons/ai";
import { useSoleTraderFormContext } from "./SoleTraderFormContext";
import FormValues from "./form";

type Props = {
  readonly options: readonly string[];
  name: keyof FormValues;
};

const Select = (props: Props) => {
  const { register, handleSubmit, formState } = useSoleTraderFormContext();

  const { options } = props;
  return (
    <div className="relative flex">
      <select
        {...register(props.name)}
        className="rounded-md text-gray-800 bg-white py-3 border-gray-300 w-full font-medium px-4 rounded-lg w-full text-base font-normal leading-normal bg-white border border-gray-300 appearance-none rounded transition-colors transition-shadow"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
        <AiOutlineDown className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Select;
