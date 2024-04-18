import { Tooltip } from "react-bootstrap";
import FormPartLayout from "../FormPartLayout";
import Select from "../Select";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";
import TextInput from "../TextInput";
import { businessHistories } from "../form";

import "react-tooltip/dist/react-tooltip.css";

const BusinessDetails = () => {
  const { formManager, formDisabled } = useSoleTraderFormContext();
  const { setValue, register, watch } = formManager;

  const text = {
    No: "No, I have never had an ABN as a sole trader.",
    Yes: "Yes, I have had an ABN as a sole trader before.",
  };

  return (
    <FormPartLayout header="Your business details" step={1}>
      <div>
        <label className="font-bold text-black text-md" htmlFor="name">
          Business History
        </label>
        <Select name="businessHistory" options={businessHistories} />
      </div>
      <div>
        <label className="font-semibold text-black text-md" htmlFor="name">
          Have you had an ABN in the past?
        </label>
        <div className="flex flex-col">
          {["No", "Yes"].map((option) => (
            <label key={option} className="inline-flex items-center">
              <input
                disabled={formDisabled}
                type="radio"
                className={`form-radio ${
                  formDisabled ? "bg-gray-100" : "bg-white"
                }`}
                value={option}
                name="hasPreviousAbn.Answer"
                onChange={() =>
                  setValue("hasPreviousAbn.answer", option === "Yes")
                }
              />
              <span className={`ml-2 ${formDisabled ? "text-gray-400" : ""}`}>
                {text[option]}
              </span>
            </label>
          ))}
        </div>
      </div>
      {watch("hasPreviousAbn.answer") && (
        <div>
          <label htmlFor="message">Previous ABN</label>
          <TextInput name="hasPreviousAbn.prevAbn" />
          <div className="my-2"></div>
          <p>
            If you can't remember your ABN, <a>click here</a>
          </p>
        </div>
      )}
      <Tooltip id="my-tooltip" />
    </FormPartLayout>
  );
};

export default BusinessDetails;
