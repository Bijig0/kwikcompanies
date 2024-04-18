import { useSoleTraderFormContext } from "app/contact/SoleTraderFormContext";
import { Button } from "react-bootstrap";
import { Controller } from "react-hook-form";
import BusinessNameRegistrationDetails from "./BusinessNameRegistrationDetails";

const ForManualReviewText = () => {
  const {
    formManager: { control, register, watch, setValue, getValues },
    formDisabled,
  } = useSoleTraderFormContext();

  const handleClick = () => {
    console.log(getValues());
    setValue(
      "isRegisteringBusinessName.answer",
      !Boolean(watch("isRegisteringBusinessName.answer"))
    );
  };

  return (
    <>
      <div className="flex justify-start items-center gap-2">
        <p className="text-lg font-semibold text-green-700 p-0 m-0">
          Your name may be available. Secure it before someone else does.
        </p>
      </div>
      <div className="my-2" />
      <p
        data-show={!Boolean(watch("isRegisteringBusinessName.answer"))}
        className="text-sm data-[show]:hidden"
      >
        This business name will be reviewed by our specialist team before final
        registration.
      </p>
      <div className="flex justify-start items-center gap-3">
        <Controller
          name="isRegisteringBusinessName.answer"
          control={control}
          render={() => (
            <Button onClick={handleClick} disabled={formDisabled}>
              {!Boolean(watch("isRegisteringBusinessName.answer"))
                ? "Secure this name now!"
                : "Clear and search again"}
            </Button>
          )}
        />
        {watch("isRegisteringBusinessName.answer") && (
          <BusinessNameRegistrationDetails />
        )}
        <Button className="bg-gray-300 border-gray-300 text-black">
          Clear and search again
        </Button>
      </div>
    </>
  );
};

export default ForManualReviewText;
