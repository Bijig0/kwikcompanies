import { usePartnershipFormContext } from "./PartnerShipFormContext";

const Declaration = () => {
  const {
    formManager: { register },
  } = usePartnershipFormContext();
  return (
    <div>
      <input
        {...register("agreedToTermsAndServices")}
        id="agreedToTermsAndServices"
        type="checkbox"
      />
      <label htmlFor="agreedToTermsAndServices" className="ml-2">
        I have read and accept the{" "}
        <a className="text-blue-500 hover:underline">Terms and Services</a>
      </label>
    </div>
  );
};

export default Declaration;
