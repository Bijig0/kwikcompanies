"use client";
import PageBanner from "@components/PageBanner";
import AkpagerLayout from "@layouts/AkpagerLayout";
import FormValues from "./partnershipForm";

import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Declaration from "./Declaration";
import Divider from "./Divider";
import ErrorText from "./ErrorText";
import SoleTraderFormProvider, {
  usePartnershipFormContext,
} from "./PartnerShipFormContext";
import ABNEntitlement from "./partnership/ABNEntitlement";
import ABNRegistrationDetails from "./partnership/ABNRegistrationDetails";
import BusinessLocation from "./partnership/BusinessLocation";
import BusinessNameApplication from "./partnership/BusinessNameApplication/BusinessNameApplication";
import GSTRegistration from "./partnership/GSTRegistration";
import PartnershipDetails from "./partnership/PartnershipDetails";

const _Page = () => {
  const {
    formDisabled,
    formManager: {
      handleSubmit,
      formState: { errors },
    },
  } = usePartnershipFormContext();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const errorsPresent = Object.keys(errors).length !== 0;

  return (
    <AkpagerLayout onePage>
      {/* <Script src={GOOGLE_MAPS_URL} strategy="beforeInteractive" /> */}
      <PageBanner pageName={"Partnership ABN Registration Form"} />
      {/* Contact Page Start */}
      <section className="py-16 contact-page rpy-100">
        <div className="container ">
          <div className="flex justify-center row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="contact-form br-10 bgc-lighter rmt-60">
                <form
                  id="contactForm"
                  className="flex flex-col contactForm"
                  name="contactForm"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <ABNEntitlement />
                  <Divider />

                  <PartnershipDetails />
                  <Divider />

                  <BusinessLocation />
                  <Divider />

                  <ABNRegistrationDetails />
                  <Divider />

                  <BusinessNameApplication />
                  <Divider />

                  <GSTRegistration />
                  <Divider />

                  <Declaration />
                  <div className="my-3" />
                  <Button
                    disabled={formDisabled}
                    type="submit"
                    className={`px-4 py-2 mx-auto font-bold ${
                      formDisabled && "opacity-40"
                    }`}
                  >
                    Continue
                  </Button>
                  <div className="flex justify-center mt-4">
                    {errorsPresent && (
                      <ErrorText>
                        Some fields are not completed correctly, please check
                        your submission again
                      </ErrorText>
                    )}
                  </div>

                  {/* We can use the "status" to decide whether we should display the dropdown or not */}
                  {/* {status === "OK" && <ul>{renderSuggestions()}</ul>} */}
                  {/* <div className="col-md-12">
                    <div className="mb-0 form-group">
                      <button type="submit" className="theme-btn">
                        Send Us Message <i className="far fa-arrow-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};

const Page = () => {
  return (
    <SoleTraderFormProvider totalSteps={7}>
      <_Page />
    </SoleTraderFormProvider>
  );
};

export default Page;
