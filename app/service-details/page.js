"use client";
import AkpagerAccordion from "@/components/AkpagerAccordion";
import Counter from "@/components/Counter";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
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
    <AkpagerLayout>
      <PageBanner
        pageName={"Service Details"}
        pageTitle={
          "Unlock Your Digital Potential Our Expert Digital Marketing Services"
        }
        titleTag="h2"
      />
      {/* Service Management Area Start */}
      <section className="service-mamagement-area pt-60 rpt-30 pb-90 rpb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="service-mamagement-content mt-40 rmb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Best Digital Marketing Solutions for Next-Level Online
                    Success
                  </h2>
                </div>
                <p>
                  Elevate your brand's online presence with our comprehensive
                  digital marketing services, tailored to boost engagement &amp;
                  drive measurable results.
                </p>
                <div className="row pt-25">
                  <div className="col-sm-6">
                    <div className="feature-icon-box style-two">
                      <div className="icon">
                        <i className="far fa-check" />
                      </div>
                      <div className="content">
                        <h5>Turn ideas into reality</h5>
                        <p>
                          Nam libero tempore solut nobis estmpedit maxime
                          placeat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-icon-box style-two">
                      <div className="icon">
                        <i className="far fa-check" />
                      </div>
                      <div className="content">
                        <h5>Engage your audience</h5>
                        <p>
                          Nam libero tempore solut nobis estmpedit maxime
                          placeat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="management-images float-lg-end my-40"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/about/service-management.png"
                  alt="Management"
                />
                <div className="management-over">
                  <img
                    src="assets/images/about/management2.png"
                    alt="Management"
                    data-aos="fade-right"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Management Area End */}
      {/* Marketing Solutions Area Start */}
      <section className="marketing-solutions-area pb-80 rpb-50">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div
                className="marketing-solutions-images mb-50"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  className="br-20"
                  src="assets/images/about/marketing-solutions.png"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="marketing-solutions-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Strategic Digital Marketing Solutions Unleash Your Brand's
                    Potential
                  </h2>
                </div>
                <p>
                  Elevate your brand's online presence with our comprehensive
                  digital marketing services, tailored to boost engagement &amp;
                  drive measurable results.
                </p>
                <Link href="contact" className="theme-btn mt-25">
                  Get Started <i className="far fa-arrow-right" />
                </Link>
                <div className="row pt-40">
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
                    <div className="counter-item counter-text-wrap counted">
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
      </section>
      {/* Marketing Solutions Area End */}
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
      {/* Features Area Start */}
      <section className="about-features-area pt-130 rpt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div
                className="section-title text-center mb-45"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>
                  Driving Growth Through Data Our Comprehensive Digital
                  Marketing Services
                </h2>
                <div className="row justify-content-center">
                  <div className="col-xl-9 col-lg-11">
                    <p>
                      Our digital marketing experts employ data-driven
                      strategies to optimize your online campaigns, ensuring
                      maximum ROI and customer engagement. Elevate your brand's
                      online presence with our comprehensive digital marketing
                      services, tailored to boost engagement &amp; drive
                    </p>
                  </div>
                </div>
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
              <div className="iconic-box style-seven border">
                <div className="icon-title">
                  <i className="far fa-cloud-upload" />
                  <h5>
                    <Link href="service-details">Real-Time Updates</Link>
                  </h5>
                </div>
                <div className="content">
                  <p>
                    Marketing agencies, for example, focus on promoting products
                    or services
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg2.png"
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
              <div className="iconic-box style-seven border">
                <div className="icon-title">
                  <i className="far fa-bullseye-arrow" />
                  <h5>
                    <Link href="service-details">Align Money &amp; Goals</Link>
                  </h5>
                </div>
                <div className="content">
                  <p>
                    They leverage the digital marketing social media, SEO,
                    traditional advertising
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg2.png"
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
              <div className="iconic-box style-seven border">
                <div className="icon-title">
                  <i className="far fa-layer-group" />
                  <h5>
                    <Link href="service-details">Quietly Powerful</Link>
                  </h5>
                </div>
                <div className="content">
                  <p>
                    Agencies offer specialized expertise in areas such as
                    management, finance
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg2.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area End */}
      {/* FAQs area start */}
      <section className="faqs-area pt-100 rpt-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="faq-content-four rmb-65"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title pb-20">
                  <h2>
                    Uncover Solutions to Frequently Asked Questions About Our
                    Services
                  </h2>
                </div>
                <Accordion className="accordion" defaultActiveKey={active}>
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
            <div className="col-lg-6">
              <div
                className="faq-images-part ms-lg-auto"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/faq/faq1.png" alt="FAQs" />
                </div>
                <div className="row gap-20">
                  <div className="col-6">
                    <div className="image">
                      <img src="assets/images/faq/faq2.png" alt="FAQs" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="image">
                      <img src="assets/images/faq/faq3.png" alt="FAQs" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs area End */}
      {/* Client Logos Area Start */}
      <section className="client-logo-area-two pt-110 rpt-80 pb-95 rpb-65">
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
          </div>
        </div>
      </section>
      {/* Client Logos Area End */}
    </AkpagerLayout>
  );
};
export default page;
