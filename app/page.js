import Counter from "@/components/Counter";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import dynamic from "next/dynamic";
import Link from "next/link";
const TestimonialSlider = dynamic(
  () => import("@/components/TestimonialSlider"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <AkpagerLayout>
      {/* Hero area start */}
      <section
        className="hero-area bgs-cover py-250 rpy-150 overlay"
        style={{ backgroundImage: "url(assets/images/hero/hero-one.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10 col-md-11">
              <div className="hero-content text-center text-white">
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
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Everything you need to start and run your business grow
                </h1>
                <div
                  className="hero-btns"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <Link href="/about" legacyBehavior>
                    <a className="theme-btn">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <Link href="/services" legacyBehavior>
                    <a className="theme-btn style-two">
                      Our Services <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
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
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="iconic-box">
                  <div className="icon">
                    <i className="flaticon-customer-service-1" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Best Quality Services
                      </Link>
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
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
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="iconic-box">
                  <div className="icon">
                    <i className="flaticon-idea" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Innovation Ideas
                      </Link>
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
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
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="iconic-box">
                  <div className="icon">
                    <i className="flaticon-earning" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Business Growth
                      </Link>
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem
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
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <blockquote
                className="blockquote-one text-white"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
              <div
                className="about-images my-40"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about.jpg" alt="About" />
                <div className="about-over">
                  <img src="assets/images/about/about2.png" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content mt-40 rmt-15"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Discover Our Company's Vision and Commitment to Excellence
                  </h2>
                </div>
                <p>
                  Business consulting is a dynamic and multifaceted field that
                  plays a pivotal role in helping organizations thrive in
                  today's competitive landscape. These consulting services are
                  sought after by businesses of all sizes
                </p>
                <div className="row pt-30">
                  <div className="col-sm-6">
                    <div className="counter-item counter-text-wrap counted">
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop={95}
                      >
                        95
                      </span>
                      <h5 className="counter-title">Strategy Consulting</h5>
                      <div className="text">
                        Strategy consultants work closely organizations define
                        their
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item counter-text-wrap counted">
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop={85}
                      >
                        85
                      </span>
                      <h5 className="counter-title">Financial Consulting</h5>
                      <div className="text">
                        Financial consultants provides the financial planning,
                        budgeting
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
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
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
              <div
                className="fancy-box"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
              <div
                className="fancy-box"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
              <div
                className="fancy-box"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
              <div
                className="fancy-box"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
              <div
                className="fancy-box"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
              <div
                className="fancy-box"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
              <div
                className="cta-content text-white rmb-35"
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  <span className="subtitle d-block mb-10">
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
              <div
                className="cta-btn text-lg-center text-start ps-lg-0 ps-2"
                data-aos="zoom-in-right"
                data-aos-duration={1000}
              >
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
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
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
              <div
                className="fancy-box style-two"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
              <div
                className="fancy-box style-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
              <div
                className="fancy-box style-two"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
              <div
                className="fancy-box style-two"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
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
                <div
                  className="counter-timeline-item counter-text-wrap"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
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
                <div
                  className="counter-timeline-item counter-text-wrap"
                  data-aos="fade-down"
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
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
                <div
                  className="counter-timeline-item counter-text-wrap"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
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
              <div
                className="management-content text-white mt-40"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Take Effect Control of Business Management</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium totamto aperiame eaque
                </p>
                <div className="row gap-50 pt-25">
                  <div className="col-md-6">
                    <div className="iconic-box style-nine text-white">
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
                    <div className="iconic-box style-nine text-white">
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
                className="management-images my-40"
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
                className="section-title text-center mb-60"
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
                className="section-title text-center mb-60"
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
          className="section-title text-center mb-60"
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
