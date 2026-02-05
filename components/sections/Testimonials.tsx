"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, SectionTitle } from "@/components/ui";

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    location: "Luxembourg-Ville",
    rating: 5,
    text: "Service impeccable pour le débarras de la maison de mes parents. L'équipe a été très respectueuse et a même trouvé des objets de valeur que nous ne soupçonnions pas. Je recommande vivement !",
    service: "Débarras de maison",
  },
  {
    id: 2,
    name: "Jean-Pierre Müller",
    location: "Esch-sur-Alzette",
    rating: 5,
    text: "Excellente expertise de ma collection de montres anciennes. Des professionnels compétents qui connaissent vraiment leur métier. Le prix proposé pour le rachat était très correct.",
    service: "Expertise & Rachat",
  },
  {
    id: 3,
    name: "Sophie Lambert",
    location: "Differdange",
    rating: 5,
    text: "Rapide, efficace et honnête. Ils ont vidé notre cave en une demi-journée et ont même balayé après leur passage. Le devis correspondait exactement au prix final.",
    service: "Débarras de cave",
  },
  {
    id: 4,
    name: "François Schmit",
    location: "Dudelange",
    rating: 5,
    text: "Après le décès de ma mère, l'équipe a géré le débarras avec beaucoup de délicatesse. Ils ont pris le temps d'expertiser les meubles anciens et m'ont fait une offre de rachat très honnête.",
    service: "Succession",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 ${i < rating ? "text-[var(--color-primary)]" : "text-gray-200"}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </motion.svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-white to-[var(--color-background-alt)]">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,0,0,0.05) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Quote marks */}
        <div className="absolute top-32 left-[15%] text-[200px] font-serif text-[var(--color-primary)]/5 leading-none select-none">
          "
        </div>
      </div>

      <Container className="relative">
        <SectionTitle
          title="Ce que nos clients disent"
          subtitle="Plus de 5000 clients satisfaits dans tout le Luxembourg"
        />

        {/* Main testimonial display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[var(--color-primary)]/10 to-transparent" />
                    <motion.div
                      className="absolute top-4 right-4 text-[var(--color-primary)]/20"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                        <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Rating and service */}
                  <div className="flex items-center justify-between mb-6">
                    <StarRating rating={testimonials[activeIndex].rating} />
                    <span className="px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium rounded-full">
                      {testimonials[activeIndex].service}
                    </span>
                  </div>

                  {/* Quote */}
                  <motion.p
                    className="text-lg md:text-xl text-[var(--color-text)] leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonials[activeIndex].text}"
                  </motion.p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white text-xl font-bold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {testimonials[activeIndex].name.charAt(0)}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-[var(--color-text)]" style={{ fontFamily: "var(--font-heading)" }}>
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)] flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                        </svg>
                        {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-10 bg-[var(--color-primary)]" : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {index === activeIndex && (
                  <motion.div
                    className="absolute inset-0 bg-[var(--color-primary)] rounded-full"
                    layoutId="testimonialDot"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: "5000+", label: "Clients satisfaits" },
              { value: "30+", label: "Années d'expérience" },
              { value: "100%", label: "Taux de satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center px-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.p
                  className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-[var(--color-text-muted)]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
