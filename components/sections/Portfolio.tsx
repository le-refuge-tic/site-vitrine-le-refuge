"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/motion/Reveal";
import { projects, type Project } from "@/lib/content";

/** Largeur virtuelle à laquelle l'iframe est rendue avant mise à l'échelle. */
const BASE_WIDTH = 1280;

/**
 * Aperçu live du site via iframe mis à l'échelle dynamiquement selon la
 * largeur du conteneur (responsive), avec fallback si le chargement échoue.
 */
function LivePreview({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scale, setScale] = useState(0.42);

  // Suit la largeur du conteneur pour l'échelle responsive.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BASE_WIDTH);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Ne monte l'iframe que lorsqu'elle entre dans le viewport.
  // Évite qu'un champ auto-focus du site distant (ex. login) fasse défiler
  // la page vitrine vers le bas au chargement.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Le ratio 16/10 fixe la hauteur ; on rend l'iframe à la même proportion.
  const baseHeight = Math.round((BASE_WIDTH * 10) / 16);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl border-b border-line bg-cyan-50"
    >
      {!failed ? (
        <>
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-cyan-50 to-cyan-100" />
          )}
          {visible && (
            <iframe
              src={project.url}
              title={`Aperçu de ${project.title}`}
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              className="pointer-events-none absolute left-0 top-0 origin-top-left"
              style={{
                width: `${BASE_WIDTH}px`,
                height: `${baseHeight}px`,
                transform: `scale(${scale})`,
              }}
            />
          )}
        </>
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-cyan-100 to-navy-600/10 text-sm text-ink-muted">
          Aperçu indisponible
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 0.08}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <LivePreview project={project} />

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-cyan-600">
          {project.role}
        </p>
        <h3 className="font-display mt-2 text-xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 transition-colors hover:text-cyan-600"
        >
          Voir le site
          <ArrowUpRight
            size={16}
            weight="bold"
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </Reveal>
  );
}

export function Portfolio() {
  return (
    <section
      id="realisations"
      className="relative z-10 scroll-mt-24 bg-surface py-20 sm:py-28"
    >
      <Container>
        <SectionTitle
          eyebrow="Réalisations"
          title="Des projets en ligne, pas des maquettes"
          intro="Notre plateforme immobilière REFUGE, développée de l'espace client au tableau de bord d'administration."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.url} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
