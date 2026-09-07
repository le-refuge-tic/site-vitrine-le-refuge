import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-cyan-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold text-ink text-balance sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft text-pretty">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
