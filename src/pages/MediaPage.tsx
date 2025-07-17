import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import EventCard from "../components/News/EventCard";
import NewsletterGallery from "../components/News/Newsletters";
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
  const [activeTab, setActiveTab] = useState<"events" | "newsletters" | "articles">("events");
  const [mediaItems, setMediaItems] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<MediaEvent | null>(null);
  const [showHighlights, setShowHighlights] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [showGallery, setShowGallery] = useState(false);
  const [isGalleryClosing, setIsGalleryClosing] = useState(false);

  const highlightsRef = useRef<HTMLDivElement>(null); // ref for scrolling

 // ... existing imports remain the same

const handleToggleHighlights = () => {
  if (showHighlights) {
    setIsClosing(true);
    setTimeout(() => {
      setShowHighlights(false);
      setIsClosing(false);
      window.scrollTo({ top: 0, behavior: "smooth" }); // ✨ Smooth scroll up on close
    }, 600); // match exit duration
  } else {
    setShowHighlights(true);
    setTimeout(() => {
      highlightsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
};


const renderCards = () => {
  switch (activeTab) {
    case "events":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    case "newsletters":
      return <NewsletterGallery />;
    case "articles":
      return <Articles />;
    default:
      return null;
  }
};


  return (
    <div className="text-gray-900 relative">
      {/* ✅ Hero Section */}
      <div
        className="relative bg-cover bg-center text-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "60vh",
        }}
      >
        <div className="bg-black/60 p-6 rounded-lg text-center max-w-xl">
          <h1 className="text-5xl font-bold mb-4">MEDIA</h1>
          <h3 className="text-xl font-medium mb-2">Explore our Highlights</h3>
          <p className="text-sm">
            Discover events, newsletters, and articles from the GetRedd team.
          </p>
          <button
            onClick={handleToggleHighlights}
            className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition"
          >
            Explore Highlights
          </button>
        </div>
      </div>

      {/* ✅ Highlights Section */}
      <AnimatePresence>
        {(showHighlights || isClosing) && (
          <motion.div
            ref={highlightsRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row w-full px-4 py-12 bg-white"
          >
            {/* Sidebar */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0 flex flex-col items-center md:items-start">
              <h2 className="text-xl font-bold mb-6 text-gray-800">Highlights</h2>
              <ul className="space-y-4 font-medium text-gray-700 text-center md:text-left w-full">
                <li
                  onClick={() => setActiveTab("events")}
                  className={`cursor-pointer px-4 py-2 border-l-4 ${
                    activeTab === "events"
                      ? "border-red-600 text-red-600 font-bold"
                      : "border-transparent hover:border-gray-400"
                  }`}
                >
                  Events
                </li>
                <li
                  onClick={() => setActiveTab("newsletters")}
                  className={`cursor-pointer px-4 py-2 border-l-4 ${
                    activeTab === "newsletters"
                      ? "border-red-600 text-red-600 font-bold"
                      : "border-transparent hover:border-gray-400"
                  }`}
                >
                  Newsletters
                </li>
                <li
                  onClick={() => setActiveTab("articles")}
                  className={`cursor-pointer px-4 py-2 border-l-4 ${
                    activeTab === "articles"
                      ? "border-red-600 text-red-600 font-bold"
                      : "border-transparent hover:border-gray-400"
                  }`}
                >
                  Articles
                </li>
              </ul>
            </div>

            {/* Content Grid */}
            <div className="w-full md:w-3/4">
              <div>
                {renderCards()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
