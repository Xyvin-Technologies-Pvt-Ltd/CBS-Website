import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBullhorn,
  faLightbulb,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "HR & Communication Training | CBS",
  description:
    "Comprehensive HR and communication strategies to attract, retain, and develop talent aligned with your organization's goals.",
};

const KEY_FEATURES = [
  {
    icon: faUsers,
    title: "Talent Management",
    description: "Optimize recruitment, retention, and development strategies.",
  },
  {
    icon: faBullhorn,
    title: "Internal Communications",
    description:
      "Build effective communication channels across your organization.",
  },
  {
    icon: faLightbulb,
    title: "Leadership Development",
    description:
      "Nurture future leaders and strengthen management capabilities.",
  },
  {
    icon: faChartPie,
    title: "Performance Management",
    description:
      "Implement effective performance evaluation and feedback systems.",
  },
];

const PROGRAM_MODULES = [
  {
    title: "HR Strategy & Planning",
    topics: [
      "Strategic HR management",
      "Workforce planning",
      "HR metrics and analytics",
      "Policy development",
    ],
  },
  {
    title: "Communication Excellence",
    topics: [
      "Internal communication strategies",
      "Change management communication",
      "Crisis communication",
      "Employee engagement",
    ],
  },
  {
    title: "Talent Development",
    topics: [
      "Career development programs",
      "Succession planning",
      "Training needs assessment",
      "Performance evaluation systems",
    ],
  },
];

export default function HRCommunicationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              {
                label: "Learning & Development",
                href: "/services/learning-development",
              },

              {
                label: "For Corporates",
                href: "/services/learning-development/corporates",
              },
              { label: "HR & Communication" },

            ]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              HR & Communication Excellence
            </h1>
            <p className="text-xl text-white/80">
              Build a strong organizational culture through effective HR
              practices and internal communication strategies.
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

      {/* Program Modules */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Program Modules
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PROGRAM_MODULES.map((module, index) => (
              <div
                key={module.title}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="text-2xl font-bold text-primary mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-heading mb-4">
                  {module.title}
                </h3>
                <ul className="space-y-3">
                  {module.topics.map((topic) => (
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
                "Enhanced employee engagement and retention",
                "Improved organizational communication",
                "Stronger leadership pipeline",
                "More effective performance management",
                "Better talent acquisition and development",
                "Increased employee satisfaction",
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
              Elevate Your HR & Communication
            </h2>
            <p className="text-white/80 mb-8">
              Ready to transform your organization's HR practices and
              communication strategies?
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Request Training Details
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
