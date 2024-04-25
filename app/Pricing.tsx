"use client";
import { Button, Tab } from "react-bootstrap";
import { Urls } from "./types/urls";
const page = () => {
  return (
    <section className="pricing-three-area bgc-lighter bgp-bottom pt-130 rpt-100 pb-100 rpb-70 rel z-1">
      <div className="container">
        <Tab.Container defaultActiveKey={"yearly"}>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9 col-md-11">
              <div className="text-center section-title">
                <h2>ATO Authorised Agent Service Fees</h2>
              </div>
            </div>
          </div>
          <div className="my-16" />
          <Tab.Content className="tab-content">
            <Tab.Pane className="tab-pane fade yearly" eventKey="yearly">
              <div className="row justify-content-center">
                <div className="col-xl-4 col-md-6 col-sm-10">
                  <div className="pricing-item style-three">
                    <div className="circle">
                      <img
                        src="assets/images/shapes/price-circle.png"
                        alt="Shape"
                      />
                    </div>
                    <div className="price">
                      <span className="prev">$</span>39
                    </div>
                    <div className="text">
                      For contractors or sole business owners
                    </div>
                    <a href={Urls["Choose Structure"]} className="theme-btn">
                      Register Now! <i className="far fa-arrow-right" />
                    </a>
                    <h4 className="title">Sole Trader ABN Registration</h4>
                    <ul className="list">
                      <li>Australia's Quickest ABN Application Process</li>
                      <li>Instant ABN Registration Submission</li>
                      <li>GST/PAYG Included</li>
                      <li>Unlimited And Instant Customer Support</li>
                      <li>
                        Business Name and Domain Name Registration Available
                      </li>
                      <li>Includes Government Service Fees</li>
                      <li>Unlimited Customer Support</li>
                      <li>Invoice and receive payments online</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-10">
                  <div className="pricing-item style-three">
                    <div className="circle">
                      <img
                        src="assets/images/shapes/price-circle.png"
                        alt="Shape"
                      />
                    </div>
                    <div className="price">
                      <span className="prev">$</span>39
                    </div>
                    <div className="text">For families/partnerships</div>
                    <Button disabled variant="disabled" className="theme-btn">
                      Coming Soon! <i className="far fa-arrow-right" />
                    </Button>
                    <h4 className="title">Partnership ABN Registration</h4>
                    <ul className="list">
                      <li>Australia's Quickest ABN Application Process</li>
                      <li>Instant ABN Registration Submission</li>
                      <li>GST/PAYG Included</li>
                      <li>Unlimited And Instant Customer Support</li>
                      <li>
                        Business Name and Domain Name Registration Available
                      </li>
                      <li>Includes Government Service Fees</li>
                      <li>Unlimited Customer Support</li>
                      <li>Invoice and receive payments online</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-10">
                  <div className="pricing-item style-three">
                    <div className="circle">
                      <img
                        src="assets/images/shapes/price-circle.png"
                        alt="Shape"
                      />
                    </div>
                    <div className="price">
                      <span className="prev">$</span>59
                    </div>
                    <div className="text">Corporate industry</div>
                    <Button disabled variant="disabled" className="theme-btn">
                      Coming Soon! <i className="far fa-arrow-right" />
                    </Button>
                    <h4 className="title">Company Registration</h4>
                    <ul className="list">
                      <li>Australia's Quickest ABN Application Process</li>
                      <li>Instant ABN Registration Submission</li>
                      <li>GST/PAYG Included</li>
                      <li>Unlimited And Instant Customer Support</li>
                      <li>
                        Business Name and Domain Name Registration Available
                      </li>
                      <li>Includes Government Service Fees</li>
                      <li>Unlimited Customer Support</li>
                      <li>Invoice and receive payments online</li>
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
  );
};
export default page;
