import React from "react";
import { motion } from "framer-motion";
import MilaPhoto from "../../assets/GRC_Elements/Mila_Esquerdo_photo.png";
import briefcaseIcon from "../../assets/GRC_Elements/Briefcase_icon_circle.png";
import { Linkedin, Instagram } from "lucide-react";
import Getreddfoundation from "../../assets/logo/getredd-foundation.png";
import Naggl from "../../assets/logo/Naggl-logo.jpg";
import Flaggl from "../../assets/logo/flaggl-logo.png";
import useScrollLock from "../../hooks/useScrollLock";

type LeadershipModalProps = {
  onClose: () => void;
};

const contentBlocks = [
  "Liudmila Esquerdo is a visionary leader and renowned expert in SBA lending and commercial real estate. With over two decades of experience driving business growth and community development, she is the Founder and CEO of Get Redd Consulting.",
  "A seasoned banking executive, she previously served as SVP & SBA Director at US Century Bank, where she developed and managed high-performing Small Business Lending Departments, oversaw SBA loan servicing, and built strategic partnerships.",
  "Beyond professional success, Liudmila is deeply committed to giving back. She supports initiatives focused on economic empowerment, education, and healthcare. Through the GETREDD Foundation, she provides essential resources to individuals and families affected by rare blood disorders.",
  "Today, Liudmila provides strategic training and consulting for financial institutions aiming to launch or grow their SBA lending programs. Her concierge approach empowers Business Development Officers and enhances operations, including secondary market strategies.",
  "A respected speaker, mentor, and advocate, she champions equitable access to economic opportunity and inspires others to make meaningful change.",
  "She holds an Associate in Business Administration from Miami-Dade Community College and a Bachelor’s in Finance and Economics from Barry University. Liudmila is also an active member of industry associations like NAGGL and FLAGGL.",
];

const LeadershipModal: React.FC<LeadershipModalProps> = ({ onClose }) => {
    useScrollLock(true);


  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center overflow-hidden">
      <div className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 overflow-hidden">
        {/* ❌ Close Button */}
        <button
          className="absolute -top-3 -right-3 text-2xl font-bold text-gray-600 hover:text-red-700 z-50 bg-transparent outline-none focus:outline-none focus:ring-0 border-none"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* 👩‍💼 Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[35%]">
          <div className="relative">
            <img
              src={MilaPhoto}
              alt="Liudmila Esquerdo"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-8 border-white shadow-lg"
            />
            <img
              src={briefcaseIcon}
              alt="Briefcase Icon"
              className="absolute -top-4 -left-4 w-14 h-14 sm:w-20 sm:h-20"
            />
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-800">
              The <span className="text-red-700">Expert</span>
            </h2>
            <p className="text-lg font-semibold text-gray-800 mt-1">
              Liudmila Esquerdo
            </p>
            <p className="italic text-sm text-gray-600">
              Founder & CEO of Get Redd Consulting<sup>™</sup>
            </p>

            <div className="mt-4 flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/milaesquerdo/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-red-700"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/getreddconsulting"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-red-700"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* 📄 Right Side: Animated Content */}
        <div className="w-full md:w-[65%] pl-4 pr-2 overflow-y-auto border-l-2 border-red-600">
          {contentBlocks.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="mb-6 text-gray-800 text-sm sm:text-base text-justify leading-relaxed"
            >
              {text.includes("GETREDD Foundation") ? (
                <>
                  Beyond professional success, Liudmila is deeply committed to
                  giving back. She supports initiatives focused on economic
                  empowerment, education, and healthcare. Through the{" "}
                  <a
                    href="https://getredd.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-700 font-semibold inline-flex items-center"
                  >
                    <img
                      src={Getreddfoundation}
                      alt="GETREDD Foundation"
                      className="w-5 h-5 mr-1"
                    />
                    GETREDD Foundation
                  </a>
                  , she provides essential resources to individuals and families
                  affected by rare blood disorders.
                </>
              ) : text.includes("NAGGL") ? (
                <>
                  She holds an Associate in Business Administration from
                  Miami-Dade Community College and a Bachelor’s in Finance and
                  Economics from Barry University. Liudmila is also an active
                  member of industry associations like{" "}
                  <a
                    href="https://www.naggl.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-700 font-semibold inline-flex items-center"
                  >
                    NAGGL{" "}
                    <img src={Naggl} alt="Naggl" className="h-5 w-5 ml-1" />
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://flaggl.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-700 font-semibold inline-flex items-center"
                  >
                    FLAGGL{" "}
                    <img src={Flaggl} alt="Flaggl" className="h-5 w-5 ml-1" />
                  </a>
                  .
                </>
              ) : (
                text
              )}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipModal;
