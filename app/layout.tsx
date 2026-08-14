import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CBT Atlas | Sistema Clínico de TCC",
  description: "Plataforma clínica profesional de Terapia Cognitivo-Conductual. Protocolos, fichas interactivas, casos clínicos y guía de decisión diagnóstica basados en evidencia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`h-full ${inter.variable} ${playfair.variable}`}>
      <body className="h-full antialiased">
        {children}
      </body>
    </html>
  );
}
