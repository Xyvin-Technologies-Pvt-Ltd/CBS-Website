import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLocationDot, faClock, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Image from 'next/image';

export const metadata = {
  title: "Careers | CBS",
  description: "Join our team at CBS and be part of transforming businesses in Oman.",
};

const OPEN_POSITIONS = [
  {
    title: "Senior Business Analyst",
    type: "Full Time",
    location: "Muscat, Oman",
    salary: "Competitive",
    description: "We're looking for an experienced Business Analyst to join our Enterprise Transformation team.",
    requirements: [
      "5+ years of experience in business analysis",
      "Strong knowledge of business process modeling",
      "Excellent communication skills",
      "Bachelor's degree in Business, IT, or related field"
    ]
  },
  {
    title: "Software Developer",
    type: "Full Time",
    location: "Muscat, Oman",
    salary: "Competitive",
    description: "Join our technology team to develop innovative solutions for our clients.",
    requirements: [
      "3+ years of experience in full-stack development",
      "Proficiency in React, Node.js",
      "Experience with cloud technologies",
      "Strong problem-solving skills"
    ]
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full Time",
    location: "Muscat, Oman",
    salary: "Competitive",
    description: "Help our clients transform their digital presence and marketing strategies.",
    requirements: [
      "3+ years of digital marketing experience",
      "Experience with SEO, SEM, and social media marketing",
      "Strong analytical skills",
      "Marketing degree preferred"
    ]
  }
];

export default function CareersPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-[#083c54] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Careers" }]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join Our Team
            </h1>
            <p className="text-xl text-white/80">
              Be part of a dynamic team dedicated to transforming businesses in Oman. 
              Discover exciting opportunities to grow your career with us.
            </p>
          </div>
        </Container>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-heading mb-12">Open Positions</h2>
          <div className="grid gap-8">
            {OPEN_POSITIONS.map((position, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-bold text-heading mb-4 md:mb-0">{position.title}</h3>
                  <button className="bg-[#083c54] text-white px-6 py-2 rounded-lg hover:bg-[#1f5872] transition-colors">
                    Apply Now
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-muted">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                    {position.type}
                  </div>
                  <div className="flex items-center text-muted">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-muted">
                    <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
                    {position.salary}
                  </div>
                </div>

                <p className="text-muted mb-4">{position.description}</p>

                <div className="mt-4">
                  <h4 className="font-semibold text-heading mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-muted">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="mb-1">{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-heading mb-8">Apply Now</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#083c54] focus:border-[#083c54]"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#083c54] focus:border-[#083c54]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  Position Applied For
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#083c54] focus:border-[#083c54]">
                  <option value="">Select a position</option>
                  {OPEN_POSITIONS.map((position, index) => (
                    <option key={index} value={position.title}>
                      {position.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#083c54] focus:border-[#083c54]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  Cover Letter
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#083c54] focus:border-[#083c54]"
                  placeholder="Tell us why you're interested in this position"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  Upload Resume
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#083c54] hover:text-[#083c54]/90">
                        <span>Upload a file</span>
                        <input type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#083c54] text-white px-8 py-3 rounded-lg hover:bg-[#083c54]/90 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
} 