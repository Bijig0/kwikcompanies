"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { useBoolean } from "@utils/useBoolean";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import FormPartLayout from "../../FormPartLayout";
import { useSoleTraderFormContext } from "../../SoleTraderFormContext";
import TextInput from "../../TextInput";
import { queryClient } from "../queryClient";
import AvailableText from "./AvailableText";
import ForManualReviewText from "./ForManualReviewText";
import useSearchForBusinessName, {
  KNOWN_STATUS,
} from "./useSearchForBusinessName";

const text = {
  Yes: "Yes, the business name I need is...",
  No: "No I will trade under my full name",
};

const renderSearchResult = {
  available: <AvailableText />,
  "for manual review": <ForManualReviewText />,
  identical: <ForManualReviewText />,
} satisfies Record<KNOWN_STATUS, React.ReactNode>;

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

  const businessNameAvailable = data?.result?.reason;

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
              <Button onClick={handleSearchForBusinessName}>
                {!isLoading ? "Search" : <Spinner animation="border" />}
              </Button>
              {error && <p className="text-red-500">{error.message}</p>}
            </div>
            {businessNameAvailable && renderSearchResult[businessNameAvailable]}
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