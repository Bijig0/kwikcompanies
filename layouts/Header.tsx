"use client";
import useClickOutside from "@utils/useClickOutside";
import { Urls } from "app/types/urls";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Accordion } from "react-bootstrap";

const Header = ({ header, onePage }) => {
  return <DefaultHeader onePage={onePage} />;
};
export default Header;

const DefaultHeader = ({ onePage }) => {
  const menus = [
    {
      id: 1,
      href: "/#services:~:text=Register%20an%20ABN%20in%20under%2015%20minutes%20for%20just%20%2449",
      title: "Home",
    },
    {
      id: 2,
      href: "/#/#services:~:text=Start%20your%20dream%20business%20today",
      title: "Features",
    },
    {
      id: 3,
      href: "/#services:~:text=Regular%20Free%20Registation-,1253%2B%20Global%20Clients%20Say%20About%20Our%20Business%20Services,4.7/5%20on%20Trustpilot,-Read%20More%20Reviews",
      title: "Testimonials",
    },

    {
      id: 4,
      href: "/#services:~:text=ATO%20Authorised%20Agent%20Service%20Fees",
      title: "Pricing",
    },
  ];
  return (
    <header className="main-header menu-absolute header-white no-border">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container clearfix container-1660">
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
            <div className="clearfix nav-outer ms-lg-auto">
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
            <div className="py-10 nav-search ms-xl-2 ms-4">
              <NavSearch />
            </div>
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto d-none d-xl-flex">
              <Link href={Urls["Choose Structure"]} className="theme-btn">
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
        <div className="py-10 navbar-header">
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
        <div eventKey="navbar-collapse" className="clearfix navbar-collapse">
          {onePage ? (
            <ul className="clearfix navigation onepage">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <a href={`#${menu.href}`}>{menu.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="clearfix navigation ">
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
        <div className="py-10 navbar-header">
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
          className="clearfix navbar-collapse"
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
