import Link from "next/link";

const serviceCards = [
  {
    title: "Ремонт на лаптопи във Варна",
    text: "Диагностика, батерия, клавиатура, вентилатор, дисплей, SSD upgrade и софтуерни проблеми.",
    href: "/remont-na-laptopi-varna",
  },
  {
    title: "Ремонт на компютри във Варна",
    text: "Ремонт на настолни компютри, RAM, SSD, захранване, охлаждане и проблеми с Windows.",
    href: "/remont-na-kompyutri-varna",
  },
  {
    title: "Инсталация на Windows във Варна",
    text: "Преинсталация на Windows, драйвери, програми, архивиране и оптимизация.",
    href: "/windows-instalaciya-varna",
  },
  {
    title: "Профилактика на лаптопи",
    text: "Почистване от прах, смяна на термопаста, намаляване на температурата и шума.",
    href: "/profilaktika-laptop-varna",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-main">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Услуги
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Основни услуги в нашия компютърен сервиз във Варна
          </h2>
          <p className="mt-4 text-slate-300">
            Ремонт на лаптопи и компютри, Windows инсталация, профилактика,
            диагностика и SSD upgrade.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="section-card block p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/10" />
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {card.text}
              </p>
              <div className="mt-5 text-sm font-medium text-cyan-300">
                Виж повече →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
