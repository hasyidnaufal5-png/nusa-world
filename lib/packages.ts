// lib/packages.ts
// DATA paket belajar (akses). CATATAN PENTING: pembayaran SENGAJA diabaikan —
// tidak ada harga maupun integrasi pembayaran di sini. Tombol CTA hanya
// mengarah ke halaman lain. (Aturan brand: uang hanya untuk akses/paket,
// TIDAK PERNAH untuk koin.)

export type Plan = {
  id: "mandiri" | "kelas" | "privat";
  name: string;
  tagline: string;
  features: string[];
  cta: { label: string; href: string };
  icon: string;
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    id: "mandiri",
    name: "Mandiri",
    tagline: "Jelajah sendiri, sesuka tempo kamu.",
    features: [
      "Akses semua pulau & quest",
      "Latihan tanpa batas",
      "Lacak progres harian",
      "Maskot penyu pendamping",
    ],
    cta: { label: "Mulai gratis", href: "/penjajakan" },
    icon: "🧭",
  },
  {
    id: "kelas",
    name: "Kelas",
    tagline: "Belajar bareng teman & mentor.",
    features: [
      "Semua yang ada di Mandiri",
      "Kelas grup mingguan",
      "Mentor pendamping",
      "Tantangan seru bareng",
    ],
    cta: { label: "Coba Kelas", href: "/penjajakan" },
    icon: "👥",
    popular: true,
  },
  {
    id: "privat",
    name: "Privat",
    tagline: "Sesi satu lawan satu, fokus penuh.",
    features: [
      "Semua yang ada di Kelas",
      "Sesi privat 1-on-1",
      "Jadwal fleksibel",
      "Rencana belajar personal",
    ],
    cta: { label: "Atur jadwal", href: "/penjajakan" },
    icon: "⭐",
  },
];

export function getPlan(id: string): Plan | undefined {
  return plans.find((p) => p.id === id);
}
