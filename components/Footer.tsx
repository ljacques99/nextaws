import Link from "next/link";

const navLinks = [
  { href: "#programme", label: "Programme" },
  { href: "#atouts", label: "Nos atouts" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Candidature" },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-soft bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-bold uppercase tracking-widest text-gold">
              MISEIA
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">
              Master en Ingénierie et Sciences de l'Actuariat.
              <br />
              Formant les actuaires d'exception depuis 1989.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-stone transition-colors hover:text-gold"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="text-stone transition-colors hover:text-gold"
                aria-label="Twitter / X"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-stone">
              <li>contact@miseia.fr</li>
              <li>+33 (0)1 23 45 67 89</li>
              <li className="leading-snug">
                12 rue de la Paix
                <br />
                75001 Paris, France
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-soft pt-8 sm:flex-row">
          <p className="text-xs text-stone">
            © {new Date().getFullYear()} MISEIA. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-stone transition-colors hover:text-gold">
              Mentions légales
            </Link>
            <Link href="#" className="text-xs text-stone transition-colors hover:text-gold">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
