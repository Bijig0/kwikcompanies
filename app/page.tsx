import Counter from "@components/Counter";
import AkpagerLayout from "@layouts/AkpagerLayout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaCrown } from "react-icons/fa6";

const TestimonialSlider = dynamic(
  () => import("@components/TestimonialSlider"),
  {
    ssr: false,
  }
);

const Crown = () => {
  return (
    <div className="flex flex-col items-center">
      <FaCrown size={60} />
      <span className="p-0 m-0 font-thin">Verified ASIC Agent</span>
      <p>33614</p>
    </div>
  );
};

const Index = () => {
  return (
    <AkpagerLayout>
      {/* Hero area start */}
      <section
        className="py-52 hero-area bgs-cover pb-250 rpy-150 overlay"
        style={{ backgroundImage: "url(assets/images/hero/hero-one.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10 col-md-11">
              <div className="text-center text-white px-11 hero-content">
                {/* <div className="flex justify-center gap-24">
                  <Crown />
                  <Crown />
                  <Crown />
                </div> */}
                <span className="mb-20 subtitle-one">
                  <i className="fas fa-rocket-launch" /> ATO Authorized Agency
                </span>
                <h1>Register an ABN in under 15 minutes for just $49</h1>
                <div className="hero-btns">
                  <Link href="/about" legacyBehavior>
                    <a className="theme-btn">
                      Register An ABN! <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="my-3" />
                <p className="text-gray-400">
                  No hidden costs and unlimited FREE support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero area End */}
      {/* Services Area Start */}
      <section
        className="services-area bgp-bottom bgc-navyblue pb-55 rel z-2"
        style={{
          backgroundImage: "url(assets/images/backgrounds/wave-shape.png)",
        }}
      >
        <div className="container">
          <div className="services-wrap">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6">
                <div className="iconic-box">
                  <div className="mb-4 icon">
                    <img
                      src="https://abnregistration.com.au/assets/images/icons/mark-icon-1.png"
                      alt="Shape"
                      className="w-20"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Registered ASIC Agent #29963
                      </Link>
                    </h4>
                    <p>
                      We handle dealing with ASIC when registering your business
                      name
                    </p>
                    <hr />
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/iconic-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="iconic-box">
                  <div className="mb-4 icon">
                    <img
                      src="https://abnregistration.com.au/assets/images/icons/mark-icon-2.png"
                      alt="Shape"
                      className="w-20"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Registered Tax Agent #03631006
                      </Link>
                    </h4>
                    <p>
                      Authorised to handle your business registration with the
                      ATO
                    </p>
                    <hr />
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/iconic-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="iconic-box">
                  <div className="mb-4 icon">
                    <img
                      src="https://abnregistration.com.au/assets/images/icons/iso-icon.png"
                      alt="Shape"
                      className="w-20"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        ISO27001:2013 Certificate #AIT1019
                      </Link>
                    </h4>
                    <p>Certified information security management systems</p>
                    <hr />
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/iconic-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <blockquote className="text-white blockquote-one">
                <div className="text">
                  Business consulting involves the provision expert advice and
                  guidance to organizations seeking to improve their
                  performance, solve specific problems, or achieve specific
                  objectives. The primary purpose of business consultants is to
                  leverage their expertise and experience to help clients make
                  informed decisions, develop strategies, and implement
                </div>
                <div className="author">
                  <img src="assets/images/blog/blockquote.png" alt="Author" />
                  <div className="name">
                    <h5>Ricky J. Winter/</h5> <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area End */}
      {/* About Area Start */}
      <section className="about-area py-90 rpy-60">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div className="my-40 about-images">
                <img src="assets/images/about/about.jpg" alt="About" />
                <div className="about-over">
                  <img src="assets/images/about/about2.png" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-40 about-content rmt-15">
                <div className="section-title mb-30">
                  <h2>Start your dream business today</h2>
                </div>
                <p>
                  We understand the challenges of building a business: spending
                  time on your product, working with customers, and on top of
                  that, the constant pressure of business administration. We
                  hope to alleviate some of these pains through our seamless ABN
                  registration process.
                </p>
                <div className="row pt-30">
                  <div className="col-sm-6">
                    <div className="counter-item counter-text-wrap counted">
                      <span className="count-text">{">"} 15 Minutes</span>
                      <h5 className="counter-title">Registration Time</h5>
                      <div className="text">
                        Optimized registration process requiring only the
                        essentials for quick and easy registration
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item counter-text-wrap counted">
                      <span className="count-text">{">"} 30 Seconds</span>
                      <h5 className="counter-title">
                        Average Support Response Time
                      </h5>
                      <div className="text">
                        Our friendly staff are constantly on deck to help you at
                        every step
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area End */}
      {/* Counter TimeLine Area Start */}
      <div className="counter-timeline-area">
        <div className="container">
          <div className="counter-timeline-wrap">
            <div className="row no-gap justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="counter-timeline-item counter-text-wrap">
                  <div className="icon">
                    <i className="flaticon-review" />
                  </div>
                  <span className="dots">
                    <img
                      src="assets/images/shapes/counter-dots.png"
                      alt="Shape"
                    />
                  </span>
                  <div className="content">
                    <span
                      className="count-text k-plus"
                      data-speed={3000}
                      data-stop={25}
                    >
                      <Counter end={25} />
                    </span>
                    <span className="counter-title">
                      100% Satisficed Clients
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="counter-timeline-item counter-text-wrap">
                  <div className="content">
                    <span
                      className="count-text k-plus"
                      data-speed={3000}
                      data-stop={235}
                    >
                      <Counter end={235} />
                    </span>
                    <span className="counter-title">
                      Task Complete For Global Clients
                    </span>
                  </div>
                  <span className="dots">
                    <img
                      src="assets/images/shapes/counter-dots.png"
                      alt="Shape"
                    />
                  </span>
                  <div className="icon">
                    <i className="flaticon-layers-1" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="counter-timeline-item counter-text-wrap">
                  <div className="icon">
                    <i className="flaticon-online-registration" />
                  </div>
                  <span className="dots">
                    <img
                      src="assets/images/shapes/counter-dots.png"
                      alt="Shape"
                    />
                  </span>
                  <div className="content">
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={1052}
                    >
                      <Counter end={1052} />
                    </span>
                    <span className="counter-title">
                      Regular Free Registation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter TimeLine Area End */}
      {/* Management Area Start */}
      <section
        className="management-area bgp-bottom bgc-navyblue py-60"
        style={{
          backgroundImage: "url(assets/images/backgrounds/wave-shape.png)",
        }}
      >
        <div className="container">
          <div className="row gap-110 align-items-center">
            <div className="col-lg-6">
              <div className="mt-40 text-white management-content">
                <div className="section-title mb-30">
                  <h2>Take Effect Control of Business Management</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium totamto aperiame eaque
                </p>
                <div className="row gap-50 pt-25">
                  <div className="col-md-6">
                    <div className="text-white iconic-box style-nine">
                      <div className="icon">
                        <i className="fal fa-laptop-code" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="service-details">
                            Mobile Friendly
                          </Link>
                        </h5>
                        <p>
                          Mistaken denouncing pleasure praising born will give
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-white iconic-box style-nine">
                      <div className="icon">
                        <i className="fal fa-cog" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="service-details">
                            Powerful Prediction
                          </Link>
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
            <div className="col-lg-6">
              <div
                className="my-40 management-images"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/about/management1.png"
                  alt="Management"
                />
                <div className="management-over">
                  <img
                    src="assets/images/about/management2.png"
                    alt="Management"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Management Area End */}
      {/* Testimonials Area Start */}
      <section className="testimonials-area pt-130 rpt-100 pb-80 rpb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="text-center section-title mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>1253+ Global Clients Say About Our Business Services</h2>
              </div>
            </div>
          </div>
        </div>
        <TestimonialSlider />
      </section>
      {/* Testimonials Area End */}

      {/* Client Logos Area Start */}
      <section className="client-logo-area pb-90 rpb-65">
        <div
          className="text-center section-title mb-60"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4>I’ve 1253+ Global Clients &amp; lot’s of Project Complete</h4>
        </div>
        <div className="client-logo-wrap">
          <div
            className="client-logo-item"
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
          <div
            className="client-logo-item"
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
          <div
            className="client-logo-item"
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
          <div
            className="client-logo-item"
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
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={400}
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
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={500}
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
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={600}
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
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={700}
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
      </section>
      {/* Client Logos Area End */}
    </AkpagerLayout>
  );
};
export default Index;
