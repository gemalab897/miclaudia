"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

interface Corte {
  min: number;
  max: number;
  nivel: string;
  accion: string;
  color: string;
}

interface Instrumento {
  nombre: string;
  nombreCompleto: string;
  area: string;
  minScore: number;
  maxScore: number;
  color: string;
  cortes: Corte[];
  descripcion: string;
}

const instrumentos: Instrumento[] = [
  {
    nombre: "PHQ-9",
    nombreCompleto: "Patient Health Questionnaire-9",
    area: "Depresión",
    minScore: 0,
    maxScore: 27,
    color: "#2563eb",
    descripcion: "9 ítems · 2-3 min · Criterios DSM depresión mayor",
    cortes: [
      { min: 0,  max: 4,  nivel: "Sin depresión",           accion: "Sin tratamiento indicado",                       color: "#16a34a" },
      { min: 5,  max: 9,  nivel: "Depresión leve",          accion: "Monitorizar y reevaluar en 2 semanas",            color: "#84cc16" },
      { min: 10, max: 14, nivel: "Depresión moderada",      accion: "Plan de tratamiento, TCC o farmacología",        color: "#f59e0b" },
      { min: 15, max: 19, nivel: "Depresión moderada-grave",accion: "Tratamiento activo inmediato",                   color: "#f97316" },
      { min: 20, max: 27, nivel: "Depresión grave",         accion: "Tratamiento inmediato, valorar hospitalización", color: "#dc2626" },
    ],
  },
  {
    nombre: "GAD-7",
    nombreCompleto: "Generalized Anxiety Disorder-7",
    area: "Ansiedad",
    minScore: 0,
    maxScore: 21,
    color: "#d97706",
    descripcion: "7 ítems · 1-2 min · Screening ansiedad generalizada",
    cortes: [
      { min: 0,  max: 4,  nivel: "Sin ansiedad",     accion: "Sin tratamiento indicado",                      color: "#16a34a" },
      { min: 5,  max: 9,  nivel: "Ansiedad leve",    accion: "Psicoeducación y estrategias de afrontamiento", color: "#84cc16" },
      { min: 10, max: 14, nivel: "Ansiedad moderada",accion: "Valorar TCC, técnicas de relajación",           color: "#f59e0b" },
      { min: 15, max: 21, nivel: "Ansiedad grave",   accion: "Tratamiento activo: TCC y/o farmacología",      color: "#dc2626" },
    ],
  },
  {
    nombre: "BAI",
    nombreCompleto: "Beck Anxiety Inventory",
    area: "Ansiedad",
    minScore: 0,
    maxScore: 63,
    color: "#f59e0b",
    descripcion: "21 ítems · 5-10 min · Síntomas somáticos y cognitivos",
    cortes: [
      { min: 0,  max: 7,  nivel: "Ansiedad mínima",  accion: "Sin intervención clínica",                   color: "#16a34a" },
      { min: 8,  max: 15, nivel: "Ansiedad leve",    accion: "Psicoeducación",                             color: "#84cc16" },
      { min: 16, max: 25, nivel: "Ansiedad moderada",accion: "Tratamiento psicológico",                    color: "#f59e0b" },
      { min: 26, max: 63, nivel: "Ansiedad grave",   accion: "Tratamiento intensivo, valorar medicación",  color: "#dc2626" },
    ],
  },
  {
    nombre: "BDI-II",
    nombreCompleto: "Beck Depression Inventory-II",
    area: "Depresión",
    minScore: 0,
    maxScore: 63,
    color: "#7c3aed",
    descripcion: "21 ítems · 5-10 min · Gold standard en depresión",
    cortes: [
      { min: 0,  max: 13, nivel: "Sin depresión",     accion: "Sin tratamiento",                           color: "#16a34a" },
      { min: 14, max: 19, nivel: "Depresión leve",    accion: "Seguimiento, intervención preventiva",      color: "#84cc16" },
      { min: 20, max: 28, nivel: "Depresión moderada",accion: "TCC, activación conductual",                color: "#f59e0b" },
      { min: 29, max: 63, nivel: "Depresión grave",   accion: "Tratamiento intensivo, plan de seguridad",  color: "#dc2626" },
    ],
  },
  {
    nombre: "PCL-5",
    nombreCompleto: "PTSD Checklist for DSM-5",
    area: "Trauma / TEPT",
    minScore: 0,
    maxScore: 80,
    color: "#dc2626",
    descripcion: "20 ítems · 5-10 min · Punto de corte: 33",
    cortes: [
      { min: 0,  max: 32, nivel: "Sin TEPT probable", accion: "Seguimiento si hay historia de trauma",                            color: "#16a34a" },
      { min: 33, max: 80, nivel: "TEPT probable",     accion: "Evaluación diagnóstica completa, EMDR o TCC focalizada en trauma", color: "#dc2626" },
    ],
  },
  {
    nombre: "SPIN",
    nombreCompleto: "Social Phobia Inventory",
    area: "Fobia Social",
    minScore: 0,
    maxScore: 68,
    color: "#0891b2",
    descripcion: "17 ítems · 3-5 min · Miedo, evitación y síntomas fisiológicos",
    cortes: [
      { min: 0,  max: 18, nivel: "Sin fobia social",     accion: "Sin tratamiento específico",                     color: "#16a34a" },
      { min: 19, max: 29, nivel: "Fobia social leve",    accion: "Entrenamiento en habilidades sociales",          color: "#84cc16" },
      { min: 30, max: 39, nivel: "Fobia social moderada",accion: "TCC para fobia social (protocolo Clark)",        color: "#f59e0b" },
      { min: 40, max: 68, nivel: "Fobia social grave",   accion: "TCC intensiva, valorar grupo terapéutico",       color: "#dc2626" },
    ],
  },
  {
    nombre: "OCI-R",
    nombreCompleto: "Obsessive-Compulsive Inventory-Revised",
    area: "TOC",
    minScore: 0,
    maxScore: 72,
    color: "#16a34a",
    descripcion: "18 ítems · 3-5 min · Punto de corte: 21",
    cortes: [
      { min: 0,  max: 20, nivel: "Sin TOC clínico", accion: "Sin tratamiento específico",                  color: "#16a34a" },
      { min: 21, max: 72, nivel: "TOC probable",    accion: "Evaluación diagnóstica, protocolo EPR (TCC)", color: "#dc2626" },
    ],
  },
  {
    nombre: "ISI",
    nombreCompleto: "Insomnia Severity Index",
    area: "Insomnio",
    minScore: 0,
    maxScore: 28,
    color: "#0f766e",
    descripcion: "7 ítems · 2 min · Naturaleza, gravedad e impacto del insomnio",
    cortes: [
      { min: 0,  max: 7,  nivel: "Sin insomnio clínico", accion: "Higiene del sueño",                           color: "#16a34a" },
      { min: 8,  max: 14, nivel: "Insomnio subclínico",  accion: "Restricción del sueño, control de estímulos", color: "#84cc16" },
      { min: 15, max: 21, nivel: "Insomnio moderado",    accion: "TCC-I completa (protocolo)",                  color: "#f59e0b" },
      { min: 22, max: 28, nivel: "Insomnio grave",       accion: "TCC-I intensiva, valorar farmacología",       color: "#dc2626" },
    ],
  },
];

