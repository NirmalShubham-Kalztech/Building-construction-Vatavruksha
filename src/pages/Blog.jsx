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
      image: {BlogImage2}, // Replace with your actual image path
    },
    {
      id: 2,
      title: "Sustainable Construction Practices for the Future",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Sustainability",
      description:
        "Learn about eco-friendly construction methods and how we're implementing sustainable practices in our projects.",
      image: "../assets/img/Blog3.png",
    },
    {
      id: 3,
      title: "Metro Industrial Complex: Project Progress Update",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Project Updates",
      description:
        "Latest updates on our flagship project including construction milestones and upcoming phases.",
      image: "/images/metro-complex.jpg",
    },
  ];
  return (

    <> 
    <section className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Blog & Updates
        </h2>

        {/* Sub Text */}
        <p className="text-lg md:text-xl text-white/90">
          Stay updated with the latest insights, project updates, and industry
          trends in construction and infrastructure development.
        </p>
      </div>
    </section>


    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-md p-6 md:p-10">
        {/* Left Side Content */}
        <div>
          <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            FEATURED ARTICLE
          </span>

          <h2 className="text-3xl font-bold mt-4 text-gray-900">
            Why Trimix Flooring is Best for Industries
          </h2>

          <p className="text-gray-600 mt-4">
            Explore the revolutionary trimix flooring technology that's
            transforming industrial construction. Learn about its superior
            strength, durability, and cost-effectiveness compared to traditional
            flooring methods.
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
            <span>March 15, 2024</span>
            <span>5 min read</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
              Technology
            </span>
          </div>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Read Full Article
          </button>
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src={BlogImage} // 👈 तुझ्या ब्लॉगची image path इथे द्या
            alt="Trimix Flooring"
            className="w-full h-72 object-cover rounded-xl shadow"
          />
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest Articles
          </h2>
          <p className="text-gray-600 mt-2">
            Industry insights and project updates
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={BlogImage}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  {article.category}
                </span>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">
                  {article.date} &nbsp;&nbsp;•&nbsp;&nbsp; {article.readTime}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline inline-flex items-center"
                >
                  Read More{" "}
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
      </div>
    </section>


    <section className="bg-[#007bc3] py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-white text-lg mb-8">
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
            className="bg-white text-[#007bc3] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  





    </>



  );
}
