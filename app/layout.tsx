import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "CBT PRO+ | Herramienta Clínica TCC",
  description:
    "Plataforma clínica interactiva de Terapia Cognitivo-Conductual para psicólogos. Protocolos, fichas, casos clínicos y guía de decisión diagnóstica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="h-full bg-slate-50">
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
      </body>
    </html>
  );
}
