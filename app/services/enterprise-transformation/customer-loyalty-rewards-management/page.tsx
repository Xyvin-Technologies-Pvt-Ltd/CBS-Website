import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Customer Loyalty & Rewards Management | CBS",
  description:
    "Connect with customers through seamless loyalty and rewards solutions powered by AI and automation.",
};

const features = [
  {
    title:
      "Boost Customer Engagement with Our Automated Loyalty Management System",
    description:
      "Our loyalty management system automatically gathers client data from all your customer touchpoints, empowering you to create engaging promotions, offers, and a loyalty program your customers will love. Once launched, leverage on our built-in AI models to analyze member data, uncover hidden patterns in customer behavior, and deliver the right message to the right audience at the perfect time and place.",
    image: "/images/services/loyalty/automated-system.jpg",
    imagePosition: "right",
  },
  {
    title:
      "Drive Brand Loyalty and Customer Engagement with AI-Powered Promotions",
    description:
      "Leverage our Promotion Engine to shape how customers view your brand and use AI insights to guide their next buying decision. Design personalised promotions, including rewards, discounts, coupons, and product giveaways, based on nearly any activity across any channel—whether it's a purchase, an online review, or an app download. No loyalty expertise is needed; simply use our ready-made templates and follow the AI-driven recommendations on the platform to capture your customers' interest.",
    image: "/images/services/loyalty/ai-promotions.jpg",
    imagePosition: "left",
  },
  {
    title: "Engage Customers with Interactive Gamification",
    description:
      "Encourage your customers to join in exciting games and competitions that allow them to challenge themselves while discovering more about your brand and its values. Integrate badges, progress bars, and leaderboards to create a dynamic environment where members can compete for exclusive prizes and earn bonus points.",
    image: "/images/services/loyalty/gamification.jpg",
    imagePosition: "right",
  },
  {
    title: "Enhance Customer Loyalty with Meaningful Rewards",
    description:
      "Show appreciation for your customers' engagement by offering a range of rewards, from monetary benefits to experiential perks like free shipping or access to exclusive content and events, as well as emotional rewards. With our platform's built-in recommendation model, you can effortlessly boost redemption and engagement rates among your members. Explore our extensive rewards catalog, already integrated with various third-party e-commerce platforms, to find the ideal gifts. Additionally, empower your clients to support charities and local organizations by donating their rewards or loyalty points.",
    image: "/images/services/loyalty/rewards.jpg",
    imagePosition: "left",
  },
  {
    title:
      "Boost Engagement and Build Community with Exclusive Member Rewards and Clubs",
    description:
      "Encourage loyalty program members to boost their spending, increase app usage, and earn more points by offering exclusive perks and benefits as they reach new engagement milestones. Keep your customers informed of unique, time-limited rewards awaiting them at future membership levels, and provide access to their account data so they can monitor their progress. Foster a sense of community by creating dedicated Member Clubs, exclusive VIP groups by invitation, and paid membership subscriptions.",
    image: "/images/services/loyalty/member-clubs.jpg",
    imagePosition: "left",
  },
];

export default function CustomerLoyaltyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products & Services", href: "/services" },
              {
                label: "Enterprise Transformation",
                href: "/services/enterprise-transformation",
              },
              { label: "Customer Loyalty & Rewards" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Customer Loyalty & Rewards Management
              </h1>
              <p className="text-xl text-white/80">
                Drive customer engagement and retention with our comprehensive
                loyalty program solutions.
              </p>
            </div>

            {/* Demo Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/services/loyalty-demo.jpg"
                alt="Loyalty Program Management System"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20">
        <Container>
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  feature.imagePosition === "right" ? "" : "lg:grid-flow-dense"
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
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden animate-slideIn${
                    feature.imagePosition === "right" ? "Right" : "Left"
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
              Ready to Transform Your Customer Loyalty Program?
            </h2>
            <p className="text-muted mb-8 animate-fadeIn animation-delay-100">
              Get in touch with our experts to learn how our loyalty management
              solution can help your business grow.
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
