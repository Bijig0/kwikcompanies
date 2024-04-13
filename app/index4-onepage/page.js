"use client";
import AkpagerAccordion from "@/components/AkpagerAccordion";
import Counter from "@/components/Counter";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";

import dynamic from "next/dynamic";
import Link from "next/link";

const CoursesIsotope = dynamic(
  () => import("@/components/isotope/CoursesIsotope"),
  {
    ssr: false,
  }
);

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
];
const page = () => {
  const [active, setActive] = useState("collapse1");
  return (
    <AkpagerLayout header={4} footer={4} bodyClass={"home-four"} onePage={true}>
      {/* Hero area start */}
      <section
        className="hero-area-four bg-black pt-250 rpt-150 pb-120 rpb-70 rel z-1"
        id="home"
      >
        <div className="container">
          <div className="hero-content style-four text-center text-white">
            <span
              className="subtitle-two mb-25"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <i className="fas fa-play-circle" />{" "}
              <span>Online Learning Institute</span>
            </span>
            <h1
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              Best Innovative <span>e-Learning</span> Platform 2023
            </h1>
            <ul
              className="icon-list style-two mt-35 mb-30"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <li>
                <i className="fal fa-check" /> 35k+ Enroll Student
              </li>
              <li>
                <i className="fal fa-check" /> 98+ Expert Advisors
              </li>
              <li>
                <i className="fal fa-check" /> 24h Online Support
              </li>
            </ul>
            <Link
              href="contact"
              className="theme-btn style-two"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              Enroll Now <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape-one.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-shape-two.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Hero area End */}
      {/* Marquee Iconic Box Area Start */}
      <section className="marquee-iconic-box-area bg-black pb-10">
        <Slider
          {...sliderProps.marqueeSliderRight}
          className="marquee-slider-right text-white iconic-slider-right"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member1.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Mike R. Smith</h6>
              <span className="subtitle">New York</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member2.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Leroy T. Casey</h6>
              <span className="subtitle">Australia</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member3.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Roger E. Sanders</h6>
              <span className="subtitle">Poland</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member4.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Chris L. Mauney</h6>
              <span className="subtitle">Bangladesh</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member5.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">James D. Wright</h6>
              <span className="subtitle">Germany</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member6.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Louis M. Pawlak</h6>
              <span className="subtitle">Netherland</span>
            </div>
          </div>
        </Slider>
        <Slider
          {...sliderProps.marqueeSliderLeft}
          className="marquee-slider-left text-white iconic-slider-left"
          dir="rtl"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member7.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Roland J. Reilly</h6>
              <span className="subtitle">Canada</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member8.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">William M. Hook</h6>
              <span className="subtitle">Portugal</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member9.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Pete B. Cadiz</h6>
              <span className="subtitle">Brazil</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member10.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Johnny M. Bain</h6>
              <span className="subtitle">New York</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member11.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Michael C. Smith</h6>
              <span className="subtitle">London</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/member12.png" alt="Member" />
            </div>
            <div className="content">
              <h6 className="title">Leonard M. Miller</h6>
              <span className="subtitle">South Africa</span>
            </div>
          </div>
        </Slider>
      </section>
      {/* Marquee Iconic Box Area End */}
      {/* About area start */}
      <section id="about" className="about-area-four pt-120 rpt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-four-images rmb-35"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row gap-20">
                  <div className="col-6">
                    <img src="assets/images/about/about3.jpg" alt="About" />
                    <img src="assets/images/about/about4.jpg" alt="About" />
                  </div>
                  <div className="col-6">
                    <img src="assets/images/about/about5.jpg" alt="About" />
                    <img src="assets/images/about/about6.jpg" alt="About" />
                    <img src="assets/images/about/about7.jpg" alt="About" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-four-content mb-20"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title">
                  <span className="subtitle-two mb-25">
                    <i className="fas fa-play-circle" />{" "}
                    <span>About Akpager</span>
                  </span>
                  <h2>Largest Online Learning Platform for Drive Career</h2>
                </div>
                <p>
                  Sed uterspiciatis unde omnis natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  abillo inventore veritatis etquasi architecto beatae vitae
                  dicta sunt explica boemo enim ipsam voluptatem
                </p>
                <div className="about-four-btns mt-30">
                  <Link href="/contact" className="theme-btn style-two">
                    Learn More <i className="far fa-arrow-right" />
                  </Link>
                  <Link href="contact" className="theme-btn">
                    Our Courses <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="clients-reviews mt-25">
                  <div className="clients">
                    <div className="images">
                      <img src="assets/images/about/client1.png" alt="Client" />
                      <img src="assets/images/about/client2.png" alt="Client" />
                      <img src="assets/images/about/client3.png" alt="Client" />
                      <img src="assets/images/about/client4.png" alt="Client" />
                      <span className="text">12k+</span>
                    </div>
                  </div>
                  <h6>Enroll Programs</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About area End */}
      {/* Special Features Area Start */}
      <section id="services" className="special-features-area pt-100 rpt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle-two mb-25">
                  <i className="fas fa-play-circle" /> Special Features
                </span>
                <h2>
                  Online Learning Designed For Real Life and Growth Your
                  knowledge
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-six">
                <div className="icon">
                  <i className="flaticon-open-book" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      User-friendly platform to learn in your way
                    </Link>
                  </h5>
                  <p>At vero eoset accusame iusto odio dignissimos ducimus</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-six">
                <div className="icon">
                  <i className="flaticon-help" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Professional Mentors for Guide Course
                    </Link>
                  </h5>
                  <p>At vero eoset accusame iusto odio dignissimos ducimus</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-six">
                <div className="icon">
                  <i className="flaticon-new-job" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Career Opportunities to Complete Course
                    </Link>
                  </h5>
                  <p>At vero eoset accusame iusto odio dignissimos ducimus</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-six">
                <div className="icon">
                  <i className="flaticon-self-development" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      New Skills Lifelong Learning &amp; Build Career
                    </Link>
                  </h5>
                  <p>At vero eoset accusame iusto odio dignissimos ducimus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Special Features Area End */}
      {/* Marquee Iconic Box Area Start */}
      <section className="marquee-iconic-box-area pt-60 rpt-40 pb-50">
        <Slider
          {...sliderProps.marqueeSliderLeft}
          className="marquee-slider-right iconic-slider-right"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-six">
              <i className="flaticon-pen-tool" />
            </div>
            <div className="content">
              <h6 className="title">UI/UX Design</h6>
              <span className="subtitle">5+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-seven">
              <i className="flaticon-goal-1" />
            </div>
            <div className="content">
              <h6 className="title">Leadership Skill</h6>
              <span className="subtitle">8+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-eight">
              <i className="flaticon-code" />
            </div>
            <div className="content">
              <h6 className="title">Web Development</h6>
              <span className="subtitle">10+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-four">
              <i className="flaticon-megaphone" />
            </div>
            <div className="content">
              <h6 className="title">Digital Marketing</h6>
              <span className="subtitle">8+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-six">
              <i className="flaticon-new-job" />
            </div>
            <div className="content">
              <h6 className="title">Microsoft Office</h6>
              <span className="subtitle">10+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-nine">
              <i className="flaticon-diaphragm" />
            </div>
            <div className="content">
              <h6 className="title">Photography</h6>
              <span className="subtitle">3+ Course</span>
            </div>
          </div>
        </Slider>
        <Slider
          {...sliderProps.marqueeSliderRight}
          className="marquee-slider-left iconic-slider-left"
          dir="rtl"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-ten">
              <i className="flaticon-caduceus" />
            </div>
            <div className="content">
              <h6 className="title">Medical Healthcare</h6>
              <span className="subtitle">12+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon">
              <i className="flaticon-app-development" />
            </div>
            <div className="content">
              <h6 className="title">iOS Mobile Development</h6>
              <span className="subtitle">9+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-five">
              <i className="flaticon-healthy-lifestyle-logo" />
            </div>
            <div className="content">
              <h6 className="title">Fashion &amp; Lifestyle</h6>
              <span className="subtitle">9+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-six">
              <i className="flaticon-self-development-1" />
            </div>
            <div className="content">
              <h6 className="title">Business Development</h6>
              <span className="subtitle">7+ Course</span>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="icon color-one">
              <i className="flaticon-seeding" />
            </div>
            <div className="content">
              <h6 className="title">Land Gardening</h6>
              <span className="subtitle">4+ Course</span>
            </div>
          </div>
        </Slider>
      </section>
      {/* Marquee Iconic Box Area End */}
      {/* Popular Course Area Start */}
      <CoursesIsotope />
      {/* Popular Course Area End */}
      {/* Why Choose Us area start */}
      <section className="why-choose-us pt-120 rpt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div
                className="why-choose-us-content mb-30"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title pb-10">
                  <span className="subtitle-two mb-25">
                    <i className="fas fa-play-circle" />{" "}
                    <span>Why Choose Us</span>
                  </span>
                  <h2>Grow Your Tech Knowledge Fast and Smart Way</h2>
                </div>
                <p>
                  To take a trivial example which of ever undertakes laborious
                  physical exercise except to obtain some advantage from it? But
                  who has any right to find fa with a man who chooses to enjoy a
                  pleasure that has no annoying
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
            <div className="col-xl-6">
              <div
                className="about-four-images ms-xl-auto mb-30"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row gap-20">
                  <div className="col-6">
                    <img
                      src="assets/images/about/why-cu1.jpg"
                      alt="Why Choose Us"
                    />
                    <img
                      src="assets/images/about/why-cu2.jpg"
                      alt="Why Choose Us"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="assets/images/about/why-cu3.jpg"
                      alt="Why Choose Us"
                    />
                    <img
                      src="assets/images/about/why-cu4.jpg"
                      alt="Why Choose Us"
                    />
                    <img
                      src="assets/images/about/why-cu5.jpg"
                      alt="Why Choose Us"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us area End */}
      {/* Become A Member area start */}
      <section className="become-a-member-area pt-70 rpt-50 pb-120 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div
                className="become-a-member-content rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title pb-10">
                  <span className="subtitle-two mb-25">
                    <i className="fas fa-play-circle" />{" "}
                    <span>Become A Member</span>
                  </span>
                  <h2>Are You Interested to Join Our Team As a Mentor?</h2>
                </div>
                <p>
                  We denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the
                  moment
                </p>
                <Link href="contact" className="theme-btn style-two mt-30">
                  Become a Mentor <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-5">
              <div
                className="become-a-member-images"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/about/become-member1.jpg"
                  alt="Become Member"
                />
                <img
                  src="assets/images/about/become-member2.jpg"
                  alt="Become Member"
                />
                <img
                  src="assets/images/about/become-member3.jpg"
                  alt="Become Member"
                />
                <img
                  src="assets/images/about/become-member4.jpg"
                  alt="Become Member"
                />
                <img
                  src="assets/images/about/become-member5.jpg"
                  alt="Become Member"
                />
                <img
                  src="assets/images/about/become-member6.jpg"
                  alt="Become Member"
                />
                <img
                  src="assets/images/about/become-member7.jpg"
                  alt="Become Member"
                />
                <img
                  src="assets/images/about/become-member8.jpg"
                  alt="Become Member"
                />
                <img
                  src="assets/images/about/become-member9.jpg"
                  alt="Become Member"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Become A Member area End */}
      {/* Testimonials Area Start */}
      <section
        id="testimonials"
        className="testimonials-area-four bg-black py-120 rpy-100"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div
                className="section-title text-white text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle-two mb-25">
                  <i className="fas fa-play-circle" /> Student Feedback
                </span>
                <h2>1523+ Global Student Say About Our Learning</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderProps.testiSliderFour}
            className="testi-slider-four text-white"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div>
              <div className="testimonial-item-three">
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-author3.png"
                    alt="Author"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="author-text">
                    At vero eoset accusamus dignissimos ducimus blanditiis
                    praesentium voluptat delenitie corruptie dolores molestias
                  </div>
                  <div className="name-designation">
                    <h6>Nicholas S. Moore</h6>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-item-three">
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-author4.png"
                    alt="Author"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="author-text">
                    At vero eoset accusamus dignissimos ducimus blanditiis
                    praesentium voluptat delenitie corruptie dolores molestias
                  </div>
                  <div className="name-designation">
                    <h6>Dennis J. Lester</h6>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-item-three">
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-author3.png"
                    alt="Author"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="author-text">
                    At vero eoset accusamus dignissimos ducimus blanditiis
                    praesentium voluptat delenitie corruptie dolores molestias
                  </div>
                  <div className="name-designation">
                    <h6>Nicholas S. Moore</h6>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-item-three">
                <div className="image">
                  <img
                    src="assets/images/testimonials/testi-author4.png"
                    alt="Author"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="author-text">
                    At vero eoset accusamus dignissimos ducimus blanditiis
                    praesentium voluptat delenitie corruptie dolores molestias
                  </div>
                  <div className="name-designation">
                    <h6>Dennis J. Lester</h6>
                    <span>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* FAQs and Statistics area start */}
      <section className="faqs-statistics-area pt-120 rpt-100 pb-100 rpb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="faq-content-four rmb-75"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title pb-40 rpb-20">
                  <span className="subtitle-two mb-25">
                    <i className="fas fa-play-circle" /> <span>FAQs</span>
                  </span>
                  <h2>Frequently Ask Questions</h2>
                </div>
                <Accordion
                  className="accordion"
                  id="accordionOne"
                  defaultActiveKey={active}
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
            <div className="col-lg-6">
              <div
                className="counter-content-four ms-lg-auto"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title pb-40 rpb-20">
                  <span className="subtitle-two mb-25">
                    <i className="fas fa-play-circle" />{" "}
                    <span>Our Statistics</span>
                  </span>
                  <h2>Why Join Our Course</h2>
                </div>
                <div
                  className="counter-wrap-for-bg bgs-cover"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/counter-bg.png)",
                  }}
                >
                  <div className="counter-item-two counter-text-wrap">
                    <div className="icon">
                      <i className="flaticon-online-education" />
                    </div>
                    <div className="content">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={450}
                      >
                        <Counter end={450} />
                      </span>
                      <span className="counter-title">
                        Skill Development Courses
                      </span>
                    </div>
                  </div>
                  <div className="counter-item-two counter-text-wrap">
                    <div className="icon">
                      <i className="flaticon-creative-team" />
                    </div>
                    <div className="content">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={135}
                      >
                        <Counter end={153} />
                      </span>
                      <span className="counter-title">
                        Professional &amp; Expert Mentors
                      </span>
                    </div>
                  </div>
                  <div className="counter-item-two counter-text-wrap">
                    <div className="icon">
                      <i className="flaticon-graduate" />
                    </div>
                    <div className="content">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={150}
                      >
                        <Counter end={150} />
                      </span>
                      <span className="counter-title">
                        Regular Enroll Students
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs and Statistics area End */}
      {/* Blog Area Start */}
      <section id="blog" className="blog-area-four pb-90 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-8"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title text-center mb-55">
                <h2>Get Every Single Updates and Learn Our News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog7.png" alt="Blog" />
                  <div className="date">
                    <b>25</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    e-Learning
                  </a>
                  <h5>
                    <Link href="blog-details">
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
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog8.png" alt="Blog" />
                  <div className="date">
                    <b>28</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    e-Learning
                  </a>
                  <h5>
                    <Link href="blog-details">
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
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog9.png" alt="Blog" />
                  <div className="date">
                    <b>30</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    e-Learning
                  </a>
                  <h5>
                    <Link href="blog-details">
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
    </AkpagerLayout>
  );
};
export default page;
