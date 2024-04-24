import { Button } from "react-bootstrap";
import { Controller } from "react-hook-form";
import BusinessNameRegistrationDetails from "./BusinessNameRegistrationDetails";
import { usePartnershipFormContext } from "app/partnership/PartnerShipFormContext";

type Props = {
  resetSearch: () => void;
};

const ForManualReviewText = (props: Props) => {
  const { resetSearch } = props;
  const {
    formManager: { control, register, watch, setValue, getValues },
    formDisabled,
  } = usePartnershipFormContext();

  const handleClick = () => {
    console.log(getValues());
    setValue(
      "businessNameApplication.isRegisteringBusinessName.answer",
      !Boolean(
        watch("businessNameApplication.isRegisteringBusinessName.answer")
      )
    );
  };

  const showText = !Boolean(
    watch("businessNameApplication.isRegisteringBusinessName.answer")
  );

  return (
    <>
      <div className="flex items-center justify-start gap-2">
        <p
          data-show={showText}
          className="p-0 m-0 text-lg font-semibold text-green-700 hidden data-[show=true]:block"
        >
          Your name may be available. Secure it before someone else does.
        </p>
      </div>
      <div className="my-2" />
      <p data-show={showText} className="text-sm hidden data-[show=true]:block">
        This business name will be reviewed by our specialist team before final
        registration.
      </p>
      <div className="flex items-center justify-start gap-3">
        <Controller
          name="businessNameApplication.isRegisteringBusinessName.answer"
          control={control}
          render={() => (
            <Button
              className={
                Boolean(
                  watch(
                    "businessNameApplication.isRegisteringBusinessName.answer"
                  )
                ) && "hidden"
              }
              onClick={handleClick}
              disabled={formDisabled}
            >
              Secure this name now!
            </Button>
          )}
        />
        <Button
          onClick={resetSearch}
          className="text-black bg-gray-300 border-gray-300"
        >
          Clear and search again
        </Button>
      </div>
      <div className="my-2" />
      {watch("businessNameApplication.isRegisteringBusinessName.answer") && (
        <BusinessNameRegistrationDetails />
      )}
    </>
  );
};

export default ForManualReviewText;
