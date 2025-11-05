import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// --- Image Imports ---
import image from "../assets/img/image.jpg"; // Info section image
import img1 from "../assets/img/image1.png";
import img2 from "../assets/img/image2.png";
import img3 from "../assets/img/image3.png";
import img4 from "../assets/img/image4.png";
import img5 from "../assets/img/image5.png";

const images = [img1, img2, img3, img4, img5];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🌇 Hero Section */}
      <div className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center sm:justify-start overflow-hidden">
        <motion.div
          key={currentImage}
          className="absolute inset-0 bg-cover bg-center transition-all duration-[2000ms]"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-5xl px-4 sm:px-8 md:px-16 py-20 text-center sm:text-left">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Strong Foundations,<br className="hidden sm:block" /> Lasting Trust
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto sm:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Vatavruksha Infra Project - With over 15 years of expertise in
            construction and trimix flooring, we deliver exceptional
            infrastructure solutions that stand the test of time.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="#"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-lg sm:text-xl font-semibold rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
            >
              Get Quote
            </a>
            <a
              href="#"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 text-lg sm:text-xl font-semibold rounded-lg shadow hover:bg-blue-100 hover:scale-105 transition-transform duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* 🏗️ Info Section */}
      <div className="w-full bg-[#fafbfc] py-12 sm:py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-left">
            <h5 className="text-xl sm:text-2xl font-extrabold text-[#02080e] mb-4 sm:mb-6 leading-snug">
              Vatavruksha Infra Project - Building Excellence<br className="hidden sm:block" /> Since 2009
            </h5>
            <p className="text-sm sm:text-base md:text-lg text-[#22313f] mb-4">
              Vatavruksha Infra Project is a leading construction company
              specializing in high-quality concrete works, trimix flooring, and
              comprehensive infrastructure solutions.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#22313f] mb-8">
              With a team of experienced engineers and skilled craftsmen, we
              have successfully completed over 200 projects across various
              sectors.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-20">
              {[
                { value: "200+", label: "Projects Completed" },
                { value: "15+", label: "Years Experience" },
                { value: "50+", label: "Expert Team" },
              ].map((stat) => (
                <div key={stat.value} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-[#22313f]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={image}
              alt="Vatavruksha Infra Project Team"
              className="rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* 🚧 Current Project Section */}
      <div className="text-center py-12 bg-white overflow-hidden">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#02080e] mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Current Project in Progress
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#22313f]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Watch our latest construction project come to life
        </motion.p>
      </div>

      {/* 🔨 Project Details Section */}
      <div className="w-full bg-[#f0f7ff] py-12 sm:py-16 px-4 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Text Section */}
          <motion.div
            className="space-y-4 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm uppercase tracking-wide">
              Under Construction
            </motion.span>
            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#02080e]">
              Metro Industrial Complex
            </motion.h2>
            <motion.p className="text-sm sm:text-base md:text-lg text-[#22313f]">
              A state-of-the-art 50,000 sq ft industrial facility featuring
              advanced trimix flooring technology and sustainable design.
            </motion.p>
            <ul className="space-y-2 pt-2 text-left">
              <li>✔️ Foundation Work: Completed</li>
              <li>✔️ Structural Framework: 80% Complete</li>
              <li>⏳ Trimix Flooring: In Progress</li>
            </ul>
            <div className="pt-4">
              <a
                href="/projects"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
              >
                View All Projects
              </a>
            </div>
          </motion.div>

          {/* Animated Project Images Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  staggerChildren: 0.3,
                  duration: 1.2,
                  ease: "easeOut",
                },
              },
            }}
          >
            {[img1, img2, img3, img4].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Project ${i + 1}`}
                className="rounded-xl shadow-md object-cover w-full h-40 sm:h-48 transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-2xl"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* 🧱 Services Section */}
      <div className="bg-white py-16 px-6 md:px-16">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#02080e] mb-12">
          Our Core Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Trimix Flooring",
              desc: "High-quality flooring for industrial and commercial projects with smooth, durable finishes.",
            },
            {
              title: "Building Construction",
              desc: "Complete civil construction services from design to handover ensuring top-notch quality.",
            },
            {
              title: "Road & RCC Work",
              desc: "Strong and long-lasting roads with advanced RCC technology for durability.",
            },
            {
              title: "Industrial Sheds",
              desc: "Fabrication and construction of high-strength industrial sheds and warehouses.",
            },
            {
              title: "Structural Design",
              desc: "Efficient and modern structural designs tailored to client needs.",
            },
            {
              title: "Maintenance & Repair",
              desc: "Periodic maintenance and repair solutions for sustained performance.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#f7f9fc] rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                {service.title}
              </h3>
              <p className="text-[#22313f] text-sm md:text-base">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🖼️ Gallery Section */}
      {/* <div className="bg-[#f9fafb] py-16 px-6 md:px-16">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#02080e] mb-12">
          Project Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[img1, img2, img3, img4, img5].map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-110 transition duration-500 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Home;
