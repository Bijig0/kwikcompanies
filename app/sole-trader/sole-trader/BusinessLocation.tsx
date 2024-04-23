import React from "react";
import AddressAutocomplete from "../AddressAutocomplete";
import FormPartLayout from "../FormPartLayout";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";
import AutofillCheckoutDemo from "../AddressBetter";

const BusinessLocation = () => {
  const {
    formManager: { register, setValue, watch },
  } = useSoleTraderFormContext();

  const handleBusinessLocationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value as "Yes" | "No";
    if (value === "Yes") {
      setValue("businessLocation.businessLocation", "Home");
      return;
    } else if (value === "No") {
      setValue("businessLocation.businessLocation", "Other");
    }
  };

  const handleServiceDocumentsLocationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value as "Home" | "Other";
    if (value === "Home") {
      setValue("businessLocation.addressForServiceDocuments", "Home");
      return;
    } else if (value === "Other") {
      setValue("businessLocation.addressForServiceDocuments", "Other");
    }
  };

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
          {["Yes", "No"].map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                name="businessLocation"
                onChange={handleBusinessLocationChange}
                type="radio"
                className="form-radio"
                value={option}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      </div>
      {watch("businessLocation.businessLocation") === "Other" && (
        <div>
          <label htmlFor="message">Other Address</label>
          <AddressAutocomplete />
        </div>
      )}
      <div>
        <label className="font-semibold text-black text-md" htmlFor="message">
          What is your address for service of documents?
        </label>
        <div className="flex flex-col">
          {["Home", "Other"].map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                name="addressForServiceDocuments"
                onChange={handleServiceDocumentsLocationChange}
                type="radio"
                className="form-radio"
                value={option}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      </div>
      {watch("businessLocation.addressForServiceDocuments") === "Other" && (
        <div>
          <label htmlFor="message">Other Address</label>
          <AddressAutocomplete />
        </div>
      )}
    </FormPartLayout>
  );
};

export default BusinessLocation;
