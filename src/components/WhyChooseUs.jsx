import React from 'react';

// Functional Component
const WhyChooseUs = () => {
    return (
        <section className="why-choose-us v2 py-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="section-title">
                            <div className="section-title-inner">
                                <h4 className="sub-title" data-aos="fade-down" data-aos-duration="1000">Why Choose Us</h4>
                                <h2 className="big-title s-color-white" data-aos="fade-up" data-aos-duration="1000">We focus on offering your educational platform</h2>
                                <p className="title-para sp-color-white" data-aos="fade-up" data-aos-duration="1000">
                                    Discover comprehensive programs and courses to enhance your knowledge and skills,
                                    whether you're pursuing a certificate, degree, or seeking professional development
                                    designed to meet specific educational needs.
                                </p>
                            </div>
                        </div>
                        <ul className="chooses-skill-items v2">
                            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                <div className="skill-icon">
                                    <i className="fa fa-id-card my-icon" aria-hidden="true"></i>
                                </div>
                                <h3 className="title"><span className="counter">4.8</span>k</h3>
                                <h5 className="para">JOBS COMPLETED</h5>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                <div className="skill-icon">
                                    <i className="fa fa-tasks" aria-hidden="true"></i>
                                </div>
                                <h3 className="title"><span className="counter">6.2</span>k</h3>
                                <h5 className="para">INSTRUCTORS</h5>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                <div className="skill-icon">
                                    <i className="fa fa-address-book-o my-icon" aria-hidden="true"></i>
                                </div>
                                <h3 className="title"><span className="counter">5.3</span>k</h3>
                                <h5 className="para">LEARNERS</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;