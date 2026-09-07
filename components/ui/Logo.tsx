import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/logo-refuge.png"
        alt="Logo LE REFUGE TIC"
        width={64}
        height={64}
        className="h-12 w-12 object-contain sm:h-14 sm:w-14"
        priority
      />
      {showWordmark && (
        <span className="font-display text-xl font-semibold leading-none tracking-tight text-navy-900 sm:text-2xl">
          LE REFUGE<span className="text-cyan-500"> TIC</span>
        </span>
      )}
    </span>
  );
}
