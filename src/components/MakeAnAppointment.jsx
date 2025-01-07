import React from 'react';
import bigimg from "../assets/img/make-an-appointment/big-img.png"

const MakeAnAppointment = () => {
    return (
        <section className="make-an-appointment">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="appointment-left-content" data-aos="zoom-in-up" data-aos-duration="1000">
                            <img src={bigimg} alt="big-img" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="appointment-right-content">
                            <div className="section-title">
                                <div className="section-title-inner">
                                    <h4 className="sub-title" data-aos="fade-down" data-aos-duration="1000">Make An Appointment</h4>
                                    <h2 className="big-title s-color-white" data-aos="fade-up" data-aos-duration="1000">
                                        Get a Free Consultancy Right Now Here!
                                    </h2>
                                </div>
                            </div>
                            <div className="contact-info v2" data-aos="fade-up" data-aos-duration="1000">
                                <div className="all-btn">
                                    <a href="contact.html" className="btn-p v1 btn-blue2 icon-v1 rounded">
                                        Make Appointment
                                        <i className='fa fa-arrow-right' style={{ paddingLeft: '12px' }}></i>    
                                    </a>
                                </div>
                                <div className="contact-icon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="info-data">
                                    <p className="para">Call Us 24/7</p>
                                    <h4 className="title">(+258) 2569 2582</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAnAppointment;
