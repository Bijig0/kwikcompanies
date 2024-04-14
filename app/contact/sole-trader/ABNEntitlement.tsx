import Select from "../Select";
import { needAbnReasons } from "../form";

const ABNEntitlement = () => {
  return (
    <>
      <h5>ABN Entitlement</h5>
      <p>Step 2 of 8</p>
      <div className="flex flex-col">
        {["Australia", "Overseas"].map((option) => (
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
      <label className="font-semibold text-black text-md" htmlFor="message">
        Why do you need an ABN?
      </label>
      <Select options={needAbnReasons} />
    </>
  );
};

export default ABNEntitlement;
