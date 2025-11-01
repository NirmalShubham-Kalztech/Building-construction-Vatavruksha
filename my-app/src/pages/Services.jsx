import React from "react";
import { motion } from "framer-motion"; // 👈 Add this import
import ServicesImage from "../assets/img/Services.png";
import ServicesImage2 from "../assets/img/services2.png";
import ServicesImage3 from "../assets/img/services3.png";
import ServicesImage4 from "../assets/img/ServicesImage4.png";
import ServicesImage5 from "../assets/img/ServicesImage5.png";
import ServicesImage6 from "../assets/img/ServicesImage6.png";

export default function Services() {
  const steps = [
    {
      number: "1",
      title: "Consultation",
      description:
        "Initial project assessment and requirement analysis with detailed feasibility study.",
    },
    {
      number: "2",
      title: "Planning",
      description:
        "Comprehensive project planning including design, timeline, and resource allocation.",
    },
    {
      number: "3",
      title: "Execution",
      description:
        "Professional construction execution with continuous quality monitoring and progress updates.",
    },
    {
      number: "4",
      title: "Delivery",
      description:
        "Final inspection, handover, and ongoing support with warranty coverage.",
    },
  ];

  return (
    <>
      {/* --- Header Section --- */}
      <motion.section
        className="bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 text-white py-16 md:py-20 px-4 text-center"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-base md:text-xl text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Comprehensive construction solutions tailored to meet your specific project
            requirements with exceptional quality and precision.
          </motion.p>
        </div>
      </motion.section>

      {/* --- Service Sections --- */}
      {[ 
        {
          title: "Trimix Flooring",
          img: ServicesImage,
          text: "Our specialized trimix flooring service delivers superior strength, durability, and finish quality for industrial and commercial applications.",
          features: [
            "High-strength concrete mix design",
            "Superior surface finish and flatness",
            "Minimal maintenance requirements",
            "Fast project completion",
          ],
          reverse: false,
        },
        {
          title: "Concrete Works",
          img: ServicesImage2,
          text: "From foundations to structural elements, our concrete services encompass all aspects of construction ensuring longevity.",
          reverse: true,
        },
        {
          title: "Construction Project Management",
          img: ServicesImage3,
          text: "Our project management ensures timely, budget-friendly, and high-quality construction delivery.",
          reverse: false,
        },
      ].map((service, i) => (
        <motion.section
          key={i}
          className={`bg-white py-12 md:py-16 px-4 md:px-6 ${
            service.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } flex flex-col items-center gap-8 md:gap-12`}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: i * 0.2 }}
        >
          <motion.div className="md:w-1/2" whileHover={{ scale: 1.05 }}>
            <img
              src={service.img}
              alt={service.title}
              className="rounded-lg shadow-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">{service.text}</p>
            {service.features && (
              <ul className="space-y-2 text-gray-700">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-center text-sm md:text-base">
                    <span className="text-blue-600 mr-2">✔</span> {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.section>
      ))}

      {/* --- Custom Infrastructure Section --- */}
      <motion.section
        className="bg-gray-50 py-16 md:py-20 px-4 md:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Custom Infrastructure Solutions
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Tailored infrastructure solutions designed to meet your unique project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[ServicesImage4, ServicesImage5, ServicesImage6].map((img, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img}
                alt="Custom Service"
                className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {["Industrial Facilities", "Infrastructure Development", "Design-Build Services"][i]}
                </h3>
                <p className="text-gray-600 text-sm">
                  {[
                    "Warehouses, manufacturing plants, and processing facilities.",
                    "Roads, bridges, and utilities infrastructure projects.",
                    "Integrated design and construction services end-to-end.",
                  ][i]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- Process Section --- */}
      <motion.section
        className="bg-blue-600 py-16 md:py-20 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto text-center px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Process</h2>
          <p className="text-base md:text-lg text-white/90 mb-12">
            From initial consultation to project completion
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-blue-600 font-bold text-xl md:text-2xl flex items-center justify-center shadow-lg mb-6">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-white/90">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
