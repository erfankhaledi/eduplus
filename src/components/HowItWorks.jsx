import React from 'react';
import leftimg from "../assets/img/how-it-work/v2/left-img.jpg"
import rightimg from "../assets/img/how-it-work/v2/right-img.jpg"
import rightimgbg from "../assets/img/how-it-work/v2/right-img-bg.png"
import bgvectorimg from "../assets/img/how-it-work/v2/bg-vector-img.png"
import bgimg from "../assets/img/how-it-work/v2/bg-img.png"


const HowItWorks = () => {
    return (
        <section className="how-it-work v2 py-120">
            <div className="container">
                <div className="how-it-work-content v2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="how-it-work-left-content">
                                <div className="left-img aos-init aos-animate" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={leftimg} alt="left-img" />
                                </div>
                                <p className="para aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                    Gear up for the new academic year with our exclusive Back-to-School Specials! 
                                    Enjoy discounts on a wide range of courses and learning materials to kickstart your learning journey. 
                                    Bundle up and save big! Purchase our course bundles and enjoy a 10% discount on your total purchase. 
                                </p>
                                <ul className="check-box v1">
                                    <li className="box-item aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="item-icon">
                                            <i className="my-icon fa fa-check-circle"></i>
                                        </div>
                                        <p className="item-para">Fast Growing Sells</p>
                                    </li>
                                    <li className="box-item aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="item-icon">
                                            <i className="my-icon fa fa-check-circle"></i>
                                        </div>
                                        <p className="item-para">24/7 Quality Services</p>
                                    </li>
                                    <li className="box-item aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="item-icon">
                                            <i className="my-icon fa fa-check-circle"></i>
                                        </div>
                                        <p className="item-para">Expert Members</p>
                                    </li>
                                    <li className="box-item aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="item-icon">
                                            <i className="my-icon fa fa-check-circle"></i>
                                        </div>
                                        <p className="item-para">Best Quality Services</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="how-it-work-right-content">
                                <div className="section-title">
                                    <div className="section-title-inner">
                                        <h4 className="sub-title aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">HOW IT WORK</h4>
                                        <h2 className="big-title s-color-black aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                            We are focused on offering an education platform.
                                        </h2>
                                        <p className="title-para sp-color-black aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                            Discover comprehensive programs and courses to enhance your knowledge and skills, 
                                            whether you're pursuing a certificate, degree, or seeking professional development designed to meet specific educational needs.
                                        </p>
                                    </div>
                                </div>
                                <div className="right-img aos-init aos-animate" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={rightimg} alt="right-img" />
                                    <div className="right-img-bg">
                                        <img src={rightimgbg} alt="right-img-bg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-vector-img">
                <img src={bgvectorimg} alt="bg-vector-img" />
            </div>
        </section>
    );
};

export default HowItWorks;
