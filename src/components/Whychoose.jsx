import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function Whychoose() {
    return (
        <section className="my-120">
            <div className="container-lg">
                <div className="section-title center">
                    <div className="section-title-inner center w-v2">
                        <h4 className=" sub-title aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">case Studies</h4>
                        <h2 className="big-title s-color-black aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">Why People Choose Us?</h2>
                        <p className="title-para sp-color-black aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">Our commitment extends beyond traditional classroom boundaries. We provide comprehensive support services</p>
                    </div>
                </div>
                <div className="case-studies-cards v2">
                    <div className="row">
                        {/* First Object */}
                        <div className="col-md-4 col-xl-4 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className="case-studies-card">
                                <div className="item-icon">
                                    <FontAwesomeIcon icon={faLaptopCode} color="blue" className="my-icon"/>
                                </div>
                                <h4 className="item-title">Our Best Courses Help</h4>
                                <p className="item-para">Entrust full-cycle implementation of software product to experienced</p>
                                <div className="all-btn">
                                    <a href="#" className="btn-p v2 btn-white rounded-full icon-v1">Read More</a>
                                </div>
                                <div className="bg-flower">
                                    {/* <img src="/assets/img/case-studies/v3/bg-flower.png" alt="bg-flower" width={100} height={100} /> */}
                                </div>
                            </div>
                        </div>
                        {/* Seconed Object */}
                        <div className="col-md-4 col-xl-4 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                            <div className="case-studies-card">
                                <div className="item-icon">
                                    <FontAwesomeIcon icon={faChalkboardTeacher} className="my-icon"/>
                                </div>
                                <h4 className="item-title">Growth & Team Help</h4>
                                <p className="item-para">Entrust full-cycle implementation of software product to experienced</p>
                                <div className="all-btn">
                                    <a href="#" className="btn-p v2 btn-white rounded-full icon-v1">Read More</a>
                                </div>
                                <div className="bg-flower">
                                    {/* <img src="/assets/img/case-studies/v3/bg-flower.png" alt="bg-flower" width={100} height={100} /> */}
                                </div>
                            </div>
                        </div>
                        {/* Third Object */}
                        <div className="col-md-4 col-xl-4 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                            <div className="case-studies-card">
                                <div className="item-icon">
                                    <FontAwesomeIcon icon={faGraduationCap} className="my-icon" />
                                </div>
                                <h4 className="item-title">Test Prep and Exam</h4>
                                <p className="item-para">Entrust full-cycle implementation of software product to experienced</p>
                                <div className="all-btn">
                                    <a href="#" className="btn-p v2 btn-white rounded-full icon-v1">Read More</a>
                                </div>
                                <div className="bg-flower">
                                    {/* <img src="/assets/img/case-studies/v3/bg-flower.png" alt="bg-flower" width={100} height={100} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

