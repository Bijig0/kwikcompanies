import FormValues from "app/contact/soleTraderForm";
import { FormContexts } from "app/types/types";
import { Context, useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDown } from "react-icons/ai";

type CreateFormRegisterable<T extends FormValues> = Parameters<
  ReturnType<typeof useForm<T>>["register"]
>[0];

type Props<T extends FormValues, FormContext extends FormContexts> = {
  readonly options: readonly string[];
  name: CreateFormRegisterable<T>;
  context: Context<FormContext>;
};

// context requires FormValues
// TFormRegisterable is all the strings that useForm creates from the FormValues

// So we can actually jsut pass in FormValues and derive the res

const Select = <T extends FormValues, FormContext extends FormContexts>(
  props: Props<T, FormContext>
) => {
  const {
    formManager: { register, handleSubmit, formState },
    formDisabled,
  } = useContext(props.context);

  const v = useContext(props.context);

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
