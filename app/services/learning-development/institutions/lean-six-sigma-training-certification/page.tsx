import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faGears,
  faAward,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Lean & Six Sigma Training | CBS",
  description:
    "Comprehensive Lean and Six Sigma training and certification programs for achieving operational excellence and continuous improvement.",
};

const KEY_FEATURES = [
  {
    icon: faChartLine,
    title: "Process Optimization",
    description: "Learn to identify and eliminate inefficiencies in processes.",
  },
  {
    icon: faGears,
    title: "Quality Management",
    description: "Master tools and techniques for enhancing quality control.",
  },
  {
    icon: faAward,
    title: "Certification Paths",
    description: "Structured certification programs from Yellow to Black Belt.",
  },
  {
    icon: faUserGear,
    title: "Practical Application",
    description: "Real-world case studies and hands-on implementation.",
  },
];

const CERTIFICATION_LEVELS = [
  {
    title: "Yellow Belt",
    topics: [
      "Introduction to Lean principles",
      "Basic problem-solving tools",
      "Process mapping fundamentals",
      "Quality metrics basics",
    ],
  },
  {
    title: "Green Belt",
    topics: [
      "Advanced statistical tools",
      "Project management",
      "Process improvement methodologies",
      "Data analysis techniques",
    ],
  },
  {
    title: "Black Belt",
    topics: [
      "Leadership in Lean Six Sigma",
      "Advanced statistical analysis",
      "Change management",
      "Project mentoring",
    ],
  },
];

export default function LeanSixSigmaPage() {
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
              {
                label: "Learning & Development",
                href: "/services/learning-development",
              },
              {
                label: "For Institutions",
                href: "/services/learning-development/institutions",
              },
              { label: "Lean & Six Sigma" },
            ]}
          />
          
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Lean & Six Sigma Training
            </h1>
            <p className="text-xl text-white/80">
              Master the principles of operational excellence through our
              comprehensive Lean and Six Sigma certification programs.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {KEY_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-2xl text-primary"
                  />
                </div>
                <h3 className="text-lg font-bold text-heading mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certification Levels */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Certification Levels
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {CERTIFICATION_LEVELS.map((level, index) => (
              <div
                key={level.title}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="text-2xl font-bold text-primary mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-heading mb-4">
                  {level.title}
                </h3>
                <ul className="space-y-3">
                  {level.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-heading text-center mb-12">
              Program Benefits
            </h2>
            <div className="space-y-6">
              {[
                "Enhanced process efficiency and quality",
                "Reduced operational costs and waste",
                "Improved problem-solving capabilities",
                "Industry-recognized certifications",
                "Practical implementation skills",
                "Career advancement opportunities",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted">{benefit}</p>
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
            <h2 className="text-3xl font-bold mb-6 text-white">
              Start Your Certification Journey
            </h2>
            <p className="text-white/80 mb-8">
              Ready to master Lean Six Sigma methodologies?
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Request Program Details
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
} 