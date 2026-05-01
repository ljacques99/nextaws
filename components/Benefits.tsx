const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Formateurs Experts",
    description:
      "Nos enseignants sont des actuaires en exercice et des chercheurs reconnus. Ils apportent une vision à la fois théorique et opérationnelle des enjeux du marché.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Alternance 100%",
    description:
      "Deux ans en immersion dans des entreprises partenaires de premier plan : AXA, BNP Paribas, Scor, Generali, Allianz. Rémunération dès le premier jour.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Réseau Puissant",
    description:
      "800+ diplômés actifs à travers le monde. Des événements networking réguliers et un programme de mentoring individuel tout au long de votre carrière.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Certification IAF",
    description:
      "Diplôme reconnu par l'Institut des Actuaires Français, ouvrant la voie au titre d'Actuaire Associé dès la validation du mémoire professionnel.",
  },
];

export default function Benefits() {
  return (
    <section id="atouts" className="bg-navy-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Pourquoi MISEIA
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-4xl font-bold text-cream sm:text-5xl">
            Quatre piliers d'excellence
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative overflow-hidden rounded-2xl bg-navy p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="mb-6 text-gold">{benefit.icon}</div>
                <h3 className="mb-3 font-display text-xl font-bold text-cream">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
