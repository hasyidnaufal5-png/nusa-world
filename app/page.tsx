import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { site } from "@/lib/brand";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <span className="rounded-full bg-gold/20 px-4 py-1 text-sm font-bold text-shell">
        🐢 Fondasi proyek siap
      </span>

      <h1 className="text-6xl leading-none sm:text-8xl">
        <Wordmark />
      </h1>

      <p className="max-w-md text-lg font-bold text-ocean sm:text-xl">
        {site.tagline}
      </p>

      <p className="max-w-lg text-base text-night/70">{site.description}</p>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/styleguide"
          className="rounded-full bg-ocean px-6 py-3 font-bold text-white shadow-sm transition hover:bg-night focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean"
        >
          Lihat panduan gaya
        </Link>
        <span className="ar text-5xl font-bold text-arab" lang="ar">
          بَ
        </span>
      </div>
    </main>
  );
}
