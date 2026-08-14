"use client";

import { useState, useEffect, useRef } from "react";
import PageHeader from "@/components/PageHeader";

interface PlanTratamientoState {
  paciente: string;
  terapeuta: string;
  fechaInicio: string;
  diagnosticoPrincipal: string;
  diagnosticosSecundarios: string;
  formulacionResumida: string;
  fortalezasPaciente: string;
  factoresRiesgo: string;
  objetivosCorto: [string, string, string];
  objetivosMedio: [string, string, string];
  objetivosLargo: [string, string, string];
  tecnicas: string[];
  instrumentos: string[];
  frecuenciaSesiones: string;
  numeroSesiones: string;
  criteriosAlta: string;
  planPrevencion: string;
  fechaRevision: string;
}

const TECNICAS_OPTIONS = [
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

const INSTRUMENTOS_OPTIONS = [
  "PHQ-9",
  "GAD-7",
  "BAI",
  "PCL-5",
  "BDI-II",
  "Y-BOCS",
  "SPIN",
  "PDSS",
];

const INITIAL_STATE: PlanTratamientoState = {
  paciente: "",
  terapeuta: "",
  fechaInicio: "",
  diagnosticoPrincipal: "",
  diagnosticosSecundarios: "",
  formulacionResumida: "",
  fortalezasPaciente: "",
  factoresRiesgo: "",
  objetivosCorto: ["", "", ""],
  objetivosMedio: ["", "", ""],
  objetivosLargo: ["", "", ""],
  tecnicas: [],
  instrumentos: [],
  frecuenciaSesiones: "Semanal",
  numeroSesiones: "",
  criteriosAlta: "",
  planPrevencion: "",
  fechaRevision: "",
};

const LS_KEY = "plan-tratamiento";

const inputClass =
  "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500";
const labelClass = "block text-sm font-medium text-slate-600 mb-1";
const cardClass = "bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6";
const sectionHeadingClass = "text-[#0f2744] font-semibold text-base mb-4";

export default function PlanTratamientoPage() {
  const [state, setState] = useState<PlanTratamientoState>(INITIAL_STATE);
  const [saved, setSaved] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstRender = useRef(true);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as PlanTratamientoState;
        setState(parsed);
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  // Auto-save to localStorage with 500ms debounce
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(state));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      } catch {
        // ignore storage errors
      }
    }, 500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [state]);

  function set<K extends keyof PlanTratamientoState>(key: K, value: PlanTratamientoState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function setObjetivo(
    group: "objetivosCorto" | "objetivosMedio" | "objetivosLargo",
    index: 0 | 1 | 2,
    value: string
  ) {
    setState((prev) => {
      const updated = [...prev[group]] as [string, string, string];
      updated[index] = value;
      return { ...prev, [group]: updated };
    });
  }

  function toggleChecklist(key: "tecnicas" | "instrumentos", item: string) {
    setState((prev) => {
      const current = prev[key];
      const updated = current.includes(item)
        ? current.filter((i) => i !== item)
        : [...current, item];
      return { ...prev, [key]: updated };
    });
  }

  function handleNuevoPlan() {
    if (confirm("¿Deseas limpiar todos los campos y comenzar un plan nuevo?")) {
      setState(INITIAL_STATE);
      localStorage.removeItem(LS_KEY);
    }
  }

  function handleImprimir() {
    window.print();
  }

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-full { display: block !important; }
          body { background: white !important; }
          .max-w-5xl { max-width: 100% !important; padding: 0 !important; }
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-start justify-between mb-2">
          <PageHeader
            title="Plan de Tratamiento"
            description="Registro clínico estructurado del plan terapéutico del paciente."
            badge="Psicología Clínica"
          />
          <div className="flex items-center gap-3 mt-1 no-print">
            {saved && (
              <span className="text-xs text-emerald-600 font-medium animate-pulse">
                Guardado automáticamente
              </span>
            )}
            <button
              onClick={handleNuevoPlan}
              className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Nuevo plan
            </button>
            <button
              onClick={handleImprimir}
              className="px-4 py-2 text-sm font-medium text-white bg-[#0f2744] rounded-lg hover:bg-[#1a3a6b] transition-colors"
            >
              Imprimir
            </button>
          </div>
        </div>

        {/* Header Info */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Datos del Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Paciente (iniciales)</label>
              <input
                type="text"
                className={inputClass}
                placeholder="p. ej. M.G.L."
                value={state.paciente}
                onChange={(e) => set("paciente", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Terapeuta</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Nombre del terapeuta"
                value={state.terapeuta}
                onChange={(e) => set("terapeuta", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Fecha de inicio</label>
              <input
                type="date"
                className={inputClass}
                value={state.fechaInicio}
                onChange={(e) => set("fechaInicio", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Diagnóstico */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Diagnóstico</h2>
          <div className="mb-4">
            <label className={labelClass}>Diagnóstico principal (DSM-5 / CIE-11)</label>
            <input
              type="text"
              className={inputClass}
              placeholder="p. ej. F41.1 Trastorno de ansiedad generalizada"
              value={state.diagnosticoPrincipal}
              onChange={(e) => set("diagnosticoPrincipal", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Diagnósticos secundarios</label>
            <textarea
              className={inputClass}
              rows={3}
              placeholder="Otros diagnósticos relevantes..."
              value={state.diagnosticosSecundarios}
              onChange={(e) => set("diagnosticosSecundarios", e.target.value)}
            />
          </div>
        </div>

        {/* Formulación */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Formulación y Contextualización</h2>
          <div className="mb-4">
            <label className={labelClass}>Formulación resumida del caso</label>
            <textarea
              className={inputClass}
              rows={4}
              placeholder="Descripción breve de la presentación del caso, historia relevante y factores de mantenimiento..."
              value={state.formulacionResumida}
              onChange={(e) => set("formulacionResumida", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Fortalezas del paciente</label>
              <textarea
                className={inputClass}
                rows={3}
                placeholder="Recursos personales, apoyos, capacidades..."
                value={state.fortalezasPaciente}
                onChange={(e) => set("fortalezasPaciente", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Factores de riesgo</label>
              <textarea
                className={inputClass}
                rows={3}
                placeholder="Factores que pueden dificultar el tratamiento o suponer riesgo..."
                value={state.factoresRiesgo}
                onChange={(e) => set("factoresRiesgo", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Objetivos terapéuticos */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Objetivos Terapéuticos</h2>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-emerald-700 mb-3">
              Objetivos a corto plazo <span className="font-normal text-slate-500">(1-4 sesiones)</span>
            </h3>
            <div className="space-y-2">
              {([0, 1, 2] as const).map((i) => (
                <div key={i}>
                  <label className={labelClass}>Objetivo {i + 1}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={`Objetivo a corto plazo ${i + 1}`}
                    value={state.objetivosCorto[i]}
                    onChange={(e) => setObjetivo("objetivosCorto", i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-emerald-700 mb-3">
              Objetivos a medio plazo <span className="font-normal text-slate-500">(5-12 sesiones)</span>
            </h3>
            <div className="space-y-2">
              {([0, 1, 2] as const).map((i) => (
                <div key={i}>
                  <label className={labelClass}>Objetivo {i + 1}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={`Objetivo a medio plazo ${i + 1}`}
                    value={state.objetivosMedio[i]}
                    onChange={(e) => setObjetivo("objetivosMedio", i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-emerald-700 mb-3">
              Objetivos a largo plazo <span className="font-normal text-slate-500">(mantenimiento)</span>
            </h3>
            <div className="space-y-2">
              {([0, 1, 2] as const).map((i) => (
                <div key={i}>
                  <label className={labelClass}>Objetivo {i + 1}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={`Objetivo a largo plazo ${i + 1}`}
                    value={state.objetivosLargo[i]}
                    onChange={(e) => setObjetivo("objetivosLargo", i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Técnicas e intervenciones */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Técnicas e Intervenciones Planificadas</h2>
          <div className="grid grid-cols-2 gap-2">
            {TECNICAS_OPTIONS.map((tecnica) => (
              <label key={tecnica} className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 hover:text-slate-900">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-emerald-500 rounded"
                  checked={state.tecnicas.includes(tecnica)}
                  onChange={() => toggleChecklist("tecnicas", tecnica)}
                />
                {tecnica}
              </label>
            ))}
          </div>
        </div>

        {/* Instrumentos de evaluación */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Instrumentos de Evaluación</h2>
          <div className="grid grid-cols-2 gap-2">
            {INSTRUMENTOS_OPTIONS.map((instrumento) => (
              <label key={instrumento} className="flex items-center gap-2 cursor-pointer text-sm text-slate-700 hover:text-slate-900">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-emerald-500 rounded"
                  checked={state.instrumentos.includes(instrumento)}
                  onChange={() => toggleChecklist("instrumentos", instrumento)}
                />
                {instrumento}
              </label>
            ))}
          </div>
        </div>

        {/* Estructura del tratamiento */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Estructura del Tratamiento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Frecuencia de sesiones</label>
              <select
                className={inputClass}
                value={state.frecuenciaSesiones}
                onChange={(e) => set("frecuenciaSesiones", e.target.value)}
              >
                <option value="Semanal">Semanal</option>
                <option value="Quincenal">Quincenal</option>
                <option value="Mensual">Mensual</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Número estimado de sesiones</label>
              <input
                type="number"
                className={inputClass}
                placeholder="p. ej. 16"
                min={1}
                value={state.numeroSesiones}
                onChange={(e) => set("numeroSesiones", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Alta y prevención de recaídas */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Alta y Prevención de Recaídas</h2>
          <div className="mb-4">
            <label className={labelClass}>Criterios de alta</label>
            <textarea
              className={inputClass}
              rows={3}
              placeholder="Indicadores que señalarán que el tratamiento ha concluido satisfactoriamente..."
              value={state.criteriosAlta}
              onChange={(e) => set("criteriosAlta", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className={labelClass}>Plan de prevención de recaídas</label>
            <textarea
              className={inputClass}
              rows={3}
              placeholder="Estrategias y señales de alerta ante posibles recaídas..."
              value={state.planPrevencion}
              onChange={(e) => set("planPrevencion", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Fecha de revisión del plan</label>
            <input
              type="date"
              className={inputClass}
              value={state.fechaRevision}
              onChange={(e) => set("fechaRevision", e.target.value)}
            />
          </div>
        </div>

        {/* Resumen del Plan */}
        <div className="bg-white rounded-2xl border-2 border-[#0f2744] shadow-sm p-8 mt-8">
          <div className="border-b-2 border-[#0f2744] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[#0f2744] tracking-wide uppercase">
              Resumen del Plan de Tratamiento
            </h2>
            <p className="text-xs text-slate-500 mt-1">Documento clínico — uso confidencial</p>
          </div>

          {/* Patient info summary */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
            <div>
              <span className="font-semibold text-[#0f2744]">Paciente:</span>{" "}
              <span className="text-slate-700">{state.paciente || "—"}</span>
            </div>
            <div>
              <span className="font-semibold text-[#0f2744]">Terapeuta:</span>{" "}
              <span className="text-slate-700">{state.terapeuta || "—"}</span>
            </div>
            <div>
              <span className="font-semibold text-[#0f2744]">Fecha de inicio:</span>{" "}
              <span className="text-slate-700">{state.fechaInicio || "—"}</span>
            </div>
          </div>

          <ResumenSection title="Diagnóstico Principal">
            {state.diagnosticoPrincipal || "—"}
          </ResumenSection>

          {state.diagnosticosSecundarios && (
            <ResumenSection title="Diagnósticos Secundarios">
              {state.diagnosticosSecundarios}
            </ResumenSection>
          )}

          <ResumenSection title="Formulación Resumida">
            {state.formulacionResumida || "—"}
          </ResumenSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ResumenSection title="Fortalezas del Paciente" inline>
              {state.fortalezasPaciente || "—"}
            </ResumenSection>
            <ResumenSection title="Factores de Riesgo" inline>
              {state.factoresRiesgo || "—"}
            </ResumenSection>
          </div>

          <ResumenSection title="Objetivos a Corto Plazo (1-4 sesiones)">
            <ol className="list-decimal list-inside space-y-1">
              {state.objetivosCorto.map((obj, i) => (
                <li key={i} className="text-slate-700">{obj || "—"}</li>
              ))}
            </ol>
          </ResumenSection>

          <ResumenSection title="Objetivos a Medio Plazo (5-12 sesiones)">
            <ol className="list-decimal list-inside space-y-1">
              {state.objetivosMedio.map((obj, i) => (
                <li key={i} className="text-slate-700">{obj || "—"}</li>
              ))}
            </ol>
          </ResumenSection>

          <ResumenSection title="Objetivos a Largo Plazo (mantenimiento)">
            <ol className="list-decimal list-inside space-y-1">
              {state.objetivosLargo.map((obj, i) => (
                <li key={i} className="text-slate-700">{obj || "—"}</li>
              ))}
            </ol>
          </ResumenSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ResumenSection title="Técnicas e Intervenciones" inline>
              {state.tecnicas.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {state.tecnicas.map((t) => (
                    <li key={t} className="text-slate-700 text-sm">{t}</li>
                  ))}
                </ul>
              ) : (
                <span className="text-slate-500">—</span>
              )}
            </ResumenSection>
            <ResumenSection title="Instrumentos de Evaluación" inline>
              {state.instrumentos.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {state.instrumentos.map((i) => (
                    <li key={i} className="text-slate-700 text-sm">{i}</li>
                  ))}
                </ul>
              ) : (
                <span className="text-slate-500">—</span>
              )}
            </ResumenSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ResumenSection title="Frecuencia de Sesiones" inline>
              {state.frecuenciaSesiones}
            </ResumenSection>
            <ResumenSection title="Número Estimado de Sesiones" inline>
              {state.numeroSesiones || "—"}
            </ResumenSection>
          </div>

          <ResumenSection title="Criterios de Alta">
            {state.criteriosAlta || "—"}
          </ResumenSection>

          <ResumenSection title="Plan de Prevención de Recaídas">
            {state.planPrevencion || "—"}
          </ResumenSection>

          {state.fechaRevision && (
            <ResumenSection title="Fecha de Revisión del Plan">
              {state.fechaRevision}
            </ResumenSection>
          )}

          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-8 text-sm text-slate-600">
            <div>
              <div className="border-b border-slate-400 mb-1 h-8" />
              <p className="font-medium text-[#0f2744]">Firma del Terapeuta</p>
              <p className="text-xs text-slate-500">{state.terapeuta || ""}</p>
            </div>
            <div>
              <div className="border-b border-slate-400 mb-1 h-8" />
              <p className="font-medium text-[#0f2744]">Fecha</p>
              <p className="text-xs text-slate-500">{state.fechaInicio || ""}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ResumenSection({
  title,
  children,
  inline,
}: {
  title: string;
  children: React.ReactNode;
  inline?: boolean;
}) {
  return (
    <div className={`${inline ? "" : "mb-4"} ${inline ? "bg-slate-50 rounded-lg p-3" : "mb-4"}`}>
      <h3 className="text-xs font-bold text-[#0f2744] uppercase tracking-wider mb-1">{title}</h3>
      <div className="text-sm text-slate-700 whitespace-pre-line">{children}</div>
    </div>
  );
}
