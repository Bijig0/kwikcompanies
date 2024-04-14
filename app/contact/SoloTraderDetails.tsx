import Select from "./Select";
import TextInput from "./TextInput";
import { titles } from "./form";

const SoloTraderDetails = () => {
  return (
    <>
      <h5>Solo Trader Details</h5>
      <p>Step 3 of 8</p>
      <div className="flex gap-3 items-center ">
        <div>
          <label htmlFor="message">Title</label>
          <Select options={titles} />
        </div>
        <div>
          <label htmlFor="message">First Name</label>
          <TextInput value="Val" />
        </div>
        <div>
          <label htmlFor="message">Last Name</label>
          <TextInput value="Val" />
        </div>
      </div>
      <label htmlFor="message">Email</label>
      <TextInput value="Val" />

      <label htmlFor="message">Phone Number</label>
      <TextInput value="Val" />

      {/* Date Picker */}
      <label htmlFor="message">Tax File Number</label>
      <input
        type="text"
        id="name"
        name="name"
        className="form-control"
        defaultValue=""
        placeholder="Somaia D. Silva"
        required={false}
        data-error="Please enter your Name"
      />
    </>
  );
};

export default SoloTraderDetails;
