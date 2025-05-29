import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faGears,
  faRocket,
  faChartPie,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Strategy & Consulting Services | CBS",
  description: "Transform your business with expert strategy consulting and implementation services.",
};

const services = [
  {
    icon: faChartLine,
    title: "Strategy Formulation & Implementation",
    description: "Create and execute clear, actionable strategies aligned with your vision",
    href: "/services/strategy-consulting/strategy-formulation",
    benefits: [
      "Market opportunity assessment",
      "Competitive analysis",
      "Strategic planning",
      "Implementation support"
    ]
  },
  {
    icon: faGears,
    title: "Process Re-Engineering & Automation",
    description: "Optimize workflows and automate processes for maximum efficiency",
    href: "/services/strategy-consulting/process-reengineering",
    benefits: [
      "Workflow optimization",
      "RPA implementation",
      "Process automation",
      "Quality improvement"
    ]
  },
  {
    icon: faRocket,
    title: "Business Performance & Growth",
    description: "Drive measurable improvements and accelerate business growth",
    href: "/services/strategy-consulting/performance-growth",
    benefits: [
      "KPI framework development",
      "Performance optimization",
      "Growth strategy",
      "Market expansion"
    ]
  },
  {
    icon: faChartPie,
    title: "Data Analytics",
    description: "Transform data into actionable insights for better decision-making",
    href: "/services/strategy-consulting/data-analytics",
    benefits: [
      "Advanced analytics",
      "Predictive modeling",
      "Real-time reporting",
      "Data visualization"
    ]
  },
  {
    icon: faLightbulb,
    title: "Business Advisory",
    description: "Expert guidance for navigating complex business challenges",
    href: "/services/strategy-consulting/business-advisory",
    benefits: [
      "Strategic consulting",
      "Risk management",
      "Change management",
      "Performance improvement"
    ]
  }
];

export default function StrategyConsultingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Strategy & Consulting" }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn text-white">
                Strategy & Consulting Services
              </h1>
              <p className="text-lg text-white/80 animate-fadeIn animation-delay-100">
                Transform your business with expert guidance and actionable strategies that drive sustainable growth and operational excellence.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-fadeIn animation-delay-200">
              <Image
                src="/images/services/strategy/hero.jpg"
                alt="Strategy and Consulting"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group"
              >
                <div 
                  className="h-full bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <FontAwesomeIcon 
                      icon={service.icon} 
                      className="text-primary text-xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-heading mb-6">
              Why Choose CBS
            </h2>
            <p className="text-muted">
              Partner with us for comprehensive consulting solutions that deliver measurable results and drive sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Access seasoned consultants with deep industry expertise"
              },
              {
                title: "Proven Methodology",
                description: "Benefit from tested frameworks and best practices"
              },
              {
                title: "Measurable Results",
                description: "Achieve tangible outcomes with data-driven approaches"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white p-8 rounded-lg shadow-sm animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-bold text-heading mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted">
                  {feature.description}
                </p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted mb-8 animate-fadeIn animation-delay-100">
              Get in touch to learn how our consulting services can help you achieve your business objectives.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
} 