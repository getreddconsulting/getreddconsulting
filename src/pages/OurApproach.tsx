import {  useState } from "react";
import classNames from "classnames";
import ChallengesSection from "../components/insights/Challenges";
import OurProcess from "../components/insights/Complexities";
import SBAWorkflowPage from "../components/insights/SBAWorkflowPage";
// import { lockScroll, unlockScroll } from "../utils/scrollLock"; // no longer needed directly
import useScrollLock from "../hooks/useScrollLock";

const labels = ["SBA Workflow", "Challenges", "Complexities"];

const labelContent = [
  {
    title: "SBA Workflow",
    desc: "Step-by-step guidance through the SBA lending process, ensuring clarity and compliance at every stage.",
  },
  {
    title: "Challenges",
    desc: "Identifying and overcoming common obstacles in SBA lending, from documentation to approval.",
  },
  {
    title: "Complexities",
    desc: "Expert navigation of regulatory, financial, and operational complexities unique to SBA programs.",
  },
];

export default function OurApproach() {
  const [active, setActive] = useState(0);
  const [showPanel, setShowPanel] = useState(false);
  const [selectedExplore, setSelectedExplore] = useState<number | null>(null);

  // 🔒 Lock scroll when panel is open
  useScrollLock(showPanel);

  
  const handleExplore = (idx: number) => {
    setActive(idx);
    setSelectedExplore(idx);
    setShowPanel(true);
  };

  const renderPanelContent = () => {
    switch (selectedExplore) {
      case 0:
        return <SBAWorkflowPage />;
      case 1:
        return <ChallengesSection />;
      case 2:
        return <OurProcess />;
      default:
        return null;
    }
  };

  return (
    <div
      id="our-approach"
      className="relative bg-black text-white py-16 px-6 lg:px-16 overflow-hidden"
    >
      {/* Vertical red line */}
      <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-red-500 to-red-700 rounded-full" />

      <div className="ml- lg:ml-14">
        <p className="text-red-500 uppercase text-base font-semibold tracking-widest mb-4">
          SBA Lending Insight
        </p>

        <h2 className="text-3xl text-gray-700 md:text-4xl font-light leading-snug mb-6">
          Understand the{" "}
          <span className="font-extrabold">SBA process, challenges</span> and{" "}
          <br />
          how we simplify <span className="font-extrabold">
            complexities
          </span>{" "}
          for small businesses and lenders.
        </h2>

        <div className="flex flex-wrap gap-4 mb-6">
          {labels.map((label, idx) => (
            <button
              key={label}
              onClick={() => handleExplore(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-800 ${
                active === idx
                  ? " text-red-700 shadow-md scale-105 border border-red-800 hover:bg-red-100"
                  : "bg-white text-red-700 border border-red-800 hover:bg-red-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="bg-black text-gray-700 border-l-2 border-red-500 pl-6 py-4 max-w-3xl">
          <h3 className="text-2xl font-bold mb-2 text-red-500">
            {labelContent[active].title}
          </h3>
          <p className="text-gray-700">{labelContent[active].desc}</p>
        </div>

        {/* Explore Button */}
        {/* <button
          className="mt-4 px-8 py-2 bg-red-600 text-white font-semibold rounded-none shadow-md hover:bg-red-700 transition-all duration-300"
          onClick={handleExplore}
        >
          Explore
        </button> */}
      </div>

      {/* Slide-in Panel */}
      {showPanel && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/80  transition-opacity duration-500 ease-in-out"
            onClick={() => setShowPanel(false)}
          />

          {/* Panel */}
         <div
  className={classNames(
    "ml-auto h-full bg-black text-white shadow-2xl transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] w-full xl:w-[60%]",
    {
      "translate-x-0": showPanel,
      "translate-x-full": !showPanel,
    }
  )}
>

            {/* Mobile Back Button */}
<button
  onClick={() => setShowPanel(false)}
  className="lg:hidden  absolute top-4 left-4 bg-red-600 text-white font-bold rounded-full shadow-lg p-3 z-[9999] hover:bg-red-700 transition-all duration-300 flex items-center justify-center w-11 h-11"
  aria-label="Back"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>


            {/* Desktop Back Button */}
            {/* <button
        onClick={() => setShowPanel(false)}
        className="hidden md:block text-red-400 text-sm underline m-6"
      >
        ← Back to SBA Overview
      </button> */}

            {/* Dynamic Panel Content */}
            {renderPanelContent()}
          </div>
        </div>
      )}
    </div>
  );
}
