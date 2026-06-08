import type { Swatch } from "@/lib/brand";

// Kotak warna kecil & reusable untuk panduan gaya.
// Latar memakai inline-style dari hex agar selalu tepat, sambil menampilkan
// nama kelas Tailwind (bg-{token}) supaya developer tahu cara memakainya.
export default function ColorSwatch({ token, label, hex, lightBg }: Swatch) {
  const ink = lightBg ? "text-night" : "text-white";
  return (
    <figure className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
      <div
        className={`flex h-24 items-end p-3 ${ink}`}
        style={{ backgroundColor: hex }}
      >
        <span className="text-sm font-bold">{label}</span>
      </div>
      <figcaption className="flex items-center justify-between gap-2 bg-white px-3 py-2 text-xs">
        <code className="font-mono text-night/70">bg-{token}</code>
        <code className="font-mono uppercase text-night/50">{hex}</code>
      </figcaption>
    </figure>
  );
}
