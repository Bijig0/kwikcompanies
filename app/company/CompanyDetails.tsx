import { SoleTraderSelect } from "app/contact/SoleTraderFormComponents";
import { useSoleTraderFormContext } from "app/contact/SoleTraderFormContext";
import ErrorText from "./ErrorText";
import FormPartLayout from "./FormPartLayout";
import { ActivitiesLocation, needAbnReasons } from "./companyForm";

const CompanyDetails = () => {
  const { formManager, disableForm, enableForm } = useSoleTraderFormContext();

  const {
    setValue,
    register,
    watch,
    formState: { errors },
  } = formManager;
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
    <FormPartLayout header="Company Details" step={1}>
      <label className="font-semibold text-black text-md" htmlFor="message">
        Where will your activites be carried out?
      </label>
      <div className="flex flex-col">
        {["Australia", "Overseas"].map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              {...register("activitiesLocation", {
                required: "This field is required",
              })}
              type="radio"
              className="form-radio"
              value={option}
              onChange={handleSelectActivitesLocation}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      {errors.activitiesLocation && (
        <ErrorText>{errors.activitiesLocation.message}</ErrorText>
      )}
      {watch("activitiesLocation") === "Overseas" && (
        <ErrorText>Error Text Here, Overseas is not supported</ErrorText>
      )}
      <label className="font-semibold text-black text-md" htmlFor="message">
        Why do you need an ABN?
      </label>
      <SoleTraderSelect name="needAbnReason" options={needAbnReasons} />
    </FormPartLayout>
  );
};

export default CompanyDetails;
