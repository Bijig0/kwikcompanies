import {
  AddressAutofill,
  config,
  useConfirmAddress,
} from "@mapbox/search-js-react";
import { AddressAutofillProps } from "@mapbox/search-js-react/dist/components/AddressAutofill";
import { useCallback, useEffect, useState } from "react";
import { SoleTraderTextInput } from "./SoleTraderFormComponents";

const mapBoxAccessToken =
  "pk.eyJ1IjoiYmlqaWcwIiwiYSI6ImNsdXpreWNnZTFkaGkycW53dDhseWh3cWgifQ.30N1A9KD3UR4762uEEH-yQ";

type AutoCompleteResponse = Parameters<AddressAutofillProps["onRetrieve"]>[0];

export default function AutofillCheckoutDemo() {
  const [showFormExpanded, setShowFormExpanded] = useState(false);
  const [showValidationText, setShowValidationText] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const accessToken = mapBoxAccessToken;
    setToken(accessToken);
    config.accessToken = accessToken;
  }, []);

  const { formRef, showConfirm } = useConfirmAddress({
    minimap: true,
    skipConfirmModal: (feature) =>
      ["exact", "high"].includes(feature.properties.match_code.confidence),
  });

  const handleRetrieve = (res: AutoCompleteResponse) => {
    console.log(res);
    const feature = res.features[0];
    setShowFormExpanded(true);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const result = await showConfirm();
      if (result.type === "nochange") submitForm();
    },
    [showConfirm]
  );

  function submitForm() {
    setShowValidationText(true);
    setTimeout(() => {
      resetForm();
    }, 2500);
  }

  function resetForm() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
    setShowFormExpanded(false);
    setShowValidationText(false);
  }

  return (
    <>
      <form ref={formRef} className="flex flex--column" onSubmit={handleSubmit}>
        <div className="grid grid--gut24 mb60">
          <div className="w-full col col--auto-mm">
            {/* Input form */}
            <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
              <SoleTraderTextInput name="businessDetails.hasPreviousAbn.prevAbn" />
            </AddressAutofill>
            {!showFormExpanded && (
              <button
                id="manual-entry"
                className="border-b w180 mt6 link txt-ms color-gray color-black-on-hover"
                onClick={() => setShowFormExpanded(true)}
              >
                Enter an address manually
              </button>
            )}
            <div
              className="secondary-inputs"
              style={{ display: showFormExpanded ? "block" : "none" }}
            >
              <label className="txt-s txt-bold color-gray mb3">
                Address Line 2
              </label>
              <input
                className="input mb12"
                placeholder="Apartment, suite, unit, building, floor, etc."
                autoComplete="address-line2"
              />
              <label className="txt-s txt-bold color-gray mb3">City</label>
              <input
                className="input mb12"
                placeholder="City"
                autoComplete="address-level2"
              />
              <label className="txt-s txt-bold color-gray mb3">
                State / Region
              </label>
              <input
                className="input mb12"
                placeholder="State / Region"
                autoComplete="address-level1"
              />
              <label className="txt-s txt-bold color-gray mb3">
                ZIP / Postcode
              </label>
              <input
                className="input"
                placeholder="ZIP / Postcode"
                autoComplete="postal-code"
              />
            </div>
          </div>
        </div>

        {/* Form buttons */}
        {showFormExpanded && (
          <div className="mb30 submit-btns">
            <button type="submit" className="btn round" id="btn-confirm">
              Confirm
            </button>
            <button
              type="button"
              className="btn round btn--gray-light ml3"
              id="btn-reset"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
        )}
      </form>

      {/* Validation text */}
      {showValidationText && (
        <div id="validation-msg" className="mt24 txt-m txt-bold">
          Order successfully submitted.
        </div>
      )}
    </>
  );
}
