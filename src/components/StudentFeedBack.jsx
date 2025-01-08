import React, { useEffect, useRef } from 'react';
import userimg1 from "../assets/img/student-feedback/v2/user-img-1.jpg"
import userimg2 from "../assets/img/student-feedback/v2/user-img-2.jpg"

// width: 585px it's not responsive

const StudentFeedback = () => {
    const swiperWrapperRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 575) {
                const pixelsBelowThreshold = 575 - window.innerWidth;
                const transformValue = -1752 - (pixelsBelowThreshold * 3);
                if (swiperWrapperRef.current) {
                    swiperWrapperRef.current.style.transform = `translate3d(${transformValue}px, 0px, 0px)`;
                }
            } else {
                if (swiperWrapperRef.current) {
                    swiperWrapperRef.current.style.transform = '';
                }
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set initial state

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section className="student-feedback v2 py-120">
            <div className="container">
                <div className="section-title">
                    <div className="section-title-inner">
                        <h4 className="sub-title" data-aos="fade-down" data-aos-duration="1000">Student feedback</h4>
                        <h2 className="big-title s-color-white" data-aos="fade-up" data-aos-duration="1000">Our Student feedback</h2>
                    </div>
                </div>
                <div className="student-cards">
                    <div className="swiper mySwiper-Student-feedback swiper-initialized swiper-horizontal swiper-backface-hidden">
                        <div className="swiper-wrapper swiper-wrapper-responsive" id="swiper-wrapper-d76687f7029a84a7">
                            <div className="swiper-slide swiper-responsive" style={{ marginRight: '30px' }}>
                                <div className="student-card">
                                    <h4 className="title">DR.William/ <span>Student</span></h4>
                                    <p className="para">Education is a crucial field of study, as it helps us understand the impact of human activities</p>
                                    <ul className="star">
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                    </ul>
                                    <ul className="social">
                                        <li><a href="#"><i class="my-icon fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-instagram"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-twitter"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-skype"></i></a></li>
                                    </ul>
                                    <div className="user-img">
                                        <img src={userimg1} alt="user-img" />
                                    </div>
                                    <div className="student-card-icon">
                                        <i className="my-icon fa fa-quote-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-prev swiper-responsive" style={{ marginRight: '30px' }}>
                                <div className="student-card">
                                    <h4 className="title">DR.kasime/ <span>Student</span></h4>
                                    <p className="para">Education is a crucial field of study, as it helps us understand the impact of human activities</p>
                                    <ul className="star">
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                    </ul>
                                    <ul className="social">
                                        <li><a href="#"><i className="my-icon bi bi-facebook"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-instagram"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-twitter"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-skype"></i></a></li>
                                    </ul>
                                    <div className="user-img">
                                        <img src={userimg2} alt="user-img" />
                                    </div>
                                    <div className="student-card-icon">
                                        <i className="my-icon fa fa-quote-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-active swiper-responsive" style={{ marginRight: '30px' }}>
                                <div className="student-card">
                                    <h4 className="title">DR.William/ <span>Student</span></h4>
                                    <p className="para">Education is a crucial field of study, as it helps us understand the impact of human activities</p>
                                    <ul className="star">
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                    </ul>
                                    <ul className="social">
                                        <li><a href="#"><i className="my-icon bi bi-facebook"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-instagram"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-twitter"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-skype"></i></a></li>
                                    </ul>
                                    <div className="user-img">
                                        <img src={userimg1} alt="user-img" />
                                    </div>
                                    <div className="student-card-icon">
                                        <i className="my-icon fa fa-quote-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-next swiper-responsive" style={{ marginRight: '30px' }}>
                                <div className="student-card">
                                    <h4 className="title">DR.kasime/ <span>Student</span></h4>
                                    <p className="para">Education is a crucial field of study, as it helps us understand the impact of human activities</p>
                                    <ul className="star">
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                        <li><i className="my-icon bi bi-star-fill"></i></li>
                                    </ul>
                                    <ul className="social">
                                        <li><a href="#"><i className="my-icon bi bi-facebook"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-instagram"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-twitter"></i></a></li>
                                        <li><a href="#"><i className="my-icon bi bi-skype"></i></a></li>
                                    </ul>
                                    <div className="user-img">
                                        <img src={userimg2} alt="user-img" />
                                    </div>
                                    <div className="student-card-icon">
                                        <i className="my-icon fa fa-quote-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-next" data-aos="fade-up" data-aos-duration="1000" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-d76687f7029a84a7">
                      Next
                      <i class="fa fa-arrow-right" aria-hidden="true" style={{ marginLeft: '10px' }}></i>
                      </div>
                    <div className="swiper-button-prev" data-aos="fade-up" data-aos-duration="1000">
                    <i class="fa fa-arrow-left" aria-hidden="true" style={{ marginRight: '10px' }}></i>
                      Prev
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default StudentFeedback;