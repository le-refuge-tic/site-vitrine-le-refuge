import {
  Code,
  Megaphone,
  GraduationCap,
  Buildings,
  Storefront,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/motion/Reveal";
import { serviceGroups, type ServiceGroup } from "@/lib/content";
import { cn } from "@/lib/cn";

const icons: Record<string, Icon> = {
  Code,
  Megaphone,
  GraduationCap,
  Buildings,
  Storefront,
};

function ServiceCard({ group, index }: { group: ServiceGroup; index: number }) {
  const Ico = icons[group.icon] ?? Code;

  return (
    <Reveal
      as="article"
      delay={index * 0.06}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-line bg-surface p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lift sm:p-7",
        group.featured && "md:col-span-2 md:row-span-2",
      )}
    >
      <span
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-500 group-hover:text-white",
        )}
      >
        <Ico size={24} weight="duotone" />
      </span>

      <h3 className="font-display mt-5 text-xl font-semibold text-ink">
        {group.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {group.description}
      </p>

      <ul
        className={cn(
          "mt-5 grid gap-2 text-sm text-ink-soft",
          group.featured && "sm:grid-cols-2",
        )}
      >
        {group.items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check
              size={16}
              weight="bold"
              className="shrink-0 text-cyan-500"
            />
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="relative z-10 scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Nos services"
          title="Un seul interlocuteur pour plusieurs métiers"
          intro="Le numérique reste notre cœur de métier, complété par des services qui accompagnent vos projets du concept à la réalisation."
        />

        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 md:grid-cols-3">
          {serviceGroups.map((group, i) => (
            <ServiceCard key={group.id} group={group} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
