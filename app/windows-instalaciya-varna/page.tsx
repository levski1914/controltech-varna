import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/layout/navbar";
import Footer from "@/app/components/layout/footer";

export const metadata: Metadata = {
  title: "Инсталация на Windows във Варна | ControlTech",
  description:
    "Инсталация на Windows във Варна – преинсталация, драйвери, програми, архивиране на данни и оптимизация.",
  alternates: {
    canonical: "https://controltech.bg/windows-instalaciya-varna",
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
            Инсталация на Windows във Варна
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Предлагаме инсталация на Windows във Варна, включително
            преинсталация, драйвери, програми, архивиране на данни и оптимизация
            за по-бърза и стабилна работа.
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-white">
            Какво включва услугата
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Инсталация или преинсталация на Windows</li>
            <li>• Инсталиране на драйвери</li>
            <li>• Основни програми</li>
            <li>• Архивиране на данни при нужда</li>
            <li>• Премахване на излишен софтуер</li>
            <li>• Оптимизация за по-бърза работа</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-white">
            Подходящо при
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Услугата е подходяща при бавен компютър, проблеми със стартиране,
            вируси, нестабилна работа или след смяна на SSD.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Изпрати запитване
            </Link>

            <Link
              href="/remont-na-laptopi-varna"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
            >
              Виж ремонт на лаптопи
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
