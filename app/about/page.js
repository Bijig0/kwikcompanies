"use client";
import Counter from "@/components/Counter";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"About Company"} />
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
                <img src="assets/images/about/about-page.png" alt="About" />
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
      {/* Features Area Start */}
      <section className="about-features-area">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1000}
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
              data-aos-delay={200}
              data-aos-duration={1000}
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
              data-aos-delay={400}
              data-aos-duration={1000}
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
      {/* Data Analytics Area Start */}
      <section className="data-analytics-area pt-60 rpt-30 pb-90 rpb-60">
        <div className="container">
          <div className="row gap-110 align-items-center">
            <div className="col-lg-6">
              <div
                className="data-analytics-content mt-40 rmb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Artificial Intelligence Data Analytics Solutions</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium totames aperiam eaque quae
                  abillo inventore quasi architecto beatae vitae dicta sunt
                  explicabos
                </p>
                <ul className="icon-list style-two">
                  <li>
                    <i className="fal fa-check" /> Connect with leads with zero
                    hassle.
                  </li>
                  <li>
                    <i className="fal fa-check" /> Take quick payments direct
                    from meetings
                  </li>
                </ul>
                <a href="#" className="theme-btn style-four mt-50">
                  Learn More <i className="far fa-arrow-right" />
                </a>
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
                  className="rounded-0"
                  src="assets/images/about/management-four.png"
                  alt="Management"
                />
                <div className="management-over">
                  <img
                    src="assets/images/about/management-four1.png"
                    alt="Management"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Data Analytics Area End */}
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
                data-aos="zoom-in-right"
                data-aos-duration={1500}
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
      {/* Team Area Start */}
      <section className="team-area pt-130 rpt-100 pb-85 rpb-55">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Let’s Meet Our Professionals Team Members</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member1.png" alt="Team" />
                  <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Jerome C. Ramirez</h5>
                  <span className="designation">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member2.png" alt="Team" />
                  <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Reginald F. Richardson</h5>
                  <span className="designation">Senior Manager</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member3.png" alt="Team" />
                  <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Patrick D. Kozlowski</h5>
                  <span className="designation">Web Designer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member4.png" alt="Team" />
                  <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Patrick M. Piazza</h5>
                  <span className="designation">Junior manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area End */}
      {/* Counter Area Start */}
      <div className="counter-area-ten pb-100 rpb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="counter-item style-six counter-text-wrap"
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
                <hr />
                <span className="counter-title">Satisficed Clients</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="counter-item style-six counter-text-wrap"
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
                <hr />
                <span className="counter-title">Project Complete</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="counter-item style-six counter-text-wrap"
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
                <hr />
                <span className="counter-title">Active Users</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="counter-item style-six counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <span
                  className="count-text percent"
                  data-speed={3000}
                  data-stop={83}
                >
                  <Counter end={83} />
                </span>
                <hr />
                <span className="counter-title">Positive Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Area End */}
      {/* Client Logos Area Start */}
      <section className="client-logo-area-two pt-130 rpt-100 pb-95 rpb-65 bgc-navyblue">
        <div
          className="section-title text-center text-white mb-40"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4>I’ve 1253+ Global Clients &amp; lot’s of Project Complete</h4>
        </div>
        <div className="container">
          <div className="row logo-white justify-content-center row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
            <div
              className="col"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two1.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two2.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two3.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two4.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two9.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two5.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two10.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two7.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo-two6.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1000}
              data-aos-offset={50}
            >
              <div className="client-logo-item style-three">
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
      {/* Testimonials Area Start */}
      <section className="testimonials-area py-130 rpy-100">
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
          <Slider
            {...sliderProps.testiSliderNine}
            className="testi-slider-nine"
          >
            <div className="testimonial-item">
              <div className="author">
                <div className="image">
                  <img
                    src="assets/images/testimonials/author11.png"
                    alt="Author"
                  />
                </div>
                <div className="title">
                  <b>Kathryn Murphy /</b> System Analyst
                </div>
              </div>
              <div className="author-text">
                Highly recommended! This we product exceeded expectation in
                every way. It has become an essential part of my daily lifes and
                I'm grateful impact
              </div>
              <div className="testi-footer">
                <div className="ratting mt-10">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <span className="text mt-10">
                  <span>4.7/5</span> on Trustpilot
                </span>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="author">
                <div className="image">
                  <img
                    src="assets/images/testimonials/author12.png"
                    alt="Author"
                  />
                </div>
                <div className="title">
                  <b>Cody Fisher /</b> Chief Technology Officer
                </div>
              </div>
              <div className="author-text">
                Prompt delivery &amp; top-notch quality. Impressed with to the
                speed and accuracy. The ways efficiency and speed at which they
                delivered the product is were impressive.
              </div>
              <div className="testi-footer">
                <div className="ratting mt-10">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <span className="text mt-10">
                  <span>4.7/5</span> on Trustpilot
                </span>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="author">
                <div className="image">
                  <img
                    src="assets/images/testimonials/author13.png"
                    alt="Author"
                  />
                </div>
                <div className="title">
                  <b>Devon Lane /</b> Delivery Head
                </div>
              </div>
              <div className="author-text">
                Life-changing experience! I learned so much from their program.
                Participating in their program was a transformative experience
                for me.
              </div>
              <div className="testi-footer">
                <div className="ratting mt-10">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <span className="text mt-10">
                  <span>4.7/5</span> on Trustpilot
                </span>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="author">
                <div className="image">
                  <img
                    src="assets/images/testimonials/author5.png"
                    alt="Author"
                  />
                </div>
                <div className="title">
                  <b>Cody Fisher /</b> Chief Technology Officer
                </div>
              </div>
              <div className="author-text">
                Prompt delivery &amp; top-notch quality. Impressed with to the
                speed and accuracy. The ways efficiency and speed at which they
                delivered the product is were impressive.
              </div>
              <div className="testi-footer">
                <div className="ratting mt-10">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <span className="text mt-10">
                  <span>4.7/5</span> on Trustpilot
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Testimonials Area End */}
    </AkpagerLayout>
  );
};
export default page;
