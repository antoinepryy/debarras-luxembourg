"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button, PhoneBadge, Container } from "@/components/ui";
import { CONTACT } from "@/lib/constants";
import { fadeUp, fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

const HERO_IMAGES = [
  "/images/hero/hero-bg-1.webp",
  "/images/hero/hero-bg-2.jpg",
];

const SLIDE_DURATION = 6000;

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export function Hero({
  title = "Débarras Luxembourg",
  subtitle = "Service professionnel de débarras dans tout le Luxembourg. Devis et déplacement gratuits.",
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const features = [
    { text: "Déplacement gratuit", icon: "truck" },
    { text: "Équipe professionnelle", icon: "search" },
    { text: "Devis gratuit", icon: "cash" },
  ];

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentSlide === index ? 1 : 0 }}
          >
            <Image
              src={src}
              alt="Débarras Luxembourg"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(17,24,39,0.82) 0%, rgba(17,24,39,0.72) 50%, rgba(30,58,138,0.75) 100%)",
          }}
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "w-8 bg-white"
                : "w-4 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <Container className="py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white border border-white/10">
                <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full" />
                Service disponible 7j/7
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </motion.h1>

            {/* Decorative line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-full mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ originX: 0 }}
            />

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button href="/contact" variant="primary" size="lg" className="shadow-2xl">
                Demander un devis gratuit
              </Button>
              <PhoneBadge
                phone={CONTACT.phone}
                displayPhone={CONTACT.phone}
                variant="light"
                size="lg"
              />
            </motion.div>

            {/* Features */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.text}
                  variants={staggerItem}
                  className="group flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 cursor-default transition-all duration-300 hover:bg-white/10"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
