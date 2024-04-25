import ErrorText from "@components/ErrorText";
import { usePartnershipFormContext } from "app/partnership/PartnerShipFormContext";
import { registrationPeriods } from "app/sole-trader/soleTraderForm";

const text = {
  "3 years": "3 years ($99 per year) save on 3 years registration",
  "1 year": "1 year $199",
} satisfies Record<string, string>;

const BusinessNameRegistrationDetails = () => {
  const {
    formManager: {
      register,
      watch,
      formState: { errors },
    },
  } = usePartnershipFormContext();

  const rules = watch(
    "businessNameApplication.isRegisteringBusinessName.answer"
  ) && {
    required: "This field is required",
  };

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="message">Registration Period</label>
        {registrationPeriods.map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              {...register(
                "businessNameApplication.isRegisteringBusinessName.registrationPeriod",
                rules
              )}
              type="radio"
              className="form-radio"
              value={option}
            />
            <span className="ml-2">{text[option]}</span>
          </label>
        ))}
        {errors?.businessNameApplication?.isRegisteringBusinessName
          ?.registrationPeriod && (
          <ErrorText>
            {
              errors?.businessNameApplication?.isRegisteringBusinessName
                ?.registrationPeriod.message
            }
          </ErrorText>
        )}
      </div>
    </div>
  );
};

export default BusinessNameRegistrationDetails;
