"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const STATS = [
  { number: "200K+", label: "Active Users" },        
  { number: "95%", label: "Client Retention" },
  { number: "100+", label: "Years of Cumulative Experience" },
  { number: "25%+", label: "Return On Investment" }, 
];

export default function StatsSection() {
  return (
    <section className="section-padding bg-primary text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
} 