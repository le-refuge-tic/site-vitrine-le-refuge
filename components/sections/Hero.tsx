"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { company, serviceGroups } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const domains = serviceGroups.map((g) => g.title);

  return (
    <section
      id="accueil"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Ambiance : dégradés radiaux cyan subtils */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 8%, rgba(18,165,229,0.14), transparent 60%), radial-gradient(45% 45% at 10% 20%, rgba(30,58,138,0.08), transparent 55%)",
        }}
      />

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-xs font-medium text-ink-soft backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Studio TIC polyvalent · {company.country}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-4xl font-semibold leading-[1.05] text-ink text-balance sm:text-6xl"
          >
            Votre partenaire pour le{" "}
            <span className="text-gradient">numérique</span> et les services au
            Bénin.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty"
          >
            {company.subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href="#contact" size="lg">
              Nous contacter
              <ArrowRight size={18} weight="bold" />
            </ButtonLink>
            <ButtonLink href="#realisations" variant="outline" size="lg">
              Voir nos réalisations
            </ButtonLink>
          </motion.div>

          {/* Domaines d'intervention, en ligne */}
          <motion.ul
            variants={item}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted"
          >
            {domains.map((d) => (
              <li key={d} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                {d}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>

      <Container className="mt-16 hidden sm:block">
        <a
          href="#services"
          className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-cyan-600"
        >
          <ArrowDown size={16} className="animate-bounce" />
          Découvrir nos services
        </a>
      </Container>
    </section>
  );
}
