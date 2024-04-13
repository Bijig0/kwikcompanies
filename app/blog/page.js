import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"Blog Standard"} />
      <section className="blog-standard-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-wrap">
                <div
                  className="blog-standard-item"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard1.png"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <ul className="blog-meta">
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
                    <h3>
                      <Link href="blog-details">
                        Achieving Fashion Elegant Design Runway Life
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus sit voluptatem
                      accusantium doloremque laudantium eaque ipsa quae abillo
                      inventore veritatis et quasi architecto beatae
                    </p>
                    <Link href="/blog-details" className="theme-btn style-two">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <blockquote
                  className="blockquote-three bgc-lighter mb-50"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="text">
                    Remote work made easy way better tools Section Bonorum et
                    Malorum
                  </div>
                  <h5 className="name">Michael A. Jenkins</h5>
                  <span className="designation">CEO &amp; Founder</span>
                </blockquote>
                <div
                  className="blog-standard-item"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard2.png"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <ul className="blog-meta">
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
                    <h3>
                      <Link href="blog-details">
                        Achieving Fashion Elegant Design Runway Life
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus sit voluptatem
                      accusantium doloremque laudantium eaque ipsa quae abillo
                      inventore veritatis et quasi architecto beatae
                    </p>
                    <Link href="/blog-details" className="theme-btn style-two">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <blockquote
                  className="blockquote-three bgc-primary text-white mb-50"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="text">
                    Remote work made easy way better tools Section Bonorum et
                    Malorum
                  </div>
                  <h5 className="name">Michael A. Jenkins</h5>
                  <span className="designation">CEO &amp; Founder</span>
                </blockquote>
                <div
                  className="blog-standard-item"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img
                      src="assets/images/blog/blog-standard3.png"
                      alt="Blog"
                    />
                  </div>
                  <div className="content">
                    <ul className="blog-meta">
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
                    <h3>
                      <Link href="blog-details">
                        Achieving Fashion Elegant Design Runway Life
                      </Link>
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus sit voluptatem
                      accusantium doloremque laudantium eaque ipsa quae abillo
                      inventore veritatis et quasi architecto beatae
                    </p>
                    <Link href="/blog-details" className="theme-btn style-two">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <ul className="pagination mt-25 flex-wrap">
                  <li className="page-item disabled">
                    <span className="page-link">
                      <i className="fas fa-angle-left" />
                    </span>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">
                      1<span className="sr-only">(current)</span>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fas fa-angle-right" />
                    </a>
                  </li>
                </ul>
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
                  <Link href="/contact" className="theme-btn">
                    Contact Us <i className="fas fa-angle-double-right" />
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
