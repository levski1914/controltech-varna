export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="container-main grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Компютърен сервиз във Варна
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Бърз, модерен и професионален сервиз за лаптопи и компютри.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Диагностика, профилактика, Windows инсталация, SSD upgrade,
            хардуерни ремонти и ясни цени без излишно увъртане.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Виж цените
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
            >
              Изпрати запитване
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="section-card p-4">
              <div className="text-2xl font-semibold text-cyan-300">
                20 лв / 10.23 €
              </div>
              <div className="mt-1 text-sm text-slate-400">
                Диагностика без ремонт
              </div>
            </div>

            <div className="section-card p-4">
              <div className="text-2xl font-semibold text-cyan-300">
                89 лв / 45.50 €
              </div>
              <div className="mt-1 text-sm text-slate-400">
                Пакет „Компютърът ми е бавен“
              </div>
            </div>

            <div className="section-card p-4">
              <div className="text-2xl font-semibold text-cyan-300">
                24 ч / 12.28 €
              </div>
              <div className="mt-1 text-sm text-slate-400">
                Спешна диагностика
              </div>
            </div>
          </div>
        </div>

        <div className="section-card p-6 md:p-8">
          <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-950/80 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Service Overview
                </div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  ControlTech Varna
                </div>
              </div>

              <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-slate-400">Най-търсено</div>
                <div className="mt-2 text-lg font-medium text-white">
                  Профилактика + оптимизация + SSD upgrade
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-3xl font-semibold text-cyan-300">
                    7–30
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    Дни гаранция
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-3xl font-semibold text-cyan-300">
                    Варна
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    Локално обслужване
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-100">
                Подходът тук не е “евтин сервизен сайт”, а силен технологичен
                бранд с доверие, ясни услуги и модерна визия.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
