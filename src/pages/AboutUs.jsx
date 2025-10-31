import React from "react";
import AboutImage from "../assets/img/aboutimg.png"; // Update path if needed

const AboutUs = () => {
  return (
    <div id="about">
      {/* Top Gradient Section */}
      <section
        className="w-full py-24 text-white text-center"
        style={{
          background: "linear-gradient(90deg, #0088cc, #1e66e9, #2160f4)",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          About Our Company
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
          Discover our journey of building excellence and creating lasting infrastructure
          solutions for over 15 years.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="px-6 md:px-16 py-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Story</h2>
            <p className="mb-6 leading-relaxed">
              Founded in 2009, our company began with a simple vision: to deliver exceptional
              construction quality while building lasting relationships with our clients. What started
              as a small team of dedicated professionals has grown into one of the region's most
              trusted construction companies.
            </p>
            <p className="mb-6 leading-relaxed">
              Over the years, we have specialized in trimix flooring and advanced concrete solutions,
              earning recognition for our innovative approaches and unwavering commitment to quality.
              Our portfolio includes industrial facilities, commercial complexes, and custom
              infrastructure projects across various sectors.
            </p>
            <p className="leading-relaxed">
              Today, we continue to push the boundaries of construction excellence, incorporating
              sustainable practices and cutting-edge technologies to deliver projects that stand the
              test of time.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={AboutImage}
              alt="Our Team"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* Mission & Vision Section */}

<section className="bg-white py-20 px-6 md:px-16 text-center text-gray-800">
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Vision & Mission</h2>
    <p className="text-lg mb-12 text-gray-600">
      Guiding principles that drive our commitment to excellence
    </p>

    {/* Vision & Mission Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Vision Card */}
      <div className="bg-blue-50 rounded-xl p-8 shadow-md text-left">
        <div className="flex items-center mb-4">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
                d="M12 4.354a9.02 9.02 0 017.036 3.625M12 4.354a9.02 9.02 0 00-7.036 3.625M12 4.354v15.292M4.964 7.979C3.757 9.588 3 11.712 3 14c0 .828.336 1.578.879 2.121M19.036 7.979A9.014 9.014 0 0121 14c0 .828-.336 1.578-.879 2.121M12 12h.01"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold ml-4">Our Vision</h3>
        </div>
        <p className="text-gray-700">
          To create sustainable and strong infrastructure for future generations,
          setting new standards in construction quality and innovation while
          contributing to the development of resilient communities.
        </p>
      </div>

      {/* Mission Card */}
      <div className="bg-gray-50 rounded-xl p-8 shadow-md text-left">
        <div className="flex items-center mb-4">
          <div className="bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold ml-4">Our Mission</h3>
        </div>
        <p className="text-gray-700">
          Delivering quality construction and trimix flooring solutions with
          unwavering commitment and innovation, ensuring every project exceeds
          expectations while maintaining the highest safety and environmental
          standards.
        </p>
      </div>
    </div>
  </div>
</section>
   
      {/* Leadership Team Section */}

<section className="bg-gray-50 py-20 px-6 md:px-16 text-center text-gray-800">
  <div className="max-w-7xl mx-auto">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Leadership Team</h2>
    <p className="text-lg mb-12 text-gray-600">
      Meet the experienced professionals leading our company
    </p>

    {/* Team Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Rajesh Gupta */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold">Rajesh Gupta</h3>
        <p className="text-blue-600 font-semibold mb-3">Founder & CEO</p>
        <p className="text-sm text-gray-600">
          With 20+ years in construction, Rajesh leads our strategic vision and ensures every project meets our high standards of quality and innovation.
        </p>
      </div>

      {/* Priya Sharma */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold">Priya Sharma</h3>
        <p className="text-blue-600 font-semibold mb-3">Chief Engineer</p>
        <p className="text-sm text-gray-600">
          Expert in structural engineering and trimix flooring, Priya oversees technical aspects and ensures adherence to safety protocols.
        </p>
      </div>

      {/* Amit Kumar */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold">Amit Kumar</h3>
        <p className="text-blue-600 font-semibold mb-3">Project Director</p>
        <p className="text-sm text-gray-600">
          Specializing in project management and client relations, Amit ensures timely delivery and maintains strong client partnerships.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Core Values Section */}
   

<section className="py-20 px-6 md:px-16 text-center bg-white text-gray-800">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Our Core Values</h2>
    <p className="text-lg text-gray-600 mb-12">
      The principles that guide everything we do
    </p>

    {/* Core Value Items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Quality First */}
      <div>
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4 -4M12 2l7 4v6c0 5-3 9-7 10c-4-1-7-5-7-10V6l7-4z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Quality First</h3>
        <p className="text-sm text-gray-600">
          We never compromise on quality, ensuring every project meets the highest standards of excellence.
        </p>
      </div>

      {/* Sustainability */}
      <div>
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center text-white text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.5 1.5-4 4-4 7s1.5 5.5 4 7c2.5-1.5 4-4 4-7s-1.5-5.5-4-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
        <p className="text-sm text-gray-600">
          Environmental responsibility is integral to our operations and project planning.
        </p>
      </div>

      {/* Innovation */}
      <div>
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-600 flex items-center justify-center text-white text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 4.05l.71.71M21 12h-1M4 12H3m1.05 7.95l.71-.71M19.95 4.05l-.71.71M12 5a7 7 0 110 14a7 7 0 010-14z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
        <p className="text-sm text-gray-600">
          We embrace new technologies and methods to deliver cutting-edge solutions.
        </p>
      </div>

      {/* Integrity */}
      <div>
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-600 flex items-center justify-center text-white text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-6-4-9-7.5-9-11a5 5 0 019-3a5 5 0 019 3c0 3.5-3 7-9 11z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Integrity</h3>
        <p className="text-sm text-gray-600">
          Honest communication and ethical practices build lasting trust with our clients.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Awards & Recognition Section */}
        

<section className="bg-gray-50 py-20 px-6 md:px-16 text-center text-gray-800">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Awards & Recognition</h2>
    <p className="text-lg text-gray-600 mb-12">
      Celebrating our achievements and industry recognition
    </p>

    {/* Awards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Award 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 5a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-1">Excellence in Construction</h3>
        <p className="text-sm font-medium text-gray-600">Regional Construction Awards 2023</p>
        <p className="text-sm text-gray-500 mt-2">
          Recognized for outstanding quality in industrial flooring projects
        </p>
      </div>

      {/* Award 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a8 8 0 11-16 0a8 8 0 0116 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-1">Safety Excellence</h3>
        <p className="text-sm font-medium text-gray-600">National Safety Council 2022</p>
        <p className="text-sm text-gray-500 mt-2">
          Zero-incident record and outstanding safety practices
        </p>
      </div>

      {/* Award 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8M12 17v4m-6-8V7a2 2 0 012-2h4a2 2 0 012 2v6m-8 0h8" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-1">Innovation Leader</h3>
        <p className="text-sm font-medium text-gray-600">Construction Technology Summit 2023</p>
        <p className="text-sm text-gray-500 mt-2">
          Pioneer in advanced trimix flooring techniques
        </p>
      </div>

    </div>
  </div>
</section>


    </div>
  );
};

export default AboutUs;
