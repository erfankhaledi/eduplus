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

export default function App(){
    return (
        <>
            <Header />
            <Banner />
            <Whychoose />
            <AboutUs />
        </>
    )
}