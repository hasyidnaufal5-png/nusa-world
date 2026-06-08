import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import DiagnosticGame from "@/components/DiagnosticGame";

export const metadata: Metadata = {
  title: "Penjajakan",
  description: "Minigame singkat untuk mengukur level awal bahasa Arabmu.",
};

export default function PenjajakanPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-xl space-y-6">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-black text-night">Penjajakan singkat</h1>
          <p className="text-night/70">
            Jawab beberapa pertanyaan santai ini. Tidak dinilai, tidak ada yang
            salah — hanya untuk menemukan titik mulai terbaik buatmu. 🐢
          </p>
        </header>
        <DiagnosticGame />
      </div>
    </PageLayout>
  );
}
