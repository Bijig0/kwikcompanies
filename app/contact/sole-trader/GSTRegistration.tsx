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
    },
  } = useSoleTraderFormContext();

  return (
    <FormPartLayout header="GST Registration" step={7}>
      <label htmlFor="message">Will you register for GST?</label>
      <div className="flex flex-col">
        {["Yes", "No"].map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              {...register("registerForGst", {
                required: "This field is required",
              })}
              type="radio"
              className="form-radio"
            />
            <span className="ml-2">{text[option]}</span>
          </label>
        ))}
      </div>
      {errors.registerForGst && (
        <ErrorText>{errors.registerForGst.message}</ErrorText>
      )}
    </FormPartLayout>
  );
};

export default GSTRegistration;
