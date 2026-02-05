"use client";

import { motion } from "framer-motion";

interface FloatingShapeProps {
  className?: string;
  delay?: number;
  duration?: number;
  size?: string;
}

function FloatingShape({ className = "", delay = 0, duration = 20, size = "w-64 h-64" }: FloatingShapeProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${size} ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingShape
        className="bg-[var(--color-primary)] -top-32 -left-32"
        delay={0}
        duration={25}
        size="w-96 h-96"
      />
      <FloatingShape
        className="bg-[var(--color-secondary)] -bottom-32 -right-32"
        delay={5}
        duration={30}
        size="w-80 h-80"
      />
      <FloatingShape
        className="bg-[var(--color-accent)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        delay={10}
        duration={35}
        size="w-72 h-72"
      />
    </div>
  );
}

interface ParticleFieldProps {
  count?: number;
  color?: string;
}

export function ParticleField({ count = 20, color = "var(--color-primary)" }: ParticleFieldProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
          top: "-10%",
          right: "-10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(133,6,6,0.1) 0%, transparent 70%)",
          bottom: "-5%",
          left: "-5%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
