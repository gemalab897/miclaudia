import Link from "next/link";
import { pijamas } from "@/lib/data/pijamas";
import { crochet } from "@/lib/data/crochet";
import { dulces } from "@/lib/data/dulces";
import { costoTotal } from "@/lib/types";
import type { Producto } from "@/lib/types";

export const metadata = {
  title: "Tu Plan de 4 Meses | Pack Navideño",
  description: "Calendario de septiembre a diciembre para preparar y vender tu emprendimiento navideño.",
};

function formatUSD(valor: number) {
  return valor < 1 ? `$${valor.toFixed(2)}` : `$${valor.toFixed(0)}`;
}

function rangoCapital(items: Producto[]) {
  const costos = items.map((i) => costoTotal(i.materiales));
  const min = Math.min(...costos);
  const max = Math.max(...costos);
  return `${formatUSD(min)} – ${formatUSD(max)} por pieza`;
}

const CATEGORIAS = [
  {
    href: "/pijamas",
    emoji: "🧦",
    nombre: "Pijamas",
    accent: "var(--rojo)",
    capital: rangoCapital(pijamas),
    tiempo: "6-9 horas por set",
    perfil: "Ideal si ya sabes coser o tienes máquina de coser. Requiere más inversión inicial en tela.",
    ciclo: "Producción por encargo, pocas piezas de alto valor.",
  },
  {
    href: "/crochet",
    emoji: "🧶",
    nombre: "Crochet",
    accent: "var(--esmeralda)",
    capital: rangoCapital(crochet),
    tiempo: "20 min – 16 horas según pieza",
    perfil: "Ideal si sabes tejer y quieres empezar con poco capital. Se puede avanzar en ratos libres.",
    ciclo: "Muchas piezas pequeñas + algunas grandes por encargo (calendarios, centros de mesa).",
  },
  {
    href: "/dulces",
    emoji: "🍬",
    nombre: "Dulces",
    accent: "var(--dorado)",
    capital: rangoCapital(dulces),
    tiempo: "30 min – 10 horas según receta",
    perfil: "Ideal si te gusta cocinar y quieres resultados rápidos. Ciclo de venta más corto y repetible.",
    ciclo: "Se vende cerca de la fecha de consumo; permite tandas frecuentes en noviembre-diciembre.",
  },
];

const MESES = [
  {
    mes: "Septiembre",
    emoji: "🍂",
    titulo: "Elige y practica",
    puntos: [
      "Elige tu categoría (o combina 2) según tu tiempo y capital disponible.",
      "Practica 1-2 modelos del catálogo hasta dominar la técnica.",
      "Calcula tu capital inicial y empieza a comprar materiales base.",
      "Define tu nombre de marca y crea tu cuenta de Instagram/WhatsApp Business.",
    ],
  },
  {
    mes: "Octubre",
    emoji: "🎃",
    titulo: "Produce tu primer lote y define precios",
    puntos: [
      "Produce tu primer lote de piezas usando el precio sugerido de cada ficha como base.",
      "Ajusta precios según el costo real de tus materiales locales.",
      "Toma fotos de buena calidad de cada pieza terminada.",
      "Identifica 2-3 canales de venta: redes sociales, ferias/bazares, WhatsApp a contactos.",
    ],
  },
  {
    mes: "Noviembre",
    emoji: "🎄",
    titulo: "Producción en volumen y preventa",
    puntos: [
      "Aumenta la producción según la demanda que empieces a recibir.",
      "Lanza una campaña de preventa con fecha límite de pedidos.",
      "Publica contenido regular mostrando el proceso (esto genera confianza y ventas).",
      "Organiza un calendario de entregas para no saturarte en diciembre.",
    ],
  },
  {
    mes: "Diciembre",
    emoji: "🎁",
    titulo: "Entrega y cierre de temporada",
    puntos: [
      "Cumple las entregas programadas y prioriza pedidos con fecha más próxima.",
      "Aprovecha la última semana para ventas de última hora (piezas ya hechas).",
      "Registra tus ganancias totales y qué modelos vendieron mejor.",
      "Decide cuánto reinvertir en materiales para el próximo año o temporada.",
    ],
  },
];

export default function PlanPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-24 pt-10">
      <div className="text-center">
        <span className="text-4xl">📅</span>
        <h1 className="font-festive mt-2 text-4xl text-[var(--rojo)]">Tu Plan de 4 Meses</h1>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--verde)]/70">
          Si empiezas en septiembre, llegas a diciembre con tu emprendimiento listo, tus precios
          definidos y clientes esperando su pedido. Así se ve el camino, mes a mes.
        </p>
      </div>

      <section className="mt-14">
        <h2 className="font-festive text-center text-2xl text-[var(--verde)]">
          ¿Por dónde empezar?
        </h2>
        <p className="mx-auto mt-1 max-w-xl text-center text-sm text-[var(--verde)]/60">
          Compara las 3 categorías según tu tiempo y capital disponible.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {CATEGORIAS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="festive-card flex flex-col rounded-2xl p-6"
              style={{ borderTopColor: c.accent, borderTopWidth: 4 }}
            >
              <span className="text-3xl">{c.emoji}</span>
              <h3 className="font-festive mt-2 text-xl text-[var(--verde)]">{c.nombre}</h3>
              <dl className="mt-3 space-y-1.5 text-sm">
                <div className="flex justify-between gap-2">
                  <dt className="text-[var(--verde)]/55">Capital inicial</dt>
                  <dd className="text-right font-semibold text-[var(--verde)]">{c.capital}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-[var(--verde)]/55">Tiempo</dt>
                  <dd className="text-right font-semibold text-[var(--verde)]">{c.tiempo}</dd>
                </div>
              </dl>
              <p className="mt-3 text-sm text-[var(--verde)]/70">{c.perfil}</p>
              <p className="mt-2 text-xs text-[var(--verde)]/50">{c.ciclo}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-festive text-center text-2xl text-[var(--verde)]">
          Calendario mes a mes
        </h2>

        <div className="relative mt-8">
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-[var(--dorado)]/30 sm:left-1/2" />
          <ol className="space-y-8">
            {MESES.map((m, i) => (
              <li key={m.mes} className={`relative flex flex-col gap-4 sm:flex-row ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                <div className="absolute left-4 top-1 -translate-x-1/2 sm:left-1/2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--verde)] text-sm text-[var(--dorado-claro)] shadow">
                    {m.emoji}
                  </span>
                </div>

                <div className={`w-full pl-12 sm:w-1/2 sm:pl-0 ${i % 2 === 1 ? "sm:pl-10" : "sm:pr-10"}`}>
                  <div className="festive-card rounded-2xl p-5">
                    <span className="text-xs font-bold uppercase tracking-wide text-[var(--dorado)]">
                      {m.mes}
                    </span>
                    <h3 className="font-festive mt-1 text-xl text-[var(--rojo)]">{m.titulo}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-[var(--verde)]/75">
                      {m.puntos.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-[var(--dorado)]">✦</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
