"use client";

import { motion, useAnimation } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useEffect } from "react";

const CLIENTS = [
  { name: "client-1", logo: "/images/clients/1551874971_logo.jpg" },
  { name: "client-2", logo: "/images/clients/1639559063909.jpg" },
  { name: "client-3", logo: "/images/clients/almaha_new_1.png" },
  { name: "client-4", logo: "/images/clients/bahwan-cybertek.jpg-2.webp" },
  { name: "client-5", logo: "/images/clients/bms-auditing.jpg" },
  { name: "client-6", logo: "/images/clients/Cochin Gold Logo.png" },
  { name: "client-7", logo: "/images/clients/DB-02_d5401e03-5e62-4c70-96f7-87dfd9834098.jpg" },
  { name: "client-8", logo: "/images/clients/images-31.jpeg" },
  { name: "client-9", logo: "/images/clients/images-32.jpeg" },
  { name: "client-10", logo: "/images/clients/images-34.png" },
  { name: "client-11", logo: "/images/clients/images-35.png" },
  { name: "client-12", logo: "/images/clients/images-37.png" },
  { name: "client-13", logo: "/images/clients/logo.jpg" },
  { name: "client-14", logo: "/images/clients/unnamed.webp" },
];

export default function ClientsSection() {
  const controls = useAnimation();

  useEffect(() => {
    const animateCarousel = async () => {
      await controls.start({
        x: "-10%", // Move the full width of one cycle for seamless loop
        transition: {
          duration: 50, // Adjust speed as needed
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };
    animateCarousel();
    return () => controls.stop();
  }, [controls]);

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold uppercase text-sm tracking-wide"
          >
            {/* MEET OUR CLIENTS */}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mt-2"
          >
            Our Clients
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden">
          <motion.div
            animate={controls}
            className="flex whitespace-nowrap"
            initial={{ x: 0 }}
            style={{ width: `${CLIENTS.length * 100}%` }} // Total width for both sets
          >
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="grayscale hover:grayscale-0 transition-all hover:scale-105 px-2 flex-shrink-0"
                style={{ width: `${20 / CLIENTS.length}%` }} // Equal width for each item
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120} // Slightly larger for better visibility
                  height={120} // Consistent with width for square logos
                  className="object-contain mx-auto h-20 rounded-lg " // Updated styling
                  priority={index < 6} // Prioritize initial load
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}