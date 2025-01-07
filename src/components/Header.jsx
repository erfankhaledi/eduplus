import React, { useState } from "react";
import logo3 from "../assets/img/logo/logo3.svg";
import logo1 from "../assets/img/logo/Logo.svg"
import ExpandableMenuItem from "./HomeMenu";
import ExpandableCourseMenuItem from "./CoursesMenu";
import ExpandablePagesMenuItem from "./PagesMenu";
import ExpandableBlogMenuItem from "./BlogMenu";

export default function Header() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <header className="nav-header header-layout2">
      <div className="header-two-top-area">
        <div className="container ">
          <div className="header-top-content v2">
            <ul className="contact-info">
              <li>
                <i className="bi bi-telephone-fill my-icon icon-call-us"></i>
                <p className="para">Have any Question?</p>
              </li>
              <li>
                <i className="fa fa-envelope my-icon icon-message" style={{ fontSize: '15px' }}></i>
                <p className="para">Mail Us: info@edupls.com</p>
              </li>
              <li>
                <i className="bi bi-clock-fill my-icon icon-time-hour" style={{ fontSize: '13px' }}></i>
                <p className="para">Mon - Fri: 8:00AM - 6:00PM</p>
              </li>
            </ul>
            <div className="follow-us-link">
              <div className="para">Follow Us On: </div>
              <div className="follow-icon">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </div>
              <div className="follow-icon">
                <a href="#">
                  <i className="bi bi-twitter my-icon icon-twitter" style={{ fontSize: '15px' }}></i>
                </a>
              </div>
              <div className="follow-icon">
                <a href="#">
                  <i className="bi bi-instagram my-icon icon-instagram" style={{ fontSize: '15px' }}></i>
                </a>
              </div>
              <div className="follow-icon">
                <a href="#">
                  <i className="bi bi-behance my-icon icon-be" style={{ fontSize: '20px' }}></i>
                </a>
              </div>
              <div className="follow-icon">
                <a href="#">
                  <i className="bi bi-youtube my-icon icon-youtube" style={{ fontSize: '20px' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container">
            <div className="menu-area-content">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="index.html">
                      <img src={logo3} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <a href="#">
                          Home
                          <i className="bi bi-chevron-down" style={{ marginLeft: '5px' }}></i> 
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="index.html">Home One</a>
                            <a href="index-2.html">Home Two</a>
                            <a href="index-3.html">Home Three</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about-us.html">
                          About Us
                        </a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          Courses
                          <i className="bi bi-chevron-down" style={{ marginLeft: '5px' }}></i> 
                        </a>
                        <ul className="sub-menu">
                          <li><a href="courses-grid.html">Courses Grid</a></li>
                          <li><a href="courses-list.html">Courses list</a></li>
                          <li><a href="courses-details.html">Courses Details</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          Pages
                          <i className="bi bi-chevron-down" style={{ marginLeft: '5px' }}></i> 
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="pricing-plan.html">
                              Pricing Plan
                            </a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="team.html">
                              Team
                            </a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="event.html">Event</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="event-details.html">Event Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          Blog
                          <i className="bi bi-chevron-down" style={{ marginLeft: '5px' }}></i> 
                        </a>
                        <ul className="sub-menu">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-auto">
                  <div className="menu-area-right-content">
                    <div className="header-login-regi">
                      <a href="login.html">
                        <i className="bi bi-person-fill my-icon" style={{ fontSize: '20px' }}></i>
                      </a>
                    </div>

                    <div className="search-option-box">
                      <input type="text" placeholder="Search..." />
                      <div className="search">
                        <i className="bi bi-search my-icon"></i>
                      </div>
                      <i className="fa-solid fa-x close-icon"></i>
                    </div>
                    <div className="all-btn">
                      <a href="contact.html" className="btn-p v1 btn-blue rounded icon-v1 d-flex align-items-center">
                        Apply Now
                        <i className="bi bi-arrow-right-short" style={{ fontSize: '30px', marginLeft: '10px' }}></i>
                      </a>
                    </div>
                  </div>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button type="button" className="menu-toggle" onClick={toggleMobileMenu}>
                      <i className="my-icon icon-all"></i>
                      <i className="fa fa-bars my-icon icon-all" style={{ fontSize: '28px' }}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`mobile-menu-wrapper ${isMobileMenuVisible ? 'body-visible' : ''}`}>
        <div className="mobile-menu-area text-center">
          <button className="menu-toggle" onClick={toggleMobileMenu}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <div className="mobile-logo">
            <a href="index.html">
              <img src={logo1} alt="Edupls-logo" />
            </a>
          </div>
          <div className="mobile-menu">
            <ul>
              {/* HOME (Home1) (Home2) and etc */}
              <ExpandableMenuItem />
              {/* About */}
              <li className="menu-item-has-children">
                <a href="about-us.html">About</a>
              </li>
              {/* Courses */}
              <ExpandableCourseMenuItem />
              {/* pages */}
              <ExpandablePagesMenuItem />
              {/* Blog */}
              <ExpandableBlogMenuItem />
              {/* Contact */}
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

