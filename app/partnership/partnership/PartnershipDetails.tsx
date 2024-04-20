import { Controller, useFieldArray } from "react-hook-form";
import ErrorText from "../ErrorText";
import PartnershipFormProvider, {
  usePartnershipFormContext,
} from "../PartnerShipFormContext";
import PartnerShipDetailsFormPartLayout from "../PartnershipDetailsFormPartLayout";
import PartnerShipFormValues, {
  partnerTypes,
  titles,
} from "../partnershipForm";

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

  return (
    <>
      {fields.map((field, index) => {
        <PartnerShipDetailsFormPartLayout
          key={field.id}
          header="Sole Trader Details"
          step={2}
        >
          <div onClick={() => console.log(watch("partnerDetails"))}>
            Click Me
          </div>
          <h6>First Partner's Details</h6>

          <div className="flex items-center gap-3 ">
            <div className="flex-1">
              <label htmlFor="message">Partner Type</label>
              <PartnershipFormProvider.Select
                name={`partnerDetails.${index}.partnerType`}
                options={partnerTypes}
              />
            </div>
            <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
              <label htmlFor="message">First Name</label>
              <PartnershipFormProvider.TextInput
                placeholder="John"
                name={`partnerDetails.${index}.name.firstName`}
              />
              {errors.partnerDetails[index]?.name?.firstName && (
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
              />
              {errors.partnerDetails[index]?.name?.lastName && (
                <ErrorText>
                  {errors.partnerDetails[index].name.lastName.message}
                </ErrorText>
              )}
            </div>
          </div>
          <div>
            <input type="checkbox" {...register(``)} id="otherNames.answer" />
            <label htmlFor="otherNames.answer" className="ml-2">
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
              {errors.partnerDetails[index]?.name?.otherNames?.otherName && (
                <ErrorText>This field is required</ErrorText>
              )}
            </div>
          )}
          <div>
            <label htmlFor="message">Email</label>
            <PartnershipFormProvider.TextInput
              placeholder="john_smith@gmail.com"
              name={`partnerDetails.${index}.email`}
            />
            {errors.partnerDetails[index]?.email && (
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
            />
            {errors.partnerDetails[index]?.phoneNumber && (
              <ErrorText>
                {errors.partnerDetails[index].phoneNumber.message}
              </ErrorText>
            )}
          </div>

          <div>
            <label htmlFor="message">Date of Birth</label>
            {/* <PartnershipFormProvider.DatePicker name="dateOfBirth" /> */}
          </div>

          <div>
            <label htmlFor="message">Tax File Number</label>
            <PartnershipFormProvider.TextInput
              placeholder="123 456 789"
              name={`partnerDetails.${index}.taxFileNumber`}
            />
            {errors.partnerDetails[index]?.taxFileNumber && (
              <ErrorText>
                {errors.partnerDetails[index].taxFileNumber.message}
              </ErrorText>
            )}
          </div>
        </PartnerShipDetailsFormPartLayout>;
      })}
    </>
  );
};

export default PartnershipDetails;
