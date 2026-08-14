import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Progreso | CBT Atlas",
  description: "Seguimiento personal de casos, protocolos y fichas revisadas.",
};

export default function ProgresoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
