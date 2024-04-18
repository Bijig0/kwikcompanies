import FormPartLayout from "../FormPartLayout";
import { SoleTraderDatePicker } from "../SoleTraderFormComponents";

const ABNRegistrationDetails = () => {
  return (
    <FormPartLayout header="ABN Registration Details" step={5}>
      <div>
        <label>ABN Active Date</label>
        <SoleTraderDatePicker name="abnActiveDate" />
      </div>
      <div>
        <label htmlFor="message">Main Business Activity</label>
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
      </div>
      <div>
        <label htmlFor="message">Business Category</label>
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
      </div>
    </FormPartLayout>
  );
};

export default ABNRegistrationDetails;
