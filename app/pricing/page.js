"use client";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { Nav, Tab } from "react-bootstrap";
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"Pricing Plan"} pageTitle={"Pricing Package"} />
      {/* Pricing Area Start */}
      <section className="pricing-area pt-125 rpt-95 pb-100 rpb-70 rel z-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Explore Our Pricing Package and choose your plan</h2>
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
                data-aos-duration={1500}
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
                data-aos-delay={100}
                data-aos-duration={1500}
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
                className="pricing-item text-white bgc-navyblue"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
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
      {/* Price Three Area Start */}
      <section className="pricing-three-area bgc-lighter bgp-bottom pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <Tab.Container defaultActiveKey={"yearly"}>
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-9 col-md-11">
                <div
                  className="section-title text-center mb-45"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h2>Explore Our Pricing Package and choose your plan</h2>
                </div>
              </div>
              <div
                className="col-lg-7 text-center"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span
                  className="save-percent"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/title-shape.png)",
                  }}
                >
                  Save 40%
                </span>
                <Nav as={"ul"} className="nav pricing-tab mb-55" role="tablist">
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
              </div>
            </div>
            <Tab.Content className="tab-content">
              <Tab.Pane className="tab-pane fade" eventKey="monthly">
                <div className="row justify-content-center">
                  <div
                    className="col-xl-4 col-md-6 col-sm-10"
                    data-aos="fade-up"
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
                    className="col-xl-4 col-md-6 col-sm-10"
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
                  <div
                    className="col-xl-4 col-md-6 col-sm-10"
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
                        <span className="prev">$</span>93
                        <span className="next">/month</span>
                      </div>
                      <div className="text">
                        Smart Pricing for good services
                      </div>
                      <a href="#" className="theme-btn">
                        Choose Package <i className="far fa-arrow-right" />
                      </a>
                      <h4 className="title">Premium Plan</h4>
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
              <Tab.Pane className="tab-pane fade yearly" eventKey="yearly">
                <div className="row justify-content-center">
                  <div
                    className="col-xl-4 col-md-6 col-sm-10"
                    data-aos="fade-up"
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
                    className="col-xl-4 col-md-6 col-sm-10"
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
                  <div
                    className="col-xl-4 col-md-6 col-sm-10"
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
                        <span className="prev">$</span>93
                        <span className="next">/month</span>
                      </div>
                      <div className="text">
                        Smart Pricing for good services
                      </div>
                      <a href="#" className="theme-btn">
                        Choose Package <i className="far fa-arrow-right" />
                      </a>
                      <h4 className="title">Premium Plan</h4>
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
          </Tab.Container>
        </div>
        <div className="pricing-three-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/price1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/price2.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Price Three Area End */}
      {/* Pricing Area Start */}
      <section className="pricing-area-six overflow-hidden rel z-1 pt-125 rpt-95 pb-100 rpb-70">
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
      </section>
    </AkpagerLayout>
  );
};
export default page;
