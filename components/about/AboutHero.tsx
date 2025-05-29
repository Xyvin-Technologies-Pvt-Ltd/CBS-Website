"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80"
          >
            Leading the way in business transformation through innovative solutions
            and strategic excellence. We help organizations adapt and thrive in the
            digital age.
          </motion.p>
        </div>
      </Container>
    </section>
  );
} 