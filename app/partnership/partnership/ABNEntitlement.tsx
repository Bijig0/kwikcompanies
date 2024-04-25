import ErrorText from "../ErrorText";
import FormPartLayout from "../FormPartLayout";
import PartnershipFormProvider, {
  usePartnershipFormContext,
} from "../PartnerShipFormContext";
import { ActivitiesLocation, needAbnReasons } from "../partnershipForm";

const ABNEntitlement = () => {
  const { formManager, disableForm, enableForm } = usePartnershipFormContext();

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
      setValue("abnEntitlement.activitiesLocation", "Overseas");
      return;
    } else if (value === "Australia") {
      enableForm();
      setValue("abnEntitlement.activitiesLocation", "Australia");
      return;
    }
  };

  return (
    <FormPartLayout header="ABN Entitlement" step={1}>
      <label className="font-semibold text-black text-md" htmlFor="message">
        Where will your activites be carried out?
      </label>
      <div className="flex flex-col">
        {["Australia", "Overseas"].map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              {...register("abnEntitlement.activitiesLocation", {
                required: "This field is required",
                onChange: handleSelectActivitesLocation,
              })}
              type="radio"
              className="form-radio"
              value={option}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      {errors?.abnEntitlement?.activitiesLocation && (
        <ErrorText>
          {errors.abnEntitlement.activitiesLocation.message}
        </ErrorText>
      )}
      {watch("abnEntitlement.activitiesLocation") === "Overseas" && (
        <ErrorText>
          Overseas activites are not supported for ABN Registration with Kwik
          Companies
        </ErrorText>
      )}
      <label className="font-semibold text-black text-md" htmlFor="message">
        Why do you need an ABN?
      </label>
      <PartnershipFormProvider.Select
        name="abnEntitlement.needAbnReason"
        options={needAbnReasons}
      />
    </FormPartLayout>
  );
};

export default ABNEntitlement;
