import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Strategy Formulation & Implementation | CBS",
  description: "Create and execute clear, actionable strategies that align with your business vision and drive sustainable growth.",
};

const features = [
  {
    title: "Strategic Planning",
    description: "Develop comprehensive strategies that align with your vision and market opportunities",
    image: "/images/services/strategy/planning.jpg",
    capabilities: [
      "Vision and mission alignment",
      "Market opportunity analysis",
      "Competitive positioning",
      "Strategic roadmap development"
    ]
  },
  {
    title: "Implementation Support",
    description: "Transform strategies into actionable plans with clear milestones and measurable outcomes",
    image: "/images/services/strategy/implementation.jpg",
    capabilities: [
      "Action plan development",
      "Resource optimization",
      "Change management",
      "Progress monitoring"
    ]
  },
  {
    title: "Performance Measurement",
    description: "Track and optimize strategy execution with robust performance frameworks",
    image: "/images/services/strategy/performance.jpg",
    capabilities: [
      "KPI development",
      "Performance tracking",
      "Impact assessment",
      "Strategy refinement"
    ]
  }
];

export default function StrategyFormulationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Strategy & Consulting", href: "/services/strategy-consulting" },
              { label: "Strategy Formulation" }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn text-white">
                Strategy Formulation & Implementation
              </h1>
              <p className="text-lg text-white/80 animate-fadeIn animation-delay-100">
                Empower your business with a clear, actionable strategy that aligns with your vision. Our approach to strategy formulation goes beyond planning, focusing on creating strategic pathways that are both agile and sustainable.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-fadeIn animation-delay-200">
              <Image
                src="/images/services/strategy/strategy-hero.jpg"
                alt="Strategy Formulation"
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
                Transform Your Strategic Approach
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Traditional Strategy",
                    items: [
                      "Static long-term plans",
                      "Limited market insights",
                      "Slow implementation",
                      "Rigid frameworks"
                    ]
                  },
                  {
                    title: "Agile Strategy",
                    items: [
                      "Dynamic adaptive planning",
                      "Data-driven insights",
                      "Rapid execution",
                      "Flexible frameworks"
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
                  Strategic Impact
                </h3>
                <div className="grid gap-6">
                  {[
                    {
                      metric: "30%",
                      label: "Faster Execution",
                      description: "Accelerated strategy implementation"
                    },
                    {
                      metric: "85%",
                      label: "Success Rate",
                      description: "Strategy execution effectiveness"
                    },
                    {
                      metric: "2x",
                      label: "Growth Rate",
                      description: "Increased business growth velocity"
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
              Ready to Transform Your Strategy?
            </h2>
            <p className="text-muted mb-8 animate-fadeIn animation-delay-100">
              Get in touch to learn how our strategic consulting can help you achieve sustainable growth.
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