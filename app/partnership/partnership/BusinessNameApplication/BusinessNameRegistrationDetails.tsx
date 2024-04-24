import { usePartnershipFormContext } from "app/partnership/PartnerShipFormContext";
import {
  SoleTraderSelect,
  SoleTraderTextInput,
} from "app/sole-trader/SoleTraderFormComponents";
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
  } = usePartnershipFormContext();

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="message">Registration Period</label>
        {registrationPeriods.map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              {...register(
                "businessNameApplication.isRegisteringBusinessName.registrationPeriod"
              )}
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

        <SoleTraderSelect
          options={countries}
          name="businessNameApplication.isRegisteringBusinessName.birthLocation.country"
        />
      </div>
      <div>
        <label htmlFor="message">State</label>
        <SoleTraderSelect
          options={australianStates}
          name="businessNameApplication.isRegisteringBusinessName.birthLocation.state"
        />
      </div>
      <div>
        <label htmlFor="message">City</label>
        <SoleTraderTextInput name="businessNameApplication.isRegisteringBusinessName.birthLocation.city" />
      </div>
    </div>
  );
};

export default BusinessNameRegistrationDetails;
