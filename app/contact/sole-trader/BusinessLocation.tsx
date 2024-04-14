import AddressAutocomplete from "../AddressAutocomplete";
import FormPartLayout from "../FormPartLayout";

const BusinessLocation = () => {
  return (
    <FormPartLayout header="Business Location" step={4}>
      <div>
        <label htmlFor="message">Home Address</label>
        <AddressAutocomplete />
      </div>
      <div>
        <label className="font-semibold text-black text-md" htmlFor="message">
          Is your business located at your home address?
        </label>
        <div className="flex flex-col">
          {["Yes", "No"].map((option) => (
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name={option}
                value={option}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="font-semibold text-black text-md" htmlFor="message">
          What is your address for service of documents?
        </label>
        <div className="flex flex-col">
          {["Home", "Other"].map((option) => (
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name={option}
                value={option}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </FormPartLayout>
  );
};

export default BusinessLocation;
