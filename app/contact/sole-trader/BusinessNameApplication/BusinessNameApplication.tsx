"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { useBoolean } from "@utils/useBoolean";
import FormPartLayout from "../../FormPartLayout";
import { useSoleTraderFormContext } from "../../SoleTraderFormContext";
import TextInput from "../../TextInput";
import { queryClient } from "../queryClient";
import useSearchForBusinessName from "./useSearchForBusinessName";

const text = {
  Yes: "Yes, the business name I need is...",
  No: "No I will trade under my full name",
};

const BUSINESS_NAME_AVAILABLE = "available";

const _BusinessNameApplication = () => {
  const {
    value: shouldSearchBusinessName,
    setTrue: startSearchBusinessName,
    setFalse: stopSearchBusinessName,
    toggle: toggleSearchBusinessName,
  } = useBoolean(false);

  const {
    formManager: { setValue, watch, getValues },
  } = useSoleTraderFormContext();

  const { data, error, isLoading } = useSearchForBusinessName({
    shouldSearchBusinessName,
    businessName: getValues("businessName.businessName"),
  });

  const businessNameAvailable =
    data?.result?.reason === BUSINESS_NAME_AVAILABLE;

  const options = ["Yes", "No"];

  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as "Yes" | "No";
    if (value === "Yes") {
      setValue("businessName.answer", true);
      return;
    } else if (value === "No") {
      setValue("businessName.answer", false);
    }
  };

  const handleSearchForBusinessName = () => {
    startSearchBusinessName();
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
        {watch("businessName.answer") && (
          <div>
            <div>
              <label htmlFor="message">Search for your business name</label>

              <TextInput
                // @ts-ignore
                name="businessName.businessName"
                placeholder="Acme Inc"
              />
              <div className="my-2"></div>
              <button id="search" onClick={handleSearchForBusinessName}>
                Search
              </button>
            </div>
            {businessNameAvailable && (
              <div>
                <label htmlFor="message">Business Name Available</label>
              </div>
            )}
          </div>
        )}
      </FormPartLayout>
    </QueryClientProvider>
  );
};

const BusinessNameApplication = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <_BusinessNameApplication />
    </QueryClientProvider>
  );
};

export default BusinessNameApplication;
