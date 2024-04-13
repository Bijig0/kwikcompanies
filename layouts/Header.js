"use client";
import useClickOutside from "@/utility/useClickOutside";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Accordion } from "react-bootstrap";

const Header = ({ header, onePage }) => {
  switch (header) {
    case 1:
      return <DefaultHeader onePage={onePage} />;
    case 2:
      return <Header2 onePage={onePage} />;
    case 3:
      return <Header3 onePage={onePage} />;
    case 4:
      return <Header4 onePage={onePage} />;
    case 5:
      return <Header5 onePage={onePage} />;
    case 6:
      return <Header6 onePage={onePage} />;
    case 7:
      return <Header7 onePage={onePage} />;
    case 8:
      return <Header8 onePage={onePage} />;
    case 9:
      return <Header9 onePage={onePage} />;
    case 10:
      return <HeaderNotFound />;

    default:
      return <DefaultHeader onePage={onePage} />;
  }
};
export default Header;

const DefaultHeader = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 8, href: "about", title: "about" },
    { id: 3, href: "services", title: "services" },
    { id: 2, href: "projects", title: "project" },
    { id: 5, href: "testimonials", title: "testimonials" },
    { id: 6, href: "blog", title: "blog" },
  ];
  return (
    <header className="main-header menu-absolute header-white no-border">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-15 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  logo="assets/images/logos/logo.png"
                  menus={menus}
                  onePage={onePage}
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search ms-xl-2 ms-4 py-10">
              <NavSearch />
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto d-none d-xl-flex">
              <Link href="contact" className="theme-btn">
                Get Started <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header2 = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 3, href: "services", title: "services" },
    { id: 8, href: "about", title: "about" },
    { id: 2, href: "pricing", title: "pricing" },
    { id: 5, href: "testimonials", title: "testimonials" },
    { id: 6, href: "blog", title: "blog" },
  ];
  return (
    <header className="main-header no-border">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1520 clearfix">
          <div className="header-inner py-15 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo2.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav onePage={onePage} menus={menus} />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search ms-xl-2 ms-4 me-lg-auto py-10">
              <NavSearch />
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto">
              <Link href="cantact" className="light-btn">
                Support
              </Link>
              <Link href="contact" className="theme-btn">
                Register <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header3 = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 2, href: "about", title: "about" },
    { id: 3, href: "services", title: "services" },
    { id: 4, href: "pricing", title: "pricing" },
    { id: 5, href: "testimonials", title: "testimonials" },
    { id: 6, href: "faqs", title: "faqs" },
  ];
  return (
    <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1520 clearfix">
          <div className="header-inner py-20 rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo3.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  onePage={onePage}
                  logo="assets/images/logos/logo3.png"
                  menus={menus}
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search ms-xl-2 ms-4 py-10">
              <NavSearch />
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto">
              <Link href="cantact" className="light-btn">
                Log in
              </Link>
              <Link href="contact" className="theme-btn style-two">
                Sign Up <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header4 = ({ onePage }) => {
  const onClick = () => {
    document.querySelector("body").classList.toggle("side-content-visible");
  };

  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 8, href: "about", title: "about" },
    { id: 3, href: "services", title: "services" },
    { id: 2, href: "projects", title: "project" },
    { id: 5, href: "testimonials", title: "testimonials" },
    { id: 6, href: "blog", title: "blog" },
  ];

  return (
    <Fragment>
      <header className="main-header style-two menu-absolute header-white no-border">
        {/*Header-Upper*/}
        <div className="header-upper py-15">
          <div className="container clearfix">
            <div className="header-inner py-10 rel d-flex align-items-center">
              {/* menu sidbar */}
              <div className="menu-sidebar">
                <button onClick={() => onClick()}>
                  <img src="assets/images/shapes/toggler.png" alt="menu" />
                </button>
              </div>
              <div className="main-logo mx-auto">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logos/logo4.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              {/* Menu Button */}
              <div className="header-btns">
                <Link href="cantact" className="light-btn">
                  Sign Up <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>

      <div className="form-back-drop" onClick={() => onClick()} />
      {/* Hidden Sidebar */}
      <div className="hidden-bar">
        <div className="sidebar-logo mt-25 mb-55 me-5 text-center">
          <Link href="/">
            <img src="assets/images/logos/logo4.png" alt="Logo" />
          </Link>
        </div>
        <div className="cross-icon" onClick={() => onClick()}>
          <span className="fa fa-times" />
        </div>
        <MobileMenu sidebar onePage menus={menus} />
      </div>
    </Fragment>
  );
};

