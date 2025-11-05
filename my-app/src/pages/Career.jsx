import React from "react";
import { motion } from "framer-motion";

// --- Import images properly ---
import Career1 from "../assets/img/Career1.jpg";
import Career2 from "../assets/img/Career2.jpg";
import Career3 from "../assets/img/Career3.jpg";
import Career4 from "../assets/img/Career4.jpg";
import Career5 from "../assets/img/Career5.jpg";
import Career6 from "../assets/img/Career6.jpg";

const JoinOurTeam = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* --- Hero Section --- */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-4 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Build Your Career with Vatavruksha Construction
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Join our team of professionals who shape skylines, design excellence,
          and build the future — one project at a time.
        </motion.p>
      </section>

      {/* --- Why Join Vatavruksha --- */}
      <section className="py-16 px-4 bg-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Join Vatavruksha?
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovative Projects",
              desc: "Work on challenging residential, commercial, and civil projects that redefine standards.",
            },
            {
              title: "Learning & Growth",
              desc: "Gain hands-on experience, mentorship, and opportunities to enhance your skills.",
            },
            {
              title: "Team Culture",
              desc: "Be a part of a friendly, professional, and passionate team that supports each other.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-500"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Life at Vatavruksha --- */}
      <section className="py-16 bg-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Life at Vatavruksha
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            { img: Career1, caption: "Collaborative Teamwork" },
            { img: Career2, caption: "On-Site Excellence" },
            { img: Career3, caption: "Learning & Growth" },
            { img: Career4, caption: "Team Celebrations" },
            { img: Career5, caption: "Innovation at Work" },
            { img: Career6, caption: "Commitment to Quality" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-sm">
                {item.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Employee Testimonials --- */}
      <section className="bg-[#f3f6fb] py-16 px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Our Team Says
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Rohit Patil",
              role: "Site Engineer",
              text: "Working at Vatavruksha has been a great learning experience. The leadership is supportive and the projects are exciting!",
              img: Career1,
            },
            {
              name: "Akshay Jadhav",
              role: "Project Manager",
              text: "The culture here promotes innovation and teamwork. Every day feels like we’re building something meaningful.",
              img: Career2,
            },
            {
              name: "Priya Kulkarni",
              role: "Architect",
              text: "Vatavruksha gives complete creative freedom. Designing modern structures that become landmarks is truly rewarding.",
              img: Career3,
            },
            {
              name: "Sandeep More",
              role: "Civil Supervisor",
              text: "From planning to execution, every stage here teaches you something new. The team coordination is amazing!",
              img: Career4,
            },
            {
              name: "Sneha Deshmukh",
              role: "Electrical Engineer",
              text: "I love the balance of professionalism and friendly culture here. Every project challenges my technical skills positively.",
              img: Career5,
            },
            {
              name: "Vikas Pawar",
              role: "Interior Designer",
              text: "Here, aesthetics meet engineering perfection. I’ve grown a lot as a designer since joining Vatavruksha.",
              img: Career6,
            },
          ].map((emp, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={emp.img}
                  alt={emp.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg text-gray-900">
                    {emp.name}
                  </h4>
                  <p className="text-sm text-gray-500">{emp.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {emp.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Apply Now Section --- */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-center px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ready to Build Your Future?
        </motion.h2>
        <p className="text-lg text-white/90 mb-8">
          Submit your application and become part of the Vatavruksha family.
        </p>
        <form className="max-w-2xl mx-auto bg-white text-gray-900 p-6 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border rounded-md w-full focus:outline-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border rounded-md w-full focus:outline-blue-500"
            />
          </div>
          <textarea
            placeholder="Why do you want to join us?"
            className="w-full p-3 border rounded-md mb-4 focus:outline-blue-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default JoinOurTeam;
