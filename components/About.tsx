const keyFacts = [
  { number: "1989", label: "Année de création" },
  { number: "800+", label: "Diplômés actifs" },
  { number: "38", label: "Pays représentés" },
  { number: "IAF", label: "Membre de l'Institut" },
];

export default function About() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Pull quote */}
          <div className="relative">
            <span
              className="pointer-events-none absolute -top-10 -left-4 font-display font-black leading-none text-gold/10 select-none"
              style={{ fontSize: "12rem", lineHeight: 1 }}
              aria-hidden="true"
            >
              "
            </span>
            <blockquote className="relative font-display text-3xl font-bold italic leading-snug text-cream sm:text-4xl">
              L'actuariat, c'est transformer l'incertitude en décision éclairée.
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-sm text-stone">Le cœur du métier d'actuaire</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                À propos
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight text-cream">
              Une formation d'excellence pour les métiers du risque
            </h2>
            <p className="text-base leading-relaxed text-stone">
              Le Master MISEIA forme des professionnels capables d'analyser et modéliser
              les risques dans les domaines de l'assurance, de la banque et de la finance.
              Notre approche allie rigueur mathématique et immersion terrain dès la première année.
            </p>
            <p className="text-base leading-relaxed text-stone">
              Reconnu par l'Institut des Actuaires Français, notre programme ouvre la voie
              au titre d'Actuaire Associé. Nos diplômés occupent des postes de direction
              dans les plus grandes organisations mondiales.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {keyFacts.map((item) => (
                <div key={item.label} className="border-l-2 border-gold/30 pl-4">
                  <p className="font-display text-2xl font-bold text-gold">{item.number}</p>
                  <p className="mt-0.5 text-xs text-stone">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
