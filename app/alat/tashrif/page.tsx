import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import TashrifTool from "@/components/TashrifTool";

export const metadata: Metadata = {
  title: "Tashrif: Tabel Konjugasi Kata Kerja Arab",
  description:
    "Alat tashrif gratis: pilih kata kerja Arab dan lihat tabel perubahan bentuk (konjugasi fi’il madhi) lengkap berdasarkan kata ganti, dengan transliterasinya.",
  keywords: [
    "tashrif",
    "konjugasi kata kerja arab",
    "fi'il madhi",
    "tasrif lughawi",
    "belajar bahasa arab",
  ],
  openGraph: {
    title: "Tashrif: Tabel Konjugasi Kata Kerja Arab",
    description:
      "Pilih kata kerja, lihat tabel tashrif lengkap dengan transliterasi.",
  },
};

export default function TashrifPage() {
  return (
    <PageLayout>
      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-black text-night sm:text-4xl">
            Tashrif — Konjugasi Kata Kerja Arab
          </h1>
          <p className="max-w-2xl text-night/70">
            Pilih sebuah kata kerja dasar, lalu lihat{" "}
            <strong>tabel tashrif</strong> (perubahan bentuk fi’il madhi) untuk
            setiap kata ganti — lengkap dengan cara bacanya. Cocok untuk
            memahami pola konjugasi bahasa Arab.
          </p>
        </header>
        <TashrifTool />
      </div>
    </PageLayout>
  );
}
