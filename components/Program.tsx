const modules = [
  {
    number: "01",
    title: "Mathématiques Actuarielles",
    description:
      "Probabilités avancées, statistiques inférentielles, théorie de la ruine, tarification vie et non-vie.",
  },
  {
    number: "02",
    title: "Finance & Marchés",
    description:
      "Instruments financiers, gestion actif-passif, Solvabilité II, normes IFRS 17.",
  },
  {
    number: "03",
    title: "Science des Données",
    description:
      "Machine learning, R, Python, SQL — appliqués aux données sinistres et à la tarification prédictive.",
  },
  {
    number: "04",
    title: "Gestion des Risques",
    description:
      "Risque opérationnel, catastrophes naturelles, stress-tests réglementaires, modèles internes.",
  },
  {
    number: "05",
    title: "Démographie & Retraite",
    description:
      "Tables de mortalité, régimes par répartition et capitalisation, épargne longue, vieillissement.",
  },
  {
    number: "06",
    title: "Comptabilité & Contrôle",
    description:
      "Normes comptables, reporting actuariel, audit des provisions techniques, contrôle interne.",
  },
  {
    number: "07",
    title: "Droit des Assurances",
    description:
      "Réglementation prudentielle, contrats, contentieux, RGPD et données assurantielles.",
  },
  {
    number: "08",
    title: "Mémoire & Stage",
    description:
      "Projet de recherche appliquée en entreprise, soutenance devant un jury de professionnels.",
  },
];

export default function Program() {
  return (
    <section id="programme" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Curriculum
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight text-cream sm:text-5xl">
              Le programme
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-stone sm:text-right">
            8 modules fondamentaux conçus avec les acteurs majeurs de l'industrie
            de l'assurance française et internationale.
          </p>
        </div>

        {/* Module grid — separated by 1px gaps using bg on the container */}
        <div className="grid gap-px bg-navy-soft/30 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => (
            <div
              key={module.number}
              className="group bg-ink p-8 transition-colors duration-300 hover:bg-navy"
            >
              <span className="font-display text-5xl font-black text-gold/15 transition-colors duration-300 group-hover:text-gold/30">
                {module.number}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug text-cream">
                {module.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
