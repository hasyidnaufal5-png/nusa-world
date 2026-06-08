import type { ReactNode } from "react";

// Badge / pill kecil berwarna. `tone` memilih warna dari token brand.
type Tone = "ocean" | "island" | "gold" | "arab" | "night";

const tones: Record<Tone, string> = {
  ocean: "bg-ocean/15 text-ocean",
  island: "bg-island/15 text-shell",
  gold: "bg-gold/25 text-shell",
  arab: "bg-arab/15 text-arab",
  night: "bg-night/10 text-night",
};

export default function Badge({
  children,
  tone = "ocean",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
