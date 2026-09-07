"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Bouton « remonter en haut ». Apparaît une fois la page défilée,
 * placé au-dessus du bouton flottant WhatsApp pour ne pas le chevaucher.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollUp}
          aria-label="Remonter en haut de la page"
          className="fixed bottom-24 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-navy-600 shadow-lift transition-transform duration-200 hover:scale-105 hover:text-cyan-600 active:scale-95 sm:bottom-24 sm:right-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUp size={20} weight="bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
