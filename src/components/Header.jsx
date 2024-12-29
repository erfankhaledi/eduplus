import React from "react";
import logo3 from "../assets/img/logo/logo3.svg"

export default function Header(){
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
                <i className="bi bi-facebook my-icon icon-facebook"></i>
            </a>
          </div>
            
            <div className="follow-icon">
                <a href="#">
                    <i className="bi bi-twitter my-icon icon-twitter"></i>
                </a>
            </div>
            <div className="follow-icon">
                <a href="#">
                    <i className="bi bi-instagram my-icon icon-instagram"></i>
                </a>
            </div>
            <div className="follow-icon">
                <a href="#">
                    <i className="bi bi-behance my-icon icon-be"></i>
                </a>
            </div>
            <div className="follow-icon">
                <a href="#">
                    <i className="bi bi-youtube my-icon icon-youtube"></i>
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
                    <i className="my-icon icon-user"></i>
                  </a>
                </div>

                <div className="search-option-box">
                  <input type="text" placeholder="Search..." />
                  <div className="search">
                    <i className="my-icon icon-search"></i>
                  </div>
                  <i className="fa-solid fa-x close-icon"></i>
                </div>
                <div className="all-btn">
                  <a href="contact.html" className="btn-p v1 btn-blue rounded icon-v1">
                    Apply Now
                  </a>
                </div>
              </div>
              <div className="navbar-right d-inline-flex d-lg-none">
                <button type="button" className="menu-toggle">
                  <i className="my-icon icon-all"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="mobile-menu-wrapper">
    <div className="mobile-menu-area text-center">
      <button className="menu-toggle"><i className="fa-solid fa-xmark"></i></button>
      <div className="mobile-logo">
        <a href="index.html"><img src="assets/img/logo/Logo.svg" alt="Edupls-logo" /></a>
      </div>
      <div className="mobile-menu">
        <ul>
          <li className="menu-item-has-children">
            <a title="New Demo" href="#">Home</a>
            <ul className="sub-menu">
              <li className="menu-item-has-children">
                <a href="index.html">Home One</a>
              </li>
              <li className="menu-item-has-children">
                <a href="index-2.html">Home Two</a>
              </li>
              <li className="menu-item-has-children">
                <a href="index-3.html">Home Three</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="about-us.html">About</a>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Courses</a>
            <ul className="sub-menu">
              <li><a href="courses-grid.html">Courses Grid</a></li>
              <li><a href="courses-list.html">Courses List</a></li>
              <li><a href="courses-details.html">Courses Details</a></li>
            </ul>
          </li>

          <li className="menu-item-has-children">
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li><a href="pricing-plan.html">Pricing Plan</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="team-details.html">Team Details</a></li>
              <li><a href="event.html">Event</a></li>
              <li><a href="event-details.html">Event Details</a></li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Blog</a>
            <ul className="sub-menu">
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
          </li>

          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</header>
    )
}