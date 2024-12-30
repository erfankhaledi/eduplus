import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import bgleft from "../assets/img/about-us/v2/bg-left.png"
import leftimg from "../assets/img/about-us/v2/left-img.png"

const ProgressBar = ({ title, percentage }) => {
  const [width, setWidth] = useState(50);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <li>
      <div className="progress-title">
        <div className="title">{title}</div>
        <div className="title">
          <span className="counter">{percentage}</span>%
        </div>
      </div>
      <div className="my-progress-bar">
        <div
          className="progress-vale"
          style={{
            width: `${width}%`,
            transition: 'width 1500ms ease-in-out',
          }}
        ></div>
      </div>
    </li>
  );
};

const AboutUs = () => {
  return (
    <section className="about-us v2 py-120">
      <div className="container-xl">
        <div className="about-us-content v2">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-lg-6 col-md-12">
              <div className="about-us-left-content aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
                <div className="left-img">
                  <img src={leftimg} alt="left-img" />
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-lg-6 col-md-12">
              <div className="about-us-right-content">
                <div className="section-title">
                  <div className="section-title-inner">
                    <h4 className="sub-title aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">More About Us</h4>
                    <h2 className="big-title s-color-black aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">We the focus and offerin your education platform.</h2>
                    <p className="title-para sp-color-black aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">Discover comprehensive programs and courses to enhance your knowledge and skills, whether you're pursuing a certificate, degree, or seeking professional development designed to meet the specific educational.</p>
                  </div>
                </div>
                <ul className="progress-bars">
                  <ProgressBar title="Career Development" percentage={65} />
                  <ProgressBar title="Case Study Success" percentage={88} />
                  <ProgressBar title="Expert Community" percentage={90} />
                </ul>
                <div className="contact-info">
                  <div className="all-btn">
                    <a href="contact.html" className="btn-p v1 btn-blue icon-v1 rounded">Make Appointment</a>
                  </div>
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faPhone} className="my-icon icon-call-us" />
                  </div>
                  <div className="info-data">
                    <p className="para">Call Us 24/7</p>
                    <h4 className="title">+236-3256.21456</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-left">
        <img src={bgleft} alt="bg-left" />
      </div>
    </section>
  );
};

export default AboutUs;

