import { motion } from "framer-motion";

export interface EventCardProps {
  title: string;
  image: string | string[]; // Accept single or multiple images
  category?: string;
  date?: string;
  location?: string;
  onClick: () => void;
  index?: number; // for staggered delay
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  image,
  category,
  date,
  location,
  onClick,
  index = 0,
}) => {
  const displayImage = Array.isArray(image) ? image[0] : image;

  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="bg-white border border-gray-200 shadow hover:shadow-lg cursor-pointer overflow-hidden w-full max-w-sm"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
    >
      <img src={displayImage} alt={title} className="w-full h-72 object-cover" />
      <div className="p-4">
        {category && (
          <span className="text-xs font-bold text-red-600 uppercase block mb-1">
            {category}
          </span>
        )}
        {date && <p className="text-sm text-gray-500 mb-1">{date}</p>}
        <h2 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
          {title}
        </h2>
        {location && (
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <svg
              className="w-4 h-4 inline"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" />
            </svg>
            {location}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;
