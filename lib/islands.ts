// lib/islands.ts
// DATA pulau bahasa. PRINSIP EMAS: menambah pulau/aksara = menambah DATA di sini,
// BUKAN menulis komponen baru. Mesin (komponen) tidak peduli bahasa apa —
// ia hanya membaca field di bawah (aksara, arah teks, warna aksen, dst).

export type Glyph = {
  id: string;
  /** Karakter yang ditampilkan (boleh dengan harakat). */
  char: string;
  /** Nama aksara. */
  name: string;
  /** Cara baca latin. */
  latin: string;
  /** Petunjuk bunyi/ciri, nada menyemangati. */
  hint: string;
};

export type Island = {
  id: string;
  name: string;
  language: string;
  script: string;
  /** Arah teks aksara (true = kanan-ke-kiri). */
  rtl: boolean;
  /** Kelas font untuk aksara pulau ini (mis. "ar" = Amiri + RTL). */
  fontClass: string;
  /** Kode bahasa untuk atribut lang (mis. "ar"). */
  langCode: string;
  /** Warna aksen aksara (hex; selaras token aksara di globals.css). */
  accent: string;
  /** Emoji/ikon pulau. */
  icon: string;
  greeting: { text: string; latin: string; meaning: string };
  /** id aksara yang menjadi pelajaran pertama. */
  firstGlyph: string;
  /** Tautan ke quest pertama pulau ini (opsional). */
  questHref?: string;
  glyphs: Glyph[];
};

export const islands: Island[] = [
  {
    id: "arab",
    name: "Pulau Arab",
    language: "Bahasa Arab",
    script: "Hijaiyah",
    rtl: true,
    fontClass: "ar",
    langCode: "ar",
    accent: "#2471A3",
    icon: "🕌",
    greeting: {
      text: "السَّلَامُ عَلَيْكُمْ",
      latin: "assalāmu‘alaikum",
      meaning: "Semoga keselamatan untukmu",
    },
    firstGlyph: "ba",
    questHref: "/coba",
    glyphs: [
      {
        id: "alif",
        char: "ا",
        name: "Alif",
        latin: "a",
        hint: "Huruf pertama hijaiyah, berdiri tegak seperti tongkat.",
      },
      {
        id: "ba",
        char: "بَ",
        name: "Ba",
        latin: "ba",
        hint: "Bunyi “b”. Punya satu titik di bawah; dengan fathah jadi بَ = “ba”.",
      },
      {
        id: "ta",
        char: "تَ",
        name: "Ta",
        latin: "ta",
        hint: "Bunyi “t”. Dua titik di atas.",
      },
      {
        id: "tsa",
        char: "ثَ",
        name: "Tsa",
        latin: "tsa",
        hint: "Bunyi “ts”. Tiga titik di atas.",
      },
      {
        id: "jim",
        char: "جَ",
        name: "Jim",
        latin: "ja",
        hint: "Bunyi “j”. Satu titik di dalam lengkungan.",
      },
      {
        id: "ha",
        char: "حَ",
        name: "Ha",
        latin: "ha",
        hint: "Bunyi “h” lembut dari tenggorokan.",
      },
    ],
  },
];

export function getIsland(id: string): Island | undefined {
  return islands.find((i) => i.id === id);
}
