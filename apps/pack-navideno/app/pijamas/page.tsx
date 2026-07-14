import ProductCard from "@/components/ProductCard";
import { pijamas } from "@/lib/data/pijamas";

export const metadata = {
  title: "Pijamas Navideñas | Pack Navideño",
};

export default function PijamasPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-10">
      <div className="text-center">
        <span className="text-4xl">🧦</span>
        <h1 className="font-festive mt-2 text-4xl text-[var(--rojo)]">Pijamas Navideñas</h1>
        <p className="mx-auto mt-2 max-w-lg text-[var(--verde)]/70">
          5 modelos familiares con materiales, costos, precio sugerido y pasos de confección.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pijamas.map((p) => (
          <ProductCard key={p.slug} producto={p} href={`/pijamas/${p.slug}`} />
        ))}
      </div>
    </main>
  );
}
