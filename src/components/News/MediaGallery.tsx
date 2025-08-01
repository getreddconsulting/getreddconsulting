import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MediaGalleryProps {
  items: string[];
  onClose: () => void;
  eventTitle?: string;
  primaryImage?: string;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  items,
  onClose,
  // eventTitle,
  primaryImage,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const mediaItems = useMemo(() => {
    if (primaryImage && !items.includes(primaryImage)) {
      return [primaryImage, ...items];
    }
    return items;
  }, [primaryImage, items]);

  const currentIndex = useMemo(() => {
    return selectedItem ? mediaItems.findIndex((src) => src === selectedItem) : -1;
  }, [selectedItem, mediaItems]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedItem(mediaItems[currentIndex - 1]);
    }
  }, [currentIndex, mediaItems]);

  const goToNext = useCallback(() => {
    if (currentIndex < mediaItems.length - 1) {
      setSelectedItem(mediaItems[currentIndex + 1]);
    }
  }, [currentIndex, mediaItems]);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem, goToPrevious, goToNext]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 p-6 overflow-y-auto">
      <button
        className="absolute top-0 right-0 text-gray text-4xl font-medium hover:text-red-500 z-50   p-2 focus:outline-none focus:ring-0 border-none"
        onClick={onClose}
      >
        &times;
      </button>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {mediaItems.map((src, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden bg-white shadow-md cursor-pointer border-2 border-red-600 aspect-square"
            variants={{
              hidden: { opacity: 0, rotateY: 90 },
              visible: { opacity: 1, rotateY: 0, transition: { duration: 0.5 } },
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItem(src);
            }}
          >
            {src.endsWith(".mp4") ? (
  <video
    controls
    className="w-full h-full object-cover"
  >
    <source src={src} type="video/mp4" />
  </video>
) : (
  <img
    src={src}
    alt={`Media ${idx + 1}`}
    className="w-full h-full object-cover"
  />
)}

          </motion.div>
        ))}
      </motion.div>

     <AnimatePresence>
  {selectedItem && (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="max-w-3xl w-full p-4 bg-white relative flex flex-col items-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        {selectedItem.endsWith(".mp4") ? (
          <video
            controls
            autoPlay
            className="w-full h-auto max-h-[80vh] object-contain"
          >
            <source src={selectedItem} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={selectedItem}
            alt="Selected"
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        )}

        {/* Close Button */}
        <button
          className="absolute -top-6 -right-10 text-gray-700 hover:text-red-500 bg-transparent text-4xl focus:outline-none focus:ring-0 border-none"
          onClick={() => setSelectedItem(null)}
          aria-label="Close gallery"
        >
          &times;
        </button>

        {/* Arrows – Desktop */}
        {currentIndex > 0 && (
          <button
            className="hidden sm:block fixed left-[10%] top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-red-500 text-2xl lg:text-5xl z-[100] bg-transparent transition-colors focus:outline-none focus:ring-0 border-none"
            onClick={goToPrevious}
            aria-label="Previous media"
          >
            ‹
          </button>
        )}
        {currentIndex < mediaItems.length - 1 && (
          <button
            className="hidden sm:block fixed right-[10%] top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-red-500 text-2xl lg:text-5xl z-[100] bg-transparent transition-colors focus:outline-none focus:ring-0 border-none"
            onClick={goToNext}
            aria-label="Next media"
          >
            ›
          </button>
        )}

        {/* Arrows – Mobile */}
        {currentIndex > 0 && (
          <button
            className="block sm:hidden absolute bottom-4 left-0 text-red-600 hover:text-red-500 text-3xl bg-white p-1 px-2 rounded-lg shadow-md z-10 focus:outline-none focus:ring-0 border-none"
            onClick={goToPrevious}
            aria-label="Previous media"
          >
            ‹
          </button>
        )}
        {currentIndex < mediaItems.length - 1 && (
          <button
            className="block sm:hidden absolute bottom-4 right-0 text-red-600 hover:text-red-500 text-3xl bg-white p-1 px-2 rounded-lg shadow-md z-10 focus:outline-none focus:ring-0 border-none"
            onClick={goToNext}
            aria-label="Next media"
          >
            ›
          </button>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default MediaGallery;
