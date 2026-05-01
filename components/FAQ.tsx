const faqs = [
  {
    question: "Quelles sont les conditions d'admission au Master MISEIA ?",
    answer:
      "L'admission est ouverte aux titulaires d'une Licence 3 ou d'un M1 en mathématiques, statistiques, économie ou informatique. Le recrutement se fait sur dossier, tests écrits et entretien de motivation. Les dossiers sont examinés de mars à juin.",
  },
  {
    question: "Le programme est-il reconnu par l'Institut des Actuaires ?",
    answer:
      "Oui. Le Master MISEIA est reconnu par l'Institut des Actuaires Français (IAF) et par le Groupe Consultatif Actuariel Européen. Nos diplômés peuvent prétendre au titre d'Actuaire Associé dès la validation de leur mémoire professionnel.",
  },
  {
    question: "Quelle est la durée et le rythme de la formation ?",
    answer:
      "La formation se déroule sur 2 ans en alternance : 3 jours en entreprise, 2 jours en cours. Le rythme peut légèrement varier selon les semestres. Les cours ont lieu du lundi au mercredi.",
  },
  {
    question: "Quel est le coût de la formation ?",
    answer:
      "La formation en alternance est gratuite pour l'étudiant : les frais de scolarité sont pris en charge par l'entreprise d'accueil via l'OPCO. L'alternant perçoit également une rémunération mensuelle selon les barèmes légaux en vigueur.",
  },
  {
    question: "Quels débouchés après le Master MISEIA ?",
    answer:
      "Les métiers visés sont : actuaire vie/non-vie, actuaire épargne-retraite, risk manager, data scientist en assurance, consultant actuariel, chargé d'études financières. 95 % de nos diplômés sont en poste dans les 3 mois suivant l'obtention du diplôme.",
  },
  {
    question: "Est-il possible de candidater sans expérience professionnelle ?",
    answer:
      "Oui. La formation en alternance est conçue pour des étudiants sans expérience préalable. Nous accompagnons les candidats dans leur recherche d'entreprise d'accueil grâce à notre réseau de 120+ partenaires.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">FAQ</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-4xl font-bold text-cream sm:text-5xl">
            Questions fréquentes
          </h2>
        </div>

        <div className="divide-y divide-navy-soft">
          {faqs.map((faq, i) => (
            <details key={i} className="group py-1">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-left">
                <span className="font-display text-lg font-semibold text-cream transition-colors group-open:text-gold">
                  {faq.question}
                </span>
                <span className="mt-1 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div className="pb-6 pt-1 text-sm leading-relaxed text-stone">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
