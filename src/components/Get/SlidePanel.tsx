import React from 'react';

interface SlidePanelProps {
  bar: {
    label: string;
    description: string;
    videoUrl: string;
  };
  onBack: () => void;
}

const SlidePanel: React.FC<SlidePanelProps> = ({ bar, onBack }) => {
  return (
    <div
      className="w-full bg-white shadow-xl 
                 flex flex-col lg:flex-row items-center justify-center
                 max-w-full mx-auto p-4 box-border
                  lg:rounded-none lg:h-full lg:w-full lg:max-w-none lg:relative lg:top-auto lg:left-auto lg:transform-none
                 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 z-50 
                 h-[50vh] mt-0 sm:mt-16 md:mt-0
                 overflow-y-auto rounded-xl"
    >
      {/* Video Section */}
      <div className="w-full lg:w-full h-[200px] lg:h-full p-2">
        <video
          className="w-full h-full object-cover rounded-lg"
          src={bar.videoUrl}
          autoPlay
          loop
         
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 h-full p-2 lg:p-8 flex flex-col justify-center">
        <h2 className="text-xl lg:text-2xl font-bold text-[#b71c1c] mb-4 whitespace-pre-line">
          {bar.label}
        </h2>
        <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
          {bar.description}
        </p>
        <button
          className="mt-6 self-start bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-2 px-4 rounded"
          onClick={onBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SlidePanel;
