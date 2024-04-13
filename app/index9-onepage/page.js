"use client";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const page = () => {
  return (
    <AkpagerLayout header={9} footer={9} bodyClass={"home-nine"} onePage={true}>
      {/* Hero area start */}
      <section
        id="about"
        className="hero-area-nine pt-165 rpt-150 pb-130 rpb-100 rel z-1"
      >
        <div className="container">
          <div className="row gap-70 align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content style-nine mb-100 rmb-55"
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
                  Connectivity &amp; Networking with AI Power Chatbot
                </h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  laudantium, totam rem aperiam inventore veritatis
                </p>
                <form className="newsletter-form mt-40" action="#">
                  <label htmlFor="email-address">
                    <i className="fas fa-envelope" />
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    placeholder="Email Address"
                    required=""
                  />
                  <button type="submit">
                    <b>
                      Free Trail <i className="far fa-arrow-right" />
                    </b>
                  </button>
                </form>
                <ul className="icon-list pt-15">
                  <li>
                    <i className="fal fa-check" /> Free 14-day trial
                  </li>
                  <li>
                    <i className="fal fa-check" /> No credit card required
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="hero-nine-image">
                <img src="assets/images/hero/hero-nine.png" alt="Hero" />
                <div className="shapes">
                  <div
                    className="shape one"
                    data-aos="zoom-in-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/shapes/hero-nine1.png"
                      alt="Shape"
                    />
                  </div>
                  <div
                    className="shape two"
                    data-aos="zoom-in-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/shapes/hero-nine2.png"
                      alt="Shape"
                    />
                  </div>
                  <div
                    className="shape three"
                    data-aos="zoom-in-left"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/shapes/hero-nine3.png"
                      alt="Shape"
                    />
                  </div>
                  <div
                    className="shape four"
                    data-aos="zoom-in-right"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/shapes/hero-nine4.png"
                      alt="Shape"
                    />
                  </div>
                  <div
                    className="shape five"
                    data-aos="zoom-in-left"
                    data-aos-delay={200}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/shapes/hero-nine5.png"
                      alt="Shape"
                    />
                  </div>
                  <div
                    className="shape six"
                    data-aos="zoom-in-right"
                    data-aos-delay={200}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/shapes/hero-nine6.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-nine-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-nine.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-nine.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Hero area End */}
      {/* Client Logo Area Start */}
      <section className="client-logo-area pt-100 pb-90 rpb-60 rel z-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle-three mb-10">
                  Meet Our Global Clients
                </span>
                <h2>
                  We’ve 1253+ Global Clients &amp; lot’s of Project Complete
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
            <div className="col">
              <div
                className="client-logo-item style-four py-45 rpy-25"
                data-aos="fade-up"
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
            <div className="col">
              <div
                className="client-logo-item style-four py-65 rpy-25"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo2.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-four py-45 rpy-25"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo3.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-four py-65 rpy-25"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo4.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-four py-45 rpy-25"
                data-aos="fade-up"
                data-aos-delay={200}
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
          </div>
        </div>
      </section>
      {/* Client Logo Area End */}
      {/* Tab Area Start */}
      <section className="advanced-tab-area pb-130 rpb-100">
        <div className="container">
          <Tab.Container defaultActiveKey={"tabOne1"}>
            <Nav
              as={"ul"}
              className="nav advanced-tab mb-55"
              role="tablist"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Nav.Item as={"li"}>
                <Nav.Link as={"button"} eventKey="tabOne1">
                  <i className="far fa-arrow-right" /> Lead Generation
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link as={"button"} eventKey="tabOne2">
                  <i className="far fa-arrow-right" /> Customer Support
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link as={"button"} eventKey="tabOne3">
                  <i className="far fa-arrow-right" /> Revenue Growth
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link as={"button"} eventKey="tabOne4">
                  <i className="far fa-arrow-right" /> Sales &amp; eCommerce
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="tab-content">
              <Tab.Pane className="tab-pane fade" eventKey="tabOne1">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6">
                    <div className="content rmb-55">
                      <div className="section-title mb-30">
                        <h2>
                          Dedicated Customer Support Your Satisfaction Our
                          Priority
                        </h2>
                      </div>
                      <p>
                        AI chatbots are revolutionizing the way businesses
                        interact with their customers. These intelligent digital
                        assistants are designed to provide instant,
                        round-the-clock support, answering queries and resolving
                        issues with efficiency and accuracy. By leveraging
                        natural language processing and machine learning,
                      </p>
                      <ul className="icon-list mt-20 mb-40">
                        <li>
                          <i className="fal fa-check" /> Get AI Power Chat Files
                        </li>
                        <li>
                          <i className="fal fa-check" /> Connect Securely
                        </li>
                        <li>
                          <i className="fal fa-check" /> Message Experience
                        </li>
                      </ul>
                      <a href="#" className="theme-btn style-two">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="image">
                      <img src="assets/images/tabs/tab1.png" alt="Tab" />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabOne2">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-6">
                    <div
                      className="image"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <img src="assets/images/tabs/tab1.png" alt="Tab" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="content rmt-55"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="section-title mb-30">
                        <h2>
                          Dedicated Customer Support Your Satisfaction Our
                          Priority
                        </h2>
                      </div>
                      <p>
                        AI chatbots are revolutionizing the way businesses
                        interact with their customers. These intelligent digital
                        assistants are designed to provide instant,
                        round-the-clock support, answering queries and resolving
                        issues with efficiency and accuracy. By leveraging
                        natural language processing and machine learning,
                      </p>
                      <ul className="icon-list mt-20 mb-40">
                        <li>
                          <i className="fal fa-check" /> Get AI Power Chat Files
                        </li>
                        <li>
                          <i className="fal fa-check" /> Connect Securely
                        </li>
                        <li>
                          <i className="fal fa-check" /> Message Experience
                        </li>
                      </ul>
                      <a href="#" className="theme-btn style-two">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabOne3">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6">
                    <div className="content rmb-55">
                      <div className="section-title mb-30">
                        <h2>
                          Dedicated Customer Support Your Satisfaction Our
                          Priority
                        </h2>
                      </div>
                      <p>
                        AI chatbots are revolutionizing the way businesses
                        interact with their customers. These intelligent digital
                        assistants are designed to provide instant,
                        round-the-clock support, answering queries and resolving
                        issues with efficiency and accuracy. By leveraging
                        natural language processing and machine learning,
                      </p>
                      <ul className="icon-list mt-20 mb-40">
                        <li>
                          <i className="fal fa-check" /> Get AI Power Chat Files
                        </li>
                        <li>
                          <i className="fal fa-check" /> Connect Securely
                        </li>
                        <li>
                          <i className="fal fa-check" /> Message Experience
                        </li>
                      </ul>
                      <a href="#" className="theme-btn style-two">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="image">
                      <img src="assets/images/tabs/tab1.png" alt="Tab" />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabOne4">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-6">
                    <div className="image">
                      <img src="assets/images/tabs/tab1.png" alt="Tab" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content rmt-55">
                      <div className="section-title mb-30">
                        <h2>
                          Dedicated Customer Support Your Satisfaction Our
                          Priority
                        </h2>
                      </div>
                      <p>
                        AI chatbots are revolutionizing the way businesses
                        interact with their customers. These intelligent digital
                        assistants are designed to provide instant,
                        round-the-clock support, answering queries and resolving
                        issues with efficiency and accuracy. By leveraging
                        natural language processing and machine learning,
                      </p>
                      <ul className="icon-list mt-20 mb-40">
                        <li>
                          <i className="fal fa-check" /> Get AI Power Chat Files
                        </li>
                        <li>
                          <i className="fal fa-check" /> Connect Securely
                        </li>
                        <li>
                          <i className="fal fa-check" /> Message Experience
                        </li>
                      </ul>
                      <a href="#" className="theme-btn style-two">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Tab Area End */}
      {/* Services Area Start */}
      <section
        id="services"
        className="service-area-nine bgc-black pt-130 rpt-100 pb-100 rpb-70"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <div
                className="section-title text-center text-white mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>
                  Unlocking the Power of Chatbot Capabilities Enhancing Customer
                  Engagement
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="iconic-box style-three"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img src="assets/images/icons/iconic-box1.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Automate response</Link>
                  </h5>
                  <p>
                    The intelligent digital stants are designed provid instant
                    round-the-clock support
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-three-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="iconic-box style-three"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img src="assets/images/icons/iconic-box2.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Artificial intelligence</Link>
                  </h5>
                  <p>
                    The intelligent digital stants are designed provid instant
                    round-the-clock support
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-three-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="iconic-box style-three"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img src="assets/images/icons/iconic-box3.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Mobile &amp; Web Chat</Link>
                  </h5>
                  <p>
                    The intelligent digital stants are designed provid instant
                    round-the-clock support
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-three-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="iconic-box style-three"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <img src="assets/images/icons/iconic-box4.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Sales &amp; Marketing</Link>
                  </h5>
                  <p>
                    The intelligent digital stants are designed provid instant
                    round-the-clock support
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-three-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area End */}
      {/* About Area Start */}
      <section
        id="about"
        className="about-area-nine bgc-black pb-110 rpb-80 rel z-1"
      >
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-content-nine text-white rmb-35"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Discover Comprehensive Chatbot Features for Customer
                    Engagement
                  </h2>
                </div>
                <p>
                  Chatbots offer a diverse range of features designed to enhance
                  user interactions and streamline customer support.
                </p>
                <div className="feature-icon-box mt-35">
                  <div className="icon">
                    <i className="far fa-check" />
                  </div>
                  <div className="content">
                    <h5>Onboarding, conversion &amp; messages.</h5>
                    <p>
                      Tasks, such as answering frequently asked questions or
                      processing routine transactions
                    </p>
                  </div>
                </div>
                <div className="feature-icon-box">
                  <div className="icon">
                    <i className="far fa-check" />
                  </div>
                  <div className="content">
                    <h5>Send messages to targeted audiences</h5>
                    <p>
                      Tasks, such as answering frequently asked questions or
                      processing routine transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-nine-right-images mb-20 text-lg-end"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about-nine.png" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area End */}
      {/* Feature Image box Area Start */}
      <section
        id="features"
        className="feature-image-box-area pt-130 rpt-100 pb-100 rpb-70"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-11">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>
                  Unlocking the Potential Chatbot for Seamless Customer
                  Interactions
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/fancy-box/feature-image-box1.png"
                  alt="Feature"
                />
                <div className="content">
                  <h4>
                    <Link href="service-details">
                      Comprehensive Chatbot Features Revolutionizing Customer
                      Engagement
                    </Link>
                  </h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fal fa-check" /> Get AI Power Chat Files
                    </li>
                    <li>
                      <i className="fal fa-check" /> Message Experience
                    </li>
                    <li>
                      <i className="fal fa-check" /> Connect Securely
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box style-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/fancy-box/feature-image-box2.png"
                  alt="Feature"
                />
                <div className="content">
                  <h4>
                    <Link href="service-details">
                      Mastering Chatbot Feature Elevate Customer Service &amp;
                      Efficiency
                    </Link>
                  </h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fal fa-check" /> Get AI Power Chat Files
                    </li>
                    <li>
                      <i className="fal fa-check" /> Message Experience
                    </li>
                    <li>
                      <i className="fal fa-check" /> Connect Securely
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box style-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/fancy-box/feature-image-box3.png"
                  alt="Feature"
                />
                <div className="content">
                  <h4>
                    <Link href="service-details">
                      Chatbot Features: Your Guide to Enhanced User Engagement
                    </Link>
                  </h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fal fa-check" /> Get AI Power Chat Files
                    </li>
                    <li>
                      <i className="fal fa-check" /> Message Experience
                    </li>
                    <li>
                      <i className="fal fa-check" /> Connect Securely
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Image box Area End */}
      {/* Tooltip Area Start */}
      <section
        className="tooltip-area bgs-cover rel pt-130 rpt-100"
        style={{
          backgroundImage: "url(assets/images/backgrounds/tolltip.png)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-9 col-lg-11 mb-135 rmb-80 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-35">
                <h2>
                  Connect Your Social Network and grow your social networking
                  easily
                </h2>
                <p>
                  AI chatbots are revolutionizing the way businesses interact
                  with their customers. These intelligent digital assistants are
                  designed to provide instant, round-the-clock support,
                  answering queries and resolving
                </p>
              </div>
              <Link href="contact" className="theme-btn">
                Get Started Now <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="tooltips-wrap">
            <div className="tooltip-item active">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon1.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/tooltips/tooltip1.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon2.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/tooltips/tooltip2.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon3.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/tooltips/tooltip3.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon4.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/tooltips/tooltip4.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon5.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/tooltips/tooltip5.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon6.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/tooltips/tooltip6.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon7.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="image">
                  <img
                    src="assets/images/tooltips/tooltip7.png"
                    alt="Tooltip"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tooltip Area End */}
      {/* Pricing Area Start */}
      <section
        id="pricing"
        className="pricing-area bg-white pt-220 rpt-150 pb-100 rpb-70 rel"
      >
        <div className="container">
          <Tab.Container defaultActiveKey="monthly">
            <div className="row justify-content-center justify-content-md-start">
              <div className="col-xl-4 col-md-8 col-sm-10">
                <div
                  className="price-left-tab mt-75 mb-55"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-45">
                    <h2>Explore Our Pricing Package &amp; choose plan</h2>
                  </div>
                  <Nav
                    as={"ul"}
                    className="nav pricing-tab mb-35"
                    role="tablist"
                  >
                    <Nav.Item as={"li"}>
                      <Nav.Link as={"button"} eventKey="monthly">
                        Monthly
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link as={"button"} eventKey="yearly">
                        Yearly
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <p>
                    AI chatbots are revolutionizing the way businesses interact
                    with their customers These intelligent digital assistants
                  </p>
                  <Link href="contact" className="theme-btn mt-25">
                    Get Started <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8">
                <Tab.Content className="tab-content">
                  <Tab.Pane className="tab-pane fade" eventKey="monthly">
                    <div className="row justify-content-center">
                      <div
                        className="col-md-6 col-sm-10"
                        data-aos="fade-up"
                        data-aos-delay={100}
                        data-aos-duration={1500}
                        data-aos-offset={50}
                      >
                        <div className="pricing-item style-three">
                          <div className="circle">
                            <img
                              src="assets/images/shapes/price-circle.png"
                              alt="Shape"
                            />
                          </div>
                          <div className="price">
                            <span className="prev">$</span>19
                            <span className="next">/month</span>
                          </div>
                          <div className="text">
                            Smart Pricing for good services
                          </div>
                          <a href="#" className="theme-btn">
                            Choose Package <i className="far fa-arrow-right" />
                          </a>
                          <h4 className="title">Regular Plan</h4>
                          <ul className="list">
                            <li>Email marketing</li>
                            <li>Unlimited chat history</li>
                            <li>Unlimited landing pages</li>
                            <li className="hide">Automation templates</li>
                            <li className="hide">Great Customer Support</li>
                            <li className="hide">Unlimited lead funnels</li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-sm-10"
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration={1500}
                        data-aos-offset={50}
                      >
                        <div className="pricing-item style-three">
                          <div className="circle">
                            <img
                              src="assets/images/shapes/price-circle.png"
                              alt="Shape"
                            />
                          </div>
                          <div className="price">
                            <span className="prev">$</span>39
                            <span className="next">/month</span>
                          </div>
                          <div className="text">
                            Smart Pricing for good services
                          </div>
                          <a href="#" className="theme-btn">
                            Choose Package <i className="far fa-arrow-right" />
                          </a>
                          <h4 className="title">Standard Plan</h4>
                          <ul className="list">
                            <li>Email marketing</li>
                            <li>Unlimited chat history</li>
                            <li>Unlimited landing pages</li>
                            <li>Automation templates</li>
                            <li>Great Customer Support</li>
                            <li>Unlimited lead funnels</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade" eventKey="yearly">
                    <div className="row justify-content-center">
                      <div className="col-md-6 col-sm-10">
                        <div className="pricing-item style-three">
                          <div className="circle">
                            <img
                              src="assets/images/shapes/price-circle.png"
                              alt="Shape"
                            />
                          </div>
                          <div className="price">
                            <span className="prev">$</span>79
                            <span className="next">/yearly</span>
                          </div>
                          <div className="text">
                            Smart Pricing for good services
                          </div>
                          <a href="#" className="theme-btn">
                            Choose Package <i className="far fa-arrow-right" />
                          </a>
                          <h4 className="title">Regular Plan</h4>
                          <ul className="list">
                            <li>Email marketing</li>
                            <li>Unlimited chat history</li>
                            <li>Unlimited landing pages</li>
                            <li className="hide">Automation templates</li>
                            <li className="hide">Great Customer Support</li>
                            <li className="hide">Unlimited lead funnels</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-10">
                        <div className="pricing-item style-three">
                          <div className="circle">
                            <img
                              src="assets/images/shapes/price-circle.png"
                              alt="Shape"
                            />
                          </div>
                          <div className="price">
                            <span className="prev">$</span>99
                            <span className="next">/yearly</span>
                          </div>
                          <div className="text">
                            Smart Pricing for good services
                          </div>
                          <a href="#" className="theme-btn">
                            Choose Package <i className="far fa-arrow-right" />
                          </a>
                          <h4 className="title">Standard Plan</h4>
                          <ul className="list">
                            <li>Email marketing</li>
                            <li>Unlimited chat history</li>
                            <li>Unlimited landing pages</li>
                            <li>Automation templates</li>
                            <li>Great Customer Support</li>
                            <li>Unlimited lead funnels</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>
      {/* Pricing Area End */}
      {/* Testimonials Area Start */}
      <section
        id="testimonials"
        className="testimonials-nine-area py-130 rpy-100 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>1523+ Global Clients Say About Our Software</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderProps.testiSliderThree}
            className="testi-slider-three"
            data-aos="fade-in"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div>
              <div className="testimonial-item-two">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author1.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Dennis J. Lester</h6>
                    <span>CEO &amp; Founder</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
                <div className="line" />
                <div className="author-text">
                  Alignment refers to the practice of arranging visual elements
                  on pages such as text, shapes, images, menu items, and CTA
                  buttons foundation upon which designers gather
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-item-two">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author2.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Rene A. Watkins</h6>
                    <span>Web Designer</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
                <div className="line" />
                <div className="author-text">
                  Alignment refers to the practice of arranging visual elements
                  on pages such as text, shapes, images, menu items, and CTA
                  buttons foundation upon which designers gather
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-item-two">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author1.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Dennis J. Lester</h6>
                    <span>CEO &amp; Founder</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
                <div className="line" />
                <div className="author-text">
                  Alignment refers to the practice of arranging visual elements
                  on pages such as text, shapes, images, menu items, and CTA
                  buttons foundation upon which designers gather
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-item-two">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-author2.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h6>Rene A. Watkins</h6>
                    <span>Web Designer</span>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
                <div className="line" />
                <div className="author-text">
                  Alignment refers to the practice of arranging visual elements
                  on pages such as text, shapes, images, menu items, and CTA
                  buttons foundation upon which designers gather
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="testimonial-nine-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/testimonial-left.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/testimonial-right.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* CTA Area Start */}
      <section
        className="cta-nine-area py-130 rpy-100"
        style={{
          backgroundImage: "url(assets/images/backgrounds/bg-lines.png)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-8 col-md-10 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-40">
                <span className="subtitle-three mb-10">Get Started Us</span>
                <h2>Get Ready to Grow your social networking?</h2>
              </div>
              <Link href="contact" className="theme-btn style-two">
                Contact Us <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area End */}
    </AkpagerLayout>
  );
};
export default page;
