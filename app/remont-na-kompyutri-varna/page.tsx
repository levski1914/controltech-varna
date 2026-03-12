import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/layout/navbar";
import Footer from "@/app/components/layout/footer";

export const metadata: Metadata = {
  title: "Ремонт на компютри във Варна | ControlTech",
  description:
    "Ремонт на компютри във Варна – диагностика, RAM, SSD, захранване, охлаждане, Windows и хардуерни проблеми.",
  alternates: {
    canonical: "https://controltech.bg/remont-na-kompyutri-varna",
  },
};

export default function Page() {
  return (
    <>
      <main className="container-main py-20">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Услуга
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Ремонт на компютри във Варна
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Предлагаме ремонт на компютри във Варна при проблеми със захранване,
            бавна работа, RAM, SSD, охлаждане, стартиране на Windows и обща
            нестабилност на системата.
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-white">
            Какво ремонтираме
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Компютърът не стартира</li>
            <li>• Бавна работа и забивания</li>
            <li>• Проблеми със захранване</li>
            <li>• RAM и SSD upgrade</li>
            <li>• Прегряване и шумно охлаждане</li>
            <li>• Преинсталация и оптимизация на Windows</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-white">
            Защо да изберете нас
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Работим с подробна диагностика, ясно обяснение на проблема и
            коректна комуникация за цената и възможните решения.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Изпрати запитване
            </Link>

            <Link
              href="/windows-instalaciya-varna"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
            >
              Виж Windows услуга
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
