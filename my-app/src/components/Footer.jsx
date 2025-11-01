import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/img/image5.png"; // तुझं actual logo path इथे दे

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#0f172a] text-white py-10 px-6 font-[Poppins]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="bg-[#0078d7] p-2 rounded-md w-10 h-10 flex items-center justify-center"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={logo} alt="Logo" className="w-6 h-6 invert" />
            </motion.div>
            <motion.h3
              className="font-[Pacifico] text-xl"
              whileHover={{ color: "#0078d7" }}
            >
              Vatavruksha
            </motion.h3>
          </motion.div>

          <motion.p
            className="max-w-xs leading-relaxed text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Building excellence since 2009 with strong foundations and lasting
            trust. Your trusted partner for all construction and infrastructure
            needs.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {["facebook-f", "twitter", "linkedin-in", "instagram"].map(
              (icon) => (
                <motion.a
                  key={icon}
                  href="#"
                  className="bg-[#0078d7] w-9 h-9 flex items-center justify-center rounded-full"
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "#0065b3",
                    rotate: 10,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <i className={`fab fa-${icon} text-white`}></i>
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
            ].map((item, i) => (
              <motion.li
                key={item}
                whileHover={{ x: 8, color: "#0078d7" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a href="#">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Our Services */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
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
              <motion.li
                key={service}
                whileHover={{ x: 8, color: "#0078d7" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a href="#">{service}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="font-semibold text-lg mb-3">Contact Information</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <motion.li className="flex items-start gap-2" whileHover={{ x: 5 }}>
              <i className="fas fa-map-marker-alt text-[#0078d7] mt-1"></i>
              <span>
                123 Construction Avenue, Business District, Mumbai 400001,
                Maharashtra, India
              </span>
            </motion.li>
            <motion.li className="flex items-center gap-2" whileHover={{ x: 5 }}>
              <i className="fas fa-phone text-[#0078d7]"></i>
              +91 9876543210
            </motion.li>
            <motion.li className="flex items-center gap-2" whileHover={{ x: 5 }}>
              <i className="fas fa-envelope text-[#0078d7]"></i>
              info@vatavrukshainfra.com
            </motion.li>
            <motion.li className="flex items-center gap-2" whileHover={{ x: 5 }}>
              <i className="fab fa-whatsapp text-[#0078d7]"></i>
              +91 9876543210
            </motion.li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        © {new Date().getFullYear()} Vatavruksha Infra Project. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
