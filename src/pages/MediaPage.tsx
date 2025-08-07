import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import EventCard from "../components/News/EventCard";
// import NewsletterGallery from "../components/News/Newsletters";
import Articles from "../components/News/Articles";
import MediaGallery from "../components/News/MediaGallery";
import { mediaData } from "../data/mediaData";
import bgImage from "../assets/GRC_Elements/Gray_Texture_bkgd.jpg";

interface MediaEvent {
  title: string;
  image: string;
  category: string;
  date: string;
  location: string;
  media: string[];
}

const MediaPage: React.FC = () => {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

const [activeTab, setActiveTab] = useState<TabType>("events");
  const [mediaItems, setMediaItems] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<MediaEvent | null>(null);
  // const [showHighlights, setShowHighlights] = useState(false);
  // const [isClosing, setIsClosing] = useState(false);

  const [showGallery, setShowGallery] = useState(false);
  const [isGalleryClosing, setIsGalleryClosing] = useState(false);


const tabs = ["events", "articles"] as const;
type TabType = typeof tabs[number];

  // const highlightsRef = useRef<HTMLDivElement>(null); // ref for scrolling

 // ... existing imports remain the same

// const handleToggleHighlights = () => {
//   if (showHighlights) {
//     setIsClosing(true);
//     setTimeout(() => {
//       setShowHighlights(false);
//       setIsClosing(false);
//       window.scrollTo({ top: 0, behavior: "smooth" }); // ✨ Smooth scroll up on close
//     }, 600); // match exit duration
//   } else {
//     setShowHighlights(true);
//     setTimeout(() => {
//       highlightsRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   }
// };


const renderCards = () => {
  switch (activeTab) {
    case "events":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaData.events.map((event, idx) => (
            <EventCard
              key={idx}
              title={event.title}
              image={event.image}
              category={event.category}
              date={event.date}
              location={event.location}
              index={idx}
              onClick={() => {
                setMediaItems(event.media);
                setSelectedEvent(event);
                setShowGallery(true);
              }}
            />
          ))}
        </div>
      );
    // case "newsletters":
    //   return <NewsletterGallery />;
    case "articles":
      return <Articles />;
    default:
      return null;
  }
};


 return (
  <div className="text-gray-900 relative ">
    {/* ✅ Hero Section */}
    <div
      className="relative bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        height: "50vh",
      }}
    >
      <div className="p-6 rounded-lg text-center max-w-xl pt-32">
  <h1 className="text-5xl font-bold mb-4 relative shiny-text">MEDIA</h1>
  <h3 className="text-xl font-medium mb-2 relative shimmer-text">Explore our Highlights</h3>
  <p className="text-base mb-6 relative shimmer-text">
    From impactful events to insightful articles and the latest newsletters that shape our journey.
  </p>

  {/* ✅ Tab Buttons */}
  <div className="flex lg:flex-wrap justify-center gap-2 lg:gap-4">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`relative px-6 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out transform focus:outline-none
          ${
            activeTab === tab
              ? "bg-red-600 text-white scale-105 shadow-lg shadow-red-400/50 shimmer"
              : "bg-white text-red-600 hover:scale-105 hover:shadow-md"
          }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
</div>

    </div>

    {/* ✅ Dynamic Content Section */}
    <div className="px-4 py-12 bg-white ">
      {renderCards()}
    </div>

    {/* ✅ Media Gallery Overlay */}
    <AnimatePresence>
      {(showGallery || isGalleryClosing) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <MediaGallery
            items={mediaItems}
            eventTitle={selectedEvent?.title}
            onClose={() => {
              setIsGalleryClosing(true);
              setTimeout(() => {
                setShowGallery(false);
                setMediaItems([]);
                setSelectedEvent(null);
                setIsGalleryClosing(false);
              }, 400);
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

};

export default MediaPage;