function getCorte(inst: Instrumento, score: number) {
  return inst.cortes.find((c) => score >= c.min && score <= c.max) ?? null;
}

function ScoreBar({ inst, score }: { inst: Instrumento; score: number }) {
  const pct = ((score - inst.minScore) / (inst.maxScore - inst.minScore)) * 100;
  const corte = getCorte(inst, score);
  return (
    <div className="mt-4">
      <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
        {/* colored segments */}
        {inst.cortes.map((c) => {
          const left = ((c.min - inst.minScore) / (inst.maxScore - inst.minScore)) * 100;
          const width = ((c.max - c.min + 1) / (inst.maxScore - inst.minScore + 1)) * 100;
          return (
            <div
              key={c.nivel}
              className="absolute top-0 h-full opacity-20"
              style={{ left: `${left}%`, width: `${width}%`, background: c.color }}
            />
          );
        })}
        {/* cursor */}
        <div
          className="absolute top-0 h-full w-1 rounded-full transition-all duration-300"
          style={{ left: `calc(${pct}% - 2px)`, background: corte?.color ?? "#94a3b8" }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
        <span>{inst.minScore}</span>
        <span>{inst.maxScore}</span>
      </div>
    </div>
  );
}

export default function InstrumentosPage() {
  const [selected, setSelected] = useState<string>(instrumentos[0].nombre);
  const [score, setScore] = useState<string>("");
  const [history, setHistory] = useState<{ nombre: string; score: number; nivel: string; color: string; date: string }[]>([]);

  const inst = instrumentos.find((i) => i.nombre === selected)!;
  const numScore = score === "" ? null : parseInt(score, 10);
  const corte = numScore !== null && !isNaN(numScore) ? getCorte(inst, numScore) : null;
  const isValid = numScore !== null && !isNaN(numScore) && numScore >= inst.minScore && numScore <= inst.maxScore;

  const handleAdd = () => {
    if (!isValid || !corte) return;
    setHistory((prev) => [
      { nombre: inst.nombre, score: numScore!, nivel: corte.nivel, color: corte.color, date: new Date().toLocaleDateString("es-ES") },
      ...prev,
    ]);
    setScore("");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        title="Calculadora de Instrumentos"
        description="Introduce la puntuación total del instrumento y obtén la interpretación clínica con la recomendación de acción."
        badge="8 instrumentos"
        badgeColor="bg-indigo-600"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Instrument selector */}
        <div className="lg:col-span-2 space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Instrumento</p>
          {instrumentos.map((i) => (
            <button
              key={i.nombre}
              onClick={() => { setSelected(i.nombre); setScore(""); }}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-150 ${
                selected === i.nombre
                  ? "border-transparent text-white shadow-sm"
                  : "bg-white border-slate-100 hover:border-slate-200 text-slate-700"
              }`}
              style={selected === i.nombre ? { background: i.color } : {}}
            >
              <div className="font-bold text-sm">{i.nombre}</div>
              <div className={`text-[11px] mt-0.5 ${selected === i.nombre ? "text-white/80" : "text-slate-400"}`}>{i.nombreCompleto}</div>
            </button>
          ))}
        </div>

        {/* Calculator panel */}
        <div className="lg:col-span-3 space-y-4">
          {/* Info */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ background: inst.color }}>
                {inst.nombre}
              </div>
              <div>
                <p className="font-bold text-[#1e3a5f] text-sm">{inst.nombreCompleto}</p>
                <p className="text-xs text-slate-400">{inst.descripcion}</p>
              </div>
            </div>

            {/* Score input */}
            <div className="mt-4">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Puntuación total ({inst.minScore}–{inst.maxScore})
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  min={inst.minScore}
                  max={inst.maxScore}
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  placeholder={`0–${inst.maxScore}`}
                  className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-2xl font-bold text-[#1e3a5f] focus:outline-none focus:ring-2 text-center"
                  style={{ focusRingColor: inst.color } as React.CSSProperties}
                />
              </div>
              {score !== "" && !isValid && (
                <p className="text-xs text-red-500 mt-1">Puntuación fuera de rango ({inst.minScore}–{inst.maxScore})</p>
              )}
            </div>

            {/* Bar */}
            {isValid && <ScoreBar inst={inst} score={numScore!} />}
          </div>

          {/* Result */}
          {isValid && corte && (
            <div className="rounded-2xl p-5 border" style={{ background: `${corte.color}12`, borderColor: `${corte.color}30` }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0" style={{ background: corte.color }}>
                  {numScore}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg" style={{ color: corte.color }}>{corte.nivel}</p>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{corte.accion}</p>
                  <button
                    onClick={handleAdd}
                    className="mt-3 text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-opacity hover:opacity-90"
                    style={{ background: corte.color }}
                  >
                    Guardar en historial
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Scoring guide */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Guía de puntuación</p>
            <div className="space-y-2">
              {inst.cortes.map((c) => (
                <div
                  key={c.nivel}
                  className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${
                    isValid && corte?.nivel === c.nivel ? "bg-slate-50" : ""
                  }`}
                >
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style={{ background: c.color }}>
                    {c.min}–{c.max}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-slate-700">{c.nivel}</span>
                    <span className="text-sm text-slate-500"> — {c.accion}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold text-[#1e3a5f]">Historial de sesión</p>
            <button onClick={() => setHistory([])} className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
              Limpiar
            </button>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-50">
            {history.map((h, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3">
                <span className="text-xs font-bold px-2 py-0.5 rounded-md text-white" style={{ background: h.color }}>{h.nombre}</span>
                <span className="text-2xl font-bold text-[#1e3a5f]">{h.score}</span>
                <span className="text-sm text-slate-600 flex-1">{h.nivel}</span>
                <span className="text-xs text-slate-400">{h.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Note */}
      <div className="mt-6 bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
        <p className="text-xs text-indigo-700 leading-relaxed">
          Los instrumentos de screening no sustituyen la evaluación clínica. Los puntos de corte son orientativos y deben interpretarse en el contexto clínico completo del paciente.
        </p>
      </div>
    </div>
  );
}
