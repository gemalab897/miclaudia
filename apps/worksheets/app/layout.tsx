import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Fichas de Terapia | Kit Profesional para Psicólogos",
  description: "Fichas de terapia interactivas e imprimibles para TCC, DBT, Trauma, Ansiedad, Depresión, Parejas, Autoestima, Niños y Adolescentes, y más.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">
        <Navbar />
        <div className="pt-14">
          {children}
        </div>
      </body>
    </html>
  );
}
