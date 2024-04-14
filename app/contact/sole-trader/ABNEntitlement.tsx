import FormPartLayout from "../FormPartLayout";
import Select from "../Select";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";
import { ActivitiesLocation, needAbnReasons } from "../form";

const ABNEntitlement = () => {
  const { register, watch, setValue, disableForm, enableForm } =
    useSoleTraderFormContext();

  const handleSelectActivitesLocation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value as ActivitiesLocation;
    if (value === "Overseas") {
      disableForm();
      setValue("activitiesLocation", "Overseas");
      return;
    } else if (value === "Australia") {
      enableForm();
      setValue("activitiesLocation", "Australia");
      return;
    }
  };

  return (
    <FormPartLayout header="ABN Entitlement" step={2}>
      <label className="font-semibold text-black text-md" htmlFor="message">
        Where will your activites be carried out?
      </label>
      <div className="flex flex-col">
        {["Australia", "Overseas"].map((option) => (
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="activitiesLocation"
              className="form-radio"
              value={option}
              onChange={handleSelectActivitesLocation}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      {watch("activitiesLocation") === "Overseas" && (
        <div>Error Text Here, Overseas is not supported</div>
      )}
      <label className="font-semibold text-black text-md" htmlFor="message">
        Why do you need an ABN?
      </label>
      <Select name="needAbnReason" options={needAbnReasons} />
    </FormPartLayout>
  );
};

export default ABNEntitlement;
