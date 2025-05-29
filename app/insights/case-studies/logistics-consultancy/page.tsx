import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faFileContract,
  faChartPie,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Logistics Consultancy Case Study | CBS",
  description:
    "How CBS supported a leading trucking company's expansion through comprehensive loan application consultancy.",
};

const HIGHLIGHTS = [
  {
    icon: faTruck,
    title: "Fleet Expansion",
    description:
      "Strategic support for expanding service capacity to oil and gas sector",
  },
  {
    icon: faFileContract,
    title: "Documentation",
    description:
      "Comprehensive preparation and verification of loan application materials",
  },
  {
    icon: faChartPie,
    title: "Financial Analysis",
    description:
      "Detailed financial forecasting and feasibility assessment",
  },
  {
    icon: faHandshake,
    title: "Application Support",
    description:
      "End-to-end guidance through multi-tier approval process",
  },
];

export default function LogisticsConsultancyCaseStudyPage() {
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
              { label: "Logistics Consultancy" },
            ]}
          />
          
          <div className="mt-8 max-w-3xl">
            <div className="text-sm font-medium text-white/80 mb-4">
              Travel & Logistics
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Supporting Business Expansion in Logistics
            </h1>
            <p className="text-xl text-white/80">
              Comprehensive consultancy services for securing financing and
              expanding operations in Oman's logistics sector.
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
                A leading trucking company in Oman needed to expand their fleet
                to provide dedicated service to a major oil and gas company.
                The loan application process required extensive documentation
                and multiple approval tiers, presenting a complex challenge for
                the company.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-heading mb-6">
                Our Solution
              </h2>
              <p className="text-muted mb-4">
                CBS provided comprehensive support including:
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Financial report verification and organization",
                  "Documentation preparation and management",
                  "Top and bottom line forecasting",
                  "Comprehensive feasibility study",
                  "Application process guidance",
                  "Stakeholder communication support",
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
                Key Deliverables
              </h2>
              <div className="space-y-4">
                {[
                  "Detailed financial analysis and projections",
                  "Market research and industry analysis",
                  "Complete loan application documentation",
                  "Business expansion feasibility report",
                  "Risk assessment and mitigation strategies",
                  "Implementation roadmap",
                ].map((deliverable) => (
                  <div key={deliverable} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted">{deliverable}</span>
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
              Ready to Expand Your Business?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us to discuss how our consultancy services can support
              your business growth objectives.
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