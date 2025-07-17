import React from "react";

interface SectionTabsProps {
  active: string;
  onSelect: (type: string) => void;
}

const tabs = ["events", "articles", "newsletters"];

const SectionTabs: React.FC<SectionTabsProps> = ({ active, onSelect }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
    {tabs.map((type) => (
      <div
        key={type}
        onClick={() => onSelect(type)}
        className={`p-4 rounded-xl text-center shadow-lg bg-white text-gray-900 font-semibold text-xl cursor-pointer transition-transform hover:scale-105 ${
          active === type ? "border-2 border-red-600" : ""
        }`}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
    ))}
  </div>
);

export default SectionTabs;
