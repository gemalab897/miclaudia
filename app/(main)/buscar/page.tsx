"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { casos } from "@/data/casos";
import { protocolos } from "@/data/protocolos";
import { fichas } from "@/data/fichas";

type Category = "todo" | "casos" | "protocolos" | "fichas";

interface Result {
  type: "caso" | "protocolo" | "ficha";
  id: string;
  href: string;
  titulo: string;
  subtitulo: string;
  tag: string;
  tagColor: string;
}

const AREA_COLORS: Record<string, string> = {
  "Depresión": "#2563eb",
  "Ansiedad": "#d97706",
  "TOC": "#dc2626",
  "Trauma": "#475569",
  "Fobia": "#7c3aed",
  "Insomnio": "#0f766e",
  "Personalidad": "#a21caf",
  "Alimentación": "#db2777",
  "Adicciones": "#b45309",
  "Dolor": "#78716c",
  "Duelo": "#1d4ed8",
};

function match(text: string, query: string) {
  return text.toLowerCase().includes(query.toLowerCase());
}

function buildResults(query: string, category: Category): Result[] {
  const q = query.trim();
  if (!q) return [];

  const results: Result[] = [];

  if (category === "todo" || category === "casos") {
    for (const c of casos) {
      const tecnicas = c.sessions.flatMap((s) => s.tecnicas).join(" ");
      const objetivos = c.objectivesTerapeuticos.join(" ");
      const haystack = [c.titulo, c.diagnostico, c.resumen, c.patient, tecnicas, objetivos].join(" ");
      if (match(haystack, q)) {
        results.push({
          type: "caso",
          id: c.id,
          href: `/casos/${c.id}`,
          titulo: c.titulo,
          subtitulo: `${c.diagnostico.split("(")[0].trim()} · ${c.patient} · ${c.totalSessions} sessions`,
          tag: "Clinical Case",
          tagColor: "#dc2626",
        });
      }
    }
  }

  if (category === "todo" || category === "protocolos") {
    for (const p of protocolos) {
      const haystack = [p.titulo, p.descripcion, p.indications.join(" "), p.steps.map((x) => x.titulo).join(" ")].join(" ");
      if (match(haystack, q)) {
        results.push({
          type: "protocolo",
          id: p.slug,
          href: `/protocolos/${p.slug}`,
          titulo: p.titulo,
          subtitulo: `${p.sessions} · ${p.indications.slice(0, 2).join(", ")}`,
          tag: "Protocol",
          tagColor: "#7c3aed",
        });
      }
    }
  }

  if (category === "todo" || category === "fichas") {
    for (const f of fichas) {
      const haystack = [f.titulo, f.descripcion, f.categoria, f.instructions].join(" ");
      if (match(haystack, q)) {
        results.push({
          type: "ficha",
          id: f.id,
          href: `/fichas/${f.id}`,
          titulo: f.titulo,
          subtitulo: `${f.categoria} · ${f.descripcion.slice(0, 80)}…`,
          tag: "Worksheet",
          tagColor: "#0891b2",
        });
      }
    }
  }

  return results;
}

const CATEGORIES: { id: Category; label: string; count: (r: Result[]) => number }[] = [
  { id: "todo",       label: "All",         count: (r) => r.length },
  { id: "casos",      label: "Cases",       count: (r) => r.filter((x) => x.type === "caso").length },
  { id: "protocolos", label: "Protocols",   count: (r) => r.filter((x) => x.type === "protocolo").length },
  { id: "fichas",     label: "Worksheets",  count: (r) => r.filter((x) => x.type === "ficha").length },
];

const TYPE_ICON: Record<string, string> = {
  caso: "👤",
  protocolo: "📋",
  ficha: "📄",
};

const SUGGESTIONS = ["anxiety", "exposure", "depression", "OCD", "record", "Beck", "activation", "restructuring"];

export default function BuscarPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("todo");

  const allResults = useMemo(() => buildResults(query, "todo"), [query]);
  const results = useMemo(() => buildResults(query, category), [query, category]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1e3a5f] mb-1">Search</h1>
        <p className="text-slate-500 text-sm">Search across clinical cases, protocols, and worksheets.</p>
      </div>

      {/* Search input */}
      <div className="relative mb-6">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search techniques, diagnoses, protocols…"
          className="w-full pl-12 pr-10 py-4 text-base border border-slate-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-colors shadow-sm"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Empty state — suggestions */}
      {!query && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Common searches</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="text-sm px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {query && (
        <>
          {/* Category tabs */}
          <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
            {CATEGORIES.map((cat) => {
              const count = cat.count(allResults);
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`flex-shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                    category === cat.id
                      ? "bg-[#1e3a5f] text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {cat.label}
                  {count > 0 && (
                    <span className={`ml-1.5 text-xs font-bold ${category === cat.id ? "text-white/70" : "text-slate-400"}`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-sm font-medium">No results for <span className="font-bold text-slate-600">"{query}"</span></p>
              <p className="text-xs mt-1">Try a different term or change the category</p>
            </div>
          ) : (
            <div className="space-y-2">
              {results.map((r) => (
                <Link
                  key={`${r.type}-${r.id}`}
                  href={r.href}
                  className="flex items-start gap-4 bg-white border border-slate-100 rounded-2xl p-4 hover:border-slate-200 hover:shadow-sm transition-all group"
                >
                  <span className="text-xl mt-0.5 flex-shrink-0">{TYPE_ICON[r.type]}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white flex-shrink-0"
                        style={{ background: r.tagColor }}
                      >
                        {r.tag}
                      </span>
                    </div>
                    <p className="font-semibold text-[#1e3a5f] text-sm group-hover:text-violet-700 transition-colors truncate">
                      {r.titulo}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5 truncate">{r.subtitulo}</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-slate-500 flex-shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
