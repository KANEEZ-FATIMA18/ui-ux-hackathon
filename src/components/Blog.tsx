import Image from "next/image";
import React from "react";

const blogPosts = [
  {
    id: 1,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/Frame 3.png",
  },
  {
    id: 2,
    author: "Surfuxion",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/2dcYhvbHV-M.png",
  },
  {
    id: 3,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/2dcYhvbHV-M (1).png",
  },
];

const LeatestBlog: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-center text-3xl font-bold text-blue-900 mb-8">
        Latest Blog
      </h1>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md shadow-md p-4 mx-auto w-full max-w-xs"
          >
            {/* Blog Image */}
            <Image
              src={post.imgSrc}
              alt={post.title}
              width={300}
              height={300}
              className="h-40 w-full object-cover rounded-md"
            />
            <div className="mt-4">
              {/* Author & Date */}
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              {/* Blog Title */}
              <h2 className="text-lg font-semibold text-gray-800 mt-2">
                {post.title}
              </h2>
              {/* Blog Description */}
              <p className="text-sm text-gray-600 mt-2">
                {post.description}
              </p>
              {/* Read More Button */}
              <button className="text-pink-500 underline mt-4">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeatestBlog;
