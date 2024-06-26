"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { useBoolean } from "@utils/useBoolean";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { Controller } from "react-hook-form";
import PartnershipFormProvider, {
  useCompanyFormContext,
} from "../../CompanyFormContext";
import FormPartLayout from "../../FormPartLayout";
import { queryClient } from "../queryClient";
import AvailableText from "./AvailableText";
import ForManualReviewText from "./ForManualReviewText";
import IdenticalText from "./IdenticalText";
import useResetSearch from "./useResetSearch";
import useSearchForBusinessName, {
  KNOWN_STATUS,
} from "./useSearchForBusinessName";

const text = {
  Yes: "Yes, I want to register our name now",
  No: "No, we will trade under our full names",
};

const renderSearchResult = {
  available: (resetSearch: () => void) => (
    <AvailableText resetSearch={resetSearch} />
  ),
  "for manual review": (resetSearch: () => void) => (
    <ForManualReviewText resetSearch={resetSearch} />
  ),
  identical: (resetSearch: () => void) => (
    <IdenticalText nameSuggestions={[]} resetSearch={resetSearch} />
  ),
} satisfies Record<KNOWN_STATUS, (...args: any[]) => React.ReactNode>;

const _BusinessNameApplication = () => {
  const {
    value: shouldSearchBusinessName,
    setTrue: startSearchBusinessName,
    setFalse: stopShouldSearchBusinessName,
  } = useBoolean(false);

  const {
    formManager: {
      setValue,
      watch,
      getValues,
      control,
      formState: { errors },
    },
  } = useCompanyFormContext();

  console.log({ shouldSearchBusinessName });

  const { data, error, isLoading, isFetched } = useSearchForBusinessName({
    shouldSearchBusinessName,
    businessName: watch("businessNameApplication.businessName.businessName"),
  });

  const { resetSearch } = useResetSearch({
    stopShouldSearchBusinessName,
  });

  console.log({ data });

  const businessNameAvailable: KNOWN_STATUS = data?.result.status;

  const options = ["Yes", "No"];

  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as "Yes" | "No";
    if (value === "Yes") {
      setValue("businessNameApplication.businessName.answer", true);
      return;
    } else if (value === "No") {
      setValue("businessNameApplication.businessName.answer", false);
    }
  };

  const handleSearchForBusinessName = () => {
    console.log(getValues());
    startSearchBusinessName();
  };

  const renderSearchResultProps = resetSearch;

  return (
    <QueryClientProvider client={queryClient}>
      <FormPartLayout header="Business Name Application" step={6}>
        <div>
          <label className="font-semibold text-black text-md" htmlFor="name">
            Will you trade under a business name?
          </label>
          <div className="flex flex-col">
            {options.map((option) => (
              <Controller
                key={option}
                name="businessNameApplication.businessName.answer"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field: { onChange, value } }) => (
                  <label className="inline-flex items-center">
                    <input
                      onChange={handleBusinessNameChange}
                      name="businessName"
                      type="radio"
                      className="form-radio"
                      value={option}
                    />
                    <span className="ml-2">{text[option]}</span>
                  </label>
                )}
              />
            ))}
          </div>
          {/* {errors.businessName?.answer && (
            <ErrorText>{errors.businessName.answer?.message}</ErrorText>
          )} */}
        </div>
        {watch("businessNameApplication.businessName.answer") && (
          <div>
            <div>
              <label htmlFor="message">Search for your business name</label>
              <PartnershipFormProvider.TextInput
                name="businessNameApplication.businessName.businessName"
                placeholder="Acme Inc"
              />
              <div className="my-3"></div>
              <Button
                data-show={!isFetched}
                className="hidden data-[show=true]:block"
                onClick={handleSearchForBusinessName}
              >
                {!isLoading ? "Search" : <Spinner animation="border" />}
              </Button>
              {error && <p className="text-red-500">{error.message}</p>}
            </div>
            <div className="my-3" />
            {businessNameAvailable &&
              renderSearchResult[businessNameAvailable](
                renderSearchResultProps
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
