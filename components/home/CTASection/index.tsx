"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="section-padding bg-primary text-white">
      {/* <div className="absolute inset-0">
        <div className="geometric-pattern opacity-10" />
      </div> */}

      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title !text-white"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 mb-8"
          >
            Let's discuss how we can help you achieve continuous improvement and
            sustainable growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn bg-white text-primary hover:bg-white/90 group">
              Schedule a Consultation
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </button>
            <button className="btn btn-outline">
              View Our Solutions
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 