import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BenjaminBg from "../../assets/GRC_Elements/Benjamin_bkgd.jpg";
import PencilIcon from "../../assets/GRC_Elements/Letter_icon_circle.png";

const ChallengesPanel: React.FC = () => {
  const iconRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Desktop horizontal icon animation
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    let animationFrame: number;
    const duration = 1500;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const percent = Math.min(elapsed / duration, 1);
      if (iconRef.current && lineRef.current) {
        const lineWidth = lineRef.current.offsetWidth;
        const iconWidth = iconRef.current.offsetWidth;
        const max = lineWidth - iconWidth;
        iconRef.current.style.left = `${percent * max}px`;
      }
      if (percent < 1) animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const columns = [
    {
      title: "Lending institutions face challenges due to:",
      items: [
        "Lack of understanding Small Business Administration’s (SBA) Standard Operating Procedures (SOP)",
        "Complex eligibility criteria",
        "Lengthy application process",
        "Loan structuring delays",
      ],
      border: true
    },
    {
      title: "Demand for:",
      items: [
        "Expert Guidance",
        "Ongoing support at all stages of the SBA lending process",
        "Specialized training",
      ],
      border: true,
    },
    {
      title: "Without expert guidance, you risk:",
      items: [
        "Jeopardize the SBA Guaranty",
        "Loss of fee income",
        "Missed growth opportunities",
        "Difficulty accessing SBA loans",
      ],
      border: true,
    },
  ];

  return (
    <section className="w-full h-full min-h-screen bg-white p-0 m-0 relative overflow-hidden">
      {/* 📷 Background image */}
      <img
        src={BenjaminBg}
        alt="Background"
        className="absolute inset-0 w-full h-full opacity-100 object-cover object-center z-0 hidden md:block"
        draggable={false}
      />

      {/* 🏷️ Challenges Title */}
      <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl md:text-7xl font-semibold text-black z-30 text-center md:top-1/2 md:left-[-13%] md:translate-x-1/2 md:-translate-y-1/2">
        Challenges
      </h1>

      {/* 🔴 Horizontal Line + Icon for Desktop */}
      <div className="absolute left-0 right-0 items-end hidden md:flex" style={{ bottom: "341px" }}>
        <div
          ref={lineRef}
          className="relative mx-auto w-full max-w-6xl h-0.5 z-20 bg-red-600"
        >
          <div
            ref={iconRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 shadow-lg flex items-center justify-center z-30 border-4 border-white"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              boxShadow: "0 4px 24px 0 rgba(183,28,28,0.16)",
            }}
          >
            <img
              src={PencilIcon}
              alt="Pencil Icon"
              className="w-8 h-8 md:w-14 md:h-14 md:mt-1"
            />
          </div>
        </div>
      </div>

      {/* 🔴 Vertical Line + Icon for Mobile */}
      <div className="absolute right-4 top-0 bottom-0 flex flex-col items-center md:hidden z-20">
        <div className="w-0.5 h-full bg-red-600 relative">
          <motion.div
  className="absolute bottom-0 -left-8 -translate-x-1/2 w-14 h-14 rounded-full bg-red-600 shadow-lg flex items-center justify-center border-4 border-white"
  initial={{ y: 0 }}
  animate={{ y: "-50vh" }}
  transition={{ duration: 1.5, ease: "easeOut" }}
  style={{ boxShadow: "0 4px 24px 0 rgba(183,28,28,0.16)" }}
>
  <img
    src={PencilIcon}
    alt="Pencil Icon"
    className="w-14 h-12 mt-2 mr-[0.1rem]"
  />
</motion.div>

        </div>
      </div>

      {/* 🔻 Bottom Content Panel */}
      <div className="w-full px-2 lg:px-0 z-20 md:absolute md:left-0 md:right-0 md:bottom-0">
  <div className="w-full mx-auto pt-16 md:pt-0 pb-10 px-4 lg:px-2">
    <div className="flex flex-col md:flex-row gap-6 w-[min(100%,1440px)] mx-auto px-4">
            {columns.map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`flex-1 min-w-[250px] px-2 py-4 rounded-md ${
                  i === 0 ? "bg-white md:bg-transparent" : ""
                } ${col.border ? "border-l-2 md:border-l-2 md:border-red-500" : ""}`}
              >
                <h3 className="font-bold text-gray-700 text-base mb-2">
                  {col.title}
                </h3>
                <ul className="list-none pl-0 space-y-2 text-sm text-gray-900">
                  {col.items.map((item, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + j * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-red-600 font-bold text-[10px] mt-1">
                        &#9632;
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesPanel;
