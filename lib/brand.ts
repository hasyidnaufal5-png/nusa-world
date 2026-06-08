// lib/brand.ts
// Sumber tunggal data brand NusaWorld.
// PRINSIP EMAS: isi tumbuh dengan menambah DATA di sini, bukan menulis kode baru.
// Nilai hex juga didefinisikan sebagai token Tailwind di app/globals.css (@theme).

export const site = {
  name: "NusaWorld",
  tagline: "Jelajahi. Bicara. Mendunia.",
  description:
    "Game belajar bahasa yang fun & playful untuk anak & remaja 7–17 tahun.",
} as const;

/** Satu warna pada palet. `token` dipakai sebagai kelas Tailwind: bg-{token}, text-{token}, border-{token}. */
export type Swatch = {
  token: string;
  label: string;
  hex: string;
  /** true bila latar warna terang sehingga teks di atasnya sebaiknya gelap. */
  lightBg?: boolean;
};

/** Warna brand utama. */
export const brandColors: Swatch[] = [
  { token: "ocean", label: "Ocean Blue", hex: "#1B6CA8" },
  { token: "island", label: "Island Green", hex: "#2EAF73" },
  { token: "gold", label: "Quest Gold", hex: "#F5C518", lightBg: true },
  { token: "shell", label: "Deep Shell", hex: "#085041" },
  { token: "teal", label: "Light Teal", hex: "#5DCAA5", lightBg: true },
  { token: "night", label: "Night Ocean", hex: "#042C53" },
];

/** Warna aksara — satu warna per pulau bahasa. */
export const scriptColors: Swatch[] = [
  { token: "arab", label: "Arab", hex: "#2471A3" },
  { token: "japan", label: "Jepang", hex: "#8E44AD" },
  { token: "mandarin", label: "Mandarin", hex: "#1E8449" },
  { token: "korea", label: "Korea", hex: "#D35400" },
  { token: "hindi", label: "Hindi", hex: "#E74C3C" },
  { token: "nusa", label: "Pusat NusaWorld", hex: "#EF9F27", lightBg: true },
];

/** Palet maskot penyu. */
export const mascotColors: Swatch[] = [
  { token: "turtle-body", label: "Badan / Kepala", hex: "#2EAF73" },
  { token: "turtle-fin", label: "Sirip / Kaki", hex: "#1D9E75" },
  { token: "turtle-eye", label: "Mata", hex: "#042C53" },
  { token: "turtle-cheek", label: "Pipi", hex: "#F0997B", lightBg: true },
];
