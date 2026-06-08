import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import Turtle from "@/components/Turtle";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import GlyphCard from "@/components/GlyphCard";
import { getIsland, islands } from "@/lib/islands";

type Params = { params: Promise<{ island: string }> };

// Pra-render semua pulau yang ada di data.
export function generateStaticParams() {
  return islands.map((i) => ({ island: i.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { island } = await params;
  const data = getIsland(island);
  if (!data) return { title: "Pulau tidak ditemukan" };
  return {
    title: data.name,
    description: `Belajar ${data.language} (${data.script}) di ${data.name}.`,
  };
}

export default async function IslandPage({ params }: Params) {
  const { island } = await params;
  const data = getIsland(island);
  if (!data) notFound();

  const first =
    data.glyphs.find((g) => g.id === data.firstGlyph) ?? data.glyphs[0];

  return (
    <PageLayout>
      <div className="space-y-12">
        {/* Hero */}
        <section className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <Turtle size={120} className="shrink-0" />
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <Badge tone="arab">
                {data.icon} {data.script}
              </Badge>
              <Badge tone="ocean">{data.language}</Badge>
            </div>
            <h1 className="text-4xl font-black text-night sm:text-5xl">
              {data.name}
            </h1>
            <p className="max-w-prose text-night/70">
              Ayo jelajahi pulau pertama! Kenali aksara, lihat bentuknya, dan
              ucapkan pelan-pelan. Tidak ada yang salah di sini — semua boleh
              diulang sesukamu. 🐢
            </p>
            <div>
              <p
                className="ar text-3xl font-bold"
                style={{ color: data.accent }}
                lang={data.langCode}
              >
                {data.greeting.text}
              </p>
              <p className="text-sm text-night/60">
                {data.greeting.latin} — “{data.greeting.meaning}”
              </p>
            </div>
          </div>
        </section>

        {/* Pelajaran pertama */}
        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-night">
            Pelajaran pertama
          </h2>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-arab/10 p-8 sm:flex-row">
            <div
              className="ar text-8xl font-bold leading-none"
              style={{ color: data.accent }}
              lang={data.langCode}
            >
              {first.char}
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-2xl font-black text-night">
                Aksara {first.name}{" "}
                <span className="text-ocean">/{first.latin}/</span>
              </h3>
              <p className="max-w-prose text-night/70">{first.hint}</p>
              <Button href={data.questHref}>
                Mulai belajar “{first.name}”
              </Button>
            </div>
          </div>
        </section>

        {/* Semua aksara */}
        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-night">
            Semua aksara di pulau ini
          </h2>
          <p className="text-sm text-night/60">
            Daftar ini tumbuh dengan menambah data — bukan menulis kode baru. ✨
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {data.glyphs.map((g) => (
              <GlyphCard
                key={g.id}
                glyph={g}
                fontClass={data.fontClass}
                accent={data.accent}
                lang={data.langCode}
                featured={g.id === data.firstGlyph}
              />
            ))}
          </div>
        </section>

        {/* Penyemangat */}
        <section className="rounded-3xl bg-island/10 p-6 text-center">
          <p className="font-bold text-shell">
            Hebat! Setiap aksara yang kamu kenali membawamu makin dekat untuk{" "}
            <span className="text-island">bicara &amp; mendunia</span>. 🌏
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
