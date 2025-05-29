import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faCloud,
  faLaptopCode,
  faArrowRight,
  faRocket,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Transformation | CBS",
  description:
    "Digital transformation solutions to modernize your business operations and drive innovation.",
};

const SOLUTIONS = [
  {
    icon: faGears,
    title: "Business Process Automation",
    description: "Streamline operations with intelligent automation solutions.",
    features: [
      "Workflow Automation",
      "Document Management",
      "Process Digitization",
      "Integration Services",
    ],
  },
  {
    icon: faCloud,
    title: "Digital Workplace Solutions",
    description:
      "Modern workplace tools for enhanced productivity and collaboration.",
    features: [
      "Collaboration Platforms",
      "Communication Tools",
      "Project Management",
      "Knowledge Management",
    ],
  },
  {
    icon: faLaptopCode,
    title: "Custom Software Development",
    description:
      "Tailored software solutions to address unique business needs.",
    features: [
      "Enterprise Applications",
      "Mobile Solutions",
      "Web Applications",
      "System Integration",
    ],
  },
];

const BENEFITS = [
  {
    icon: faRocket,
    title: "Accelerated Growth",
    description:
      "Drive business growth through digital innovation and process optimization.",
  },
  {
    icon: faGears,
    title: "Operational Excellence",
    description:
      "Achieve higher efficiency and productivity through automation.",
  },
  {
    icon: faShieldAlt,
    title: "Enhanced Security",
    description: "Robust security measures to protect your digital assets.",
  },
];

export default function EnterpriseTransformationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products & Services", href: "/services" },
              { label: "Enterprise Transformation" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Enterprise Transformation
            </h1>
            <p className="text-xl text-white/80">
              Comprehensive digital transformation solutions to modernize your
              business operations and drive sustainable growth.
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution) => (
              <div
                key={solution.title}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                  <FontAwesomeIcon
                    icon={solution.icon}
                    className="text-2xl text-primary"
                  />
                </div>
                <h3 className="text-xl font-bold text-heading mb-4">
                  {solution.title}
                </h3>
                <p className="text-muted mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6 mx-auto">
                  <FontAwesomeIcon
                    icon={benefit.icon}
                    className="text-2xl text-primary"
                  />
                </div>
                <h3 className="text-xl font-bold text-heading mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us to discuss how our enterprise transformation solutions
              can help modernize your business operations.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors inline-block"
            >
              Get Started
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
