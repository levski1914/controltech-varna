import { conditions, extras, packages, services } from "@/data/site";
import { formatDualPrice } from "@/lib/currency";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container-main">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Ценоразпис
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Ясни цени и силни пакети
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Подреден ценоразпис за компютърен сервиз във Варна, с фокус върху
            най-търсените услуги и пакетите, които носят най-добра стойност.
          </p>
        </div>

        <div className="mb-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Пакети
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white md:text-4xl">
                Най-силните оферти на сайта
              </h3>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg, index) => {
              const featured = index === 0;

              return (
                <div
                  key={pkg.name}
                  className={[
                    "relative overflow-hidden rounded-[1.75rem] border p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1",
                    featured
                      ? "border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,0.12)]"
                      : "border-white/10 bg-white/5",
                  ].join(" ")}
                >
                  {featured && (
                    <div className="absolute right-4 top-4 rounded-full border border-cyan-300/30 bg-cyan-300/15 px-3 py-1 text-xs font-medium text-cyan-100">
                      Най-продаван
                    </div>
                  )}

                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {pkg.badge}
                  </div>

                  <h4 className="mt-5 text-xl font-semibold text-white">
                    {pkg.name}
                  </h4>

                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-4xl font-bold text-cyan-300">
                      {formatDualPrice(pkg.price)}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={[
                      "mt-8 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition",
                      featured
                        ? "bg-cyan-400 text-slate-950 hover:-translate-y-0.5"
                        : "border border-white/10 bg-white/5 text-white hover:border-cyan-300/30 hover:bg-white/10",
                    ].join(" ")}
                  >
                    Избери пакет
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-8">
          {services.map((group) => (
            <div
              key={group.title}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="border-b border-white/10 bg-white/5 px-6 py-5 md:px-8">
                <h3 className="text-2xl font-semibold text-white">
                  {group.title}
                </h3>
              </div>

              <div className="px-6 py-3 md:px-8">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-2 border-b border-white/10 py-4 last:border-b-0 md:flex-row md:items-center md:justify-between"
                  >
                    <span className="text-slate-200">{item.name}</span>
                    <span className="text-base font-semibold text-cyan-300">
                      {formatDualPrice(item.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Допълнително</h3>

            <div className="mt-6 space-y-4">
              {extras.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4"
                >
                  <span className="text-slate-200">{item.name}</span>
                  <span className="font-semibold text-cyan-300">
                    {formatDualPrice(item.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Условия</h3>

            <div className="mt-6 space-y-4">
              {conditions.map((condition) => (
                <div
                  key={condition}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-slate-300"
                >
                  {condition}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
