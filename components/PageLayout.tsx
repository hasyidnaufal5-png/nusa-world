import type { ReactNode } from "react";
import Link from "next/link";
import Wordmark from "./Wordmark";
import { site } from "@/lib/brand";

// Kerangka halaman: header (logo + navigasi) + konten + footer.
// Dipakai ulang oleh halaman-halaman yang butuh tata letak penuh.
export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-10 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Beranda NusaWorld">
            <Wordmark className="text-2xl" />
          </Link>
          <nav className="flex items-center gap-4 text-sm font-bold text-ocean">
            <Link href="/styleguide" className="hover:underline">
              Gaya
            </Link>
            <Link href="/komponen" className="hover:underline">
              Komponen
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        {children}
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-night/60 sm:flex-row">
          <span className="flex items-center gap-2">
            <Wordmark className="text-base" /> — {site.tagline}
          </span>
          <span>© NusaWorld</span>
        </div>
      </footer>
    </div>
  );
}
