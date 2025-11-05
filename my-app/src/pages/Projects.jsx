import React, { useState } from "react";
import { motion } from "framer-motion"; // ✅ animation import

const projectsData = {
  ongoing: [
    {
      title: "Metro Industrial Complex",
      location: "Mumbai, Maharashtra",
      description: "50,000 sq ft industrial facility with advanced trimix flooring",
      progress: 75,
      image: "/images/project1.jpg",
    },
    {
      title: "TechPark Office Building",
      location: "Pune, Maharashtra",
      description: "12-story commercial office complex with sustainable design",
      progress: 45,
      image: "/images/project2.jpg",
    },
    {
      title: "Warehouse Distribution Center",
      location: "Chennai, Tamil Nadu",
      description: "Modern logistics facility with specialized concrete flooring",
      progress: 60,
      image: "/images/project3.jpg",
    },
  ],
  completed: [
    {
      title: "Residential Towers",
      location: "Nagpur, Maharashtra",
      description: "Luxury high-rise apartments with eco-friendly features",
      progress: 100,
      image: "/images/project4.jpg",
    },
  ],
  upcoming: [
    {
      title: "Smart City Mall",
      location: "Hyderabad, Telangana",
      description: "Next-gen shopping complex with smart automation",
      progress: 0,
      image: "/images/project5.jpg",
    },
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("ongoing");
  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Expert Team" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <>
      {/* --- Hero Section --- */}
      <motion.section
        className="bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 text-white py-20 px-4 sm:px-8 text-center"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our Projects
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Explore our portfolio of successful construction projects and ongoing
            developments that showcase our expertise and commitment to excellence.
          </motion.p>
        </div>
      </motion.section>

      {/* --- Projects Section --- */}
      <motion.section
        className="py-16 px-4 sm:px-8 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["ongoing", "completed", "upcoming"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
              </motion.button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData[activeTab].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {project.progress < 100 && (
                    <span className="absolute top-3 right-3 bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                      In Progress
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-blue-600 text-sm font-medium">
                    {project.location}
                  </p>
                  <p className="text-gray-600 text-sm mt-2 mb-3">
                    {project.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Progress
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1 }}
                      ></motion.div>
                    </div>
                    <p className="text-right text-sm text-gray-700 mt-1">
                      {project.progress}%
                    </p>
                  </div>

                  {/* View Details */}   
                  <motion.a
                    href="#"
                    className="text-blue-600 text-sm font-medium mt-4 inline-flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    View Details →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- Statistics Section --- */}
      <motion.section
        className="bg-sky-600 text-white py-20 px-4 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Project Statistics
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-12">
            Numbers that reflect our commitment to excellence
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-4xl font-extrabold">{stat.value}</h3>
                <p className="mt-2 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
