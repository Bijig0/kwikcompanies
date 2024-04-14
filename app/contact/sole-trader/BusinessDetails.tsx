import FormPartLayout from "../FormPartLayout";
import Select from "../Select";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";
import { businessHistories } from "../form";

const BusinessDetails = () => {
  const { register, handleSubmit, formState, getValues } =
    useSoleTraderFormContext();

  const haveYouHadAnAbnInThePast = [
    "No, I have never had an ABN as a sole trader.",
    "Yes, I have had an ABN as a sole trader before.",
  ];
  <div onClick={() => console.log(getValues())}>CHECK VALUES</div>;

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
          {haveYouHadAnAbnInThePast.map((option) => (
            <label className="inline-flex items-center">
              <input
                {...register("hasPreviousAbn")}
                type="radio"
                className="form-radio"
                value={option}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </FormPartLayout>
  );
};

export default BusinessDetails;
