import React from "react";
// Fonts 
// import "./assets/css/all.min.css"
import "./assets/css/animate.min.css"
import "./assets/css/aos.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/magnific-popup.min.css"
import "./assets/css/responsive.css"
import "./assets/css/style.css"
import "./assets/css/swiper-bundle.min.css"
import Header from "./components/Header";
import Banner from "./components/Banner";
import Whychoose from "./components/Whychoose";
import AboutUs from "./components/Aboutus";
import PopularCourses from "./components/Popular";
import WhyChooseUs from "./components/WhyChooseUs";
import GetFreeNow from "./components/GetFreeNow";
import StudentFeedback from "./components/StudentFeedBack";
import WhyChooseUs1 from "./components/WhyChooseUs-1";
import SkillSection from "./components/SkillSection";
import OurBestTeam from "./components/OurBestTeam";
import MakeAnAppointment from "./components/MakeAnAppointment";
import HowItWorks from "./components/HowItWorks";
import OurBlog from "./components/OurBlog";

export default function App(){
    return (
        <>
            <Header />
            <Banner />
            <Whychoose />
            <AboutUs />
            <PopularCourses />
            <WhyChooseUs />
            <GetFreeNow />
            <StudentFeedback />
            <WhyChooseUs1 />
            <SkillSection />
            <OurBestTeam />
            <MakeAnAppointment />
            <HowItWorks />
            <OurBlog />
        </>
    )
}