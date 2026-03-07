import ContactForm from "@/app/components/sections/contact-form";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container-main">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-card p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Контакт
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Свържи се за ремонт или запитване
            </h2>

            <div className="mt-8 space-y-5 text-slate-300">
              <div>
                <div className="text-sm text-slate-500">Град</div>
                <div className="mt-1 text-lg text-white">Варна</div>
              </div>

              <div>
                <div className="text-sm text-slate-500">Телефон</div>
                <div className="mt-1 text-lg text-white">+359 89 577 1194</div>
              </div>

              <div>
                <div className="text-sm text-slate-500">Имейл</div>
                <div className="mt-1 text-lg text-white">
                  contact@controltech.bg
                </div>
              </div>

              <div>
                <div className="text-sm text-slate-500">Работно време</div>
                <div className="mt-1 text-lg text-white">
                  Понеделник – Събота
                </div>
              </div>
            </div>
          </div>

          <div className="section-card p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
