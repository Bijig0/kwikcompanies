import yesNoToBool from "@utils/yesNoToBool";
import ErrorText from "../../../components/ErrorText";
import FormPartLayout from "../FormPartLayout";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";

const text = {
  Yes: "Yes ($49)",
  No: "No",
} satisfies Record<"Yes" | "No", string>;

const GSTRegistration = () => {
  const {
    formManager: {
      register,
      formState: { errors },
      setValue,
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
        {["Yes", "No"].map((option) => (
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
        ))}
      </div>
      {errors?.gstRegistration?.registerForGst && (
        <ErrorText>{errors?.gstRegistration?.registerForGst.message}</ErrorText>
      )}
    </FormPartLayout>
  );
};

export default GSTRegistration;
