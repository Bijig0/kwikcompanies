import DatePicker from "../DatePicker";
import FormPartLayout from "../FormPartLayout";
import Select from "../Select";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";
import TextInput from "../TextInput";
import { titles } from "../form";

const SoleTraderDetails = () => {
  const {
    formManager: { register, watch, setValue },
  } = useSoleTraderFormContext();
  const handleCheckboxChange = (e) => {
    setValue("otherNames.answer", e.target.checked);
  };
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
        </div>
        <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
          <label htmlFor="message">Last Name</label>
          <TextInput placeholder="Smith" name="lastName" />
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          name="otherNames.answer"
          id="otherNames.answer"
          checked={watch("otherNames.answer")}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="otherNames.answer" className="ml-2">
          I have been known by another name in the past
        </label>
      </div>
      {watch("otherNames.answer") && (
        <div>
          <label htmlFor="message">Other Name</label>
          <TextInput
            placeholder="Placeholder Name"
            name="otherNames.otherName"
          />
        </div>
      )}
      <div>
        <label htmlFor="message">Email</label>
        <TextInput placeholder="john_smith@gmail.com" name="email" />
      </div>

      <div>
        <label htmlFor="message">Phone Number</label>
        <TextInput placeholder="+61 403 057 369" name="phoneNumber" />
      </div>

      <div>
        <label htmlFor="message">Date of Birth</label>
        <DatePicker name="dateOfBirth" />
      </div>

      <div>
        <label htmlFor="message">Tax File Number</label>
        <TextInput placeholder="123 456 789" name="taxFileNumber" />
      </div>
    </FormPartLayout>
  );
};

export default SoleTraderDetails;
