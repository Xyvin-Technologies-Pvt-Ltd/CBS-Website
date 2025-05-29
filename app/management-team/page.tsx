import { Metadata } from "next";
import Container from "@/components/ui/Container";
import TeamMember from "@/components/management/TeamMember";

export const metadata: Metadata = {
  title: "Management Team | Continuity Business Solutions",
  description:
    "Meet our experienced leadership team driving business transformation.",
};

const MANAGEMENT_TEAM = [
  {
    firstName: "Ajit",
    lastName: "Vasudevan",
    position: "Chief Executive Officer ",
    image: "/images/team/ajit3.jpg",
    description:
      "Carries 25 years' of experience in business transformation and technology in the financial sector in the region. Proven leadership in driving business growth in multiple organizations",
    social: {
      linkedin: "https://linkedin.com/in/ajit-vasudevan",
      twitter: "https://twitter.com/ajitv",
    },
  },
  {
    firstName: "Raghavan ",
    lastName: "Suryanarayanan",
    position: "Director- Strategy & Alliances",
    image: "/images/team/Raghavan.jpg",
    description:
      "A seasoned leader with 26+ years of comprehensive expertise in strategy planning, business integration, alliances & partnerships, performance management and Business Intelligence",
    social: {
      linkedin: "https://linkedin.com/in/raghavan-s",
    },
  },
  {
    firstName: "Abilash",
    lastName:"Mohandas",
    position: "Director- Enterprise Transformation",
    image: "/images/team/Abilash.jpeg",
    description:
      "Results-driven leader specializing in driving large-scale organizational transformation through innovative digital strategies and operational excellence.",
    social: {
      linkedin: "https://linkedin.com/in/abilash-mohandas",
    },
  },
  {
    firstName: "Annie",
    lastName: "Melinda",
    position: "Director- Operations & Capability Building",
    image: "/images/team/Annie M copy.jpeg",
    description:
      "Versatile leader who has carved a niche for herself working with and in association with International Organizations in the capacity of business partner engaging in Organizational Development and Capability Building",
    social: {
      linkedin: "https://linkedin.com/in/annie-melinda",
    },
  },
];

const JOURNEY_MILESTONES = [
  {
    year: "1998",
    title: "Foundation",
    description:
      "Started operations in Oman with a focus on business consulting",
  },
  {
    year: "2005",
    title: "Digital Transformation",
    description:
      "Expanded services to include technology solutions and digital transformation",
  },
  {
    year: "2010",
    title: "Regional Expansion",
    description: "Established presence in UAE and Saudi Arabia",
  },
  {
    year: "2015",
    title: "Learning & Development",
    description:
      "Launched comprehensive L&D programs for corporates and institutions",
  },
  {
    year: "2020",
    title: "AI & Innovation",
    description: "Introduced AI-driven solutions for financial institutions",
  },
  {
    year: "2023",
    title: "Global Recognition",
    description:
      "Recognized as a leading business transformation partner in the region",
  },
];

export default function ManagementTeamPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 bg-[#083c54] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn animation-delay-100 text-white">
              Leadership Team
            </h1>
            <p className="text-lg text-white/80 animate-fadeIn animation-delay-200">
              Meet our experienced leadership team driving innovation and
              excellence in business transformation.
            </p>
          </div>
        </Container>
      </section>

      {/* Executive Leadership */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12 animate-fadeIn">
            Executive Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MANAGEMENT_TEAM.map((member, index) => (
              <div
                key={member.firstName}
                className="animate-slideUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </Container>
      </section>

    
      {/* Journey section with animations */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-6 animate-fadeIn">
              Our Journey
            </h2>
            <p className="text-muted animate-fadeIn animation-delay-100">
              Over two decades of transforming businesses and creating success
              stories
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block animate-growHeight" />

            <div className="space-y-12">
              {JOURNEY_MILESTONES.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex-1 md:text-right animate-slideIn${
                      index % 2 === 0 ? "Right" : "Left"
                    }`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div
                      className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-bold text-heading mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-8">
                    <div
                      className="w-4 h-4 rounded-full bg-primary relative animate-scaleIn"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                    </div>
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-heading mb-4">
                Innovation
              </h3>
              <p className="text-muted">
                We constantly seek new and better ways to serve our clients and
                solve challenges.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-heading mb-4">
                Excellence
              </h3>
              <p className="text-muted">
                We strive for the highest standards in everything we do.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-heading mb-4">Integrity</h3>
              <p className="text-muted">
                We maintain the highest standards of professionalism and ethics.
              </p>
            </div>
          </div>
        </Container>
      </section> */}

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-heading mb-6 animate-fadeIn">
              Join Our Team
            </h2>
            <p className="text-muted mb-8 animate-fadeIn animation-delay-100">
              We're always looking for talented individuals to join our growing
              team. Explore opportunities to make an impact with us.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-[#5898f8] transition-colors">
              View Open Positions
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
