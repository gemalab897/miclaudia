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
  "Reestructuración cognitiva",
  "Exposición gradual",
  "Activación conductual",
  "Relajación/respiración",
  "Mindfulness",
  "Resolución de problemas",
  "Role-play",
  "Análisis funcional",
  "Psicoeducación",
  "Prevención de respuesta",
  "Técnica silla vacía",
  "Trabajo con creencias nucleares",
];

const FASES = [
  "Evaluación inicial",
  "Psicoeducación",
  "Intervención activa",
  "Consolidación",
  "Alta",
];

const DIAGNOSTICOS = [
  "TAG",
  "Depresión Mayor",
  "TOC",
  "Fobia Social",
  "Trastorno de Pánico",
  "PTSD",
  "Insomnio",
  "Trastorno Bipolar",
  "TDAH",
  "Consumo de sustancias",
  "Dolor crónico",
  "Otro",
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
    if (confirm("¿Estás seguro de que quieres limpiar todos los campos y comenzar una nueva sesión?")) {
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
          title="Planificador de Sesión"
          description="Estructura y planifica el contenido de tu próxima sesión clínica"
        />

        {/* Action buttons */}
        <div className="flex gap-3 mb-8 no-print">
          <button
            onClick={handleImprimir}
            className="px-4 py-2 bg-[#0f2744] text-white text-sm font-medium rounded-lg hover:bg-[#1a3a5c] transition-colors"
          >
            Imprimir
          </button>
          <button
            onClick={handleNuevaSesion}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
          >
            Nueva sesión
          </button>
        </div>

        <div className="space-y-6 no-print">
          {/* Datos básicos */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-[#0f2744] font-semibold text-base mb-4">Datos de la sesión</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Paciente</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Iniciales o nombre"
                  value={form.paciente}
                  onChange={(e) => updateField("paciente", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Sesión nº</label>
                <input
                  type="number"
                  className={inputClass}
                  placeholder="Número de sesión"
                  min={1}
                  value={form.sesionNumero}
                  onChange={(e) => updateField("sesionNumero", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Fase del tratamiento</label>
                <select
                  className={inputClass}
                  value={form.faseTratamiento}
                  onChange={(e) => updateField("faseTratamiento", e.target.value)}
                >
                  <option value="">Seleccionar fase</option>
                  {FASES.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Diagnóstico</label>
                <select
                  className={inputClass}
                  value={form.diagnostico}
                  onChange={(e) => updateField("diagnostico", e.target.value)}
                >
                  <option value="">Seleccionar diagnóstico</option>
                  {DIAGNOSTICOS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Revisión y objetivo */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-[#0f2744] font-semibold text-base mb-4">Contenido de la sesión</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Revisión de tarea anterior</label>
                <textarea
                  className={inputClass}
                  rows={3}
                  placeholder="¿Qué tarea se asignó? ¿Cómo fue completada?"
                  value={form.revisionTareaAnterior}
                  onChange={(e) => updateField("revisionTareaAnterior", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Objetivo principal de la sesión</label>
                <textarea
                  className={inputClass}
                  rows={3}
                  placeholder="¿Qué se quiere lograr en esta sesión?"
                  value={form.objetivoPrincipal}
                  onChange={(e) => updateField("objetivoPrincipal", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Técnicas */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-[#0f2744] font-semibold text-base mb-4">Técnicas planificadas</h2>
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
              <label className="block text-sm font-medium text-slate-600 mb-1">Fichas a usar</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Nombre o número de fichas/materiales"
                value={form.fichasAUsar}
                onChange={(e) => updateField("fichasAUsar", e.target.value)}
              />
            </div>
          </div>

          {/* Tiempo por fase */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-[#0f2744] font-semibold text-base mb-4">Tiempo por fase (minutos)</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-500 mr-1 align-middle"></span>
                  Revisión tarea
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
                  Técnica central
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
                  Nueva tarea
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
                  Cierre
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
                  <p className="text-xs text-slate-500 mt-2">Total: {totalMinutos} minutos</p>
                </>
              ) : (
                <div className="rounded-full h-4 w-full bg-slate-100 flex items-center justify-center">
                  <span className="text-xs text-slate-400">Introduce los minutos por fase</span>
                </div>
              )}
            </div>
          </div>

          {/* Tarea y notas */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-[#0f2744] font-semibold text-base mb-4">Tarea y notas</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Tarea para casa</label>
                <textarea
                  className={inputClass}
                  rows={3}
                  placeholder="Descripción de la tarea que se asignará"
                  value={form.tareaParaCasa}
                  onChange={(e) => updateField("tareaParaCasa", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Notas clínicas</label>
                <textarea
                  className={inputClass}
                  rows={4}
                  placeholder="Observaciones, alertas, aspectos a tener en cuenta..."
                  value={form.notasClinicas}
                  onChange={(e) => updateField("notasClinicas", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resumen de sesión */}
        <div id="resumen-sesion" className="mt-8 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[#0f2744] font-semibold text-lg">Resumen de sesión</h2>
            <span className="text-xs text-slate-400 no-print">Se actualiza automáticamente</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6 pb-6 border-b border-slate-100">
            <ResumenField label="Paciente" value={form.paciente} />
            <ResumenField label="Sesión nº" value={form.sesionNumero} />
            <ResumenField label="Fase del tratamiento" value={form.faseTratamiento} />
            <ResumenField label="Diagnóstico" value={form.diagnostico} />
          </div>

          <div className="space-y-4 mb-6 pb-6 border-b border-slate-100">
            <ResumenBlock label="Revisión de tarea anterior" value={form.revisionTareaAnterior} />
            <ResumenBlock label="Objetivo principal" value={form.objetivoPrincipal} />
          </div>

          <div className="mb-6 pb-6 border-b border-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Técnicas planificadas</p>
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
              <p className="text-sm text-slate-400 italic">Sin técnicas seleccionadas</p>
            )}
            {form.fichasAUsar && (
              <div className="mt-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Fichas: </span>
                <span className="text-sm text-slate-700">{form.fichasAUsar}</span>
              </div>
            )}
          </div>

          <div className="mb-6 pb-6 border-b border-slate-100">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Distribución del tiempo</p>
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
                    Revisión tarea: <strong>{revisionTarea} min</strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                    Técnica central: <strong>{tecnicaCentral} min</strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                    Nueva tarea: <strong>{nuevaTarea} min</strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400 flex-shrink-0" />
                    Cierre: <strong>{cierre} min</strong>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">Total: {totalMinutos} minutos</p>
              </>
            ) : (
              <p className="text-sm text-slate-400 italic">Sin distribución de tiempo definida</p>
            )}
          </div>

          <div className="space-y-4">
            <ResumenBlock label="Tarea para casa" value={form.tareaParaCasa} />
            <ResumenBlock label="Notas clínicas" value={form.notasClinicas} />
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
