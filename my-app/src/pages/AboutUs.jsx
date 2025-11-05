import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/img/aboutimg.png";
import About1 from "../assets/img/About1.png";
import About2 from "../assets/img/About2.jpg";
import About3 from "../assets/img/About3.jpg";
import About4 from "../assets/img/About4.jpg";
import About5 from "../assets/img/About5.jpg";
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
        >
          About Our Company
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Discover our journey of building excellence and creating lasting infrastructure
          solutions for over 15 years.
        </motion.p>
      </motion.section>

      {/* 🏗️ Our Story Section */}
      <section className="px-5 sm:px-8 md:px-16 py-16 md:py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
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

      {/* 🌟 Core Values Section */}
<motion.section
  className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-20 px-6 sm:px-10 text-center text-gray-800"
>
  <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-700">
    Our Core Values
  </h2>
  <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-base sm:text-lg">
    These are the guiding principles that shape our company culture and every project we deliver.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[
      {
        name: "Integrity",
        color: "from-yellow-100 to-yellow-50",
        icon: "🤝",
      },
      {
        name: "Safety",
        color: "from-red-100 to-pink-50",
        icon: "🦺",
      },
      {
        name: "Innovation",
        color: "from-green-100 to-emerald-50",
        icon: "💡",
      },
      {
        name: "Quality",
        color: "from-blue-100 to-indigo-50",
        icon: "🏗️",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        className={`bg-gradient-to-br ${item.color} rounded-xl shadow-lg py-10 flex flex-col items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        <div className="text-4xl mb-4">{item.icon}</div>
        <h3 className="font-bold text-xl text-gray-800">{item.name}</h3>
        <div className="w-10 h-1 bg-blue-600 mt-3 rounded-full"></div>
      </motion.div>
    ))}
  </div>
</motion.section>


      {/* 🏆 Achievements Section */}
      <motion.section className="bg-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: "15+", text: "Years Experience" },
            { number: "500+", text: "Projects Completed" },
            { number: "100+", text: "Happy Clients" },
            { number: "24/7", text: "Support Service" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-blue-50 shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{item.number}</h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🖼️ Gallery Preview Section */}
<motion.section className="bg-gray-50 py-20 text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-800">
    Our Work Gallery
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
    {[
      {
        src: About1,
        title: "Ongoing Building Construction Work",
        desc: "Current large-scale building development with advanced machinery.",
      },
      {
        src: About2,
        title: "Completed Residential & Commercial Projects",
        desc: "Beautifully completed housing and office complexes.",
      },
      {
        src: About3,
        title: "Road & Trimix Flooring Work",
        desc: "High-quality trimix flooring ensuring durability and finish.",
      },
      {
        src: About4,
        title: "Electrical & Civil Engineering Work",
        desc: "Expert team executing electrical and civil site installations.",
      },
      {
        src: About5,
        title: "Premium Architecture Showcase",
        desc: "Modern and elegant architectural projects built with precision.",
      },
      {
        src: About3,
        title: "Industrial Structure Progress",
        desc: "Strong industrial base work ensuring long-lasting performance.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>

  <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
    View Full Gallery
  </button>
</motion.section>


      {/* 💬 Testimonials Section */}
      <motion.section className="bg-white py-20 text-center text-gray-800">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              name: "Rohit Patil",
              text: "Excellent quality work! Highly satisfied with their dedication and timely delivery.",
            },
            {
              name: "Sneha Deshmukh",
              text: "Professional team, great communication, and outstanding results. Highly recommend!",
            },
            {
              name: "Akshay Jadhav",
              text: "They turned our vision into reality with top-notch workmanship. Great job!",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <p className="italic mb-4 text-gray-700">“{t.text}”</p>
              <h3 className="font-semibold text-blue-700">— {t.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 📞 Call to Action */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Your Next Project With Us?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Let’s connect and bring your ideas to life with our expert construction solutions.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </motion.section>
    </div>
  );
};

export default AboutUs;
