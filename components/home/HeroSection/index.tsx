"use client";

import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/25722059_oman_line.svg",
    "/images/25722059_oman_line.svg",
    "/images/25722059_oman_line.svg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[600px] bg-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/videos/Panel videos.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Gradient Background */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/30 to-transparent" />
      </div>

      <Container className="relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="flex flex-col items-center justify-center text-center min-h-[600px] pt-20 pb-20 lg:py-32">
            <motion.h1
              className="text-xl md:text-2xl lg:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="leading-[1.3]">
                Empowering Businesses
              </div>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Helping organizations achieve continuous improvement.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="bg-[#083c54] text-white px-8 py-3 rounded-lg hover:bg-[#306f8c] transition-colors inline-flex items-center"
              >
                Contact Us
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/services"
                className="border-2 border-[#083c54] text-[#083c54] px-8 py-3 rounded-lg hover:bg-[#d2e0f5] transition-colors inline-flex items-center"
              >
                Products & Services
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Skyline Carousel (commented out as in original) */}
          {/* <div className="relative h-full hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1, y: 20 }}
                animate={{ opacity: 0.9, scale: 1.2, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <div
                  className="absolute inset-0 bg-no-repeat bg-contain bg-center"
                  style={{
                    backgroundImage: `url(${slides[currentSlide]})`,
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-primary w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
}