import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";
const page = () => {
  return (
    <AkpagerLayout>
      <section
        className="page-banner-area overlay py-250 rpy-120 rel z-1 bgs-cover text-center"
        style={{ backgroundImage: "url(assets/images/backgrounds/banner.jpg)" }}
      >
        <div className="container">
          <div className="banner-inner pt-70 rpt-60 text-white">
            <h2
              className="page-title"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              Achieving Fashion Elegant Design Runway Life
            </h2>
            <ul
              className="blog-meta"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <li>
                <a className="category" href="#">
                  SEO Camping
                </a>
              </li>
              <li>
                <img src="assets/images/blog/author.png" alt="Author" />{" "}
                <a href="#">Matthew</a>
              </li>
              <li>
                <i className="far fa-calendar-alt" />{" "}
                <a href="#">September 20, 2023</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <div className="blog-details-content">
                  <div
                    className="image mb-30"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/blog/blog-standard1.png"
                      alt="Blog"
                    />
                  </div>
                  <h3>Elegant Design Runway to Real Life</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet <br />
                    consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur? Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur
                  </p>
                  <blockquote
                    className="blockquote-two bgc-lighter my-40"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="text">
                      Handling Mounting And Unmounting Of Given Navigation
                      Routes In React Native
                    </div>
                    <span className="blockquote-footer">Johnny M. Martin</span>
                  </blockquote>
                  <h3>Get Your Service to Improve Business</h3>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam
                  </p>
                  <div className="tag-share pt-15 pb-40">
                    <div
                      className="item"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <b>Tags </b>
                      <div className="tag-coulds">
                        <Link href="blog">Marketing</Link>
                        <Link href="blog">Product</Link>
                        <Link href="blog">Social Media</Link>
                      </div>
                    </div>
                    <div
                      className="item"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <b>Share </b>
                      <div className="social-style-one">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div
                  className="admin-comment bgc-lighter mt-60"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/admin-author.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <h5>Richard M. Fudge</h5>
                      <p>
                        We denounce with righteous indignation and dislike men
                        ways to beguiled demoralized by the charms of pleasure
                      </p>
                      <div className="social-icons">
                        <Link href="contact">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="contact">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="contact">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link href="contact">
                          <i className="fab fa-instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="next-prev-blog pt-60 pb-40">
                  <div
                    className="item"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/widget/news4.jpg" alt="News" />
                    </div>
                    <div className="content">
                      <span className="date">September 20, 2023</span>
                      <h6>
                        <Link href="blog-details">
                          Achieving Fashion Elegant se Runway to Real Life
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div
                    className="item"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img src="assets/images/widget/news5.jpg" alt="News" />
                    </div>
                    <div className="content">
                      <span className="date">September 20, 2023</span>
                      <h6>
                        <Link href="blog-details">
                          Achieving Fashion Elegant se Runway to Real Life
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <h4 className="comment-title mb-20">Comments</h4>
                <div className="comments">
                  <div
                    className="comment-body"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/comment-author1.png"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <ul className="comment-header">
                        <li>
                          <h6>William L. Jackson</h6>
                        </li>
                        <li>
                          <a href="#">Sep 25, 2023</a>
                        </li>
                      </ul>
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse molestiae consequatur qui dolorem
                        eum fugiat voluptas
                      </p>
                      <a className="read-more" href="#">
                        Reply <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="comment-body comment-child"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/comment-author2.png"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <ul className="comment-header">
                        <li>
                          <h6>James M. Stovall</h6>
                        </li>
                        <li>
                          <a href="#">February 25, 2024</a>
                        </li>
                      </ul>
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse molestiae consequatur qui dolorem
                        eum fugiat voluptas
                      </p>
                      <a className="read-more" href="#">
                        Reply <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <form
                  id="comment-form"
                  className="comment-form br-15 bgc-lighter mt-75"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  name="comment-form"
                  action="#"
                  method="post"
                >
                  <h4>Leave a Reply</h4>
                  <div className="row mt-30">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="full-name"
                          name="full-name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Full Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="blog-phone"
                          name="blog-phone"
                          className="form-control"
                          defaultValue=""
                          placeholder="Phone"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          id="blog-email"
                          name="blog-email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Comments"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Comments <i className="far fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="main-sidebar rmt-75">
                <div
                  className="widget widget-search"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">Search</h5>
                  <form action="#" className="default-search-form">
                    <input type="text" placeholder="Keywords" required="" />
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
                <div
                  className="widget widget-category"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">Category</h5>
                  <ul>
                    <li>
                      <Link href="blog">
                        Marketing <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        SEO optimization <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        Content Marketing <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        Keywords Research <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        Technical Adult <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-recent-news"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Recent News</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img src="assets/images/widget/news1.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <span className="date">September 20, 2023</span>
                        <h6>
                          <Link href="blog-details">
                            Achieving Fashion Elegant se Runway to Real Life
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widget/news2.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <span className="date">September 20, 2023</span>
                        <h6>
                          <Link href="blog-details">
                            Achieving Fashion Elegant se Runway to Real Life
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widget/news3.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <span className="date">September 20, 2023</span>
                        <h6>
                          <Link href="blog-details">
                            Achieving Fashion Elegant se Runway to Real Life
                          </Link>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-tag-cloud"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-coulds">
                    <Link href="blog">Marketing</Link>
                    <Link href="blog">Product</Link>
                    <Link href="blog">Social Media</Link>
                    <Link href="blog">SEO Optimize</Link>
                    <Link href="blog">Content</Link>
                    <Link href="blog">Design</Link>
                  </div>
                </div>
                <div
                  className="widget widget-cta"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h3>Boost your Digital Product marketing?</h3>
                  <Link href="contact" className="theme-btn">
                    Contact Us <i className="far fa-arrow-right" />
                  </Link>
                  <div className="man">
                    <img src="assets/images/widget/cta-man.png" alt="CTA" />
                  </div>
                  <div
                    className="bg bgs-cover"
                    style={{
                      backgroundImage: "url(assets/images/widget/cta-bg.png)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};
export default page;
