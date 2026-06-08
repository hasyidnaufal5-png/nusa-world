// lib/diagnostic.ts
// DATA minigame penjajakan: pertanyaan pilihan ganda untuk memperkirakan
// level awal bahasa Arab pengguna. Total skor menentukan rekomendasi paket.
// Nada selalu menyemangati — tidak ada jawaban yang "menghukum".

export type Choice = { label: string; score: number };

export type Question = {
  id: string;
  prompt: string;
  /** Teks/aksara Arab opsional untuk ditampilkan besar (font .ar). */
  arabic?: string;
  choices: Choice[];
};

export const questions: Question[] = [
  {
    id: "huruf",
    prompt: "Seberapa kenal kamu dengan huruf hijaiyah?",
    choices: [
      { label: "Belum kenal sama sekali", score: 0 },
      { label: "Kenal beberapa huruf", score: 1 },
      { label: "Hafal sebagian besar", score: 2 },
      { label: "Lancar semua huruf", score: 3 },
    ],
  },
  {
    id: "baca-ba",
    prompt: "Huruf ini dibaca apa?",
    arabic: "بَ",
    choices: [
      { label: "Ba", score: 2 },
      { label: "Ta", score: 0 },
      { label: "Tsa", score: 0 },
      { label: "Ja", score: 0 },
    ],
  },
  {
    id: "arti-kitab",
    prompt: "Kata ini artinya…",
    arabic: "كِتَاب",
    choices: [
      { label: "Buku", score: 2 },
      { label: "Kursi", score: 0 },
      { label: "Air", score: 0 },
      { label: "Pintu", score: 0 },
    ],
  },
  {
    id: "baca-kata",
    prompt: "Bisakah kamu membaca kata berharakat sederhana?",
    choices: [
      { label: "Belum bisa", score: 0 },
      { label: "Pelan-pelan bisa", score: 1 },
      { label: "Cukup lancar", score: 2 },
      { label: "Sangat lancar", score: 3 },
    ],
  },
  {
    id: "tujuan",
    prompt: "Apa tujuan belajarmu? (tidak ada jawaban salah!)",
    choices: [
      { label: "Santai, buat seru-seruan", score: 0 },
      { label: "Bisa baca tulisan Arab", score: 0 },
      { label: "Ingin cepat & terarah", score: 0 },
    ],
  },
];

export type Level = {
  id: "pemula" | "menengah" | "mahir";
  title: string;
  blurb: string;
  /** id paket yang direkomendasikan (lihat lib/packages.ts). */
  recommend: "mandiri" | "kelas" | "privat";
};

export const levels: Level[] = [
  {
    id: "pemula",
    title: "Penjelajah Baru 🌱",
    blurb:
      "Awal yang sempurna! Kamu akan mulai dari dasar dengan santai dan menyenangkan. Setiap langkah kecil itu hebat.",
    recommend: "mandiri",
  },
  {
    id: "menengah",
    title: "Pelaut Tangguh ⛵",
    blurb:
      "Kamu sudah punya bekal bagus! Belajar bareng mentor & teman akan membuatmu naik level lebih cepat.",
    recommend: "kelas",
  },
  {
    id: "mahir",
    title: "Navigator Mahir 🧭",
    blurb:
      "Keren, fondasimu kuat! Sesi privat 1-on-1 pas untuk mengasah dan melesat lebih jauh.",
    recommend: "privat",
  },
];

// Skor maksimum (dihitung dari pilihan bernilai tertinggi tiap pertanyaan).
export const MAX_SCORE = questions.reduce(
  (sum, q) => sum + Math.max(0, ...q.choices.map((c) => c.score)),
  0,
);

export function recommendLevel(score: number): Level {
  const ratio = MAX_SCORE === 0 ? 0 : score / MAX_SCORE;
  if (ratio < 0.4) return levels[0];
  if (ratio < 0.8) return levels[1];
  return levels[2];
}
