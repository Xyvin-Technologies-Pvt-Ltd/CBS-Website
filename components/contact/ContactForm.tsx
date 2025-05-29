"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";

export default function ContactForm() {
  return (
    <section className="section-padding">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-heading mb-4"
            >
              Send Us a Message
            </motion.h2>
            <p className="text-muted">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-heading mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-heading mb-2">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full md:w-auto group"
            >
              Send Message
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
} 