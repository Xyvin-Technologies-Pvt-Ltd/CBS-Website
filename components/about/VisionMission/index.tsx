"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faRocket } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

export default function VisionMission() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="text-primary mb-6 text-4xl">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h2 className="text-2xl font-bold text-heading mb-4">Our Vision</h2>
            <p className="text-muted">
              To be the leading business transformation partner in the region,
              enabling organizations to achieve sustainable growth through
              innovation and excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="text-primary mb-6 text-4xl">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <h2 className="text-2xl font-bold text-heading mb-4">Our Mission</h2>
            <p className="text-muted">
              To provide comprehensive business solutions that empower
              organizations to optimize their operations, develop their human
              capital, and achieve their strategic objectives.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 