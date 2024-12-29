import React from "react";

export default function Banner(){
    return (
        <section className="banner v2">
            <div className="banner-content v2">
                <div className="swiper swiper-banner">
                    <div className="swiper-wrapper">
                        {/* Slide 1 */}
                        <div className="swiper-slide">
                            <div className="banner-img bg-banner">
                                <div className="banner-data">
                                    <div className="container">
                                        <div className="section-title">
                                            <div className="section-title-inner w-v3">
                                                <h4 className="sub-titlev2 color-white animate__animated animate__fadeInUp" style={{ animationDuration: '1s' }}>
                                                    <span>35% Off</span> Learn from today
                                                </h4>
                                                <h2 className="big-title s-color-white animate__animated animate__fadeInUp" style={{ animationDuration: '1s' }}>
                                                    Featured Courses Our Edupls Theme
                                                </h2>
                                                <p className="title-para s-color-white animate__animated animate__fadeInUp" style={{ animationDuration: '2s' }}>
                                                    We believe that with the right guidance, support, and mindset, you can accomplish anything you set your
                                                </p>
                                            </div>
                                        </div>
                                        <div className="play-data v1 animate__animated animate__fadeInUp" style={{ animationDuration: '2s' }}>
                                            <div className="all-btn">
                                                <a href="contact.html" className="btn-p v1 btn-blue2 rounded icon-v1">Make Appointment</a>
                                            </div>
                                            <a href="https://www.youtube.com/watch?v=pCuanWbgUt8" className="youtube">
                                                <div className="play-content">
                                                    <div className="play-icon v1">
                                                        <i className="my-icon icon-play"></i>
                                                    </div>
                                                    <h4 className="title">Play Now</h4>
                                                </div>
                                            </a>
                                        </div>
                                        <ul className="catagoey animate__fadeInUp" style={{ animationDuration: '2s' }}>
                                            {/** Categories List **/}
                                            {["Academic Enrichment", "Best Online Learning", "Personalized Learning", "Yet Student Support"].map((category, index) => (
                                                <li key={index} className="catagoey-data">
                                                    <div className="category-icon">
                                                        <i className="my-icon icon-academic-enrichment"></i>
                                                    </div>
                                                    <a href="#" className="title">{category}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide 2 */}
                        <div className="swiper-slide">
                            <div className="banner-img" style={{ backgroundImage: "url('assets/img/banner/v2/banner-img-2.jpg')" }}>
                                <div className="banner-data">
                                    <div className="container">
                                        <div className="section-title">
                                            <div className="section-title-inner w-v3">
                                                <h4 className="sub-titlev2 color-white animate__animated animate__fadeInUp" style={{ animationDuration: '1s' }}>
                                                    <span>35% Off</span> Learn from today
                                                </h4>
                                                <h2 className="big-title s-color-white animate__animated animate__fadeInUp" style={{ animationDuration: '2s' }}>
                                                    Featured Courses Our Edupls Theme
                                                </h2>
                                                <p className="title-para s-color-white animate__animated animate__fadeInUp" style={{ animationDuration: '2s' }}>
                                                    We believe that with the right guidance, support, and mindset, you can accomplish anything you set your
                                                </p>
                                            </div>
                                        </div>
                                        <div className="play-data v1 mb-100 animate__animated animate__fadeInUp" style={{ animationDuration: '2s' }}>
                                            <div className="all-btn">
                                                <a href="contact.html" className="btn-p v1 btn-blue2 rounded icon-v1">Make Appointment</a>
                                            </div>
                                            <a href="https://www.youtube.com/watch?v=pCuanWbgUt8" className="youtube">
                                                <div className="play-content">
                                                    <div className="play-icon v1">
                                                        <i className="my-icon icon-play"></i>
                                                    </div>
                                                    <h4 className="title">Play Now</h4>
                                                </div>
                                            </a>
                                        </div>
                                        <ul className="catagoey animate__animated animate__fadeInUp" style={{ animationDuration: '2s' }}>
                                            {/** Categories List **/}
                                            {["Academic Enrichment", "Best Online Learning", "Personalized Learning", "Yet Student Support"].map((category, index) => (
                                                <li key={index} className="catagoey-data">
                                                    <div className="category-icon">
                                                        <i className="my-icon icon-academic-enrichment"></i>
                                                    </div>
                                                    <a href="#" className="title">{category}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
        </section>
    )
}
