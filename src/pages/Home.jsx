import React from "react";
import homeBg from "../assets/img/Homeconstruction.jpg";
import image from "../assets/img/image.jpg";
// import image2 from "../assets/img/image2.jpg";
import img1 from "../assets/img/image1.png";
import img2 from "../assets/img/image2.png";
import img3 from "../assets/img/image3.png";
import img4 from "../assets/img/image4.png";


const Home = () => (
  <>
    {/* Hero Section */}
    <div
      className="relative min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10 max-w-5xl pl-16 py-24">
        <h1 className="text-7xl font-extrabold text-white leading-tight mb-8">
          Strong Foundations,<br />Lasting Trust
        </h1>
        <p className="text-2xl text-gray-200 mb-10">
          Vatavruksha Infra Project - With over 15 years of expertise in construction and trimix flooring, we deliver exceptional infrastructure solutions that stand the test of time.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow transition-all duration-200 hover:bg-blue-700 focus:outline-none"
          >
            Get Quote
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-white text-blue-600 text-xl font-semibold rounded-lg shadow transition-all duration-200 hover:bg-blue-50 focus:outline-none"
          >
            Learn More
          </a>
        </div>
      </div>

    </div>


{/* Info Section */}
<div className="w-full bg-[#fafbfc] py-16 px-4 md:px-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Text Info - Left Side */}
    <div className="flex-1 text-left">
      <h5 className="text-2xl md:text-2xl font-extrabold text-[#02080e] mb-6 leading-snug">
        Vatavruksha Infra Project - Building Excellence<br />Since 2009
      </h5>
      <p className="text-base md:text-lg text-[#22313f] mb-4">
        Vatavruksha Infra Project is a leading construction company specializing in high-quality concrete works, trimix flooring, and comprehensive infrastructure solutions. Our commitment to innovation and excellence has made us a trusted partner for industrial and commercial projects.
      </p>
      <p className="text-base md:text-lg text-[#22313f] mb-8">
        With a team of experienced engineers and skilled craftsmen, we have successfully completed over 200 projects across various sectors, delivering sustainable and robust infrastructure that exceeds client expectations.
      </p>
      <div className="flex flex-wrap gap-12 md:gap-24 mt-10">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">200+</div>
          <div className="text-sm md:text-base text-[#22313f]">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">15+</div>
          <div className="text-sm md:text-base text-[#22313f]">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">50+</div>
          <div className="text-sm md:text-base text-[#22313f]">Expert Team</div>
        </div>
      </div>
    </div>

    {/* Image - Right Side */}
    <div className="flex-1 flex justify-center">
      <img
        src={image}
        alt="Vatavruksha Infra Project Team"
        className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
      />
    </div>
    
  </div>
</div>

<div className="w-full text-center py-12 bg-white">
  <h2 className="text-4xl md:text-5xl font-extrabold text-[#02080e] mb-4">
    Current Project in Progress
  </h2>
  <p className="text-lg md:text-xl text-[#22313f]">
    Watch our latest construction project come to life
  </p>
</div>


{/* Current Project in Progress */}
{/* Current Project in Progress */}
<div className="w-full bg-[#f0f7ff] py-16 px-4 md:px-16">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* Left Side - Text Content */}
    <div className="space-y-4">
      <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm uppercase tracking-wide">
        Under Construction
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#02080e]">
        Metro Industrial Complex
      </h2>
      <p className="text-[#22313f] text-base md:text-lg">
        A state-of-the-art 50,000 sq ft industrial facility featuring advanced trimix flooring technology,
        sustainable concrete solutions, and modern infrastructure design.
      </p>

      {/* Status List */}
      <ul className="space-y-2 pt-4">
        <li className="flex items-center text-base text-[#22313f]">
          <span className="text-blue-600 mr-2 text-lg">✔️</span>
          Foundation Work: Completed
        </li>
        <li className="flex items-center text-base text-[#22313f]">
          <span className="text-blue-600 mr-2 text-lg">✔️</span>
          Structural Framework: 80% Complete
        </li>
        <li className="flex items-center text-base text-[#22313f]">
          <span className="text-yellow-500 mr-2 text-lg">⏳</span>
          Trimix Flooring: In Progress
        </li>
      </ul>

      {/* CTA Button */}
      <div className="pt-6">
        <a
          href="#"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          View All Projects
        </a>
      </div>
    </div>

    {/* Right Side - Image Grid */}
    <div className="grid grid-cols-2 gap-4">
      <img src={img1} alt="Construction 1" className="rounded-xl shadow-md object-cover w-full h-40" />
      <img src={img2} alt="Construction 2" className="rounded-xl shadow-md object-cover w-full h-40" />
      <img src={img3} alt="Construction 3" className="rounded-xl shadow-md object-cover w-full h-40" />
      <img src={img4} alt="Construction 4" className="rounded-xl shadow-md object-cover w-full h-40" />
    </div>

  </div>
