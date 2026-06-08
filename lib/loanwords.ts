// lib/loanwords.ts
// DATA kata serapan: kata Indonesia sehari-hari yang berasal dari bahasa Arab.
// Dipakai di beranda untuk menunjukkan "kamu tidak mulai dari nol".
// Tumbuh dengan menambah data, bukan kode.

export type LoanWord = {
  /** Kata dalam bahasa Indonesia. */
  id: string;
  /** Kata asal dalam bahasa Arab. */
  ar: string;
  /** Transliterasi latin. */
  arLatin: string;
  /** Arti singkat. */
  meaning: string;
};

export const loanWords: LoanWord[] = [
  { id: "Kursi", ar: "كُرْسِيّ", arLatin: "kursī", meaning: "kursi, tempat duduk" },
  { id: "Kitab", ar: "كِتَاب", arLatin: "kitāb", meaning: "buku" },
  { id: "Ilmu", ar: "عِلْم", arLatin: "‘ilm", meaning: "pengetahuan" },
  { id: "Kabar", ar: "خَبَر", arLatin: "khabar", meaning: "berita" },
  { id: "Hadir", ar: "حَاضِر", arLatin: "ḥāḍir", meaning: "yang hadir" },
  { id: "Waktu", ar: "وَقْت", arLatin: "waqt", meaning: "waktu" },
];
