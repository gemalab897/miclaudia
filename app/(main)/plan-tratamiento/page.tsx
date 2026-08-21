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
  frecuenciaSesiones: "Weekly",
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
    if (confirm("Do you want to clear all fields and start a new plan?")) {
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
            title="Treatment Plan"
            description="Structured clinical record of the patient's therapeutic plan."
            badge="Clinical Psychology"
          />
          <div className="flex items-center gap-3 mt-1 no-print">
            {saved && (
              <span className="text-xs text-emerald-600 font-medium animate-pulse">
                Auto-saved
              </span>
            )}
            <button
              onClick={handleNuevoPlan}
              className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              New plan
            </button>
            <button
              onClick={handleImprimir}
              className="px-4 py-2 text-sm font-medium text-white bg-[#0f2744] rounded-lg hover:bg-[#1a3a6b] transition-colors"
            >
              Print
            </button>
          </div>
        </div>

        {/* Header Info */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Plan Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Patient (initials)</label>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. M.G.L."
                value={state.paciente}
                onChange={(e) => set("paciente", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Therapist</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Therapist name"
                value={state.terapeuta}
                onChange={(e) => set("terapeuta", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Start date</label>
              <input
                type="date"
                className={inputClass}
                value={state.fechaInicio}
                onChange={(e) => set("fechaInicio", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Diagnosis */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Diagnosis</h2>
          <div className="mb-4">
            <label className={labelClass}>Primary diagnosis (DSM-5 / ICD-11)</label>
            <input
              type="text"
              className={inputClass}
              placeholder="e.g. F41.1 Generalized anxiety disorder"
              value={state.diagnosticoPrincipal}
              onChange={(e) => set("diagnosticoPrincipal", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Secondary diagnoses</label>
            <textarea
              className={inputClass}
              rows={3}
              placeholder="Other relevant diagnoses..."
              value={state.diagnosticosSecundarios}
              onChange={(e) => set("diagnosticosSecundarios", e.target.value)}
            />
          </div>
        </div>

        {/* Case formulation */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Case Formulation and Context</h2>
          <div className="mb-4">
            <label className={labelClass}>Summary case formulation</label>
            <textarea
              className={inputClass}
              rows={4}
              placeholder="Brief description of the case presentation, relevant history, and maintaining factors..."
              value={state.formulacionResumida}
              onChange={(e) => set("formulacionResumida", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Patient strengths</label>
              <textarea
                className={inputClass}
                rows={3}
                placeholder="Personal resources, supports, capacities..."
                value={state.fortalezasPaciente}
                onChange={(e) => set("fortalezasPaciente", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Risk factors</label>
              <textarea
                className={inputClass}
                rows={3}
                placeholder="Factors that may complicate treatment or present risk..."
                value={state.factoresRiesgo}
                onChange={(e) => set("factoresRiesgo", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Therapeutic goals */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Therapeutic Goals</h2>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-emerald-700 mb-3">
              Short-term goals <span className="font-normal text-slate-500">(1-4 sessions)</span>
            </h3>
            <div className="space-y-2">
              {([0, 1, 2] as const).map((i) => (
                <div key={i}>
                  <label className={labelClass}>Goal {i + 1}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={`Short-term goal ${i + 1}`}
                    value={state.objetivosCorto[i]}
                    onChange={(e) => setObjetivo("objetivosCorto", i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-emerald-700 mb-3">
              Medium-term goals <span className="font-normal text-slate-500">(5-12 sessions)</span>
            </h3>
            <div className="space-y-2">
              {([0, 1, 2] as const).map((i) => (
                <div key={i}>
                  <label className={labelClass}>Goal {i + 1}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={`Medium-term goal ${i + 1}`}
                    value={state.objetivosMedio[i]}
                    onChange={(e) => setObjetivo("objetivosMedio", i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-emerald-700 mb-3">
              Long-term goals <span className="font-normal text-slate-500">(maintenance)</span>
            </h3>
            <div className="space-y-2">
              {([0, 1, 2] as const).map((i) => (
                <div key={i}>
                  <label className={labelClass}>Goal {i + 1}</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder={`Long-term goal ${i + 1}`}
                    value={state.objetivosLargo[i]}
                    onChange={(e) => setObjetivo("objetivosLargo", i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Planned techniques and interventions */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Planned Techniques and Interventions</h2>
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

        {/* Assessment instruments */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Assessment Instruments</h2>
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

        {/* Treatment structure */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Treatment Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Session frequency</label>
              <select
                className={inputClass}
                value={state.frecuenciaSesiones}
                onChange={(e) => set("frecuenciaSesiones", e.target.value)}
              >
                <option value="Weekly">Weekly</option>
                <option value="Biweekly">Biweekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Estimated number of sessions</label>
              <input
                type="number"
                className={inputClass}
                placeholder="e.g. 16"
                min={1}
                value={state.numeroSesiones}
                onChange={(e) => set("numeroSesiones", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Discharge and relapse prevention */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Discharge and Relapse Prevention</h2>
          <div className="mb-4">
            <label className={labelClass}>Discharge criteria</label>
            <textarea
              className={inputClass}
              rows={3}
              placeholder="Indicators that will signal the treatment has been successfully completed..."
              value={state.criteriosAlta}
              onChange={(e) => set("criteriosAlta", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className={labelClass}>Relapse prevention plan</label>
            <textarea
              className={inputClass}
              rows={3}
              placeholder="Strategies and warning signs for possible relapses..."
              value={state.planPrevencion}
              onChange={(e) => set("planPrevencion", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Plan review date</label>
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
              Treatment Plan Summary
            </h2>
            <p className="text-xs text-slate-500 mt-1">Clinical document — confidential use</p>
          </div>

          {/* Patient info summary */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
            <div>
              <span className="font-semibold text-[#0f2744]">Patient:</span>{" "}
              <span className="text-slate-700">{state.paciente || "—"}</span>
            </div>
            <div>
              <span className="font-semibold text-[#0f2744]">Therapist:</span>{" "}
              <span className="text-slate-700">{state.terapeuta || "—"}</span>
            </div>
            <div>
              <span className="font-semibold text-[#0f2744]">Start date:</span>{" "}
              <span className="text-slate-700">{state.fechaInicio || "—"}</span>
            </div>
          </div>

          <ResumenSection title="Primary Diagnosis">
            {state.diagnosticoPrincipal || "—"}
          </ResumenSection>

          {state.diagnosticosSecundarios && (
            <ResumenSection title="Secondary Diagnoses">
              {state.diagnosticosSecundarios}
            </ResumenSection>
          )}

          <ResumenSection title="Summary Formulation">
            {state.formulacionResumida || "—"}
          </ResumenSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ResumenSection title="Patient Strengths" inline>
              {state.fortalezasPaciente || "—"}
            </ResumenSection>
            <ResumenSection title="Risk Factors" inline>
              {state.factoresRiesgo || "—"}
            </ResumenSection>
          </div>

          <ResumenSection title="Short-Term Goals (1-4 sessions)">
            <ol className="list-decimal list-inside space-y-1">
              {state.objetivosCorto.map((obj, i) => (
                <li key={i} className="text-slate-700">{obj || "—"}</li>
              ))}
            </ol>
          </ResumenSection>

          <ResumenSection title="Medium-Term Goals (5-12 sessions)">
            <ol className="list-decimal list-inside space-y-1">
              {state.objetivosMedio.map((obj, i) => (
                <li key={i} className="text-slate-700">{obj || "—"}</li>
              ))}
            </ol>
          </ResumenSection>

          <ResumenSection title="Long-Term Goals (maintenance)">
            <ol className="list-decimal list-inside space-y-1">
              {state.objetivosLargo.map((obj, i) => (
                <li key={i} className="text-slate-700">{obj || "—"}</li>
              ))}
            </ol>
          </ResumenSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ResumenSection title="Techniques and Interventions" inline>
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
            <ResumenSection title="Assessment Instruments" inline>
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
            <ResumenSection title="Session Frequency" inline>
              {state.frecuenciaSesiones}
            </ResumenSection>
            <ResumenSection title="Estimated Number of Sessions" inline>
              {state.numeroSesiones || "—"}
            </ResumenSection>
          </div>

          <ResumenSection title="Discharge Criteria">
            {state.criteriosAlta || "—"}
          </ResumenSection>

          <ResumenSection title="Relapse Prevention Plan">
            {state.planPrevencion || "—"}
          </ResumenSection>

          {state.fechaRevision && (
            <ResumenSection title="Plan Review Date">
              {state.fechaRevision}
            </ResumenSection>
          )}

          <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-8 text-sm text-slate-600">
            <div>
              <div className="border-b border-slate-400 mb-1 h-8" />
              <p className="font-medium text-[#0f2744]">Therapist Signature</p>
              <p className="text-xs text-slate-500">{state.terapeuta || ""}</p>
            </div>
            <div>
              <div className="border-b border-slate-400 mb-1 h-8" />
              <p className="font-medium text-[#0f2744]">Date</p>
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
