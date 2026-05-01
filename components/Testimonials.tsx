const testimonials = [
  {
    quote:
      "Le Master MISEIA m'a donné les outils quantitatifs et la légitimité professionnelle pour intégrer la direction technique d'un grand réassureur dès la sortie du programme.",
    name: "Camille Bertrand",
    role: "Actuaire Senior, SCOR",
    year: "Promotion 2021",
  },
  {
    quote:
      "L'alternance chez AXA m'a permis de travailler sur des problématiques réelles de modélisation catastrophe naturelle. À l'issue du master, j'avais déjà un contrat CDI en poche.",
    name: "Mehdi Ouali",
    role: "Responsable Actuariat, AXA France",
    year: "Promotion 2019",
  },
  {
    quote:
      "La rigueur du programme, combinée à la qualité du réseau, m'a ouvert des portes à l'international. Je travaille aujourd'hui à Zurich sur des projets de risk management global.",
    name: "Élise Fontaine",
    role: "Risk Actuary, Swiss Re",
    year: "Promotion 2020",
  },
];

function Initials({ name }: { name: string }) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section id="temoignages" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Témoignages
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold text-cream sm:text-5xl">
            Ils ont choisi MISEIA
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-navy-soft bg-navy p-8"
            >
              <span
                className="pointer-events-none absolute -top-5 left-6 font-display font-black leading-none text-gold/20 select-none"
                style={{ fontSize: "7rem", lineHeight: 1 }}
                aria-hidden="true"
              >
                "
              </span>
              <p className="relative mt-6 text-base italic leading-relaxed text-stone">
                {t.quote}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-lighter">
                  <span className="font-display text-sm font-bold text-gold">
                    <Initials name={t.name} />
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream">{t.name}</p>
                  <p className="text-xs text-stone">{t.role}</p>
                  <p className="text-xs text-gold/60">{t.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
