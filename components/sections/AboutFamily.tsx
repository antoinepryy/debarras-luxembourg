"use client";

import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeIn, fadeUp } from "@/lib/animations";

interface AboutFamilyProps {
  title?: string;
  text?: string;
}

const stats = [
  { value: 30, suffix: "+", label: "Années d'expérience" },
  { value: 5000, suffix: "+", label: "Clients satisfaits" },
  { value: 100, suffix: "%", label: "Satisfaction" },
];

export function AboutFamily({
  title = "Une tradition familiale depuis plus de 30 ans",
  text = "La famille Weinrich vous propose son savoir-faire dans le domaine du débarras professionnel. Forts de plus de 30 ans d'expérience, nous mettons nos compétences à votre service pour le vidage et l'évacuation de vos locaux. Notre engagement : vous offrir un service rapide, transparent et respectueux de vos espaces.",
}: AboutFamilyProps) {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-background-alt)]/50 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual Section */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden">
              <img
                src="/images/about/weinrich-pere-fils.jpg"
                alt="La famille Weinrich - père et fils"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Experience badge */}
            <motion.div
              className="absolute -bottom-4 left-8 bg-white rounded-xl shadow-xl p-4 flex items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-muted)]">Certification</p>
                <p className="font-semibold text-[var(--color-text)]">Professionnel Agréé</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.2}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
              <span className="text-sm font-medium text-[var(--color-primary-dark)]">À propos de nous</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h2>

            <div
              className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mb-6"
            />

            <p className="text-[var(--color-text-light)] text-lg leading-relaxed mb-8">
              {text}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-xl shadow-sm"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="block text-3xl md:text-4xl font-bold text-[var(--color-primary)]"
                    duration={2}
                  />
                  <span className="text-xs md:text-sm text-[var(--color-text-muted)] mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <Button href="/contact" variant="primary" size="lg">
              Nous contacter
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
