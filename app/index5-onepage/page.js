"use client";
import Counter from "@/components/Counter";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const page = () => {
  return (
    <AkpagerLayout footer={5} header={5} bodyClass={"home-five"} onePage>
      {" "}
      {/* Hero area start */}
      <section id="home" className="hero-area-five py-130 rpy-100 rel z-1">
        <div className="container">
          <div
            className="hero-content style-five text-center"
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
              <i className="fas fa-rocket-launch" /> Analytics you’ll enjoy
              using
            </span>
            <h1
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              Only Customer Communication platform you'll ever need
            </h1>
            <div
              className="row justify-content-center pt-5 rpt-0 pb-25"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="col-xl-7 col-lg-9">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis
                </p>
              </div>
            </div>
            <Link href="contact" className="theme-btn">
              Sign Up For Free <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="hero-bg-wave-shapes">
          <span className="circle" />
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Hero area End */}
      {/* Hero Image Part End */}
      <div
        className="hero-image-area rel z-1"
        data-aos="zoom-in-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="container container-1370">
          <img src="assets/images/hero/hero-five.png" alt="Hero" />
        </div>
      </div>
      {/* Hero Image Part End */}
      {/* Client Logos Area Start */}
      <section className="client-logo-area-five pt-125 rpt-105 rel z-1">
        <div className="container">
          <div
            className="section-title text-center mb-50"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <h4>
              I’ve <span>1253+</span> Global Clients &amp; lot’s of Project
              Complete
            </h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item"
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
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item"
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
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item"
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
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item"
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
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item"
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
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className="client-logo-item"
                data-aos="fade-up"
                data-aos-delay={250}
                data-aos-duration={1500}
                data-aos-offset={50}
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
      {/* Feature Image box Area Start */}
      <section
        id="features"
        className="feature-image-box-area pt-95 rpt-75 pb-70 rpb-50 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle-one style-two mb-20">
                  <i className="fas fa-rocket-launch" /> Best Communication
                  System
                </span>
                <h2>Support your customers on their preferred channels</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/services/feature1.png"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Share Inbox</Link>
                  </h5>
                  <p>
                    Sed uterspiciatis unde omnis natus error voluptatem
                    accusantium doloremque ways laudantium totam aperiam eaque
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/services/feature2.png"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Custom Analytics</Link>
                  </h5>
                  <p>
                    Quis autem vel eumiure reprehenderit qui in ea voluptate
                    velit esse quam molestiae consequatur vel illum qui dolorem
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="feature-image-box"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/services/feature3.png"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Contacts CRM</Link>
                  </h5>
                  <p>
                    To take a trivial example, which of us ever undertakes
                    laborious physical exercise, except to obtain some advantage
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
      {/* Feature Image box Area End */}
      {/* Tab Area Start */}
      <section
        id="about"
        className="tab-area-five bgc-black text-white pt-120 rpt-100 pb-80 rpb-60 rel z-1"
      >
        <div className="container">
          <div className="row gap-100 align-items-center justify-content-center">
            <div className="col-lg-6">
              <div
                className="tap-five-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title pt-10 mb-55">
                  <span className="subtitle-one style-three mb-20">
                    <i className="fas fa-rocket-launch" /> Best Custom Saas to
                    you
                  </span>
                  <h2>Leverage our APIs to build your custom apps</h2>
                </div>
                <Tab.Container defaultActiveKey={"tabFour1"}>
                  <Nav
                    as={"ul"}
                    className="nav advanced-tab style-four mb-40"
                    role="tablist"
                  >
                    <Nav.Item as={"li"}>
                      <Nav.Link as={"button"} eventKey="tabFour1">
                        Data Analyze
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link as={"button"} eventKey="tabFour2">
                        Collaborate
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as={"li"}>
                      <Nav.Link as={"button"} eventKey="tabFour3">
                        Easy &amp; secure
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content">
                    <Tab.Pane className="tab-pane fade" eventKey="tabFour1">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusantium doloremque laudantium totamto aperiame eaque
                        ipsa quae ab illo inventore veritatis
                      </p>
                      <div className="feature-icon-box text-white mt-30">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>Individual lead profile</h5>
                          <p>Doloremque laudantium totamto aperiame eaque</p>
                        </div>
                      </div>
                      <div className="feature-icon-box text-white">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>Advanced deal tracking</h5>
                          <p>
                            At vero eoset accusamus etodio dignissimos ducimus
                          </p>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="tabFour2">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusantium doloremque laudantium totamto aperiame eaque
                        ipsa quae ab illo inventore veritatis
                      </p>
                      <div className="feature-icon-box text-white mt-30">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>Individual lead profile</h5>
                          <p>Doloremque laudantium totamto aperiame eaque</p>
                        </div>
                      </div>
                      <div className="feature-icon-box text-white">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>Advanced deal tracking</h5>
                          <p>
                            At vero eoset accusamus etodio dignissimos ducimus
                          </p>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="tabFour3">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusantium doloremque laudantium totamto aperiame eaque
                        ipsa quae ab illo inventore veritatis
                      </p>
                      <div className="feature-icon-box text-white mt-30">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>Individual lead profile</h5>
                          <p>Doloremque laudantium totamto aperiame eaque</p>
                        </div>
                      </div>
                      <div className="feature-icon-box text-white">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>Advanced deal tracking</h5>
                          <p>
                            At vero eoset accusamus etodio dignissimos ducimus
                          </p>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="management-images mb-20"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/tabs/tab-four.png" alt="Management" />
                <div className="management-over">
                  <img
                    src="assets/images/about/management2.png"
                    alt="Management"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-90 rpt-70 gap-10">
            <div className="col-lg-4 col-md-6">
              <div
                className="counter-item style-two counter-text-wrap"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-review" />
                </div>
                <span
                  className="count-text k-plus"
                  data-speed={3000}
                  data-stop={25}
                >
                  <Counter end={25} />
                </span>
                <hr />
                <span className="counter-title">100% Satisficed Clients</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="counter-item style-two counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-layers-1" />
                </div>
                <span
                  className="count-text k-plus"
                  data-speed={3000}
                  data-stop={235}
                >
                  <Counter end={253} />
                </span>
                <hr />
                <span className="counter-title">
                  Task Complete For Global Clients
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="counter-item style-two counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="icon">
                  <i className="flaticon-online-registration" />
                </div>
                <span
                  className="count-text k-plus"
                  data-speed={3000}
                  data-stop={1052}
                >
                  <Counter end={1052} />
                </span>
                <hr />
                <span className="counter-title">Regular Free Registation</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines line-white">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Tab Area End */}
      {/* Feature box Area Start */}
      <section
        id="services"
        className="feature-box-area pt-125 rpt-105 pb-90 rpb-70 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle-one style-two mb-20">
                  <i className="fas fa-rocket-launch" /> Akpager Core Features
                </span>
                <h2>Powerful approach to project planning and creation</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="fal fa-atom-alt" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Proactive Blocklist Tracking
                    </Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
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
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="fal fa-rocket-launch" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Faster Time to Inbox</Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
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
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="far fa-bullseye-pointer" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Build Confidence with BIMI
                    </Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="far fa-anchor" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Manage Dedicated IPs</Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
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
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="far fa-layer-group" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Dynamic suppression List</Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
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
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="far fa-shield-check" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Verify DNS Records</Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
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
      {/* Feature box Area End */}
      {/* About Area Five Start */}
      <section className="about-area-five pb-120 rpb-100 rel z-1">
        <div className="container">
          <div className="row gap-40 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-images-five rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about-five1.png" alt="About" />
                <img src="assets/images/about/about-five2.png" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-content-five mt-40 rmt-15"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <span className="subtitle-one style-two mb-20">
                    <i className="fas fa-rocket-launch" /> Build Better products
                  </span>
                  <h2>Instant feedback to build better Products</h2>
                </div>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident similique sunt
                </p>
                <ul className="icon-list style-two mt-40 mb-40">
                  <li>
                    <i className="fal fa-check" /> Connect with leads with zero
                    hassle.
                  </li>
                  <li>
                    <i className="fal fa-check" /> Take quick payments direct
                    from meetings
                  </li>
                </ul>
                <Link href="about" className="theme-btn">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
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
      {/* FeedbackArea Start */}
      <section
        id="testimonials"
        className="feedback-area-five bgc-lighter pt-125 rpt-105 pb-80 rpb-60 rel z-1"
      >
        <div className="container">
          <div
            className="section-title text-center mb-55"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <span className="subtitle-one style-two mb-20">
              <i className="fas fa-rocket-launch" /> Customer Feedback
            </span>
            <h2>We’ve 1253+ Customer Feedback</h2>
          </div>
          <div className="row gap-50">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="testimonial-item style-two">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/author1.png"
                      alt="Author"
                    />
                  </div>
                  <div className="title">
                    <b>Dennis J. Lester /</b> CEO &amp; Founder
                  </div>
                </div>
                <div className="author-text">
                  At vero eoset accusamus iusto dignissimos ducimus blanditiis
                  praesentium voluptatume delenitie corruptie dolores molestias
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
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="testimonial-item style-two">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/author7.png"
                      alt="Author"
                    />
                  </div>
                  <div className="title">
                    <b>Nicholas S. Moore / </b> CEO &amp; Founder
                  </div>
                </div>
                <div className="author-text">
                  At vero eoset accusamus iusto dignissimos ducimus blanditiis
                  praesentium voluptatume delenitie corruptie dolores molestias
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
            </div>
          </div>
        </div>
        <Slider
          {...sliderProps.marqueeSliderRight}
          className="marquee-slider-right iconic-slider-right style-two pt-40 rpt-20"
        >
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member1.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">Mike R. Smith</h6>
                <span className="subtitle">CEO Founder</span>
              </div>
            </div>
          </div>
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member2.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">Leroy T. Casey</h6>
                <span className="subtitle">Developer</span>
              </div>
            </div>
          </div>
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member3.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">Roger E. Sanders</h6>
                <span className="subtitle">Businessman</span>
              </div>
            </div>
          </div>
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member4.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">Chris L. Mauney</h6>
                <span className="subtitle">Co-founder</span>
              </div>
            </div>
          </div>
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member5.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">James D. Wright</h6>
                <span className="subtitle">UI Designer</span>
              </div>
            </div>
          </div>
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member6.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">Louis M. Pawlak</h6>
                <span className="subtitle">Marketer</span>
              </div>
            </div>
          </div>
        </Slider>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* FeedbackArea End */}
      {/* Work Step Area Five Start */}
      <section
        id="work-step"
        className="work-step-area-five pt-120 rpt-100 pb-100 rpb-80 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div
                className="about-content-five mt-10 mb-20 rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <span className="subtitle-one style-two mb-20">
                    <i className="fas fa-rocket-launch" /> How to get Started
                  </span>
                  <h2>Getting started takes less than 2 minutes</h2>
                </div>
                <ul className="icon-list mt-40 mb-40">
                  <li>
                    <i className="fal fa-arrow-right" /> No credit card required
                  </li>
                </ul>
                <Link href="about" className="theme-btn">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="numbered-boxes"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="numbered-box style-two">
                  <div className="number">1</div>
                  <div className="content">
                    <h5>Connect Your Account</h5>
                    <p>
                      Praesentium voluptatum deleniti atque corrupti quos
                      dolores quas molestias exceptur occaecatie
                    </p>
                  </div>
                </div>
                <div className="numbered-box style-two">
                  <div className="number">2</div>
                  <div className="content">
                    <h5>View Data Analysis</h5>
                    <p>
                      Praesentium voluptatum deleniti atque corrupti quos
                      dolores quas molestias exceptur occaecatie
                    </p>
                  </div>
                </div>
                <div className="numbered-box style-two">
                  <div className="number">3</div>
                  <div className="content">
                    <h5>Get Your Final Result</h5>
                    <p>
                      Praesentium voluptatum deleniti atque corrupti quos
                      dolores quas molestias exceptur occaecatie
                    </p>
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
      {/* Work Step Area End */}
      {/* Footer Top CTA Area Start */}
      <section className="footer-top-cta-area">
        <div className="container container-1500">
          <div
            className="footer-top-cta-wrap bgc-primary"
            style={{
              backgroundImage: "url(assets/images/backgrounds/cta-bg.png)",
            }}
          >
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <div
                  className="image rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="assets/images/footer/footer-cta.png" alt="CTA" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div
                  className="footer-top-cta-content text-white"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-30">
                    <span className="subtitle-one style-three mb-20">
                      <i className="fas fa-rocket-launch" /> Get Started Free
                    </span>
                    <h2>Are You Ready To Get 7-Days For Free?</h2>
                  </div>
                  <p>
                    Praesentium voluptatum deleniti atque corrupti quos dolores
                    quas molestias exceptur occaecatie
                  </p>
                  <Link href="contact" className="theme-btn mt-25">
                    Get Started Free <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};
export default page;
