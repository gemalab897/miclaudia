import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import { pijamas } from "@/lib/data/pijamas";
import { crochet } from "@/lib/data/crochet";
import { dulces } from "@/lib/data/dulces";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24">
      <section className="animate-fade-up py-16 text-center sm:py-24">
        <span className="text-4xl">✦ 🎄 ✦</span>
        <h1 className="font-festive mt-4 text-5xl text-[var(--verde)] sm:text-6xl">
          <span className="gold-text">Pack Navideño</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--verde)]/75">
          Todo lo que necesitas para emprender desde casa esta temporada: 3 modelos de negocio con
          costos, precios y pasos detallados, más un plan mes a mes desde septiembre hasta
          diciembre para llegar lista a vender.
        </p>
        <Link
          href="/plan"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--rojo)] px-6 py-3 text-sm font-semibold text-[var(--crema)] shadow-lg transition-transform hover:scale-105"
        >
          📅 Ver tu plan de 4 meses
        </Link>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        <CategoryCard
          href="/pijamas"
          emoji="🧦"
          titulo="Pijamas Navideñas"
          descripcion="5 modelos familiares listos para coser y vender por set."
          cantidad={`${pijamas.length} modelos`}
          accent="linear-gradient(135deg, var(--rojo), var(--rojo-oscuro))"
        />
        <CategoryCard
          href="/crochet"
          emoji="🧶"
          titulo="Crochet Navideño"
          descripcion="25 patrones en 8 categorías: amigurumis, adornos, esferas y más."
          cantidad={`${crochet.length} patrones`}
          accent="linear-gradient(135deg, var(--esmeralda), var(--verde))"
        />
        <CategoryCard
          href="/dulces"
          emoji="🍬"
          titulo="Dulces Navideños"
          descripcion="20 recetas con dificultad, ingredientes, costos y margen."
          cantidad={`${dulces.length} recetas`}
          accent="linear-gradient(135deg, var(--dorado), #a97e15)"
        />
      </section>
    </main>
  );
}
