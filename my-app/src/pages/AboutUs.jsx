import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/img/aboutimg.png";

const AboutUs = () => {
  return (
    <div id="about" className="overflow-hidden">

      {/* 🔷 Top Gradient Section */}
      <motion.section
        className="w-full py-20 md:py-24 text-white text-center px-4"
        style={{
          background: "linear-gradient(90deg, #0088cc, #1e66e9, #2160f4)",
        }}
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          About Our Company
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Discover our journey of building excellence and creating lasting infrastructure
          solutions for over 15 years.
        </motion.p>
      </motion.section>

      {/* 🏗️ Our Story Section */}
      <section className="px-5 sm:px-8 md:px-16 py-16 md:py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
              Our Story
            </h2>
            <p className="mb-5 leading-relaxed text-sm sm:text-base">
              Founded in 2009, our company began with a simple vision: to deliver exceptional
              construction quality while building lasting relationships with our clients.
            </p>
            <p className="mb-5 leading-relaxed text-sm sm:text-base">
              Over the years, we have specialized in trimix flooring and advanced concrete
              solutions, earning recognition for our innovative approaches and unwavering
              commitment to quality.
            </p>
            <p className="leading-relaxed text-sm sm:text-base">
              Today, we continue to push the boundaries of construction excellence,
              incorporating sustainable practices and cutting-edge technologies to deliver
              projects that stand the test of time.
            </p>
          </motion.div>

          {/* Right Image with Hover Zoom */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={AboutImage}
              alt="Our Team"
              className="w-full max-w-md md:max-w-lg h-auto rounded-xl shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </section>

      {/* 🎯 Vision & Mission Section */}
      <motion.section
        className="bg-white py-16 md:py-20 px-5 sm:px-8 md:px-16 text-center text-gray-800"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-base sm:text-lg mb-10 sm:mb-12 text-gray-600">
            Guiding principles that drive our commitment to excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Our Vision",
                bg: "bg-blue-50",
                iconBg: "bg-blue-600",
                text: "To create sustainable and strong infrastructure for future generations, setting new standards in construction quality and innovation.",
              },
              {
                title: "Our Mission",
                bg: "bg-gray-50",
                iconBg: "bg-gray-800",
                text: "Delivering quality construction and trimix flooring solutions that exceed expectations while maintaining safety and environmental standards.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`${item.bg} rounded-xl p-6 sm:p-8 shadow-md text-left hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`${item.iconBg} text-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center`}>
                    <span className="text-lg sm:text-xl font-bold">★</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold ml-3 sm:ml-4">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 👥 Leadership Section */}
      <motion.section
        className="bg-gray-50 py-16 md:py-20 px-5 sm:px-8 md:px-16 text-center text-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
            Leadership Team
          </h2>
          <p className="text-base sm:text-lg mb-10 sm:mb-12 text-gray-600">
            Meet the experienced professionals leading our company
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Rajesh Gupta", "Priya Sharma", "Amit Kumar"].map((name, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.2 }}
              >
                <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-4">
                  👷
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>
                <p className="text-blue-600 font-semibold mb-3">Team Leader</p>
                <p className="text-sm text-gray-600">
                  Leading our mission with vision, expertise, and dedication.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
