"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { casos } from "@/data/casos";
import { protocolos } from "@/data/protocolos";
import { fichas } from "@/data/fichas";

const STORAGE_KEY = "cbt-atlas-progreso";

interface ProgresoData {
  casos: Record<string, boolean>;
  protocolos: Record<string, boolean>;
  fichas: Record<string, boolean>;
}

const empty = (): ProgresoData => ({ casos: {}, protocolos: {}, fichas: {} });

function load(): ProgresoData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : empty();
  } catch {
    return empty();
  }
}

function save(data: ProgresoData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function pct(done: number, total: number) {
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

function ProgressRing({ value, color, size = 64 }: { value: number; color: string; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#f1f5f9" strokeWidth={6} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={6}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: "stroke-dasharray 0.5s ease" }}
      />
    </svg>
  );
}

type Tab = "casos" | "protocolos" | "fichas";

const DIAG_ACCENT: Record<string, string> = {
  "ansiedad-generalizada":  "#d97706",
  "depresion-mayor":        "#2563eb",
  "toc":                    "#dc2626",
  "fobia-social":           "#7c3aed",
  "panico":                 "#ea580c",
  "insomnio":               "#0f766e",
  "ira":                    "#e11d48",
  "tept":                   "#475569",
  "ansiedad-salud":         "#ca8a04",
  "depresion-adulto-mayor": "#4338ca",
  "depresion-adolescente":  "#0284c7",
  "bulimia-nerviosa":       "#db2777",
  "dependencia-alcohol":    "#b45309",
  "tlp-borderline":         "#a21caf",
  "dolor-cronico":          "#78716c",
  "duelo-complicado":       "#1d4ed8",
  "fobia-especifica-vuelo": "#0891b2",
  "tept-abuso":             "#b91c1c",
  "depresion-jubilacion":   "#1e40af",
  "panico-agorafobia":      "#c2410c",
};

export default function ProgresoPage() {
  const [data, setData] = useState<ProgresoData>(empty());
  const [tab, setTab] = useState<Tab>("casos");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setData(load());
    setMounted(true);
  }, []);

  const toggle = (section: keyof ProgresoData, id: string) => {
    setData((prev) => {
      const next = { ...prev, [section]: { ...prev[section], [id]: !prev[section][id] } };
      save(next);
      return next;
    });
  };

  const resetAll = () => {
    const d = empty();
    save(d);
    setData(d);
  };

  if (!mounted) return null;

  const casosCount = casos.filter((c) => data.casos[c.id]).length;
  const protocolosCount = protocolos.filter((p) => data.protocolos[p.slug]).length;
  const fichasCount = fichas.filter((f) => data.fichas[f.id]).length;
  const totalDone = casosCount + protocolosCount + fichasCount;
  const totalAll = casos.length + protocolos.length + fichas.length;

  const TABS: { id: Tab; label: string; done: number; total: number; color: string }[] = [
    { id: "casos",      label: "Clinical Cases", done: casosCount,      total: casos.length,      color: "#dc2626" },
    { id: "protocolos", label: "Protocols",       done: protocolosCount, total: protocolos.length, color: "#7c3aed" },
    { id: "fichas",     label: "Worksheets",      done: fichasCount,     total: fichas.length,     color: "#0891b2" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f] mb-1">My Progress</h1>
          <p className="text-slate-500 text-sm">Check off the cases, protocols, and worksheets you have reviewed.</p>
        </div>
        <button onClick={resetAll} className="text-xs text-slate-400 hover:text-slate-600 transition-colors mt-1">
          Reset all
        </button>
      </div>

      {/* Overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Global */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <ProgressRing value={pct(totalDone, totalAll)} color="#1e3a5f" size={64} />
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#1e3a5f]">
              {pct(totalDone, totalAll)}%
            </span>
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Total</p>
            <p className="font-bold text-[#1e3a5f]">{totalDone}<span className="text-slate-400 font-normal text-sm">/{totalAll}</span></p>
          </div>
        </div>

        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`bg-white rounded-2xl border p-5 flex items-center gap-4 text-left transition-all ${
              tab === t.id ? "border-slate-300 shadow-sm" : "border-slate-100 hover:border-slate-200"
            }`}
          >
            <div className="relative flex-shrink-0">
              <ProgressRing value={pct(t.done, t.total)} color={t.color} size={56} />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold" style={{ color: t.color }}>
                {pct(t.done, t.total)}%
              </span>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">{t.label}</p>
              <p className="font-bold text-[#1e3a5f]">{t.done}<span className="text-slate-400 font-normal text-sm">/{t.total}</span></p>
            </div>
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === "casos" && (
        <div className="space-y-2">
          {casos.map((c, i) => {
            const done = !!data.casos[c.id];
            const accent = DIAG_ACCENT[c.id] ?? "#64748b";
            return (
              <div
                key={c.id}
                className={`flex items-center gap-4 bg-white rounded-2xl border px-5 py-4 transition-all ${
                  done ? "border-slate-100 opacity-70" : "border-slate-100"
                }`}
              >
                <button
                  onClick={() => toggle("casos", c.id)}
                  className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all"
                  style={done ? { background: accent, borderColor: accent } : { borderColor: "#cbd5e1" }}
                >
                  {done && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <span className="text-xs text-slate-400 w-5 flex-shrink-0 font-semibold">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold truncate ${done ? "line-through text-slate-400" : "text-[#1e3a5f]"}`}>
                    {c.titulo}
                  </p>
                  <p className="text-xs text-slate-400 truncate">{c.diagnostico.split("(")[0].trim()} · {c.totalSesiones} sessions</p>
                </div>
                <Link
                  href={`/casos/${c.id}`}
                  className="flex-shrink-0 text-slate-300 hover:text-slate-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      )}

      {tab === "protocolos" && (
        <div className="space-y-2">
          {protocolos.map((p) => {
            const done = !!data.protocolos[p.slug];
            return (
              <div
                key={p.slug}
                className="flex items-center gap-4 bg-white rounded-2xl border border-slate-100 px-5 py-4"
              >
                <button
                  onClick={() => toggle("protocolos", p.slug)}
                  className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all"
                  style={done ? { background: "#7c3aed", borderColor: "#7c3aed" } : { borderColor: "#cbd5e1" }}
                >
                  {done && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold truncate ${done ? "line-through text-slate-400" : "text-[#1e3a5f]"}`}>
                    {p.titulo}
                  </p>
                  <p className="text-xs text-slate-400 truncate">{p.sesiones}</p>
                </div>
                <Link href={`/protocolos/${p.slug}`} className="flex-shrink-0 text-slate-300 hover:text-slate-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      )}

      {tab === "fichas" && (
        <div className="space-y-2">
          {fichas.map((f) => {
            const done = !!data.fichas[f.id];
            return (
              <div
                key={f.id}
                className="flex items-center gap-4 bg-white rounded-2xl border border-slate-100 px-5 py-4"
              >
                <button
                  onClick={() => toggle("fichas", f.id)}
                  className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all"
                  style={done ? { background: "#0891b2", borderColor: "#0891b2" } : { borderColor: "#cbd5e1" }}
                >
                  {done && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold truncate ${done ? "line-through text-slate-400" : "text-[#1e3a5f]"}`}>
                    {f.titulo}
                  </p>
                  <p className="text-xs text-slate-400 truncate">{f.categoria}</p>
                </div>
                <Link href={`/fichas/${f.id}`} className="flex-shrink-0 text-slate-300 hover:text-slate-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      )}

      <p className="text-xs text-slate-400 text-center mt-8">
        Progress is saved in this browser. It does not sync across devices.
      </p>
    </div>
  );
}
