import ErrorText from "@components/ErrorText";
import { Controller } from "react-hook-form";
import BusinessAddress from "../Addresses/BusinessAddress";
import AutofillCheckoutDemo from "../Addresses/HomeAddress";
import ServiceDocumentAddress from "../Addresses/ServiceDocumentAddress";
import FormPartLayout from "../FormPartLayout";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";

const BusinessLocation = () => {
  const {
    formDisabled,
    formManager: {
      register,
      setValue,
      watch,
      control,
      formState: { errors },
    },
  } = useSoleTraderFormContext();

  return (
    <FormPartLayout header="Business Location" step={4}>
      <div>
        <label htmlFor="message">Home Address</label>
        <AutofillCheckoutDemo />
      </div>
      <div>
        <label className="font-semibold text-black text-md" htmlFor="message">
          Is your business located at your home address?
        </label>

        <div className="flex flex-col">
          <Controller
            name="businessLocation.businessAddress.isHomeAddress"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                {["Yes", "No"].map((option) => (
                  <label key={option} className="inline-flex items-center">
                    <input
                      type="radio"
                      onBlur={onBlur} // notify when input is touched
                      onChange={() => onChange(option === "Yes")} // send boolean value to hook form
                      checked={value === (option === "Yes")}
                      ref={ref}
                      className="form-radio"
                      disabled={formDisabled}
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </>
            )}
          />
        </div>
        {errors?.businessLocation?.businessAddress?.isHomeAddress && (
          <ErrorText>
            {errors?.businessLocation?.businessAddress?.isHomeAddress.message}
          </ErrorText>
        )}
      </div>
      {watch("businessLocation.businessAddress.isHomeAddress") === false && (
        <div>
          <label htmlFor="message">Other Address</label>
          <BusinessAddress />
        </div>
      )}
      <div>
        <label className="font-semibold text-black text-md" htmlFor="message">
          What is your address for service of documents?
        </label>
        <div className="flex flex-col">
          <Controller
            name="businessLocation.addressForServiceDocuments.isHomeAddress"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                {["Home", "Other"].map((option) => (
                  <label key={option} className="inline-flex items-center">
                    <input
                      type="radio"
                      onBlur={onBlur} // notify when input is touched
                      onChange={() => onChange(option === "Home")} // send boolean value to hook form
                      checked={value === (option === "Home")}
                      ref={ref}
                      className="form-radio"
                      disabled={formDisabled}
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </>
            )}
          />
        </div>
        {errors?.businessLocation?.addressForServiceDocuments
          ?.isHomeAddress && (
          <ErrorText>
            {
              errors?.businessLocation?.addressForServiceDocuments
                ?.isHomeAddress.message
            }
          </ErrorText>
        )}
      </div>
      {watch("businessLocation.addressForServiceDocuments.isHomeAddress") ===
        false && (
        <div>
          <label htmlFor="message">Other Address</label>
          <ServiceDocumentAddress />
        </div>
      )}
    </FormPartLayout>
  );
};

export default BusinessLocation;
