import { useSoleTraderFormContext } from "app/sole-trader/SoleTraderFormContext";
import { Button } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { CiCircleCheck } from "react-icons/ci";
import BusinessNameRegistrationDetails from "./BusinessNameRegistrationDetails";
import { usePartnershipFormContext } from "app/partnership/PartnerShipFormContext";

type Props = {
  resetSearch: () => void;
};

const AvailableText = (props: Props) => {
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
    <div>
      <div
        data-show={showText}
        className="flex items-center justify-start gap-2 hidden data-[show=true]:block"
      >
        <CiCircleCheck width={20} height={20} className="text-green-700" />
        <p className="p-0 m-0 text-lg font-semibold text-green-700">
          Congratulations! This business name is available!
        </p>
      </div>
      <div className="my-2" />
      <p data-show={showText} className="hidden text-sm data-[show=true]:block">
        The business name above is still available and you <br /> may secure it
        now from just $99 per year.
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
    </div>
  );
};

export default AvailableText;
