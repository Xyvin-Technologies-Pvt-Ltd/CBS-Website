import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faMobile,
  faHandshake,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Retail Loyalty Platform Case Study | CBS",
  description:
    "How CBS developed an innovative loyalty platform for 240+ fuel stations across Oman.",
};

const HIGHLIGHTS = [
  {
    icon: faUsers,
    title: "Customer Engagement",
    description:
      "Enhanced customer relationships through personalized rewards program",
  },
  {
    icon: faMobile,
    title: "Mobile App Integration",
    description:
      "Seamless digital experience through integrated mobile application",
  },
  {
    icon: faHandshake,
    title: "Partner Network",
    description:
      "Extensive network of retail partnerships across multiple categories",
  },
  {
    icon: faChartPie,
    title: "Customer Segmentation",
    description:
      "Sophisticated earn and burn model based on purchase value",
  },
];

export default function RetailLoyaltyPlatformCaseStudyPage() {
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
              { label: "Retail Loyalty Platform" },
            ]}
          />
          
          <div className="mt-8 max-w-3xl">
            <div className="text-sm font-medium text-white/80 mb-4">
              Oil & Gas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Building Customer Loyalty in Fuel Retail
            </h1>
            <p className="text-xl text-white/80">
              A comprehensive loyalty platform connecting fuel stations with
              retail partners across Oman.
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
                In Oman's competitive fuel retail market characterized by thin
                margins, the client needed to increase customer engagement and
                drive mobile app adoption while differentiating their service
                offering.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-heading mb-6">
                Our Solution
              </h2>
              <p className="text-muted mb-4">
                CBS developed a comprehensive loyalty program featuring:
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Strategic retail partnerships across multiple categories",
                  "Segmented rewards based on purchase value",
                  "Mobile app integration for seamless experience",
                  "Network of retail discounts and offers",
                  "Customized earn and burn model",
                  "Operational support and program management",
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
                Partnership Categories
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Food & Beverages",
                  "Fashion & Clothing",
                  "Health & Fitness",
                  "Travel & Leisure",
                  "Learning & Development",
                  "Lifestyle Services",
                ].map((category) => (
                  <div
                    key={category}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-heading font-medium">{category}</p>
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
            <h2 className="text-3xl font-bold mb-6">
              Ready to Enhance Your Customer Loyalty?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us to discuss how our loyalty solutions can help grow
              your business.
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