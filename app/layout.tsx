import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MISEIA — Master en Ingénierie et Sciences de l'Actuariat",
  description:
    "Formez-vous aux métiers de l'actuariat avec le Master MISEIA. Programme d'excellence reconnu par l'Institut des Actuaires, 95 % d'insertion professionnelle.",
  keywords: ["actuariat", "formation", "master", "assurance", "finance", "MISEIA", "actuaire"],
  openGraph: {
    title: "MISEIA — Formation en Actuariat",
    description: "Le master de référence pour devenir actuaire en France.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
