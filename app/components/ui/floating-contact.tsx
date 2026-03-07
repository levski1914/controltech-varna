export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="tel:+359895771194"
        aria-label="Обади се"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:-translate-y-0.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.24 1Z" />
        </svg>
      </a>

      <a
        href="mailto:contact@controltech.bg"
        aria-label="Изпрати имейл"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition hover:-translate-y-0.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v.41l-9 5.4-9-5.4ZM3 8.74V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.74l-8.49 5.09a1 1 0 0 1-1.02 0Z" />
        </svg>
      </a>
    </div>
  );
}
