import { useEffect, useState } from "react";
import LeadershipCard from "./LeadershipCard";
import LeadershipModal from "./LeadershipModal";

const BlogOrLeadership = () => {
  const [showModal, setShowModal] = useState(false);
  

  // Optional: close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="blog"
      className="w-full flex flex-col items-center justify-center  bg-white"
    >
      <LeadershipCard onReadMore={() => setShowModal(true)} />
      {showModal && <LeadershipModal onClose={() => setShowModal(false)} />}
        
    </section>
  );
};

export default BlogOrLeadership;
