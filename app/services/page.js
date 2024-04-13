import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"Our Services"} pageTitle={"Popular Services"} />
      {/* About Area Start */}
      <section className="about-service-page py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-110 align-items-center">
            <div className="col-lg-6">
              <div
                className="about-content-five rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Smart Way To Provide Best Customer Data</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium totames aperiam eaque quae
                  abillo inventore quasi architecto beatae vitae dicta sunt
                  explicabos
                </p>
                <ul className="icon-list style-two mt-40 mb-45">
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
                <Link href="about" className="theme-btn">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-images-service-page">
                <div className="for-responsive">
                  <img
                    src="assets/images/about/services-page.png"
                    alt="About"
                  />
                </div>
                <div
                  className="first-part"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/about/services-page.png"
                    alt="About"
                  />
                </div>
                <div
                  className="last-part"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/about/services-page.png"
                    alt="About"
                  />
                </div>
                <div className="logo">
                  <Link href="/">
                    <img src="assets/images/logos/logo-top.png" alt="Logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area End */}
      {/* Feature box Area Start */}
      <section className="feature-box-area pb-90 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
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
      </section>
      {/* Feature box Area End */}
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
                data-aos-duration={1500}
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
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
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
      {/* Pricing Area Start */}
      <section className="pricing-area-six bgc-lighter overflow-hidden rel z-1 pt-125 rpt-95 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-60"
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
              <div className="pricing-item style-five">
                <div className="title-price">
                  <h5 className="title">Regular</h5>
                  <div className="price">
                    <span className="prev">$</span>15.
                    <span className="next">/m</span>
                  </div>
                </div>
                <hr />
                <div className="text">
                  Data curation involve the careful election organization, and
                  maintenance
                </div>
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
                  <li className="hide">
                    <i className="fal fa-check" /> Free SSL for custom domain
                  </li>
                  <li className="hide">
                    <i className="fal fa-check" /> Connect custom domain
                  </li>
                </ul>
                <a href="#" className="theme-btn style-two">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
                <div className="footer-text">No credit card required</div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="pricing-item style-five">
                <div className="title-price">
                  <h5 className="title color-two">Standard</h5>
                  <div className="price">
                    <span className="prev">$</span>35.
                    <span className="next">/m</span>
                  </div>
                </div>
                <hr />
                <div className="text">
                  Data curation involve the careful election organization, and
                  maintenance
                </div>
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
                  <li className="hide">
                    <i className="fal fa-check" /> Connect custom domain
                  </li>
                </ul>
                <a href="#" className="theme-btn style-two">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
                <div className="footer-text">No credit card required</div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="pricing-item style-five">
                <div className="title-price">
                  <h5 className="title color-four">Diamond</h5>
                  <div className="price">
                    <span className="prev">$</span>98.
                    <span className="next">/m</span>
                  </div>
                </div>
                <hr />
                <div className="text">
                  Data curation involve the careful election organization, and
                  maintenance
                </div>
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
                <a href="#" className="theme-btn style-two">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
                <div className="footer-text">No credit card required</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-circle-shapes">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Pricing Area End */}
      {/* Client Logos Area Start */}
      <section className="client-logo-area-two pt-130 rpt-100 pb-95 rpb-65">
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
                data-aos-duration={1500}
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
                data-aos-delay={50}
                data-aos-duration={1500}
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
                data-aos-delay={100}
                data-aos-duration={1500}
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
                data-aos-delay={150}
                data-aos-duration={1500}
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
                data-aos-delay={200}
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
                data-aos-duration={1500}
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
                data-aos-delay={50}
                data-aos-duration={1500}
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
                data-aos-delay={100}
                data-aos-duration={1500}
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
                data-aos-delay={150}
                data-aos-duration={1500}
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
                data-aos-delay={200}
                data-aos-duration={1500}
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
export default page;
