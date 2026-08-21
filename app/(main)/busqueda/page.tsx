"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { fichas, Ficha } from "@/data/fichas";
import { casos, CasoClinico } from "@/data/casos";

// ---------------------------------------------------------------------------
// Protocols — hardcoded since there is no data file
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
    titulo: "Cognitive Restructuring",
    descripcion:
      "Central CBT technique for identifying, challenging, and modifying negative automatic thoughts and cognitive distortions.",
    categoria: "Cognitive Techniques",
  },
  {
    slug: "activacion-conductual",
    titulo: "Behavioral Activation",
    descripcion:
      "Protocol to increase engagement in positive activities and counter behavioral avoidance in depression.",
    categoria: "Behavioral Techniques",
  },
  {
    slug: "exposicion-graduada",
    titulo: "Graduated Exposure",
    descripcion:
      "Systematic procedure of progressive exposure to feared stimuli to reduce anxiety and phobic avoidance.",
    categoria: "Anxiety and Phobias",
  },
  {
    slug: "tcci-insomnio",
    titulo: "CBT-I for Insomnia",
    descripcion:
      "Cognitive-behavioral therapy specific to chronic insomnia, including sleep restriction and sleep hygiene.",
    categoria: "Sleep Disorders",
  },
  {
    slug: "protocolo-panico",
    titulo: "Panic Protocol",
    descripcion:
      "Structured intervention for panic disorder with or without agoraphobia using psychoeducation and interoceptive exposure.",
    categoria: "Anxiety and Phobias",
  },
  {
    slug: "primera-sesion",
    titulo: "First Session",
    descripcion:
      "Structured guide for the initial assessment session: therapeutic alliance, information gathering, and preliminary formulation.",
    categoria: "Assessment",
  },
  {
    slug: "prevencion-recaidas",
    titulo: "Relapse Prevention",
    descripcion:
      "Protocol to consolidate therapeutic gains, identify warning signs, and plan strategies for potential relapses.",
    categoria: "Maintenance",
  },
  {
    slug: "relajacion-respiracion",
    titulo: "Relaxation and Breathing",
    descripcion:
      "Progressive muscle relaxation and diaphragmatic breathing techniques for regulating physiological arousal.",
    categoria: "Behavioral Techniques",
  },
  {
    slug: "resolucion-problemas",
    titulo: "Problem Solving",
    descripcion:
      "Training in systematic problem solving to improve self-efficacy and reduce associated distress.",
    categoria: "Cognitive Techniques",
  },
  {
    slug: "mindfulness-tcc",
    titulo: "Mindfulness in CBT",
    descripcion:
      "Integration of mindfulness practices into cognitive-behavioral therapy for emotional regulation and relapse prevention.",
    categoria: "Third Wave",
  },
];

// ---------------------------------------------------------------------------
// Category badge colours
// ---------------------------------------------------------------------------
const categoryColors: Record<string, string> = {
  // Ficha categories (Spanish keys — matched from data files)
  "Evaluación Inicial": "bg-blue-100 text-blue-800",
  "Registro Conductual": "bg-purple-100 text-purple-800",
  "Depresión": "bg-indigo-100 text-indigo-800",
  "Ansiedad": "bg-amber-100 text-amber-800",
  // Protocol categories (English keys)
  "Anxiety and Phobias": "bg-amber-100 text-amber-800",
  "Cognitive Techniques": "bg-teal-100 text-teal-800",
  "Behavioral Techniques": "bg-green-100 text-green-800",
  "Sleep Disorders": "bg-violet-100 text-violet-800",
  "Assessment": "bg-blue-100 text-blue-800",
  "Maintenance": "bg-emerald-100 text-emerald-800",
  "Third Wave": "bg-rose-100 text-rose-800",
  // Caso types (Spanish keys — matched from data files)
  "Trastorno de Ansiedad": "bg-amber-100 text-amber-800",
  "Trastorno Depresivo": "bg-indigo-100 text-indigo-800",
  "Trastorno de Personalidad": "bg-red-100 text-red-800",
  "TOC": "bg-orange-100 text-orange-800",
  "TEPT": "bg-pink-100 text-pink-800",
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
    ficha: "Worksheet",
    caso: "Case",
    protocolo: "Protocol",
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
          title="Global Search"
          description="Search across worksheets, clinical cases, and CBT Atlas protocols"
          badge="Search"
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
            placeholder="Search worksheets, cases, protocols..."
            aria-label="Global search field"
            className="w-full rounded-2xl border border-[#e8edf4] bg-white py-4 pl-12 pr-12 text-base text-[#0f2744] placeholder:text-[#94a3b8] shadow-sm focus:border-[#10b981] focus:outline-none focus:ring-2 focus:ring-[#10b981]/30 transition-all duration-200"
          />

          {hasQuery && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
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
          Press{" "}
          <kbd className="inline-flex items-center rounded border border-[#e8edf4] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#64748b] shadow-sm">
            Esc
          </kbd>{" "}
          to clear the search
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
                Start typing to search...
              </p>
              <p className="mt-1 text-sm text-[#94a3b8]">
                Search across{" "}
                <span className="font-medium text-[#64748b]">
                  {fichas.length} worksheets
                </span>
                ,{" "}
                <span className="font-medium text-[#64748b]">
                  {casos.length} clinical cases
                </span>{" "}
                and{" "}
                <span className="font-medium text-[#64748b]">
                  {protocolos.length} protocols
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
                No results for{" "}
                <span className="text-[#0f2744]">"{query}"</span>
              </p>
              <p className="mt-1 text-sm text-[#94a3b8]">
                Try different terms or check your spelling
              </p>
            </div>
          )}

          {hasQuery && total > 0 && (
            <div className="space-y-10">
              {/* Total summary */}
              <p className="text-sm text-[#64748b]">
                <span className="font-semibold text-[#0f2744]">{total}</span>{" "}
                result{total !== 1 ? "s" : ""} for{" "}
                <span className="font-semibold text-[#0f2744]">"{query}"</span>
              </p>

              <GroupSection
                label="Worksheets"
                count={fichaResults.length}
                results={fichaResults}
                query={query}
                accentColor="bg-blue-500"
              />

              <GroupSection
                label="Clinical Cases"
                count={casoResults.length}
                results={casoResults}
                query={query}
                accentColor="bg-indigo-500"
              />

              <GroupSection
                label="Protocols"
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
