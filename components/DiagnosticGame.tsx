"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import { questions, recommendLevel } from "@/lib/diagnostic";
import { getPlan } from "@/lib/packages";

// Minigame diagnostik: beberapa pertanyaan pilihan ganda (state lokal),
// lalu menampilkan level + rekomendasi paket di akhir.
export default function DiagnosticGame() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const total = questions.length;

  function choose(points: number) {
    const nextScore = score + points;
    setScore(nextScore);
    if (step + 1 >= total) {
      setDone(true);
    } else {
      setStep(step + 1);
    }
  }

  function restart() {
    setStep(0);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const level = recommendLevel(score);
    const plan = getPlan(level.recommend);
    return (
      <Card className="space-y-5 text-center">
        <div className="flex justify-center">
          <Badge tone="gold">Hasil penjajakan</Badge>
        </div>
        <h2 className="text-3xl font-black text-night">{level.title}</h2>
        <p className="mx-auto max-w-md text-night/70">{level.blurb}</p>

        {plan && (
          <div className="mx-auto max-w-sm space-y-3 rounded-2xl bg-ocean/5 p-5 text-left">
            <p className="text-sm font-bold text-ocean">
              Paket yang cocok untukmu
            </p>
            <div className="flex items-center gap-3">
              <span className="text-3xl" aria-hidden="true">
                {plan.icon}
              </span>
              <div>
                <p className="text-xl font-black text-night">{plan.name}</p>
                <p className="text-sm text-night/70">{plan.tagline}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/paket">Lihat semua paket</Button>
          <Button href="/pulau/arab" variant="secondary">
            Mulai belajar
          </Button>
        </div>

        <button
          type="button"
          onClick={restart}
          className="text-sm font-bold text-night/50 hover:text-ocean hover:underline"
        >
          Ulangi penjajakan
        </button>
      </Card>
    );
  }

  const q = questions[step];
  const progress = Math.round((step / total) * 100);

  return (
    <Card className="space-y-6">
      {/* Progres */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-bold text-night/60">
          <span>
            Pertanyaan {step + 1} dari {total}
          </span>
          <span>{progress}%</span>
        </div>
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-night/10"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-island transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Pertanyaan */}
      <div className="space-y-3 text-center">
        {q.arabic && (
          <p className="ar text-6xl font-bold text-arab" lang="ar">
            {q.arabic}
          </p>
        )}
        <h2 className="text-xl font-extrabold text-night">{q.prompt}</h2>
      </div>

      {/* Pilihan */}
      <div className="grid gap-3">
        {q.choices.map((c) => (
          <Button
            key={c.label}
            variant="secondary"
            onClick={() => choose(c.score)}
            className="w-full"
          >
            {c.label}
          </Button>
        ))}
      </div>
    </Card>
  );
}
