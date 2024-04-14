"use client";
import PageBanner from "@components/PageBanner";
import AkpagerLayout from "@layouts/AkpagerLayout";
import useClickOutside from "@utils/useClickOutside";
import Script from "next/script";
import { useState } from "react";
import { useForm } from "react-hook-form";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import FormValues, { titles } from "./form";
import { BusinessHistory } from "./individual";

const GOOGLE_MAPS_API_KEY = "AIzaSyD2uwgS-JBNlmWY84ryeDwy6T_-hFn0oFg";

const GOOGLE_MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "initMap",
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  console.log({ data });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When the user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  const ref = useClickOutside(() => {
    // When the user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

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
                  <label
                    className="font-semibold text-black text-md"
                    htmlFor="message"
                  >
                    Why do you need an ABN?
                  </label>
                  <label htmlFor="message">Title</label>
                  <select className="px-3 py-[18px] border-solid border-black">
                    {titles.map((title) => (
                      <option className="">{title}</option>
                    ))}
                  </select>
                  <label htmlFor="message">First Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Somaia D. Silva"
                    required={false}
                    data-error="Please enter your Name"
                  />
                  <label htmlFor="message">Last Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Somaia D. Silva"
                    required={false}
                    data-error="Please enter your Name"
                  />
                  <label htmlFor="message">Email</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Somaia D. Silva"
                    required={false}
                    data-error="Please enter your Name"
                  />
                  <label htmlFor="message">Phone Number</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Somaia D. Silva"
                    required={false}
                    data-error="Please enter your Name"
                  />
                  {/* Date Picker */}
                  <label htmlFor="message">Tax File Number</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Somaia D. Silva"
                    required={false}
                    data-error="Please enter your Name"
                  />
                  <div ref={ref}>
                    <label htmlFor="message">Address</label>
                    <input
                      value={value}
                      onChange={handleInput}
                      disabled={!ready}
                      placeholder="Where are you going?"
                    />
                  </div>
                  <label htmlFor="message">
                    Is your business located at your home address?
                  </label>
                  <RadioButtons />
                  <label htmlFor="message">
                    What is your address for service of documents?
                  </label>
                  {/* ABN Active Date */}
                  <label htmlFor="message">Main Business Activity</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Somaia D. Silva"
                    required={false}
                    data-error="Please enter your Name"
                  />
                  <label htmlFor="message">Business Category</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Somaia D. Silva"
                    required={false}
                    data-error="Please enter your Name"
                  />
                  <label htmlFor="message">Will you register for GST?</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Somaia D. Silva"
                    required={false}
                    data-error="Please enter your Name"
                  />
                  {/* We can use the "status" to decide whether we should display the dropdown or not */}
                  {status === "OK" && <ul>{renderSuggestions()}</ul>}
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
