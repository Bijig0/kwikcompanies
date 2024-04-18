import Select from "app/contact/Select";
import { useSoleTraderFormContext } from "app/contact/SoleTraderFormContext";
import TextInput from "app/contact/TextInput";
import countries from "app/contact/countries";
import {
  australianStates,
  australianStates,
  registrationPeriods,
} from "app/contact/form";

const BusinessNameRegistrationDetails = () => {
  const {
    formManager: { register, watch, setValue, getValues },
  } = useSoleTraderFormContext();

  return (
    <div>
      <div className="flex flex-col">
        {registrationPeriods.map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              {...register("isRegisteringBusinessName.registrationPeriod")}
              type="radio"
              className="form-radio"
              value={option}
            />
            <span className="ml-2">{option}</span>
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
