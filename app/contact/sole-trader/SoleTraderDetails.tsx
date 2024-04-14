import DatePicker from "../DatePicker";
import FormPartLayout from "../FormPartLayout";
import Select from "../Select";
import TextInput from "../TextInput";
import { titles } from "../form";

const SoleTraderDetails = () => {
  return (
    <FormPartLayout header="Sole Trader Details" step={3}>
      <div className="flex gap-3 items-center ">
        <div className="flex-1">
          <label htmlFor="message">Title</label>
          <Select name="title" options={titles} />
        </div>
        <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
          <label htmlFor="message">First Name</label>
          <TextInput value="Val" />
        </div>
        <div className="flex-[3_3_0%] md:flex-[2_2_0%]">
          <label htmlFor="message">Last Name</label>
          <TextInput value="Val" />
        </div>
      </div>

      <div>
        <label htmlFor="message">Email</label>
        <TextInput value="Val" />
      </div>

      <div>
        <label htmlFor="message">Phone Number</label>
        <TextInput value="Val" />
      </div>

      <div>
        <label htmlFor="message">Date of Birth</label>
        <DatePicker />
      </div>

      <div>
        <label htmlFor="message">Tax File Number</label>
        <TextInput value="Val" />
      </div>
    </FormPartLayout>
  );
};

export default SoleTraderDetails;
