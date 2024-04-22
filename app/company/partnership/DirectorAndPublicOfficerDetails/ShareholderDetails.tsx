import { useBoolean } from "@utils/useBoolean";
import CompanyFormProvider, {
  useCompanyFormContext,
} from "app/company/CompanyFormContext";
import { entityTypes } from "app/company/companyForm";
import { createEmptyDirectorDetails } from "app/company/createEmptyDirectorDetails";
import { createEmptyShareholderDetails } from "app/company/createEmptyShareholderDetails";
import { titles } from "app/sole-trader/soleTraderForm";
import { Button } from "react-bootstrap";
import { Controller } from "react-hook-form";
import {
  AppendDirectorParams,
  AppendShareholderParams,
  DirectorField,
  RemoveDirectorParams,
  numberText,
} from "./types";

type Props = {
  index: number;
  field: DirectorField;
  handleAddDirector: (field: AppendDirectorParams) => void;
  handleAddShareholder: (field: AppendShareholderParams) => void;
  handleRemoveDirector: (index: RemoveDirectorParams) => void;
};

const ShareholderDetails = (props: Props) => {
  const {
    index,
    field,
    handleAddDirector,
    handleAddShareholder,
    handleRemoveDirector,
  } = props;
  const {
    formManager: { control, watch, register },
  } = useCompanyFormContext();

  const { value: isOnlyDirector, toggle: toggleIsOnlyDirector } =
    useBoolean(false);

  const { value: isOnlyShareholder, toggle: toggleIsOnlyShareholder } =
    useBoolean(true);

  return (
    <div key={field.id}>
      <h6 className="text-lg">{numberText[index + 1]} Shareholder's Details</h6>
      <div className="flex-1">
        <label htmlFor="message">Entity Type</label>
        <CompanyFormProvider.Select
          name={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.entityType`}
          options={entityTypes}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 ">
          <div className="flex-1">
            <label htmlFor="message">Title</label>
            <CompanyFormProvider.Select
              name={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.name.title`}
              options={titles}
            />
          </div>
          <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
            <label htmlFor="message">First Name</label>
            <CompanyFormProvider.TextInput
              placeholder="John"
              name={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.name.firstName`}
            />
            {/* {errors.partnerDetails[index]?.name?.firstName && (
                      <ErrorText>
                        {errors.partnerDetails[index].name.firstName.message}
                      </ErrorText>
                    )} */}
          </div>
          <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
            <label htmlFor="message">Last Name</label>
            <CompanyFormProvider.TextInput
              placeholder="Smith"
              name={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.name.lastName`}
            />
            {/* {errors.partnerDetails[index]?.name?.lastName && (
                      <ErrorText>
                        {errors.partnerDetails[index].name.lastName.message}
                      </ErrorText>
                    )} */}
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            {...register(
              `directorAndPublicOfficerDetails.shareholdersDetails.${index}.name.otherNames.answer`
            )}
            id={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.name.otherNames.answer`}
          />
          <label
            htmlFor={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.name.otherNames.answer`}
            className="ml-2"
          >
            I have been known by another name in the past
          </label>
        </div>
        {watch(
          `directorAndPublicOfficerDetails.shareholdersDetails.${index}.name.otherNames.answer`
        ) && (
          <div>
            <label htmlFor="message">Other Name</label>
            <Controller
              name={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.name.otherNames.otherName`}
              control={control}
              rules={{ required: "This field is required" }}
              render={() => (
                <CompanyFormProvider.TextInput
                  placeholder="Placeholder Name"
                  name={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.name.otherNames.otherName`}
                />
              )}
            />
            {/* {errors.partnerDetails[index]?.name?.otherNames?.otherName && (
                      <ErrorText>This field is required</ErrorText>
                    )} */}
          </div>
        )}

        <div>
          <label htmlFor="message">Date of Birth</label>
          {/* <CompanyFormProvider.DatePicker name="dateOfBirth" /> */}
        </div>

        <div>
          <label htmlFor="message">Tax File Number</label>
          <CompanyFormProvider.TextInput
            name={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.taxFileNumber`}
          />
        </div>

        <div className="my-3" />
      </div>

      <div>
        <label
          className="block font-semibold text-black text-md"
          htmlFor={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.declaredIsAustralianResidentForTaxPurposes`}
        >
          Declaration
        </label>

        <input
          type="checkbox"
          {...register(
            `directorAndPublicOfficerDetails.shareholdersDetails.${index}.declaredIsAustralianResidentForTaxPurposes`
          )}
          id={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.declaredIsAustralianResidentForTaxPurposes`}
        />
        <label
          htmlFor={`directorAndPublicOfficerDetails.shareholdersDetails.${index}.declaredIsAustralianResidentForTaxPurposes`}
          className="ml-2"
        >
          I am an Australian resident for tax purposes.
        </label>
      </div>

      <div className="my-2" />

      <div className="flex justify-start gap-2">
        <Button
          data-show={isOnlyDirector}
          className="hidden data-[show=true]:block"
          onClick={() => handleAddDirector(createEmptyDirectorDetails())}
        >
          Add Director
        </Button>
        <Button
          data-show={!isOnlyShareholder}
          className="hidden data-[show=true]:block"
          onClick={() => handleAddShareholder(createEmptyShareholderDetails())}
        >
          Add Shareholder
        </Button>
        <Button
          variant="danger"
          onClick={() => index !== 0 && handleRemoveDirector(index)}
        >
          Remove Partner
        </Button>
      </div>
    </div>
  );
};

export default ShareholderDetails;
