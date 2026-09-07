"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/cn";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section active via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Empêche le scroll du body quand le drawer est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Ferme le drawer avec la touche Échap
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-line/80 bg-surface/80 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between sm:h-24">
        <a href="#accueil" aria-label="Accueil — LE REFUGE TIC">
          <Logo />
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  isActive ? "text-cyan-600" : "text-ink-soft hover:text-ink",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#contact" size="md">
            Nous contacter
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-cyan-50 md:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(true)}
        >
          <List size={24} />
        </button>
      </Container>

      {/* Menu mobile latéral (drawer) */}
      <AnimatePresence>
        {open && (
          <div className="md:hidden">
            {/* Voile */}
            <motion.button
              type="button"
              aria-label="Fermer le menu"
              className="fixed inset-0 z-40 bg-navy-900/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            {/* Panneau latéral droit */}
            <motion.div
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation"
              className="fixed right-0 top-0 z-50 flex h-dvh w-[82%] max-w-xs flex-col bg-surface shadow-lift"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <Logo showWordmark={false} />
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-cyan-50"
                  aria-label="Fermer le menu"
                  onClick={() => setOpen(false)}
                >
                  <X size={22} />
                </button>
              </div>

              <nav
                aria-label="Navigation mobile"
                className="flex flex-1 flex-col gap-1 p-5"
              >
                {navLinks.map((link) => {
                  const isActive = active === link.href.replace("#", "");
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-cyan-50 text-cyan-600"
                          : "text-ink-soft hover:bg-cyan-50 hover:text-cyan-600",
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="border-t border-line p-5">
                <ButtonLink
                  href="#contact"
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Nous contacter
                </ButtonLink>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
