import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import StatsSection from "@/components/home/StatsSection";
// import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";
import ClientsSection from "@/components/home/clients";

export default function Home() {
  return (
    <main>
      <section className="bg-white">
        <HeroSection />
      </section>
      
      <section className="bg-gray-50 py-2">
        <ServicesSection />
      </section>
      
      <section className="bg-white py-8">
        <WhyUsSection />
      </section>
      
      <section className="bg-gray-50 py-8">
        <StatsSection />
      </section>
      
      {/* <section className="bg-white py-8">
        <TestimonialsSection />
      </section> */}
      <section className="bg-white py-24">
        <ClientsSection />
      </section>
      
      <section className="bg-white pb-24">
        <CTASection />
      </section>

      <section className="bg-gray-50 py-8">
        <PartnersSection />
      </section>
      
    </main>
  );
}
