import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { plans } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Paket Belajar",
  description: "Pilih cara belajarmu: Mandiri, Kelas, atau Privat.",
};

export default function PaketPage() {
  return (
    <PageLayout>
      <div className="space-y-10">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-black text-night">Pilih cara belajarmu</h1>
          <p className="mx-auto max-w-xl text-night/70">
            Semua paket membuka petualangan yang sama serunya. Coba gratis dulu,
            pilih paket kapan saja. 🐢
          </p>
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative flex h-full flex-col gap-5 ${
                plan.popular ? "ring-2 ring-ocean" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ocean px-3 py-0.5 text-xs font-extrabold text-white shadow-sm">
                  Paling Populer
                </span>
              )}

              <div className="space-y-2">
                <div className="text-4xl" aria-hidden="true">
                  {plan.icon}
                </div>
                <h2 className="text-2xl font-black text-night">{plan.name}</h2>
                <p className="text-night/70">{plan.tagline}</p>
              </div>

              <ul className="flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-night/80"
                  >
                    <span
                      className="mt-0.5 font-black text-island"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={plan.cta.href}
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full"
              >
                {plan.cta.label}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-night/50">
          Belum yakin paket mana? Ikuti{" "}
          <Link
            href="/penjajakan"
            className="font-bold text-ocean hover:underline"
          >
            penjajakan singkat
          </Link>{" "}
          untuk rekomendasi.
        </p>
      </div>
    </PageLayout>
  );
}
