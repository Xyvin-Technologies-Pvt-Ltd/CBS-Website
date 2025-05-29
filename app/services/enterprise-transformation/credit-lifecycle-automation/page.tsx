import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "AI-Driven Credit Lifecycle Automation | CBS",
  description:
    "Transform credit risk evaluation with CreditX, our AI-powered credit modeling and decisioning solution.",
};

const features = [
  {
    title: "Intelligent Credit Modeling",
    description:
      "Build, validate, and deploy high-accuracy credit scorecards in a single day, powered by sophisticated AI algorithms that automate complex model development tasks.",
    image: "/images/services/credit/modeling.jpg",
    benefits: [
      "Rapid scorecard development",
      "Automated feature engineering",
      "Smart variable selection",
      "Built-in bias reduction",
    ],
  },
  {
    title: "Comprehensive Credit Assessment",
    description:
      "Support multiple types of credit models including application, behavioral, and collection scorecards, adaptable for various lending products.",
    image: "/images/services/credit/assessment.jpg",
    benefits: [
      "Personal loans evaluation",
      "SME lending assessment",
      "Credit card applications",
      "Behavioral scoring",
    ],
  },
  {
    title: "Seamless Integration",
    description:
      "Easily integrate into existing workflows through plug-and-play APIs, making it suitable for both established banks and emerging fintech lenders.",
    image: "/images/services/credit/integration.jpg",
    benefits: [
      "Quick API implementation",
      "Flexible deployment options",
      "Real-time decision making",
      "Scalable architecture",
    ],
  },
  {
    title: "Regulatory Compliance",
    description:
      "Meet industry standards with transparent, explainable AI decisions that comply with regulatory requirements while maintaining high accuracy.",
    image: "/images/services/credit/compliance.jpg",
    benefits: [
      "Decision transparency",
      "Regulatory reporting",
      "Audit trail maintenance",
      "Risk monitoring",
    ],
  },
];

export default function CreditLifecyclePage() {
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
              { label: "Credit Lifecycle Automation" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn text-white">
                AI-Driven Credit Lifecycle Automation
              </h1>
              <p className="text-lg text-white/80 animate-fadeIn animation-delay-100">
                CreditX, developed by our partner, Finbots.ai, is a
                sophisticated AI-driven credit modeling and decisioning solution
                that transforms how lenders evaluate credit risk.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-fadeIn animation-delay-200">
              <Image
                src="/images/services/credit/hero.jpg"
                alt="Credit Lifecycle Automation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-heading mb-6 animate-fadeIn">
              Transform Credit Risk Evaluation
            </h2>
            <p className="text-muted leading-relaxed animate-fadeIn animation-delay-100">
              It offers a robust set of tools that allow financial institutions
              to build, validate, and deploy high-accuracy credit scorecards
              quickly, often reducing what traditionally took months to just a
              single day. With built-in AI that automates complex aspects of
              model development, CreditX helps lenders streamline their credit
              assessment processes and achieve greater precision.
            </p>
          </div>
        </Container>
      </section>

      {/* Transform Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-heading mb-8 animate-fadeIn">
                Transform Your Credit Operations
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Legacy Credit Systems",
                    items: [
                      "Complex manual workflows",
                      "Siloed data and systems",
                      "High operational costs",
                      "Slow credit processing",
                    ],
                  },
                  {
                    title: "CreditX Solution",
                    items: [
                      "Automated end-to-end workflows",
                      "Unified data platform",
                      "Reduced operational overhead",
                      "Instant credit decisions",
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
                  Business Impact
                </h3>
                <div className="grid gap-6">
                  {[
                    {
                      metric: "24x",
                      label: "Faster Model Development",
                      description:
                        "Reduce scorecard creation from months to days",
                    },
                    {
                      metric: "85%",
                      label: "Process Automation",
                      description: "Automate credit lifecycle workflows",
                    },
                    {
                      metric: "40%",
                      label: "Risk Reduction",
                      description: "Improve credit risk assessment accuracy",
                    },
                    {
                      metric: "3x",
                      label: "Portfolio Growth",
                      description:
                        "Expand lending while maintaining risk levels",
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
                  <p className="text-muted leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center text-sm text-muted"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
              Ready to Transform Your Credit Assessment Process?
            </h2>
            <p className="text-muted mb-8 animate-fadeIn animation-delay-100">
              Get in touch with our experts to learn how CreditX can help your
              financial institution streamline credit decisions.
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
