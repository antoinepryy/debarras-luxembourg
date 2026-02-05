"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionTitle } from "@/components/ui";
import { CATEGORIES } from "@/lib/categories";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface CategoriesProps {
  limit?: number;
  showTitle?: boolean;
}

function CategoryCard({ category, index }: { category: (typeof CATEGORIES)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/categories/${category.slug}`}
        className="group block relative h-72 md:h-80 rounded-2xl overflow-hidden"
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
          animate={{
            opacity: isHovered ? 0.9 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            animate={{
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className="text-xl md:text-2xl font-semibold text-white mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {category.title}
            </h3>

            <motion.p
              className="text-white/80 text-sm mb-4 line-clamp-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {category.description || "Découvrez notre collection"}
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-[var(--color-primary)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm font-medium">Découvrir</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: isHovered ? 1 : 0,
            rotate: isHovered ? 0 : -180,
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>

        {/* Border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-[var(--color-primary)] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
}

export function Categories({ limit, showTitle = true }: CategoriesProps) {
  const displayedCategories = limit ? CATEGORIES.slice(0, limit) : CATEGORIES;

  return (
    <section className="section relative overflow-hidden bg-[var(--color-background-alt)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative">
        {showTitle && (
          <SectionTitle
            title="Catégories d'Objets"
            subtitle="Nous achetons et expertisons une large gamme d'objets anciens et de collection."
          />
        )}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayedCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </motion.div>

        {limit && limit < CATEGORIES.length && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/categories"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl font-medium text-[var(--color-text)] shadow-lg hover:shadow-xl transition-shadow group"
              >
                <span>Voir toutes les catégories</span>
                <motion.span
                  className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 45 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
