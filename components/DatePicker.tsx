import { ABNForms, CreateFormRegisterable } from "app/types/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Context, useContext } from "react";
import _DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
dayjs.extend(utc);

export type UnionOfValues<T> = T[keyof T];

type Rules = Parameters<ReturnType<typeof useForm>["register"]>[1];

type Props<T extends UnionOfValues<ABNForms>> = {
  name: CreateFormRegisterable<T["formValues"]>;
  context: Context<T["context"]>;
  rules?: Rules;
};

const DatePicker = <T extends UnionOfValues<ABNForms>>(props: Props<T>) => {
  const { name, rules, context } = props;
  const {
    formDisabled,
    formManager: { control, register },
  } = useContext(context);
  return (
    <div>
      <Controller
        // @ts-ignore
        name={name}
        rules={rules}
        control={control}
        render={({ field: { onChange, value } }) => (
          <_DatePicker
            disabled={formDisabled}
            // @ts-ignore
            selected={value}
            onChange={(date) => onChange(date)}
            dateFormat="dd/MM/yyyy"
            showMonthDropdown
            showYearDropdown
            placeholderText="Select Date"
            dropdownMode="select"
            className={`rounded-md ${
              formDisabled ? "bg-gray-100" : "bg-white"
            } ${
              formDisabled ? "text-gray-400" : "text-gray-800"
            } py-3 border-gray-300 w-full font-medium px-4 rounded-lg w-full text-base font-normal leading-normal border border-gray-300 appearance-none rounded transition-colors transition-shadow`}
          />
        )}
      />
    </div>
  );
};

export default DatePicker;
