import ErrorText from "@components/ErrorText";
import { useBoolean } from "@utils/useBoolean";
import PartnershipFormProvider, {
  usePartnershipFormContext,
} from "app/partnership/PartnerShipFormContext";
import { useEffect } from "react";
import FormPartLayout from "../../FormPartLayout";
import useGetBusinessCategories from "./useGetBusinessCategories";

const ABNRegistrationDetails = () => {
  const {
    formManager: {
      watch,
      setError,
      clearErrors,
      formState: { errors },
    },
  } = usePartnershipFormContext();

  const {
    value: shouldFetchBusinessCategories,
    toggle: toggleFetchBusinessCategories,
    setTrue: fetchBusinessCategories,
    setFalse: stopFetchBusinessCategories,
  } = useBoolean(false);

  const { data, isLoading, isError, error } = useGetBusinessCategories({
    enabled: shouldFetchBusinessCategories,
    businessActivity: watch("abnRegistrationDetails.mainBusinessActivity"),
  });

  // console.log(data);
  // console.log(isError);
  // console.log(error);

  const businessIndustries = data?.map(({ description }) => description);

  console.log(data);

  const businessIndustriesToShow = (() => {
    if (isLoading) {
      return ["Searching Associated Businesss Categories..."];
    } else if (data === undefined) {
      return ["No business categories found"];
    }
    return businessIndustries;
  })();

  useEffect(() => {
    if (!isError) {
      clearErrors("abnRegistrationDetails.businessCategory");
    }
    if (isError) {
      setError("abnRegistrationDetails.businessCategory", {
        type: "custom",
        message: "No business categories found",
      });
    }
  }, [isError]);

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" && !shouldFetchBusinessCategories) {
      return;
    }

    if (e.key === "Enter") {
      fetchBusinessCategories();
      const inputElement = document.activeElement as HTMLInputElement;
      inputElement.blur();
      return;
    } else if (e.key !== "Enter") {
      stopFetchBusinessCategories();
      return;
    }
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") return;
    fetchBusinessCategories();
  };

  return (
    <FormPartLayout header="ABN Registration Details" step={5}>
      <div>
        <label>ABN Active Date</label>
        <PartnershipFormProvider.DatePicker
          rules={{ required: "This field is required" }}
          name="abnRegistrationDetails.abnActiveDate"
        />
        {errors?.abnRegistrationDetails?.abnActiveDate && (
          <ErrorText>
            {errors?.abnRegistrationDetails.abnActiveDate?.message}
          </ErrorText>
        )}
      </div>
      <div>
        <label htmlFor="message">Main Business Activity</label>
        <PartnershipFormProvider.TextInput
          placeholder="Agriculture"
          name="abnRegistrationDetails.mainBusinessActivity"
          onBlur={handleOnBlur}
          onFocus={stopFetchBusinessCategories}
          onKeyDown={handleOnKeyDown}
          rules={{ required: "This field is required" }}
        />
        {errors?.abnRegistrationDetails?.mainBusinessActivity && (
          <ErrorText>
            {errors?.abnRegistrationDetails.mainBusinessActivity?.message}
          </ErrorText>
        )}
      </div>
      <div>
        <label htmlFor="message">Business Category</label>
        <PartnershipFormProvider.Select
          options={businessIndustriesToShow}
          name="abnRegistrationDetails.businessCategory"
        />
        {errors?.abnRegistrationDetails?.businessCategory && (
          <ErrorText>
            {errors?.abnRegistrationDetails?.businessCategory?.message}
          </ErrorText>
        )}
      </div>
    </FormPartLayout>
  );
};

export default ABNRegistrationDetails;
