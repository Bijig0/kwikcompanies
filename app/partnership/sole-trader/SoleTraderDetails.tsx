import { Controller } from "react-hook-form";
import DatePicker from "../DatePicker";
import ErrorText from "../ErrorText";
import FormPartLayout from "../FormPartLayout";
import { usePartnershipFormContext } from "../PartnerShipFormContext";
import Select from "../Select";
import TextInput from "../TextInput";
import { titles } from "../form";

const SoleTraderDetails = () => {
  const {
    formManager: {
      register,
      watch,
      setValue,
      control,
      formState: { errors },
    },
  } = usePartnershipFormContext();
  return (
    <FormPartLayout header="Sole Trader Details" step={3}>
      <div onClick={() => console.log(watch("otherNames.answer"))}>
        Click Me
      </div>
      <div className="flex items-center gap-3 ">
        <div className="flex-1">
          <label htmlFor="message">Title</label>
          <Select name="title" options={titles} />
        </div>
        <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
          <label htmlFor="message">First Name</label>
          <TextInput placeholder="John" name="firstName" />
          {errors.firstName && (
            <ErrorText>{errors.firstName.message}</ErrorText>
          )}
        </div>
        <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
          <label htmlFor="message">Last Name</label>
          <TextInput placeholder="Smith" name="lastName" />
          {errors.firstName && <ErrorText>{errors.lastName.message}</ErrorText>}
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          {...register("otherNames.answer")}
          id="otherNames.answer"
        />
        <label htmlFor="otherNames.answer" className="ml-2">
          I have been known by another name in the past
        </label>
      </div>
      {watch("otherNames.answer") && (
        <div>
          <label htmlFor="message">Other Name</label>
          <Controller
            name="otherNames.otherName"
            control={control}
            rules={{ required: "This field is required" }}
            render={() => (
              <TextInput
                placeholder="Placeholder Name"
                name="otherNames.otherName"
              />
            )}
          />
          {errors.otherNames && <ErrorText>This field is required</ErrorText>}
        </div>
      )}
      <div>
        <label htmlFor="message">Email</label>
        <TextInput placeholder="john_smith@gmail.com" name="email" />
        {errors.email && <ErrorText>{errors.email?.message}</ErrorText>}
      </div>

      <div>
        <label htmlFor="message">Phone Number</label>
        <TextInput placeholder="+61 403 057 369" name="phoneNumber" />
        {errors.phoneNumber && (
          <ErrorText>{errors.phoneNumber?.message}</ErrorText>
        )}
      </div>

      <div>
        <label htmlFor="message">Date of Birth</label>
        <DatePicker name="dateOfBirth" />
      </div>

      <div>
        <label htmlFor="message">Tax File Number</label>
        <TextInput placeholder="123 456 789" name="taxFileNumber" />
        {errors.taxFileNumber && (
          <ErrorText>{errors.taxFileNumber?.message}</ErrorText>
        )}
      </div>
    </FormPartLayout>
  );
};

export default SoleTraderDetails;
