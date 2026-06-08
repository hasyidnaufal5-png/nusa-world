"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import {
  verbs,
  pronouns,
  conjugate,
  baseForm,
  type Pronoun,
} from "@/lib/verbs";

const groupLabels: Record<Pronoun["group"], string> = {
  ketiga: "Orang ketiga (gha’ib)",
  kedua: "Orang kedua (mukhatab)",
  pertama: "Orang pertama (mutakallim)",
};
const groupOrder: Pronoun["group"][] = ["ketiga", "kedua", "pertama"];

export default function TashrifTool() {
  const [verbId, setVerbId] = useState(verbs[0].id);
  const verb = verbs.find((v) => v.id === verbId) ?? verbs[0];
  const base = baseForm(verb);

  return (
    <div className="space-y-6">
      {/* Pilih kata kerja */}
      <div className="space-y-3">
        <p className="text-sm font-bold text-night/60">
          Pilih kata kerja dasar (fi’il madhi):
        </p>
        <div className="flex flex-wrap gap-2">
          {verbs.map((v) => {
            const b = baseForm(v);
            const active = v.id === verbId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setVerbId(v.id)}
                aria-pressed={active}
                className={`rounded-full border-2 px-4 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean ${
                  active
                    ? "border-ocean bg-ocean text-white"
                    : "border-night/10 bg-white text-night hover:border-ocean"
                }`}
              >
                <span className="ar text-base font-bold" lang="ar">
                  {b.ar}
                </span>{" "}
                <span className="font-bold">{b.latin}</span>
                <span className="opacity-80"> — {v.meaning}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ringkasan kata terpilih */}
      <Card className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="ar text-5xl font-bold text-arab" lang="ar">
            {base.ar}
          </span>
          <div>
            <p className="text-xl font-black text-night">{base.latin}</p>
            <p className="text-night/60">artinya “{verb.meaning}”</p>
          </div>
        </div>
        <Badge tone="arab">Fi’il madhi (lampau)</Badge>
      </Card>

      {/* Tabel tashrif per kelompok */}
      {groupOrder.map((g) => {
        const rows = pronouns.filter((p) => p.group === g);
        return (
          <div key={g} className="space-y-2">
            <h2 className="text-lg font-extrabold text-night">
              {groupLabels[g]}
            </h2>
            <div className="overflow-x-auto rounded-2xl ring-1 ring-black/5">
              <table className="w-full min-w-[28rem] border-collapse bg-white text-left">
                <thead>
                  <tr className="bg-ocean/5 text-sm text-night/70">
                    <th className="px-4 py-2 font-bold">Kata ganti</th>
                    <th className="px-4 py-2 font-bold">Tashrif</th>
                    <th className="px-4 py-2 font-bold">Dibaca</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((p) => {
                    const c = conjugate(verb, p);
                    return (
                      <tr key={p.id} className="border-t border-black/5">
                        <td className="px-4 py-3">
                          <span
                            className="ar text-xl font-bold text-night"
                            lang="ar"
                          >
                            {p.ar}
                          </span>{" "}
                          <span className="text-sm text-night/60">
                            {p.latin} · {p.gloss}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className="ar text-2xl font-bold text-arab"
                            lang="ar"
                          >
                            {c.ar}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-bold text-ocean">
                          {c.latin}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}
