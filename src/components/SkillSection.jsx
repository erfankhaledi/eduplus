import React from 'react';
import skillleftimg from "../assets/img/skill-section/skill-left-img.png"
import skillrightimg from "../assets/img/skill-section/skill-right-img.png"

const SkillSection = () => {
    return (
        <section className="skill-section py-100">
            <div className="container">
                <ul className="skill-items">
                    <li className="skill-item">
                        <div className="item-icon">
                            <i className="my-icon icon-courses-completed"></i>
                        </div>
                        <div className="item-content">
                            <h5 className="title"><span className="counter">4.8</span>K</h5>
                            <p className="para">courses COMPLETED</p>
                        </div>
                    </li>
                    <li className="skill-item">
                        <div className="item-icon">
                            <i className="my-icon icon-media-activities"></i>
                        </div>
                        <div className="item-content">
                            <h5 className="title"><span className="counter">325</span></h5>
                            <p className="para">MEDIA ACTIVITIES</p>
                        </div>
                    </li>
                    <li className="skill-item">
                        <div className="item-icon">
                            <i className="my-icon icon-skill-expert"></i>
                        </div>
                        <div className="item-content">
                            <h5 className="title"><span className="counter">598</span></h5>
                            <p className="para">SKILLED EXPERTS</p>
                        </div>
                    </li>
                    <li className="skill-item">
                        <div className="item-icon">
                            <i className="my-icon icon-happy-students"></i>
                        </div>
                        <div className="item-content">
                            <h5 className="title"><span className="counter">36</span>K</h5>
                            <p className="para">HAPPY Students</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="skill-left-img">
                <img src={skillleftimg} alt="skill-left-img" />
            </div>
            <div className="skill-right-img">
                <img src={skillrightimg} alt="skill-right-img" />
            </div>
        </section>
    );
};

export default SkillSection;