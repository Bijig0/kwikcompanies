import { useState } from "react";
import { useCompanyFormContext } from "./CompanyFormContext";
const accessToken =
  "pk.eyJ1IjoiYmlqaWcwIiwiYSI6ImNsdXpreWNnZTFkaGkycW53dDhseWh3cWgifQ.30N1A9KD3UR4762uEEH-yQ";

export default function AddressAutocomplete() {
  const [value, setValue] = useState("68 Latrobe");
  const { formDisabled } = useCompanyFormContext();

  const handleChange = (e) => {
    console.log(e.target);
    console.log(e);

    console.log(e.target.type);
    setValue(e.target.value);
  };
  return (
    <div />

    // <AddressAutofill accessToken={accessToken}>
    //   <input
    //     type="text"
    //     placeholder="Enter your address"
    //     className={`rounded-md ${formDisabled ? "bg-gray-100" : "bg-white"} ${
    //       formDisabled ? "text-gray-400" : "text-gray-800"
    //     } py-3 border-gray-300 w-full font-medium px-4 rounded-lg w-full text-base font-normal leading-normal border border-gray-300 appearance-none rounded transition-colors transition-shadow`}
    //     autoComplete="shipping street-address"
    //     value={value}
    //     onChange={handleChange}
    //   />
    // </AddressAutofill>
  );
}
