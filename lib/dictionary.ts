// lib/dictionary.ts
// DATA kamus mini Arab–Indonesia. Tambah kosakata = tambah DATA di sini.

export type Entry = {
  ar: string;
  latin: string;
  meaning: string;
};

export const dictionary: Entry[] = [
  { ar: "كِتَاب", latin: "kitāb", meaning: "buku" },
  { ar: "قَلَم", latin: "qalam", meaning: "pena" },
  { ar: "بَاب", latin: "bāb", meaning: "pintu" },
  { ar: "بَيْت", latin: "bait", meaning: "rumah" },
  { ar: "مَاء", latin: "māʾ", meaning: "air" },
  { ar: "كُرْسِيّ", latin: "kursī", meaning: "kursi" },
  { ar: "مَدْرَسَة", latin: "madrasah", meaning: "sekolah" },
  { ar: "مُعَلِّم", latin: "muʿallim", meaning: "guru" },
  { ar: "طَالِب", latin: "ṭālib", meaning: "pelajar / murid" },
  { ar: "وَلَد", latin: "walad", meaning: "anak laki-laki" },
  { ar: "بِنْت", latin: "bint", meaning: "anak perempuan" },
  { ar: "يَد", latin: "yad", meaning: "tangan" },
  { ar: "عَيْن", latin: "ʿain", meaning: "mata" },
  { ar: "رَجُل", latin: "rajul", meaning: "laki-laki" },
  { ar: "اِمْرَأَة", latin: "imraʾah", meaning: "perempuan" },
  { ar: "شَمْس", latin: "syams", meaning: "matahari" },
  { ar: "قَمَر", latin: "qamar", meaning: "bulan" },
  { ar: "كَلْب", latin: "kalb", meaning: "anjing" },
  { ar: "قِطّ", latin: "qiṭṭ", meaning: "kucing" },
  { ar: "سَمَك", latin: "samak", meaning: "ikan" },
  { ar: "خُبْز", latin: "khubz", meaning: "roti" },
  { ar: "لَبَن", latin: "laban", meaning: "susu" },
  { ar: "طَعَام", latin: "ṭaʿām", meaning: "makanan" },
  { ar: "اِسْم", latin: "ism", meaning: "nama" },
  { ar: "صَدِيق", latin: "ṣadīq", meaning: "teman" },
  { ar: "شَجَرَة", latin: "syajarah", meaning: "pohon" },
  { ar: "بَحْر", latin: "baḥr", meaning: "laut" },
  { ar: "جَبَل", latin: "jabal", meaning: "gunung" },
  { ar: "نَهْر", latin: "nahr", meaning: "sungai" },
  { ar: "كَبِير", latin: "kabīr", meaning: "besar" },
  { ar: "صَغِير", latin: "ṣaghīr", meaning: "kecil" },
  { ar: "جَمِيل", latin: "jamīl", meaning: "indah / cantik" },
];
