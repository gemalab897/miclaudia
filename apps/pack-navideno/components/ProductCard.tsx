import Link from "next/link";
import type { Producto } from "@/lib/types";

const DIFICULTAD_CLASS: Record<string, string> = {
  Fácil: "badge-facil",
  Media: "badge-media",
  Difícil: "badge-dificil",
};

export default function ProductCard({ producto, href }: { producto: Producto; href: string }) {
  return (
    <Link
      href={href}
      className="festive-card animate-fade-up flex flex-col rounded-2xl p-5 shadow-sm"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--verde)]/8 text-2xl">
          {producto.emoji}
        </span>
        {producto.dificultad && (
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${DIFICULTAD_CLASS[producto.dificultad]}`}>
            {producto.dificultad}
          </span>
        )}
      </div>

      <h3 className="font-festive mt-3 text-xl text-[var(--verde)]">{producto.nombre}</h3>
      <p className="mt-1.5 line-clamp-2 text-sm text-[var(--verde)]/70">{producto.descripcion}</p>

      <div className="mt-4 flex items-center justify-between border-t border-dashed border-[var(--dorado)]/30 pt-3 text-sm">
        <span className="font-semibold text-[var(--rojo)]">${producto.precioSugerido.toFixed(2)}</span>
        <span className="text-xs text-[var(--verde)]/50">Ver detalle →</span>
      </div>
    </Link>
  );
}
