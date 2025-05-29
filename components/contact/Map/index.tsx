"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Map() {
  return (
    <section className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d58.5452!3d23.6145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzUyLjIiTiA1OMKwMzInNDIuNyJF!5e0!3m2!1sen!2som!4v1234567890123!5m2!1sen!2som"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </Container>
    </section>
  );
} 