import ProductCard from "@/components/ProductCard";
import { crochet, SUBCATEGORIAS_CROCHET } from "@/lib/data/crochet";

export const metadata = {
  title: "Crochet Navideño | Pack Navideño",
};

export default function CrochetPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-10">
      <div className="text-center">
        <span className="text-4xl">🧶</span>
        <h1 className="font-festive mt-2 text-4xl text-[var(--rojo)]">Crochet Navideño</h1>
        <p className="mx-auto mt-2 max-w-lg text-[var(--verde)]/70">
          25 patrones en 8 categorías, con materiales, costos, precio sugerido y pasos.
        </p>
      </div>

      <div className="mt-12 space-y-14">
        {SUBCATEGORIAS_CROCHET.map((sub) => {
          const items = crochet.filter((c) => c.subcategoria === sub);
          if (items.length === 0) return null;
          return (
            <section key={sub}>
              <div className="flex items-center gap-3">
                <h2 className="font-festive text-2xl text-[var(--verde)]">{sub}</h2>
                <span className="h-px flex-1 bg-[var(--dorado)]/30" />
                <span className="text-xs font-semibold text-[var(--verde)]/50">{items.length} patrones</span>
              </div>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProductCard key={p.slug} producto={p} href={`/crochet/${p.slug}`} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
