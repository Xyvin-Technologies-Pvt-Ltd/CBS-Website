import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Process Re-Engineering & Automation | CBS",
  description:
    "Transform your business operations with intelligent process automation and re-engineering solutions.",
};

const features = [
  {
    title: "Process Analysis & Optimization",
    description:
      "Identify inefficiencies and redesign workflows for maximum effectiveness",
    image: "/images/services/strategy/process-analysis.jpg",
    capabilities: [
      "Workflow mapping",
      "Bottleneck identification",
      "Process optimization",
      "Cost reduction analysis",
    ],
  },
  {
    title: "Intelligent Automation",
    description:
      "Implement RPA and AI solutions to automate repetitive tasks and enhance accuracy",
    image: "/images/services/strategy/automation.jpg",
    capabilities: [
      "RPA implementation",
      "AI integration",
      "Task automation",
      "Quality assurance",
    ],
  },
  {
    title: "Change Management",
    description:
      "Ensure smooth transition and adoption of new processes across your organization",
    image: "/images/services/strategy/change.jpg",
    capabilities: [
      "Stakeholder engagement",
      "Training programs",
      "Adoption monitoring",
      "Performance tracking",
    ],
  },
];

export default function ProcessReengineeringPage() {
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
                label: "Strategy & Consulting",
                href: "/services/strategy-consulting",
              },
              { label: "Process Re-Engineering" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn text-white">
                Process Re-Engineering & Automation
              </h1>
              <p className="text-lg text-white/80 animate-fadeIn animation-delay-100">
                Unlock efficiency and elevate productivity with streamlined
                processes and intelligent automation. Our solutions focus on
                identifying and restructuring inefficient workflows to improve
                quality and reduce costs.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-fadeIn animation-delay-200">
              <Image
                src="/images/services/strategy/process-hero.jpg"
                alt="Process Re-Engineering"
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
                Transform Your Operations
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Manual Processes",
                    items: [
                      "Time-consuming tasks",
                      "Error-prone operations",
                      "Resource intensive",
                      "Limited scalability",
                    ],
                  },
                  {
                    title: "Automated Solutions",
                    items: [
                      "Rapid execution",
                      "Enhanced accuracy",
                      "Resource optimization",
                      "Infinite scalability",
                    ],
                  },
                ].map((column, index) => (
                  <div
                    key={column.title}
                    className="animate-fadeIn"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          index === 0 ? "bg-red-500" : "bg-green-500"
                        }`}
                      />
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
                  Automation Impact
                </h3>
                <div className="grid gap-6">
                  {[
                    {
                      metric: "70%",
                      label: "Cost Reduction",
                      description: "Lower operational expenses",
                    },
                    {
                      metric: "99.9%",
                      label: "Accuracy Rate",
                      description: "Reduced error rates",
                    },
                    {
                      metric: "5x",
                      label: "Faster Processing",
                      description: "Increased operational speed",
                    },
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
              Ready to Automate Your Processes?
            </h2>
            <p className="text-muted mb-8 animate-fadeIn animation-delay-100">
              Get in touch to learn how our process re-engineering solutions can
              transform your operations.
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
