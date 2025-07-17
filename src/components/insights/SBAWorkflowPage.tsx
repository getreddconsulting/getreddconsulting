import React from "react";
import WomenLaptopBg from "../../assets/GRC_Elements/Woman_Laptop_photo_gray_bkgd.jpg";
import ArrowRed from "../../assets/GRC_Elements/Arrow_graphic_red.png";
import CrossGray from "../../assets/GRC_Elements/Cross_graphic_gray.png";
import CircleGray from "../../assets/GRC_Elements/Circle_graphic_gray.png";
import MouseIcon from "../../assets/GRC_Elements/Mouse_icon_circle.png"; // Adjust path if needed
const workflowSteps = [
  "Packaging & Pre-Qualification",
  "Underwriting",
  "Closing",
  "Secondary Market Sales",
  "Servicing Loans",
  "Reporting",
];

const SBAWorkflowPage: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-stretch overflow-hidden">
      {/* Background Image Full */}
      <img
        src={WomenLaptopBg}
        alt="SBA Workflow Background"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-right pointer-events-none select-none z-0"
        draggable={false}
      />
      {/* Gray Overlay Left Side */}
      <div className="absolute left-0 top-0 h-full w-full md:w-full lg:w-full bg-gradient-to-br from-gray-800/45 via-gray-800/80 to-transparent z-10" />
      {/* Content on Left Over Image/Gray */}
      <div className="relative z-20 flex flex-col justify-center items-start px-8 md:px-20 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-2 drop-shadow-lg">
          SBA <span className="block font-light">Workflow</span>
        </h1>
        <div className="h-1 w-32 bg-red-500 mt-4 mb-8" />
        <ul className="space-y-5 text-lg md:text-xl font-light text-white relative drop-shadow-lg">
          {workflowSteps.map((step) => (
            <li key={step} className="flex items-center gap-3">
              <img
                src={ArrowRed}
                alt="arrow"
                className="w-5 h-5 inline-block animate-bounce-right"
              />
              <span>{step}</span>
            </li>
          ))}
        </ul>
        {/* Decorative Crosses and Circles */}
        <img
          src={CrossGray}
          alt="cross"
          className="absolute left-2 lg:left-10 top-1/2 w-8 h-8 opacity-100 z-0 animate-pulse"
        />
        <img
          src={CircleGray}
          alt="circle"
          className="absolute left-0   top-1/4 w-6 h-6 opacity-100 z-0 animate-pulse"
        />
        <img
          src={CircleGray}
          alt="circle"
          className="absolute left-3/2 bottom-10 w-10 h-10 opacity-100 z-0 animate-pulse"
        />
        <img
          src={CrossGray}
          alt="cross"
          className="absolute left-1/3 top-1 w-10 h-10 opacity-100 z-0 animate-pulse"
        />
        <img
          src={CircleGray}
          alt="circle"
          className="absolute left-3/4 top-1/2 w-6 h-6 opacity-100 -z-0 animate-pulse"
        />
        <img
          src={CircleGray}
          alt="circle"
          className="absolute left-1/2 bottom-20 w-10 h-10 opacity-100 z-0 animate-pulse"
        />
        {/* </div> */}
      </div>
      {/* Red Mouse Icon in Circle */}
      <div className="absolute top-20 right-0 -translate-x-1/2 lg:left-auto lg:right-[52%] lg:top-[9.5rem] z-30 ">
        <div className="bg-red-600 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
          <img
            src={MouseIcon}
            alt="Mouse Icon"
            className="w-24 h-24 mt-5 mr-1"
          />
        </div>
      </div>
    </section>
  );
};

export default SBAWorkflowPage;
