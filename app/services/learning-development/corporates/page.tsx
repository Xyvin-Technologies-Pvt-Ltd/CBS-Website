import { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHandshake,
  faComments,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Corporate Learning & Development | CBS",
  description:
    "Comprehensive learning and development solutions for corporate excellence.",
};

const SERVICES = [
  {
    icon: faHandshake,
    title: "Sales, Customer Service & Experience",
    description:
      "Empower your sales and customer service teams with strategies and tools designed to elevate customer interactions and build long-term loyalty.",
    features: [
      "Customer journey mapping",
      "Omnichannel support strategies",
      "Sales training programs",
      "Customer experience optimization",
    ],
  },
  {
    icon: faUsers,
    title: "HR & Communication",
    description:
      "Comprehensive approach to help you attract, retain, and develop talent aligned with your company's mission and values.",
    features: [
      "Recruitment optimization",
      "Leadership development",
      "Performance management",
      "Internal communication",
    ],
  },
  {
    icon: faComments,
    title: "Team Building",
    description:
      "Enhance collaboration, communication, and trust within teams through interactive workshops and activities tailored to your team's needs.",
    features: [
      "Interactive workshops",
      "Team strength assessment",
      "Problem-solving skills",
      "Collaboration enhancement",
    ],
  },
  {
    icon: faChartLine,
    title: "Strategy Formulation",
    description:
      "Define clear goals, identify key opportunities, and develop actionable plans for sustainable growth.",
    features: [
      "Market trend analysis",
      "Competitive assessment",
      "Growth planning",
      "Strategy implementation",
    ],
  },
];

export default function CorporatesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              {
                label: "Learning & Development",
                href: "/learning-development",
              },
              { label: "For Corporates" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Corporate Learning & Development
            </h1>
            <p className="text-xl text-white/80">
              Transform your organization with comprehensive learning and
              development solutions designed to enhance performance at every
              level.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="text-2xl text-primary group-hover:text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-heading mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span className="text-sm text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-heading mb-6">
                Our Approach
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Customized Solutions",
                    description:
                      "Tailored programs designed to meet your specific organizational needs.",
                  },
                  {
                    title: "Expert Facilitation",
                    description:
                      "Experienced trainers with deep industry knowledge and expertise.",
                  },
                  {
                    title: "Practical Application",
                    description:
                      "Focus on real-world scenarios and immediate implementation.",
                  },
                  {
                    title: "Measurable Results",
                    description:
                      "Clear metrics to track progress and demonstrate ROI.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <div>
                      <h3 className="font-semibold text-heading mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/learning/approach.jpg"
                  alt="Our Approach"
                  fill
                  className="object-cover"
                />
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
              Ready to Transform Your Organization?
            </h2>
            <p className="text-white/80 mb-8">
              Let's discuss how our learning and development solutions can help
              your team excel.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
