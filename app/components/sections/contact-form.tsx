"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import {
  submitContactForm,
  type ContactFormState,
} from "@/actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Изпращане..." : "Изпрати запитване"}
    </button>
  );
}

const initialState: ContactFormState = {
  success: false,
  message: "",
  errors: {},
};

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <input
            name="name"
            type="text"
            placeholder="Име"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
          />
          {state.errors?.name && (
            <p className="mt-2 text-sm text-red-300">{state.errors.name}</p>
          )}
        </div>

        <div>
          <input
            name="phone"
            type="tel"
            placeholder="Телефон"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
          />
          {state.errors?.phone && (
            <p className="mt-2 text-sm text-red-300">{state.errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <input
          name="email"
          type="email"
          placeholder="Имейл"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
        />
        {state.errors?.email && (
          <p className="mt-2 text-sm text-red-300">{state.errors.email}</p>
        )}
      </div>

      <div>
        <select
          name="service"
          defaultValue=""
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none"
        >
          <option value="" disabled>
            Избери услуга
          </option>
          <option value="diagnostics">Диагностика</option>
          <option value="windows">Windows инсталация</option>
          <option value="cleaning">Профилактика</option>
          <option value="ssd-upgrade">SSD upgrade</option>
          <option value="hardware-repair">Хардуерен ремонт</option>
          <option value="other">Друго</option>
        </select>
        {state.errors?.service && (
          <p className="mt-2 text-sm text-red-300">{state.errors.service}</p>
        )}
      </div>

      <div>
        <textarea
          name="details"
          placeholder="Опиши проблема или услугата, която ти трябва"
          className="min-h-36 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
        />
        {state.errors?.details && (
          <p className="mt-2 text-sm text-red-300">{state.errors.details}</p>
        )}
      </div>

      <SubmitButton />

      {state.message && (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            state.success
              ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
              : "border-red-400/20 bg-red-400/10 text-red-200"
          }`}
        >
          {state.message}
        </div>
      )}
    </form>
  );
}