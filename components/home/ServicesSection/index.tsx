"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faUsers, faChartLine } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    icon: <FontAwesomeIcon icon={faLaptopCode} />,
    title: "Customer Loyalty and Rewards Platform.",
    description: "Drive customer engagement and retention with our comprehensive loyalty program solutions.”",
    href: "/services/enterprise-transformation/customer-loyalty-rewards-management",
  },
  {
    icon: <FontAwesomeIcon icon={faUsers} />,
    title: "People & Training",
    description: "Established courses and programs that empowers the human capital within enterprises deliver better.",
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} />,
    title: "Strategic Consulting",
    description: "Forming and Implementing strategy and roadmap for developing and marketing products.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold"
          >
            {/* OUR SERVICES */}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mt-2"
          >
            What We Offer
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.2}
            />
          ))}
        </div>
      </Container>
    </section>
  );
} 