import ErrorText from "@components/ErrorText";
import { Urls } from "app/types/urls";
import { useSoleTraderFormContext } from "./SoleTraderFormContext";

const Declaration = () => {
  const {
    formManager: {
      register,
      formState: { errors },
    },
  } = useSoleTraderFormContext();
  return (
    <>
      <div>
        <input
          {...register("agreeToAuthorizeAsATOAgent", {
            required: "This field is required",
          })}
          id="agreeToAuthorizeAsATOAgent"
          type="checkbox"
        />
        <label htmlFor="agreeToAuthorizeAsATOAgent" className="ml-2">
          I agree to have my ABN registered through an{" "}
          <a
            href={Urls["ATO Authorised Agent Declaration"]}
            className="text-blue-500 hover:underline"
          >
            authorised ATO agent
          </a>
        </label>
        {errors.agreeToAuthorizeAsATOAgent && (
          <ErrorText>{errors.agreeToAuthorizeAsATOAgent.message}</ErrorText>
        )}
      </div>
      <div>
        <input
          {...register("agreedToTermsAndServices", {
            required: "This field is required",
          })}
          id="agreedToTermsAndServices"
          type="checkbox"
        />
        <label htmlFor="agreedToTermsAndServices" className="ml-2">
          I have read and accept the{" "}
          <a
            href={Urls["Terms And Services"]}
            className="text-blue-500 hover:underline"
          >
            Terms and Services
          </a>
        </label>
        {errors.agreedToTermsAndServices && (
          <ErrorText>{errors.agreedToTermsAndServices.message}</ErrorText>
        )}
      </div>
    </>
  );
};

export default Declaration;
