export type Material = {
  nombre: string;
  costo: number;
};

export type Dificultad = "Fácil" | "Media" | "Difícil";

export type Producto = {
  slug: string;
  nombre: string;
  emoji: string;
  categoria: "pijamas" | "crochet" | "dulces";
  subcategoria?: string;
  descripcion: string;
  dificultad?: Dificultad;
  tiempoEstimado?: string;
  materiales: Material[];
  precioSugerido: number;
  pasos: string[];
};

export function costoTotal(materiales: Material[]): number {
  return materiales.reduce((sum, m) => sum + m.costo, 0);
}

export function margenGanancia(precioSugerido: number, materiales: Material[]): number {
  const costo = costoTotal(materiales);
  if (precioSugerido <= 0) return 0;
  return Math.round(((precioSugerido - costo) / precioSugerido) * 100);
}
