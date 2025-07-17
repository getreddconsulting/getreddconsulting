type VideoEvent = {
  title: string;
  thumbnail: string;
  desc: string;
};

const videos: VideoEvent[] = [
  {
    title: "Product Launch",
    thumbnail: "/images/video1.jpg",
    desc: "Watch the full launch highlights here.",
  },
  {
    title: "Team Culture Video",
    thumbnail: "/images/video2.jpg",
    desc: "Behind the scenes at our workplace.",
  },
];

const VideoGallery: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {videos.map((video, index) => (
      <div key={index} className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition">
        <img src={video.thumbnail} alt={video.title} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{video.title}</h3>
          <p className="text-sm text-gray-600">{video.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export default VideoGallery;
