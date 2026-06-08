// lib/verbs.ts
// DATA kata kerja + generator tashrif (konjugasi) fi'il madhi (lampau).
// Hanya kata kerja "sehat" (salim) wazan I: vokal f1 & f2 tetap, hanya huruf
// ketiga yang berubah → akhiran madhi bersifat universal, jadi bisa di-generate.
// PRINSIP EMAS: tambah kata kerja = tambah DATA di sini.

export type Verb = {
  id: string;
  /** Akar dengan harakat f1 & f2, huruf ketiga TANPA harakat (mis. "كَتَب"). */
  stemAr: string;
  /** Transliterasi stem (mis. "katab"). */
  stemLatin: string;
  meaning: string;
};

export const verbs: Verb[] = [
  { id: "kataba", stemAr: "كَتَب", stemLatin: "katab", meaning: "menulis" },
  { id: "dzahaba", stemAr: "ذَهَب", stemLatin: "dzahab", meaning: "pergi" },
  { id: "jalasa", stemAr: "جَلَس", stemLatin: "jalas", meaning: "duduk" },
  { id: "fataha", stemAr: "فَتَح", stemLatin: "fatah", meaning: "membuka" },
  { id: "darasa", stemAr: "دَرَس", stemLatin: "daras", meaning: "belajar" },
];

export type Pronoun = {
  id: string;
  ar: string;
  latin: string;
  gloss: string;
  /** Akhiran madhi (Arab) yang ditempel ke stem. */
  arSuffix: string;
  latinSuffix: string;
  group: "ketiga" | "kedua" | "pertama";
};

export const pronouns: Pronoun[] = [
  { id: "huwa", ar: "هُوَ", latin: "huwa", gloss: "dia (lk)", arSuffix: "َ", latinSuffix: "a", group: "ketiga" },
  { id: "huma_m", ar: "هُمَا", latin: "humā", gloss: "mereka berdua (lk)", arSuffix: "َا", latinSuffix: "ā", group: "ketiga" },
  { id: "hum", ar: "هُمْ", latin: "hum", gloss: "mereka (lk)", arSuffix: "ُوا", latinSuffix: "ū", group: "ketiga" },
  { id: "hiya", ar: "هِيَ", latin: "hiya", gloss: "dia (pr)", arSuffix: "َتْ", latinSuffix: "at", group: "ketiga" },
  { id: "huma_f", ar: "هُمَا", latin: "humā", gloss: "mereka berdua (pr)", arSuffix: "َتَا", latinSuffix: "atā", group: "ketiga" },
  { id: "hunna", ar: "هُنَّ", latin: "hunna", gloss: "mereka (pr)", arSuffix: "ْنَ", latinSuffix: "na", group: "ketiga" },
  { id: "anta", ar: "أَنْتَ", latin: "anta", gloss: "kamu (lk)", arSuffix: "ْتَ", latinSuffix: "ta", group: "kedua" },
  { id: "antuma", ar: "أَنْتُمَا", latin: "antumā", gloss: "kalian berdua", arSuffix: "ْتُمَا", latinSuffix: "tumā", group: "kedua" },
  { id: "antum", ar: "أَنْتُمْ", latin: "antum", gloss: "kalian (lk)", arSuffix: "ْتُمْ", latinSuffix: "tum", group: "kedua" },
  { id: "anti", ar: "أَنْتِ", latin: "anti", gloss: "kamu (pr)", arSuffix: "ْتِ", latinSuffix: "ti", group: "kedua" },
  { id: "antunna", ar: "أَنْتُنَّ", latin: "antunna", gloss: "kalian (pr)", arSuffix: "ْتُنَّ", latinSuffix: "tunna", group: "kedua" },
  { id: "ana", ar: "أَنَا", latin: "anā", gloss: "saya", arSuffix: "ْتُ", latinSuffix: "tu", group: "pertama" },
  { id: "nahnu", ar: "نَحْنُ", latin: "naḥnu", gloss: "kami / kita", arSuffix: "ْنَا", latinSuffix: "nā", group: "pertama" },
];

export function conjugate(verb: Verb, pronoun: Pronoun) {
  return {
    ar: verb.stemAr + pronoun.arSuffix,
    latin: verb.stemLatin + pronoun.latinSuffix,
  };
}

/** Bentuk dasar (huwa) = stem + fathah. */
export function baseForm(verb: Verb) {
  return { ar: verb.stemAr + "َ", latin: verb.stemLatin + "a" };
}

export function getVerb(id: string): Verb | undefined {
  return verbs.find((v) => v.id === id);
}
