import FormPartLayout from "../FormPartLayout";
import Select from "../Select";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";
import { businessHistories } from "../form";

const BusinessDetails = () => {
  const { register, handleSubmit, formState, getValues, watch, setValue } =
    useSoleTraderFormContext();

  const text = {
    No: "No, I have never had an ABN as a sole trader.",
    Yes: "Yes, I have had an ABN as a sole trader before.",
  };

  return (
    <FormPartLayout header="Your business details" step={1}>
      <div>
        <label className="font-bold text-black text-md" htmlFor="name">
          Business History
        </label>
        <Select name="businessHistory" options={businessHistories} />
      </div>
      <div>
        <label className="font-semibold text-black text-md" htmlFor="name">
          Have you had an ABN in the past?
        </label>
        <div className="flex flex-col">
          {["No", "Yes"].map((option) => (
            <label className="inline-flex items-center">
              <input
                // {...register("hasPreviousAbn.Answer")}
                type="radio"
                className="form-radio"
                value={option}
                name="hasPreviousAbn.Answer"
                onChange={() =>
                  setValue("hasPreviousAbn.Answer", option === "Yes")
                }
              />
              <span className="ml-2">{text[option]}</span>
            </label>
          ))}
          {watch("hasPreviousAbn.Answer") && (
            <div>
              <label htmlFor="message">Previous ABN</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                defaultValue=""
                placeholder="Somaia D. Silva"
                required={false}
                data-error="Please enter your Name"
              />
            </div>
          )}
        </div>
      </div>
    </FormPartLayout>
  );
};

export default BusinessDetails;
