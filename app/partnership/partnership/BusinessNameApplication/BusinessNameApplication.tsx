"use client";
import ErrorText from "@components/ErrorText";
import { QueryClientProvider } from "@tanstack/react-query";
import { useBoolean } from "@utils/useBoolean";
import yesNoToBool from "@utils/yesNoToBool";
import PartnershipFormProvider, {
  usePartnershipFormContext,
} from "app/partnership/PartnerShipFormContext";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { Controller } from "react-hook-form";
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
  Yes: "Yes, the business name I need is...",
  No: "No I will trade under my full name",
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
    formDisabled,
    formManager: {
      setValue,
      watch,
      getValues,
      control,
      formState: { errors },
    },
  } = usePartnershipFormContext();

  const { data, error, isLoading, isFetched } = useSearchForBusinessName({
    shouldSearchBusinessName,
    businessName: watch("businessNameApplication.businessName.businessName"),
  });

  const { resetSearch } = useResetSearch({
    stopShouldSearchBusinessName,
  });

  const businessNameAvailable: KNOWN_STATUS = data?.result.status;

  const options = ["Yes", "No"] as const;

  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Running");
    const value = e.target.value as "Yes" | "No";
    const asBool = yesNoToBool(value);
    setValue("businessNameApplication.businessName.answer", asBool);
  };

  const handleSearchForBusinessName = () => {
    console.log(getValues());
    startSearchBusinessName();
  };

  const renderSearchResultProps = resetSearch;

  const disabled = isFetched || isLoading;

  console.log({ disabled });

  return (
    <FormPartLayout header="Business Name Application" step={6}>
      <div>
        {/* <button
          onClick={() =>
            console.log(watch("businessNameApplication.businessName.answer"))
          }
        >
          Click Me
        </button> */}

        <label className="font-semibold text-black text-md" htmlFor="name">
          Will you trade under a business name?
        </label>
        <div className="flex flex-col">
          <Controller
            name="businessNameApplication.businessName.answer"
            control={control}
            rules={{
              validate: (x) => {
                return [true, false].includes(x)
                  ? true
                  : "This field is required";
              },
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                {options.map((option) => (
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
                    <span className="ml-2">{text[option]}</span>
                  </label>
                ))}
              </>
            )}
          />
        </div>
        {errors?.businessNameApplication?.businessName?.answer && (
          <ErrorText>
            {errors?.businessNameApplication?.businessName?.answer?.message}
          </ErrorText>
        )}
      </div>
      {watch("businessNameApplication.businessName.answer") && (
        <div>
          <div>
            <label htmlFor="message">Search for your business name</label>
            <PartnershipFormProvider.TextInput
              name="businessNameApplication.businessName.businessName"
              placeholder="Acme Inc"
              disabled={disabled}
              rules={
                watch("businessNameApplication.businessName.answer") && {
                  required: "This field is required",
                }
              }
            />
            {errors?.businessNameApplication?.businessName?.businessName && (
              <ErrorText>
                {
                  errors?.businessNameApplication?.businessName?.businessName
                    .message
                }
              </ErrorText>
            )}
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
            renderSearchResult[businessNameAvailable](renderSearchResultProps)}
        </div>
      )}
    </FormPartLayout>
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
