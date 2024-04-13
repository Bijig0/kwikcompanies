"use client";
import AkpagerAccordion from "@/components/AkpagerAccordion";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
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
  const [active1, setActive1] = useState("collapse2");
  return (
    <AkpagerLayout>
      <PageBanner pageName={"FAQs"} />
      {/* FAQs Area Start */}
      <section className="faqs-area pt-130 rpt-100">
        <div className="container">
          <div className="row gap-70">
            <div className="col-lg-5">
              <div
                className="faq-left-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Digital Marketing Faq Your Roadmap to Success</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium totamto aperiame eaque ipsa
                  quae ab illo inventore veritatis
                </p>
                <a href="#" className="theme-btn mt-30">
                  Contact Us <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <Accordion
                className="accordion faq-page"
                id="accordionOne"
                defaultActiveKey={active}
                data-aos="fade-right"
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
      </section>
      {/* FAQs Area End */}
      {/* FAQs Area Start */}
      <section className="faqs-area pt-115 rpt-85 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-70">
            <div className="col-lg-5">
              <div
                className="faq-left-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Navigating the Digital Marketing Landscape FAQs Unveiled
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium totamto aperiame eaque ipsa
                  quae ab illo inventore veritatis
                </p>
                <a href="#" className="theme-btn style-four mt-30">
                  Contact Us <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <Accordion
                className="accordion faq-page"
                defaultActiveKey={active1}
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                {accordionItems.map((item) => (
                  <AkpagerAccordion
                    key={item.id}
                    title={item.title}
                    event={`collapse${item.id}`}
                    onClick={() =>
                      setActive1(
                        active1 == `collapse${item.id}`
                          ? ""
                          : `collapse${item.id}`
                      )
                    }
                    active={active1}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-cta-area">
        <div className="container">
          <hr />
          <div className="row pt-110 rpt-80 pb-130 rpb-100 justify-content-center text-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title mb-30"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Don’t Heisted to Contact Us</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium totamto aperiame eaque epsa
                  quae abillo inventore veritatis
                </p>
              </div>
              <a
                href="#"
                className="theme-btn"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Contact Us <i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};
export default page;
