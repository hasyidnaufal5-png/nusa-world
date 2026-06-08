import type { Glyph } from "@/lib/islands";

// Kartu satu aksara — bagian dari "mesin" yang generik untuk bahasa apa pun.
// Aksara, warna aksen, kelas font, dan kode bahasa semuanya datang dari DATA.
type Props = {
  glyph: Glyph;
  /** Kelas font aksara (mis. "ar"). */
  fontClass?: string;
  /** Warna aksen aksara (hex). */
  accent?: string;
  /** Kode bahasa untuk atribut lang (mis. "ar"). */
  lang?: string;
  /** Tandai sebagai pelajaran pertama. */
  featured?: boolean;
};

export default function GlyphCard({
  glyph,
  fontClass = "",
  accent = "#1B6CA8",
  lang,
  featured = false,
}: Props) {
  return (
    <div
      className={`relative rounded-2xl bg-white p-5 text-center shadow-sm ring-1 transition hover:-translate-y-1 ${
        featured ? "ring-2 ring-gold" : "ring-black/5"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-3 py-0.5 text-xs font-extrabold text-night shadow-sm">
          ⭐ Mulai di sini
        </span>
      )}
      <div
        className={`text-6xl leading-none ${fontClass}`}
        style={{ color: accent }}
        lang={lang}
      >
        {glyph.char}
      </div>
      <div className="mt-4 text-lg font-extrabold text-night">{glyph.name}</div>
      <div className="text-sm font-bold text-ocean">/{glyph.latin}/</div>
      <p className="mt-2 text-xs leading-relaxed text-night/60">{glyph.hint}</p>
    </div>
  );
}
