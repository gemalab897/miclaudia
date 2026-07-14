import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Pack Navideño | 3 Modelos de Negocio para Emprender",
  description: "Guía con 3 modelos de negocio listos para emprender en la temporada navideña.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="h-full antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
