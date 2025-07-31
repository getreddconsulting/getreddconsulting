import { motion } from "framer-motion";
import PaperAirplanesBg from "../../assets/GRC_Elements/Paper_airplanes_bkgd.jpg";
import Logo from "../../assets/logo/getredd-logo-removebg-preview.png";
import CircleGraphic from "../../assets/GRC_Elements/Circle_graphic_gray.png";

const services = [
  "Training & Staffing",
  "Back Office Support",
  "Credit Underwriting",
  "Online Platform tools",
  "Closing Team Assistance",
  "Secondary Market Sales",
  "Servicing Solutions",
  "Liquidations",
  "Reporting Tools",
];

const Complexities = () => {
  return (
    <section
      id="process"
      className="w-full min-h-screen relative flex justify-start items-center py-20 bg-gray-50 overflow-hidden"
    >
      {/* Background image */}
      <img
        src={PaperAirplanesBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        style={{ objectPosition: "60% 70%" }}
      />

      {/* Logo top-left */}
      <img
        src={Logo}
        alt="GETREDD Logo"
        className="absolute top-20 -left-20 w-[70%] lg:w-[40%] z-10 select-none"
      />

      {/* Circle behind text */}
      <img
        src={CircleGraphic}
        alt="Circle Graphic"
        className="absolute top-[30%] left-[250px] w-10 h-10 opacity-30 z-0"
      />

      {/* Animated Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-start text-left"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-lg mb-2">
          Navigating <strong>SBA</strong> Lending Complexities
        </h2>

        {/* Red underline */}
        <div className="h-0.5 bg-red-600 mb-6" style={{ width: "320px" }}></div>

        {/* List */}
        <ul className="text-white text-lg font-medium drop-shadow-md list-none space-y-2">
          {services.map((item, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-red-500 mt-1 text-xl">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Complexities;
