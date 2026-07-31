import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SearchShortcut from "@/components/SearchShortcut";

export const metadata: Metadata = {
  title: "CBT Atlas | Herramienta Clínica TCC",
  description:
    "20 casos clínicos resueltos, protocolos TCC, fichas interactivas, calculadora de instrumentos y búsqueda global. Todo basado en evidencia científica.",
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
          <SearchShortcut />
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
