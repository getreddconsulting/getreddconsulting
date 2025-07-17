// src/components/NewsletterGallery.tsx

import React from "react";
import { mediaData } from "../../data/mediaData";// adjust path if needed

const NewsletterGallery: React.FC = () => (
  <div className="space-y-12">
    {mediaData.newsletters.map((n, i) => (
      <div
        key={i}
        className={`flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""} gap-6`}
      >
        <img
          src={n.img}
          alt={n.title}
          className="w-full md:w-1/2 rounded-xl object-cover"
        />
        <div className="md:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-2">{n.title}</h3>
          <p className="text-gray-600">{n.content}</p>
        </div>
      </div>
    ))}
  </div>
);

export default NewsletterGallery;
