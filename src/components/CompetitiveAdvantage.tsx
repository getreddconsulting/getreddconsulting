import { useRef, useEffect, useState } from "react";
import logo from "../assets/logo/getredd-logo-removebg-preview.png";
import bellIcon from "../assets/GRC_Elements/Bell_icon_circle.png";
import { MockData } from "../data/Mockdata"; // ✅ Make sure the path is correct and file is exporting `MockData`

interface AdvantagePoint {
  title: string;
  description: string;
}

const CompetitiveAdvantage = () => {
  const bellRef = useRef<HTMLDivElement>(null);
  const [bellVisible, setBellVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setBellVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (bellRef.current) observer.observe(bellRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="advantage"
      className="w-full lg:min-h-screen bg-white relative overflow-visible px-4 md:px-0 flex flex-col md:flex-row"
    >
      {/* Left Side: Logo and Branding */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 relative z-10">
        <img
          src={logo}
          alt="GetRedd Logo"
          className="w-auto h-40 mb-8 mt-0 -ml-28"
        />
        <div className="ml-28">
          <span className="text-5xl font-bold text-black mb-8" style={{ fontFamily: "inherit" }}>
            Get<span className="text-red-700">Reddy</span>
            <sup className="text-lg ml-1">™</sup>
          </span>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="flex-1 flex flex-col lg:justify-center py-16 md:py-16 px-2 sm:px-4 md:px-8 lg:pr-24">
        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto items-start">
          {/* Timeline line and bell for desktop */}
          <div className="hidden md:flex flex-col items-center relative mr-8 md:mr-12">
            <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] bottom-[-300px] lg:top-[-40px] lg:bottom-[-40px] w-0.5 bg-red-600" />
            <div
              ref={bellRef}
              className={`relative z-10 mt-[300px]  lg:mt-[180px] mb-[180px] transition-all duration-[1600ms] ease-out ${
                bellVisible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
              }`}
            >
              <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-xl border-8 border-white">
                <img
                  src={bellIcon}
                  alt="Bell Icon"
                  className="w-24 h-24 mt-4 mr-1 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Points */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-black">
              Why GET<span className="text-red-700">REDD</span> Stands Out
            </h2>
            <ul className="space-y-4 sm:space-y-6">
              {MockData.whygetredd.map((point: AdvantagePoint, index: number) => (
                <li key={index} className="flex items-start gap-2 sm:gap-4">
                  <div className="hidden md:block w-6 flex-shrink-0 relative">
                    <span className="block w-3 h-3 rounded-full bg-red-600 absolute left-1/2 -translate-x-1/2 top-2" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="font-bold text-red-700 uppercase">{point.title}:</span>
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed mt-1">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;
