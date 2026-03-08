export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-main flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold tracking-[0.24em] text-cyan-300">
            CONTROLTECH
          </div>
          <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
            Компютърен сервиз във Варна с фокус върху диагностика, профилактика,
            Windows инсталация, SSD upgrade и хардуерни ремонти.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-slate-400">
          <a
            href="tel:+359895771194"
            className="transition hover:text-cyan-300"
          >
            +359 89 577 1194
          </a>
          <a
            href="mailto:contact@controltech.bg"
            className="transition hover:text-cyan-300"
          >
            contact@controltech.bg
          </a>
          <span>Варна, България</span>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-400">
          <a href="/privacy" className="hover:text-cyan-300">
            Политика за поверителност
          </a>

          <a href="/cookies" className="hover:text-cyan-300">
            Политика за бисквитки
          </a>

          <a href="/service-terms" className="hover:text-cyan-300">
            Условия за сервизни услуги
          </a>

          <a href="/merchant-info" className="hover:text-cyan-300">
            Данни за търговеца
          </a>
          <a href="/service-warranty" className="hover:text-cyan-300">
            Гаранция за сервизни услуги
          </a>
        </div>
      </div>
      <div className="text-sm text-slate-500 border-t border-white/10  text-center">
        © {new Date().getFullYear()} ControlTech Varna
        <p>Web site produced by ControlTech Varna</p>
      </div>
    </footer>
  );
}
