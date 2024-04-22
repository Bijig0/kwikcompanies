"use client";
import PageBanner from "@components/PageBanner";
import AkpagerLayout from "@layouts/AkpagerLayout";
import FormValues from "./soleTraderForm";

import { Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Divider from "../../components/Divider";
import Declaration from "./Declaration";
import SoleTraderFormProvider, {
  useSoleTraderFormContext,
} from "./SoleTraderFormContext";
import ABNEntitlement from "./sole-trader/ABNEntitlement";
import ABNRegistrationDetails from "./sole-trader/ABNRegistrationDetails";
import BusinessDetails from "./sole-trader/BusinessDetails";
import BusinessLocation from "./sole-trader/BusinessLocation";
import BusinessNameApplication from "./sole-trader/BusinessNameApplication/BusinessNameApplication";
import GSTRegistration from "./sole-trader/GSTRegistration";
import SoleTraderDetails from "./sole-trader/SoleTraderDetails";

const _Page = () => {
  const {
    formManager: { handleSubmit },
  } = useSoleTraderFormContext();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <AkpagerLayout onePage>
      {/* <Script src={GOOGLE_MAPS_URL} strategy="beforeInteractive" /> */}
      <PageBanner pageName={"Individual ABN Form"} />
      {/* Contact Page Start */}
      <section className="py-16 contact-page rpy-100">
        <div className="mx-auto px-4 lg:px-8 w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1750px]">
          <div className="flex justify-center row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="contact-form br-10 bgc-lighter rmt-60">
                <form
                  id="contactForm"
                  className="flex flex-col contactForm"
                  name="contactForm"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <BusinessDetails />
                  <Divider />
                  <ABNEntitlement />
                  <Divider />

                  <SoleTraderDetails />
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
                  <Button type="submit" className="px-4 py-2 mx-auto font-bold">
                    Continue
                  </Button>

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
