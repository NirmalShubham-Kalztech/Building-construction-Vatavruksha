import axios from "axios";
import React, { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    const response = await axios.post("/contact", {
      name,
      email,
      phone,
      message,
    });

    console.log(response);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 md:py-20 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h2>
        <p className="text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
          Ready to start your construction project? Get in touch with our expert
          team for consultation and detailed quotes.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white shadow-md p-6 sm:p-8 rounded-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get a Free Quote
          </h2>
          <p className="mb-6 md:mb-8 text-gray-600 text-sm md:text-base">
            Fill out the form below and we’ll get back to you within 24 hours
            with a detailed consultation.
          </p>

          <form className="space-y-5 md:space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-sm md:text-base">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-sm md:text-base">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-sm md:text-base">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-sm md:text-base">
                Project Details *
              </label>
              <textarea
                rows="5"
                placeholder="Describe your project requirements, timeline, and any specific needs..."
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                maxLength="500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                Maximum 500 characters
              </p>
            </div>

            <button
              type="submit"
              onClick={sendData}
              className="bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Office Address
            </h3>
            <p className="mb-2 text-gray-700 text-sm md:text-base">
              Vatavruksha Infra Project
            </p>
            <p className="mb-2 text-gray-700 text-sm md:text-base">
              1234 Infrastructure Lane
            </p>
            <p className="mb-2 text-gray-700 text-sm md:text-base">
              Mumbai, Maharashtra 400001
            </p>

            <h4 className="text-base md:text-lg font-semibold mt-6">
              Contact Details
            </h4>
            <p className="text-gray-700 text-sm md:text-base">
              📞 +91-9876543210
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              ✉️ contact@vatavruksha.com
            </p>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-green-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-green-600 transition text-sm md:text-base"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="rounded overflow-hidden shadow-md h-[250px] sm:h-[300px] md:h-[400px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609871102!2d72.7410993882745!3d19.08219783978201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c6f41b165%3A0x5d4e2e4dca60b202!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
