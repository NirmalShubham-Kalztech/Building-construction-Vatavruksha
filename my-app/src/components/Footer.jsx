import React from "react";
import logo from "../assets/img/image5.png"; // तुझं actual logo path इथे दे

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-10 px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#0078d7] p-2 rounded-md w-10 h-10 flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-6 h-6 invert"
              />
            </div>
            <h3 className="font-[Pacifico] text-xl">Vatavruksha</h3>
          </div>

          <p className="max-w-xs leading-relaxed text-gray-300">
            Building excellence since 2009 with strong foundations and lasting
            trust. Your trusted partner for all construction and infrastructure
            needs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {["facebook-f", "twitter", "linkedin-in", "instagram"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="bg-[#0078d7] w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#0065b3] transition"
              >
                <i className={`fab fa-${icon} text-white`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {[
              "Home",
              "About Us",
              "Services",
              "Projects",
              "Blog",
              "Career",
              "Made with Readdy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#0078d7] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Our Services</h4>
          <ul className="space-y-2">
            {[
              "Trimix Flooring",
              "Concrete Works",
              "Project Management",
              "Custom Infrastructure",
              "Design-Build Services",
              "Quality Assurance",
            ].map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-[#0078d7] transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact Information</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <i className="fas fa-map-marker-alt text-[#0078d7] mt-1"></i>
              <span>
                123 Construction Avenue, Business District, Mumbai 400001,
                Maharashtra, India
              </span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-phone text-[#0078d7]"></i>
              +91 9876543210
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope text-[#0078d7]"></i>
              info@vatavrukshainfra.com
            </li>
            <li className="flex items-center gap-2">
              <i className="fab fa-whatsapp text-[#0078d7]"></i>
              +91 9876543210
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Vatavruksha Infra Project. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
