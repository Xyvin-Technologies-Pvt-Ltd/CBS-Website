import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faUserTie,
  faBook,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "AML/CFT Training Case Study | CBS",
  description:
    "How CBS delivered AML/CFT compliance training and policy development for a precious metals trading company in Oman.",
};

const HIGHLIGHTS = [
  {
    icon: faShieldAlt,
    title: "Compliance Training",
    description: "Comprehensive AML/CFT training program for employees",
  },
  {
    icon: faUserTie,
    title: "Policy Development",
    description: "Creation and review of AML/CFT policies and procedures",
  },
  {
    icon: faBook,
    title: "Documentation",
    description: "Development of comprehensive compliance manuals",
  },
  {
    icon: faClipboardCheck,
    title: "Risk Management",
    description: "Implementation of ML/FT risk assessment frameworks",
  },
];

export default function AMLCFTTrainingCaseStudyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: "Case Studies", href: "/insights/case-studies" },
              { label: "AML/CFT Training" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <div className="text-sm font-medium text-white/80 mb-4">
              Gem & Jewelry
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ensuring AML/CFT Compliance Excellence
            </h1>
            <p className="text-xl text-white/80">
              Comprehensive compliance training and policy development for
              precious metals trading in Oman.
            </p>
          </div>
        </Container>
      </section>

      {/* Project Highlights */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HIGHLIGHTS.map((highlight) => (
              <div
                key={highlight.title}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <FontAwesomeIcon
                    icon={highlight.icon}
                    className="text-2xl text-primary"
                  />
                </div>
                <h3 className="text-lg font-bold text-heading mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-heading mb-6">
                The Challenge
              </h2>
              <p className="text-muted mb-4">
                With Oman adopting stringent international practices in
                combating money laundering and terrorism financing, financial
                institutions and businesses dealing in precious metals needed to
                ensure compliance with AML/CFT Laws and guidelines.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-heading mb-6">
                Our Solution
              </h2>
              <p className="text-muted mb-4">
                CBS delivered a comprehensive compliance program including:
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Employee AML/CFT training and certification",
                  "Development of compliance policies and procedures",
                  "Risk assessment framework implementation",
                  "Documentation and reporting systems",
                  "Regulatory compliance guidance",
                  "Ongoing support and updates",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-heading mb-6">
                Key Outcomes
              </h2>
              <div className="space-y-4">
                {[
                  "Full compliance with AML/CFT regulations",
                  "Trained and certified employees",
                  "Comprehensive policy documentation",
                  "Enhanced risk management capabilities",
                  "Improved operational procedures",
                  "Strengthened compliance culture",
                ].map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Need Compliance Training?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us to discuss how we can help ensure your organization's
              compliance with AML/CFT regulations.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Get in Touch
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
