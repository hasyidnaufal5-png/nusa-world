# CLAUDE.md — Konteks Proyek NusaWorld

> Baca & ikuti file ini di **setiap** tugas. Update saat ada keputusan penting (warna, aturan, struktur).

## PRODUK

**NusaWorld** — game belajar bahasa yang **fun & playful** untuk **anak & remaja usia 7–17**.

- Pulau pertama: **Pulau Arab** (mulai dari aksara hijaiyah _ba_ / `بَ`).
- Rasa: seperti **Harvest Moon × The Sims** — menjelajah, ngobrol, hidup di dunia. **BUKAN** les/sekolah.
- Tagline: **Jelajahi. Bicara. Mendunia.**

## PRINSIP EMAS

- Kode (mesin game) **dibangun sekali**.
- Isi tiap pulau **tumbuh dengan menambah DATA, bukan menulis kode baru**.
- Mesin **tidak peduli bahasa apa** — bahasa/aksara hanyalah data yang dimuat.
- Implikasi praktis: simpan konten (kata, kalimat, aksara, quest, warna) sebagai **data** (mis. `lib/`, kelak Supabase). Komponen membaca data, bukan di-hardcode.

## TUMPUKAN TEKNOLOGI

- **Framework:** Next.js (App Router) + **TypeScript** + **Tailwind CSS** (v4, token via `@theme`).
- **DB / Auth / Storage / Realtime:** **Supabase** — wajib pakai **Row Level Security (RLS)**.
- **Hosting:** **Vercel** (repo GitHub `nusa-world` sudah terhubung).
- **AI:** **Anthropic API** (model Claude terbaru).
- **Animasi:** **SVG/CSS** — hindari video berat.
- **Pembayaran:** _diabaikan dulu_ sesuai instruksi. **Jangan tulis kode pembayaran/Midtrans** sampai diminta.

## WARNA BRAND (token Tailwind)

Didefinisikan di `app/globals.css` (`@theme`) & `lib/brand.ts`. Pakai sebagai `bg-*`, `text-*`, `border-*`, `ring-*`.

| Token      | Nama          | Hex       |
| ---------- | ------------- | --------- |
| `ocean`    | Ocean Blue    | `#1B6CA8` |
| `island`   | Island Green  | `#2EAF73` |
| `gold`     | Quest Gold    | `#F5C518` |
| `shell`    | Deep Shell    | `#085041` |
| `teal`     | Light Teal    | `#5DCAA5` |
| `night`    | Night Ocean   | `#042C53` |

**Warna aksara** (satu per pulau bahasa):

| Token      | Bahasa  | Hex       |
| ---------- | ------- | --------- |
| `arab`     | Arab    | `#2471A3` |
| `japan`    | Jepang  | `#8E44AD` |
| `mandarin` | Mandarin| `#1E8449` |
| `korea`    | Korea   | `#D35400` |
| `hindi`    | Hindi   | `#E74C3C` |
| `nusa`     | Pusat NW| `#EF9F27` |

**Maskot penyu:** `turtle-body` `#2EAF73`, `turtle-fin` `#1D9E75`, `turtle-eye` `#042C53`, `turtle-cheek` `#F0997B`.

## FONT

- **Nunito** — UI default (bobot 400–900). Dimuat via `next/font/google`, jadi `--font-sans`.
- **Amiri** — teks Arab (RTL), bobot 400 & 700. Kelas bantu **`.ar`** = Amiri + `direction: rtl`.
- Latar global: terang lembut (`#f3f9fc`), teks `night`, sudut membulat default.

## GARIS MERAH (perlindungan anak — WAJIB)

- **Koin TIDAK PERNAH dibeli pakai uang.** Uang hanya untuk beli **akses/paket**.
- **TIDAK ADA** gacha / hadiah acak / mekanik judi.
- **TIDAK ADA** hukuman kehilangan progres atau koin.
- **Nada selalu menyemangati & pemaaf.** Tidak menghakimi, tidak menakut-nakuti.

## GAYA KODE

- Komponen **kecil & reusable**, nama jelas, komentar secukupnya.
- Utamakan **aksesibilitas** (semantik, kontras, fokus jelas) & **mobile-first**.
- Konten = data; mesin = kode (lihat Prinsip Emas).
- Rahasia hanya di `.env.local` (sudah di-`.gitignore`). Jangan pernah commit rahasia.
- Commit kecil & sering, pesan jelas; satu commit per fitur selesai.

## STRUKTUR PROYEK

```
app/                  Halaman (App Router)
  layout.tsx          Root layout: muat font Nunito & Amiri, metadata
  page.tsx            Beranda — landing Pulau Arab (hero + kata serapan)
  pulau/[island]/     Halaman pulau (mesin generik, isi dari data)
  paket/page.tsx      3 tier paket (Mandiri/Kelas/Privat) — TANPA pembayaran
  penjajakan/page.tsx Minigame diagnostik level → rekomendasi paket
  styleguide/page.tsx Panduan gaya (semua warna + contoh Nunito & Amiri)
  komponen/page.tsx   Galeri komponen brand reusable
  globals.css         Token Tailwind (@theme) + gaya global + .ar + animasi
components/           Komponen kecil & reusable:
  Wordmark.tsx        Logo teks "NusaWorld" (Nusa ocean, World island)
  Turtle.tsx          Maskot penyu (SVG, prop size)
  Button.tsx          Tombol playful (variant, size; jadi Link bila ada href)
  Card.tsx            Kartu konten
  Badge.tsx           Badge/pill berwarna (prop tone)
  GlyphCard.tsx       Kartu satu aksara (mesin generik)
  LoanWordCard.tsx    Kartu kata serapan interaktif (flip, "use client")
  DiagnosticGame.tsx  Minigame penjajakan interaktif ("use client")
  PageLayout.tsx      Kerangka halaman: header + konten + footer
  ColorSwatch.tsx     Kotak warna untuk panduan gaya
lib/                  Helper & DATA:
  brand.ts            Nama, tagline, palet warna
  islands.ts          DATA pulau & aksara (tambah pulau/aksara = tambah data)
  loanwords.ts        DATA kata serapan Indonesia–Arab
  packages.ts         DATA paket belajar (tanpa harga/pembayaran)
  diagnostic.ts       DATA pertanyaan & level penjajakan
```

## PERINTAH

- `npm run dev` — jalankan dev server (default http://localhost:3000)
- `npm run build` — build produksi
- `npm run lint` — lint
