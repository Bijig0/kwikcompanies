import FormPartLayout from "../FormPartLayout";
import Select from "../Select";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";
import { needAbnReasons } from "../form";

const ABNEntitlement = () => {
  const { register } = useSoleTraderFormContext();
  return (
    <FormPartLayout header="ABN Entitlement" step={2}>
      <label className="font-semibold text-black text-md" htmlFor="message">
        Where will your activites be carried out?
      </label>
      <div className="flex flex-col">
        {["Australia", "Overseas"].map((option) => (
          <label className="inline-flex items-center">
            <input
              {...register("activitiesLocation")}
              type="radio"
              className="form-radio"
              value={option}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      <label className="font-semibold text-black text-md" htmlFor="message">
        Why do you need an ABN?
      </label>
      <Select name="needAbnReason" options={needAbnReasons} />
    </FormPartLayout>
  );
};

export default ABNEntitlement;
