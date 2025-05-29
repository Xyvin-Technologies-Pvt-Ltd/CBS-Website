import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShip,
  faFish,
  faHandshake,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Marine Loyalty Program Case Study | CBS",
  description:
    "How CBS developed a specialized loyalty program for Oman's fishing community to enhance fuel service engagement.",
};

const HIGHLIGHTS = [
  {
    icon: faShip,
    title: "Marine Focus",
    description:
      "Specialized program designed for maritime fuel service customers",
  },
  {
    icon: faFish,
    title: "Industry Alignment",
    description:
      "Supporting Oman's growing fisheries sector and GDP contribution",
  },
  {
    icon: faHandshake,
    title: "Strategic Partnerships",
    description:
      "Collaboration with fishing supplies and equipment providers",
  },
  {
    icon: faChartLine,
    title: "Revenue Growth",
    description:
      "Enhanced sales through targeted community engagement",
  },
];

export default function MarineLoyaltyProgramCaseStudyPage() {
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
              { label: "Marine Loyalty Program" },
            ]}
          />
          
          <div className="mt-8 max-w-3xl">
            <div className="text-sm font-medium text-white/80 mb-4">
              Oil & Gas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Specialized Loyalty Program for Maritime Sector
            </h1>
            <p className="text-xl text-white/80">
              A targeted loyalty solution designed specifically for Oman's
              fishing community and maritime fuel services.
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
                With Oman's picturesque coastline offering valuable fishing
                grounds, the client needed to strengthen their relationship with
                the fishing community while supporting the government's
                initiative to grow the fisheries sector's GDP contribution.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-heading mb-6">
                Our Solution
              </h2>
              <p className="text-muted mb-4">
                CBS developed a specialized loyalty program that includes:
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Exclusive benefits for the fishing community",
                  "Partnerships with fishing supplies providers",
                  "Integration with sonar scanning system providers",
                  "Targeted loyalty building initiatives",
                  "Community support programs",
                  "Specialized maritime service benefits",
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
                  "Strengthened relationship with fishing community",
                  "Increased fuel sales for marine vessels",
                  "Support for government's fisheries sector initiatives",
                  "Enhanced brand loyalty in maritime sector",
                  "Creation of sustainable community partnerships",
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
              Ready to Create Your Specialized Loyalty Program?
            </h2>
            <p className="text-white/80 mb-8">
              Contact us to discuss how we can help you develop targeted
              loyalty solutions for your unique market segment.
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