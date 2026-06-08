// lib/quests.ts
// DATA quest. PRINSIP EMAS: menambah quest/aksara = menambah DATA di sini.
// "Mesin" quest (components/QuestPlayer.tsx) tidak peduli isi spesifiknya.
// Nada selalu menyemangati & pemaaf: jawaban salah TIDAK menghukum.

export type Option = {
  id: string;
  label: string;
  /** true bila label berupa aksara Arab (dirender dengan font .ar). */
  arabic?: boolean;
  correct?: boolean;
};

export type IntroStep = {
  kind: "intro";
  id: string;
  title: string;
  glyph: string;
  latin: string;
  description: string;
};

export type ChoiceStep = {
  kind: "choice";
  id: string;
  prompt: string;
  /** Aksara/teks besar opsional di atas pertanyaan. */
  glyph?: string;
  glyphArabic?: boolean;
  options: Option[];
  /** Pesan saat dijawab benar. */
  successNote?: string;
};

export type QuestStep = IntroStep | ChoiceStep;

export type Quest = {
  id: string;
  title: string;
  subtitle: string;
  langCode: string;
  /** Warna aksen aksara (hex). */
  accent: string;
  /** Hadiah saat quest selesai. */
  reward: { glyph: string; latin: string; points: number };
  steps: QuestStep[];
};

export const quests: Quest[] = [
  {
    id: "ba",
    title: "Quest Pertama: Huruf Ba",
    subtitle: "Kenali & baca huruf hijaiyah بَ",
    langCode: "ar",
    accent: "#2471A3",
    reward: { glyph: "بَ", latin: "ba", points: 10 },
    steps: [
      {
        kind: "intro",
        id: "intro",
        title: "Kenalan dulu, yuk!",
        glyph: "بَ",
        latin: "ba",
        description:
          "Ini huruf Ba. Lihat satu titik kecil di bawahnya. Dengan harakat fathah di atasnya, ia dibaca “ba”.",
      },
      {
        kind: "choice",
        id: "baca",
        prompt: "Huruf ini dibaca apa?",
        glyph: "بَ",
        glyphArabic: true,
        successNote: "Tepat! بَ dibaca “ba”.",
        options: [
          { id: "ba", label: "ba", correct: true },
          { id: "ta", label: "ta" },
          { id: "tsa", label: "tsa" },
          { id: "ja", label: "ja" },
        ],
      },
      {
        kind: "choice",
        id: "pilih-huruf",
        prompt: "Yang mana huruf Ba?",
        successNote: "Benar! Itu huruf Ba — satu titik di bawah.",
        options: [
          { id: "ba", label: "ب", arabic: true, correct: true },
          { id: "ta", label: "ت", arabic: true },
          { id: "tsa", label: "ث", arabic: true },
          { id: "nun", label: "ن", arabic: true },
        ],
      },
      {
        kind: "choice",
        id: "titik",
        prompt: "Apa ciri khas huruf Ba?",
        successNote: "Yes! Satu titik di bawah adalah ciri si Ba.",
        options: [
          { id: "bawah", label: "Satu titik di bawah", correct: true },
          { id: "atas2", label: "Dua titik di atas" },
          { id: "atas3", label: "Tiga titik di atas" },
          { id: "none", label: "Tidak punya titik" },
        ],
      },
      {
        kind: "choice",
        id: "harakat",
        prompt: "Dengan harakat fathah, بَ dibaca…",
        glyph: "بَ",
        glyphArabic: true,
        successNote: "Mantap! Fathah membuat bunyinya “ba”.",
        options: [
          { id: "ba", label: "ba", correct: true },
          { id: "bi", label: "bi" },
          { id: "bu", label: "bu" },
          { id: "ab", label: "ab" },
        ],
      },
    ],
  },
];

export function getQuest(id: string): Quest | undefined {
  return quests.find((q) => q.id === id);
}