const Header5 = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 2, href: "features", title: "features" },
    { id: 2, href: "about", title: "about" },
    { id: 3, href: "services", title: "services" },
    { id: 5, href: "testimonials", title: "testimonials" },
    { id: 6, href: "work-step", title: "work step" },
  ];
  return (
    <header className="main-header no-border">
      {/*Header-Top*/}
      <div className="header-top-wrap bgc-black">
        <div className="container container-1520">
          <div className="header-top">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-5">
                <div className="top-left text-center text-lg-start">
                  <ul>
                    <li>
                      <i className="flaticon-star" />{" "}
                      <span>Welcome to Our Saas Landing Akpager,</span> Have Any
                      Question? <Link href="contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="top-right text-center text-lg-end">
                  <ul>
                    <li>
                      <i className="fas fa-envelope" />{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" />{" "}
                      <a href="callto:+000(123)45688">+000 (123) 456 88</a>
                    </li>
                    <li>
                      <select name="language" id="language">
                        <option value="English">English</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Arabic">Arabic</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1520 clearfix">
          <div className="header-inner py-20 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo5.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  onePage={onePage}
                  logo="assets/images/logos/logo5.png"
                  menus={menus}
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search ms-xl-2 ms-4 me-lg-auto py-10">
              <NavSearch />
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto">
              <Link href="cantact" className="light-btn">
                Sign Up
              </Link>
              <Link href="contact" className="theme-btn">
                Get Started <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header6 = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 2, href: "features", title: "features" },
    { id: 8, href: "ai", title: "AI" },
    { id: 3, href: "statistics", title: "statistics" },
    { id: 6, href: "work-step", title: "work step" },
    { id: 5, href: "pricing", title: "pricing" },
  ];
  const onClick = () => {
    document.querySelector("body").classList.toggle("side-content-visible");
  };
  return (
    <Fragment>
      <header className="main-header menu-absolute no-border">
        {/*Header-Top*/}
        <div className="header-top-wrap bgc-primary">
          <div className="container container-1660">
            <div className="header-top">
              <div className="row align-items-center">
                <div className="col-xl-3 col-md-6">
                  <div className="top-left text-center text-md-start">
                    <ul>
                      <li>
                        {/* menu sidbar */}
                        <div className="menu-sidebar pb-1">
                          <button onClick={() => onClick()}>
                            <img
                              src="assets/images/shapes/toggler.png"
                              alt="menu"
                            />
                          </button>
                        </div>
                      </li>
                      <li>
                        <a href="mailto:support@gmail.com">
                          support@gmail.com <i className="fal fa-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-5 d-xl-block d-none">
                  <div className="top-middle text-center">
                    Recommend and receive 25% bonus discount on checkout.
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="top-right text-center text-md-end">
                    <ul>
                      <li>
                        <select name="language" id="language">
                          <option value="English">English</option>
                          <option value="Bengali">Bengali</option>
                          <option value="Arabic">Arabic</option>
                        </select>
                      </li>
                      <li>
                        <div className="social-icons">
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
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Header-Upper*/}
        <div className="header-upper">
          <div className="container container-1660 clearfix">
            <div className="header-inner py-20 rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logos/logo6.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer ms-lg-auto clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <Nav
                    onePage={onePage}
                    logo="assets/images/logos/logo6.png"
                    menus={menus}
                  />
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Nav Search */}
              <div className="nav-search ms-xl-2 ms-4 me-xl-auto py-10">
                <NavSearch />
              </div>
              {/* Menu Button */}
              <div className="menu-btns ms-lg-auto">
                <Link href="contact" className="theme-btn style-two">
                  Get Started <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <div className="form-back-drop" onClick={() => onClick()} />
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => onClick()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                onClick();
              }}
            >
              <div className="form-group">
                <input type="text" name="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
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
      </section>
    </Fragment>
  );
};

