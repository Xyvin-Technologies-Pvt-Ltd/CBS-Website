"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

export default function TeamMember({ name, role, image, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="text-center"
    >
      <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-heading">{name}</h3>
      <p className="text-muted">{role}</p>
    </motion.div>
  );
} 