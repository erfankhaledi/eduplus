import React from 'react';

// Functional Component
const GetFreeNow = () => {
    return (
        <section className="get-free-now v2 py-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <div className="section-title-inner">
                                <h4 className="sub-title aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">Get Free Now</h4>
                                <h2 className="big-title s-color-black aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                    Register Now & Get Free Courses Online
                                </h2>
                                <p className="title-para sp-color-black aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                    Education for sit amet, consectetur adipiscing elit. Morbi obortis ligula euismod
                                    sededesty am augue nisl so that line
                                </p>
                            </div>
                        </div>
                        <form className="get-free-form-content">
                            <div className="group-form-box">
                                <div className="form-box">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="form-box">
                                    <input type="email" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="form-box">
                                <input type="text" placeholder="Select Subject" />
                            </div>
                            <div className="form-box-last">
                                <textarea cols="30" rows="10" placeholder="Type Your Message"></textarea>
                            </div>
                            <div className="check-box">
                                <div className="all-btn">
                                    <button className="btn-p v1 rounded btn-blue" type="submit">
                                        Send Here
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetFreeNow;