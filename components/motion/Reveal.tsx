"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Wrapper d'animation d'entrée au scroll réutilisable.
 * Translation Y + fade, déclenché une fois quand l'élément entre dans le viewport.
 * Respecte prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </MotionTag>
  );
}
