"use client";

import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Turtle from "@/components/Turtle";
import type { Quest } from "@/lib/quests";

type Status = "correct" | "wrong";

const POINTS_PER_STEP = 5;

// Mesin quest interaktif: jalankan langkah demi langkah (intro → latihan),
// beri umpan balik benar/salah yang pemaaf, lalu layar selesai berhadiah.
export default function QuestPlayer({ quest }: { quest: Quest }) {
  const steps = quest.steps;
  const total = steps.length;

  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [finished, setFinished] = useState(false);

  // Status pilihan untuk langkah saat ini.
  const [picked, setPicked] = useState<Record<string, Status>>({});
  const [solved, setSolved] = useState(false);

  const step = steps[index];
  const progress = Math.round((index / total) * 100);

  function next() {
    if (index + 1 >= total) {
      setFinished(true);
      return;
    }
    setIndex(index + 1);
    setPicked({});
    setSolved(false);
  }

  function pick(optId: string, correct: boolean) {
    if (solved || picked[optId]) return; // sudah benar / sudah dicoba
    if (correct) {
      setPicked((p) => ({ ...p, [optId]: "correct" }));
      setSolved(true);
      setPoints((pt) => pt + POINTS_PER_STEP);
    } else {
      setPicked((p) => ({ ...p, [optId]: "wrong" }));
    }
  }

  function restart() {
    setIndex(0);
    setPoints(0);
    setFinished(false);
    setPicked({});
    setSolved(false);
  }

  // ---- Layar selesai ----
  if (finished) {
    const totalPoints = points + quest.reward.points;
    return (
      <Card className="space-y-5 text-center">
        <div className="flex justify-center">
          <Turtle size={120} className="animate-float" />
        </div>
        <div className="flex justify-center">
          <Badge tone="gold">🎉 Quest Selesai!</Badge>
        </div>
        <h2 className="text-3xl font-black text-night">Kerja bagus!</h2>
        <p className="mx-auto max-w-md text-night/70">
          Kamu menyelesaikan quest pertama dan mengumpulkan aksara baru. Setiap
          langkah kecil itu hebat — lanjutkan petualanganmu! 🌊
        </p>

        <div className="mx-auto flex max-w-sm items-center justify-center gap-8 rounded-2xl bg-arab/10 p-5">
          <div className="text-center">
            <p className="text-xs font-bold text-night/60">Aksara terkumpul</p>
            <p
              className="ar text-5xl font-bold"
              style={{ color: quest.accent }}
              lang={quest.langCode}
            >
              {quest.reward.glyph}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-night/60">Poin</p>
            <p className="text-4xl font-black text-gold drop-shadow-sm">
              +{totalPoints}
            </p>
            <p className="text-[10px] text-night/50">termasuk bonus selesai</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/pulau/arab">Kembali ke pulau</Button>
          <Button href="/paket" variant="secondary">
            Lihat paket
          </Button>
        </div>
        <button
          type="button"
          onClick={restart}
          className="text-sm font-bold text-night/50 hover:text-ocean hover:underline"
        >
          Main lagi
        </button>
      </Card>
    );
  }

  // ---- Header: progres + poin ----
  const header = (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm font-bold">
        <span className="text-night/60">
          Langkah {index + 1} dari {total}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-2 py-0.5 text-shell">
          🪙 {points} poin
        </span>
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
  );

  // ---- Langkah intro ----
  if (step.kind === "intro") {
    return (
      <Card className="space-y-6 text-center">
        {header}
        <p
          className="ar text-8xl leading-none font-bold"
          style={{ color: quest.accent }}
          lang={quest.langCode}
        >
          {step.glyph}
        </p>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-night">{step.title}</h2>
          <p className="text-sm font-bold text-ocean">dibaca “{step.latin}”</p>
          <p className="mx-auto max-w-md text-night/70">{step.description}</p>
        </div>
        <Button onClick={next} className="w-full sm:w-auto">
          Mulai latihan →
        </Button>
      </Card>
    );
  }

  // ---- Langkah pilihan (step di sini bertipe ChoiceStep) ----
  const triedWrong = Object.values(picked).includes("wrong");
  return (
    <Card className="space-y-6">
      {header}

      <div className="space-y-3 text-center">
        {step.glyph && (
          <p
            className={`text-7xl leading-none font-bold ${step.glyphArabic ? "ar" : ""}`}
            style={{ color: quest.accent }}
            lang={step.glyphArabic ? quest.langCode : undefined}
          >
            {step.glyph}
          </p>
        )}
        <h2 className="text-xl font-extrabold text-night">{step.prompt}</h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {step.options.map((o) => {
          const status = picked[o.id];
          const stateClass =
            status === "correct"
              ? "border-island bg-island/15 text-shell"
              : status === "wrong"
                ? "border-hindi bg-hindi/10 text-hindi opacity-70"
                : solved
                  ? "border-night/10 bg-white text-night/40"
                  : "border-night/10 bg-white text-night hover:border-ocean hover:bg-ocean/5";
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => pick(o.id, !!o.correct)}
              disabled={solved || status === "wrong"}
              className={`flex items-center justify-center rounded-2xl border-2 px-4 py-3 font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean ${stateClass}`}
            >
              <span
                className={o.arabic ? "ar text-3xl" : "text-base"}
                lang={o.arabic ? quest.langCode : undefined}
              >
                {o.label}
              </span>
              {status === "correct" && (
                <span className="ml-2" aria-hidden="true">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Umpan balik */}
      <div aria-live="polite" className="min-h-6 text-center text-sm font-bold">
        {solved ? (
          <span className="text-island">
            ✅ {step.successNote ?? "Tepat!"}
          </span>
        ) : triedWrong ? (
          <span className="text-hindi">
            🐢 Hampir! Coba pilihan lain, kamu pasti bisa.
          </span>
        ) : (
          <span className="text-night/40">Pilih satu jawaban.</span>
        )}
      </div>

      <Button onClick={next} disabled={!solved} className="w-full">
        {index + 1 >= total ? "Selesai 🎉" : "Lanjut →"}
      </Button>
    </Card>
  );
}
