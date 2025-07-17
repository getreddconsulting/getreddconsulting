import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MockData } from "../data/Mockdata";

import briefcase from "../assets/GRC_Elements/Briefcase_icon_circle.png";
import ReddEyeBox from "../assets/GRC_Elements/The_ReddEye_Approach_box.png";
import GetReddLogo from "../assets/logo/GRC Logo.png";

const ServiceCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Split items once using forEach
  const leftItems: typeof MockData.serviceData = [];
  const rightItems: typeof MockData.serviceData = [];

  MockData.serviceData.forEach((item, idx) => {
    if (idx % 2 === 0) leftItems.push(item);
    else rightItems.push(item);
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full min-h-[96vh] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.0 }}
        animate={visible ? { opacity: 1, scale: 1.1 } : { opacity: 1, scale: 1.1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ y }}
      >
        <img
          src={GetReddLogo}
          alt="Background Logo"
          className="w-[60%] object-cover"
          style={{
            position: "absolute",
            top: "59%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="absolute inset-0 bg-white/50 backdrop-filter backdrop-blur-sm z-5" />
      </motion.div>

      {/* Radial light overlay */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{
          background:
            "radial-gradient(circle, rgba(255, 182, 193, 0) 0%, rgba(255, 182, 193, 0) 10%, transparent 100%)",
        }}
        animate={
          visible
            ? {
                background:
                  "radial-gradient(circle, rgba(255, 182, 193, 0.4) 0%, rgba(255, 255, 255, 0.2) 80%, transparent 100%)",
              }
            : {
                background:
                  "radial-gradient(circle, rgba(255, 182, 193, 0) 0%, rgba(255, 182, 193, 0) 10%, transparent 100%)",
              }
        }
        transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ backgroundSize: visible ? "100%" : "10%", backgroundPosition: "center" }}
      />

      {/* Center vertical line and icon */}
      {/* <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 h-full flex-col items-center z-20">
        <div className="hidden sm:block w-0.5 h-[90%] bg-red-600 rounded-full" />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-24 h-24 flex items-center justify-center"
          initial={{ top: 0 }}
          animate={visible ? { top: "calc(90% - 24px)" } : { top: 0 }}
          transition={{ duration: 2.0, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={briefcase}
            alt="Service Icon"
            className="w-24 h-24 bg-white rounded-full border-2 pt-3 pr-1 mb-4 border-red-600 shadow-lg"
          />
        </motion.div>
      </div> */}

      <div className="hidden md:block  absolute left-1/2 -translate-x-1/2 top-0 h-full flex-col items-center z-20">
  <div className="hidden sm:block w-0.5 h-[90%] bg-red-600 rounded-full" />
  <motion.div
    className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
    initial={{ top: 0 }}
    animate={visible ? { top: "calc(90% - 48px)" } : { top: 0 }}
    transition={{ duration: 2.0, ease: [0.4, 0, 0.2, 1] }}
  >
    <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-xl border-8 border-white">
      <img
        src={briefcase}
        alt="Service Icon"
        className="w-24 h-24 mt-4 mr-1 object-contain"
      />
    </div>
  </motion.div>
</div>


      {/* Main content */}
      <div className="relative z-30 flex flex-col md:flex-row w-full max-w-7xl px-4 md:px-5 py-20 lg:px-8 lg:py-10 gap-8 lg:gap-8">
        {/* Left Column */}
        <div
          className={`flex-1 flex flex-col items-start gap-8 transition-all duration-700 ${
            visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -60 }}
            animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <img src={GetReddLogo} alt="GetRedd Logo" className="w-40 sm:w-48 mb-4 drop-shadow-xl" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-red-500 mb-4">
              Specialized Services
            </h2>
            <img src={ReddEyeBox} alt="The ReddEye Approach" className="h-10 sm:h-14 w-auto mb-4" />
            <div className="w-full h-0.5 mb-4 bg-red-600 transition-all duration-700" />
          </motion.div>

          {leftItems.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-lg lg:text-lg font-medium text-transform: uppercase text-red-700 mb-2">
                {item.title}
              </h3>
              <p className="text-sm lg:text-base   font-normal text-gray-800 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div
          className={`flex-1 flex flex-col gap-8 transition-all duration-700 ${
            visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          {rightItems.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-lg lg:text-lg font-medium text-transform: uppercase text-red-700 mb-2">
                {item.title}
              </h3>
              <p className="text-sm lg:text-base font-normal text-gray-800 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
