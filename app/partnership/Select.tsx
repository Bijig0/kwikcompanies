import { AiOutlineDown } from "react-icons/ai";
import { usePartnershipFormContext } from "./PartnerShipFormContext";
import { FormRegisterable } from "./form";
type Props = {
  readonly options: readonly string[];
  name: FormRegisterable;
};

const Select = (props: Props) => {
  const {
    formManager: { register, handleSubmit, formState },
    formDisabled,
  } = usePartnershipFormContext();

  const { options } = props;
  return (
    <div className="relative flex">
      <select
        disabled={formDisabled}
        {...register(props.name)}
        className={`rounded-md text-gray-800 ${
          formDisabled ? "bg-gray-100" : "bg-white"
        } ${
          formDisabled ? "text-gray-400" : "text-gray-800"
        } py-3 border-gray-300 w-full font-medium px-4 rounded-lg w-full text-base font-normal leading-normal border border-gray-300 appearance-none rounded transition-colors transition-shadow`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 pointer-events-none">
        <AiOutlineDown className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Select;
