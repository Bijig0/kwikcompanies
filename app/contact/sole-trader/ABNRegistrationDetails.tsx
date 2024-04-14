import DatePicker from "../DatePicker";

const ABNRegistrationDetails = () => {
  return (
    <div>
      <h5>ABN Registration details</h5>
      <p>Step 3 of 8</p>
      <label>ABN Active Date</label>
      <DatePicker />
      <label htmlFor="message">Main Business Activity</label>
      <div></div>
      {/* ABN Active Date */}
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
  );
};

export default ABNRegistrationDetails;
