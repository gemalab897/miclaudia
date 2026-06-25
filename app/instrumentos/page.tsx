"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

// ─── Types ───────────────────────────────────────────────────────────────────

interface HistoryEntry {
  date: string;
  score: number;
  severity: string;
}

type InstrumentKey = "phq9" | "gad7" | "pcl5";

// ─── Instrument Definitions ──────────────────────────────────────────────────

const PHQ9_QUESTIONS = [
  "Poco interés o placer en hacer cosas",
  "Sentirse desanimado/a, deprimido/a o sin esperanza",
  "Dificultad para quedarse o permanecer dormido/a, o dormir demasiado",
  "Sentirse cansado/a o con poca energía",
  "Falta de apetito o comer en exceso",
  "Sentirse mal consigo mismo/a, sentir que es un/a fracasado/a o que ha fallado a sí mismo/a o a su familia",
  "Dificultad para concentrarse en las cosas, como leer el periódico o ver la televisión",
  "Moverse o hablar tan despacio que la gente lo/la nota, o lo contrario — estar tan inquieto/a o intranquilo/a que se mueve mucho más de lo normal",
  "Pensamientos de que estaría mejor muerto/a, o de hacerse daño de alguna manera",
];

const PHQ9_OPTIONS = [
  { label: "Nunca", value: 0 },
  { label: "Varios días", value: 1 },
  { label: "Más de la mitad", value: 2 },
  { label: "Casi todos los días", value: 3 },
];

function getPHQ9Severity(score: number): { label: string; color: string; bg: string } {
  if (score <= 4) return { label: "Mínimo", color: "text-emerald-700", bg: "bg-emerald-100" };
  if (score <= 9) return { label: "Leve", color: "text-yellow-700", bg: "bg-yellow-100" };
  if (score <= 14) return { label: "Moderado", color: "text-orange-700", bg: "bg-orange-100" };
  if (score <= 19) return { label: "Moderado-grave", color: "text-red-600", bg: "bg-red-100" };
  return { label: "Grave", color: "text-red-800", bg: "bg-red-200" };
}

const GAD7_QUESTIONS = [
  "Sentirse nervioso/a, ansioso/a o muy alterado/a",
  "No poder dejar de preocuparse o no poder controlar la preocupación",
  "Preocuparse demasiado por diferentes cosas",
  "Dificultad para relajarse",
  "Estar tan intranquilo/a que es difícil permanecer sentado/a",
  "Irritarse o ponerse de mal genio con facilidad",
  "Sentir miedo como si fuera a ocurrir algo terrible",
];

const GAD7_OPTIONS = [
  { label: "Nunca", value: 0 },
  { label: "Varios días", value: 1 },
  { label: "Más de la mitad", value: 2 },
  { label: "Casi todos los días", value: 3 },
];

function getGAD7Severity(score: number): { label: string; color: string; bg: string } {
  if (score <= 4) return { label: "Mínimo", color: "text-emerald-700", bg: "bg-emerald-100" };
  if (score <= 9) return { label: "Leve", color: "text-yellow-700", bg: "bg-yellow-100" };
  if (score <= 14) return { label: "Moderado", color: "text-orange-700", bg: "bg-orange-100" };
  return { label: "Grave", color: "text-red-700", bg: "bg-red-100" };
}

const PCL5_QUESTIONS = [
  "Recuerdos perturbadores, angustiantes o no deseados del evento estresante",
  "Sueños perturbadores del evento estresante",
  "De repente sentir o actuar como si el evento estresante estuviera ocurriendo de nuevo (como si lo estuviera reviviendo)",
  "Sentirse muy perturbado/a cuando algo le recuerda al evento estresante",
  "Tener reacciones físicas fuertes cuando algo le recuerda al evento estresante (por ejemplo, aceleración del corazón, dificultad para respirar, sudoración)",
  "Evitar memorias, pensamientos o sentimientos relacionados con el evento estresante",
  "Evitar recordatorios externos del evento estresante (personas, lugares, conversaciones, actividades, objetos o situaciones)",
  "Problemas para recordar partes importantes del evento estresante",
  "Tener creencias negativas fuertes sobre usted mismo/a, otras personas o el mundo",
  "Culparse a usted mismo/a o a otros por el evento estresante o lo que ocurrió después",
  "Tener sentimientos negativos fuertes como miedo, horror, ira, culpa o vergüenza",
  "Pérdida de interés en actividades que antes disfrutaba",
  "Sentirse distante o alejado/a de otras personas",
  "Dificultad para experimentar sentimientos positivos",
  "Comportamiento irritable, arrebatos de ira o actuar agresivamente",
  "Asumir riesgos o hacer cosas que pudieran causarle daño",
  "Estar en estado de alerta, vigilante o en guardia",
  "Sentirse nervioso/a o fácilmente sobresaltado/a",
  "Dificultad para concentrarse",
  "Dificultad para quedarse dormido/a o permanecer dormido/a",
];

