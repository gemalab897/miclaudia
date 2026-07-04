import type { Metadata } from "next";
import CuadernoClient from "./client";

export const metadata: Metadata = {
  title: "Cuaderno de Regulación Emocional — Fichas Terapéuticas",
};

export default function CuadernoRegulacionEmocional() {
  return <CuadernoClient />;
}
