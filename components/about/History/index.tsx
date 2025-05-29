"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const MILESTONES = [
  {
    year: "2004",
    title: "Company Founded",
    description: "Started operations in Muscat with a small team of experts.",
  },
  {
    year: "2010",
    title: "Regional Expansion",
    description: "Expanded services across Oman and established key partnerships.",
  },
  {
    year: "2015",
    title: "Digital Transformation",
    description: "Launched comprehensive digital transformation solutions.",
  },
  {
    year: "2020",
    title: "Innovation Hub",
    description: "Established innovation center for emerging technologies.",
  },
];

export default function History() {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold"
          >
            OUR JOURNEY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mt-2"
          >
            Our History
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {MILESTONES.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-heading mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted">{milestone.description}</p>
                </div>
                <div className="relative flex items-center justify-center w-8 h-8">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
                <div className="w-1/2 pl-8" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
} 