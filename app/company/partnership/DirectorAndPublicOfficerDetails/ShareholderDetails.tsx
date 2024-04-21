import { useCompanyFormContext } from "app/company/CompanyFormContext";
import { titles } from "app/contact/soleTraderForm";
import PartnershipFormProvider from "app/partnership/PartnerShipFormContext";
import countries from "app/types/countries";
import { watch } from "fs";
import { Controller } from "react-hook-form";
import { ShareholderFields, numberText } from "./types";

type ShareholderField = ShareholderFields[number];

type Props = {
  index: number;
  field: ShareholderField;
  handleAddShareholder: (field: ShareholderFields) => void;
  handleRemoveShareholder: (index: number) => void;
};

const ShareholderDetails = (props: Props) => {
  const { index, field, handleAddShareholder, handleRemoveShareholder } = props;
  const {
    formManager: { control },
  } = useCompanyFormContext();
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
              name="businessLocation"
              // onChange={handleBusinessLocationChange}
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
          <PartnershipFormProvider.Select
            name={`partnerDetails.${index}.name.title`}
            options={titles}
          />
        </div>
        <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
          <label htmlFor="message">First Name</label>
          <PartnershipFormProvider.TextInput
            placeholder="John"
            name={`partnerDetails.${index}.name.firstName`}
          />
          {/* {errors.partnerDetails[index]?.name?.firstName && (
                      <ErrorText>
                        {errors.partnerDetails[index].name.firstName.message}
                      </ErrorText>
                    )} */}
        </div>
        <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
          <label htmlFor="message">Last Name</label>
          <PartnershipFormProvider.TextInput
            placeholder="Smith"
            name={`partnerDetails.${index}.name.lastName`}
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
          //   {...register(`partnerDetails.${index}.name.otherNames.answer`)}
          id={`partnerDetails.${index}.name.otherNames.answer`}
        />
        <label
          htmlFor={`partnerDetails.${index}.name.otherNames.answer`}
          className="ml-2"
        >
          I have been known by another name in the past
        </label>
      </div>
      {watch(`partnerDetails.${index}.name.otherNames.answer`) && (
        <div>
          <label htmlFor="message">Other Name</label>
          <Controller
            name={`partnerDetails.${index}.name.otherNames.otherName`}
            control={control}
            rules={{ required: "This field is required" }}
            render={() => (
              <PartnershipFormProvider.TextInput
                placeholder="Placeholder Name"
                name={`partnerDetails.${index}.name.otherNames.otherName`}
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
        <PartnershipFormProvider.TextInput
          placeholder="john_smith@gmail.com"
          name={`partnerDetails.${index}.email`}
        />
        {/* {errors.partnerDetails[index]?.email && (
                    <ErrorText>
                      {errors.partnerDetails[index].email.message}
                    </ErrorText>
                  )} */}
      </div>

      <div>
        <label htmlFor="message">Phone Number</label>
        <PartnershipFormProvider.TextInput
          placeholder="+61 403 057 369"
          name={`partnerDetails.${index}.phoneNumber`}
        />
        {/* {errors.partnerDetails[index]?.phoneNumber && (
                    <ErrorText>
                      {errors.partnerDetails[index].phoneNumber.message}
                    </ErrorText>
                  )} */}
      </div>

      <div>
        <label htmlFor="message">Date of Birth</label>
        {/* <PartnershipFormProvider.DatePicker name="dateOfBirth" /> */}
      </div>

      <div>
        <label htmlFor="message">Country of birth</label>

        <PartnershipFormProvider.Select
          options={countries}
          name={`partnerDetails.${index}.birthLocation.country`}
        />
      </div>

      {/* {watch(`partnerDetails.${index}.birthLocation.country`) ===
        "Australia" && (
        <>
          <div>
            <label htmlFor="message">State</label>
            <PartnershipFormProvider.Select
              options={australianStates}
              name={`partnerDetails.${index}.birthLocation.state`}
            />
          </div>
          <div>
            <label htmlFor="message">City</label>
            <PartnershipFormProvider.TextInput
              name={`partnerDetails.${index}.birthLocation.city`}
            />
          </div>
        </>
      )} */}

      <div>
        <label htmlFor="message">Tax File Number</label>
        <PartnershipFormProvider.TextInput
          name={`partnerDetails.${index}.birthLocation.city`}
        />
      </div>

      <div>
        <label htmlFor="message">Home Address</label>
        <PartnershipFormProvider.TextInput
          name={`partnerDetails.${index}.homeAddress`}
        />
      </div>

      {/* <div>
        <input
          type="checkbox"
          {...register(
            `partnerDetails.${index}.declaredIsAustralianResidentForTaxPurposes`
          )}
          id={`partnerDetails.${index}.declaredIsAustralianResidentForTaxPurposes`}
        />
        <label
          htmlFor={`partnerDetails.${index}.declaredIsAustralianResidentForTaxPurposes`}
          className="ml-2"
        >
          I am an Australian resident for tax purposes.
        </label>
      </div> */}

      <div className="my-3" />
    </div>

    {/* {isLastField && (
      <div className="flex justify-start gap-2">
        <Button onClick={() => appendDirector(field)}>Add Partner</Button>
        <Button
          variant="danger"
          onClick={() => index !== 0 && removeDirector(index)}
        >
          Remove Partner
        </Button>
      </div>
    )} */}
  </div>;
};

export default ShareholderDetails;
