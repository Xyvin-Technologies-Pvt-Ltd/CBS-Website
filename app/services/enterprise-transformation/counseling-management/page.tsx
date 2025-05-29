import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "GuidedGrowth - Counseling Management System | CBS",
  description:
    "Transform educational counseling with our intelligent, integrated counseling session management solution.",
};

const features = [
  {
    title: "Smart Scheduling & Optimization",
    description:
      "Leverage AI-powered scheduling that optimizes counselor time and presents the most efficient daily itinerary.",
    image: "/images/services/counseling/scheduling.jpg",
    capabilities: [
      "Intelligent time allocation",
      "Automated scheduling",
      "Calendar optimization",
      "Conflict resolution",
    ],
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with existing student management systems and academic databases for comprehensive student profiles and seamless data flow.",
    image: "/images/services/counseling/integration.jpg",
    capabilities: [
      "Student data integration",
      "Academic record sync",
      "Multi-system compatibility",
      "Real-time updates",
    ],
  },
  {
    title: "Secure Record Management",
    description:
      "Maintain detailed session records with advanced privacy controls and role-based access to ensure student confidentiality.",
    image: "/images/services/counseling/security.jpg",
    capabilities: [
      "Role-based access",
      "Data encryption",
      "Privacy controls",
      "Audit trails",
    ],
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor and analyze student progress with comprehensive reporting tools and customizable assessment frameworks.",
    image: "/images/services/counseling/progress.jpg",
    capabilities: [
      "Progress analytics",
      "Custom assessments",
      "Outcome tracking",
      "Report generation",
    ],
  },
];

export default function CounselingPage() {
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
              { label: "Counseling Management" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn text-white">
                GuidedGrowth
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 animate-fadeIn text-white">
                Counseling Management System
              </h2>
              <p className="text-lg text-white/80 animate-fadeIn animation-delay-100">
                A comprehensive solution for educational institutions to manage,
                track, and optimize counseling sessions while maintaining
                student confidentiality.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden animate-fadeIn animation-delay-200">
              <Image
                src="/images/services/councelling-management-demo.png"
                alt="Counseling Management System"
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
                Transform Counseling Management
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Traditional Methods",
                    items: [
                      "Manual scheduling and planning",
                      "Isolated student data",
                      "Limited collaboration",
                      "Paper-based record keeping",
                    ],
                  },
                  {
                    title: "GuidedGrowth Solution",
                    items: [
                      "AI-powered smart scheduling",
                      "Integrated student profiles",
                      "Multi-user collaboration",
                      "Secure digital records",
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
                  System Benefits
                </h3>
                <div className="grid gap-6">
                  {[
                    {
                      metric: "40%",
                      label: "Time Saved",
                      description: "Reduction in administrative tasks",
                    },
                    {
                      metric: "100%",
                      label: "Data Security",
                      description: "Encrypted and role-based access",
                    },
                    {
                      metric: "50%",
                      label: "Better Engagement",
                      description: "Improved student interaction tracking",
                    },
                    {
                      metric: "24/7",
                      label: "System Availability",
                      description: "Access records anytime, anywhere",
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
              Ready to Transform Your Counseling Process?
            </h2>
            <p className="text-muted mb-8 animate-fadeIn animation-delay-100">
              Get in touch to learn how GuidedGrowth can help your institution
              deliver better counseling services.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Request Demo
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
