import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import KamusTool from "@/components/KamusTool";

export const metadata: Metadata = {
  title: "Kamus Arab–Indonesia Mini (Cari Kata)",
  description:
    "Kamus mini Arab–Indonesia: ketik untuk mencari kata secara real-time. Menampilkan tulisan Arab, transliterasi, dan artinya. Gratis untuk belajar kosakata.",
  keywords: [
    "kamus arab indonesia",
    "arti kata arab",
    "kosakata bahasa arab",
    "terjemah arab",
  ],
  openGraph: {
    title: "Kamus Arab–Indonesia Mini",
    description:
      "Cari kata Arab secara real-time: tulisan Arab, transliterasi, dan arti.",
  },
};

export default function KamusPage() {
  return (
    <PageLayout>
      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-black text-night sm:text-4xl">
            Kamus Arab–Indonesia
          </h1>
          <p className="max-w-2xl text-night/70">
            Ketik kata dalam bahasa Indonesia, Arab, atau transliterasinya untuk
            menemukan artinya secara langsung. Kosakata dasar untuk memulai
            petualanganmu.
          </p>
        </header>
        <KamusTool />
      </div>
    </PageLayout>
  );
}
