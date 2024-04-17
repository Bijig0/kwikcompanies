"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import FormPartLayout from "../../FormPartLayout";
import { useSoleTraderFormContext } from "../../SoleTraderFormContext";
import TextInput from "../../TextInput";
import { queryClient } from "../queryClient";

const text = {
  Yes: "Yes, the business name I need is...",
  No: "No I will trade under my full name",
};

const BusinessNameApplication = () => {
  const {
    formManager: { setValue, watch },
  } = useSoleTraderFormContext();

  const options = ["Yes", "No"];

  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as "Yes" | "No";
    if (value === "Yes") {
      setValue("businessName", "Custom");
      return;
    } else if (value === "No") {
      setValue("businessName", "Full Name");
    }
  };

  const handleSearchForBusinessName = () => {
    setValue("businessName", "Custom");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <FormPartLayout header="Business Name Application" step={6}>
        <div>
          <label className="font-semibold text-black text-md" htmlFor="name">
            Will you trade under a business name?
          </label>
          <div className="flex flex-col">
            {options.map((option) => (
              <label key={option} className="inline-flex items-center">
                <input
                  onChange={handleBusinessNameChange}
                  name="businessName"
                  type="radio"
                  className="form-radio"
                  value={option}
                />
                <span className="ml-2">{text[option]}</span>
              </label>
            ))}
          </div>
        </div>
        {watch("businessName") === "Custom" && (
          <div>
            <label htmlFor="message">Search for your business name</label>
            <TextInput name="businessName" />
            <div className="my-2"></div>
            <button onClick={handleSearchForBusinessName}>Search</button>
          </div>
        )}
      </FormPartLayout>
    </QueryClientProvider>
  );
};

export default BusinessNameApplication;
