import {
  AddressAutofill,
  config,
  useConfirmAddress,
} from "@mapbox/search-js-react";
import { AddressAutofillProps } from "@mapbox/search-js-react/dist/components/AddressAutofill";
import { useBoolean } from "@utils/useBoolean";
import { useEffect, useRef, useState } from "react";
import { SoleTraderTextInput } from "./SoleTraderFormComponents";
import { useSoleTraderFormContext } from "./SoleTraderFormContext";

const mapBoxAccessToken =
  "pk.eyJ1IjoiYmlqaWcwIiwiYSI6ImNsdXpreWNnZTFkaGkycW53dDhseWh3cWgifQ.30N1A9KD3UR4762uEEH-yQ";

type AutoCompleteResponse = Parameters<AddressAutofillProps["onRetrieve"]>[0];

export default function AutofillCheckoutDemo() {
  const {
    value: isFormExpanded,
    toggle: toggleFormExpansion,
    setTrue: expandForm,
    setFalse: closeForm,
  } = useBoolean(false);

  const [showValidationText, setShowValidationText] = useState(false);
  const [token, setToken] = useState("");

  const {
    formDisabled,
    formManager: { setValue, register, watch },
  } = useSoleTraderFormContext();

  useEffect(() => {
    const accessToken = mapBoxAccessToken;
    setToken(accessToken);
    config.accessToken = accessToken;
  }, []);

  const { showConfirm } = useConfirmAddress({
    skipConfirmModal: (feature) =>
      ["exact", "high"].includes(feature.properties.match_code.confidence),
  });

  const autofillInputRef = useRef<HTMLInputElement | null>(null);

  const handleRetrieve = (res: AutoCompleteResponse) => {
    console.log(res);
    const feature = res.features[0];
    console.log(feature.properties.place_name);
    setValue(
      "businessLocation.businessLocation.full_address",
      feature.properties.place_name
    );
    setValue(
      "businessLocation.businessLocation.address_line_1",
      feature.properties.address_line1
    );
    setValue(
      "businessLocation.businessLocation.address_line_2",
      feature.properties.address_line2
    );
    setValue(
      "businessLocation.businessLocation.address_level_1",
      feature.properties.address_level1
    );
    setValue(
      "businessLocation.businessLocation.address_level_2",
      feature.properties.address_level2
    );
    setValue(
      "businessLocation.businessLocation.postcode",
      feature.properties.postcode
    );
    expandForm();
    Promise.resolve(() => (autofillInputRef.current.value = ""));
  };

  const retrieveSuggestedAddress = async (e) => {
    e.preventDefault();
    const result = await showConfirm();
    if (result.type === "nochange") submitForm();
  };

  function submitForm() {
    setShowValidationText(true);
    setTimeout(() => {
      resetForm();
    }, 2500);
  }

  function resetForm() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
    closeForm();
    setShowValidationText(false);
  }

  return (
    <div className="flex flex-col w-full gap-3">
      {/* Input form */}
      <div>
        {/* @ts-ignore */}
        <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
          <SoleTraderTextInput
            placeholder="Address"
            name="businessLocation.businessLocation.full_address"
            required
          />
        </AddressAutofill>
        {!isFormExpanded && (
          <button
            id="manual-entry block"
            className="text-leftborder-b w180 mt6 link txt-ms color-gray color-black-on-hover"
            onClick={toggleFormExpansion}
          >
            Enter an address manually
          </button>
        )}
      </div>
      <div
        data-show={isFormExpanded}
        className="secondary-inputs hidden data-[show=true]:contents"
      >
        <div>
          <label className="txt-s txt-bold color-gray mb3">
            Address Line 2
          </label>
          <SoleTraderTextInput
            placeholder="Apartment, suite, unit, building, floor, etc."
            name="businessLocation.businessLocation.address_line_2"
          />
        </div>
        <div>
          <label className="txt-s txt-bold color-gray mb3">City</label>
          <SoleTraderTextInput
            placeholder="City"
            name="businessLocation.businessLocation.address_level_2"
            required
          />
        </div>
        <div>
          <label className="txt-s txt-bold color-gray mb3">
            State / Region
          </label>
          <SoleTraderTextInput
            placeholder="State/Region"
            name="businessLocation.businessLocation.address_level_1"
            required
          />
        </div>
        <div>
          <label className="txt-s txt-bold color-gray mb3">
            ZIP / Postcode
          </label>
          <SoleTraderTextInput
            placeholder="e.g. 3000"
            name="businessLocation.businessLocation.postcode"
            required
          />
        </div>
      </div>
      {isFormExpanded && (
        <button
          id="manual-entry block"
          className="text-left border-b w180 mt6 link txt-ms color-gray color-black-on-hover"
          onClick={toggleFormExpansion}
        >
          Search for another address
        </button>
      )}
    </div>
  );
}
