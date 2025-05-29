"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function ContactHero() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="geometric-pattern opacity-10" />
      </div>

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80"
          >
            Have a question or want to discuss how we can help transform your
            business? We'd love to hear from you.
          </motion.p>
        </div>
      </Container>
    </section>
  );
} 