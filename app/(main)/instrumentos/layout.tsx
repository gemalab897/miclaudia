import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Instrumentos | CBT Atlas",
  description: "Introduce la puntuación de PHQ-9, GAD-7, BAI, BDI-II y más para obtener interpretación clínica inmediata.",
};

export default function InstrumentosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
