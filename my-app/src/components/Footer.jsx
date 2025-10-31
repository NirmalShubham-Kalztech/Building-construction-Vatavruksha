import React from "react";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#0f172a",
      color: "#fff",
      padding: "40px 20px",
      fontFamily: "'Poppins', sans-serif",
    }}
  >
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "space-between",
      }}
    >
      {/* Logo and Description */}
      <div style={{ flex: 1, minWidth: "220px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              background: "#0078d7",
              padding: "10px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
            }}
          >
            <img
              src="/mnt/data/29826df7-74df-4ac3-aca5-0b22d79e965e.png"
              alt="Logo"
              style={{ width: "24px", height: "24px", filter: "invert(1)" }}
            />
          </div>
          <h3
            style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: "1.3rem",
              margin: 0,
            }}
          >
            Vatavruksha
          </h3>
        </div>
        <p style={{ maxWidth: "320px", lineHeight: 1.5 }}>
          Building excellence since 2009 with strong foundations and lasting
          trust. Your trusted partner for all construction and infrastructure
          needs.
        </p>
        <div
          style={{ marginTop: "20px", display: "flex", gap: "15px" }}
        >
          <a
            href="#"
            style={{
              background: "#0078d7",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-facebook-f" style={{ color: "#fff" }}></i>
          </a>
          <a
            href="#"
            style={{
              background: "#0078d7",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-twitter" style={{ color: "#fff" }}></i>
          </a>
          <a
            href="#"
            style={{
              background: "#0078d7",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-linkedin-in" style={{ color: "#fff" }}></i>
          </a>
          <a
            href="#"
            style={{
              background: "#0078d7",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-instagram" style={{ color: "#fff" }}></i>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ flex: 1, minWidth: "140px" }}>
        <h4 style={{ marginBottom: "15px" }}>Quick Links</h4>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            lineHeight: 2,
          }}
        >
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Services
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Blog
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Career
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Made with Readdy
            </a>
          </li>
        </ul>
      </div>

      {/* Our Services */}
      <div style={{ flex: 1, minWidth: "160px" }}>
        <h4 style={{ marginBottom: "15px" }}>Our Services</h4>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            lineHeight: 2,
          }}
        >
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Trimix Flooring
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Concrete Works
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Project Management
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Custom Infrastructure
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Design-Build Services
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Quality Assurance
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Information */}
      <div style={{ flex: 1, minWidth: "220px" }}>
        <h4 style={{ marginBottom: "15px" }}>Contact Information</h4>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            lineHeight: 2,
            fontSize: "0.9rem",
          }}
        >
          <li>
            <i
              className="fas fa-map-marker-alt"
              style={{ color: "#0078d7", marginRight: "8px" }}
            ></i>
            123 Construction Avenue, Business District, Mumbai 400001
            Maharashtra, India
          </li>
          <li>
            <i
              className="fas fa-phone"
              style={{ color: "#0078d7", marginRight: "8px" }}
            ></i>
            +91 9876543210
          </li>
          <li>
            <i
              className="fas fa-envelope"
              style={{ color: "#0078d7", marginRight: "8px" }}
            ></i>
            info@vatavrukshainfra.com
          </li>
          <li>
            <i
              className="fab fa-whatsapp"
              style={{ color: "#0078d7", marginRight: "8px" }}
            ></i>
            +91 9876543210
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
