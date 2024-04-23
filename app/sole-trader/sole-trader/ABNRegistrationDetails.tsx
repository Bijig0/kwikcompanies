import TextInput from "@components/TextInput";
import FormPartLayout from "../FormPartLayout";
import {
  SoleTraderDatePicker,
  SoleTraderTextInput,
} from "../SoleTraderFormComponents";

const ABNRegistrationDetails = () => {
  return (
    <FormPartLayout header="ABN Registration Details" step={5}>
      <div>
        <label>ABN Active Date</label>
        <SoleTraderDatePicker name="abnRegistrationDetails.abnActiveDate" />
      </div>
      <div>
        <label htmlFor="message">Main Business Activity</label>
        <SoleTraderTextInput
          placeholder="Agriculture"
          name="abnRegistrationDetails.mainBusinessActivity"
        ></SoleTraderTextInput>
      </div>
      <div>
        <label htmlFor="message">Business Category</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          defaultValue=""
          placeholder=""
          required={false}
          data-error="Please enter your Name"
        />
      </div>
    </FormPartLayout>
  );
};

export default ABNRegistrationDetails;
