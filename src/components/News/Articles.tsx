import React from "react";
import { mediaData } from "../../data/mediaData";

type Article = {
  title: string;
  description: string;
  pdf: string;
  image: string;
};

const articles: Article[] = mediaData.articles.map((item) => ({
  title: item.title,
  description: item.description,
  pdf: item.pdf,
  image: item.cover,
}));

const Articles: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 w-full max-w-screen-xl mx-auto">
      {articles.map((article, index) => (
        <a
          key={index}
          href={article.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] block"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-bottom "
          />
          <div className="p-4">
            <h3 className="text-xl text-red-600 font-semibold">{article.title}</h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">{article.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Articles;
