import yesNoToBool from "@utils/yesNoToBool";
import React from "react";
import AutofillCheckoutDemo from "../Addresses/HomeAddress";
import BusinessAddress from "../Addresses/BusinessAddress";
import ServiceDocumentAddress from "../Addresses/ServiceDocumentAddress";
import FormPartLayout from "../FormPartLayout";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";

const BusinessLocation = () => {
  const {
    formManager: { register, setValue, watch },
  } = useSoleTraderFormContext();

  const handleBusinessLocationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value as "Yes" | "No";
    const asBool = yesNoToBool(value);
    setValue("businessLocation.businessAddress.isHomeAddress", asBool);
  };

  const handleServiceDocumentsLocationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value as "Home" | "Other";
    const asBool = value === "Home";
    setValue(
      "businessLocation.addressForServiceDocuments.isHomeAddress",
      asBool
    );
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
