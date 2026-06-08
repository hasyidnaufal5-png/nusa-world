import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import QuestPlayer from "@/components/QuestPlayer";
import { getQuest } from "@/lib/quests";

export const metadata: Metadata = {
  title: "Coba Quest — Huruf Ba",
  description: "Mainkan quest pertama: belajar membaca huruf hijaiyah بَ.",
};

export default function CobaPage() {
  const quest = getQuest("ba");
  if (!quest) notFound();

  return (
    <PageLayout>
      <div className="mx-auto max-w-xl space-y-6">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-black text-night">{quest.title}</h1>
          <p className="text-night/70">{quest.subtitle}</p>
        </header>
        <QuestPlayer quest={quest} />
      </div>
    </PageLayout>
  );
}
