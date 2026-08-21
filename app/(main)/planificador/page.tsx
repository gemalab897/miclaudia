"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

interface TiempoPorFase {
  revisionTarea: number;
  tecnicaCentral: number;
  nuevaTarea: number;
  cierre: number;
}

interface FormState {
  paciente: string;
  sesionNumero: string;
  faseTratamiento: string;
  diagnostico: string;
  revisionTareaAnterior: string;
  objetivoPrincipal: string;
  tecnicasPlanificadas: string[];
  fichasAUsar: string;
  tiempoPorFase: TiempoPorFase;
  tareaParaCasa: string;
  notasClinicas: string;
}

const TECNICAS = [
  "Cognitive restructuring",
  "Graduated exposure",
  "Behavioral activation",
  "Relaxation/breathing",
  "Mindfulness",
  "Problem-solving",
  "Role-play",
  "Functional analysis",
  "Psychoeducation",
  "Response prevention",
  "Empty chair technique",
  "Working with core beliefs",
];

const FASES = [
  "Initial assessment",
  "Psychoeducation",
  "Active intervention",
  "Consolidation",
  "Discharge",
];

const DIAGNOSTICOS = [
  "GAD",
  "Major Depression",
  "OCD",
  "Social Phobia",
  "Panic Disorder",
  "PTSD",
  "Insomnia",
  "Bipolar Disorder",
  "ADHD",
  "Substance use",
  "Chronic pain",
  "Other",
];

const INITIAL_STATE: FormState = {
  paciente: "",
  sesionNumero: "",
  faseTratamiento: "",
  diagnostico: "",
  revisionTareaAnterior: "",
  objetivoPrincipal: "",
  tecnicasPlanificadas: [],
  fichasAUsar: "",
  tiempoPorFase: {
    revisionTarea: 0,
    tecnicaCentral: 0,
    nuevaTarea: 0,
    cierre: 0,
  },
  tareaParaCasa: "",
  notasClinicas: "",
};

const STORAGE_KEY = "planificador-sesion";

const inputClass =
  "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500";

