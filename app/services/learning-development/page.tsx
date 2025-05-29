import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faGraduationCap,
  faArrowRight,
  faLightbulb,
  faUsers,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Learning & Development | CBS",
  description:
    "Comprehensive learning and development solutions for corporates and institutions.",
};

const OFFERINGS = [
  {
    icon: faBuilding,
    title: "For Corporates",
    description:
      "Transform your organization with comprehensive learning solutions designed for corporate excellence.",
    programs: [
      {
        name: "Sales, Customer Service & Experience",
        href: "/services/learning-development/corporates/sales-customer-service",
      },
      {
        name: "HR & Communication",
        href: "/services/learning-development/corporates/hr-communication",
      },
      {
        name: "Team Building",
        href: "/services/learning-development/corporates/team-building",
      },
      {
        name: "Strategy Formulation",
        href: "/services/learning-development/corporates/strategy-formulation",
      },
    ],
    mainLink: "/services/learning-development/corporates",
  },
  {
    icon: faGraduationCap,
    title: "For Institutions",
    description:
      "Empower educational institutions with cutting-edge programs and development solutions.",
    programs: [
      {
        name: "Lean, Six Sigma Training & Certification",
        href: "/learning-development/institutions/lean-six-sigma",
      },
      {
        name: "Faculty Development Programs",
        href: "/learning-development/institutions/faculty-development",
      },
      {
        name: "Employability Skills",
        href: "/learning-development/institutions/employability-skills",
      },
    ],
    mainLink: "/learning-development/institutions",
  },
];

const LEARNING_ELEMENTS = [
  "Self-discovery exercises",
  "Discussions",
  "Short presentations",
  "Simulation",
  "Model and skills",
  "Conflict Styles Assessment",
  "Examples and case studies",
  "Tools",
  "Action plans",
];

const SIGNATURE_COURSES = {
  "Professional Development": [
    "Sell like a Champion",
    "The Knack of Giving Demos",
    "Manage Digital Marketing like a Pro",
    "Ace Customer Service",
    "How to be an effective HR?",
  ],
  "Personal Growth": [
    "Live in the Present and the Power of Now!",
    "Mindfulness & Wellness in Tumultuous Situations",
    "Compassion Fatigue, Burnout, Stress and Tangible Self-Care",
    "Balancing Priorities; Tasks, Deadlines, and Expectations",
  ],
  "Leadership & Management": [
    "Leading the change you want to see",
    "Building Accountability & Ownership",
    "Unlock your Intrapreneurial Spirit",
    "Giving & Taking Feedback in Style",
    "Lean Management- What does it mean to your Organization?",
  ],
  "Technical Training Suite": [
    "Anti-money laundering",
    "Finance for non-finance managers",
    "Credit Approval Process",
    "Risk Management",
    "Retail Banking",
    "Branch Banking",
    "e-Channels",
    "Digital Transformation in Banks (For Leaders)",
    "Aligning Digital Transformation with Business Strategy (For Leaders)",
  ],
};

export default function LearningDevelopmentPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Learning & Development" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Learning & Development
            </h1>
            <p className="text-xl text-white/80">
              Comprehensive learning solutions designed to enhance individual
              and organizational capabilities through innovative training
              methodologies.
            </p>
          </div>
        </Container>
      </section>

      {/* Offerings Section */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {OFFERINGS.map((offering) => (
              <div
                key={offering.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                  <FontAwesomeIcon
                    icon={offering.icon}
                    className="text-3xl text-primary"
                  />
                </div>

                <h2 className="text-2xl font-bold text-heading mb-4">
                  {offering.title}
                </h2>
                <p className="text-muted mb-8">{offering.description}</p>

                <div className="space-y-4 mb-8">
                  {offering.programs.map((program) => (
                    <Link
                      key={program.name}
                      href={program.href}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted group-hover:text-primary transition-colors">
                        {program.name}
                      </span>
                    </Link>
                  ))}
                </div>

                <Link
                  href={offering.mainLink}
                  className="inline-flex items-center text-primary font-medium hover:opacity-80 transition-opacity"
                >
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Learning Elements */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Our Learning Approach
          </h2>
          <p className="text-muted text-center mb-12 max-w-3xl mx-auto">
            We incorporate the following elements into the learning experience
            to help participants build on their inherent strengths while working
            on opportunities for improvement:
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {LEARNING_ELEMENTS.map((element) => (
              <div
                key={element}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-3 h-3 rounded-full bg-primary mb-4" />
                <p className="text-heading font-medium">{element}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Signature Courses */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Signature Courses
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(SIGNATURE_COURSES).map(([category, courses]) => (
              <div key={category} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-heading mb-6">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {courses.map((course) => (
                    <li key={course} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Custom Solutions */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-heading mb-6">
              Customized Solutions
            </h2>
            <p className="text-muted mb-8">
              That's not all! We create customized learning programs for
              high-impact teams and individuals, tailored to your specific needs
              and objectives.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Discuss Your Requirements
            </button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-heading mb-12">
              Why Choose Our L&D Solutions?
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Trainers",
                  description:
                    "Industry professionals with extensive experience",
                },
                {
                  title: "Customized Programs",
                  description: "Tailored solutions for your specific needs",
                },
                {
                  title: "Proven Results",
                  description: "Track record of successful implementations",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="font-bold text-heading mb-2">{item.title}</h3>
                  <p className="text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us to discuss how our learning and development solutions
              can benefit your organization.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Get Started
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
