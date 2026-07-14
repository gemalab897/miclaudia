"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Producto, Dificultad } from "@/lib/types";

const FILTROS: (Dificultad | "Todas")[] = ["Todas", "Fácil", "Media", "Difícil"];

export default function DulcesGrid({ recetas }: { recetas: Producto[] }) {
  const [filtro, setFiltro] = useState<Dificultad | "Todas">("Todas");
  const visibles = filtro === "Todas" ? recetas : recetas.filter((r) => r.dificultad === filtro);

  return (
    <div>
      <div className="no-print mt-8 flex flex-wrap justify-center gap-2">
        {FILTROS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFiltro(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              filtro === f
                ? "bg-[var(--rojo)] text-[var(--crema)]"
                : "bg-[var(--verde)]/8 text-[var(--verde)]/70 hover:bg-[var(--verde)]/15"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((r) => (
          <ProductCard key={r.slug} producto={r} href={`/dulces/${r.slug}`} />
        ))}
      </div>
    </div>
  );
}
