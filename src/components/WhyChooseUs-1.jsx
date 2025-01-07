import React from 'react';

const WhyChooseUs1 = () => {
    return (
        <section className="why-choose-us v3 py-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <div className="section-title-inner">
                                <h4 className="sub-title" data-aos="fade-down" data-aos-duration="1000">Why Choose Us?</h4>
                                <h2 className="big-title s-color-black" data-aos="fade-up" data-aos-duration="1000">Frequently Asked Questions?</h2>
                                <p className="title-para sp-color-black" data-aos="fade-up" data-aos-duration="1000">
                                    Teachers play a critical role in education by instructing and guiding students, facilitating learning, providing support and encouragement, and fostering a positive back to online new courses.
                                </p>
                            </div>
                        </div>
                        <ul className="choose-us-accordion" id="accordionExample">
                            <li className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What are the different levels of education?
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Education is important for personal and societal growth, enhancing critical thinking, expanding knowledge and skills, improving career prospects, and promoting social and best school & college.
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What is the importance of education?
                                        <i className="fa fa-eye-slash" aria-hidden="true"></i>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Education is important for personal and societal growth, enhancing critical thinking, expanding knowledge and skills, improving career prospects, and promoting social and best school & college.
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        How can I choose the educational institution or program?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Education is important for personal and societal growth, enhancing critical thinking, expanding knowledge and skills, improving career prospects, and promoting social and best school & college.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs1;
