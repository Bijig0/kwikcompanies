import { useBoolean } from "@utils/useBoolean";
import { useSoleTraderFormContext } from "app/sole-trader/SoleTraderFormContext";
import FormPartLayout from "../../FormPartLayout";
import {
  SoleTraderDatePicker,
  SoleTraderSelect,
  SoleTraderTextInput,
} from "../../SoleTraderFormComponents";
import useGetBusinessCategories from "./useGetBusinessCategories";

const ABNRegistrationDetails = () => {
  const {
    formManager: { watch, setError },
  } = useSoleTraderFormContext();

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

  console.log(data);
  console.log(isError);
  console.log(error);

  const businessIndustries = data?.map(({ description }) => description);

  const businessIndustriesToShow = (() => {
    if (isLoading) {
      return ["Searching Associated Businesss Categories..."];
    } else if (isError) {
      return ["Error fetching business categories"];
    } else if (data === undefined) {
      return [];
    }
    return businessIndustries;
  })();

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
        <SoleTraderDatePicker name="abnRegistrationDetails.abnActiveDate" />
      </div>
      <div>
        <label htmlFor="message">Main Business Activity</label>
        <SoleTraderTextInput
          placeholder="Agriculture"
          name="abnRegistrationDetails.mainBusinessActivity"
          onBlur={handleOnBlur}
          onFocus={stopFetchBusinessCategories}
          onKeyDown={handleOnKeyDown}
        ></SoleTraderTextInput>
      </div>
      <div>
        <label htmlFor="message">Business Category</label>
        <SoleTraderSelect
          options={businessIndustriesToShow}
          name="abnRegistrationDetails.businessCategory"
        />
      </div>
    </FormPartLayout>
  );
};

export default ABNRegistrationDetails;
