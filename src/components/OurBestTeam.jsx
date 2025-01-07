import React from 'react';
import teammember1 from "../assets/img/our-best-team/v2/team-member-1.png"
import teammember2 from "../assets/img/our-best-team/v2/team-member-2.png"
import teammember3 from "../assets/img/our-best-team/v2/team-member-3.png"

const OurBestTeam = () => {
    return (
        <section className="my-120">
            <div className="container">
                <div className="section-title v2">
                    <div className="section-title-inner">
                        <h4 className="sub-title" data-aos="fade-down" data-aos-duration="1000">our best team</h4>
                        <h2 className="big-title s-color-black" data-aos="fade-up" data-aos-duration="1000">
                            Our Most Popular Instructor
                        </h2>
                    </div>
                    <div className="all-btn mt-15" data-aos="fade-up" data-aos-duration="1000">
                        <a href="contact.html" className="btn-p v1 rounded btn-blue icon-v1">
                            Contact Us
                            <i className="fa fa-arrow-right" aria-hidden="true" style={{ marginLeft: '10px'}}></i>
                        </a>
                    </div>
                </div>
                <div className="our-best-team-content v2">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className="team-data">
                                <div className="data-img">
                                    <img src={teammember1} alt="team-member-img" />
                                    <div className="team-share-box">
                                        <div className="share">
                                            <a href="#">
                                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#" className="social">
                                                    <i className="my-icon fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="social">
                                                    <i className="my-icon fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="social">
                                                    <i className="my-icon fa fa-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title"><a href="team-details.html">Tracy d.wright</a></h4>
                                <p className="para">Head of Chemistry</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                            <div className="team-data">
                                <div className="data-img">
                                    <img src={teammember2} alt="team-member-img" />
                                    <div className="team-share-box">
                                        <div className="share">
                                            <a href="#"><i className="my-icon fa fa-share-alt"></i></a>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#" className="social"><i className="my-icon fa fa-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="#" className="social"><i className="my-icon fa fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#" className="social"><i className="my-icon fa fa-linkedin"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title"><a href="team-details.html">Dr.Christophert</a></h4>
                                <p className="para">Head of Chemistry</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                            <div className="team-data">
                                <div className="data-img">
                                    <img src={teammember3} alt="team-member-img" />
                                    <div className="team-share-box">
                                        <div className="share">
                                            <a href="#"><i className="my-icon fa fa-share-alt"></i></a>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#" className="social"><i className="my-icon fa fa-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="#" className="social"><i className="my-icon fa fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#" className="social"><i className="my-icon fa fa-linkedin"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className="title"><a href="team-details.html">Emma Olivia</a></h4>
                                <p className="para">Head of Chemistry</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBestTeam;
