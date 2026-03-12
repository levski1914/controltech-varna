import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/layout/navbar";
import Footer from "@/app/components/layout/footer";

export const metadata: Metadata = {
  title: "Ремонт на лаптопи във Варна | ControlTech",
  description:
    "Ремонт на лаптопи във Варна – диагностика, профилактика, SSD upgrade, смяна на батерия, клавиатура, вентилатор и Windows инсталация.",
  alternates: {
    canonical: "https://controltech.bg/remont-na-laptopi-varna",
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
            Ремонт на лаптопи във Варна
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Предлагаме ремонт на лаптопи във Варна при проблеми с бавна работа,
            загряване, шумен вентилатор, проблеми с батерията, клавиатурата,
            дисплея, SSD диска или Windows.
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-white">
            Какви проблеми ремонтираме
          </h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Лаптопът работи бавно или забива</li>
            <li>• Загрява и се изключва</li>
            <li>• Има нужда от профилактика</li>
            <li>• Не зарежда Windows</li>
            <li>• Проблеми с батерия, вентилатор, клавиатура или дисплей</li>
            <li>• Смяна на SSD и ускоряване на системата</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-white">
            Как протича услугата
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Първо се извършва диагностика, след което получаваш ясно обяснение
            какъв е проблемът, какви са вариантите за ремонт и каква ще бъде
            крайната цена.
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-white">
            Често задавани въпроси
          </h2>

          <div className="mt-6 space-y-6 text-slate-300">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Правите ли профилактика на лаптопи?
              </h3>
              <p className="mt-2">
                Да, включително почистване, смяна на термопаста и проверка на
                охлаждането.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Може ли да се сложи SSD?
              </h3>
              <p className="mt-2">
                Да, SSD upgrade е една от най-търсените услуги за по-бърза
                работа.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Изпрати запитване
            </Link>

            <Link
              href="/profilaktika-laptop-varna"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
            >
              Виж профилактика
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
