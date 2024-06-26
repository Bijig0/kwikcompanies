import { useBoolean } from "@utils/useBoolean";
import CompanyFormProvider, {
  useCompanyFormContext,
} from "app/company/CompanyFormContext";
import { createEmptyDirectorDetails } from "app/company/createEmptyDirectorDetails";
import { createEmptyShareholderDetails } from "app/company/createEmptyShareholderDetails";
import { titles } from "app/sole-trader/soleTraderForm";
import countries from "app/types/countries";
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

const DirectorDetails = (props: Props) => {
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
      <h6 className="text-lg">{numberText[index + 1]} Director's Details</h6>
      <div>
        <label className="font-semibold text-black text-md" htmlFor="name">
          Will you be the only director?
        </label>
        <div className="flex flex-col">
          {["Yes", "No"].map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                name="isOnlyDirector"
                onChange={toggleIsOnlyDirector}
                type="radio"
                className="form-radio"
                value={option}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 ">
          <div className="flex-1">
            <label htmlFor="message">Title</label>
            <CompanyFormProvider.Select
              name={`directorAndPublicOfficerDetails.directorsDetails.${index}.name.title`}
              options={titles}
            />
          </div>
          <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
            <label htmlFor="message">First Name</label>
            <CompanyFormProvider.TextInput
              placeholder="John"
              name={`directorAndPublicOfficerDetails.directorsDetails.${index}.name.firstName`}
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
              name={`directorAndPublicOfficerDetails.directorsDetails.${index}.name.lastName`}
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
              `directorAndPublicOfficerDetails.directorsDetails.${index}.name.otherNames.answer`
            )}
            id={`directorAndPublicOfficerDetails.directorsDetails.${index}.name.otherNames.answer`}
          />
          <label
            htmlFor={`directorAndPublicOfficerDetails.directorsDetails.${index}.name.otherNames.answer`}
            className="ml-2"
          >
            I have been known by another name in the past
          </label>
        </div>
        {watch(
          `directorAndPublicOfficerDetails.directorsDetails.${index}.name.otherNames.answer`
        ) && (
          <div>
            <label htmlFor="message">Other Name</label>
            <Controller
              name={`directorAndPublicOfficerDetails.directorsDetails.${index}.name.otherNames.otherName`}
              control={control}
              rules={{ required: "This field is required" }}
              render={() => (
                <CompanyFormProvider.TextInput
                  placeholder="Placeholder Name"
                  name={`directorAndPublicOfficerDetails.directorsDetails.${index}.name.otherNames.otherName`}
                />
              )}
            />
            {/* {errors.partnerDetails[index]?.name?.otherNames?.otherName && (
                      <ErrorText>This field is required</ErrorText>
                    )} */}
          </div>
        )}
        <div>
          <label htmlFor="message">Email</label>
          <CompanyFormProvider.TextInput
            placeholder="john_smith@gmail.com"
            name={`directorAndPublicOfficerDetails.directorsDetails.${index}.email`}
          />
          {/* {errors.partnerDetails[index]?.email && (
                    <ErrorText>
                      {errors.partnerDetails[index].email.message}
                    </ErrorText>
                  )} */}
        </div>

        <div>
          <label htmlFor="message">Phone Number</label>
          <CompanyFormProvider.TextInput
            placeholder="+61 403 057 369"
            name={`directorAndPublicOfficerDetails.directorsDetails.${index}.phoneNumber`}
          />
          {/* {errors.partnerDetails[index]?.phoneNumber && (
                    <ErrorText>
                      {errors.partnerDetails[index].phoneNumber.message}
                    </ErrorText>
                  )} */}
        </div>

        <div>
          <label htmlFor="message">Date of Birth</label>
          {/* <CompanyFormProvider.DatePicker name="dateOfBirth" /> */}
        </div>

        <div>
          <label htmlFor="message">Country of birth</label>

          <CompanyFormProvider.Select
            options={countries}
            name={`directorAndPublicOfficerDetails.directorsDetails.${index}.birthLocation.country`}
          />
        </div>

        <div>
          <label htmlFor="message">City</label>
          <CompanyFormProvider.TextInput
            name={`directorAndPublicOfficerDetails.directorsDetails.${index}.birthLocation.city`}
          />
        </div>

        {/* {watch(`partnerDetails.${index}.birthLocation.country`) ===
        "Australia" && (
        <>
          <div>
            <label htmlFor="message">State</label>
            <CompanyFormProvider.Select
              options={australianStates}
              name={`partnerDetails.${index}.birthLocation.state`}
            />
          </div>
          <div>
            <label htmlFor="message">City</label>
            <CompanyFormProvider.TextInput
              name={`partnerDetails.${index}.birthLocation.city`}
            />
          </div>
        </>
      )} */}

        <div>
          <label htmlFor="message">Tax File Number</label>
          <CompanyFormProvider.TextInput
            name={`directorAndPublicOfficerDetails.directorsDetails.${index}.taxFileNumber`}
          />
        </div>

        <div>
          <label htmlFor="message">Home Address</label>
          <CompanyFormProvider.TextInput
            name={`directorAndPublicOfficerDetails.directorsDetails.${index}.homeAddress`}
          />
        </div>

        <div className="my-3" />
      </div>

      <div>
        <label className="font-semibold text-black text-md" htmlFor="name">
          Will you be the only shareholder?
        </label>
        <div className="flex flex-col">
          {["Yes", "No"].map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                name="isOnlyShareholder"
                onChange={toggleIsOnlyShareholder}
                type="radio"
                className="form-radio"
                value={option}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label
          className="block font-semibold text-black text-md"
          htmlFor={`directorAndPublicOfficerDetails.directorsDetails.${index}.declaredIsAustralianResidentForTaxPurposes`}
        >
          Declaration
        </label>

        <input
          type="checkbox"
          {...register(
            `directorAndPublicOfficerDetails.directorsDetails.${index}.declaredIsAustralianResidentForTaxPurposes`
          )}
          id={`directorAndPublicOfficerDetails.directorsDetails.${index}.declaredIsAustralianResidentForTaxPurposes`}
        />
        <label
          htmlFor={`directorAndPublicOfficerDetails.directorsDetails.${index}.declaredIsAustralianResidentForTaxPurposes`}
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
          Remove
        </Button>
      </div>
    </div>
  );
};

export default DirectorDetails;
