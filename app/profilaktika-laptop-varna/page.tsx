import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/layout/navbar";
import Footer from "@/app/components/layout/footer";

export const metadata: Metadata = {
  title: "Профилактика на лаптопи във Варна | ControlTech",
  description:
    "Профилактика на лаптопи във Варна – почистване от прах, смяна на термопаста, понижаване на температурите и по-тиха работа.",
  alternates: {
    canonical: "https://controltech.bg/profilaktika-laptop-varna",
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
            Профилактика на лаптопи във Варна
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Профилактиката на лаптопи във Варна включва почистване от прах,
            смяна на термопаста и проверка на охлаждането, за да работи
            устройството по-тихо, по-хладно и по-надеждно.
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-white">
            Кога е нужна профилактика
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Лаптопът загрява силно</li>
            <li>• Вентилаторът е шумен</li>
            <li>• Машината се изключва сама</li>
            <li>• Производителността е паднала</li>
            <li>• Не е почистван от дълго време</li>
          </ul>

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
