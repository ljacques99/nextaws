"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function CallToAction() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-navy-soft py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Candidature
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-4xl font-bold text-cream sm:text-5xl">
            Rejoignez la prochaine promotion
          </h2>
          <p className="mt-4 text-base text-stone">
            Posez vos questions ou soumettez votre candidature. Notre équipe vous répond
            sous 48 h ouvrées.
          </p>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-gold/30 bg-navy p-12 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <p className="font-display text-2xl font-bold text-cream">Message envoyé !</p>
            <p className="mt-2 text-sm text-stone">
              Nous vous répondrons dans les meilleurs délais.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-navy-lighter bg-navy p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-[0.15em] text-stone"
                >
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className="w-full rounded-lg border border-navy-lighter bg-ink px-4 py-3 text-sm text-cream placeholder-stone/40 outline-none transition-colors focus:border-gold"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-[0.15em] text-stone"
                >
                  Adresse email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jean@exemple.fr"
                  className="w-full rounded-lg border border-navy-lighter bg-ink px-4 py-3 text-sm text-cream placeholder-stone/40 outline-none transition-colors focus:border-gold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-[0.15em] text-stone"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Parlez-nous de votre parcours et de vos motivations…"
                className="w-full resize-none rounded-lg border border-navy-lighter bg-ink px-4 py-3 text-sm text-cream placeholder-stone/40 outline-none transition-colors focus:border-gold"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gold py-4 text-base font-semibold text-ink transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.25)]"
            >
              Envoyer ma candidature
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
