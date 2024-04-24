import { Tooltip } from "react-bootstrap";
import { Controller } from "react-hook-form";
import "react-tooltip/dist/react-tooltip.css";
import ErrorText from "../../../components/ErrorText";
import FormPartLayout from "../FormPartLayout";
import { SoleTraderSelect } from "../SoleTraderFormComponents";
import { useSoleTraderFormContext } from "../SoleTraderFormContext";
import { businessHistories } from "../soleTraderForm";

function isNumeric(value) {
  return /^\d+$/.test(value);
}

const BusinessDetails = () => {
  const { formManager, formDisabled } = useSoleTraderFormContext();
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

  const ABN_REGEX = new RegExp("^(\\d *?){11}$");

  return (
    <FormPartLayout header="Your business details" step={1}>
      <div>
        <label className="font-bold text-black text-md" htmlFor="name">
          Business History
        </label>
        <SoleTraderSelect
          name="businessDetails.businessHistory"
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
              name="businessDetails.hasPreviousAbn.answer"
              rules={{
                validate: (x) => {
                  return [true, false].includes(x)
                    ? true
                    : "This field is required";
                },
              }}
              control={control}
              render={({ field: { onChange, value } }) => (
                <label className="inline-flex items-center">
                  <input
                    disabled={formDisabled}
                    type="radio"
                    className={`form-radio ${
                      formDisabled ? "bg-gray-100" : "bg-white"
                    }`}
                    name="businessDetails.hasPreviousAbn.answer"
                    value={option}
                    onChange={() => onChange(option === "Yes")}
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
      {errors?.businessDetails?.hasPreviousAbn?.answer && (
        <ErrorText>
          {errors.businessDetails.hasPreviousAbn.answer?.message}
        </ErrorText>
      )}
      {watch("businessDetails.hasPreviousAbn.answer") && (
        <div>
          <label htmlFor="message">Previous ABN</label>
          <input
            {...register(
              "businessDetails.hasPreviousAbn.prevAbn",
              watch("businessDetails.hasPreviousAbn.answer") && {
                required: "This field is required",
                pattern: {
                  value: ABN_REGEX,
                  message: "ABN must be exactly 11 digits",
                },
              }
            )}
            disabled={formDisabled}
            type="number"
            className={`rounded-md ${
              formDisabled ? "bg-gray-100" : "bg-white"
            } ${
              formDisabled ? "text-gray-400" : "text-gray-800"
            } py-3 border-gray-300 w-full font-medium px-4 rounded-lg w-full text-base font-normal leading-normal border border-gray-300 appearance-none rounded transition-colors transition-shadow`}
            defaultValue=""
            placeholder={"Enter your ABN"}
            data-error="Please enter your Name"
          />
          <div className="my-2"></div>
          <p>
            If you can't remember your ABN, <a>click here</a>
          </p>
          {errors?.businessDetails?.hasPreviousAbn?.prevAbn && (
            <ErrorText>
              {errors.businessDetails.hasPreviousAbn.prevAbn?.message}
            </ErrorText>
          )}
        </div>
      )}
      <Tooltip id="my-tooltip" />
    </FormPartLayout>
  );
};

export default BusinessDetails;
