import React from "react";
import AddressAutocomplete from "../AddressAutocomplete";
import FormPartLayout from "../FormPartLayout";
import { usePartnershipFormContext } from "../PartnerShipFormContext";
import BusinessAddress from "../Addresses/BusinessAddress";

const BusinessLocation = () => {
  const {
    formManager: { register, setValue, watch },
  } = usePartnershipFormContext();

  const handleBusinessLocationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value as "Yes" | "No";
    if (value === "Yes") {
      setValue("businessLocation", "Home");
      return;
    } else if (value === "No") {
      setValue("businessLocation", "Other");
    }
  };

  const handleServiceDocumentsLocationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value as "Home" | "Other";
    if (value === "Home") {
      setValue("addressForServiceDocuments", "Home");
      return;
    } else if (value === "Other") {
      setValue("addressForServiceDocuments", "Other");
    }
  };

  return (
    <FormPartLayout header="Business Location" step={3}>
      <div>
        <label htmlFor="message">Business Address</label>
        <BusinessAddress />
        <p>Can't find your address? Click Enter here</p>
      </div>
      <div>
        <label className="font-semibold text-black text-md" htmlFor="message">
          What is your address for service of documents?
        </label>
        <div className="flex flex-col">
          {["Business", "Other"].map((option) => (
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
      {watch("addressForServiceDocuments") === "Other" && (
        <div>
          <label htmlFor="message">Other Address</label>
          <AddressAutocomplete />
        </div>
      )}
    </FormPartLayout>
  );
};

export default BusinessLocation;
