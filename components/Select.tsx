import {
  ABNForms,
  CreateFormRegisterable,
  UnionOfValues,
} from "app/types/types";
import { Context, useContext } from "react";
import { AiOutlineDown } from "react-icons/ai";

type Props<T extends UnionOfValues<ABNForms>> = {
  readonly options: readonly string[];
  name: CreateFormRegisterable<T["formValues"]>;
  context: Context<T["context"]>;
};

// context requires FormValues
// TFormRegisterable is all the strings that useForm creates from the FormValues

// So we can actually jsut pass in FormValues and derive the res

const Select = <T extends UnionOfValues<ABNForms>>(props: Props<T>) => {
  const { options, name, context } = props;
  const {
    formManager: { register, handleSubmit, formState },
    formDisabled,
  } = useContext(context);

  return (
    <div className="relative flex">
      <select
        disabled={formDisabled}
        // @ts-ignore
        {...register(name)}
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
