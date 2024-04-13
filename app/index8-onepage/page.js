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
];

const page = () => {
  const [active, setActive] = useState("collapse1");
  return (
    <AkpagerLayout header={8} footer={8} bodyClass={"home-eight"} onePage>
      {/* Hero area start */}
      <section
        className="hero-area-eight pt-250 rpt-150 pb-220 rel z-1"
        id="home"
      >
        <div className="container container-1290">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content style-eight mt-15"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Unlock FinTech Revolutionaries &amp; Digital Wallet
                </h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  laudantium, totam rem aperiam inventore veritatis
                </p>
                <Link href="contact" className="theme-btn style-two mt-30">
                  Sign Up For Free <i className="far fa-arrow-right" />
                </Link>
                <div className="clients-reviews mt-10">
                  <div className="clients">
                    <div className="images">
                      <img src="assets/images/hero/client1.png" alt="Client" />
                      <img src="assets/images/hero/client2.png" alt="Client" />
                      <img src="assets/images/hero/client3.png" alt="Client" />
                      <img src="assets/images/hero/client4.png" alt="Client" />
                    </div>
                    <div className="text">5m+ Trusted Happy Customer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero-eight-image"
          data-aos="zoom-in-up"
          data-aos-delay={100}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <img src="assets/images/hero/hero-eight.png" alt="Hero" />
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Hero area End */}
      {/* Counter Area Start */}
      <section
        id="features"
        className="counter-area bg-black pt-130 rpt-100 pb-85 rpb-55"
      >
        <div className="container">
          <div className="row gap-70">
            <div className="col-xl-3">
              <div
                className="section-title text-white mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h3>We Help real People do more with money</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <div
                className="counter-item style-four counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/shapes/counter-line.png" alt="Shape" />
                <span
                  className="count-text percent"
                  data-speed={3000}
                  data-stop={98}
                >
                  <Counter end={98} />
                </span>
                <span className="counter-title">Clients Satisfactions</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <div
                className="counter-item style-four counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/shapes/counter-line.png" alt="Shape" />
                <span
                  className="count-text percent"
                  data-speed={3000}
                  data-stop={30}
                >
                  <Counter end={30} />
                </span>
                <span className="counter-title">Decrease Expense</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-6">
              <div
                className="counter-item style-four counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/shapes/counter-line.png" alt="Shape" />
                <span
                  className="count-text m"
                  data-speed={3000}
                  data-stop="7.8"
                >
                  <Counter end={7.8} decimals={1} />
                </span>
                <span className="counter-title">Money Flow Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area Start */}
      <section className="features-area bg-black pb-100 rpb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-debit-card" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">100% Cashless Payments</Link>
                  </h5>
                  <p>
                    Cashless payments revolutionized the we conduct transactions
                    in today digital age. With the rise of technology
                  </p>
                  <Link href="service-details" className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Secured and Safe</Link>
                  </h5>
                  <p>
                    Security and safety are paramount in today's interconnected
                    world. Whether safeguarding personal information{" "}
                  </p>
                  <Link href="service-details" className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-money-transfer" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Make Quick Transfer</Link>
                  </h5>
                  <p>
                    Making quick transfers has become an integral part of
                    financial convenience. With the of digital banking
                  </p>
                  <Link href="service-details" className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area End */}
      {/* About Area Start */}
      <section
        id="about"
        className="about-eight-area pt-95 pb-105 rpb-75 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div
                className="about-eight-content rmb-45"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Gather is a Multi Functional All-in-one Platform For Teams
                  </h2>
                </div>
                <p>
                  Many financial institutions and mobile apps offer
                  user-friendly interfaces and secure platforms that facilitate
                  instantaneous transactions, often with just a few clicks.
                  These rapid transfer capabilities not only save time but also
                  enhance
                </p>
                <a href="#" className="theme-btn mt-25">
                  Get Started <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div
                className="about-eight-image"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about-eight.png" alt="About" />
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
      {/* Services Box Area Start */}
      <section
        id="services"
        className="services-box-area pb-100 rpb-70 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Unlocking Opportunities Explore Our Financial Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-payment-method" />
                </div>
                <hr />
                <div className="content">
                  <h5>
                    <Link href="service-details">Payment Feature Ultimate</Link>
                  </h5>
                  <p>
                    These rapid transfer capabilities save time also enhance
                    financial accessibility
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-eight-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-data" />
                </div>
                <hr />
                <div className="content">
                  <h5>
                    <Link href="service-details">Finance Analytics</Link>
                  </h5>
                  <p>
                    These rapid transfer capabilities save time also enhance
                    financial accessibility
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-eight-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-technology-1" />
                </div>
                <hr />
                <div className="content">
                  <h5>
                    <Link href="service-details">Intelligent Software</Link>
                  </h5>
                  <p>
                    These rapid transfer capabilities save time also enhance
                    financial accessibility
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-eight-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-revenue" />
                </div>
                <hr />
                <div className="content">
                  <h5>
                    <Link href="service-details">Investment Banks</Link>
                  </h5>
                  <p>
                    These rapid transfer capabilities save time also enhance
                    financial accessibility
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-eight-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-financial" />
                </div>
                <hr />
                <div className="content">
                  <h5>
                    <Link href="service-details">Asset &amp; Hedge funds</Link>
                  </h5>
                  <p>
                    These rapid transfer capabilities save time also enhance
                    financial accessibility
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-eight-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="iconic-box style-eight"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-mortgage" />
                </div>
                <hr />
                <div className="content">
                  <h5>
                    <Link href="service-details">Mortgage Loans</Link>
                  </h5>
                  <p>
                    These rapid transfer capabilities save time also enhance
                    financial accessibility
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-eight-bg.png"
                    alt="Shape"
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
      {/* Services Box Area End */}
      {/* Transform Finance Area Start */}
      <section className="transform-finance-area bgc-lighter pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Navigating Innovation How We Transform Finance</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="feature-image-box-two style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Facilitate Financial Services
                    </Link>
                  </h5>
                  <p>
                    As technology continues evolve, making quick transfers is
                    poised to remain systems essential feature in our
                    increasingly
                  </p>
                </div>
                <div className="image">
                  <img
                    src="assets/images/fancy-box/feature-two1.png"
                    alt="Feature"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="feature-image-box-two"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/fancy-box/feature-two2.png"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Fintech as an Alternative Investment Tool
                    </Link>
                  </h5>
                  <p>
                    We apologize for any inconvenience, and committed to
                    improving your browsing experience. Thank you for your
                    patience, and happy exploring technology
                  </p>
                </div>
              </div>
              <div
                className="feature-image-box-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Financial Transactions Become Easier
                    </Link>
                  </h5>
                  <p>
                    We apologize for any inconvenience, and committed to
                    improving your browsing experience. Thank you for your
                    patience, and happy exploring technology
                  </p>
                </div>
                <div className="image">
                  <img
                    src="assets/images/fancy-box/feature-two3.png"
                    alt="Feature"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Transform Finance Area End */}
      {/* FAQ Area Start */}
      <section id="faqs" className="faq-eight-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="faq-eight-image rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/faq/faq-eight1.png" alt="FAQ" />
                <img src="assets/images/faq/faq-eight2.png" alt="FAQ" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-eight-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-60">
                  <h2>
                    Innovate Finance Pioneering the Future of Fintech Business
                  </h2>
                </div>
                <Accordion
                  defaultActiveKey={active}
                  className="accordion style-two"
                  id="accordionTwo"
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
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* FAQ Area End */}
      {/* Testimonials Area Start */}
      <section
        id="testimonials"
        className="testimonials-area bg-black py-130 rpy-100 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-white text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>1523+ Global Clients Say About Our Software</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderProps.testiSliderSix}
            className="testi-slider-six text-white"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="testimonial-item-four">
              <div className="image">
                <img
                  src="assets/images/testimonials/author8.png"
                  alt="Author"
                />
              </div>
              <div className="author-text">
                We offer a wide range of fintech services, including digital
                payments, blockchain technology, lending platforms, financial
                analytics, and more solutions are customizable
              </div>
              <div className="quote">
                <i className="flaticon-double-quotes" />
              </div>
              <h5 className="name">Nicholas S. Moore</h5>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
            <div className="testimonial-item-four">
              <div className="image">
                <img
                  src="assets/images/testimonials/author8.png"
                  alt="Author"
                />
              </div>
              <div className="author-text">
                We offer a wide range of fintech services, including digital
                payments, blockchain technology, lending platforms, financial
                analytics, and more solutions are customizable
              </div>
              <div className="quote">
                <i className="flaticon-double-quotes" />
              </div>
              <h5 className="name">Nicholas S. Moore</h5>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </Slider>
        </div>
        <div className="testimonials-eight-shapes">
          <div className="shape one">
            <img
              src="assets/images/shapes/testimonial-eight1.png"
              alt="Shape"
            />
          </div>
          <div className="shape two">
            <img
              src="assets/images/shapes/testimonial-eight2.png"
              alt="Shape"
            />
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* App Stor Area Start */}
      <section className="app-stor-area pt-40 pb-250 rpb-150 rel z-1">
        <div className="container mb-30">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div
                className="about-eight-content rel z-2 my-55 rmb-25"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Fintech Forward Transforming Finance for Tomorrow</h2>
                </div>
                <p>
                  Many financial institutions and mobile apps offer
                  user-friendly interfaces and secure platforms that facilitate
                  instantaneous transactions, often with just a few clicks
                </p>
                <div className="play-app-stor pt-10">
                  <a href="#">
                    <img
                      src="assets/images/icons/play-stor.png"
                      alt="Play Stor"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/icons/app-stor.png"
                      alt="App Stor"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-eight-image-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/about/about-eight-two.png"
                  alt="About"
                />
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
      {/* App Stor Area End */}
    </AkpagerLayout>
  );
};
export default page;
