"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  delay?: number;
}

export default function TestimonialCard({ quote, author, role, company, image, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white p-6 md:p-8 rounded-xl card-shadow relative hover-up"
    >
      <div className="text-primary/10 text-6xl absolute right-8 top-8">
        <FontAwesomeIcon icon={faQuoteRight} />
      </div>
      <p className="text-muted mb-8 relative z-10">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-heading">{author}</h4>
          <p className="text-sm text-muted">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
} 