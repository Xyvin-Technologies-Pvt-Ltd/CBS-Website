import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCode,
  faMicrophone,
  faChartLine,
  faBullseye,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Branding and Marketing Solutions | CBS",
  description:
    "Full-service digital marketing solutions that empower businesses with data-driven strategies and creative excellence.",
};

const services = [
  {
    icon: faVideo,
    title: "Videos",
    description: "Create engaging visual content that tells your brand story",
    items: [
      "Animated videos",
      "Explainer videos",
      "Commercials",
      "Real Estate Walkthroughs",
      "Interactive videos",
    ],
  },
  {
    icon: faCode,
    title: "Interactive",
    description:
      "Build engaging digital experiences that connect with your audience",
    items: [
      "Games and bots",
      "Web design",
      "Mobile application",
      "Development",
    ],
  },
  {
    icon: faMicrophone,
    title: "Story telling",
    description:
      "Craft compelling narratives that resonate with your target audience",
    items: ["Podcast services", "Brand strategy", "Creative asset development"],
  },
  {
    icon: faChartLine,
    title: "Marketing",
    description: "Drive growth with data-driven marketing strategies",
    items: [
      "Lead generation",
      "SEO optimizations",
      "Display and programmatic advertising",
      "Social Media Marketing",
      "Site migration",
    ],
  },
  {
    icon: faBullseye,
    title: "Conversions",
    description: "Optimize your digital assets for maximum conversion",
    items: [
      "Shopping feed optimizations",
      "Social Media conversion",
      "Optimizations",
      "Pay per click",
    ],
  },
  {
    icon: faChartBar,
    title: "Reports",
    description: "Gain actionable insights through comprehensive analytics",
    items: ["Analytics and reporting", "Dashboard creation"],
  },
];

export default function BrandingMarketingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              {
                label: "Enterprise Transformation",
                href: "/services/enterprise-transformation",
              },
              { label: "Branding & Marketing" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn text-white">
                Branding and Marketing Solutions
              </h1>
              <p className="text-lg text-white/80 animate-fadeIn animation-delay-100">
                We bring business insights to brand storytelling and activate
                across every channel that empower businesses and brands to grow
                sustainably. At CBS, we take a result-driven approach and it's
                reflective on all the services we offer.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-fadeIn animation-delay-200">
              <Image
                src="/images/services/marketing/hero.jpg"
                alt="Branding and Marketing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-primary text-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-heading mb-4">
                  {service.title}
                </h3>
                <p className="text-muted mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-heading mb-6">
              Our Approach
            </h2>
            <p className="text-muted">
              We provide full-service digital marketing that will help you get
              the most value out of your marketing investment, with the best
              possible outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Research",
                description: "Deep market analysis and audience insights",
              },
              {
                number: "02",
                title: "Strategy",
                description: "Data-driven marketing plan development",
              },
              {
                number: "03",
                title: "Execute",
                description: "Implementation across all channels",
              },
              {
                number: "04",
                title: "Optimize",
                description: "Continuous improvement based on analytics",
              },
            ].map((step, index) => (
              <div
                key={step.number}
                className="text-center animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-heading mb-6 animate-fadeIn">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-muted mb-8 animate-fadeIn animation-delay-100">
              Get in touch to learn how our marketing solutions can help your
              business grow sustainably.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Start Your Journey
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
