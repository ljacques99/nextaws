import Link from "next/link";

const stats = [
  { value: "95%", label: "Taux d'insertion" },
  { value: "2 ans", label: "En alternance" },
  { value: "120+", label: "Partenaires entreprises" },
  { value: "Top 5", label: "Classement national" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(rgba(201,168,76,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial glow at top */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 65%)",
        }}
      />
      {/* Right decoration bar */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl w-full px-6 pt-24 pb-16">
        <div className="max-w-5xl">
          {/* Kicker */}
          <div className="animate-fade-up mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
              Master en Actuariat · Depuis 1989
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up-d1 font-display font-black leading-[0.9] tracking-tight text-cream">
            <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem]">Devenez</span>
            <span className="block text-7xl sm:text-8xl lg:text-9xl xl:text-[9rem] italic text-gold">
              Actuaire.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-d2 mt-8 max-w-2xl text-lg font-light leading-relaxed text-stone sm:text-xl">
            Le Master MISEIA forme les experts du risque et de l'assurance de demain.
            Un programme d'excellence reconnu par la profession, ancré dans la pratique réelle.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-d3 mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-ink transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            >
              Candidater maintenant
            </Link>
            <Link
              href="#programme"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-8 py-4 text-base font-medium text-cream transition-all duration-300 hover:border-cream/50 hover:bg-cream/5"
            >
              Voir le programme
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-navy-soft/60 pt-12 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold text-gold">{stat.value}</p>
              <p className="mt-1 text-sm text-stone">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
