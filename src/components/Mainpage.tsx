// src/components/MainPage.tsx

// import React from "react";
// import MainPage from "../App.tsx"
import AboutUs from "../pages/AboutUs.tsx";
import Services from "../components/ServiceCards";
import OurApproach from "../pages/OurApproach.tsx";
import BlogOrLeadership from "../components/Leadership/BlogOrLeadership";
import GetReddAcronyms from "../components/Acronym/GetReddAcronyms";
import CompetitiveAdvantage from "../components/CompetitiveAdvantage.tsx";
import ConsultingHighlights from "../components/Get/consultingHighlight";
import ScrollToTopButton from "../components/scrollIcon/ScrollToTopButton"; 
import Contact from "../components/CallToAction";
import Home from "../pages/Home.tsx";



function MainPage() {
  return (
    <>
    <div>
    
      <ScrollToTopButton />
  
    </div>
      <div id="home">
        <Home />
      </div>
      <div>
        <GetReddAcronyms />
      </div>
      <div id="about" className="relative z-10 bg-[#f8fafc]">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="approach">
        <OurApproach />
      </div>
      <div id="advantage">
        <CompetitiveAdvantage />
      </div>
      <div id="consulting" className="relative z-10">
        <ConsultingHighlights />
      </div>
      <div id="blog" className="relative z-10 ">
        <BlogOrLeadership />
      </div>
      <div id="contact" className="relative z-1 ">
        <Contact />
      </div>
    </>
  );
}

export default MainPage;
