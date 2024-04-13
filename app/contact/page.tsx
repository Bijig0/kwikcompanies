"use client";
import AkpagerLayout from "@layouts/AkpagerLayout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import FormValues from "./form";
import { BusinessHistory } from "./individual";

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
      {/* Contact Page Start */}
      <section className="contact-page py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
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
                  <img
                    className="shape-one"
                    src="assets/images/shapes/star-yellow-shape.png"
                    alt="Star Shape"
                  />
                  <img
                    className="shape-two"
                    src="assets/images/shapes/star-black-shape.png"
                    alt="Star Shape"
                  />
                  <h5>Send Us Message</h5>
                  <p>
                    Questions or you would just like to say hello, contact us.
                  </p>
                  <label
                    className="font-bold text-black text-md"
                    htmlFor="name"
                  >
                    Business History
                  </label>
                  <Select />
                  <label
                    className="font-semibold text-black text-md"
                    htmlFor="name"
                  >
                    Have you had an ABN in the past?
                  </label>
                  <RadioButtons />
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Why do you need an ABN?</label>
                      <select className="px-3 py-[18px] border-solid border-black">
                        <option className="">
                          This is my first time doing business in Australia
                        </option>
                      </select>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Full Name</label>
                      <select className="px-3 py-[18px] border-solid border-black">
                        <option className="">
                          This is my first time doing business in Australia
                        </option>
                      </select>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
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
      {/* Contact Page End */}
      {/* Location Map Area Start */}
      <div className="contact-page-map">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Location Map Area End */}
    </AkpagerLayout>
  );
};
export default Page;
