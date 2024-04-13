"use client";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"Team Member"} />{" "}
      <section className="innovation-dedication-area py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="innovation-dedication-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Get to Know the Faces Fueling Our Innovation and Dedication
                  </h2>
                </div>
                <p>
                  At our core, we are a diverse and dynamic team of passionate
                  individuals who bring a wealth of expertise to the table. Each
                  member of our team is carefully selected not only for their
                  professional qualifications dedication
                </p>
                <Link href="contact" className="theme-btn mt-25">
                  Become a Team Member <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="innovation-dedication-images">
                <div
                  className="image-one"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/about/innovation1.png"
                    alt="Innovation"
                  />
                </div>
                <div
                  className="image-two"
                  data-aos="fade-left"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/about/innovation2.png"
                    alt="Innovation"
                  />
                </div>
                <div
                  className="image-three"
                  data-aos="zoom-in"
                  data-aos-delay={400}
                  data-aos-duration={1500}
                >
                  <img
                    src="assets/images/about/innovation3.png"
                    alt="Innovation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Innovation Dedication Area End */}
      {/* Team Area Start */}
      <section className="team-area pb-80 rpb-50">
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
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member5.png" alt="Team" />
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
                  <h5>Miles, Esther</h5>
                  <span className="designation">Senior Software Engineer</span>
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
                  <img src="assets/images/team/member6.png" alt="Team" />
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
                  <h5>Flores, Juanita</h5>
                  <span className="designation">Vice President</span>
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
                  <img src="assets/images/team/member7.png" alt="Team" />
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
                  <h5>Nguyen, Shane</h5>
                  <span className="designation">Project Manager</span>
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
                  <img src="assets/images/team/member8.png" alt="Team" />
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
                  <h5>Cooper, Kristin</h5>
                  <span className="designation">Programmer Analyst</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member9.png" alt="Team" />
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
                  <img src="assets/images/team/member10.png" alt="Team" />
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
                  <img src="assets/images/team/member11.png" alt="Team" />
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
                  <h5>Black, Marvin</h5>
                  <span className="designation">Technical Specialist</span>
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
                  <img src="assets/images/team/member12.png" alt="Team" />
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
                  <h5>Henry, Arthur</h5>
                  <span className="designation">System Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area End */}
      {/* Countries Area Start */}
      <section className="countries-area rel z-1 pb-70 rpb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
              <div
                className="section-title text-center mb-30"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Trusted by Millions in 45+ countries.</h2>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...sliderProps.marqueeSliderRight}
          className="marquee-slider-right style-three iconic-slider-right"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag1.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">United States</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag2.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">South Africa</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag3.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Russia</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag4.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Brazil</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag5.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Australia</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag6.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">China</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag7.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Argentina</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag8.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Kazakhstan</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag9.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Algeria</h6>
            </div>
          </div>
        </Slider>
        <Slider
          {...sliderProps.marqueeSliderLeft}
          className="marquee-slider-left style-three iconic-slider-left"
          dir="rtl"
        >
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag10.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Denmark</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag11.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Saudi Arabia</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag12.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Mexico</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag13.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Indonesia</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag14.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Sudan</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag15.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Mongolia</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag16.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Colombia</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag17.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Ethiopia</h6>
            </div>
          </div>
          <div className="marquee-iconic-box d-flex">
            <div className="image">
              <img src="assets/images/marquee-box/flag18.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Nigeria</h6>
            </div>
          </div>
        </Slider>
        <div className="container">
          <div
            className="image mt-40 text-center"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
          >
            <img
              src="assets/images/backgrounds/map-locations.png"
              alt="Map Locations"
            />
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};
export default page;
