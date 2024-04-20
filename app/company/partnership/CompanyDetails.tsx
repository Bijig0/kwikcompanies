import { useCompanyFormContext } from "../CompanyFormContext";
import FormPartLayout from "../FormPartLayout";

const CompanyDetails = () => {
  const { formManager, disableForm, enableForm } = useCompanyFormContext();

  const {
    setValue,
    register,
    watch,
    formState: { errors },
  } = formManager;
  const handleSelectHasACN = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as "Yes" | "No";
    if (value === "Yes") {
      setValue("companyDetails.hasACN.answer", true);
    } else if (value === "No") {
      setValue("companyDetails.hasACN.answer", false);
    }
  };

  return (
    <FormPartLayout header="Company Details" step={1}>
      <label className="font-semibold text-black text-md" htmlFor="message">
        Does the company have an Australian Company Number (ACN)?
      </label>
      <div className="flex flex-col">
        {["Yes", "No"].map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              type="radio"
              name="companyDetails.hasACN.answer"
              className="form-radio"
              value={option}
              onChange={handleSelectHasACN}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      {/* {errors.activitiesLocation && (
        <ErrorText>{errors.activitiesLocation.message}</ErrorText>
      )} */}
      <label className="font-semibold text-black text-md" htmlFor="message">
        Is the company a majority-owned subsidiary?
      </label>
      <div className="flex flex-col">
        {["Yes", "No"].map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              {...register("companyDetails.isMajorityOwendSubsidiary.answer", {
                required: "This field is required",
              })}
              type="radio"
              className="form-radio"
              value={option}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </FormPartLayout>
  );
};

export default CompanyDetails;