export default function PlanificadorPage() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setForm(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {
      // ignore
    }
  }, [form]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function updateTiempo(key: keyof TiempoPorFase, value: string) {
    const num = parseInt(value, 10);
    setForm((prev) => ({
      ...prev,
      tiempoPorFase: {
        ...prev.tiempoPorFase,
        [key]: isNaN(num) ? 0 : num,
      },
    }));
  }

  function toggleTecnica(tecnica: string) {
    setForm((prev) => {
      const already = prev.tecnicasPlanificadas.includes(tecnica);
      return {
        ...prev,
        tecnicasPlanificadas: already
          ? prev.tecnicasPlanificadas.filter((t) => t !== tecnica)
          : [...prev.tecnicasPlanificadas, tecnica],
      };
    });
  }

  function handleNuevaSesion() {
    if (confirm("Are you sure you want to clear all fields and start a new session?")) {
      setForm(INITIAL_STATE);
    }
  }

  function handleImprimir() {
    window.print();
  }

  const { revisionTarea, tecnicaCentral, nuevaTarea, cierre } = form.tiempoPorFase;
  const totalMinutos = revisionTarea + tecnicaCentral + nuevaTarea + cierre;

  function pct(val: number) {
    if (totalMinutos === 0) return 0;
    return (val / totalMinutos) * 100;
  }

  return (
    <>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #resumen-sesion, #resumen-sesion * { visibility: visible; }
          #resumen-sesion { position: fixed; top: 0; left: 0; width: 100%; padding: 2rem; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <PageHeader
          title="Session Planner"
          description="Structure and plan the content of your next clinical session"
        />

        {/* Action buttons */}
        <div className="flex gap-3 mb-8 no-print">
          <button
            onClick={handleImprimir}
            className="px-4 py-2 bg-[#0f2744] text-white text-sm font-medium rounded-lg hover:bg-[#1a3a5c] transition-colors"
          >
            Print
          </button>
          <button
            onClick={handleNuevaSesion}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
          >
            New session
          </button>
        </div>

        <div className="space-y-6 no-print">
          {/* Basic session data */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-[#0f2744] font-semibold text-base mb-4">Session information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Patient</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Initials or name"
                  value={form.paciente}
                  onChange={(e) => updateField("paciente", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Session No.</label>
                <input
                  type="number"
                  className={inputClass}
                  placeholder="Session number"
                  min={1}
                  value={form.sesionNumero}
                  onChange={(e) => updateField("sesionNumero", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Treatment phase</label>
                <select
                  className={inputClass}
                  value={form.faseTratamiento}
                  onChange={(e) => updateField("faseTratamiento", e.target.value)}
                >
                  <option value="">Select phase</option>
                  {FASES.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Diagnosis</label>
                <select
                  className={inputClass}
                  value={form.diagnostico}
                  onChange={(e) => updateField("diagnostico", e.target.value)}
                >
                  <option value="">Select diagnosis</option>
                  {DIAGNOSTICOS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Review and goal */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-[#0f2744] font-semibold text-base mb-4">Session content</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Previous homework review</label>
                <textarea
                  className={inputClass}
                  rows={3}
                  placeholder="What homework was assigned? How was it completed?"
                  value={form.revisionTareaAnterior}
                  onChange={(e) => updateField("revisionTareaAnterior", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Main session goal</label>
                <textarea
                  className={inputClass}
                  rows={3}
                  placeholder="What is the goal for this session?"
                  value={form.objetivoPrincipal}
                  onChange={(e) => updateField("objetivoPrincipal", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Techniques */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-[#0f2744] font-semibold text-base mb-4">Planned techniques</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TECNICAS.map((tecnica) => (
                <label key={tecnica} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-emerald-600"
                    checked={form.tecnicasPlanificadas.includes(tecnica)}
                    onChange={() => toggleTecnica(tecnica)}
                  />
                  <span className="text-sm text-slate-700">{tecnica}</span>
                </label>
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-600 mb-1">Worksheets to use</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Name or number of worksheets/materials"
                value={form.fichasAUsar}
                onChange={(e) => updateField("fichasAUsar", e.target.value)}
              />
            </div>
          </div>

          {/* Time per phase */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-[#0f2744] font-semibold text-base mb-4">Time per phase (minutes)</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-500 mr-1 align-middle"></span>
                  Homework review
                </label>
                <input
                  type="number"
                  className={inputClass}
                  min={0}
                  placeholder="0"
                  value={form.tiempoPorFase.revisionTarea || ""}
                  onChange={(e) => updateTiempo("revisionTarea", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1 align-middle"></span>
                  Core technique
                </label>
                <input
                  type="number"
                  className={inputClass}
                  min={0}
                  placeholder="0"
                  value={form.tiempoPorFase.tecnicaCentral || ""}
                  onChange={(e) => updateTiempo("tecnicaCentral", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full bg-amber-500 mr-1 align-middle"></span>
                  New homework
                </label>
                <input
                  type="number"
                  className={inputClass}
                  min={0}
                  placeholder="0"
                  value={form.tiempoPorFase.nuevaTarea || ""}
                  onChange={(e) => updateTiempo("nuevaTarea", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full bg-slate-400 mr-1 align-middle"></span>
                  Closing
                </label>
                <input
                  type="number"
                  className={inputClass}
                  min={0}
                  placeholder="0"
                  value={form.tiempoPorFase.cierre || ""}
                  onChange={(e) => updateTiempo("cierre", e.target.value)}
                />
              </div>
            </div>

            {/* Timer bar */}
            <div>
              {totalMinutos > 0 ? (
                <>
                  <div className="flex rounded-full overflow-hidden h-4 w-full">
                    {revisionTarea > 0 && (
                      <div
                        className="bg-emerald-500 h-full transition-all duration-300"
                        style={{ width: `${pct(revisionTarea)}%` }}
                      />
                    )}
                    {tecnicaCentral > 0 && (
                      <div
                        className="bg-blue-500 h-full transition-all duration-300"
                        style={{ width: `${pct(tecnicaCentral)}%` }}
                      />
                    )}
                    {nuevaTarea > 0 && (
                      <div
                        className="bg-amber-500 h-full transition-all duration-300"
                        style={{ width: `${pct(nuevaTarea)}%` }}
                      />
                    )}
                    {cierre > 0 && (
                      <div
                        className="bg-slate-400 h-full transition-all duration-300"
                        style={{ width: `${pct(cierre)}%` }}
                      />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Total: {totalMinutos} minutes</p>
                </>
              ) : (
                <div className="rounded-full h-4 w-full bg-slate-100 flex items-center justify-center">
                  <span className="text-xs text-slate-400">Enter the minutes per phase</span>
                </div>
              )}
            </div>
          </div>

          {/* Homework and notes */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-[#0f2744] font-semibold text-base mb-4">Homework and notes</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Homework assignment</label>
                <textarea
                  className={inputClass}
                  rows={3}
                  placeholder="Description of the homework to be assigned"
                  value={form.tareaParaCasa}
                  onChange={(e) => updateField("tareaParaCasa", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Clinical notes</label>
                <textarea
                  className={inputClass}
                  rows={4}
                  placeholder="Observations, alerts, aspects to keep in mind..."
                  value={form.notasClinicas}
                  onChange={(e) => updateField("notasClinicas", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Session summary */}
        <div id="resumen-sesion" className="mt-8 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[#0f2744] font-semibold text-lg">Session summary</h2>
            <span className="text-xs text-slate-400 no-print">Updates automatically</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6 pb-6 border-b border-slate-100">
            <ResumenField label="Patient" value={form.paciente} />
            <ResumenField label="Session No." value={form.sesionNumero} />
            <ResumenField label="Treatment phase" value={form.faseTratamiento} />
            <ResumenField label="Diagnosis" value={form.diagnostico} />
          </div>

          <div className="space-y-4 mb-6 pb-6 border-b border-slate-100">
            <ResumenBlock label="Previous homework review" value={form.revisionTareaAnterior} />
            <ResumenBlock label="Main goal" value={form.objetivoPrincipal} />
          </div>

          <div className="mb-6 pb-6 border-b border-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Planned techniques</p>
            {form.tecnicasPlanificadas.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {form.tecnicasPlanificadas.map((t) => (
                  <span
                    key={t}
                    className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400 italic">No techniques selected</p>
            )}
            {form.fichasAUsar && (
              <div className="mt-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Worksheets: </span>
                <span className="text-sm text-slate-700">{form.fichasAUsar}</span>
              </div>
            )}
          </div>

          <div className="mb-6 pb-6 border-b border-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Time distribution</p>
            {totalMinutos > 0 ? (
              <>
                <div className="flex rounded-full overflow-hidden h-3 w-full mb-3">
                  {revisionTarea > 0 && (
                    <div className="bg-emerald-500 h-full" style={{ width: `${pct(revisionTarea)}%` }} />
                  )}
                  {tecnicaCentral > 0 && (
                    <div className="bg-blue-500 h-full" style={{ width: `${pct(tecnicaCentral)}%` }} />
                  )}
                  {nuevaTarea > 0 && (
                    <div className="bg-amber-500 h-full" style={{ width: `${pct(nuevaTarea)}%` }} />
                  )}
                  {cierre > 0 && (
                    <div className="bg-slate-400 h-full" style={{ width: `${pct(cierre)}%` }} />
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    Homework review: <strong>{revisionTarea} min</strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                    Core technique: <strong>{tecnicaCentral} min</strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                    New homework: <strong>{nuevaTarea} min</strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400 flex-shrink-0" />
                    Closing: <strong>{cierre} min</strong>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Total: {totalMinutos} minutes</p>
              </>
            ) : (
              <p className="text-sm text-slate-400 italic">No time distribution defined</p>
            )}
          </div>

          <div className="space-y-4">
            <ResumenBlock label="Homework assignment" value={form.tareaParaCasa} />
            <ResumenBlock label="Clinical notes" value={form.notasClinicas} />
          </div>
        </div>
      </div>
    </>
  );
}

function ResumenField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
      <p className="text-sm text-slate-800 mt-0.5">{value || <span className="text-slate-400 italic">—</span>}</p>
    </div>
  );
}

function ResumenBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
      {value ? (
        <p className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">{value}</p>
      ) : (
        <p className="text-sm text-slate-400 italic">—</p>
      )}
    </div>
  );
}
