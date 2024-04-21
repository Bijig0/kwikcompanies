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
      {/* Solutions Area End */}
      <section className="solutions-area pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div className="text-center section-title mb-60">
                <h2>Discover Company Solutions Tailored to Your Needs</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste sit voluptatem accusantium
                  doloremque laudantium rem aperiam eaqups quae ab illo
                  inventore veritatis et quasi architecto{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div className="fancy-box">
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box1.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <div className="icon-title">
                    <i className="flaticon-meeting" />
                    <h5>
                      <Link legacyBehavior href="service-details">
                        Business Consulting
                      </Link>
                    </h5>
                  </div>
                  <div className="inner-content">
                    <p>
                      Assisting clients with financial planning, budgeting,
                      investment strategies
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/fancy-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div className="fancy-box">
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box2.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <div className="icon-title">
                    <i className="flaticon-financial-advisor" />
                    <h5>
                      <Link legacyBehavior href="service-details">
                        Financial Advisory
                      </Link>
                    </h5>
                  </div>
                  <div className="inner-content" style={{ display: "none" }}>
                    <p>
                      Assisting clients with financial planning, budgeting,
                      investment strategies
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/fancy-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div className="fancy-box">
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box3.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <div className="icon-title">
                    <i className="flaticon-meeting" />
                    <h5>
                      <Link legacyBehavior href="service-details">
                        Marketing &amp; Branding
                      </Link>
                    </h5>
                  </div>
                  <div className="inner-content" style={{ display: "none" }}>
                    <p>
                      Assisting clients with financial planning, budgeting,
                      investment strategies
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/fancy-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div className="fancy-box">
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box4.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <div className="icon-title">
                    <i className="flaticon-brand-identity" />
                    <h5>
                      <Link legacyBehavior href="service-details">
                        Marketing &amp; Branding
                      </Link>
                    </h5>
                  </div>
                  <div className="inner-content" style={{ display: "none" }}>
                    <p>
                      Assisting clients with financial planning, budgeting,
                      investment strategies
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/fancy-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div className="fancy-box">
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box5.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <div className="icon-title">
                    <i className="flaticon-technology" />
                    <h5>
                      <Link legacyBehavior href="service-details">
                        IT and Technology
                      </Link>
                    </h5>
                  </div>
                  <div className="inner-content" style={{ display: "none" }}>
                    <p>
                      Assisting clients with financial planning, budgeting,
                      investment strategies
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/fancy-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div className="fancy-box">
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box6.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <div className="icon-title">
                    <i className="flaticon-talent-search" />
                    <h5>
                      <Link legacyBehavior href="service-details">
                        Human Resources
                      </Link>
                    </h5>
                  </div>
                  <div className="inner-content" style={{ display: "none" }}>
                    <p>
                      Assisting clients with financial planning, budgeting,
                      investment strategies
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/fancy-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions Area End */}
      {/* CTA Area Start */}
      <section
        className="cta-area bgs-cover py-130 rpy-100"
        style={{ backgroundImage: "url(assets/images/backgrounds/cta.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-8">
              <div className="text-white cta-content rmb-35">
                <div className="mb-40 section-title">
                  <span className="mb-10 subtitle d-block">
                    Website Builder
                  </span>
                  <h2>Ready Work Together to Create Website?</h2>
                </div>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Contact Us <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cta-btn text-lg-center text-start ps-lg-0 ps-2">
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area End */}
      {/* Recent Projects Area End */}
      <section className="project-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="text-center section-title mb-60">
                <h2>Explore Our Recent Case Studies &amp; Projects</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste sit voluptatem accusantium
                  doloremque laudantium rem aperiam eaqups quae ab illo
                  inventore veritatis et quasi architecto{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-box style-two">
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box-two1.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Business Consulting
                  </a>
                  <h6>
                    <Link legacyBehavior href="service-details">
                      How We Transformed Client's Operations
                    </Link>
                  </h6>
                  <div
                    className="inner-content"
                    style={{
                      display: "block",
                      overflow: "hidden",
                      height: "0.0041635px",
                      paddingTop: 0,
                      marginTop: 0,
                      paddingBottom: 0,
                      marginBottom: 0,
                    }}
                  >
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/fancy-box-two-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-box style-two">
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box-two2.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Financeal
                  </a>
                  <h6>
                    <Link legacyBehavior href="service-details">
                      Journey with Our Service Financial Story
                    </Link>
                  </h6>
                  <div className="inner-content">
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/fancy-box-two-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-box style-two">
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box-two3.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Research
                  </a>
                  <h6>
                    <Link legacyBehavior href="service-details">
                      Innovative Solutions in Action User Research
                    </Link>
                  </h6>
                  <div className="inner-content">
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/fancy-box-two-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="fancy-box style-two">
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box-two4.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Development
                  </a>
                  <h6>
                    <Link legacyBehavior href="service-details">
                      Proven Results Client’s with Our Solutions
                    </Link>
                  </h6>
                  <div className="inner-content">
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/fancy-box-two-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Projects Area End */}
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
      {/* Blog Area Start */}
      <section className="blog-area pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="text-center section-title mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Get Every Single Updates and Learn Our News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog4.png" alt="Blog" />
                  <div className="date">
                    <b>25</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Business
                  </a>
                  <h5>
                    <Link legacyBehavior href="blog-details">
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
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog5.png" alt="Blog" />
                  <div className="date">
                    <b>28</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Finance
                  </a>
                  <h5>
                    <Link legacyBehavior href="blog-details">
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
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog6.png" alt="Blog" />
                  <div className="date">
                    <b>30</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Research
                  </a>
                  <h5>
                    <Link legacyBehavior href="blog-details">
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
