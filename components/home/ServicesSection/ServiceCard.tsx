"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, href, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="text-primary mb-6 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold text-heading mb-4">{title}</h3>
      <p className="text-muted">{description}</p>
      {href ? (
        <Link href={href} passHref>
          <button className="group flex items-center text-primary font-medium mt-6">
            Learn More
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </Link>
      ) : (
        <button className="group flex items-center text-primary font-medium mt-6" disabled>
          Learn More
          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </button>
      )}
    </motion.div>
  );
} 