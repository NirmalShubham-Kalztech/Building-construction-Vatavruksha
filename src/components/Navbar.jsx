import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 40px",
    borderTop: "2px solid #f5eaea",
    background: "#fff"
  }}>
    {/* Logo and Brand */}
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{
        background: "#039be5",
        borderRadius: "12px",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "16px"
      }}>
        {/* Simple building icon (SVG) */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <rect x="7" y="10" width="3" height="7" fill="#fff"/>
          <rect x="14" y="7" width="3" height="10" fill="#fff"/>
          <rect x="11" y="13" width="2" height="4" fill="#fff"/>
        </svg>
      </div>
      <div>
        <div style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: "2rem",
          color: "#039be5",
          lineHeight: "1"
        }}>Vatavruksha</div>
      </div>
    </div>

    {/* Navigation Links */}
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "40px"
    }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About Us</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      <Link to="/blog" style={linkStyle}>Blog</Link>
      <Link to="/clients" style={linkStyle}>Clients</Link>
      <Link to="/career" style={linkStyle}>Career</Link>
      <Link to="/quote" style={{
        background: "#039be5",
        color: "#fff",
        fontWeight: "600",
        fontSize: "1.25rem",
        padding: "12px 32px",
        borderRadius: "12px",
        textDecoration: "none",
        marginLeft: "24px"
      }}>Get Quote</Link>
    </div>
  </nav>
);

const linkStyle = {
  fontSize: "1.25rem",
  color: "#263238",
  textDecoration: "none",
  fontWeight: "500"
};

export default Navbar;
