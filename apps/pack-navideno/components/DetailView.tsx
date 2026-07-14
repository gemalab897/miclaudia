import Link from "next/link";
import type { Producto } from "@/lib/types";
import { costoTotal, margenGanancia } from "@/lib/types";
import PrintButton from "@/components/PrintButton";

const DIFICULTAD_CLASS: Record<string, string> = {
  Fácil: "badge-facil",
  Media: "badge-media",
  Difícil: "badge-dificil",
};

export default function DetailView({
  producto,
  backHref,
  backLabel,
}: {
  producto: Producto;
  backHref: string;
  backLabel: string;
}) {
  const costo = costoTotal(producto.materiales);
  const margen = margenGanancia(producto.precioSugerido, producto.materiales);

  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 pt-8">
      <Link href={backHref} className="no-print text-sm font-semibold text-[var(--verde)]/60 hover:text-[var(--rojo)]">
        ← {backLabel}
      </Link>

      <div className="festive-card mt-4 overflow-hidden rounded-3xl">
        <div
          className="relative flex flex-col items-center justify-center gap-2 px-6 py-12 text-center text-[var(--crema)]"
          style={{ background: "linear-gradient(135deg, var(--verde), var(--esmeralda))" }}
        >
          <span className="sparkle" style={{ top: "16%", left: "12%" }}>✦</span>
          <span className="sparkle" style={{ bottom: "18%", right: "14%", animationDelay: "1s" }}>✦</span>
          <span className="text-6xl">{producto.emoji}</span>
          <h1 className="font-festive text-4xl">{producto.nombre}</h1>
          {producto.subcategoria && (
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {producto.subcategoria}
            </span>
          )}
        </div>

        <div className="px-6 py-8 sm:px-10">
          <div className="flex flex-wrap gap-2">
            {producto.dificultad && (
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${DIFICULTAD_CLASS[producto.dificultad]}`}>
                Dificultad: {producto.dificultad}
              </span>
            )}
            {producto.tiempoEstimado && (
              <span className="rounded-full bg-[var(--dorado)]/15 px-3 py-1 text-xs font-semibold text-[#8a6d10]">
                ⏱ {producto.tiempoEstimado}
              </span>
            )}
          </div>

          <p className="mt-4 text-[var(--verde)]/80">{producto.descripcion}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <section>
              <h2 className="font-festive text-xl text-[var(--rojo)]">Materiales y costos</h2>
              <ul className="mt-3 divide-y divide-dashed divide-[var(--dorado)]/30 text-sm">
                {producto.materiales.map((m) => (
                  <li key={m.nombre} className="flex items-center justify-between py-2">
                    <span className="text-[var(--verde)]/80">{m.nombre}</span>
                    <span className="font-semibold text-[var(--verde)]">${m.costo.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex items-center justify-between border-t border-[var(--dorado)]/40 pt-2 text-sm font-bold">
                <span>Costo total</span>
                <span>${costo.toFixed(2)}</span>
              </div>
            </section>

            <section className="rounded-2xl bg-[var(--verde)]/5 p-5">
              <h2 className="font-festive text-xl text-[var(--rojo)]">Precio y ganancia</h2>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--verde)]/70">Precio sugerido</span>
                  <span className="text-lg font-bold text-[var(--rojo)]">${producto.precioSugerido.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--verde)]/70">Ganancia estimada</span>
                  <span className="font-semibold text-[var(--esmeralda)]">
                    ${(producto.precioSugerido - costo).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--verde)]/70">Margen</span>
                  <span className="rounded-full bg-[var(--esmeralda)]/15 px-2.5 py-0.5 font-semibold text-[var(--esmeralda)]">
                    {margen}%
                  </span>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-8">
            <h2 className="font-festive text-xl text-[var(--rojo)]">Pasos</h2>
            <ol className="mt-3 space-y-3">
              {producto.pasos.map((paso, i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--verde)]/85">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--dorado)] text-xs font-bold text-[var(--verde)]">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{paso}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-10">
            <PrintButton />
          </div>
        </div>
      </div>
    </main>
  );
}
