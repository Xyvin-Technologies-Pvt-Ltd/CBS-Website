"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = [
  {
    quote: "Continuity Business Solutions has been instrumental in our digital transformation journey. Their expertise and dedication to excellence are unmatched.",
    author: "Abdullah Al-Sadi",
    role: "CTO",
    company: "Tech Innovations LLC",
    image: "/images/test.webp"
  },
  {
    quote: "The team's understanding of local market dynamics combined with global best practices helped us achieve remarkable results.",
    author: "Maryam Al-Balushi",
    role: "Operations Director",
    company: "Global Logistics Co.",
    image: "/images/test.webp"
  },
  {
    quote: "Their training programs have significantly improved our team's performance and productivity. Highly recommended!",
    author: "Khalid Al-Rawahi",
    role: "HR Manager",
    company: "National Bank",
    image: "/images/test.webp"
  }
];

export default function TestimonialsSection() {
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
            {/* TESTIMONIALS */}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mt-2"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              {...testimonial}
              delay={index * 0.2}
            />
          ))}
        </div>
      </Container>
    </section>
  );
} 