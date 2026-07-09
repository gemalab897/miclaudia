import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sistema de Atracción de Pacientes | Curso para Terapeutas",
  description:
    "Curso interactivo para terapeutas y psicólogos clínicos: construye tu propio sistema de atracción, conversión y agendamiento de pacientes con principios de marketing ético.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} h-full`}>
      <body className="h-full antialiased">
        <Sidebar />
        <main className="md:pl-[280px] min-h-screen">{children}</main>
      </body>
    </html>
  );
}
