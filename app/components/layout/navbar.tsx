"use client";

import { useState } from "react";
import Link from "next/link";

const mainLinks = [
  { href: "/#services", label: "Услуги" },
  { href: "/#pricing", label: "Цени" },
  { href: "/#about", label: "За мен" },
  { href: "/#contact", label: "Контакт" },
];

const serviceLinks = [
  { href: "/remont-na-laptopi-varna", label: "Лаптопи" },
  { href: "/remont-na-kompyutri-varna", label: "Компютри" },
  { href: "/windows-instalaciya-varna", label: "Windows" },
  { href: "/profilaktika-laptop-varna", label: "Профилактика" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="container-main flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-semibold tracking-[0.28em] text-cyan-300">
            CONTROLTECH
          </span>
          <span className="text-xs text-slate-400">Varna Computer Service</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
          >
            Запитване
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Затвори меню" : "Отвори меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
        >
          <span className="sr-only">Меню</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-main flex flex-col py-4">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-2 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}

          <div className="my-3 border-t border-white/10 pt-3">
            <div className="px-2 pb-2 text-xs uppercase tracking-[0.2em] text-slate-500">
              Услуги
            </div>

            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-2 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
          >
            Изпрати запитване
          </Link>
        </nav>
      </div>
    </header>
  );
}
