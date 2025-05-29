import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCompass,
  faRocket,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Strategy Formulation | CBS",
  description:
    "Develop clear, actionable strategies that position your organization for sustainable growth and success.",
};

const KEY_FEATURES = [
  {
    icon: faCompass,
    title: "Strategic Planning",
    description: "Define clear goals and develop actionable roadmaps.",
  },
  {
    icon: faChartLine,
    title: "Market Analysis",
    description: "Understand market trends and competitive dynamics.",
  },
  {
    icon: faRocket,
    title: "Growth Strategy",
    description: "Identify opportunities and plan for sustainable growth.",
  },
  {
    icon: faBullseye,
    title: "Implementation",
    description: "Execute strategies with clear metrics and milestones.",
  },
];

const PROGRAM_MODULES = [
  {
    title: "Strategic Analysis",
    topics: [
      "Market assessment",
      "Competitive analysis",
      "SWOT evaluation",
      "Opportunity identification",
    ],
  },
  {
    title: "Strategy Development",
    topics: [
      "Vision and mission alignment",
      "Goal setting",
      "Strategic planning",
      "Resource allocation",
    ],
  },
  {
    title: "Implementation Planning",
    topics: [
      "Action plan development",
      "KPI definition",
      "Risk assessment",
      "Progress monitoring",
    ],
  },
];

export default function StrategyFormulationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              {
                label: "Learning & Development",
                href: "/services/learning-development",
              },
              {
                label: "For Corporates",
                href: "/services/learning-development/corporates",
              },
              { label: "Strategy Formulation" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Strategy Formulation
            </h1>
            <p className="text-xl text-white/80">
              Develop clear, actionable strategies that position your
              organization for sustainable growth and success in a dynamic
              business environment.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {KEY_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-2xl text-primary"
                  />
                </div>
                <h3 className="text-lg font-bold text-heading mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Program Modules */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Program Modules
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PROGRAM_MODULES.map((module, index) => (
              <div
                key={module.title}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="text-2xl font-bold text-primary mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-heading mb-4">
                  {module.title}
                </h3>
                <ul className="space-y-3">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-muted">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-heading text-center mb-12">
              Program Benefits
            </h2>
            <div className="space-y-6">
              {[
                "Clear strategic direction and goals",
                "Better market positioning and competitive advantage",
                "Improved decision-making capabilities",
                "Enhanced resource allocation",
                "Measurable performance metrics",
                "Sustainable business growth",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Transform Your Business Strategy
            </h2>
            <p className="text-white/80 mb-8">
              Ready to develop a winning strategy for your organization?
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Request Training Details
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
