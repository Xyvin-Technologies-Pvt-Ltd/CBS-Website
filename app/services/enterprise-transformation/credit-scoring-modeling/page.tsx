import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "AI-Based Credit Scoring & Modeling | CBS",
  description:
    "Empower your financial institution with precise, data-driven lending decisions through advanced AI credit scoring.",
};

const features = [
  {
    title: "Advanced Data Integration",
    description:
      "Leverage diverse data sources including traditional credit data, social activity, mobile behavior, and payment history for comprehensive credit assessments.",
    image: "/images/services/credit-scoring/data-integration.jpg",
    capabilities: [
      "Multi-source data processing",
      "Alternative data analysis",
      "Real-time data streaming",
      "Automated data validation",
    ],
  },
  {
    title: "Intelligent Risk Assessment",
    description:
      "Utilize advanced machine learning algorithms to identify high-risk and high-potential clients early, enabling personalized offers and appropriate credit limits.",
    image: "/images/services/credit-scoring/risk-assessment.jpg",
    capabilities: [
      "Predictive risk modeling",
      "Behavioral scoring",
      "Early warning systems",
      "Portfolio monitoring",
    ],
  },
  {
    title: "Regulatory Compliance",
    description:
      "Built-in compliance tools ensure all credit decisions align with industry regulations while maintaining transparency and auditability.",
    image: "/images/services/credit-scoring/compliance.jpg",
    capabilities: [
      "Automated compliance checks",
      "Audit trail maintenance",
      "Regulatory reporting",
      "Policy enforcement",
    ],
  },
  {
    title: "Performance Analytics",
    description:
      "Intuitive dashboards provide clear visibility into portfolio performance and credit decision outcomes, enabling data-driven strategy refinement.",
    image: "/images/services/credit-scoring/analytics.jpg",
    capabilities: [
      "Real-time monitoring",
      "Performance tracking",
      "Custom reporting",
      "Strategy optimization",
    ],
  },
];

export default function CreditScoringPage() {
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
              { label: "Credit Scoring & Modeling" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn text-white/100">
                AI-Based Credit Scoring & Modeling
              </h1>
              <p className="text-lg text-white/60 animate-fadeIn animation-delay-100">
                Empower your financial institution with precise, efficient, and
                data-driven lending decisions through advanced AI credit scoring
                solutions.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-fadeIn animation-delay-200">
              <Image
                src="/images/services/credit-scoring/hero.jpg"
                alt="AI Credit Scoring"
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
              Transform Your Credit Decision Process
            </h2>
            <p className="text-muted leading-relaxed animate-fadeIn animation-delay-100">
              Our platform leverages advanced machine learning algorithms and
              big data analytics to go beyond conventional scoring, delivering
              comprehensive credit assessments that expand financial access and
              accuracy.
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
                Transform Your Credit Risk Assessment
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Traditional Approach",
                    items: [
                      "Manual credit assessment processes",
                      "Limited data sources",
                      "Time-consuming decision making",
                      "Inconsistent risk evaluation"
                    ]
                  },
                  {
                    title: "Our AI-Powered Solution",
                    items: [
                      "Automated credit scoring",
                      "Multi-source data integration",
                      "Real-time decision making",
                      "Consistent risk assessment"
                    ]
                  }
                ].map((column, index) => (
                  <div key={column.title} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-red-500' : 'bg-green-500'}`} />
                      {column.title}
                    </h3>
                    <div className="grid gap-3">
                      {column.items.map((item) => (
                        <div 
                          key={item} 
                          className={`p-4 rounded-lg ${
                            index === 0 
                              ? 'bg-white/50 text-muted line-through decoration-red-500/50' 
                              : 'bg-white shadow-sm text-heading'
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
                  Key Transformation Metrics
                </h3>
                <div className="grid gap-6">
                  {[
                    {
                      metric: "90%",
                      label: "Faster Credit Decisions",
                      description: "Reduce processing time from days to minutes"
                    },
                    {
                      metric: "75%",
                      label: "More Accurate Assessment",
                      description: "Improved risk prediction accuracy"
                    },
                    {
                      metric: "60%",
                      label: "Cost Reduction",
                      description: "Lower operational costs through automation"
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Accuracy",
                description:
                  "Make more precise lending decisions with comprehensive data analysis and advanced AI algorithms.",
              },
              {
                title: "Faster Processing",
                description:
                  "Reduce time-to-decision with automated credit assessment and real-time scoring capabilities.",
              },
              {
                title: "Risk Mitigation",
                description:
                  "Identify and manage potential risks early with predictive modeling and continuous monitoring.",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-heading mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted">{benefit.description}</p>
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
              Ready to Optimize Your Credit Decisions?
            </h2>
            <p className="text-muted mb-8 animate-fadeIn animation-delay-100">
              Transform your lending process with our AI-powered credit scoring
              solution.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Request a Demo
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
