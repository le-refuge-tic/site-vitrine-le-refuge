import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "whatsapp";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[transform,background-color,box-shadow,color] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[0.95rem]",
} as const;

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan-500 text-white shadow-soft hover:bg-cyan-600 hover:shadow-lift",
  outline:
    "border border-line bg-surface text-ink hover:border-cyan-300 hover:text-cyan-600",
  ghost: "text-ink-soft hover:bg-cyan-50 hover:text-cyan-600",
  whatsapp:
    "bg-[#25D366] text-white shadow-soft hover:bg-[#1eb858] hover:shadow-lift",
};

type CommonProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  ...props
}: CommonProps & {
  href: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(base, sizes[size], variants[variant], className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
