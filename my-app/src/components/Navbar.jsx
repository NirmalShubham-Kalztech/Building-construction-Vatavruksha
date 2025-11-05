import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="flex items-center justify-between px-6 sm:px-10 py-4 border-t-2 border-[#f5eaea] bg-white relative shadow-md"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo and Brand */}
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-[#039be5] rounded-xl w-12 h-12 flex items-center justify-center mr-4 cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {/* Simple building icon (SVG) */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="7" y="10" width="3" height="7" fill="#fff" />
            <rect x="14" y="7" width="3" height="10" fill="#fff" />
            <rect x="11" y="13" width="2" height="4" fill="#fff" />
          </svg>
        </motion.div>

        <motion.div
          className="font-[Pacifico] text-2xl sm:text-3xl text-[#039be5] leading-none cursor-pointer"
          whileHover={{ scale: 1.05, color: "#0288d1" }}
        >
          Vatavruksha
        </motion.div>
      </motion.div>

      {/* Hamburger Button (visible on mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden text-[#039be5] focus:outline-none text-3xl"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <motion.div
        className={`${
          menuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row items-center sm:gap-10 gap-4 sm:static absolute top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent py-4 sm:py-0 shadow sm:shadow-none z-20`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[
          ["Home", "/"],
          ["About Us", "/about"],
          ["Services", "/services"],
          ["Projects", "/projects"],
          ["Blog", "/blog"],
          ["Career", "/career"],
        ].map(([name, path], index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <Link
              to={path}
              className={linkStyle}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          </motion.div>
        ))}

        {/* Get Quote Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link
            to="/quote"
            className="bg-[#039be5] text-white font-semibold text-lg px-6 py-3 rounded-xl no-underline hover:bg-[#0288d1] transition-all duration-200 sm:ml-6"
            onClick={() => setMenuOpen(false)}
          >
            Get Quote
          </Link>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

const linkStyle =
  "text-lg text-[#263238] no-underline font-medium hover:text-[#039be5] transition-all duration-200";

export default Navbar;
