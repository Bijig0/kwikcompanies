import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
const Page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"Contact Us"} />
      {/* Contact Page Start */}
      <section className="contact-page py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="contact-info-part">
                <div
                  className="section-title mb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h2>Feel Free to Contact Us, Get In Touch</h2>
                  <p>
                    We're here to assist you in any way we can. Whether you have
                    questions, feedback, or just want to say hello
                  </p>
                </div>
                <div
                  className="contact-info-item style-two"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <span className="title">Location</span>
                    <span className="text">
                      55 Main Street, 2nd block Melbourne, Australia
                    </span>
                  </div>
                </div>
                <div
                  className="contact-info-item style-two"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="icon">
                    <i className="far fa-envelope-open-text" />
                  </div>
                  <div className="content">
                    <span className="title">Email Address</span>
                    <span className="text">
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </span>
                  </div>
                </div>
                <div
                  className="contact-info-item style-two"
                  data-aos="fade-up"
                  data-aos-delay={150}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="icon">
                    <i className="fal fa-phone-volume" />
                  </div>
                  <div className="content">
                    <span className="title">Make A Call</span>
                    <span className="text">
                      <a href="calto:+000(123)456889">+000 (123) 456 889</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="contact-form br-10 bgc-lighter rmt-60"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                >
                  <img
                    className="shape-one"
                    src="assets/images/shapes/star-yellow-shape.png"
                    alt="Star Shape"
                  />
                  <img
                    className="shape-two"
                    src="assets/images/shapes/star-black-shape.png"
                    alt="Star Shape"
                  />
                  <h5>Send Us Message</h5>
                  <p>
                    Questions or you would just like to say hello, contact us.
                  </p>
                  <div className="row mt-30">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Somaia D. Silva"
                          required={false}
                          data-error="Please enter your Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="support@gmail.com"
                          required={false}
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          defaultValue=""
                          placeholder="I like to discussed"
                          required={false}
                          data-error="Please enter your Subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Write Message"
                          required={false}
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Us Message <i className="far fa-arrow-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Page End */}
      {/* Location Map Area Start */}
      <div className="contact-page-map">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Location Map Area End */}
    </AkpagerLayout>
  );
};
export default Page;
