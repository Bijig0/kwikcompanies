import { Controller } from "react-hook-form";
import ErrorText from "../../../components/ErrorText";
import FormPartLayout from "../FormPartLayout";
import {
  SoleTraderDatePicker,
  SoleTraderSelect,
  SoleTraderTextInput,
} from "../SoleTraderFormComponents";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";
import { titles } from "../soleTraderForm";

const SoleTraderDetails = () => {
  const {
    formManager: {
      register,
      watch,
      setValue,
      control,
      formState: { errors },
    },
  } = useSoleTraderFormContext();
  return (
    <FormPartLayout header="Sole Trader Details" step={3}>
      <div
        onClick={() =>
          console.log(watch("soleTraderDetails.name.otherNames.answer"))
        }
      >
        Click Me
      </div>
      <div className="flex items-center gap-3 ">
        <div className="flex-1">
          <label htmlFor="message">Title</label>
          <SoleTraderSelect
            name="soleTraderDetails.name.title"
            options={titles}
          />
        </div>
        <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
          <label htmlFor="message">First Name</label>
          <SoleTraderTextInput
            placeholder="John"
            name="soleTraderDetails.name.firstName"
          />
          {errors?.soleTraderDetails?.name?.firstName && (
            <ErrorText>
              {errors?.soleTraderDetails?.name?.firstName.message}
            </ErrorText>
          )}
        </div>
        <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
          <label htmlFor="message">Last Name</label>
          <SoleTraderTextInput
            placeholder="Smith"
            name="soleTraderDetails.name.lastName"
          />
          {errors?.soleTraderDetails?.name?.firstName && (
            <ErrorText>
              {errors?.soleTraderDetails?.name?.lastName.message}
            </ErrorText>
          )}
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          {...register("soleTraderDetails.name.otherNames.answer")}
          id="otherNames.answer"
        />
        <label htmlFor="otherNames.answer" className="ml-2">
          I have been known by another name in the past
        </label>
      </div>
      {watch("soleTraderDetails.name.otherNames.answer") && (
        <div>
          <label htmlFor="message">Other Name</label>
          <Controller
            name="soleTraderDetails.name.otherNames.otherName"
            control={control}
            rules={{ required: "This field is required" }}
            render={() => (
              <SoleTraderTextInput
                placeholder="Placeholder Name"
                name="soleTraderDetails.name.otherNames.otherName"
              />
            )}
          />
          {errors?.soleTraderDetails?.name?.otherNames && (
            <ErrorText>This field is required</ErrorText>
          )}
        </div>
      )}
      <div>
        <label htmlFor="message">Email</label>
        <SoleTraderTextInput
          placeholder="john_smith@gmail.com"
          name="soleTraderDetails.email"
        />
        {errors?.soleTraderDetails?.email && (
          <ErrorText>{errors?.soleTraderDetails?.email?.message}</ErrorText>
        )}
      </div>

      <div>
        <label htmlFor="message">Phone Number</label>
        <SoleTraderTextInput
          placeholder="+61 403 057 369"
          name="soleTraderDetails.phoneNumber"
        />
        {errors?.soleTraderDetails?.phoneNumber && (
          <ErrorText>
            {errors?.soleTraderDetails?.phoneNumber?.message}
          </ErrorText>
        )}
      </div>

      <div>
        <label htmlFor="message">Date of Birth</label>
        <SoleTraderDatePicker name="soleTraderDetails.dateOfBirth" />
      </div>

      <div>
        <label htmlFor="message">Tax File Number</label>
        <SoleTraderTextInput
          placeholder="123 456 789"
          name="soleTraderDetails.taxFileNumber"
        />
        {errors?.soleTraderDetails?.taxFileNumber && (
          <ErrorText>
            {errors?.soleTraderDetails?.taxFileNumber?.message}
          </ErrorText>
        )}
      </div>
    </FormPartLayout>
  );
};

export default SoleTraderDetails;
