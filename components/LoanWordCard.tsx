"use client";

import { useState } from "react";
import type { LoanWord } from "@/lib/loanwords";

// Kartu kata serapan yang membalik (flip) saat di-hover (desktop) atau
// di-ketuk (sentuh). Depan: kata Indonesia. Belakang: asal kata Arab.
export default function LoanWordCard({ word }: { word: LoanWord }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-pressed={open}
      aria-label={`${word.id} — dari bahasa Arab ${word.arLatin}, artinya ${word.meaning}`}
      className="group h-36 w-full rounded-2xl [perspective:1000px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean"
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
          open ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Depan */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5 [backface-visibility:hidden]">
          <span className="text-2xl font-black text-night">{word.id}</span>
          <span className="text-xs font-bold text-ocean">ketuk / arahkan ✨</span>
        </div>

        {/* Belakang */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-2xl bg-arab/10 p-4 text-center ring-1 ring-arab/20 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="ar text-3xl font-bold text-arab" lang="ar">
            {word.ar}
          </span>
          <span className="text-sm font-bold text-night">{word.arLatin}</span>
          <span className="text-xs text-night/60">“{word.meaning}”</span>
        </div>
      </div>
    </button>
  );
}
