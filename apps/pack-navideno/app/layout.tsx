import type { Metadata } from "next";
import { Mountains_of_Christmas, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SnowfallEffect from "@/components/SnowfallEffect";

const mountains = Mountains_of_Christmas({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pack Navideño | Pijamas, Crochet y Dulces para Emprender",
  description:
    "Guía premium con 3 modelos de negocio para la temporada navideña: pijamas familiares, patrones de crochet y recetas de dulces, con costos, precios y pasos detallados.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`h-full ${mountains.variable} ${quicksand.variable}`}>
      <body className="h-full antialiased">
        <SnowfallEffect />
        <Header />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
