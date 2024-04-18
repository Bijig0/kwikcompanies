import { useSoleTraderFormContext } from "./SoleTraderFormContext";

const Declaration = () => {
  const {
    formManager: { register },
  } = useSoleTraderFormContext();
  return (
    <div>
      <input
        {...register("agreedToTermsAndServices")}
        id="agreedToTermsAndServices"
        type="checkbox"
      />
      <label htmlFor="agreedToTermsAndServices" className="ml-2">
        I have been known by another name in the past
      </label>
    </div>
  );
};

export default Declaration;
