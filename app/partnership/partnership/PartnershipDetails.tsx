import { titles } from "app/sole-trader/soleTraderForm";
import countries from "app/types/countries";
import { Button } from "react-bootstrap";
import { Controller, useFieldArray } from "react-hook-form";
import HomeAddress from "../Addresses/HomeAddress";
import ErrorText from "../ErrorText";
import PartnershipFormProvider, {
  usePartnershipFormContext,
} from "../PartnerShipFormContext";
import PartnerShipDetailsFormPartLayout from "../PartnershipDetailsFormPartLayout";
import { createEmptyPartnerDetails } from "../createEmptyPartnerDetails";
import { australianStates, partnerTypes } from "../partnershipForm";

const numberText = {
  "1": "First",
  "2": "Second",
  "3": "Third",
  "4": "Fourth",
  "5": "Fifth",
  "6": "Sixth",
  "7": "Seventh",
  "8": "Eighth",
  "9": "Ninth",
  "10": "Tenth",
};

const PartnershipDetails = () => {
  const {
    formManager: {
      register,
      watch,
      control,
      formState: { errors },
    },
  } = usePartnershipFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormProvider)
      name: "partnerDetails", // unique name for your Field Array
    }
  );

  console.log({ fields });
  console.log(fields.length);

  return (
    <PartnerShipDetailsFormPartLayout header="Partnership Details" step={2}>
      {fields.map((field, index) => {
        const isLastField = fields.length === index + 1;
        return (
          <div key={field.id}>
            <h6 className="text-lg">
              {numberText[index + 1]} Partner's Details
            </h6>
            <div className="flex flex-col gap-3">
              <div className="flex-1">
                <label htmlFor="message">Partner Type</label>
                <PartnershipFormProvider.Select
                  name={`partnerDetails.${index}.partnerType`}
                  options={partnerTypes}
                />
              </div>
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
                    rules={{ required: "This field is required" }}
                  />
                  {errors.partnerDetails?.[index]?.name?.firstName && (
                    <ErrorText>
                      {errors.partnerDetails[index].name.firstName.message}
                    </ErrorText>
                  )}
                </div>
                <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
                  <label htmlFor="message">Last Name</label>
                  <PartnershipFormProvider.TextInput
                    placeholder="Smith"
                    name={`partnerDetails.${index}.name.lastName`}
                    rules={{ required: "This field is required" }}
                  />
                  {errors.partnerDetails?.[index]?.name?.lastName && (
                    <ErrorText>
                      {errors.partnerDetails[index].name.lastName.message}
                    </ErrorText>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  {...register(
                    `partnerDetails.${index}.name.otherNames.answer`
                  )}
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
                  {errors.partnerDetails?.[index]?.name?.otherNames
                    ?.otherName && (
                    <ErrorText>This field is required</ErrorText>
                  )}
                </div>
              )}
              <div>
                <label htmlFor="message">Email</label>
                <PartnershipFormProvider.TextInput
                  placeholder="john_smith@gmail.com"
                  name={`partnerDetails.${index}.email`}
                  type="email"
                  rules={{ required: "This field is required" }}
                />
                {errors.partnerDetails?.[index]?.email && (
                  <ErrorText>
                    {errors.partnerDetails[index].email.message}
                  </ErrorText>
                )}
              </div>

              <div>
                <label htmlFor="message">Phone Number</label>
                <PartnershipFormProvider.TextInput
                  placeholder="+61 403 057 369"
                  name={`partnerDetails.${index}.phoneNumber`}
                  type="tel"
                  rules={{ required: "This field is required" }}
                />
                {errors.partnerDetails?.[index]?.phoneNumber && (
                  <ErrorText>
                    {errors.partnerDetails[index].phoneNumber.message}
                  </ErrorText>
                )}
              </div>

              <div>
                <label htmlFor="message">Date of Birth</label>
                <PartnershipFormProvider.DatePicker
                  name={`partnerDetails.${index}.dateOfBirth`}
                  rules={{ required: "This field is required" }}
                />
                {errors.partnerDetails?.[index]?.dateOfBirth && (
                  <ErrorText>
                    {errors.partnerDetails[index].dateOfBirth.message}
                  </ErrorText>
                )}
              </div>

              <div>
                <label htmlFor="message">Country of birth</label>

                <PartnershipFormProvider.Select
                  options={countries}
                  name={`partnerDetails.${index}.birthLocation.country`}
                />
              </div>

              {watch(`partnerDetails.${index}.birthLocation.country`) ===
                "Australia" && (
                <>
                  <div>
                    <label htmlFor="message">State of birth</label>
                    <PartnershipFormProvider.Select
                      options={australianStates}
                      name={`partnerDetails.${index}.birthLocation.state`}
                    />
                    {errors.partnerDetails?.[index]?.birthLocation?.state && (
                      <ErrorText>
                        {
                          errors.partnerDetails[index].birthLocation?.state
                            .message
                        }
                      </ErrorText>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message">City of birth</label>
                    <PartnershipFormProvider.TextInput
                      name={`partnerDetails.${index}.birthLocation.city`}
                      rules={{ required: "This field is required" }}
                    />
                    {errors.partnerDetails?.[index]?.birthLocation?.city && (
                      <ErrorText>
                        {
                          errors.partnerDetails[index].birthLocation?.city
                            .message
                        }
                      </ErrorText>
                    )}
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message">Tax File Number</label>
                <PartnershipFormProvider.TextInput
                  name={`partnerDetails.${index}.taxFileNumber`}
                  rules={{ required: "This field is required" }}
                />
                {errors.partnerDetails?.[index]?.taxFileNumber && (
                  <ErrorText>
                    {errors.partnerDetails[index].taxFileNumber.message}
                  </ErrorText>
                )}
              </div>

              <div>
                <label htmlFor="message">Home Address</label>
                <HomeAddress index={index} />
              </div>

              <div>
                <input
                  type="checkbox"
                  {...register(
                    `partnerDetails.${index}.declaredIsAustralianResidentForTaxPurposes`,
                    { required: "This field is required" }
                  )}
                  id={`partnerDetails.${index}.declaredIsAustralianResidentForTaxPurposes`}
                />
                <label
                  htmlFor={`partnerDetails.${index}.declaredIsAustralianResidentForTaxPurposes`}
                  className="ml-2"
                >
                  I am an Australian resident for tax purposes.
                </label>
                {errors.partnerDetails?.[index]
                  ?.declaredIsAustralianResidentForTaxPurposes && (
                  <ErrorText>
                    {
                      errors.partnerDetails[index]
                        .declaredIsAustralianResidentForTaxPurposes.message
                    }
                  </ErrorText>
                )}
              </div>

              <div className="my-3" />
            </div>

            {isLastField && (
              <div className="flex justify-start gap-2">
                <Button onClick={() => append(createEmptyPartnerDetails())}>
                  Add Partner
                </Button>
                <Button
                  variant="danger"
                  onClick={() => index !== 0 && remove(index)}
                >
                  Remove Partner
                </Button>
              </div>
            )}
          </div>
        );
      })}
    </PartnerShipDetailsFormPartLayout>
  );
};

export default PartnershipDetails;
