import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageLayout from "@/components/PageLayout";
import Wordmark from "@/components/Wordmark";
import Turtle from "@/components/Turtle";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Badge from "@/components/Badge";

export const metadata: Metadata = {
  title: "Komponen",
  description: "Galeri komponen brand reusable NusaWorld.",
};

function Demo({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-extrabold text-night">{title}</h2>
      {children}
    </section>
  );
}

export default function KomponenPage() {
  return (
    <PageLayout>
      <div className="space-y-12">
        <header className="space-y-2">
          <h1 className="text-4xl font-black text-night">Galeri Komponen</h1>
          <p className="text-night/70">
            Komponen brand reusable yang dipakai di seluruh NusaWorld.
          </p>
        </header>

        <Demo title="Logo Wordmark">
          <Card className="flex flex-wrap items-end gap-6">
            <Wordmark className="text-2xl" />
            <Wordmark className="text-4xl" />
            <Wordmark className="text-6xl" />
          </Card>
        </Demo>

        <Demo title="Maskot Penyu">
          <Card className="flex flex-wrap items-end gap-8">
            {[64, 96, 140].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <Turtle size={s} />
                <code className="font-mono text-xs text-night/60">size={s}</code>
              </div>
            ))}
          </Card>
        </Demo>

        <Demo title="Tombol">
          <Card className="flex flex-wrap items-center gap-4">
            <Button>Mulai Quest</Button>
            <Button variant="secondary">Nanti dulu</Button>
            <Button size="lg">Ukuran besar</Button>
            <Button variant="secondary" size="lg">
              Sekunder besar
            </Button>
            <Button disabled>Nonaktif</Button>
          </Card>
        </Demo>

        <Demo title="Badge / Pill">
          <Card className="flex flex-wrap items-center gap-3">
            <Badge tone="gold">🪙 120 Koin</Badge>
            <Badge tone="island">✅ Selesai</Badge>
            <Badge tone="ocean">🌊 Pulau Arab</Badge>
            <Badge tone="arab">
              <span className="ar" lang="ar">
                بَ
              </span>{" "}
              Aksara
            </Badge>
            <Badge tone="night">Level 3</Badge>
          </Card>
        </Demo>

        <Demo title="Kartu">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="space-y-3">
              <Turtle size={56} />
              <h3 className="text-lg font-extrabold text-night">
                Sapaan Pertama
              </h3>
              <p className="text-sm text-night/70">
                Belajar mengucapkan salam di Pulau Arab.
              </p>
              <Badge tone="gold">+10 Koin</Badge>
            </Card>
            <Card className="space-y-3">
              <span className="ar text-4xl font-bold text-arab" lang="ar">
                بَ
              </span>
              <h3 className="text-lg font-extrabold text-night">Aksara Ba</h3>
              <p className="text-sm text-night/70">
                Kenali bentuk &amp; bunyi huruf pertama.
              </p>
              <Button size="md">Buka</Button>
            </Card>
            <Card className="space-y-3">
              <h3 className="text-lg font-extrabold text-night">Quest Harian</h3>
              <p className="text-sm text-night/70">
                Selesaikan satu petualangan singkat tiap hari.
              </p>
              <Badge tone="island">Baru</Badge>
            </Card>
          </div>
        </Demo>
      </div>
    </PageLayout>
  );
}
