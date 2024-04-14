import Select from "../Select";
import { businessHistories } from "../form";

const BusinessDetails = () => {
  const haveYouHadAnAbnInThePast = [
    "No, I have never had an ABN as a sole trader.",
    "Yes, I have had an ABN as a sole trader before.",
  ];

  return (
    <div>
      <h5>Your business details</h5>
      <p>Step 1 of 8</p>
      <div className="my-2"></div>
      <div className="flex flex-col gap-2">
        <div>
          <label className="font-bold text-black text-md" htmlFor="name">
            Business History
          </label>
          <Select options={businessHistories} />
        </div>
        <div>
          <label className="font-semibold text-black text-md" htmlFor="name">
            Have you had an ABN in the past?
          </label>
          <div className="flex flex-col">
            {haveYouHadAnAbnInThePast.map((option) => (
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
      </div>
    </div>
  );
};

export default BusinessDetails;
