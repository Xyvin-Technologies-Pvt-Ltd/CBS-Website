import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faGraduationCap,
  faChartLine,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Products & Services | CBS",
  description:
    "Explore our comprehensive range of business transformation solutions including enterprise transformation, learning & development, and strategy & consulting services.",
};

const SERVICES = [
  {
    icon: faBuilding,
    title: "Enterprise Transformation",
    description:
      "End-to-end digital transformation solutions to modernize your business operations.",
    href: "/services/enterprise-transformation",
    features: [
      "Business Process Automation",
      "Digital Workplace Solutions",
      "Cloud Infrastructure",
      "Custom Software Development",
    ],
  },
  {
    icon: faGraduationCap,
    title: "Learning & Development",
    description:
      "Comprehensive training programs for corporates and educational institutions.",
    href: "/services/learning-development",
    features: [
      "Team Building",
      "Strategy Formulation",
      "Sales & Customer Service",
      "Professional Development",
    ],
  },
  {
    icon: faChartLine,
    title: "Strategy & Consulting",
    description:
      "Strategic consulting services to drive business growth and innovation.",
    href: "/services/strategy-consulting",
    features: [
      "Business Strategy",
      "Digital Transformation",
      "Process Optimization",
      "Change Management",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products & Services" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Products & Services
            </h1>
            <p className="text-xl text-white/80">
              Comprehensive business transformation solutions helping
              organizations achieve continuous improvements through technology
              and innovation.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-2xl text-primary"
                  />
                </div>
                <h3 className="text-xl font-bold text-heading mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-primary font-medium">
                  Learn More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us to discuss how our solutions can help achieve your
              business objectives.
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
