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
  metadataBase: new URL("https://mabilinternational.com"),
  title: "Mabil International - Sustainable Cassava & Agro-Industrial Solutions",
  description: "Based in Tohoun, Togo, Mabil International is a leader in cassava transformation, producing premium gari, cassava paste, dried chips, and certified cuttings in partnership with 127 cooperatives.",
  keywords: [
    "Mabil International", "Cassava transformation", "Togo", "Tohoun", "Gari production", 
    "Cassava paste", "Dried cassava chips", "Sustainable agriculture", "Agricultural cooperatives", 
    "Cassava cuttings", "Agro-industrial Togo", "Women empowerment agriculture"
  ],
  authors: [{ name: "Mabil International SARL" }],
  openGraph: {
    title: "Mabil International - Transforming Cassava. Empowering Communities.",
    description: "Leading agro-industrial company in Togo specializing in high-yield cassava cuttings, organic gari, paste, and sustainable agriculture cooperative support.",
    url: "https://mabilinternational.com",
    siteName: "Mabil International",
    images: [
      {
        url: "/images/hero_bg.png",
        width: 1200,
        height: 630,
        alt: "Mabil International Cassava Farm in Tohoun, Togo",
      },
    ],
    locale: "fr_TG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-stone-900">
        {children}
      </body>
    </html>
  );
}
