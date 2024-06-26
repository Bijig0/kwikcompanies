import { useCompanyFormContext } from "app/company/CompanyFormContext";
import PartnershipFormProvider from "app/partnership/PartnerShipFormContext";
import {
  australianStates,
  registrationPeriods,
} from "app/sole-trader/soleTraderForm";
import countries from "app/types/countries";

const text = {
  "3 years": "3 years ($99 per year) save on 3 years registration",
  "1 year": "1 year $199",
} satisfies Record<string, string>;

const BusinessNameRegistrationDetails = () => {
  const {
    formManager: { register, watch, setValue, getValues },
  } = useCompanyFormContext();

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="message">Registration Period</label>
        {registrationPeriods.map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              {...register("isRegisteringBusinessName.registrationPeriod")}
              type="radio"
              className="form-radio"
              value={option}
            />
            <span className="ml-2">{text[option]}</span>
          </label>
        ))}
      </div>
      <div>
        <label htmlFor="message">Country of birth</label>

        <PartnershipFormProvider.Select
          options={countries}
          name="isRegisteringBusinessName.birthLocation.country"
        />
      </div>
      <div>
        <label htmlFor="message">State</label>
        <PartnershipFormProvider.Select
          options={australianStates}
          name="isRegisteringBusinessName.birthLocation.state"
        />
      </div>
      <div>
        <label htmlFor="message">City</label>
        <PartnershipFormProvider.TextInput name="isRegisteringBusinessName.birthLocation.city" />
      </div>
    </div>
  );
};

export default BusinessNameRegistrationDetails;