const Header7 = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 8, href: "about", title: "about" },
    { id: 2, href: "features", title: "features" },
    { id: 3, href: "pricing", title: "pricing" },
    { id: 6, href: "testimonials", title: "testimonials" },
    { id: 5, href: "faqs", title: "FAQs" },
  ];
  return (
    <header className="main-header menu-absolute no-border">
      {/* Start Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-20 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo5.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  onePage={onePage}
                  logo="assets/images/logos/logo5.png"
                  menus={menus}
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search ms-xl-2 ms-4 me-lg-auto py-10">
              <NavSearch />
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto">
              <Link href="cantact" className="light-btn">
                Log In
              </Link>
              <Link href="contact" className="theme-btn">
                Sign Up Free <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header8 = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 2, href: "features", title: "features" },
    { id: 8, href: "about", title: "about" },
    { id: 3, href: "services", title: "services" },
    { id: 5, href: "faqs", title: "FAQs" },
    { id: 6, href: "testimonials", title: "testimonials" },
  ];
  return (
    <header className="main-header menu-absolute no-border">
      {/* Start Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-20 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo8.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  onePage={onePage}
                  logo="assets/images/logos/logo8.png"
                  menus={menus}
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search ms-xl-2 ms-4 me-lg-auto py-10">
              <NavSearch />
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto">
              <Link href="cantact" className="light-btn">
                Sign Up
              </Link>
              <Link href="contact" className="theme-btn">
                Get Started <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
const Header9 = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 3, href: "services", title: "services" },
    { id: 8, href: "about", title: "about" },
    { id: 2, href: "featuers", title: "featuers" },
    { id: 6, href: "pricing", title: "pricing" },
    { id: 5, href: "testimonials", title: "testimonials" },
  ];
  return (
    <header className="main-header menu-absolute no-border">
      {/* Start Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-20 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo6.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-5 ps-lg-5 clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  onePage={onePage}
                  logo="assets/images/logos/logo6.png"
                  dark={true}
                  menus={menus}
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search ms-xl-2 ms-4 me-lg-auto py-10">
              <NavSearch />
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto">
              <Link href="cantact" className="light-btn">
                Sign Up
              </Link>
              <Link href="contact" className="theme-btn style-two">
                Get Started <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const HeaderNotFound = ({ onePage }) => {
  return (
    <header className="main-header menu-absolute no-border">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-15 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo6.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav onePage={onePage} logo="assets/images/logos/logo6.png" />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search ms-xl-2 ms-4 py-10">
              <NavSearch />
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto d-none d-xl-flex">
              <Link href="contact" className="theme-btn">
                Get Started <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Nav = ({
  logo = "assets/images/logos/logo2.png",
  dark,
  onePage,
  menus,
}) => {
  return (
    <Fragment>
      <div className="d-none d-lg-flex desktop-menu">
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link href="/">
              <img src={logo} alt="Logo" title="Logo" />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
          </Accordion.Toggle>
        </div>
        <div eventKey="navbar-collapse" className="navbar-collapse clearfix">
          {onePage ? (
            <ul className="navigation onepage clearfix">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <a href={`#${menu.href}`}>{menu.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="navigation clearfix ">
              <li className="dropdown">
                <a href="#">Home</a>
                <ul>
                  <li className="dropdown">
                    <a href="#">MultiPage</a>
                    <ul>
                      <li>
                        <Link href="/">Business</Link>
                      </li>
                      <li>
                        <Link href="index2">Lead Capture</Link>
                      </li>
                      <li>
                        <Link href="index3">Software Landing</Link>
                      </li>
                      <li>
                        <Link href="index4">E-learning</Link>
                      </li>
                      <li>
                        <Link href="index5">Saas Landing</Link>
                      </li>
                      <li>
                        <Link href="index6">AI Software</Link>
                      </li>
                      <li>
                        <Link href="index7">Website Builder</Link>
                      </li>
                      <li>
                        <Link href="index8">Fintech</Link>
                      </li>
                      <li>
                        <Link href="index9">Chatbot</Link>
                      </li>
                    </ul>
                    <div className="dropdown-btn">
                      <span className="far fa-angle-down" />
                    </div>
                  </li>
                  <li className="dropdown">
                    <a href="#">OnePage</a>
                    <ul>
                      <li>
                        <Link href="index1-onepage">Business</Link>
                      </li>
                      <li>
                        <Link href="index2-onepage">Lead Capture</Link>
                      </li>
                      <li>
                        <Link href="index3-onepage">Software Landing</Link>
                      </li>
                      <li>
                        <Link href="index4-onepage">E-learning</Link>
                      </li>
                      <li>
                        <Link href="index5-onepage">Saas Landing</Link>
                      </li>
                      <li>
                        <Link href="index6-onepage">AI Software</Link>
                      </li>
                      <li>
                        <Link href="index7-onepage">Website Builder</Link>
                      </li>
                      <li>
                        <Link href="index8-onepage">Fintech</Link>
                      </li>
                      <li>
                        <Link href="index9-onepage">Chatbot</Link>
                      </li>
                    </ul>
                    <div className="dropdown-btn">
                      <span className="far fa-angle-down" />
                    </div>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">pages</a>
                <ul>
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                  <li>
                    <Link href="faqs">faqs</Link>
                  </li>
                  <li>
                    <Link href="team">Team Members</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact us</Link>
                  </li>
                  <li>
                    <Link href="sign-in">Sign In</Link>
                  </li>
                  <li>
                    <Link href="sign-up">Sign Up</Link>
                  </li>
                  <li>
                    <Link href="coming-soon">Coming Soon</Link>
                  </li>
                  <li>
                    <Link href="404">404 error</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Services</a>
                <ul>
                  <li>
                    <Link href="services">Our Services</Link>
                  </li>
                  <li>
                    <Link href="service-details">Service Details</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Shop</a>
                <ul>
                  <li>
                    <Link href="shop">our Products</Link>
                  </li>
                  <li>
                    <Link href="product-details">Product Details</Link>
                  </li>
                  <li>
                    <Link href="cart">Shopping Cart</Link>
                  </li>
                  <li>
                    <Link href="checkout">Checkout</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">Projects</a>
                <ul>
                  <li>
                    <Link href="projects">Project Grid</Link>
                  </li>
                  <li>
                    <Link href="project-list">Project List</Link>
                  </li>
                  <li>
                    <Link href="project-masonry">Project Masonry</Link>
                  </li>
                  <li>
                    <Link href="project-details">Project Details</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">blog</a>
                <ul>
                  <li>
                    <Link href="blog">blog standard</Link>
                  </li>
                  <li>
                    <Link href="blog-details">blog details</Link>
                  </li>
                </ul>
                <div className="dropdown-btn">
                  <span className="far fa-angle-down" />
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
      <Accordion defaultActiveKey="0" className="d-block d-lg-none mobile-menu">
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link href="/">
              <img src={logo} alt="Logo" title="Logo" />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
            <span className={`icon-bar ${dark ? "bg-dark" : ""}`} />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="navbar-collapse"
          className="navbar-collapse clearfix"
        >
          <MobileMenu onePage={onePage} menus={menus} />
        </Accordion.Collapse>
      </Accordion>
    </Fragment>
  );
};

const NavSearch = () => {
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });
  return (
    <Fragment>
      <button className="far fa-search" onClick={() => setToggle(true)} />
      <form
        action="#"
        className={toggle ? "" : "hide"}
        onSubmit={(e) => {
          e.preventDefault();
          setToggle(false);
        }}
        ref={domNode}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required=""
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </Fragment>
  );
};

const MobileMenu = ({ sidebar, onePage, menus }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      {onePage ? (
        <ul
          className={`${
            sidebar ? "sidebar-menu" : "navigation"
          } onepage clearfix`}
        >
          {menus.map((menu) => (
            <li key={menu.id}>
              <a href={`#${menu.href}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={`${sidebar ? "sidebar-menu" : "navigation"} clearfix`}>
          <li className="dropdown">
            <a href="#">Home</a>
            <ul style={activeLi("home")}>
              <li className="dropdown">
                <a href="#">MultiPage</a>
                <ul style={multiMenuActiveLi("multiPage")}>
                  <li>
                    <Link href="/">Business</Link>
                  </li>
                  <li>
                    <Link href="index2">Lead Capture</Link>
                  </li>
                  <li>
                    <Link href="index3">Software Landing</Link>
                  </li>
                  <li>
                    <Link href="index4">E-learning</Link>
                  </li>
                  <li>
                    <Link href="index5">Saas Landing</Link>
                  </li>
                  <li>
                    <Link href="index6">AI Software</Link>
                  </li>
                  <li>
                    <Link href="index7">Website Builder</Link>
                  </li>
                  <li>
                    <Link href="index8">Fintech</Link>
                  </li>
                  <li>
                    <Link href="index9">Chatbot</Link>
                  </li>
                </ul>
                <div
                  className="dropdown-btn"
                  onClick={() => multiMenuSet("multiPage")}
                >
                  <span className="far fa-angle-down" />
                </div>
              </li>
              <li className="dropdown">
                <a href="#">OnePage</a>
                <ul style={multiMenuActiveLi("OnePage")}>
                  <li>
                    <Link href="index1-onepage">Business</Link>
                  </li>
                  <li>
                    <Link href="index2-onepage">Lead Capture</Link>
                  </li>
                  <li>
                    <Link href="index3-onepage">Software Landing</Link>
                  </li>
                  <li>
                    <Link href="index4-onepage">E-learning</Link>
                  </li>
                  <li>
                    <Link href="index5-onepage">Saas Landing</Link>
                  </li>
                  <li>
                    <Link href="index6-onepage">AI Software</Link>
                  </li>
                  <li>
                    <Link href="index7-onepage">Website Builder</Link>
                  </li>
                  <li>
                    <Link href="index8-onepage">Fintech</Link>
                  </li>
                  <li>
                    <Link href="index9-onepage">Chatbot</Link>
                  </li>
                </ul>
                <div
                  className="dropdown-btn"
                  onClick={() => multiMenuSet("OnePage")}
                >
                  <span className="far fa-angle-down" />
                </div>
              </li>
            </ul>
            <div className="dropdown-btn" onClick={() => activeMenuSet("home")}>
              <span className="far fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">pages</a>
            <ul style={activeLi("pages")}>
              <li>
                <Link href="about">About Us</Link>
              </li>
              <li>
                <Link href="faqs">faqs</Link>
              </li>
              <li>
                <Link href="team">Team Members</Link>
              </li>
              <li>
                <Link href="pricing">Pricing Plan</Link>
              </li>
              <li>
                <Link href="contact">Contact us</Link>
              </li>
              <li>
                <Link href="sign-in">Sign In</Link>
              </li>
              <li>
                <Link href="sign-up">Sign Up</Link>
              </li>
              <li>
                <Link href="coming-soon">Coming Soon</Link>
              </li>
              <li>
                <Link href="404">404 error</Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => activeMenuSet("pages")}
            >
              <span className="far fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Services</a>
            <ul style={activeLi("Services")}>
              <li>
                <Link href="services">Our Services</Link>
              </li>
              <li>
                <Link href="service-details">Service Details</Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => activeMenuSet("Services")}
            >
              <span className="far fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Shop</a>
            <ul style={activeLi("Shop")}>
              <li>
                <Link href="shop">our Products</Link>
              </li>
              <li>
                <Link href="product-details">Product Details</Link>
              </li>
              <li>
                <Link href="cart">Shopping Cart</Link>
              </li>
              <li>
                <Link href="checkout">Checkout</Link>
              </li>
            </ul>
            <div className="dropdown-btn" onClick={() => activeMenuSet("Shop")}>
              <span className="far fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">Projects</a>
            <ul style={activeLi("Projects")}>
              <li>
                <Link href="projects">Project Grid</Link>
              </li>
              <li>
                <Link href="project-list">Project List</Link>
              </li>
              <li>
                <Link href="project-masonry">Project Masonry</Link>
              </li>
              <li>
                <Link href="project-details">Project Details</Link>
              </li>
            </ul>
            <div
              className="dropdown-btn"
              onClick={() => activeMenuSet("Projects")}
            >
              <span className="far fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="#">blog</a>
            <ul style={activeLi("blog")}>
              <li>
                <Link href="blog">blog standard</Link>
              </li>
              <li>
                <Link href="blog-details">blog details</Link>
              </li>
            </ul>
            <div className="dropdown-btn" onClick={() => activeMenuSet("blog")}>
              <span className="far fa-angle-down" />
            </div>
          </li>
        </ul>
      )}
    </Fragment>
  );
};
