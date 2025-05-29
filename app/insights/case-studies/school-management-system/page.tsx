import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCubes,
  faChartLine,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "School Management System Case Study | CBS",
  description:
    "How CBS helped transform Oman's educational ecosystem through a unified technology solution.",
};

const HIGHLIGHTS = [
  {
    icon: faCubes,
    title: "Unified Platform",
    description:
      "Integration of multiple educational processes under one system",
  },
  {
    icon: faGraduationCap,
    title: "Complete Solution",
    description: "Learning management, communication, and administrative tools",
  },
  {
    icon: faChartLine,
    title: "Ecosystem Impact",
    description: "Supporting educational jurisdiction's modernization goals",
  },
  {
    icon: faLaptop,
    title: "Technology Innovation",
    description: "Modern ERP system with comprehensive features",
  },
];

export default function SchoolManagementCaseStudyPage() {
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
              { label: "School Management System" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <div className="text-sm font-medium text-white/80 mb-4">
              Banking & Financial Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Transforming Oman's Educational Ecosystem
            </h1>
            <p className="text-xl text-white/80">
              A comprehensive technology solution to unify and modernize
              educational processes across Oman.
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
                Oman's educational ecosystem faced significant challenges due to
                its highly dispersed nature. The educational jurisdiction aimed
                to unify processes and projects but encountered hurdles in
                implementing such a massive change in the existing educational
                scenario.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-heading mb-6">
                Our Solution
              </h2>
              <p className="text-muted mb-4">
                Working with one of Oman's leading banks, CBS developed an
                all-encompassing ERP system that includes:
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Learning management system",
                  "Parent communication platform",
                  "Fee payment processing",
                  "Transport management",
                  "Books and uniforms management",
                  "Administrative tools",
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
                Impact & Results
              </h2>
              <p className="text-muted mb-4">
                While the project is still under discussion, CBS has
                successfully:
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Provided expertise in educational technology solutions",
                  "Supported the modernization of educational processes",
                  "Designed a unified platform for multiple stakeholders",
                  "Created a foundation for future educational innovations",
                ].map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Educational Institution?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us to discuss how our technology solutions can help
              modernize your educational processes.
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
