import React from "react";
import BlogImage from "../assets/img/Blog1.png";
import BlogImage2 from "../assets/img/Blog2.png";
import BlogImage3 from "../assets/img/Blog3.png";

export default function BlogUpdates() {
  const articles = [
    {
      id: 1,
      title: "Why Trimix Flooring is Best for Industries",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      description:
        "Discover the advantages of trimix flooring technology and why it's becoming the preferred choice for industrial applications.",
      image: BlogImage2,
    },
    {
      id: 2,
      title: "Sustainable Construction Practices for the Future",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Sustainability",
      description:
        "Learn about eco-friendly construction methods and how we're implementing sustainable practices in our projects.",
      image: BlogImage3,
    },
    {
      id: 3,
      title: "Metro Industrial Complex: Project Progress Update",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Project Updates",
      description:
        "Latest updates on our flagship project including construction milestones and upcoming phases.",
      image: BlogImage,
    },
  ];

  return (
    <>
      {/* --- Blog Header Section --- */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-16 md:py-20 px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Blog & Updates
          </h2>
          <p className="text-base md:text-xl text-white/90 leading-relaxed">
            Stay updated with the latest insights, project updates, and industry
            trends in construction and infrastructure development.
          </p>
        </div>
      </section>

      {/* --- Featured Article Section --- */}
      <section className="bg-blue-50 py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-md p-6 md:p-10">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              FEATURED ARTICLE
            </span>

            <h2 className="text-2xl md:text-3xl font-bold mt-4 text-gray-900">
              Why Trimix Flooring is Best for Industries
            </h2>

            <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
              Explore the revolutionary trimix flooring technology that's
              transforming industrial construction. Learn about its superior
              strength, durability, and cost-effectiveness compared to
              traditional flooring methods.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6 text-sm text-gray-500">
              <span>March 15, 2024</span>
              <span>• 5 min read</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                Technology
              </span>
            </div>

            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition w-full sm:w-auto">
              Read Full Article
            </button>
          </div>

          {/* Right Image */}
          <div className="order-first md:order-last">
            <img
              src={BlogImage}
              alt="Trimix Flooring"
              className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-xl shadow"
            />
          </div>
        </div>
      </section>

      {/* --- Latest Articles Section --- */}
      <section className="bg-gray-50 py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest Articles
          </h2>
          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Industry insights and project updates
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  {article.category}
                </span>
              </div>

              <div className="p-5 text-left">
                <p className="text-sm text-gray-500 mb-2">
                  {article.date} &nbsp;•&nbsp; {article.readTime}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {article.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline inline-flex items-center"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Newsletter Section --- */}
      <section className="bg-[#007bc3] py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white text-base md:text-lg mb-8">
            Subscribe to our newsletter for the latest construction insights and project updates
          </p>

          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md w-full sm:w-80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="bg-white text-[#007bc3] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
