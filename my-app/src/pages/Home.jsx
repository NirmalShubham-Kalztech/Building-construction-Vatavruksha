import React from "react";
import image from "../assets/img/image.jpg";
import img1 from "../assets/img/image1.png";
import img2 from "../assets/img/image2.png";
import img3 from "../assets/img/image3.png";
import img4 from "../assets/img/image4.png";
import img5 from "../assets/img/image5.png";

const Home = () => (
  <>
    {/* Hero Section */}
    <div
      className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center sm:justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url(${img5})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-5xl px-4 sm:px-8 md:px-16 py-20 text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 sm:mb-8">
          Strong Foundations,<br className="hidden sm:block" /> Lasting Trust
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto sm:mx-0">
          Vatavruksha Infra Project - With over 15 years of expertise in construction and trimix flooring, we deliver exceptional infrastructure solutions that stand the test of time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 sm:gap-6">
          <a
            href="#"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-lg sm:text-xl font-semibold rounded-lg shadow hover:bg-blue-700 transition-all duration-200"
          >
            Get Quote
          </a>
          <a
            href="#"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 text-lg sm:text-xl font-semibold rounded-lg shadow hover:bg-blue-50 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>

    {/* Info Section */}
    <div className="w-full bg-[#fafbfc] py-12 sm:py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-left">
          <h5 className="text-xl sm:text-2xl font-extrabold text-[#02080e] mb-4 sm:mb-6 leading-snug">
            Vatavruksha Infra Project - Building Excellence<br className="hidden sm:block" /> Since 2009
          </h5>
          <p className="text-sm sm:text-base md:text-lg text-[#22313f] mb-4">
            Vatavruksha Infra Project is a leading construction company specializing in high-quality concrete works, trimix flooring, and comprehensive infrastructure solutions.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#22313f] mb-8">
            With a team of experienced engineers and skilled craftsmen, we have successfully completed over 200 projects across various sectors.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-20">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Expert Team" },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm md:text-base text-[#22313f]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={image}
            alt="Vatavruksha Infra Project Team"
            className="rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg object-cover"
          />
        </div>
      </div>
    </div>

    {/* Current Project Section */}
    <div className="text-center py-12 bg-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#02080e] mb-3 sm:mb-4">
        Current Project in Progress
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-[#22313f]">
        Watch our latest construction project come to life
      </p>
    </div>

    <div className="w-full bg-[#f0f7ff] py-12 sm:py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-center md:text-left">
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm uppercase tracking-wide">
            Under Construction
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#02080e]">
            Metro Industrial Complex
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#22313f]">
            A state-of-the-art 50,000 sq ft industrial facility featuring advanced trimix flooring technology and sustainable design.
          </p>
          <ul className="space-y-2 pt-2 text-left">
            <li>✔️ Foundation Work: Completed</li>
            <li>✔️ Structural Framework: 80% Complete</li>
            <li>⏳ Trimix Flooring: In Progress</li>
          </ul>
          <div className="pt-4">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200"
            >
              View All Projects
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[img1, img2, img3, img4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Project ${i + 1}`}
              className="rounded-xl shadow-md object-cover w-full h-32 sm:h-40"
            />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Home;
