import _DatePicker from "react-datepicker";

const DatePicker = () => {
  return (
    <div>
      <_DatePicker
        selected={new Date()}
        onChange={(date) => console.log(date)}
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        className="rounded-md text-gray-800 bg-white py-3 border-gray-300 w-full font-medium px-4 rounded-lg w-full text-base font-normal leading-normal bg-white border border-gray-300 appearance-none rounded transition-colors transition-shadow"
      />
    </div>
  );
};

export default DatePicker;
