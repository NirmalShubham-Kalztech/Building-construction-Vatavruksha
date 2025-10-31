import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 sm:px-10 py-4 border-t-2 border-[#f5eaea] bg-white relative">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <div className="bg-[#039be5] rounded-xl w-12 h-12 flex items-center justify-center mr-4">
          {/* Simple building icon (SVG) */}
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="7" y="10" width="3" height="7" fill="#fff" />
            <rect x="14" y="7" width="3" height="10" fill="#fff" />
            <rect x="11" y="13" width="2" height="4" fill="#fff" />
          </svg>
        </div>
        <div>
          <div className="font-[Pacifico] text-2xl sm:text-3xl text-[#039be5] leading-none">
            Vatavruksha
          </div>
        </div>
      </div>

      {/* Hamburger Button (visible on mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden text-[#039be5] focus:outline-none text-3xl"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row items-center sm:gap-10 gap-4 sm:static absolute top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent py-4 sm:py-0 shadow sm:shadow-none z-20`}
      >
        {[
          ["Home", "/"],
          ["About Us", "/about"],
          ["Services", "/services"],
          ["Projects", "/projects"],
          ["Blog", "/blog"],
          ["Clients", "/clients"],
          ["Career", "/career"],
        ].map(([name, path]) => (
          <Link
            key={name}
            to={path}
            className={linkStyle}
            onClick={() => setMenuOpen(false)} // 👈 menu hide on click
          >
            {name}
          </Link>
        ))}

        <Link
          to="/quote"
          className="bg-[#039be5] text-white font-semibold text-lg px-6 py-3 rounded-xl no-underline hover:bg-[#0288d1] transition-all duration-200 sm:ml-6"
          onClick={() => setMenuOpen(false)} // 👈 hide on click
        >
          Get Quote
        </Link>
      </div>
    </nav>
  );
};

const linkStyle =
  "text-lg text-[#263238] no-underline font-medium hover:text-[#039be5] transition-all duration-200";

export default Navbar;
