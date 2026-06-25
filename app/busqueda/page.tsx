"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { fichas, Ficha } from "@/app/data/fichas";
import { casos, CasoClinico } from "@/app/data/casos";

// ---------------------------------------------------------------------------
// Protocolos — hardcoded since there is no data file
// ---------------------------------------------------------------------------
interface Protocolo {
  slug: string;
  titulo: string;
  descripcion: string;
  categoria: string;
}

const protocolos: Protocolo[] = [
  {
    slug: "reestructuracion-cognitiva",
    titulo: "Reestructuración Cognitiva",
    descripcion:
      "Técnica central de la TCC para identificar, cuestionar y modificar pensamientos automáticos negativos y distorsiones cognitivas.",
    categoria: "Técnicas Cognitivas",
  },
  {
    slug: "activacion-conductual",
    titulo: "Activación Conductual",
    descripcion:
      "Protocolo para aumentar la participación en actividades positivas y contrarrestar la evitación conductual en la depresión.",
    categoria: "Técnicas Conductuales",
  },
  {
    slug: "exposicion-graduada",
    titulo: "Exposición Graduada",
    descripcion:
      "Procedimiento sistemático de exposición progresiva a estímulos temidos para reducir la ansiedad y la evitación fóbica.",
    categoria: "Ansiedad y Fobias",
  },
  {
    slug: "tcci-insomnio",
    titulo: "TCC-I para el Insomnio",
    descripcion:
      "Terapia cognitivo-conductual específica para el insomnio crónico, incluyendo restricción de sueño e higiene del sueño.",
    categoria: "Trastornos del Sueño",
  },
  {
    slug: "protocolo-panico",
    titulo: "Protocolo para el Pánico",
    descripcion:
      "Intervención estructurada para el trastorno de pánico con o sin agorafobia mediante psicoeducación y exposición interoceptiva.",
    categoria: "Ansiedad y Fobias",
  },
  {
    slug: "primera-sesion",
    titulo: "Primera Sesión",
    descripcion:
      "Guía estructurada para la sesión de evaluación inicial: alianza terapéutica, recogida de información y formulación preliminar.",
    categoria: "Evaluación",
  },
  {
    slug: "prevencion-recaidas",
    titulo: "Prevención de Recaídas",
    descripcion:
      "Protocolo para consolidar ganancias terapéuticas, identificar señales de alerta y planificar estrategias ante posibles recaídas.",
    categoria: "Mantenimiento",
  },
  {
    slug: "relajacion-respiracion",
    titulo: "Relajación y Respiración",
    descripcion:
      "Técnicas de relajación muscular progresiva y respiración diafragmática para la regulación del arousal fisiológico.",
    categoria: "Técnicas Conductuales",
  },
  {
    slug: "resolucion-problemas",
    titulo: "Resolución de Problemas",
    descripcion:
      "Entrenamiento en resolución sistemática de problemas para mejorar la autoeficacia y reducir el malestar asociado.",
    categoria: "Técnicas Cognitivas",
  },
  {
    slug: "mindfulness-tcc",
    titulo: "Mindfulness en TCC",
    descripcion:
      "Integración de prácticas de atención plena en la terapia cognitivo-conductual para la regulación emocional y la prevención de recaídas.",
    categoria: "Tercera Generación",
  },
];

// ---------------------------------------------------------------------------
// Category badge colours
// ---------------------------------------------------------------------------
const categoryColors: Record<string, string> = {
  // Ficha categories (common ones — fallback handled below)
  "Evaluación Inicial": "bg-blue-100 text-blue-800",
  "Registro Conductual": "bg-purple-100 text-purple-800",
  Depresión: "bg-indigo-100 text-indigo-800",
  Ansiedad: "bg-amber-100 text-amber-800",
  "Ansiedad y Fobias": "bg-amber-100 text-amber-800",
  "Técnicas Cognitivas": "bg-teal-100 text-teal-800",
  "Técnicas Conductuales": "bg-green-100 text-green-800",
  "Trastornos del Sueño": "bg-violet-100 text-violet-800",
  Evaluación: "bg-blue-100 text-blue-800",
  Mantenimiento: "bg-emerald-100 text-emerald-800",
  "Tercera Generación": "bg-rose-100 text-rose-800",
  // Caso types
  "Trastorno de Ansiedad": "bg-amber-100 text-amber-800",
  "Trastorno Depresivo": "bg-indigo-100 text-indigo-800",
  "Trastorno de Personalidad": "bg-red-100 text-red-800",
  TOC: "bg-orange-100 text-orange-800",
  TEPT: "bg-pink-100 text-pink-800",
};

