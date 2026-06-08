import type { ReactNode } from "react";
import Link from "next/link";
import Wordmark from "./Wordmark";
import { site } from "@/lib/brand";

// Kerangka halaman: header (logo + navigasi utama) + konten + footer peta-situs.
// Footer menautkan SEMUA halaman agar saling terhubung & tidak ada yang terisolasi.
const footerSections = [
  {
    title: "Belajar",
    links: [
      { href: "/pulau/arab", label: "Pulau Arab" },
      { href: "/coba", label: "Quest Pertama" },
      { href: "/penjajakan", label: "Penjajakan" },
    ],
  },
  {
    title: "Alat",
    links: [
      { href: "/alat/tashrif", label: "Tashrif" },
      { href: "/alat/kamus", label: "Kamus" },
      { href: "/alat", label: "Semua Alat" },
    ],
  },
  {
    title: "NusaWorld",
    links: [
      { href: "/", label: "Beranda" },
      { href: "/paket", label: "Paket" },
    ],
  },
  {
    title: "Brand",
    links: [
      { href: "/gaya", label: "Panduan Gaya" },
      { href: "/komponen", label: "Komponen" },
    ],
  },
];

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-10 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" aria-label="Beranda NusaWorld">
            <Wordmark className="text-2xl" />
          </Link>
          <nav className="flex items-center gap-4 text-sm font-bold text-ocean sm:gap-6">
            <Link href="/pulau/arab" className="hover:underline">
              Pulau
            </Link>
            <Link href="/alat" className="hover:underline">
              Alat
            </Link>
            <Link href="/paket" className="hover:underline">
              Paket
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        {children}
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-5xl space-y-8 px-6 py-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {footerSections.map((s) => (
              <div key={s.title} className="space-y-2">
                <p className="text-sm font-black text-night">{s.title}</p>
                <ul className="space-y-1">
                  {s.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-night/60 hover:text-ocean hover:underline"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between gap-2 border-t border-black/5 pt-6 text-sm text-night/50 sm:flex-row">
            <span className="flex items-center gap-2">
              <Wordmark className="text-base" /> — {site.tagline}
            </span>
            <span>© NusaWorld</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
