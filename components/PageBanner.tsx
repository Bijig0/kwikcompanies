import Link from "next/link";

type Props = {
  pageTitle?: string;
  pageName?: string;
  titleTag?: string;
};

const PageBanner = (props: Props) => {
  const { pageTitle, pageName, titleTag } = props;
  return (
    <section
      className="page-banner-area overlay py-250 rpy-120 rel z-1 bgs-cover text-center"
      style={{ backgroundImage: "url(assets/images/backgrounds/banner.jpg)" }}
    >
      <div className="container">
        <div className="banner-inner pt-70 rpt-60 text-white">
          <div
            className="page-title"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            {pageTitle ? pageTitle : pageName}
          </div>
          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb justify-content-center"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
