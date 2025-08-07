// Home.tsx
// import { Header as HeaderBase } from "../components/header&footer/Layout";
import { motion, useAnimation } from "framer-motion";
import useScrollLock from "../hooks/useScrollLock";
import origamiHero from "../assets/logo/GRC_Logo.png";
import heroBg from "../assets/GRC_Elements/Gray_Texture_bkgd.jpg";
import { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/video/bg-video.mp4";
import PrimaryButton from "../components/Buttons/primarybutton";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
  const hasHash = !!location.hash; 
const [showOrigamiHero, setShowOrigamiHero] = useState(!hasHash);
  const [showHeroContent, setShowHeroContent] = useState(false);
  const [scrollLockActive, setScrollLockActive] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const headingControls = useAnimation();


  useScrollLock(scrollLockActive);

useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  window.scrollTo({ top: 0, behavior: "auto" });

  if (hasHash) {
    // Skip animation and transition
    setShowOrigamiHero(false);
    setShowHeroContent(true);
    headingControls.start("visible");
    setScrollLockActive(false);
    return;
  }

  const timer = setTimeout(() => {
    setShowOrigamiHero(false);
    if (showOrigamiHero === true) {
      sessionStorage.setItem("origamiHeroShown", "true");
    }

    const contentTimer = setTimeout(() => {
      setShowHeroContent(true);
      headingControls.start("visible");
      setScrollLockActive(false);
    }, 600);

    return () => clearTimeout(contentTimer);
  }, 3000);

  return () => {
    clearTimeout(timer);
  };
}, [headingControls, hasHash]);

 useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay ensures DOM is ready
    }
  }, [location]);

  
  return (
 <div
      id="hero"
      className="w-full  flex flex-col overflow-x-hidden relative bg-black"
    >
      {/* Header: always fixed at the top, above all hero sections */}
      <div className="fixed top-0 left-0 w-full z-[10] pointer-events-none">
        {/* <div className="pointer-events-auto">
          <HeaderBase dark={true} />
        </div> */}
      </div>
      {/* Origami Hero Section */}
      <div
        ref={sliderRef}
        className={`fixed inset-0 z-50 transition-transform duration-1000 ease-in-out bg-transparent flex flex-col items-center justify-center ${
          showOrigamiHero ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ pointerEvents: showOrigamiHero ? "auto" : "none" }}
      >
        {/* Header always visible on top */}
        {/* <div className="absolute top-0 left-0 w-full z-[10]">
          <HeaderBase dark={false} />
        </div> */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={heroBg}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gray-900/60 z-0" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full p-4 md:p-8 lg:p-24">
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-8 lg:gap-16">
              <div className="relative flex flex-col items-center md:items-start">
                <img
                  src={origamiHero}
                  alt="GetRedd Origami Logo"
                  className="w-[180px] sm:w-[240px] md:w-[340px] min-w-[120px] max-w-[380px] mb-4 md:mb-0 drop-shadow-xl"
                />
              </div>
              <div
                className={`flex flex-col items-start md:items-start mt-8 md:mt-0 animate-fade-in-up`}
                style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              >
                <span className="text-2xl  md:text-4xl lg:text-6xl font-light text-white mb-2 tracking-tight flex flex-row items-end gap-2">
                  SBA
                  <span
                    className="italic font-bold text-white font-[cursive] text-2xl sm:text-3xl md:text-4xl lg:text-6xl ml-2"
                    style={{
                      fontFamily: '"Brush Script MT", cursive, sans-serif',
                    }}
                  >
                    The Right Way
                  </span>
                </span>
                <div className="relative h-1 w-40 sm:w-40 md:w-96 bg-transparent overflow-hidden">
                  <div className="h-0.5 bg-red-600 origin-left animate-line-draw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 max-h-svh w-full flex flex-col bg-transparent min-h-screen">
        {/* Hero Section */}
        <section
          id="home"
          className={`relative w-full flex flex-col md:flex-row items-stretch gap-0 overflow-hidden min-h-screen  max-h-screen transition-transform duration-1000 ease-in-out z-10${
            showOrigamiHero ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="fixed inset-0 z-0 h-full w-full">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/100 via-gray-800/10 via-60% to-red-900/70" />
          </div>

          <div
            className={`relative z-10 flex flex-col justify-center md:w-[80%] w-full p-4 sm:p-8 md:p-20 min-h-[90vh] ${
              showHeroContent ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* <img
              src={logo}
              alt="GetRedd Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-8 object-contain"
            /> */}

            <motion.h1
              className="text-xl  md:text-3xl lg:text-5xl font-black text-white mb-2 lg:mb-6 mt-32 lg:mt-16 drop-shadow-lg leading-tight"
              initial="hidden"
              animate={headingControls}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.5 },
                },
              }}
            >
              Expert{" "}
              <span className="inline-block   ">
                {/* SBA Full Form Animation */}
                {[
                  { letter: "S", word: "mall" },
                  { letter: "B", word: "usiness" },
                  { letter: "A", word: "dministration" },
                ].map((item) => (
                  <span key={item.letter} className="inline-block mr-3">
                    <motion.span
                      variants={{
                        hidden: { x: 60, opacity: 0 },
                        visible: { x: 0, opacity: 1 },
                      }}
                      className="inline-block border-[2px] border-red-700 text-red-500 pb-[1px] drop-shadow "
                    >
                      {item.letter}
                    </motion.span>
                    <motion.span
                      variants={{
                        hidden: { x: 60, opacity: 0 },
                        visible: { x: 0, opacity: 1 },
                      }}
                      className="inline-block text-white"
                    >
                      {item.word}
                    </motion.span>
                  </span>
                ))}
              </span>
              <br />
              Lending Consulting
              <br />
              {/* SBA the Right Way Animation */}
              <motion.span className="inline-flex font-normal gap-[2px] mt-5">
                {"#SBAtherightway".split(" ").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { x: 60, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                    transition={{
                      delay: 3.0 + i * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className={`inline-block text-white drop-shadow-lg ${
                      char !== " "
                        ? "bg-gradient-to-r from-red-900 via-red-700 to-transparent px-1 rounded-sm"
                        : "px-1"
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            <p className="text-gray-100 text-base sm:text-lg md:text-xl mb-8 font-medium max-w-xl">
              Helping financial institutions unlock SBA lending potential with
              expert guidance and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <a
                href="https://getreddconsulting.com/m/create-account"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:px-8 sm:py-3 rounded bg-red-700 text-white font-bold shadow hover:bg-red-800 transition text-base sm:text-lg"
              >
                Get Started
              </a> */}

              {/* <a href="#cta" className="AnimatedButton">
  <svg  
    className="AnimatedButton-svg"
    width="300" 
    height="80" 
    viewBox="0 0 300 80"
  >
    <rect 
      className="AnimatedButton-line AnimatedButton-line--outer"
      strokeWidth="8"
      stroke="#ba1d1d" 
      strokeLinecap="round"
      fill="none" 
      x="4" 
      y="4" 
      width="292" 
      height="72" 
      rx="36"
    />
    <rect 
      className="AnimatedButton-line AnimatedButton-line--inner"
      strokeWidth="4"
      stroke="#f74e4e" 
      strokeLinecap="round"
      fill="none" 
      x="4" 
      y="4" 
      width="292" 
      height="72" 
      rx="36"
    />
  </svg>
  <div className="AnimatedButton-content">
    Schedule Consulting Call
  </div>
</a> */}

              <PrimaryButton
                href="#cta"
                className="px-6 py-3 sm:px-8 sm:py-3 rounded border-2  text-red-700 font-bold shadow hover:bg-red-700 hover:text-white transition text-base sm:text-lg bg-white border-none"
              >
                Schedule Consulting Call
              </PrimaryButton>
            </div>
          </div>
        </section>
        {/* <MainPage /> */}
        {/* <MainPage /> */}
        {/* About Us Section */}
        {/* <AboutUs /> */}
        {/* Our Approach Section */}
        {/* <OurApproach /> */}
        {/* Services Section */}
        {/* <section
          id="services"
          className="w-full  sm:px-4  sm:mt-16 space-y-8"
        > */}
        {/* <h2 className="text-[36px] md:text-4xl font-bold bg-gradient-to-r from-red-800 via-red-500 to-red-700 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg">
            Our Services
          </h2> */}
        {/* <div className="relative h-1 w-32 sm:w-40 md:w-52 bg-transparent overflow-hidden mx-auto mb-8">
            <div className="h-full bg-red-600 w-full line-draw origin-left" />
          </div> */}
        {/* <ServiceCards /> */}
        {/* </section> */}
        {/* Our Process Section
        <OurProcess />
        {/* Benefits Section */}
        {/* <Benefits /> */}
        {/* Competitive Advantage Section */}
        {/* <CompetitiveAdvantage /> */}
        {/* Call To Action Section */}
        {/* <BlogOrLeadership /> */}
        {/* <CallToAction />  */}
        {/* ...other sections as needed... */}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
