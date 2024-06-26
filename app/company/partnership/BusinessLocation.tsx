import React from "react";
import AddressAutocomplete from "../AddressAutocomplete";
import { useCompanyFormContext } from "../CompanyFormContext";
import FormPartLayout from "../FormPartLayout";

const BusinessLocation = () => {
  const {
    formManager: { register, setValue, watch },
  } = useCompanyFormContext();

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
    <FormPartLayout header="Business Location" step={3}>
      <div>
        <label htmlFor="message">Business Address</label>
        <AddressAutocomplete />
        <p>Can't find your address? Click Enter here</p>
      </div>
      {watch("businessLocation.businessAddress") === "Other" && (
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
                name="businessLocation.addressForServiceDocuments"
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
