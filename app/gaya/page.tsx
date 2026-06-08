import type { Metadata } from "next";
import Link from "next/link";
import ColorSwatch from "@/components/ColorSwatch";
import Wordmark from "@/components/Wordmark";
import { brandColors, scriptColors, mascotColors, site } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Panduan Gaya",
  description: "Token warna & tipografi NusaWorld.",
};

function Section({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-extrabold text-night">{title}</h2>
        {hint && <p className="text-sm text-night/60">{hint}</p>}
      </div>
      {children}
    </section>
  );
}

export default function StyleGuide() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 px-6 py-12">
      <header className="space-y-3">
        <Link href="/" className="text-sm font-bold text-ocean hover:underline">
          ← Beranda
        </Link>
        <h1 className="text-4xl">
          <Wordmark /> <span className="text-night">· Panduan Gaya</span>
        </h1>
        <p className="text-night/70">{site.tagline}</p>
      </header>

      <Section
        title="Warna Brand"
        hint="Token Tailwind: bg-ocean, text-island, border-gold, ring-night, dst."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brandColors.map((c) => (
            <ColorSwatch key={c.token} {...c} />
          ))}
        </div>
      </Section>

      <Section title="Warna Aksara" hint="Satu warna per pulau bahasa.">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {scriptColors.map((c) => (
            <ColorSwatch key={c.token} {...c} />
          ))}
        </div>
      </Section>

      <Section title="Warna Maskot Penyu" hint="Palet untuk ilustrasi maskot.">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {mascotColors.map((c) => (
            <ColorSwatch key={c.token} {...c} />
          ))}
        </div>
      </Section>

      <Section
        title="Tipografi — Nunito (UI)"
        hint="Font default untuk seluruh antarmuka, bobot 400–900."
      >
        <div className="space-y-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <p className="text-3xl font-black text-night">
            Jelajahi dunia, satu kata setiap hari.
          </p>
          <p className="text-xl font-bold text-night">
            Bicara dengan percaya diri.
          </p>
          <p className="text-base font-normal text-night">
            Nunito normal — nyaman dibaca anak &amp; remaja 7–17 tahun. 0123456789
          </p>
          <p className="text-sm font-light text-night/80">Nunito light</p>
          <div className="flex flex-wrap gap-2 pt-2 text-sm">
            {[
              "font-normal",
              "font-semibold",
              "font-bold",
              "font-extrabold",
              "font-black",
            ].map((w) => (
              <span key={w} className={`rounded-lg bg-ocean/10 px-2 py-1 ${w}`}>
                {w}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Tipografi — Amiri (Teks Arab, RTL)"
        hint="Pakai kelas .ar untuk font Amiri + arah kanan-ke-kiri."
      >
        <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <p className="ar text-6xl font-bold text-arab" lang="ar">
            بَ
          </p>
          <p className="ar text-3xl text-night" lang="ar">
            السَّلَامُ عَلَيْكُمْ
          </p>
          <p className="ar text-2xl text-night/80" lang="ar">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="text-sm text-night/60">
            ↑ Semua baris di atas memakai kelas{" "}
            <code className="font-mono">.ar</code> (Amiri, RTL).
          </p>
        </div>
      </Section>

      <Section
        title="Contoh Komponen"
        hint="Sudut membulat default, fokus jelas, ramah mobile."
      >
        <div className="flex flex-wrap items-center gap-3">
          <button className="bg-island px-5 py-3 font-bold text-white shadow-sm transition hover:brightness-95">
            Mulai Quest
          </button>
          <button className="bg-gold px-5 py-3 font-bold text-night shadow-sm transition hover:brightness-95">
            +10 Koin
          </button>
          <button className="border-2 border-ocean bg-white px-5 py-3 font-bold text-ocean">
            Sekunder
          </button>
        </div>
      </Section>
    </main>
  );
}
