import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mabil-intl.vercel.app"),
  title: "Mabil International - Transformation de Manioc & Solutions Agro-Industrielles",
  description: "Mabil International à Tohoun (Togo) est leader de la transformation de manioc : gari premium, pâte de manioc, cossettes séchées et boutures certifiées en partenariat avec 127 coopératives.",
  keywords: [
    "Mabil International", "Transformation du manioc", "Togo", "Tohoun", "Production de gari", 
    "Pâte de manioc", "Cossettes de manioc", "Agriculture durable", "Coopératives agricoles", 
    "Boutures de manioc", "Agro-industrie Togo", "Autonomisation des femmes"
  ],
  authors: [{ name: "Mabil International SARL" }],
  openGraph: {
    title: "Mabil International - Valoriser le Manioc, Autonomiser les Communautés",
    description: "Acteur de référence de la filière manioc au Togo. Production de gari bio, pâte de manioc, cossettes et boutures certifiées en partenariat avec 127 coopératives.",
    url: "https://mabil-intl.vercel.app",
    siteName: "Mabil International",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Logo Mabil International",
      },
    ],
    locale: "fr_TG",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mabil International - Valoriser le Manioc, Autonomiser les Communautés",
    description: "Acteur de référence de la filière manioc au Togo. Production de gari bio, pâte de manioc, cossettes et boutures certifiées.",
    images: ["/images/logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-stone-900">
        {children}
      </body>
    </html>
  );
}
