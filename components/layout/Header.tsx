"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-line/80 bg-surface/80 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-[4.5rem]">
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
                  isActive
                    ? "text-cyan-600"
                    : "text-ink-soft hover:text-ink",
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </Container>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-line bg-surface md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-ink-soft hover:bg-cyan-50 hover:text-cyan-600"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink
              href="#contact"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              Nous contacter
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
