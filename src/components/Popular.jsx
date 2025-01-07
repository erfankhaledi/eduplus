import React from 'react';
import coursesimg1 from "../assets/img/courses/v2/courses-img-1.jpg"
import coursesimg2 from "../assets/img/courses/v2/courses-img-2.jpg"
import coursesimg3 from "../assets/img/courses/v2/courses-img-3.jpg"
import coursesimg4 from "../assets/img/courses/v2/courses-img-4.jpg"
import coursesimg5 from "../assets/img/courses/v2/courses-img-5.jpg"
import coursesimg6 from "../assets/img/courses/v2/courses-img-6.jpg"
import adminimg1 from "../assets/img/courses/v2/admin-img-1.png"
import adminimg2 from "../assets/img/courses/v2/admin-img-2.png"
import adminimg3 from "../assets/img/courses/v2/admin-img-3.png"
import adminimg4 from "../assets/img/courses/v2/admin-img-4.png"
import adminimg5 from "../assets/img/courses/v2/admin-img-5.png"
import adminimg6 from "../assets/img/courses/v2/admin-img-6.png"



const PopularCourses = () => {
  return (
    <section className="my-120">
      <div className="container-fluid-md container-lg">
        <div className="section-title center">
          <div className="section-title-inner center">
            <h4 className="sub-title" data-aos="fade-down" data-aos-duration="1000">Our Courses Plan</h4>
            <h2 className="big-title s-color-black" data-aos="fade-up" data-aos-duration="1000">Our Most popular Courses</h2>
          </div>
        </div>
        <div className="courses-cards v2">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button"
                role="tab" aria-controls="nav-all" aria-selected="true">
                <span className="nav-icon">
                  <i className="fa fa-bars my-icon"></i>
                </span>
                <span className="title">ALL</span>
              </button>
              <button className="nav-link" id="nav-design-tab" data-bs-toggle="tab" data-bs-target="#nav-design" type="button"
                role="tab" aria-controls="nav-design" aria-selected="false">
                <span className="nav-icon">
                    <i class="fa fa-paint-brush" aria-hidden="true"></i>
                </span>
                <span className="title">Design</span>
              </button>
              <button className="nav-link" id="nav-development-tab" data-bs-toggle="tab" data-bs-target="#nav-development"
                type="button" role="tab" aria-controls="nav-development" aria-selected="false">
                <span className="nav-icon">
                    <i class="fa fa-address-card" aria-hidden="true"></i>
                </span>
                <span className="title">Development</span>
              </button>
              <button className="nav-link" id="nav-marketing-tab" data-bs-toggle="tab" data-bs-target="#nav-marketing"
                type="button" role="tab" aria-controls="nav-marketing" aria-selected="false">
                <span className="nav-icon">
                    <i class="fa fa-bullhorn my-icon" aria-hidden="true"></i>
                </span>
                <span className="title">Marketing</span>
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab" tabIndex="0">
              <div className="row">
                {/* First Object */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800"
                  data-aos-delay="100">
                  <div className="courses-plan-card">
                    <div className="card-img">
                      <img src={coursesimg1} alt="courses-img" />
                      <h4 className="category">Mathematics</h4>
                    </div>
                    <div className="courses-card-content">
                      <div className="admin-data">
                        <div className="admin-content">
                          <div className="admin-img">
                            <img src={adminimg1} alt="amin-img" />
                          </div>
                          <h5 className="admin-title">Willum</h5>
                        </div>
                        <div className="lesson">
                          <i className="my-icon icon-lesson"></i>
                          <p className="para">15 Lesson</p>
                        </div>
                      </div>
                      <h3 className="title">
                        <a href="courses-details.html">UI/UX Design for Beginners Fences for very importantclass</a>
                      </h3>
                      <div className="price-and-review">
                        <h4 className="price">$99 / <span>$120</span></h4>
                        <div className="review">
                          <p className="rating">5.0</p>
                          <ul className="star">
                            <li><i className="my-icon icon-star"></i></li>
                            <li><i className="my-icon icon-star"></i></li>
                            <li><i className="my-icon icon-star"></i></li>
                            <li><i className="my-icon icon-star"></i></li>
                            <li><i className="my-icon icon-star"></i></li>
                          </ul>
                          <p className="review-text">(40)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Seconed Object */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800"
                  data-aos-delay="100">
                  <div className="courses-plan-card">
                    <div className="card-img">
                      <img src={coursesimg2} alt="courses-img" />
                      <h4 className="category">Chemistery</h4>
                    </div>
                    <div className="courses-card-content">
                      <div className="admin-data">
                        <div className="admin-content">
                          <div className="admin-img">
                            <img src={adminimg2} alt="amin-img" />
                          </div>
                          <h5 className="admin-title">Carry</h5>
                        </div>
                        <div className="lesson">
                          <i className="my-icon icon-lesson"></i>
                          <p className="para">15 Lesson</p>
                        </div>
                      </div>
                      <h3 className="title">
                        <a href="courses-details.html">A Comprehensive Guide to Chemistry Learning EducationHub</a>
                      </h3>
                      <div className="price-and-review">
                        <h4 className="price">$99 / <span>$120</span></h4>
                        <div className="review">
                          <p className="rating">5.0</p>
                          <ul className="star">
                            <li>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </li>
                          </ul>
                          <p className="review-text">(40)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Third Object */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800"
                  data-aos-delay="100">
                  <div className="courses-plan-card">
                    <div className="card-img">
                      <img src={coursesimg3} alt="courses-img" />
                      <h4 className="category">Technology</h4>
                    </div>
                    <div className="courses-card-content">
                      <div className="admin-data">
                        <div className="admin-content">
                          <div className="admin-img">
                            <img src={adminimg3} alt="amin-img" />
                          </div>
                          <h5 className="admin-title">Willum</h5>
                        </div>
                        <div className="lesson">
                          <i className="my-icon icon-lesson"></i>
                          <p className="para">15 Lesson</p>
                        </div>
                      </div>
                      <h3 className="title">
                        <a href="courses-details.html">Empowering Minds, Inspiring Solutions Mathematical Excellence
                        Sutdents</a>
                      </h3>
                      <div className="price-and-review">
                        <h4 className="price">$99 / <span>$120</span></h4>
                        <div className="review">
                          <p className="rating">5.0</p>
                          <ul className="star">
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          </ul>
                          <p className="review-text">(40)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Fourth Object */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800"
                  data-aos-delay="100">
                  <div className="courses-plan-card">
                    <div className="card-img">
                      <img src={coursesimg4} alt="courses-img" />
                      <h4 className="category">Biology</h4>
                    </div>
                    <div className="courses-card-content">
                      <div className="admin-data">
                        <div className="admin-content">
                          <div className="admin-img">
                            <img src={adminimg4} alt="amin-img" />
                          </div>
                          <h5 className="admin-title">Carry</h5>
                        </div>
                        <div className="lesson">
                          <i className="my-icon icon-lesson"></i>
                          <p className="para">15 Lesson</p>
                        </div>
                      </div>
                      <h3 className="title">
                        <a href="courses-details.html">Charting the Landscape of Biology Education Learning Life
                        Sciences</a>
                      </h3>
                      <div className="price-and-review">
                        <h4 className="price">$99 / <span>$120</span></h4>
                        <div className="review">
                          <p className="rating">5.0</p>
                          <ul className="star">
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          </ul>
                          <p className="review-text">(40)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Fifth Object */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800"
                  data-aos-delay="100">
                  <div className="courses-plan-card">
                    <div className="card-img">
                      <img src={coursesimg5} alt="courses-img" />
                      <h4 className="category">Mathematic</h4>
                    </div>
                    <div className="courses-card-content">
                      <div className="admin-data">
                        <div className="admin-content">
                          <div className="admin-img">
                            <img src={adminimg5} alt="amin-img" />
                          </div>
                          <h5 className="admin-title">Willum</h5>
                        </div>
                        <div className="lesson">
                          <i className="my-icon icon-lesson"></i>
                          <p className="para">15 Lesson</p>
                        </div>
                      </div>
                      <h3 className="title">
                        <a href="courses-details.html">Adrian and Olivia's Language Is we Lighthouse: Guiding Minds in</a>
                      </h3>
                      <div className="price-and-review">
                        <h4 className="price">$99 / <span>$120</span></h4>
                        <div className="review">
                          <p className="rating">5.0</p>
                          <ul className="star">
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          </ul>
                          <p className="review-text">(40)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sixth Object */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-duration="800"
                  data-aos-delay="100">
                  <div className="courses-plan-card">
                    <div className="card-img">
                      <img src={coursesimg6} alt="courses-img" />
                      <h4 className="category">Mathematic</h4>
                    </div>
                    <div className="courses-card-content">
                      <div className="admin-data">
                        <div className="admin-content">
                          <div className="admin-img">
                            <img src={adminimg6} alt="amin-img" />
                          </div>
                          <h5 className="admin-title">Carry</h5>
                        </div>
                        <div className="lesson">
                          <i className="my-icon icon-lesson"></i>
                          <p className="para">15 Lesson</p>
                        </div>
                      </div>
                      <h3 className="title">
                        <a href="courses-details.html">Adrian and Olivia's Language Is we Lighthouse: Guiding Minds in</a>
                      </h3>
                      <div className="price-and-review">
                        <h4 className="price">$99 / <span>$120</span></h4>
                        <div className="review">
                          <p className="rating">5.0</p>
                          <ul className="star">
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                            <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          </ul>
                          <p className="review-text">(40)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-design" role="tabpanel" aria-labelledby="nav-design-tab" tabIndex="0">
              {/* Design tab content */}
            </div>
            <div className="tab-pane fade" id="nav-development" role="tabpanel" aria-labelledby="nav-development-tab"
              tabIndex="0">
              {/* Development tab content */}
            </div>
            <div className="tab-pane fade" id="nav-marketing" role="tabpanel" aria-labelledby="nav-marketing-tab" tabIndex="0">
              {/* Marketing tab content */}
            </div>
          </div>
        </div>
        <div className="all-btn v2" data-aos="fade-up" data-aos-duration="1000">
          <a href="courses-grid.html" className="btn-p v1 btn-blue icon-v1 rounded">Explore Courses</a>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;

