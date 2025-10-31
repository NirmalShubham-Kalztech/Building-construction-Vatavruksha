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
      icon: <FaTrophy className="text-blue-500 text-3xl" />,
      title: "Excellence Culture",
      description:
        "Work with industry leaders and contribute to award-winning projects.",
      bg: "bg-blue-100",
    },
    {
      icon: <FaGraduationCap className="text-green-500 text-3xl" />,
      title: "Learning & Growth",
      description:
        "Continuous training programs and career advancement opportunities.",
      bg: "bg-green-100",
    },
    {
      icon: <FaUsers className="text-purple-500 text-3xl" />,
      title: "Collaborative Team",
      description:
        "Work with passionate professionals in a supportive environment.",
      bg: "bg-purple-100",
    },
    {
      icon: <FaHeart className="text-orange-500 text-3xl" />,
      title: "Work-Life Balance",
      description:
        "Flexible policies and comprehensive benefits package.",
      bg: "bg-orange-100",
    },
  ];

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
      {/* --- Hero Section --- */}
      <section className="bg-gradient-to-r from-[#008fd3] to-[#1f63e0] text-white py-16 md:py-20 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Team</h2>
        <p className="text-base md:text-xl max-w-4xl mx-auto leading-relaxed">
          Build your career with Vatavruksha Infra Project and be part of
          creating extraordinary infrastructure that shapes the future.
        </p>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Vatavruksha?
        </h2>
        <p className="text-lg text-gray-600 mt-3 mb-10">
          Discover the benefits of joining our growing team
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`p-5 rounded-full ${item.bg} mb-4`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 max-w-xs text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Job Openings Section --- */}
      <section className="bg-[#f8f9fb] py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Current Job Openings
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Find your perfect role and start building your future with us
          </p>
        </div>

        <div className="space-y-10 max-w-6xl mx-auto">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 md:p-10"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                {/* Left Info */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {job.category}
                  </span>

                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-4">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-600" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaClock className="text-blue-600" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBriefcase className="text-blue-600" />
                      {job.experience}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-3">{job.description}</p>

                  <div className="mt-3">
                    <strong className="text-gray-900">Requirements:</strong>
                    <ul className="list-disc list-inside text-gray-600 mt-2 text-sm md:text-base">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Buttons */}
                <div className="flex flex-col justify-center items-center gap-3">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition w-full sm:w-auto">
                    Apply Now
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition w-full sm:w-auto">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
