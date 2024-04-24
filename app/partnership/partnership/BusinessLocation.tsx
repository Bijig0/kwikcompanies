import { Controller } from "react-hook-form";
import BusinessAddress from "../Addresses/BusinessAddress";
import ServiceDocumentAddress from "../Addresses/ServiceDocumentAddress";
import FormPartLayout from "../FormPartLayout";
import { usePartnershipFormContext } from "../PartnerShipFormContext";

const BusinessLocation = () => {
  const {
    formManager: { register, setValue, watch, control },
  } = usePartnershipFormContext();

  return (
    <FormPartLayout header="Business Location" step={3}>
      <div>
        <label htmlFor="message">Business Address</label>
        <BusinessAddress />
      </div>
      <div>
        <label className="font-semibold text-black text-md" htmlFor="message">
          What is your address for service of documents?
        </label>
        <div className="flex flex-col">
          <Controller
            name="businessLocation.addressForServiceDocuments.isBusinessAddress"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                {["Business", "Other"].map((option) => (
                  <label key={option} className="inline-flex items-center">
                    <input
                      type="radio"
                      onBlur={onBlur} // notify when input is touched
                      onChange={() => onChange(option === "Business")} // send boolean value to hook form
                      checked={value === (option === "Business")}
                      ref={ref}
                      className="form-radio"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </>
            )}
          />
        </div>
      </div>
      {watch(
        "businessLocation.addressForServiceDocuments.isBusinessAddress"
      ) === false && (
        <div>
          <label htmlFor="message">Other Address</label>
          <ServiceDocumentAddress />
        </div>
      )}
    </FormPartLayout>
  );
};

export default BusinessLocation;
