import yesNoToBool from "@utils/yesNoToBool";
import { Controller } from "react-hook-form";
import ErrorText from "../../../components/ErrorText";
import FormPartLayout from "../FormPartLayout";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";

const text = {
  Yes: "Yes ($49)",
  No: "No",
} satisfies Record<"Yes" | "No", string>;

const GSTRegistration = () => {
  const {
    formDisabled,
    formManager: {
      register,
      formState: { errors },
      setValue,
      control,
    },
  } = useSoleTraderFormContext();
  const handleSelectGst = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as "Yes" | "No";
    const asBool = yesNoToBool(value);
    setValue("gstRegistration.registerForGst", asBool);
  };

  return (
    <FormPartLayout header="GST Registration" step={7}>
      <label htmlFor="message">Will you register for GST?</label>
      <div className="flex flex-col">
        <Controller
          name="gstRegistration.registerForGst"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              {["Yes", "No"].map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    onBlur={onBlur} // notify when input is touched
                    onChange={() => onChange(option === "Yes")} // send boolean value to hook form
                    checked={value === (option === "Yes")}
                    ref={ref}
                    className="form-radio"
                    disabled={formDisabled}
                  />
                  <span className="ml-2">{text[option]}</span>
                </label>
              ))}
            </>
          )}
        />
        {/* {["Yes", "No"].map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              onChange={handleSelectGst}
              type="radio"
              name="gstRegistration.registerForGst"
              className="form-radio"
              required
            />
            <span className="ml-2">{text[option]}</span>
          </label>
        ))} */}
      </div>
      {errors?.gstRegistration?.registerForGst && (
        <ErrorText>{errors?.gstRegistration?.registerForGst.message}</ErrorText>
      )}
    </FormPartLayout>
  );
};

export default GSTRegistration;
