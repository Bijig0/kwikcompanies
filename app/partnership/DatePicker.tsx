import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { ComponentProps } from "react";
import _DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { usePartnershipFormContext } from "./PartnerShipFormContext";
import FormValues from "./form";
dayjs.extend(utc);

type Props = ComponentProps<"input"> & { name: keyof FormValues };

const DatePicker = (props: Props) => {
  const { name, placeholder } = props;
  const {
    formDisabled,
    formManager: { control, register },
  } = usePartnershipFormContext();
  return (
    <div>
      <Controller
        name={name}
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
