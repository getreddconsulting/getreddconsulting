import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// import BriefcaseIcon from "../assets/GRC_Elements/Briefcase_icon_circle.png";
import BullHorn from "../assets/GRC_Elements/Bullhorn_icon.png";
import LincolnBg from "../assets/GRC_Elements/Lincoln_gray_bkgd.jpg";
import GrayBg from "../assets/GRC_Elements/Gray_Texture_bkgd.jpg";
// import GetReddAcronyms from "../components/Acronym/GetReddAcronyms";

const aboutCards = [
  {
    title: "Our Mission",
    strong: ["Empowering small businesses", "Tailored financing"],
    paragraph:
      "With over 20 years of experience in SBA 7(a), 504, and real estate loans, we focus on innovation, service, and client success — where your business goals always come first.",
  },
  {
    title: "Our Team",
    strong: ["Experts from diverse industries", "Custom solutions"],
    paragraph:
      "Our passionate team delivers excellence, integrity, and custom solutions. We guide your business every step of the way with dedication and care.",
  },
  {
    title: "Consulting & Advisory",
    strong: ["Personalized SBA consulting", "Real solutions"],
    paragraph:
      "We offer hands-on guidance tailored to your goals. From planning to execution, we provide real solutions—not just advice—with continuous support to help you grow.",
  },
];

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(false);

  // IntersectionObserver for content and icon visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setContentVisible(entry.isIntersecting),
      { threshold: 0.4 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id="about-approach"
      className="w-full min-h-screen flex flex-col items-stretch overflow-hidden relative bg-black text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
    >
      
      {typeof window !== "undefined" && window.innerWidth >= 1024 ? (
        <motion.img
          src={LincolnBg}
          alt="Right-side background with Lincoln texture"
          className="absolute top-0 right-[-70px] lg:right-[-250px] pointer-events-none transform scale-x-[-1] select-none min-h-screen w-auto max-w-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: contentVisible ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      ) : (
        <img
          src={GrayBg}
          alt="Gray textured background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      <div
        id="about"
        className="relative z-10 flex flex-col md:gap-6 lg:gap-4 pl-4  py-12 lg:pt-24 pb-16 pr-9 lg:pb-16 w-full max-w-7xl  mx-auto items-start"
      >
        
        
        <h2 className="text-[36px] lg:text-4xl  font-bold bg-gradient-to-r from-red-800 via-red-500 to-red-700 bg-clip-text text-transparent mb-6  text-center drop-shadow">
          About Us
        </h2>

        {/* Animated Icon Track */}
        <div className="relative w-full flex items-center justify-center mb-10">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-red-600 rounded-full w-full" />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2  flex items-center justify-center"
            initial={{ left: "0%" }}
            animate={
              contentVisible ? { left: "calc(100% - 70px)" } : { left: "0%" }
            }
            transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-full shadow-lg border-2 border-red-400 overflow-hidden">
              <img
                src={BullHorn}
                alt="Moving Briefcase Icon"
                className="mt-3 mr-1 lg:mt-[1.15rem] lg:mr-[0.35rem] w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Card Content Section */}
        <div ref={sectionRef} className="flex flex-col gap-4 md:gap-20 lg:gap-16">
          {aboutCards.map((card, idx) => (
            <motion.div
              key={card.title}
              className="flex items-start lg:items-center gap-5 lg:gap-10"
              initial={{ opacity: 0, y: 96 }}
              animate={
                contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 96 }
              }
              transition={{
                duration: 0.9,
                delay: idx * 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div className="border-l-2 border-red-600 h-full min-h-[100px]" />
              <div className="text-white max-w-3xl">
                <motion.h4
                  className="text-red-500 text-base font-semibold mb-2 tracking-widest uppercase"
                  initial={{ opacity: 0, x: -60 }}
                  animate={
                    contentVisible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -60 }
                  }
                  transition={{
                    duration: 0.9,
                    delay: idx * 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {card.title}
                </motion.h4>
                <motion.h2
                  className="text-xl lg:text-3xl  font-bold leading-tight mb-4"
                  initial={{ opacity: 0, y: 96 }}
                  animate={
                    contentVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 96 }
                  }
                  transition={{
                    duration: 0.9,
                    delay: idx * 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {card.strong.map((text, i) => (
                    <span key={i}>
                      {text}
                      {i !== card.strong.length - 1 && <span> • </span>}
                    </span>
                  ))}
                </motion.h2>
                <motion.p
                  className="text-gray-50 text-base lg:text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 96 }}
                  animate={
                    contentVisible
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 96 }
                  }
                  transition={{
                    duration: 0.9,
                    delay: idx * 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {card.paragraph}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
