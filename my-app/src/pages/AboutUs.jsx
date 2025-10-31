import React from "react";
import AboutImage from "../assets/img/aboutimg.png";

const AboutUs = () => {
  return (
    <div id="about" className="overflow-hidden">
      {/* Top Gradient Section */}
      <section
        className="w-full py-20 md:py-24 text-white text-center px-4"
        style={{
          background: "linear-gradient(90deg, #0088cc, #1e66e9, #2160f4)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
          About Our Company
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Discover our journey of building excellence and creating lasting infrastructure
          solutions for over 15 years.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="px-5 sm:px-8 md:px-16 py-16 md:py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
              Our Story
            </h2>
            <p className="mb-5 leading-relaxed text-sm sm:text-base">
              Founded in 2009, our company began with a simple vision: to deliver exceptional
              construction quality while building lasting relationships with our clients.
              What started as a small team of dedicated professionals has grown into one of
              the region's most trusted construction companies.
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
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={AboutImage}
              alt="Our Team"
              className="w-full max-w-md md:max-w-lg h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-white py-16 md:py-20 px-5 sm:px-8 md:px-16 text-center text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-base sm:text-lg mb-10 sm:mb-12 text-gray-600">
            Guiding principles that drive our commitment to excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-blue-50 rounded-xl p-6 sm:p-8 shadow-md text-left">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a9.02 9.02 0 017.036 3.625M12 4.354a9.02 9.02 0 00-7.036 3.625M12 4.354v15.292M4.964 7.979C3.757 9.588 3 11.712 3 14c0 .828.336 1.578.879 2.121M19.036 7.979A9.014 9.014 0 0121 14c0 .828-.336 1.578-.879 2.121M12 12h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold ml-3 sm:ml-4">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                To create sustainable and strong infrastructure for future generations,
                setting new standards in construction quality and innovation while
                contributing to resilient communities.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md text-left">
              <div className="flex items-center mb-4">
                <div className="bg-gray-800 text-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold ml-3 sm:ml-4">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Delivering quality construction and trimix flooring solutions with
                unwavering commitment and innovation, ensuring every project exceeds
                expectations while maintaining safety and environmental standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="bg-gray-50 py-16 md:py-20 px-5 sm:px-8 md:px-16 text-center text-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
            Leadership Team
          </h2>
          <p className="text-base sm:text-lg mb-10 sm:mb-12 text-gray-600">
            Meet the experienced professionals leading our company
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Gupta", role: "Founder & CEO" },
              { name: "Priya Sharma", role: "Chief Engineer" },
              { name: "Amit Kumar", role: "Project Director" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">
                  Leading our mission with vision, expertise, and dedication.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-20 px-5 sm:px-8 md:px-16 text-center bg-white text-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
            Our Core Values
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-12">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Quality First", "Sustainability", "Innovation", "Integrity"].map(
              (value, i) => (
                <div key={i} className="p-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2l7 4v6c0 5-3 9-7 10c-4-1-7-5-7-10V6l7-4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{value}</h3>
                  <p className="text-sm text-gray-600">
                    We ensure every project reflects our values and commitment.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
