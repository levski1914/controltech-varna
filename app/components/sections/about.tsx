export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container-main grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="section-card bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            За мен
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Инженерен подход, не просто сервиз.
          </h2>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
              Бакалавър:{" "}
              <span className="text-white">Автоматизация в производството</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
              Магистратура: <span className="text-white">Siemens PLC</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
              Допълнителен профил:{" "}
              <span className="text-white">Full-stack app development</span>
            </div>
          </div>
        </div>

        <div className="section-card p-8">
          <p className="text-lg leading-8 text-slate-300">
            Идеята на този бранд е да показва професионализъм, подреденост и
            доверие. Не просто ремонт “на парче”, а добре обмислена услуга с
            ясно обяснение, ясни цени и добро крайно изпълнение.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Комбинацията между инженерно образование, интерес към хардуер,
            софтуер и реални технически решения помага сайтът да изглежда силно
            и да те позиционира много по-добре от стандартен квартален сервиз.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-slate-400">Подход</div>
              <div className="mt-2 text-lg font-medium text-white">
                Чисто, ясно, професионално
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-slate-400">Фокус</div>
              <div className="mt-2 text-lg font-medium text-white">
                Реална стойност за клиента
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
