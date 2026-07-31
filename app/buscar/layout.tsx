import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Búsqueda | CBT Atlas",
  description: "Busca en casos clínicos, protocolos y fichas de la plataforma.",
};

export default function BuscarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
