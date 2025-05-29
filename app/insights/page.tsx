import { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faIndustry,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Insights | CBS",
  description: "Discover our latest case studies and industry insights across various sectors.",
};

const CASE_STUDIES = [
  {
    title: "School Management System",
    industry: "Banking & Financial Services",
    description: "Transforming Oman's educational ecosystem through unified technology solutions.",
    href: "/insights/case-studies/school-management-system",
  },
  {
    title: "Retail Loyalty Platform",
    industry: "Oil & Gas",
    description: "Enhancing customer engagement across 240+ fuel stations with innovative loyalty solutions.",
    href: "/insights/case-studies/retail-loyalty-platform",
  },
  {
    title: "Jewelry Management System",
    industry: "Gem & Jewelry",
    description: "Automating gold-scheme business operations for enhanced efficiency.",
    href: "/insights/case-studies/jewelry-management-system",
  },
];

const INDUSTRIES = [
  {
    name: "Banking & Financial Services",
    description: "Digital transformation solutions for financial institutions",
    href: "/insights/industries/banking-financial-services",
  },
  {
    name: "Oil & Gas",
    description: "Innovative loyalty and customer engagement solutions",
    href: "/insights/industries/oil-gas",
  },
  {
    name: "Travel & Logistics",
    description: "Consultancy and business expansion services",
    href: "/insights/industries/travel-logistics",
  },
  {
    name: "Gem & Jewelry",
    description: "Management systems and compliance solutions",
    href: "/insights/industries/gem-jewelry",
  },
];

export default function InsightsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Insights" },
            ]}
          />
          
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Industry Insights & Case Studies
            </h1>
            <p className="text-xl text-white/80">
              Explore our success stories and industry expertise across various sectors
              in Oman and the GCC region.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Featured Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.title}
                href={study.href}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-sm font-medium text-primary mb-2">
                  {study.industry}
                </div>
                <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted mb-4">
                  {study.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium">
                  Read More
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="ml-2 group-hover:translate-x-1 transition-transform" 
                  />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/insights/case-studies"
              className="inline-flex items-center text-primary font-medium hover:opacity-80 transition-opacity"
            >
              View All Case Studies
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-muted mb-4">
                  {industry.description}
                </p>
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
              Want to Learn More?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us to discuss how our solutions can benefit your organization.
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