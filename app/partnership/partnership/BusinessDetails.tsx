import { Tooltip } from "react-bootstrap";
import FormPartLayout from "../FormPartLayout";
import PartnershipFormProvider, {
  usePartnershipFormContext,
} from "../PartnerShipFormContext";
import { businessHistories } from "../partnershipForm";

import { Controller } from "react-hook-form";
import "react-tooltip/dist/react-tooltip.css";
import ErrorText from "../ErrorText";

const BusinessDetails = () => {
  const { formManager, formDisabled } = usePartnershipFormContext();
  const {
    setValue,
    register,
    watch,
    control,
    formState: { errors },
  } = formManager;

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
        <PartnershipFormProvider.Select
          name="businessHistory"
          options={businessHistories}
        />
      </div>
      <div>
        <label className="font-semibold text-black text-md" htmlFor="name">
          Have you had an ABN in the past?
        </label>
        <div className="flex flex-col">
          {["No", "Yes"].map((option) => (
            <Controller
              key={option}
              name="hasPreviousAbn.answer"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field: { onChange, value } }) => (
                <label className="inline-flex items-center">
                  <input
                    disabled={formDisabled}
                    type="radio"
                    className={`form-radio ${
                      formDisabled ? "bg-gray-100" : "bg-white"
                    }`}
                    name="hasPreviousAbn.answer"
                    value={option}
                    onChange={() =>
                      setValue("hasPreviousAbn.answer", option === "Yes")
                    }
                  />
                  <span
                    className={`ml-2 ${formDisabled ? "text-gray-400" : ""}`}
                  >
                    {text[option]}
                  </span>
                </label>
              )}
            />
          ))}
        </div>
      </div>
      {errors.hasPreviousAbn && (
        <ErrorText>{errors.hasPreviousAbn.answer?.message}</ErrorText>
      )}
      {watch("hasPreviousAbn.answer") && (
        <div>
          <label htmlFor="message">Previous ABN</label>
          <PartnershipFormProvider.TextInput name="hasPreviousAbn.prevAbn" />
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
