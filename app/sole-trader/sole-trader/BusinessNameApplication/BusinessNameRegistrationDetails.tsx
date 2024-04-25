import ErrorText from "@components/ErrorText";
import {
  SoleTraderSelect,
  SoleTraderTextInput,
} from "app/sole-trader/SoleTraderFormComponents";
import { useSoleTraderFormContext } from "app/sole-trader/SoleTraderFormContext";
import {
  australianStates,
  registrationPeriods,
} from "app/sole-trader/soleTraderForm";
import countries from "app/types/countries";
import { Fragment, useEffect } from "react";

const text = {
  "3 years": "3 years ($99 per year) save on 3 years registration",
  "1 year": "1 year $199",
} satisfies Record<string, string>;

const BusinessNameRegistrationDetails = () => {
  const {
    formManager: {
      register,
      watch,
      setValue,
      getValues,
      formState: { errors },
    },
  } = useSoleTraderFormContext();

  useEffect(() => {
    setValue(
      "businessNameApplication.isRegisteringBusinessName.birthLocation.country",
      "Australia"
    );
  }, []);

  const rules = watch(
    "businessNameApplication.isRegisteringBusinessName.answer"
  ) === true && {
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
      <div>
        <label htmlFor="message">Country of birth</label>

        <SoleTraderSelect
          options={countries}
          name="businessNameApplication.isRegisteringBusinessName.birthLocation.country"
        />
      </div>
      {watch(
        "businessNameApplication.isRegisteringBusinessName.birthLocation.country"
      ) === "Australia" && (
        <Fragment>
          <div>
            <label htmlFor="message">State</label>
            <SoleTraderSelect
              options={australianStates}
              name="businessNameApplication.isRegisteringBusinessName.birthLocation.state"
            />
          </div>
          <div>
            <label htmlFor="message">City</label>
            <SoleTraderTextInput
              name="businessNameApplication.isRegisteringBusinessName.birthLocation.city"
              rules={rules}
            />
            {errors?.businessNameApplication?.isRegisteringBusinessName
              ?.birthLocation.city && (
              <ErrorText>
                {
                  errors?.businessNameApplication.isRegisteringBusinessName
                    .birthLocation.city.message
                }
              </ErrorText>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default BusinessNameRegistrationDetails;
