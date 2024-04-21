import yesNoToBool from "@utils/yesNoToBool";
import { useCompanyFormContext } from "../CompanyFormContext";
import FormPartLayout from "../FormPartLayout";

const text = {
  Yes: `Yes, the company will pay royalties, dividends or interest \n to non-residents or report investment income paid to Australian residents.`,
  No: "No, the company will not pay royalties, dividends or interest \n to non-residents or report investment income.",
};

const ABNRegistrationDetails = () => {
  const {
    formManager: { setValue },
  } = useCompanyFormContext();

  const handleSelectCompanyWillPayOtherFees = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value as "Yes" | "No";
    const asBool = yesNoToBool(value);
    setValue("abnRegistrationDetails.companyWillPayOtherFees", asBool);
  };
  return (
    <FormPartLayout header="ABN Registration Details" step={5}>
      <div>
        <label>ABN Active Date</label>
        {/* <PartnershipFormProvider.DatePicker name="abnActiveDate" /> */}
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
      <div className="flex flex-col">
        <label className="font-semibold text-black text-md" htmlFor="message">
          Will the company pay other fees?
        </label>
        {["Yes", "No"].map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              type="radio"
              name="abnRegistrationDetails.companyWillPayOtherFees"
              className="form-radio"
              value={option}
              onChange={handleSelectCompanyWillPayOtherFees}
            />
            <span className="ml-2">{text[option]}</span>
          </label>
        ))}
      </div>
    </FormPartLayout>
  );
};

export default ABNRegistrationDetails;
