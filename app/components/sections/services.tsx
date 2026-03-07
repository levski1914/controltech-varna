const serviceCards = [
  {
    title: "Диагностика",
    text: "Бърза проверка на хардуерни и софтуерни проблеми с ясно обяснение какво точно не е наред.",
  },
  {
    title: "Софтуерни услуги",
    text: "Инсталация на Windows, драйвери, програми, оптимизация, премахване на вируси и архивиране на данни.",
  },
  {
    title: "Хардуерни ремонти",
    text: "Профилактика, смяна на RAM, SSD, батерия, клавиатура, вентилатор, дисплей и други компоненти.",
  },
  {
    title: "Ъпгрейди и пакети",
    text: "Пакетни услуги за по-бърз лаптоп, SSD upgrade и цялостна профилактика с добра крайна стойност.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-main">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Услуги</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Всичко най-важно за един модерен компютърен сервиз.
          </h2>
          <p className="mt-4 text-slate-300">
            Фокусът е върху най-търсените услуги, които реално носят стойност на
            клиентите и могат да се обяснят бързо и ясно.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="section-card p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/10" />
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}