</div>
{/* Our Expertise Section */}
<div className="w-full bg-[#f8fafc] py-20 px-4 md:px-16">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#02080e] mb-4">
      Our Expertise
    </h2>
    <p className="text-lg text-[#22313f]">
      Comprehensive construction solutions for all your infrastructure needs
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {/* Trimix Flooring */}
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
      <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
        <img src={img1} alt="Trimix Flooring Icon" className="w-6 h-6" />
      </div>
      <h4 className="text-xl font-semibold text-[#02080e] mb-2">Trimix Flooring</h4>
      <p className="text-[#22313f] text-sm">
        High-strength industrial flooring solutions with superior durability and finish quality.
      </p>
    </div>

    {/* Concrete Works */}
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
      <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
        <img src={img2} alt="Concrete Works Icon" className="w-6 h-6" />
      </div>
      <h4 className="text-xl font-semibold text-[#02080e] mb-2">Concrete Works</h4>
      <p className="text-[#22313f] text-sm">
        Premium concrete construction services from foundation to finishing with expert craftsmanship.
      </p>
    </div>

    {/* Project Management */}
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
      <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
        <img src={img3} alt="Project Management Icon" className="w-6 h-6" />
      </div>
      <h4 className="text-xl font-semibold text-[#02080e] mb-2">Project Management</h4>
      <p className="text-[#22313f] text-sm">
        End-to-end project management ensuring timely delivery and quality standards.
      </p>
    </div>

    {/* Custom Solutions */}
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
      <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
        <img src={img4} alt="Custom Solutions Icon" className="w-6 h-6" />
      </div>
      <h4 className="text-xl font-semibold text-[#02080e] mb-2">Custom Solutions</h4>
      <p className="text-[#22313f] text-sm">
        Tailored infrastructure solutions designed to meet your specific project requirements.
      </p>
    </div>
  </div>
</div>
{/* What Our Clients Say Section */}
<div className="w-full bg-[#0086cd] py-20 px-4 md:px-16 text-white">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
      What Our Clients Say
    </h2>
    <p className="text-lg text-white/80">
      Trusted by leading companies across industries
    </p>
  </div>

  {/* Testimonials Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
    {/* Testimonial 1 */}
    <div className="bg-white text-[#22313f] rounded-xl p-6 shadow-md">
      <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
      <p className="italic mb-6">
        “Exceptional quality and professional service. Their trimix flooring exceeded our expectations and was completed on schedule.”
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-xl">
          👤
        </div>
        <div>
          <p className="font-semibold">Rajesh Kumar</p>
          <p className="text-sm text-gray-500">Operations Manager, TechCorp Industries</p>
        </div>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white text-[#22313f] rounded-xl p-6 shadow-md">
      <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
      <p className="italic mb-6">
        “Outstanding project management and attention to detail. The team delivered exactly what was promised.”
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-xl">
          👤
        </div>
        <div>
          <p className="font-semibold">Priya Sharma</p>
          <p className="text-sm text-gray-500">Project Director, Metro Construction</p>
        </div>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white text-[#22313f] rounded-xl p-6 shadow-md">
      <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
      <p className="italic mb-6">
        “Reliable, efficient, and professional. Their expertise in concrete works is unmatched in the industry.”
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-xl">
          👤
        </div>
        <div>
          <p className="font-semibold">Amit Patel</p>
          <p className="text-sm text-gray-500">CEO, Industrial Solutions Ltd</p>
        </div>
      </div>
    </div>
  </div>

  {/* Trusted by Companies */}
  <div className="text-center">
    <h3 className="text-2xl md:text-3xl font-semibold mb-6">
      Trusted by Leading Companies
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center max-w-5xl mx-auto">
      {["TechCorp", "MetroGroup", "IndusPro", "BuildMax", "PowerTech"].map((company) => (
        <div
          key={company}
          className="bg-white text-[#02080e] font-semibold py-4 px-6 rounded-lg shadow text-center"
        >
          {company}
        </div>
      ))}
    </div>
  </div>
</div>
{/* CTA - Ready to Build Your Vision */}
<div className="w-full bg-[#0e141f] text-white py-20 px-4 text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
    Ready to Build Your Vision?
  </h2>
  <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
    Get in touch with our expert team for a consultation and detailed project quote tailored to your requirements.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a
      href="#"
      className="bg-[#0092d1] hover:bg-[#007bb3] text-white font-semibold text-lg px-8 py-4 rounded-md transition duration-200"
    >
      Get Free Quote
    </a>
    <a
      href="#"
      className="border-2 border-white hover:bg-white hover:text-[#0e141f] text-white font-semibold text-lg px-8 py-4 rounded-md transition duration-200"
    >
      View Our Work
    </a>
  </div>
</div>



   


  </>
);

export default Home;