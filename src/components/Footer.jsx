import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-section v2">
            <div className="footer-content v2">
                <div className="container">
                    <ul className="footer-contact-info">
                        <li className="contact-data">
                            <div className="data-icon">
                                <i className="my-icon icon-location"></i>
                            </div>
                            <div className="data-info">
                                <h5 className="para">Edupls Location</h5>
                                <h4 className="title">Marina Lane Berlin</h4>
                            </div>
                        </li>
                        <li className="contact-data">
                            <div className="data-icon">
                                <i className="my-icon icon-massage"></i>
                            </div>
                            <div className="data-info">
                                <h5 className="para">E-mail Address</h5>
                                <h4 className="title">edupls@gmail.com</h4>
                            </div>
                        </li>
                        <li className="contact-data">
                            <div className="data-icon">
                                <i className="my-icon icon-call-us"></i>
                            </div>
                            <div className="data-info">
                                <h5 className="para">Phone Number</h5>
                                <h4 className="title">0192 0221 6530 24</h4>
                            </div>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <img src="assets/img/logo/logo-2.svg" alt="logo" />
                                </div>
                                <p className="widget-para">Reflect on your teaching or work seek feedback from supervisors improve your skills with us.</p>
                                <ul className="footer-social-link">
                                    <li>
                                        <a href="#">
                                            <i className="my-icon icon-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="my-icon icon-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="my-icon icon-discord"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="my-icon icon-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="widget-title">Quick Links</h4>
                                <ul className="quick-links">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Mission</a></li>
                                    <li><a href="#">Meet The Teams</a></li>
                                    <li><a href="#">Our Projects</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="widget-title">Photo Gallery</h4>
                                <ul className="gallery-content">
                                    <li>
                                        <img src="assets/img/footer/v2/gallary-img-1.jpg" alt="gallery-img" />
                                        <a href="#" className="gallery-btn">
                                            <i className="fa-regular fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <img src="assets/img/footer/v2/gallary-img-2.jpg" alt="gallery-img" />
                                        <a href="#" className="gallery-btn">
                                            <i className="fa-regular fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <img src="assets/img/footer/v2/gallary-img-3.jpg" alt="gallery-img" />
                                        <a href="#" className="gallery-btn">
                                            <i className="fa-regular fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <img src="assets/img/footer/v2/gallary-img-4.jpg" alt="gallery-img" />
                                        <a href="#" className="gallery-btn">
                                            <i className="fa-regular fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <img src="assets/img/footer/v2/gallary-img-5.jpg" alt="gallery-img" />
                                        <a href="#" className="gallery-btn">
                                            <i className="fa-regular fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <img src="assets/img/footer/v2/gallary-img-6.jpg" alt="gallery-img" />
                                        <a href="#" className="gallery-btn">
                                            <i className="fa-regular fa-eye"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="widget-title">Get Newsletter</h4>
                                <div className="get-newsletter">
                                    <p className="para">Get 10% off your first order! Hurry up</p>
                                    <div className="email-address">
                                        <form>
                                            <i className="fa-regular fa-envelope"></i>
                                            <input type="search" placeholder="Enter email address" />
                                        </form>
                                    </div>
                                    <div className="all-btn">
                                        <a href="#" className="btn-p v2 btn-blue2 rounded">Subscribe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-section v2">
                <div className="container">
                    <div className="copyright-content">
                        <div className="left-content">
                            <p className="para">© 2023 <span>Edupls.</span> All Rights Reserved.</p>
                        </div>
                        <div className="right-content">
                            <a href="#" className="para2">Privacy Policy</a>
                            <a href="#" className="para2">Terms & Condition</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;