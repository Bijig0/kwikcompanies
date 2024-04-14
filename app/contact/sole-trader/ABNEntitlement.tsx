import Select from "../Select";
import { needAbnReasons } from "../form";

const ABNEntitlement = () => {
  return (
    <div>
      <h5>ABN Entitlement</h5>
      <p>Step 2 of 8</p>
      <div className="my-2"></div>
      <label className="font-semibold text-black text-md" htmlFor="message">
        Where will your activites be carried out?
      </label>
      <div className="flex flex-col gap-3">
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
        <Select name="needAbnReason" options={needAbnReasons} />
      </div>
    </div>
  );
};

export default ABNEntitlement;
