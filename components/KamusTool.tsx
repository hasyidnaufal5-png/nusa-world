"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { dictionary } from "@/lib/dictionary";

export default function KamusTool() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const results = query
    ? dictionary.filter(
        (w) =>
          w.latin.toLowerCase().includes(query) ||
          w.meaning.toLowerCase().includes(query) ||
          w.ar.includes(q.trim()),
      )
    : dictionary;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="kamus-search"
          className="text-sm font-bold text-night/60"
        >
          Cari kata (Arab, transliterasi, atau arti):
        </label>
        <input
          id="kamus-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="mis. kitab, buku, كتاب…"
          autoComplete="off"
          className="w-full rounded-2xl border-2 border-night/10 bg-white px-4 py-3 text-lg text-night outline-none transition focus:border-ocean"
        />
        <p className="text-sm text-night/50">
          {results.length} kata ditemukan
        </p>
      </div>

      {results.length === 0 ? (
        <Card className="text-center text-night/60">
          Tidak ditemukan. Coba kata lain ya — kosakata terus kami tambah. 🐢
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((w) => (
            <Card key={w.ar + w.latin} className="space-y-1 text-center">
              <p className="ar text-4xl font-bold text-arab" lang="ar">
                {w.ar}
              </p>
              <p className="text-sm font-bold text-ocean">{w.latin}</p>
              <p className="text-night/80">{w.meaning}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
