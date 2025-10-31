import React from "react";
import {
  FaTrophy,
  FaGraduationCap,
  FaUsers,
  FaHeart,
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
} from "react-icons/fa";

export default function JoinOurTeam() {
  const features = [
    {
      icon: <FaTrophy className="text-blue-500 text-2xl" />,
      title: "Excellence Culture",
      description: "Work with industry leaders and contribute to award-winning projects.",
      bg: "bg-blue-100",
    },
    {
      icon: <FaGraduationCap className="text-green-500 text-2xl" />,
      title: "Learning & Growth",
      description: "Continuous training programs and career advancement opportunities.",
      bg: "bg-green-100",
    },
    {
      icon: <FaUsers className="text-purple-500 text-2xl" />,
      title: "Collaborative Team",
      description: "Work with passionate professionals in a supportive environment.",
      bg: "bg-purple-100",
    },
    {
      icon: <FaHeart className="text-orange-500 text-2xl" />,
      title: "Work-Life Balance",
      description: "Flexible policies and comprehensive benefits package.",
      bg: "bg-orange-100",
    },
  ];

  // Added jobs array here
  const jobs = [
    {
      title: "Senior Civil Engineer",
      category: "Engineering",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "5-8 years",
      description:
        "Lead construction projects and supervise trimix flooring installations with expertise in structural engineering.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "5+ years experience in construction",
        "Knowledge of trimix flooring technology",
        "Project management certification preferred",
      ],
    },
    {
      title: "Project Manager",
      category: "Operations",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "4-6 years",
      description:
        "Manage multiple construction projects from planning to completion ensuring quality and timeline adherence.",
      requirements: [
        "Engineering degree preferred",
        "4+ years project management experience",
        "Strong leadership and communication skills",
        "PMP certification is a plus",
      ],
    },
    {
      title: "Quality Control Engineer",
      category: "Quality Assurance",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Ensure construction quality standards and conduct regular inspections of concrete works and flooring.",
      requirements: [
        "Bachelor's in Civil Engineering",
        "2+ years in quality control",
        "Knowledge of construction materials testing",
        "Attention to detail and analytical skills",
      ],
    },
    {
      title: "Construction Supervisor",
      category: "Operations",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Supervise on-site construction activities and ensure safety protocols are followed at all times.",
      requirements: [
        "Diploma in Civil Engineering",
        "3+ years site supervision experience",
        "Strong knowledge of safety regulations",
        "Excellent problem-solving skills",
      ],
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-[#008fd3] to-[#1f63e0] text-white py-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
          Build your career with Vatavruksha Infra Project and be part of creating extraordinary
          infrastructure that shapes the future.
        </p>
      </section>

      <section className="py-20 text-center px-4 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Vatavruksha?</h2>
        <p className="text-lg text-gray-600 mt-3 mb-10">
          Discover the benefits of joining our growing team
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`p-4 rounded-full ${item.bg} mb-4`}>{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2 max-w-xs text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#f8f9fb", padding: "40px 0" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Current Job Openings</h2>
          <p style={{ fontSize: "18px", color: "#666" }}>
            Find your perfect role and start building your future with us
          </p>
        </div>

        {/* Map over the jobs array to render all job sections */}
        {jobs.map((job, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "30px",
              maxWidth: "1200px",
              margin: index === 0 ? "0 auto 40px" : "40px auto",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              <div style={{ maxWidth: "65%" }}>
                <h3 style={{ fontWeight: "700" }}>{job.title}</h3>
                <span
                  style={{
                    backgroundColor: "#d6efff",
                    color: "#007bba",
                    fontSize: "12px",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    marginBottom: "10px",
                    display: "inline-block",
                  }}
                >
                  {job.category}
                </span>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    margin: "10px 0",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  <span>
                    <FaMapMarkerAlt style={{ marginRight: "6px", color: "#007bba" }} />
                    {job.location}
                  </span>
                  <span>
                    <FaClock style={{ marginRight: "6px", color: "#007bba" }} />
                    {job.type}
                  </span>
                  <span>
                    <FaBriefcase style={{ marginRight: "6px", color: "#007bba" }} />
                    {job.experience}
                  </span>
                </div>

                <p>{job.description}</p>

                <div style={{ marginTop: "15px" }}>
                  <strong>Requirements:</strong>
                  <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ alignSelf: "center", textAlign: "center" }}>
                <button
                  style={{
                    backgroundColor: "#007bba",
                    color: "#fff",
                    padding: "12px 24px",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                >
                  Apply Now
                </button>
                <br />
                <button
                  style={{
                    border: "2px solid #007bba",
                    backgroundColor: "transparent",
                    color: "#007bba",
                    padding: "10px 24px",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
