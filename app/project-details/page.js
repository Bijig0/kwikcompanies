import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner
        pageName={"Project Details"}
        pageTitle={"Digital Product Design & Branding"}
        titleTag="h2"
      />
      {/* Project Details Area Start */}
      <section className="project-details-area pt-130 rpt-100 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div
                className="project-details-content pb-30"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <span className="subtitle-one mb-10 p-0 shadow-none">
                    Design, Branding
                  </span>
                  <h2>Introduction Of Projects Overview</h2>
                </div>
                <div className="row mb-20">
                  <div className="col-xl-10">
                    <p>
                      Designing a digital product and branding project involves
                      several key steps and considerations to create a
                      successful and cohesive user experience. Below is an
                      overview of the project details and the typical steps
                      involved
                    </p>
                  </div>
                </div>
                <h5>Project Initiation</h5>
                <ul className="icon-list mt-20 mb-35">
                  <li>
                    <i className="fal fa-check" /> Define the project scope,
                    goals, and objectives
                  </li>
                  <li>
                    <i className="fal fa-check" /> Identify the target audience
                    and market research.
                  </li>
                  <li>
                    <i className="fal fa-check" /> Determine the budget,
                    timeline, and available resources.
                  </li>
                </ul>
                <h5>Project Initiation</h5>
                <ul className="icon-list mt-20 mb-35">
                  <li>
                    <i className="fal fa-check" /> Conduct user research to
                    understand the needs and preferences of the target audience
                  </li>
                  <li>
                    <i className="fal fa-check" /> Analyze competitors and
                    industry trends.
                  </li>
                  <li>
                    <i className="fal fa-check" /> Create user personas and user
                    journeys to guide design decisions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="project-details-info rmb-55"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h5>Project Information's</h5>
                <hr className="mb-30" />
                <table>
                  <tbody>
                    <tr>
                      <td>Clients</td>
                      <td>
                        <b>Ross M. Evans</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>
                        <b>Design &amp; Branding</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>
                        <b>September, 2023</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>
                        <b>USA</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Duration</td>
                      <td>
                        <b>2 month</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="project-share mt-20">
                  <h5>Project Share</h5>
                  <div className="social-style-one">
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
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="image mb-30"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/projects/project-details1.png"
                  alt="Project Details"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="image mb-30"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/projects/project-details2.png"
                  alt="Project Details"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="project-details-content mt-15"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h5>Branding</h5>
                <ul className="icon-list mt-20 mb-35">
                  <li>
                    <i className="fal fa-check" /> Develop or refine the brand
                    identity, including logo, colors, typography, and brand
                    guidelines.
                  </li>
                  <li>
                    <i className="fal fa-check" /> Ensure the brand reflects the
                    values and messaging of the product
                  </li>
                </ul>
                <h5>User Experience (UX) Design:</h5>
                <p>
                  Throughout the project, effective communication and
                  collaboration among the project team members, including
                  designers, developers, marketers, and stakeholders, are
                  crucial for its success. Regular reviews and feedback loops
                  should be established to ensure that the digital product and
                  branding align with the project's goals and objectives.
                </p>
                <ul className="icon-list mt-25 mb-35">
                  <li>
                    <i className="fal fa-check" /> Create wireframes and
                    prototypes to visualize the product's layout and
                    functionality
                  </li>
                  <li>
                    <i className="fal fa-check" /> Design the user interface
                    (UI) based on the wireframes, incorporating the brand
                    identity.
                  </li>
                  <li>
                    <i className="fal fa-check" /> Conduct usability testing to
                    refine the design and user flow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Details Area End */}
      {/* Related Projects Area Start */}
      <section className="related-project-area py-85 rpy-55">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-9 col-lg-11">
              <div
                className="section-title mb-60"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Related Projects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 item design">
              <div
                className="project-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid7.jpg"
                    alt="Project Grid"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="project-details">Digital Product Design</Link>
                  </h5>
                  <span className="category">Design, Branding</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 item marketing seo">
              <div
                className="project-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid2.jpg"
                    alt="Project Grid"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="project-details">Website Development</Link>
                  </h5>
                  <span className="category">Design, Branding</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 item seo design">
              <div
                className="project-item"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/projects/project-grid9.jpg"
                    alt="Project Grid"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="project-details">Digital Product Design</Link>
                  </h5>
                  <span className="category">Design, Branding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Projects Area End */}
    </AkpagerLayout>
  );
};
export default page;
