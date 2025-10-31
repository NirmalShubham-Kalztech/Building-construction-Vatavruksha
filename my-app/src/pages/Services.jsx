import React from "react";
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
      {/* Header Section */}
      <section className="bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 text-white py-16 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Our Services</h2>
          <p className="text-base md:text-xl text-white/90">
            Comprehensive construction solutions tailored to meet your specific project
            requirements with exceptional quality and precision.
          </p>
        </div>
      </section>

      {/* Trimix Flooring */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Trimix Flooring
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Our specialized trimix flooring service delivers superior strength, durability,
              and finish quality for industrial and commercial applications. Using advanced
              three-stage concrete mixing technology, we create floors that withstand heavy loads
              and intensive use.
            </p>
            <ul className="space-y-2 md:space-y-3 text-gray-700">
              {[
                "High-strength concrete mix design",
                "Superior surface finish and flatness",
                "Minimal maintenance requirements",
                "Fast project completion",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm md:text-base">
                  <span className="text-blue-600 mr-2">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={ServicesImage}
              alt="Trimix Flooring"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Concrete Works */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <img
              src={ServicesImage2}
              alt="Concrete Works"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Concrete Works
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              From foundations to structural elements, our concrete services encompass all aspects
              of commercial and industrial construction. We use premium materials and proven
              techniques to ensure structural integrity and longevity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              {[
                {
                  title: "Foundation Work",
                  desc: "Deep and shallow foundations with specialized systems",
                },
                {
                  title: "Structural Concrete",
                  desc: "Columns, beams, slabs, and load-bearing elements",
                },
                {
                  title: "Precast Elements",
                  desc: "Factory-made concrete components for faster construction",
                },
                {
                  title: "Decorative Concrete",
                  desc: "Architectural finishes and aesthetic concrete solutions",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Management */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Construction Project Management
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Our project management ensures timely, budget-friendly, and high-quality
              construction delivery, handling everything from planning to completion.
            </p>

            <ul className="space-y-5">
              {[
                { title: "Planning & Scheduling", desc: "Detailed timelines and resource allocation" },
                { title: "Team Coordination", desc: "Seamless coordination between stakeholders" },
                { title: "Quality Control", desc: "Rigorous testing and assurance processes" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2l4 -4m1 -7H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2V5a2 2 0 0 0-2 -2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2">
            <img
              src={ServicesImage3}
              alt="Construction Project Management"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Custom Infrastructure */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Custom Infrastructure Solutions
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Tailored infrastructure solutions designed to meet your unique project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[ServicesImage4, ServicesImage5, ServicesImage6].map((img, i) => {
            const titles = [
              "Industrial Facilities",
              "Infrastructure Development",
              "Design-Build Services",
            ];
            const colors = ["blue", "green", "purple"];
            const desc = [
              "Warehouses, manufacturing plants, and processing facilities.",
              "Roads, bridges, and utilities infrastructure projects.",
              "Integrated design and construction services end-to-end.",
            ];
            return (
              <div
                key={i}
                className={`bg-${colors[i]}-50 rounded-xl p-6 shadow-md flex flex-col justify-between`}
              >
                <div>
                  <div
                    className={`bg-${colors[i]}-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 21h18M9 8h6M9 12h6M9 16h6M4 21V4a1 1 0 011-1h14a1 1 0 011 1v17"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{titles[i]}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">{desc[i]}</p>
                </div>
                <img src={img} alt={titles[i]} className="rounded-md mt-auto w-full h-auto" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-blue-600 py-16 md:py-20 text-white">
        <div className="max-w-7xl mx-auto text-center px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Process</h2>
          <p className="text-base md:text-lg text-white/90 mb-12">
            From initial consultation to project completion
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-blue-600 font-bold text-xl md:text-2xl flex items-center justify-center shadow-lg mb-6">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-white/90">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
