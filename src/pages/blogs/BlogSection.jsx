import React from "react";

const blogs = [
  {
    id: 1,
    category: "Shopping Tips",
    title: "Revamp Your Website Effectively",
    author: "Sujeet",
    date: "April 4, 2022",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    desc:
      "Improve your ecommerce UI with modern layouts and better user experience.",
  },
  {
    id: 2,
    category: "Fashion",
    title: "Block Unit",
    author: "Sakinshrestha",
    date: "April 20, 2022",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    desc:
      "Trending fashion ideas that convert visitors into customers.",
  },
  {
    id: 3,
    category: "Lifestyle",
    title: "A Rose Is A Woody Perennial",
    author: "Sujeet",
    date: "April 4, 2022",
    image: "https://images.unsplash.com/photo-1520975693419-5c91fce1c9e7",
    desc:
      "How lifestyle visuals impact ecommerce brand trust.",
  },
  {
    id: 4,
    category: "Shopping Tips",
    title: "Boost Your Online Store Sales",
    author: "Admin",
    date: "May 10, 2022",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47",
    desc:
      "Simple strategies to increase cart value and conversions.",
  },
  {
    id: 5,
    category: "Fashion",
    title: "Latest Fashion Trends 2024",
    author: "Team",
    date: "June 1, 2022",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    desc:
      "Discover the latest fashion trends shoppers love.",
  },
  {
    id: 6,
    category: "Ecommerce",
    title: "Why Product Images Matter",
    author: "Admin",
    date: "July 14, 2022",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    desc:
      "High-quality images boost customer trust and sales.",
  },
  {
    id: 7,
    category: "Shopping Tips",
    title: "Improve Cart Experience",
    author: "Sujeet",
    date: "Aug 2, 2022",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    desc:
      "Reduce cart abandonment with smart UX improvements.",
  },
  {
    id: 8,
    category: "Fashion",
    title: "Minimalist Fashion Store Design",
    author: "Team",
    date: "Sep 10, 2022",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    desc:
      "Clean and minimal layouts attract premium customers.",
  },
  {
    id: 9,
    category: "Ecommerce",
    title: "How Brands Build Trust Online",
    author: "Admin",
    date: "Oct 5, 2022",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    desc:
      "Trust signals that make customers buy confidently.",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Shopping & Style Blogs
          </h2>
          <p className="text-gray-500 mt-3">
            Latest updates, tips & trends from our store
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#cfa34a] transition">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {blog.author} · {blog.date}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.desc}
                </p>

                <button className="text-sm font-semibold text-[#cfa34a] hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
