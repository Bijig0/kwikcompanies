"use client";
import Counter from "@components/Counter";
import TestimonialSlider2 from "@components/TestimonialSlider2";
import AkpagerLayout from "@layouts/AkpagerLayout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";

const Page = () => {
  return (
    <AkpagerLayout footer={2} header={2} bodyClass={"home-two"}>
      {/* Hero area start */}
      <section
        className="hero-area-two bgp-bottom bgc-black py-140 rpt-95 rpb-100"
        style={{ backgroundImage: "url(assets/images/hero/hero-two.png)" }}
      >
        <div className="container">
          <div className="row gap-150 justify-content-center">
            <div className="col-lg-6">
              <div
                className="hero-content style-two text-white rmb-65"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>
                  Generate The Best Leads With Our <span>Akpager</span>
                </h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totame
                </p>
                <hr />
                <div className="clients-reviews">
                  <div className="clients">
                    <h6>Happy Customer</h6>
                    <div className="images">
                      <img src="assets/images/hero/client1.png" alt="Client" />
                      <img src="assets/images/hero/client2.png" alt="Client" />
                      <img src="assets/images/hero/client3.png" alt="Client" />
                      <img src="assets/images/hero/client4.png" alt="Client" />
                    </div>
                  </div>
                  <div className="reviews">
                    <h6>4.7/5 on TrustPilot</h6>
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 rel z-1">
              <div className="hero-form-bg">
                <img src="assets/images/hero/form-bg.png" alt="Hero Form" />
              </div>
              <div
                className="hero-form"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h4>Sign Up Now</h4>
                <p>Ready to Register Our Landsio Services</p>
                <form action="#" name="contactForm" method="post">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      defaultValue=""
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      defaultValue=""
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      className="form-control"
                      defaultValue=""
                      placeholder="Phone Number"
                      required=""
                    />
                  </div>
                  <div className="form-group input-radio">
                    <input
                      type="radio"
                      id="terms"
                      name="terms"
                      defaultValue="terms"
                      required=""
                    />
                    <label htmlFor="terms">
                      I’ve Read and agreed to{" "}
                      <a href="#">Terms &amp; Conditions</a>
                    </label>
                  </div>
                  <div className="form-group mb-0">
                    <button type="submit" className="theme-btn">
                      Register <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero area End */}
      {/* Services Two Area Start */}
      <section className="services-two-area pt-120 rpt-100 pb-90 rpb-70 rel z-2">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div
              className="col-xl-8"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-40">
                <h2>
                  We Offer a Wide Range Of Services Designed to Optimize Your
                  Business and Achieve Your <span>Goals</span>
                </h2>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
                abillo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabos
              </p>
            </div>
          </div>
          <div className="row pt-45">
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four">
                <div className="icon">
                  <i className="far fa-rocket-launch" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Fast Performance</Link>
                  </h5>
                  <p>Will give complete account see system expound actual</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four color-two">
                <div className="icon">
                  <i className="far fa-box" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Multistep Forms</Link>
                  </h5>
                  <p>The system expound the actual teachings great explorer</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four color-three">
                <div className="icon">
                  <i className="fas fa-bullseye-pointer" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Effective Target</Link>
                  </h5>
                  <p>
                    To take a trivial example which ever undertakes physical
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-four color-four">
                <div className="icon">
                  <i className="far fa-tools" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Easy Customizable</Link>
                  </h5>
                  <p>Exercise except to obtain was advantage from has</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Two Area End */}
      {/* Counter Two Area Start */}
      <section className="counter-two-area">
        <div className="container container-1070">
          <div
            className="counter-two-wrap bgs-cover"
            style={{
              backgroundImage: "url(assets/images/backgrounds/counter.png)",
            }}
          >
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div
                  className="counter-item style-five counter-text-wrap"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={1253}
                  >
                    <Counter end={1253} />
                  </span>
                  <h5 className="counter-title">Satisficed Clients</h5>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="counter-item style-five counter-text-wrap"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
                  <span
                    className="count-text k-plus"
                    data-speed={3000}
                    data-stop={85}
                  >
                    <Counter end={85} />
                  </span>
                  <h5 className="counter-title">Project Complete</h5>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="counter-item style-five counter-text-wrap"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
                  <span
                    className="count-text m-plus"
                    data-speed={3000}
                    data-stop={3}
                  >
                    <Counter end={3} />
                  </span>
                  <h5 className="counter-title">Active Users</h5>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="counter-item style-five counter-text-wrap"
                  data-aos="fade-up"
                  data-aos-delay={600}
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
                  <span
                    className="count-text percent"
                    data-speed={3000}
                    data-stop={93}
                  >
                    <Counter end={93} />
                  </span>
                  <h5 className="counter-title">Positive Reviews</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter Two Area End */}
      {/* Customer Data Area Start */}
      <section className="customer-data-area py-120 rpy-100">
        <div className="container">
          <div className="row gap-135 align-items-center">
            <div className="col-xl-6">
              <div
                className="customer-data-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  <h2>
                    Smart Way To Provide Best Customer <span>Data</span>
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium totames aperiam eaque quae
                  abillo inventore quasi architecto beatae vitae dicta sunt
                  explicabos
                </p>
                <ul className="icon-list style-two mt-35">
                  <li>
                    <i className="fal fa-check" /> Connect with leads with zero
                    hassle.
                  </li>
                  <li>
                    <i className="fal fa-check" /> Take quick payments direct
                    from meetings
                  </li>
                  <li>
                    <i className="fal fa-check" /> Start finding leads that get
                    coverts quickly
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="customer-data-images"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/about/customer-data.png"
                  alt="Customer Data"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Customer DataArea End */}
      {/* Tab Area Start */}
      <section
        className="tab-area bgc-lighter pt-120 rpt-100 pb-85 bgs-cover"
        style={{ backgroundImage: "url(assets/images/backgrounds/tab.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div
              className="col-xl-7 col-lg-9 col-md-11"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-35">
                <h2>
                  We’re The Easy and Effective Unified <span>Platform</span>
                </h2>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabos
              </p>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"tabThree1"}>
            <Nav
              as={"ul"}
              className="nav advanced-tab style-three mt-45 mb-20"
              role="tablist"
            >
              <Nav.Item
                as={"li"}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                <Nav.Link as={"button"} eventKey="tabThree1">
                  <span className="icon">
                    <i className="far fa-alarm-clock" />
                  </span>
                  <span>Get real-time insights</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                as={"li"}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                <Nav.Link as={"button"} eventKey="tabThree2">
                  <span className="icon">
                    <i className="far fa-sack-dollar" />
                  </span>
                  <span>Reach high-value</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                as={"li"}
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                <Nav.Link as={"button"} eventKey="tabThree3">
                  <span className="icon">
                    <i className="far fa-bullhorn" />
                  </span>
                  <span>Marketing innovation</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="tab-content">
              <Tab.Pane className="tab-pane fade" eventKey="tabThree1">
                <div className="row align-items-center justify-content-around">
                  <div className="col-xl-4 col-lg-5">
                    <div
                      className="content my-15 rmb-55"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="section-title mb-20">
                        <h3>
                          Best Real-time Insights For Grow your Lead Capture
                        </h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        doloremque laudantium totames aperiam eaque quaesy
                        inventore architecto beatae vitae dicta
                      </p>
                      <ul className="icon-list style-two mt-25 mb-45">
                        <li>
                          <i className="fal fa-check" /> Real-time insights for
                          generate
                        </li>
                        <li>
                          <i className="fal fa-check" /> Take quick payments
                          direct from meetings
                        </li>
                      </ul>
                      <a href="#" className="theme-btn">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div
                      className="tab-image"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <img src="assets/images/tabs/tab-three.png" alt="Tab" />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabThree2">
                <div className="row align-items-center justify-content-around">
                  <div className="col-lg-7 rmt-15">
                    <div
                      className="tab-image"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <img src="assets/images/tabs/tab-three.png" alt="Tab" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5">
                    <div
                      className="content my-15 rmt-35"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="section-title mb-20">
                        <h3>
                          Best Real-time Insights For Grow your Lead Capture
                        </h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        doloremque laudantium totames aperiam eaque quaesy
                        inventore architecto beatae vitae dicta
                      </p>
                      <ul className="icon-list style-two mt-25 mb-45">
                        <li>
                          <i className="fal fa-check" /> Real-time insights for
                          generate
                        </li>
                        <li>
                          <i className="fal fa-check" /> Take quick payments
                          direct from meetings
                        </li>
                      </ul>
                      <a href="#" className="theme-btn">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabThree3">
                <div className="row align-items-center justify-content-around">
                  <div className="col-xl-4 col-lg-5">
                    <div
                      className="content my-15 rmb-55"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="section-title mb-20">
                        <h3>
                          Best Real-time Insights For Grow your Lead Capture
                        </h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        doloremque laudantium totames aperiam eaque quaesy
                        inventore architecto beatae vitae dicta
                      </p>
                      <ul className="icon-list style-two mt-25 mb-45">
                        <li>
                          <i className="fal fa-check" /> Real-time insights for
                          generate
                        </li>
                        <li>
                          <i className="fal fa-check" /> Take quick payments
                          direct from meetings
                        </li>
                      </ul>
                      <a href="#" className="theme-btn">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div
                      className="tab-image"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <img src="assets/images/tabs/tab-three.png" alt="Tab" />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Tab Area End */}
      {/* Lead Monitoring Area Start */}
      <section className="lead-monitoring-area pt-120 rpt-100">
        <div className="container">
          <div className="row gap-135 align-items-center">
            <div className="col-xl-6">
              <div
                className="lead-monitoring-images rpb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/about/lead-monitoring.png"
                  alt="Lead Monitoring"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="lead-monitoring-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  <h2>
                    High-converting Real time lead <span>Monitoring</span>
                  </h2>
                </div>
                <p>
                  But I must explain to you how all this mistaken idea
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system expound the actual
                  teachings
                </p>
                <div className="row pt-25">
                  <div className="col-sm-6">
                    <div className="iconic-box style-nine">
                      <div className="icon">
                        <i className="far fa-shield-check" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="service-details">Height-Security</Link>
                        </h5>
                        <p>
                          Mistaken denouncing pleasure praising born will give
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="iconic-box style-nine color-five">
                      <div className="icon">
                        <i className="far fa-cog" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="service-details">Easy Customize</Link>
                        </h5>
                        <p>
                          At vero eos et accus amusesy praesen deleniti
                          corruptie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Lead Monitoring Area End */}
      {/* Pricing Area Start */}
      <section className="pricing-area pt-80 rpt-60 pb-90 rpb-70 rel z-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>
                  Explore Our Pricing Package and choose your <span>plan</span>
                </h2>
                <p>
                  We Provide Best Pricing package to grow your lead capture
                  development
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="pricing-item"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
                <div className="text">Smart Pricing for good services</div>
                <h4 className="title">Regular Plan</h4>
                <ul className="list">
                  <li>Email marketing</li>
                  <li>Unlimited chat history</li>
                  <li>Unlimited landing pages</li>
                  <li>Automation templates</li>
                  <li>Great Customer Support</li>
                  <li>Unlimited lead funnels</li>
                </ul>
                <a href="#" className="theme-btn">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="pricing-item bgc-primary text-white"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
                <div className="text">Smart Pricing for good services</div>
                <h4 className="title">Standard Plan</h4>
                <ul className="list">
                  <li>Email marketing</li>
                  <li>Unlimited chat history</li>
                  <li>Unlimited landing pages</li>
                  <li>Automation templates</li>
                  <li>Great Customer Support</li>
                  <li>Unlimited lead funnels</li>
                </ul>
                <a href="#" className="theme-btn">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="pricing-item bgc-yellow"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="circle">
                  <img
                    src="assets/images/shapes/price-circle.png"
                    alt="Shape"
                  />
                </div>
                <div className="price">
                  <span className="prev">$</span>93
                  <span className="next">/month</span>
                </div>
                <div className="text">Smart Pricing for good services</div>
                <h4 className="title">Premium Plan</h4>
                <ul className="list">
                  <li>Email marketing</li>
                  <li>Unlimited chat history</li>
                  <li>Unlimited landing pages</li>
                  <li>Automation templates</li>
                  <li>Great Customer Support</li>
                  <li>Unlimited lead funnels</li>
                </ul>
                <a href="#" className="theme-btn style-two">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Area End */}
      {/* Testimonials Area Start */}
      <section className="testimonials-area pb-120 rpb-100 rel z-1">
        <div
          className="testimonials-bg bgc-black"
          style={{
            backgroundImage: "url(assets/images/backgrounds/box-shape.png)",
          }}
        />
        <TestimonialSlider2 />
      </section>
      {/* Testimonials Area End */}
      {/* Blog Area Start */}
      <section className="blog-area-two pt-120 rpt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>
                  Get Every Single Updates and Learn Our News &amp;{" "}
                  <span>Blog</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog1.png" alt="Blog" />
                  <div className="date">
                    <b>25</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Lead Capture
                  </a>
                  <h5>
                    <Link href="blog-details">
                      Meet Success the Cale Smashing Book By Addy Osmania
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user-circle" />{" "}
                      <a href="#">Roger J. Spaulding</a>
                    </li>
                    <li>
                      <i className="far fa-comment-lines" />{" "}
                      <a href="#">Comments(5)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog2.png" alt="Blog" />
                  <div className="date">
                    <b>28</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Lead Capture
                  </a>
                  <h5>
                    <Link href="blog-details">
                      Practical Design Tips Guidelines For Beginner Designers
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user-circle" />{" "}
                      <a href="#">Roger J. Spaulding</a>
                    </li>
                    <li>
                      <i className="far fa-comment-lines" />{" "}
                      <a href="#">Comments(5)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog3.png" alt="Blog" />
                  <div className="date">
                    <b>30</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Lead Capture
                  </a>
                  <h5>
                    <Link href="blog-details">
                      Meet Success the Cale Smashing Book By Addy Osmania
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user-circle" />{" "}
                      <a href="#">Roger J. Spaulding</a>
                    </li>
                    <li>
                      <i className="far fa-comment-lines" />{" "}
                      <a href="#">Comments(5)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area End */}
      {/* Client Logos Area Start */}
      <section
        className="client-logo-area-two pt-90 rpt-70 pb-80 rpb-60 bgp-center"
        style={{
          backgroundImage: "url(assets/images/backgrounds/client-logo.png)",
        }}
      >
        <div
          className="section-title text-center mb-30"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4>
            I’ve <span>1253</span>+ Global Clients &amp; lot’s of Project
            Complete
          </h4>
        </div>
        <div className="container">
          <div className="row justify-content-center row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
            <div className="col">
              <div
                className="client-logo-item style-three"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two1.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-three"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two2.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-three"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two3.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-three"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two4.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-three"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two9.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-three"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two5.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-three"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two10.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-three"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two7.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-three"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two6.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="client-logo-item style-three"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two8.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client Logos Area End */}
    </AkpagerLayout>
  );
};
export default Page;
