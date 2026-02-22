import { Variants } from "framer-motion";

// Fade up animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      delay,
      ease: "easeOut",
    },
  }),
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Stagger children (for use with staggerContainer)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Card hover animation
export const cardHover = {
  rest: {
    y: 0,
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};
