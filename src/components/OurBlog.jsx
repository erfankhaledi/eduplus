import React from 'react';
import img1 from "../assets/img/our-blog/v2/blog-img-1.jpg"
import img2 from "../assets/img/our-blog/v2/blog-img-2.jpg"
import img3 from "../assets/img/our-blog/v2/blog-img-3.jpg"


const OurBlog = () => {
    return (
        <section className="my-120">
            <div className="container-xl">
                <div className="section-title center">
                    <div className="section-title-inner w-v2 center">
                        <h4 className="sub-title" data-aos="fade-down" data-aos-duration="1000">Our blog</h4>
                        <h2 className="big-title s-color-black" data-aos="fade-up" data-aos-duration="1000">Our Latest News & Blog Education Details</h2>
                    </div>
                </div>
                <div className="blog-cards v2">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className="blog-card">
                                <div className="card-img">
                                    <a href="blog-details.html">
                                        <img src={img1} alt="blog-img" />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h3 className="title"><a href="blog-details.html">Financial Literacy: Essential Concepts for Students</a></h3>
                                    <p className="para">These specialized memberships are designed to make school accessible and affordable for specific positions.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="all-btn">
                                        <a href="#" className="btn-p icon-v2">Read More
                                            <i className="fa fa-arrow-right" style={{ marginLeft: '10px' }} aria-hidden="true" ></i>
                                        </a>
                                    </div>
                                    <div className="footer-comments">
                                        <div className="comments-icon">
                                            <i class="fa fa-comments-o" aria-hidden="true"></i>
                                        </div>
                                        <p className="para"><a href="#">Comments (05)</a></p>
                                    </div>
                                </div>
                                <div className="card-date">
                                    <div className="date-icon">
                                        <i className="my-icon fa fa-calendar"></i>
                                    </div>
                                    <p className="para">October 19, 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                            <div className="blog-card">
                                <div className="card-img">
                                    <a href="blog-details.html">
                                        <img src={img2} alt="blog-img" />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h3 className="title"><a href="blog-details.html">Mastering Management: Student's Ultimate Guide</a></h3>
                                    <p className="para">These specialized memberships are designed to make school accessible and affordable for specific positions.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="all-btn">
                                        <a href="#" className="btn-p icon-v2">
                                            Read More
                                            <i className="fa fa-arrow-right" style={{ marginLeft: '10px' }} aria-hidden="true" ></i>    
                                        </a>
                                    </div>
                                    <div className="footer-comments">
                                        <div className="comments-icon">
                                            <i class="fa fa-comments-o" aria-hidden="true"></i>
                                        </div>
                                        <p className="para"><a href="#">Comments (05)</a></p>
                                    </div>
                                </div>
                                <div className="card-date">
                                    <div className="date-icon">
                                        <i className="my-icon fa fa-calendar"></i>
                                    </div>
                                    <p className="para">October 19, 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                            <div className="blog-card">
                                <div className="card-img">
                                    <a href="blog-details.html">
                                        <img src={img3} alt="blog-img" />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h3 className="title">
                                        <a href="blog-details.html">
                                            Financial Literacy Essential Concepts for Students
                                        </a>
                                    </h3>
                                    <p className="para">These specialized memberships are designed to make school accessible and affordable for specific positions.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="all-btn">
                                        <a href="#" className="btn-p icon-v2">
                                            Read More
                                            <i className="fa fa-arrow-right" style={{ marginLeft: '10px' }} aria-hidden="true" ></i>    
                                        </a>
                                    </div>
                                    <div className="footer-comments">
                                        <div className="comments-icon">
                                            <i class="fa fa-comments-o" aria-hidden="true"></i>
                                        </div>
                                        <p className="para"><a href="#">Comments (05)</a></p>
                                    </div>
                                </div>
                                <div className="card-date">
                                    <div className="date-icon">
                                        <i className="my-icon fa fa-calendar"></i>
                                    </div>
                                    <p className="para">October 19, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBlog;