const PCL5_OPTIONS = [
  { label: "Nada", value: 0 },
  { label: "Un poco", value: 1 },
  { label: "Moderado", value: 2 },
  { label: "Bastante", value: 3 },
  { label: "Extremamente", value: 4 },
];

function getPCL5Severity(score: number): { label: string; color: string; bg: string } {
  if (score < 33) return { label: "Por debajo del punto de corte", color: "text-emerald-700", bg: "bg-emerald-100" };
  return { label: "PTSD probable (≥33)", color: "text-red-700", bg: "bg-red-100" };
}

// ─── History Chart ───────────────────────────────────────────────────────────

function HistoryChart({
  history,
  maxScore,
  accentClass,
}: {
  history: HistoryEntry[];
  maxScore: number;
  accentClass: string;
}) {
  if (history.length === 0) return null;

  const last5 = history.slice(-5);

  return (
    <div className="mt-4 pt-4 border-t border-slate-100">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
        Historial de sesiones (últimas {last5.length})
      </p>
      <div className="flex items-end gap-3 h-20">
        {last5.map((entry, i) => {
          const pct = Math.max(4, Math.round((entry.score / maxScore) * 100));
          return (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <span className="text-xs font-bold text-slate-700">{entry.score}</span>
              <div className="w-full rounded-t-md relative" style={{ height: "48px" }}>
                <div
                  className={`absolute bottom-0 w-full rounded-t-md ${accentClass} opacity-80 transition-all`}
                  style={{ height: `${pct}%` }}
                />
              </div>
              <span
                className="text-[10px] text-slate-400 text-center leading-tight"
                style={{ fontSize: "10px" }}
              >
                {new Date(entry.date + "T00:00:00").toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                })}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {last5.map((entry, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 text-xs bg-slate-50 border border-slate-200 rounded-full px-2 py-0.5"
          >
            <span className="text-slate-400">
              {new Date(entry.date + "T00:00:00").toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}
            </span>
            <span className="font-semibold text-slate-700">{entry.score}</span>
            <span className="text-slate-400">— {entry.severity}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Question Row ─────────────────────────────────────────────────────────────

function QuestionRow({
  index,
  text,
  options,
  value,
  onChange,
  accentSelectedClass,
}: {
  index: number;
  text: string;
  options: { label: string; value: number }[];
  value: number | null;
  onChange: (v: number) => void;
  accentSelectedClass: string;
}) {
  return (
    <div className="py-4 border-b border-slate-100 last:border-0">
      <p className="text-sm font-medium text-slate-700 mb-2.5 leading-snug">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold mr-2 shrink-0">
          {index + 1}
        </span>
        {text}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                selected
                  ? `${accentSelectedClass} border-transparent shadow-sm`
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {opt.value} – {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Instrument Panel ─────────────────────────────────────────────────────────

function InstrumentPanel({
  id,
  title,
  subtitle,
  badge,
  questions,
  options,
  maxScore,
  getSeverity,
  storageKey,
  accentSelectedClass,
  accentBarClass,
  accentBorderClass,
  accentHeaderClass,
  cutoffNote,
}: {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  questions: string[];
  options: { label: string; value: number }[];
  maxScore: number;
  getSeverity: (score: number) => { label: string; color: string; bg: string };
  storageKey: string;
  accentSelectedClass: string;
  accentBarClass: string;
  accentBorderClass: string;
  accentHeaderClass: string;
  cutoffNote?: string;
}) {
  const today = new Date().toISOString().split("T")[0];
  const [expanded, setExpanded] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [evalDate, setEvalDate] = useState(today);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setHistory(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  const answeredCount = answers.filter((a) => a !== null).length;
  const score = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const allAnswered = answeredCount === questions.length;
  const severity = getSeverity(score);

  function handleAnswer(i: number, v: number) {
    setSaved(false);
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = v;
      return next;
    });
  }

  function handleSave() {
    if (!allAnswered) return;
    const entry: HistoryEntry = {
      date: evalDate,
      score,
      severity: severity.label,
    };
    const next = [...history, entry];
    setHistory(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
    setSaved(true);
  }

  function handleReset() {
    setAnswers(Array(questions.length).fill(null));
    setSaved(false);
    setEvalDate(today);
  }

  const progressPct = Math.round((answeredCount / questions.length) * 100);

  return (
    <div
      className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-200 ${accentBorderClass}`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${accentHeaderClass}`}
      >
        <div className="flex items-center gap-4">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white ${accentSelectedClass.split(" ")[0]}`}
          >
            {badge}
          </span>
          <div>
            <h2 className="text-base font-bold text-[#1e3a5f]">{title}</h2>
            <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {answeredCount > 0 && !expanded && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <span
                className={`inline-block w-2 h-2 rounded-full ${allAnswered ? "bg-emerald-500" : "bg-amber-400"}`}
              />
              {answeredCount}/{questions.length} respondidas
            </span>
          )}
          <svg
            className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Body */}
      {expanded && (
        <div className="px-6 pb-6">
          {/* Progress + date row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5 pt-2">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-slate-500">
                  Progreso: {answeredCount}/{questions.length} preguntas
                </span>
                <span className="text-xs font-bold text-slate-700">{progressPct}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${accentBarClass}`}
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <label className="text-xs font-medium text-slate-500 whitespace-nowrap">
                Fecha de evaluación
              </label>
              <input
                type="date"
                value={evalDate}
                onChange={(e) => setEvalDate(e.target.value)}
                className="text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          </div>

          {/* Score badge */}
          {answeredCount > 0 && (
            <div className="flex items-center gap-3 mb-5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-center px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-sm">
                <p className="text-2xl font-extrabold text-[#1e3a5f] leading-none">{score}</p>
                <p className="text-xs text-slate-400 mt-0.5">/ {maxScore}</p>
              </div>
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${severity.bg} ${severity.color}`}
                >
                  {severity.label}
                </span>
                {cutoffNote && score >= 33 && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{cutoffNote}</p>
                )}
              </div>
            </div>
          )}

          {/* Questions */}
          <div className="divide-y divide-slate-50">
            {questions.map((q, i) => (
              <QuestionRow
                key={i}
                index={i}
                text={q}
                options={options}
                value={answers[i]}
                onChange={(v) => handleAnswer(i, v)}
                accentSelectedClass={accentSelectedClass}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <button
              type="button"
              onClick={handleSave}
              disabled={!allAnswered}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                allAnswered
                  ? `${accentSelectedClass.split(" ")[0]} hover:opacity-90 shadow-sm`
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>
              Guardar resultado
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Reiniciar
            </button>
            {saved && (
              <span className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Guardado correctamente
              </span>
            )}
            {!allAnswered && answeredCount > 0 && (
              <span className="text-xs text-amber-600">
                Faltan {questions.length - answeredCount} preguntas por responder
              </span>
            )}
          </div>

          {/* History */}
          <HistoryChart history={history} maxScore={maxScore} accentClass={accentBarClass} />
        </div>
      )}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

const INSTRUMENTS: InstrumentKey[] = ["phq9", "gad7", "pcl5"];

const INSTRUMENT_LABELS: Record<InstrumentKey, string> = {
  phq9: "PHQ-9 · Depresión",
  gad7: "GAD-7 · Ansiedad",
  pcl5: "PCL-5 · PTSD",
};

export default function InstrumentosPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<InstrumentKey | "all">("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const showAll = activeTab === "all";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 print:py-4">
      <PageHeader
        title="Calculadora de Instrumentos"
        description="Puntúa y registra la evolución del paciente sesión a sesión"
        badge="CBT PRO+"
        badgeColor="bg-[#0f2744]"
      />

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 print:hidden">
        {(["all", ...INSTRUMENTS] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 border focus:outline-none ${
              activeTab === key
                ? "bg-[#0f2744] text-white border-[#0f2744] shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {key === "all" ? "Todos los instrumentos" : INSTRUMENT_LABELS[key]}
          </button>
        ))}
      </div>

      {/* Instruments */}
      <div className="flex flex-col gap-5">
        {/* PHQ-9 */}
        {(showAll || activeTab === "phq9") && (
          <InstrumentPanel
            id="phq9"
            title="PHQ-9 — Cuestionario de Salud del Paciente"
            subtitle="Escala de cribado y severidad de la depresión · 9 ítems · 0–27 puntos"
            badge="PHQ-9"
            questions={PHQ9_QUESTIONS}
            options={PHQ9_OPTIONS}
            maxScore={27}
            getSeverity={getPHQ9Severity}
            storageKey="phq9-history"
            accentSelectedClass="bg-indigo-600 text-white"
            accentBarClass="bg-indigo-500"
            accentBorderClass="border-indigo-100 hover:border-indigo-200"
            accentHeaderClass="hover:bg-indigo-50"
          />
        )}

        {/* GAD-7 */}
        {(showAll || activeTab === "gad7") && (
          <InstrumentPanel
            id="gad7"
            title="GAD-7 — Trastorno de Ansiedad Generalizada"
            subtitle="Escala de cribado y severidad de la ansiedad · 7 ítems · 0–21 puntos"
            badge="GAD-7"
            questions={GAD7_QUESTIONS}
            options={GAD7_OPTIONS}
            maxScore={21}
            getSeverity={getGAD7Severity}
            storageKey="gad7-history"
            accentSelectedClass="bg-blue-600 text-white"
            accentBarClass="bg-blue-500"
            accentBorderClass="border-blue-100 hover:border-blue-200"
            accentHeaderClass="hover:bg-blue-50"
          />
        )}

        {/* PCL-5 */}
        {(showAll || activeTab === "pcl5") && (
          <InstrumentPanel
            id="pcl5"
            title="PCL-5 — Lista de Verificación del TEPT (DSM-5)"
            subtitle="Escala de síntomas del trastorno de estrés postraumático · 20 ítems · 0–80 puntos"
            badge="PCL-5"
            questions={PCL5_QUESTIONS}
            options={PCL5_OPTIONS}
            maxScore={80}
            getSeverity={getPCL5Severity}
            storageKey="pcl5-history"
            accentSelectedClass="bg-rose-600 text-white"
            accentBarClass="bg-rose-500"
            accentBorderClass="border-rose-100 hover:border-rose-200"
            accentHeaderClass="hover:bg-rose-50"
            cutoffNote="Punto de corte alcanzado — PTSD probable"
          />
        )}
      </div>

      {/* Legend / scale guide */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 print:mt-4">
        <div className="bg-white rounded-2xl border border-indigo-100 p-4">
          <p className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2">PHQ-9 Severidad</p>
          <div className="space-y-1 text-xs text-slate-600">
            <div className="flex justify-between"><span>0–4</span><span className="font-medium text-emerald-600">Mínimo</span></div>
            <div className="flex justify-between"><span>5–9</span><span className="font-medium text-yellow-600">Leve</span></div>
            <div className="flex justify-between"><span>10–14</span><span className="font-medium text-orange-600">Moderado</span></div>
            <div className="flex justify-between"><span>15–19</span><span className="font-medium text-red-600">Moderado-grave</span></div>
            <div className="flex justify-between"><span>20–27</span><span className="font-bold text-red-800">Grave</span></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-blue-100 p-4">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">GAD-7 Severidad</p>
          <div className="space-y-1 text-xs text-slate-600">
            <div className="flex justify-between"><span>0–4</span><span className="font-medium text-emerald-600">Mínimo</span></div>
            <div className="flex justify-between"><span>5–9</span><span className="font-medium text-yellow-600">Leve</span></div>
            <div className="flex justify-between"><span>10–14</span><span className="font-medium text-orange-600">Moderado</span></div>
            <div className="flex justify-between"><span>15–21</span><span className="font-bold text-red-700">Grave</span></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-rose-100 p-4">
          <p className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-2">PCL-5 Interpretación</p>
          <div className="space-y-1 text-xs text-slate-600">
            <div className="flex justify-between"><span>0–32</span><span className="font-medium text-emerald-600">Sin PTSD probable</span></div>
            <div className="flex justify-between"><span>≥ 33</span><span className="font-bold text-red-700">PTSD probable</span></div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 leading-tight">
            Punto de corte provisional. Confirmar con evaluación clínica estructurada.
          </p>
        </div>
      </div>

      {/* Print note */}
      <p className="mt-6 text-xs text-slate-400 text-center print:hidden">
        Los datos se guardan únicamente en este dispositivo (localStorage). Para registros clínicos formales, exporta o imprime el resultado.
      </p>

      {/* Print styles */}
      <style>{`
        @media print {
          body { background: white !important; }
          button { display: none !important; }
          input[type="date"] { border: none; }
        }
      `}</style>
    </div>
  );
}
