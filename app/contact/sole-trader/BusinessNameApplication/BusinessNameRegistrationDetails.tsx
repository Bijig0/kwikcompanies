import Select from "@components/Select";
import TextInput from "@components/TextInput";
import { useSoleTraderFormContext } from "app/contact/SoleTraderFormContext";
import countries from "app/contact/countries";
import { australianStates, registrationPeriods } from "app/contact/form";

const text = {
  "3 years": "3 years ($99 per year) save on 3 years registration",
  "1 year": "1 year $199",
} satisfies Record<string, string>;

const BusinessNameRegistrationDetails = () => {
  const {
    formManager: { register, watch, setValue, getValues },
  } = useSoleTraderFormContext();

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

        <Select
          options={countries}
          name="isRegisteringBusinessName.birthLocation.country"
        />
      </div>
      <div>
        <label htmlFor="message">State</label>
        <Select
          options={australianStates}
          name="isRegisteringBusinessName.birthLocation.state"
        />
      </div>
      <div>
        <label htmlFor="message">City</label>
        <TextInput name="isRegisteringBusinessName.birthLocation.city" />
      </div>
    </div>
  );
};

export default BusinessNameRegistrationDetails;
