"use client";
import PageBanner from "@components/PageBanner";
import AkpagerLayout from "@layouts/AkpagerLayout";
import { useState } from "react";
import FormValues from "./form";
import { BusinessHistory } from "./individual";

import "react-datepicker/dist/react-datepicker.css";
import Declaration from "./Declaration";
import Divider from "./Divider";
import SoleTraderFormProvider from "./SoleTraderFormContext";
import ABNEntitlement from "./sole-trader/ABNEntitlement";
import ABNRegistrationDetails from "./sole-trader/ABNRegistrationDetails";
import BusinessDetails from "./sole-trader/BusinessDetails";
import BusinessLocation from "./sole-trader/BusinessLocation";
import BusinessNameApplication from "./sole-trader/BusinessNameApplication/BusinessNameApplication";
import GSTRegistration from "./sole-trader/GSTRegistration";
import SoleTraderDetails from "./sole-trader/SoleTraderDetails";

const Page = () => {
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const [selBusinessHistory, setSelBusinessHistory] =
    useState<BusinessHistory>();

  return (
    <AkpagerLayout>
      {/* <Script src={GOOGLE_MAPS_URL} strategy="beforeInteractive" /> */}
      <PageBanner pageName={"Individual ABN Form"} />
      {/* Contact Page Start */}
      <section className="py-16 contact-page rpy-100">
        <div className="container ">
          <div className="flex justify-center row gap-100 align-items-center">
            <div className="col-lg-7">
              <div
                className="contact-form br-10 bgc-lighter rmt-60"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <form
                  id="contactForm"
                  className="flex flex-col contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                >
                  <SoleTraderFormProvider totalSteps={7}>
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
                  </SoleTraderFormProvider>

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
export default Page;
