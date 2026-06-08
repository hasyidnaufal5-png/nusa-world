import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Alat Belajar Bahasa Arab",
  description:
    "Kumpulan alat gratis untuk belajar bahasa Arab: tabel tashrif (konjugasi kata kerja) dan kamus mini Arab–Indonesia.",
};

const tools = [
  {
    href: "/alat/tashrif",
    icon: "🔤",
    title: "Tashrif",
    desc: "Tabel konjugasi kata kerja Arab berdasarkan kata ganti.",
  },
  {
    href: "/alat/kamus",
    icon: "📖",
    title: "Kamus Mini",
    desc: "Cari kata Arab–Indonesia secara real-time.",
  },
];

export default function AlatPage() {
  return (
    <PageLayout>
      <div className="space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-black text-night">Alat Belajar</h1>
          <p className="mx-auto max-w-xl text-night/70">
            Alat gratis untuk menemani perjalanan bahasa Arabmu.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2">
          {tools.map((t) => (
            <Link key={t.href} href={t.href} className="group">
              <Card className="h-full space-y-2 transition group-hover:-translate-y-1 group-hover:ring-ocean/30">
                <div className="text-4xl" aria-hidden="true">
                  {t.icon}
                </div>
                <h2 className="text-2xl font-black text-night">{t.title}</h2>
                <p className="text-night/70">{t.desc}</p>
                <span className="inline-block pt-2 font-bold text-ocean">
                  Buka →
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
