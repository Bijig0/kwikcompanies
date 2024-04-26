"use client";
import { sliderProps } from "@utils/sliderProps";
import { Fragment } from "react";
import MediaQuery from "react-responsive";
import Slider from "react-slick";
const TestimonialSlider = () => {
  const tabletWidth = 760;
  return (
    <Fragment>
      <MediaQuery maxWidth={tabletWidth}>
        <div>
          <div className="testimonial-item">
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
              Kwik helped us really easily set up our ABN with no hassle! We got
              our business up and running in under 10 minutes!
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
          <div className="testimonial-item">
            <div className="author">
              <div className="image">
                <img
                  src="assets/images/testimonials/author6.png"
                  alt="Author"
                />
              </div>
              <div className="title">
                <b>Clara Matheson /</b> Small Business Owner
              </div>
            </div>
            <div className="author-text">
              Love these guys, super easy registration process, can't recommend
              enough
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
          </div>{" "}
          <div className="testimonial-item">
            <div className="author">
              <div className="image">
                <img
                  src="assets/images/testimonials/author7.png"
                  alt="Author"
                />
              </div>
              <div className="title">
                <b>Tobias Knight /</b> Small Business Owner
              </div>
            </div>
            <div className="author-text">
              The quick turnaround time for my ABN registration with Kwik
              Companies was impressive. Their service is top-notch, and they
              provided all the necessary support I needed as a new entrepreneur.
              I’m so glad I chose them!
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
      </MediaQuery>
      <MediaQuery minWidth={tabletWidth}>
        <Slider
          {...sliderProps.marqueeSliderRight}
          className="marquee-slider-right testi-slider-right"
        >
          <div className="testimonial-item">
            <div className="author">
              <div className="image">
                <img
                  src="assets/images/testimonials/author1.png"
                  alt="Author"
                />
              </div>
              <div className="title">
                <b>Jonah Sterling /</b> Homeowner
              </div>
            </div>
            <div className="author-text">
              Registering my ABN with Kwik Companies was the smoothest part of
              starting my business. Their platform is incredibly intuitive and
              the customer service team is always ready to help. A flawless
              experience!
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
          <div className="testimonial-item">
            <div className="author">
              <div className="image">
                <img
                  src="assets/images/testimonials/author2.png"
                  alt="Author"
                />
              </div>
              <div className="title">
                <b>Nicholas S. Moore /</b> Manager
              </div>
            </div>
            <div className="author-text">
              procrastinated on getting my ABN because I thought it would be a
              hassle. Kwik Companies proved me wrong. Their fast, simple service
              had me up and running faster than I thought possible. They truly
              make business easier."
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
          <div className="testimonial-item">
            <div className="author">
              <div className="image">
                <img
                  src="assets/images/testimonials/author3.png"
                  alt="Author"
                />
              </div>
              <div className="title">
                <b>Marco Valli /</b> Designer
              </div>
            </div>
            <div className="author-text">
              Kwik Companies exceeded my expectations with their speedy ABN
              registration process. Their professionalism and ease of use are
              perfect for anyone looking to get their business off the ground
              quickly. They have my wholehearted recommendation!
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
        </Slider>
        <Slider
          {...sliderProps.marqueeSliderLeft}
          className="marquee-slider-left testi-slider-left"
          dir="rtl"
        >
          <div className="testimonial-item">
            <div className="author">
              <div className="image">
                <img
                  src="assets/images/testimonials/author5.png"
                  alt="Author"
                />
              </div>
              <div className="title">
                <b>Joseph D. Tucker / </b> Consultant
              </div>
            </div>
            <div className="author-text">
              As a small business owner, I found the ABN registration process
              daunting. Kwik Companies turned it into a breeze, providing clear
              instructions and swift service. I was registered and ready to go
              in no time!
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
          <div className="testimonial-item">
            <div className="author">
              <div className="image">
                <img
                  src="assets/images/testimonials/author6.png"
                  alt="Author"
                />
              </div>
              <div className="title">
                <b>Wiley D. Swanson / </b> Businessman
              </div>
            </div>
            <div className="author-text">
              I needed to register my ABN quickly to start my freelance
              business, and Kwik Companies made the process incredibly
              straightforward. They lived up to their name with exceptional
              speed and efficiency. Highly recommended for any new business
              owner!
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
          <div className="testimonial-item">
            <div className="author">
              <div className="image">
                <img
                  src="assets/images/testimonials/author7.png"
                  alt="Author"
                />
              </div>
              <div className="title">
                <b>Steven J. Ung / </b> JR Manager
              </div>
            </div>
            <div className="author-text">
              I was amazed at how quick and easy Kwik Companies made the ABN
              registration. Their step-by-step guidance was perfect for someone
              like me who’s new to business. Their efficiency is unmatched!
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
        </Slider>
      </MediaQuery>
      <div className="flex justify-center mt-20">
        <a className="theme-btn">Read More Reviews</a>
      </div>
    </Fragment>
  );
};
export default TestimonialSlider;
