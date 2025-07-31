import React, { useState } from "react";
import { motion } from "framer-motion";
import Business from "../../assets/extra/BusinessOwners.jpeg";
import Finance from "../../assets/extra/financial.jpeg";

interface SectionData {
  title: string;
  image: string;
  summary: string;
  details: { header: string; points: string[] }[];
  endingNote: string;
}

const businessData: SectionData = {
  title: "Business Owners",
  image: Business,
  summary: "For those building bold, scalable businesses with the right SBA support.",
  endingNote: "Let’s grow with confidence.",
  details: [
    {
      header: "GET GROWING",
      points: [
        "Business owners — ready to scale with support?",
        "We equip entrepreneurs with the planning and tools to grow boldly.",
        "Launch and grow with confidence",
        "Build strong projections & narratives",
        "Position your business for funding & success"
      ]
    },
    {
      header: "GET GOING",
      points: [
        "Your SBA journey starts here.",
        "We equip and connect you to Certified SBA lenders ready to fund your loan to support your short and long-term success."
      ]
    }
  ]
};

const financeData: SectionData = {
  title: "Financial Institutions",
  image: Finance,
  summary: "For lenders & institutions shaping smarter SBA programs with impact.",
  endingNote: "Let’s build a smarter, faster, and more profitable SBA program — together.",
  details: [
    {
      header: "GET REDD-Y TO STAND OUT",
      points: [
        "Becoming an SBA expert sets you apart.",
        "We specialize in SBA 7(a), 504, and commercial real estate loans — helping financial institutions and business owners move faster, smarter, and with purpose."
      ]
    },
    {
      header: "GET FEE INCOME",
      points: [
        "Turn SBA into a real revenue stream.",
        "We help you scale SBA lending with strategy, structure, and results.",
        "Align your SBA division with your lending vision",
        "Train and empower your team",
        "Create compliant policies and procedures"
      ]
    },
    {
      header: "GET THE DEAL",
      points: [
        "Brokers and Partners — Ready to Fund Faster & Smarter?",
        "Join our network and gain insider access to the knowledge, support, and infrastructure you need to succeed.",
        "Step-by-step SBA training that helps you win approvals, not just submit applications",
        "A trusted network of certified lenders and partners to move your deals forward",
        "The tools and confidence to fund the right way — every time",
        "Back-office support that keeps your operation running smoothly and efficiently",
        "Portfolio protection through proper packaging, due diligence, and best practices",
        "Let’s elevate your business, protect your portfolio, and help you meet your community needs with confidence."
      ]
    },
    {
      header: "GET RESULTS",
      points: [
        "SBA done right leads to real growth.",
        "We help you expand your loan portfolio, boost efficiency, and manage risk — all while staying compliant.",
        "Close more loans with stronger servicing and smarter evaluations",
        "Streamline operations to speed up processing and reduce overhead",
        "Minimize risk with SBA guarantees and credit protections",
        "Unlock secondary market sales for increased fee income",
        "Gain CRA credit benefits while serving your community"
      ]
    }
  ]
};

const DualCardsSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<"business" | "finance" | null>(null);

  const renderExpandedView = (data: SectionData, type: "business" | "finance") => (
    <div
      className="relative h-full w-full flex flex-col justify-between bg-cover bg-center text-white shadow-xl overflow-hidden"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 p-6 overflow-y-auto flex-grow space-y-6">
        <button
          onClick={() => setActiveCard(null)}
          className="absolute top-3 right-4 text-white hover:text-red-300 text-2xl font-bold bg-transparent focus:outline-none border-none"
        >
          ✕
        </button>

        <h3 className="text-3xl font-bold text-white">{data.title}</h3>

        {data.details.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="space-y-1"
          >
            <h4 className="text-lg font-bold text-red-500 uppercase">{section.header}</h4>
            <p className="text-base text-gray-200">{section.points[0]}</p>
            {section.points.length > 1 && (
              <ul className="list-disc pl-6 text-sm font-semibold text-gray-300 space-y-1">
                {section.points.slice(1).map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        <p className="text-sm text-gray-100 font-medium mt-6">{data.endingNote}</p>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 p-4 text-right">
        <a
          href={
            type === "business"
              ? "https://form.typeform.com/to/pWtAPyKf?typeform-source=getreddconsulting.com"
              : "https://form.typeform.com/to/BCPjYXxl?typeform-source=getreddconsulting.com"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white bg-[#d32f2f] hover:bg-[#b71c1c] px-4 py-2 rounded shadow"
        >
          GET IN TOUCH
        </a>
      </div>
    </div>
  );

  const renderCard = (data: SectionData, type: "business" | "finance") => (
  <div className="w-full h-[650px] overflow-hidden flex justify-center items-start">
    {activeCard === type ? renderExpandedView(data, type) : (
      <div className="bg-white shadow-lg w-[600px] h-full flex flex-col">
        <div className="w-full h-[500px] flex items-center justify-center overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-3 flex flex-col flex-grow justify-start">
          <h3 className="text-xl font-semibold text-[#b71c1c]">{data.title}</h3>
          <p className="text-sm text-gray-700 my-2">{data.summary}</p>
          <button
            onClick={() => setActiveCard(type)}
            className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-4 py-2 rounded mt-auto"
          >
            More Details
          </button>
        </div>
      </div>
    )}
  </div>
);


  return (
    <div className="min-h-px bg-[#f4f8fc] px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">{renderCard(businessData, "business")}</div>
        <div className="w-full md:w-1/2">{renderCard(financeData, "finance")}</div>
      </div>
    </div>
  );
};

export default DualCardsSection;
