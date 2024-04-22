"use client";
import { sliderProps } from "@utils/sliderProps";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
const TestimonialSlider = () => {
  return (
    <div className="relative">
      <Slider
        {...sliderProps.marqueeSliderRight}
        className="marquee-slider-right testi-slider-right"
      >
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author1.png" alt="Author" />
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
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author2.png" alt="Author" />
            </div>
            <div className="title">
              <b>Nicholas S. Moore /</b> Manager
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
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author3.png" alt="Author" />
            </div>
            <div className="title">
              <b>Mark S. Dearing /</b> Designer
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
      </Slider>
      <Button className="theme-btn absolute bottom-[300px] left-1/2 -translate-x-1/2">
        Read More Reviews
      </Button>
    </div>
  );
};
export default TestimonialSlider;
