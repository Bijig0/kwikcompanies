"use client";
import AkpagerAccordion from "@/components/AkpagerAccordion";
import Counter from "@/components/Counter";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";

const accordionItems = [
  {
    id: 1,
    title: "How To Get Our Services?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 2,
    title: "What Is Data Analysis For Business ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 3,
    title: "Why Need Marketing Data Analysis ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 4,
    title: "Have Any Dedicated Support Team ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 5,
    title: "Why Join Our Courses ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 6,
    title: "Have Any Dedicated Support Team ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
];

const page = () => {
  const [active, setActive] = useState("collapse1");
  return (
    <AkpagerLayout header={7} footer={7} bodyClass={"home-seven"}>
      {/* Hero area start */}
      <section className="hero-area-seven pt-140 rpt-150 pb-70 rel z-1 bgc-lighter">
        <div className="container container-1520">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="hero-content style-seven rmb-20"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span
                  className="subtitle-one mb-20"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <i className="fas fa-rocket-launch" /> Awards Winning Agency
                </span>
                <h1
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Create a Custom stunning website in a minutes
                </h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium aperiae
                </p>
                <Link href="contact" className="theme-btn mt-30">
                  Sign Up For Free <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-7"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="hero-seven-image">
                <img src="assets/images/hero/hero-seven.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Hero area End */}
      {/* Client Logos Area Start */}
      <section className="client-logo-area-five pt-100 rel z-1">
        <div className="container">
          <div
            className="section-title text-center mb-50"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <h4>I’ve 1253+ Global Clients &amp; lot’s of Project Complete</h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo5.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo1.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={100}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo2.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={150}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo3.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={200}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo4.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item style-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={250}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo6.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Client Logos Area End */}
      {/* About Area Start */}
      <section className="about-area pt-95 rpt-65 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row gap-150 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-seven-images rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about-seven.png" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content-seven"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Everything you need to work, shop, and save.</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaqups
                  quae ab illo inventore veritatis et quasi architecto
                </p>
                <ul className="icon-list style-three mt-35">
                  <li>
                    <i className="fal fa-check" /> Create Your Business Best
                    Website Mobile Applications
                  </li>
                  <li>
                    <i className="fal fa-check" /> Answer three simple questions
                    AI will create your website.
                  </li>
                  <li>
                    <i className="fal fa-check" /> Customize your site further
                    with the drag-and-drop editor.
                  </li>
                </ul>
                <div className="btns pt-35">
                  <Link href="about" className="theme-btn mt-10 me-4">
                    Learn More Us <i className="far fa-arrow-right" />
                  </Link>
                  <Link href="about" className="read-more mt-10">
                    Learn More Us <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* About Area End */}
      {/* Pricing Area Start */}
      <section className="pricing-area-seven-one bgc-black rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center text-white mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>We Provide Amazing Features For Create Website</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="pricing-item style-six"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-web-browser" />
                </div>
                <h5>One Click to Export</h5>
                <p>
                  Sed perspiciatis unde omnise volupe accusan doloremque laudan
                </p>
                <ul className="icon-list">
                  <li>
                    <i className="fal fa-check" /> One Click Demo Import
                  </li>
                  <li>
                    <i className="fal fa-check" /> Easy Customizable for Web
                    &amp; Mobile
                  </li>
                  <li>
                    <i className="fal fa-check" /> Fast Loading Website Builder
                  </li>
                </ul>
                <a href="#" className="theme-btn style-three">
                  Read More <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="pricing-item style-six"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-web-content" />
                </div>
                <h5>Pre-made Pages</h5>
                <p>
                  Sed perspiciatis unde omnise volupe accusan doloremque laudan
                </p>
                <ul className="icon-list">
                  <li>
                    <i className="fal fa-check" /> Pre-made Pages Creators
                  </li>
                  <li>
                    <i className="fal fa-check" /> Easy Customizable for Web
                    &amp; Mobile
                  </li>
                  <li>
                    <i className="fal fa-check" /> Fast Loading Website Builder
                  </li>
                </ul>
                <a href="#" className="theme-btn style-three">
                  Read More <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="pricing-item style-six"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-optimization" />
                </div>
                <h5>Fast Customization</h5>
                <p>
                  Sed perspiciatis unde omnise volupe accusan doloremque laudan
                </p>
                <ul className="icon-list">
                  <li>
                    <i className="fal fa-check" /> One Click Demo Import
                  </li>
                  <li>
                    <i className="fal fa-check" /> Easy Customizable for Web
                    &amp; Mobile
                  </li>
                  <li>
                    <i className="fal fa-check" /> Fast Loading Website Builder
                  </li>
                </ul>
                <a href="#" className="theme-btn style-three">
                  Read More <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-7"
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div
                className="cta-left-content bgc-primary rmb-30"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/cta-left-circle.png)",
                }}
              >
                <div className="section-title mb-15">
                  <span className="subtitle d-block mb-10">
                    Website Builder
                  </span>
                  <h3>Ready Work Together to Create Website?</h3>
                </div>
                <Link href="contact" className="theme-btn style-four mb-25">
                  Contact Us <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <div
                className="cta-right-image"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/cta-right.jpg)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Pricing Area End */}
      {/* About Area Start */}
      <section className="about-area-seven pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Stunning Templates to Empower Your Success</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus ccusa ntium
                  doloremque laudantium, totam rem aperiam eaqups abillo
                  inventore
                </p>
                <div className="feature-icon-box mt-35">
                  <div className="icon">
                    <i className="far fa-check" />
                  </div>
                  <div className="content">
                    <h5>Google Free Font Uses</h5>
                    <p>
                      Ut enim ad minima veniam quis nostrum exercitationem ullam
                      corporis suscipit laboriosam commodi consequature
                    </p>
                  </div>
                </div>
                <div className="feature-icon-box">
                  <div className="icon">
                    <i className="far fa-check" />
                  </div>
                  <div className="content">
                    <h5>Drag And Drop Options</h5>
                    <p>
                      To take a trivial example, which of us undertakes
                      laborious physical exercise, except to obtain advantage
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-seven-right-images mb-25 rmb-0 rmt-15"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/about/about-seven-two1.png"
                  alt="About"
                />
                <div className="about-over">
                  <img
                    src="assets/images/about/about-seven-two2.png"
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* About Area End */}
      {/* About Area Start */}
      <section className="about-area-seven pt-130 rpt-100 pb-75 rpb-50 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-seven-left-images mb-50"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/about/about-seven-three1.png"
                  alt="About"
                />
                <div className="about-over">
                  <img
                    src="assets/images/about/about-seven-three2.png"
                    alt="About"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content-seven"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Integrate Seamlessly, Grow Rapidly</h2>
                </div>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                  quiy blanditiis praesentium voluptatum deleniti atque corrupti
                  dolorese quas molestias excepturi sint occaecati cupiditate
                </p>
                <Link href="contact" className="theme-btn mt-25 mb-75">
                  Get Started <i className="far fa-arrow-right" />
                </Link>
                <div className="row">
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text k-plus"
                        data-speed={3000}
                        data-stop={25}
                      >
                        <Counter end={25} />
                      </span>
                      <div className="text">100% Satisficed Clients</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text k-plus"
                        data-speed={3000}
                        data-stop={38}
                      >
                        <Counter end={38} />
                      </span>
                      <div className="text">
                        Task Complete For Global Clients
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* About Area End */}
      {/* Numbered box Area Start */}
      <section className="numbered-box-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Create your Modern Website Just Follow 3 Steps</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="numbered-box">
                <div className="number">1</div>
                <div className="content">
                  <h5>Connect Your Account</h5>
                  <p>
                    Praesentium voluptatum deleniti atque corrupti quos dolores
                    quas molestias exceptur occaecatie
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={200}
              data-aos-offset={50}
            >
              <div className="numbered-box">
                <div className="number">2</div>
                <div className="content">
                  <h5>Design by drag &amp; Drop</h5>
                  <p>
                    Praesentium voluptatum deleniti atque corrupti quos dolores
                    quas molestias exceptur occaecatie
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={400}
              data-aos-offset={50}
            >
              <div className="numbered-box">
                <div className="number">3</div>
                <div className="content">
                  <h5>Lunch Your Website</h5>
                  <p>
                    Praesentium voluptatum deleniti atque corrupti quos dolores
                    quas molestias exceptur occaecatie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Numbered box Area End */}
      {/* Pricing Area Start */}
      <section className="pricing-area-seven-two bgc-lighter color-five pt-125 rpt-95 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-65"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Easy to Start, Easy to Scale Website Builder Plans</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6 col-sm-10"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="pricing-item style-four">
                <div className="icon">
                  <i className="flaticon-educational-school-hand-drawn-tools" />
                </div>
                <h4 className="title">Regular Plan</h4>
                <div className="price">
                  <span className="prev">$</span>15.00
                  <span className="next">/month</span>
                </div>
                <div className="text">No credit card required</div>
                <hr />
                <ul className="icon-list">
                  <li>
                    <i className="fal fa-check" /> 2 Limited sites available
                  </li>
                  <li>
                    <i className="fal fa-check" /> 1 GB storage per site
                  </li>
                  <li>
                    <i className="fal fa-check" /> Up to 5 pages per site
                  </li>
                  <li>
                    <i className="fal fa-check" /> Free SSL for custom domain
                  </li>
                  <li>
                    <i className="fal fa-check" /> Connect custom domain
                  </li>
                </ul>
                <a href="#" className="theme-btn">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="pricing-item style-four">
                <div className="icon">
                  <i className="flaticon-paper-airplane-toy" />
                </div>
                <h4 className="title">Standard Plan</h4>
                <div className="price">
                  <span className="prev">$</span>49.00
                  <span className="next">/month</span>
                </div>
                <div className="text">No credit card required</div>
                <hr />
                <ul className="icon-list">
                  <li>
                    <i className="fal fa-check" /> 2 Limited sites available
                  </li>
                  <li>
                    <i className="fal fa-check" /> 1 GB storage per site
                  </li>
                  <li>
                    <i className="fal fa-check" /> Up to 5 pages per site
                  </li>
                  <li>
                    <i className="fal fa-check" /> Free SSL for custom domain
                  </li>
                  <li>
                    <i className="fal fa-check" /> Connect custom domain
                  </li>
                </ul>
                <a href="#" className="theme-btn">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="pricing-item style-four">
                <div className="icon">
                  <i className="flaticon-diamond" />
                </div>
                <h4 className="title">Premium Plan</h4>
                <div className="price">
                  <span className="prev">$</span>93.00
                  <span className="next">/month</span>
                </div>
                <div className="text">No credit card required</div>
                <hr />
                <ul className="icon-list">
                  <li>
                    <i className="fal fa-check" /> 2 Limited sites available
                  </li>
                  <li>
                    <i className="fal fa-check" /> 1 GB storage per site
                  </li>
                  <li>
                    <i className="fal fa-check" /> Up to 5 pages per site
                  </li>
                  <li>
                    <i className="fal fa-check" /> Free SSL for custom domain
                  </li>
                  <li>
                    <i className="fal fa-check" /> Connect custom domain
                  </li>
                </ul>
                <a href="#" className="theme-btn">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Pricing Area End */}
      {/* Testimonials Area Start */}
      <section className="testimonials-area-seven pt-120 rpt-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="testimonials-seven-content-part rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-55">
                  <h2>What Our Customer Say About Us</h2>
                </div>
                <Slider
                  {...sliderProps.testiSliderFive}
                  className="testi-slider-five"
                >
                  <div className="testimonial-item style-three">
                    <div className="author">
                      <div className="icon">
                        <i className="flaticon-quotation-mark" />
                      </div>
                      <div className="title">
                        <b>Nicholas S. Moore /</b> CEO &amp; Founder
                      </div>
                    </div>
                    <div className="author-text">
                      At vero eoset accusamus dignissimos ducimus blanditiis
                      praesentium volupta delenitie corruptie molestias
                    </div>
                    <div className="testi-footer">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="text">
                        <span>4.7/5</span> on Trustpilot
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-item style-three">
                    <div className="author">
                      <div className="icon">
                        <i className="flaticon-quotation-mark" />
                      </div>
                      <div className="title">
                        <b>Nicholas S. Moore /</b> CEO &amp; Founder
                      </div>
                    </div>
                    <div className="author-text">
                      At vero eoset accusamus dignissimos ducimus blanditiis
                      praesentium volupta delenitie corruptie molestias
                    </div>
                    <div className="testi-footer">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="text">
                        <span>4.7/5</span> on Trustpilot
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-item style-three">
                    <div className="author">
                      <div className="icon">
                        <i className="flaticon-quotation-mark" />
                      </div>
                      <div className="title">
                        <b>Nicholas S. Moore /</b> CEO &amp; Founder
                      </div>
                    </div>
                    <div className="author-text">
                      At vero eoset accusamus dignissimos ducimus blanditiis
                      praesentium volupta delenitie corruptie molestias
                    </div>
                    <div className="testi-footer">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span className="text">
                        <span>4.7/5</span> on Trustpilot
                      </span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="testimonials-seven-iamge-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="man">
                  <img
                    src="assets/images/testimonials/testimonials-seven.png"
                    alt="Tesimonials"
                  />
                </div>
                <div className="users">
                  <b className="text">1+ Million Users</b>
                  <img
                    src="assets/images/testimonials/test-seven-author.png"
                    alt="Author"
                  />
                </div>
                <div className="google-ratting">
                  <img src="assets/images/icons/google.png" alt="Google" />
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="text">(4.8) Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* FAQs Area Start */}
      <section className="faqs-area-seven pt-125 rpt-95 pb-115 rpb-85 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-7 col-lg-9"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title text-center mb-60">
                <h2>Have Any Question On Mind! Asked Questions</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <Accordion
                defaultActiveKey={active}
                className="accordion"
                data-aos="fade-up"
                data-aow-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                {accordionItems.map((item) => (
                  <AkpagerAccordion
                    key={item.id}
                    title={item.title}
                    event={`collapse${item.id}`}
                    onClick={() =>
                      setActive(
                        active == `collapse${item.id}`
                          ? ""
                          : `collapse${item.id}`
                      )
                    }
                    active={active}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <div className="faqs-area-seven-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/faq-one1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/faq-one2.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/faq-one3.png" alt="Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/shapes/faq-one4.png" alt="Shape" />
          </div>
          <div className="shape five">
            <img src="assets/images/shapes/faq-one5.png" alt="Shape" />
          </div>
          <div className="shape six">
            <img src="assets/images/shapes/faq-one6.png" alt="Shape" />
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* FAQs Area End */}
    </AkpagerLayout>
  );
};
export default page;
