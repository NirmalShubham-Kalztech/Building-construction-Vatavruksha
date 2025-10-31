import React, { useState } from "react";

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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 text-white py-20 px-4 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Our Projects
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Explore our portfolio of successful construction projects and ongoing
            developments that showcase our expertise and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["ongoing", "completed", "upcoming"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData[activeTab].map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-48 object-cover"
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
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-sm text-gray-700 mt-1">
                      {project.progress}%
                    </p>
                  </div>

                  {/* View Details */}
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-medium mt-4 inline-flex items-center"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-sky-600 text-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Project Statistics
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-12">
            Numbers that reflect our commitment to excellence
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-4xl font-extrabold">{stat.value}</h3>
                <p className="mt-2 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
