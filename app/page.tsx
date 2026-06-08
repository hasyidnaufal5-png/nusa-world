import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Turtle from "@/components/Turtle";
import LoanWordCard from "@/components/LoanWordCard";
import { loanWords } from "@/lib/loanwords";

export const metadata: Metadata = {
  title: "Pulau Arab — petualangan bahasa",
  description:
    "Kuasai bahasa Arab sambil membangun duniamu. Mulai dari aksara hijaiyah, bukan kurikulum.",
};

export default function Home() {
  return (
    <PageLayout>
      <div className="space-y-16">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-ocean to-night px-6 py-12 text-white sm:px-12 sm:py-16">
          {/* dekorasi samudra */}
          <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-teal/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 left-1/3 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
          <span
            className="ar pointer-events-none absolute right-0 bottom-0 leading-none font-bold text-white/5 select-none text-[12rem]"
            lang="ar"
            aria-hidden="true"
          >
            بَ
          </span>

          <div className="relative grid items-center gap-8 sm:grid-cols-2">
            <div className="animate-rise space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-bold backdrop-blur">
                <span className="ar text-lg text-gold" lang="ar">
                  بَ
                </span>
                Pulau Arab
              </span>
              <h1 className="text-4xl leading-tight font-black sm:text-5xl">
                Kuasai bahasa Arab sambil membangun duniamu
              </h1>
              <p className="max-w-md text-lg text-white/80">
                Bukan les, bukan hafalan. Berlayar ke Pulau Arab, berkenalan
                dengan penduduknya, dan kumpulkan aksara untuk membuka
                petualangan berikutnya. 🌊
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/pulau/arab"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-lg font-extrabold text-night shadow-lg transition hover:brightness-95 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  🚀 Mulai Quest Gratis
                </Link>
                <Link
                  href="/pulau/arab"
                  className="font-bold text-white/90 underline-offset-4 hover:underline"
                >
                  Intip aksaranya →
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <Turtle size={220} className="animate-float drop-shadow-xl" />
            </div>
          </div>
        </section>

        {/* KAMU SUDAH TAHU 500 KATA ARAB */}
        <section className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-black text-night">
              Kamu sudah tahu 500 kata Arab
            </h2>
            <p className="mx-auto max-w-2xl text-night/70">
              Tanpa sadar, bahasa Indonesia menyerap ratusan kata dari bahasa
              Arab. Kamu{" "}
              <span className="font-bold text-island">tidak mulai dari nol</span>!
              Ketuk kartu untuk melihat asal katanya. ✨
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {loanWords.map((w) => (
              <LoanWordCard key={w.id} word={w} />
            ))}
          </div>
        </section>

        {/* CTA penutup */}
        <section className="rounded-3xl bg-island/10 p-8 text-center">
          <h2 className="text-2xl font-black text-shell">
            Siap membangun duniamu?
          </h2>
          <p className="mt-2 text-night/70">
            Mulai dari satu aksara. Pelan-pelan, menyenangkan, dan selalu bisa
            diulang. 🐢
          </p>
          <Link
            href="/pulau/arab"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-ocean px-7 py-4 text-lg font-extrabold text-white shadow-sm transition hover:bg-night active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean"
          >
            Mulai Quest Gratis
          </Link>
        </section>
      </div>
    </PageLayout>
  );
}
