"use client";
import PageBanner from "@components/PageBanner";
import AkpagerLayout from "@layouts/AkpagerLayout";
import Script from "next/script";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormValues from "./form";
import { BusinessHistory } from "./individual";

import "react-datepicker/dist/react-datepicker.css";
import ABNEntitlement from "./ABNEntitlement";
import BusinessDetails from "./BusinessDetails";
import BusinessLocation, { GOOGLE_MAPS_URL } from "./BusinessLocation";
import SoloTraderDetails from "./SoloTraderDetails";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const [selBusinessHistory, setSelBusinessHistory] =
    useState<BusinessHistory>();

  return (
    <AkpagerLayout>
      <Script src={GOOGLE_MAPS_URL} strategy="beforeInteractive" />
      <PageBanner pageName={"Individual ABN Form"} />
      {/* Contact Page Start */}
      <section className="contact-page py-16 rpy-100">
        <div className="container ">
          <div className="row gap-100 justify-center flex align-items-center">
            <div className="col-lg-7">
              <div
                className="contact-form br-10 bgc-lighter rmt-60"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                >
                  <BusinessDetails />
                  <ABNEntitlement />
                  <SoloTraderDetails />
                  <BusinessLocation />
                  

                  <h5>Business Name Application</h5>
                  <p>Step 3 of 8</p>
                  <label
                    className="font-semibold text-black text-md"
                    htmlFor="name"
                  >
                    Will you trade under a business name?
                  </label>
                  <div className="flex flex-col">
                    {[
                      "Yes, the business name I need is...",
                      "No I will trade under my full name",
                    ].map((option) => (
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio"
                          name={option}
                          value={option}
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                  </div>
                  <label htmlFor="message">Will you register for GST?</label>
                  <div className="flex flex-col">
                    {["Yes ($49)", "No"].map((option) => (
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio"
                          name={option}
                          value={option}
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                  </div>
                  {/* We can use the "status" to decide whether we should display the dropdown or not */}
                  {/* {status === "OK" && <ul>{renderSuggestions()}</ul>} */}
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn">
                        Send Us Message <i className="far fa-arrow-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
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
