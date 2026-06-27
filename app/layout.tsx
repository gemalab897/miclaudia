import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SessionTimer from "@/components/SessionTimer";

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
  title: "CBT PRO+ | Sistema Clínico de TCC",
  description: "Plataforma clínica profesional de Terapia Cognitivo-Conductual. Protocolos, fichas interactivas, casos clínicos y guía de decisión diagnóstica basados en evidencia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`h-full ${inter.variable} ${playfair.variable}`}>
      <body className="h-full bg-slate-50 font-sans antialiased">
        <div className="flex h-full">
          <div className="sidebar-wrapper no-print">
            <Sidebar />
          </div>
          <main className="flex-1 min-h-screen overflow-auto">
            <div className="pt-16 lg:pt-0">
              {children}
            </div>
          </main>
        </div>
        <SessionTimer />
      </body>
    </html>
  );
}
