import _DatePicker from "react-datepicker";
import { useSoleTraderFormContext } from "./SoleTraderFormContext";

const DatePicker = () => {
  const { formDisabled } = useSoleTraderFormContext();
  return (
    <div>
      <_DatePicker
        disabled={formDisabled}
        selected={new Date()}
        onChange={(date) => console.log(date)}
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        className={`rounded-md ${
          formDisabled ? "bg-gray-100" : "bg-white"
        } text-gray-800 py-3 border-gray-300 w-full font-medium px-4 rounded-lg w-full text-base font-normal leading-normal border border-gray-300 appearance-none rounded transition-colors transition-shadow`}
      />
    </div>
  );
};

export default DatePicker;
