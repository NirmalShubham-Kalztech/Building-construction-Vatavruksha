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
      {/* --- Our Services Section --- */}
      <section className="bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-white/90">
            Comprehensive construction solutions tailored to meet your specific project
            requirements with exceptional quality and precision.
          </p>
        </div>
      </section>
      {/* --- Trimix Flooring Section --- */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Trimix Flooring</h2>
            <p className="text-gray-600 mb-6">
              Our specialized trimix flooring service delivers superior strength, durability, and finish quality
              for industrial and commercial applications. Using advanced three-stage concrete mixing technology,
              we create floors that withstand heavy loads and intensive use.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span>
                High-strength concrete mix design
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span>
                Superior surface finish and flatness
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span>
                Minimal maintenance requirements
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">✔</span>
                Fast project completion
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={ServicesImage}
              alt="Trimix Flooring"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Concrete Works */}
          <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={ServicesImage2}
            alt="Concrete Works"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Concrete Works</h2>
          <p className="text-gray-600 mb-6">
            From foundations to structural elements, our concrete services encompass all aspects of
            commercial and industrial construction. We use premium materials and proven techniques
            to ensure structural integrity and longevity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold mb-1">Foundation Work</h4>
              <p className="text-sm text-gray-600">
                Deep foundations, shallow foundations, and specialized foundation systems
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-1">Structural Concrete</h4>
              <p className="text-sm text-gray-600">
                Columns, beams, slabs, and load-bearing structural elements
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold mb-1">Precast Elements</h4>
              <p className="text-sm text-gray-600">
                Factory-made concrete components for faster construction
              </p>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-semibold mb-1">Decorative Concrete</h4>
              <p className="text-sm text-gray-600">
                Architectural finishes and aesthetic concrete solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Construction Project Management */}

    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Construction Project Management
          </h2>
          <p className="text-gray-600 mb-6">
            Our comprehensive project management services ensure your construction project is
            delivered on time, within budget, and to the highest quality standards. We handle every
            aspect from planning to completion.
          </p>

          <ul className="space-y-6">
            {/* Item 1 */}
            <li className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Planning & Scheduling</h4>
                <p className="text-sm text-gray-600">
                  Detailed project timelines and resource allocation
                </p>
              </div>
            </li>

            {/* Item 2 */}
            <li className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Team Coordination</h4>
                <p className="text-sm text-gray-600">
                  Seamless coordination between all project stakeholders
                </p>
              </div>
            </li>

            {/* Item 3 */}
            <li className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4 -4m1 -7H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2V5a2 2 0 0 0-2 -2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Quality Control</h4>
                <p className="text-sm text-gray-600">
                  Rigorous quality assurance and testing protocols
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={ServicesImage3}
            alt="Construction Project Management"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    {/* Custom Infrastructure Solutions */}

    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Custom Infrastructure Solutions
        </h2>
        <p className="text-gray-600 text-lg">
          Tailored infrastructure solutions designed to meet your unique project
          requirements and specifications.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-blue-50 rounded-xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
              {/* Building Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M9 8h6M9 12h6M9 16h6M4 21V4a1 1 0 011-1h14a1 1 0 011 1v17" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Industrial Facilities</h3>
            <p className="text-gray-600 mb-4">
              Complete industrial construction including warehouses, manufacturing plants, and processing facilities with specialized requirements.
            </p>
          </div>
          <img src={ServicesImage4} alt="Industrial Facilities" className="rounded-md mt-auto" />
        </div>

        {/* Card 2 */}
        <div className="bg-green-50 rounded-xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
              {/* Map Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2l6 3 6-3v14.382a1 1 0 01-.553.894L15 20l-6-3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Infrastructure Development</h3>
            <p className="text-gray-600 mb-4">
              Roads, bridges, utilities infrastructure, and site development projects with comprehensive planning and execution.
            </p>
          </div>
          <img src={ServicesImage5} alt="Infrastructure Development" className="rounded-md mt-auto" />
        </div>

        {/* Card 3 */}
        <div className="bg-purple-50 rounded-xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
              {/* Drafting Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6-6 3.536 3.536a2.5 2.5 0 01-3.536 3.536L9 13z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Design-Build Services</h3>
            <p className="text-gray-600 mb-4">
              Integrated design and construction services from concept to completion, ensuring seamless project delivery and cost efficiency.
            </p>
          </div>
          <img src={ServicesImage6} alt="Design-Build Services" className="rounded-md mt-auto" />
        </div>
      </div>
    </section>

     {/* Our Process */}


    <section className="bg-blue-600 py-20 text-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Process</h2>
        <p className="text-lg text-white/90 mb-12">
          From initial consultation to project completion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white text-blue-600 font-bold text-2xl flex items-center justify-center shadow-lg mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/90">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>





      
    </>
  );
}
