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
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo-refuge.png"
        alt="Logo LE REFUGE TIC"
        width={40}
        height={40}
        className="h-9 w-9 object-contain"
        priority
      />
      {showWordmark && (
        <span className="font-display text-lg font-semibold leading-none tracking-tight text-navy-900">
          LE REFUGE<span className="text-cyan-500"> TIC</span>
        </span>
      )}
    </span>
  );
}
