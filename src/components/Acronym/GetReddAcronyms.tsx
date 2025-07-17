import React, { useState, useEffect, useRef } from "react";
import { motion, easeOut } from "framer-motion";
import { useLocation } from "react-router-dom";
import BirdImage from "../../assets/logo/GRC Logo.png";

const ACRONYMS = [
  { letter: "G", word: "rowth" },
  { letter: "E", word: "mpowerment" },
  { letter: "T", word: "enacity" },
  { letter: "R", word: "apid" },
  { letter: "E", word: "ntrepreneurial" },
  { letter: "D", word: "ynamic" },
  { letter: "D", word: "evelopment" },
];

const GetReddAcronymBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const barRef = useRef<HTMLDivElement>(null);

  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;
  const isHome = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const opacity = isMobile && isHome && !isOpen ? 0.2 : 1;
  const barHeight = isMobile ? "13rem" : isTablet ? "11rem" : "9rem";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.2 } },
  };

  const birdVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: easeOut },
    },
  };

  return (
    <motion.div
      ref={barRef}
      className="fixed left-0 top-1/3 z-50 flex items-center lg:items-start overflow-hidden shadow-md"
      animate={{ width: isOpen ? "fit-content" : "3rem", opacity }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        backgroundColor: "#b71c1c",
        cursor: "pointer",
        color: "white",
        fontWeight: "bold",
        letterSpacing: "0.1em",
        borderRadius: 0,
        height: barHeight,
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className="text-white flex justify-center items-center"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          padding: "0.5rem",
          fontSize: isMobile ? "0.55rem" : isTablet ? "0.7rem" : "0.8rem",
          lineHeight: "1.6rem",
        }}
      >
        GETREDD
      </div>

      {isOpen && (
        <motion.div
          className={`px-4 py-2 h-full bg-gray-100 text-gray-800 flex ${
            isMobile ? "flex-col gap-0 items-start" : "gap-4 items-center"
          }`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {ACRONYMS.map(({ letter, word }, index) => (
            <motion.div
              key={index}
              className={`flex ${isMobile ? "items-baseline" : "items-end"}`}
              variants={itemVariants}
            >
              <span
                className={`text-red-600 font-extrabold ${
                  isMobile ? "text-xl" : isTablet ? "text-xl" : "text-3xl"
                }`}
              >
                {letter}
              </span>
              <span
                className={`font-medium ${
                  isMobile ? "text-sm" : isTablet ? "text-sm" : "text-xl"
                }`}
              >
                {word}
              </span>
            </motion.div>
          ))}

          <motion.img
            src={BirdImage}
            alt="Bird Logo"
            className="w-18 h-16 ml-0 mt-1"
            variants={birdVariants}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default GetReddAcronymBar;
