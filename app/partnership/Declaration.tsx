import ErrorText from "./ErrorText";
import { usePartnershipFormContext } from "./PartnerShipFormContext";

const Declaration = () => {
  const {
    formDisabled,
    formManager: {
      register,
      formState: { errors },
    },
  } = usePartnershipFormContext();
  return (
    <div>
      <input
        {...register("agreedToTermsAndServices", {
          required: "This field is required",
        })}
        id="agreedToTermsAndServices"
        type="checkbox"
        disabled={formDisabled}
      />
      <label htmlFor="agreedToTermsAndServices" className="ml-2">
        I have read and accept the{" "}
        <a className="text-blue-500 hover:underline">Terms and Services</a>
      </label>
      {errors.agreedToTermsAndServices && (
        <ErrorText>{errors.agreedToTermsAndServices.message}</ErrorText>
      )}
    </div>
  );
};

export default Declaration;
