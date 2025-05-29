import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faUsers,
  faChartLine,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Jewelry Management System Case Study | CBS",
  description:
    "How CBS helped automate gold-scheme business operations for a leading jewelry retailer in Oman.",
};

const HIGHLIGHTS = [
  {
    icon: faGem,
    title: "Gold Scheme Management",
    description:
      "Comprehensive solution for managing monthly deposit collections",
  },
  {
    icon: faUsers,
    title: "Sales Management",
    description:
      "Efficient tracking of salesman activities and customer relationships",
  },
  {
    icon: faChartLine,
    title: "Business Analytics",
    description:
      "Detailed reporting for performance analysis and decision making",
  },
  {
    icon: faMobileScreen,
    title: "Process Automation",
    description:
      "Streamlined administrative and sales processes",
  },
];

export default function JewelryManagementCaseStudyPage() {
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
              { label: "Jewelry Management System" },
            ]}
          />
          
          <div className="mt-8 max-w-3xl">
            <div className="text-sm font-medium text-white/80 mb-4">
              Gem & Jewelry
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Modernizing Gold Scheme Management
            </h1>
            <p className="text-xl text-white/80">
              A comprehensive solution for automating gold-scheme operations
              and enhancing customer service for a leading jewelry retailer.
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
                A well-established jewelry brand with three decades of history
                needed to modernize their gold-scheme business operations,
                particularly the process of salesmen collecting monthly
                deposits from customers. The existing system lacked automation
                and efficient data management capabilities.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-heading mb-6">
                Our Solution
              </h2>
              <p className="text-muted mb-4">
                CBS developed an integrated management system featuring:
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Automated collection tracking and management",
                  "Digital invoicing and receipt generation",
                  "Customer data management system",
                  "Sales performance analytics",
                  "Region-wise reporting capabilities",
                  "Mobile-friendly interface for field operations",
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
                Business Impact
              </h2>
              <div className="space-y-4">
                {[
                  "Efficient customer data management",
                  "Reduced wait times for transactions",
                  "Accurate reporting and analytics",
                  "Improved customer experience",
                  "Better salesman performance tracking",
                  "Data-driven decision making capabilities",
                ].map((impact) => (
                  <div key={impact} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted">{impact}</span>
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
              Ready to Transform Your Business Operations?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us to discuss how our management solutions can help
              streamline your business processes.
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