import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "E-commerce & Marketplace Solutions | CBS",
  description: "Transform your digital commerce with AI-powered marketplace solutions that deliver personalized experiences and drive growth.",
};

const features = [
  {
    title: "AI-Powered Personalization",
    description: "Leverage advanced machine learning algorithms to analyze user behavior and deliver tailored shopping experiences that boost engagement and conversion.",
    image: "/images/services/ecommerce/personalization.jpg",
    capabilities: [
      "Smart product recommendations",
      "Personalized promotions",
      "Dynamic pricing",
      "Behavioral analytics"
    ]
  },
  {
    title: "Scalable Architecture",
    description: "Built for growth with a flexible, cloud-native architecture that scales seamlessly as your business expands and demand increases.",
    image: "/images/services/ecommerce/scalability.jpg",
    capabilities: [
      "Cloud infrastructure",
      "Load balancing",
      "High availability",
      "Performance optimization"
    ]
  },
  {
    title: "Seamless Integration",
    description: "Connect with your existing systems and third-party services through our comprehensive suite of APIs and plug-and-play modules.",
    image: "/images/services/ecommerce/integration.jpg",
    capabilities: [
      "Payment gateways",
      "Shipping providers",
      "Inventory systems",
      "Marketing tools"
    ]
  },
  {
    title: "Advanced Analytics",
    description: "Gain deep insights into your business performance with comprehensive analytics and reporting tools powered by AI.",
    image: "/images/services/ecommerce/analytics.jpg",
    capabilities: [
      "Sales analytics",
      "Customer insights",
      "Inventory tracking",
      "Performance metrics"
    ]
  }
];

export default function EcommercePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Enterprise Transformation", href: "/services/enterprise-transformation" },
              { label: "E-commerce & Marketplace" }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn text-white">
                E-commerce & Marketplace Solutions
              </h1>
              <p className="text-lg text-white/80 animate-fadeIn animation-delay-100">
                Transform your digital commerce with AI-powered marketplace solutions that deliver personalized experiences and drive sustainable growth.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-fadeIn animation-delay-200">
              <Image
                src="/images/services/ecommerce/hero.jpg"
                alt="E-commerce Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Transform Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-heading mb-8 animate-fadeIn">
                Transform Your Digital Commerce
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Traditional E-commerce",
                    items: [
                      "Static product catalogs",
                      "One-size-fits-all approach",
                      "Limited scalability",
                      "Manual operations"
                    ]
                  },
                  {
                    title: "AI-Powered Marketplace",
                    items: [
                      "Dynamic personalization",
                      "Tailored user experiences",
                      "Infinite scalability",
                      "Automated workflows"
                    ]
                  }
                ].map((column, index) => (
                  <div
                    key={column.title}
                    className="animate-fadeIn"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        index === 0 ? "bg-red-500" : "bg-green-500"
                      }`} />
                      {column.title}
                    </h3>
                    <div className="grid gap-3">
                      {column.items.map((item) => (
                        <div 
                          key={item} 
                          className={`p-4 rounded-lg ${
                            index === 0 
                              ? "bg-white/50 text-muted line-through decoration-red-500/50" 
                              : "bg-white shadow-sm text-heading"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl animate-pulse" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-heading mb-6">
                  Business Impact
                </h3>
                <div className="grid gap-6">
                  {[
                    {
                      metric: "45%",
                      label: "Higher Conversion",
                      description: "Increase in conversion rates through personalization"
                    },
                    {
                      metric: "3x",
                      label: "Customer Engagement",
                      description: "Improvement in customer engagement metrics"
                    },
                    {
                      metric: "60%",
                      label: "Operational Efficiency",
                      description: "Reduction in manual operations through automation"
                    },
                    {
                      metric: "99.9%",
                      label: "Platform Uptime",
                      description: "Ensuring business continuity and reliability"
                    }
                  ].map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="animate-fadeIn flex items-start gap-4"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="bg-primary/10 text-primary font-bold text-2xl p-4 rounded-lg">
                        {stat.metric}
                      </div>
                      <div>
                        <div className="font-semibold text-heading">
                          {stat.label}
                        </div>
                        <div className="text-sm text-muted">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16">
        <Container>
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "lg:grid-flow-dense"
                }`}
              >
                <div
                  className="animate-slideInLeft"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-primary font-medium mb-2 block">
                    {`0${index + 1}`}
                  </span>
                  <h2 className="text-3xl font-bold text-heading mb-6">
                    {feature.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {feature.capabilities.map((capability) => (
                      <div key={capability} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-sm text-muted">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div 
                  className={`relative h-[400px] rounded-lg overflow-hidden animate-slideIn${
                    index % 2 === 0 ? "Right" : "Left"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-heading mb-6 animate-fadeIn">
              Ready to Transform Your E-commerce Business?
            </h2>
            <p className="text-muted mb-8 animate-fadeIn animation-delay-100">
              Get in touch to learn how our AI-powered solutions can help you create exceptional digital commerce experiences.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
} 