function badgeClass(category: string): string {
  return (
    categoryColors[category] ??
    "bg-slate-100 text-slate-700"
  );
}

// ---------------------------------------------------------------------------
// Text highlight helper
// ---------------------------------------------------------------------------
function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={i}
        className="bg-emerald-200 text-emerald-900 rounded-sm px-0.5"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

// ---------------------------------------------------------------------------
// Normalise text for matching (accent-insensitive, lower-case)
// ---------------------------------------------------------------------------
function normalise(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function matches(haystack: string, needle: string): boolean {
  return normalise(haystack).includes(normalise(needle));
}

// ---------------------------------------------------------------------------
// Result types
// ---------------------------------------------------------------------------
interface FichaResult {
  type: "ficha";
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  href: string;
}

interface CasoResult {
  type: "caso";
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  href: string;
}

interface ProtocoloResult {
  type: "protocolo";
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  href: string;
}

type SearchResult = FichaResult | CasoResult | ProtocoloResult;

// ---------------------------------------------------------------------------
// Search logic
// ---------------------------------------------------------------------------
function search(query: string): {
  fichaResults: FichaResult[];
  casoResults: CasoResult[];
  protocoloResults: ProtocoloResult[];
} {
  const q = query.trim();

  if (!q) {
    return { fichaResults: [], casoResults: [], protocoloResults: [] };
  }

  const fichaResults: FichaResult[] = fichas
    .filter(
      (f: Ficha) =>
        matches(f.titulo, q) ||
        matches(f.descripcion, q) ||
        matches(f.categoria, q)
    )
    .map((f: Ficha) => ({
      type: "ficha",
      id: f.id,
      titulo: f.titulo,
      descripcion: f.descripcion,
      categoria: f.categoria,
      href: `/fichas/${f.id}`,
    }));

  const casoResults: CasoResult[] = casos
    .filter(
      (c: CasoClinico) =>
        matches(c.titulo, q) ||
        matches(c.resumen, q) ||
        matches(c.diagnostico, q) ||
        matches(c.paciente, q)
    )
    .map((c: CasoClinico) => ({
      type: "caso",
      id: c.id,
      titulo: c.titulo,
      descripcion: c.resumen,
      categoria: c.diagnostico,
      href: `/casos/${c.id}`,
    }));

  const protocoloResults: ProtocoloResult[] = protocolos
    .filter(
      (p: Protocolo) =>
        matches(p.titulo, q) ||
        matches(p.descripcion, q) ||
        matches(p.categoria, q)
    )
    .map((p: Protocolo) => ({
      type: "protocolo",
      id: p.slug,
      titulo: p.titulo,
      descripcion: p.descripcion,
      categoria: p.categoria,
      href: `/protocolos/${p.slug}`,
    }));

  return { fichaResults, casoResults, protocoloResults };
}

// ---------------------------------------------------------------------------
// Result Card
// ---------------------------------------------------------------------------
interface ResultCardProps {
  result: SearchResult;
  query: string;
}

function ResultCard({ result, query }: ResultCardProps) {
  const typeLabel: Record<string, string> = {
    ficha: "Ficha",
    caso: "Caso",
    protocolo: "Protocolo",
  };

  const typeAccent: Record<string, string> = {
    ficha: "border-l-blue-500",
    caso: "border-l-indigo-500",
    protocolo: "border-l-emerald-500",
  };

  return (
    <Link href={result.href} className="block group">
      <div
        className={`bg-white border border-[#e8edf4] border-l-4 ${typeAccent[result.type]} rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
      >
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeClass(result.categoria)}`}
            >
              {result.categoria}
            </span>
            <span className="text-xs text-[#94a3b8] font-medium uppercase tracking-wide">
              {typeLabel[result.type]}
            </span>
          </div>
        </div>

        <h3 className="mt-2 text-base font-semibold text-[#0f2744] group-hover:text-[#10b981] transition-colors duration-150 leading-snug">
          {highlight(result.titulo, query)}
        </h3>

        <p className="mt-1 text-sm text-[#64748b] line-clamp-2 leading-relaxed">
          {highlight(result.descripcion, query)}
        </p>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Group Section
// ---------------------------------------------------------------------------
interface GroupSectionProps {
  label: string;
  count: number;
  results: SearchResult[];
  query: string;
  accentColor: string;
}

function GroupSection({
  label,
  count,
  results,
  query,
  accentColor,
}: GroupSectionProps) {
  if (results.length === 0) return null;

  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-lg font-bold text-[#0f2744]">{label}</h2>
        <span
          className={`text-xs font-bold px-2.5 py-0.5 rounded-full text-white ${accentColor}`}
        >
          {count}
        </span>
        <div className="flex-1 h-px bg-[#e8edf4]" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((r) => (
          <ResultCard key={`${r.type}-${r.id}`} result={r} query={query} />
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function BusquedaPage() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Keyboard: Escape clears
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setQuery("");
      inputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const { fichaResults, casoResults, protocoloResults } = search(query);
  const total = fichaResults.length + casoResults.length + protocoloResults.length;
  const hasQuery = query.trim().length > 0;

  return (
    <div className="min-h-screen bg-[#f6f8fb]">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader
          title="Búsqueda Global"
          description="Busca en fichas, casos clínicos y protocolos de CBT PRO+"
          badge="Búsqueda"
          badgeColor="bg-[#10b981]"
        />

        {/* Search input */}
        <div className="mt-8 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <svg
              className="h-5 w-5 text-[#94a3b8]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z"
              />
            </svg>
          </div>

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar fichas, casos, protocolos..."
            aria-label="Campo de búsqueda global"
            className="w-full rounded-2xl border border-[#e8edf4] bg-white py-4 pl-12 pr-12 text-base text-[#0f2744] placeholder:text-[#94a3b8] shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-2 focus:ring-[#10b981]/30 transition-all duration-200"
          />

          {hasQuery && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              aria-label="Limpiar búsqueda"
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#94a3b8] hover:text-[#0f2744] transition-colors duration-150"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Keyboard hint */}
        <p className="mt-2 text-xs text-[#94a3b8] pl-1">
          Presiona{" "}
          <kbd className="inline-flex items-center rounded border border-[#e8edf4] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#64748b] shadow-sm">
            Esc
          </kbd>{" "}
          para limpiar la búsqueda
        </p>

        {/* Results / empty states */}
        <div className="mt-8">
          {!hasQuery && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[#e8edf4] shadow-sm">
                <svg
                  className="h-8 w-8 text-[#94a3b8]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-[#64748b]">
                Escribe para buscar...
              </p>
              <p className="mt-1 text-sm text-[#94a3b8]">
                Busca en{" "}
                <span className="font-medium text-[#64748b]">
                  {fichas.length} fichas
                </span>
                ,{" "}
                <span className="font-medium text-[#64748b]">
                  {casos.length} casos clínicos
                </span>{" "}
                y{" "}
                <span className="font-medium text-[#64748b]">
                  {protocolos.length} protocolos
                </span>
              </p>
            </div>
          )}

          {hasQuery && total === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[#e8edf4] shadow-sm">
                <svg
                  className="h-8 w-8 text-[#94a3b8]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-[#64748b]">
                Sin resultados para{" "}
                <span className="text-[#0f2744]">«{query}»</span>
              </p>
              <p className="mt-1 text-sm text-[#94a3b8]">
                Prueba con términos diferentes o revisa la ortografía
              </p>
            </div>
          )}

          {hasQuery && total > 0 && (
            <div className="space-y-10">
              {/* Total summary */}
              <p className="text-sm text-[#64748b]">
                <span className="font-semibold text-[#0f2744]">{total}</span>{" "}
                resultado{total !== 1 ? "s" : ""} para{" "}
                <span className="font-semibold text-[#0f2744]">«{query}»</span>
              </p>

              <GroupSection
                label="Fichas"
                count={fichaResults.length}
                results={fichaResults}
                query={query}
                accentColor="bg-blue-500"
              />

              <GroupSection
                label="Casos Clínicos"
                count={casoResults.length}
                results={casoResults}
                query={query}
                accentColor="bg-indigo-500"
              />

              <GroupSection
                label="Protocolos"
                count={protocoloResults.length}
                results={protocoloResults}
                query={query}
                accentColor="bg-emerald-500"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
