"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

const LS_KEY = "formulacion-borrador";

interface FormData {
  nombre: string;
  edad: string;
  diagnostico: string;
  fecha: string;
  historiaEventos: string;
  creenciaNuclear1: string;
  creenciaNuclear2: string;
  creenciaNuclear3: string;
  supuesto1: string;
  supuesto2: string;
  supuesto3: string;
  situacionDisparo: string;
  pensamientoAutomatico: string;
  emocion: string;
  intensidadEmocion: number;
  conducta: string;
  objetivo1: string;
  objetivo2: string;
  objetivo3: string;
  hipotesisTrabajo: string;
}

const defaultForm: FormData = {
  nombre: "",
  edad: "",
  diagnostico: "",
  fecha: "",
  historiaEventos: "",
  creenciaNuclear1: "",
  creenciaNuclear2: "",
  creenciaNuclear3: "",
  supuesto1: "",
  supuesto2: "",
  supuesto3: "",
  situacionDisparo: "",
  pensamientoAutomatico: "",
  emocion: "",
  intensidadEmocion: 50,
  conducta: "",
  objetivo1: "",
  objetivo2: "",
  objetivo3: "",
  hipotesisTrabajo: "",
};

const inputClass =
  "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500";
const textareaClass =
  "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none";
const labelClass = "block text-xs font-medium text-slate-600 mb-1";
const sectionHeadingClass = "text-[#0f2744] font-semibold text-base mb-4";
const cardClass = "bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6";

function MapBox({
  label,
  value,
  placeholder,
  accent = false,
}: {
  label: string;
  value: string;
  placeholder: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 text-center min-h-[72px] flex flex-col justify-center ${
        accent
          ? "border-emerald-300 bg-emerald-50"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-wide mb-1 ${
          accent ? "text-emerald-700" : "text-[#0f2744]"
        }`}
      >
        {label}
      </p>
      <p className="text-sm text-slate-700 leading-snug">
        {value || <span className="text-slate-400 italic">{placeholder}</span>}
      </p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center items-center my-1">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-slate-400"
      >
        <path
          d="M12 4v14M6 14l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function FormulacionPage() {
  const [form, setForm] = useState<FormData>(defaultForm);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setForm((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  function set(field: keyof FormData, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  }

  function handleSave() {
    localStorage.setItem(LS_KEY, JSON.stringify(form));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleNew() {
    if (
      window.confirm(
        "¿Deseas comenzar una nueva formulación? Se perderán los datos no guardados."
      )
    ) {
      setForm(defaultForm);
      setSaved(false);
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white; }
          .max-w-5xl { max-width: 100% !important; padding: 0 !important; }
          .mapa-cognitivo { page-break-inside: avoid; }
        }
        .print-only { display: none; }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <PageHeader
          title="Formulación Cognitiva Interactiva"
          description="Construye un mapa cognitivo completo del paciente integrando historia, creencias, supuestos y respuestas actuales."
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 no-print">
          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {saved ? "¡Guardado!" : "Guardar borrador"}
          </button>
          <button
            onClick={handlePrint}
            className="bg-[#0f2744] hover:bg-[#1e3a5f] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Imprimir formulación
          </button>
          <button
            onClick={handleNew}
            className="border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Nueva formulación
          </button>
        </div>

        {/* Datos del paciente */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Datos del Paciente</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Nombre / Iniciales</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Ej. M.G.C."
                value={form.nombre}
                onChange={(e) => set("nombre", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Edad</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Ej. 34 años"
                value={form.edad}
                onChange={(e) => set("edad", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Diagnóstico principal</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Ej. Trastorno depresivo mayor"
                value={form.diagnostico}
                onChange={(e) => set("diagnostico", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Fecha</label>
              <input
                type="date"
                className={inputClass}
                value={form.fecha}
                onChange={(e) => set("fecha", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Historia y eventos vitales */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Historia y Eventos Vitales</h2>
          <p className="text-xs text-slate-500 mb-3">
            Eventos predisponentes que explican el origen de las creencias nucleares
          </p>
          <textarea
            rows={5}
            className={textareaClass}
            placeholder="Describe los eventos tempranos significativos, experiencias de aprendizaje, relaciones de apego, traumas o pérdidas que contribuyeron a la formación de las creencias nucleares del paciente..."
            value={form.historiaEventos}
            onChange={(e) => set("historiaEventos", e.target.value)}
          />
        </div>

        {/* Creencias nucleares */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Creencias Nucleares</h2>
          <p className="text-xs text-slate-500 mb-4">
            Creencias profundas sobre uno mismo, los demás y el mundo
          </p>
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Sobre sí mismo/a — "Soy..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='Ej. "Soy incompetente y no merezco ser amado/a"'
                value={form.creenciaNuclear1}
                onChange={(e) => set("creenciaNuclear1", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Sobre los demás — "Los demás son..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='Ej. "Los demás son críticos y no me aceptarán"'
                value={form.creenciaNuclear2}
                onChange={(e) => set("creenciaNuclear2", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Sobre el mundo — "El mundo es..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='Ej. "El mundo es un lugar peligroso e injusto"'
                value={form.creenciaNuclear3}
                onChange={(e) => set("creenciaNuclear3", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Supuestos disfuncionales */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Supuestos Disfuncionales</h2>
          <p className="text-xs text-slate-500 mb-4">
            Reglas y actitudes que median entre las creencias nucleares y las situaciones cotidianas
          </p>
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Condicional — "Si... entonces..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='Ej. "Si cometo un error, entonces significa que soy un fracaso"'
                value={form.supuesto1}
                onChange={(e) => set("supuesto1", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Imperativo — "Debo..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='Ej. "Debo ser perfecto/a en todo lo que hago"'
                value={form.supuesto2}
                onChange={(e) => set("supuesto2", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>De valía — "Para ser valioso/a..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='Ej. "Para ser valioso/a necesito la aprobación constante de los demás"'
                value={form.supuesto3}
                onChange={(e) => set("supuesto3", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Situación actual */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Situación y Respuesta Actual</h2>
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Situación disparadora</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Situación actual que activó el problema"
                value={form.situacionDisparo}
                onChange={(e) => set("situacionDisparo", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Pensamiento automático</label>
              <input
                type="text"
                className={inputClass}
                placeholder='Ej. "No soy capaz de hacer nada bien"'
                value={form.pensamientoAutomatico}
                onChange={(e) => set("pensamientoAutomatico", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Emoción</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Ej. Tristeza, ansiedad, vergüenza"
                  value={form.emocion}
                  onChange={(e) => set("emocion", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Intensidad emocional:{" "}
                  <span className="font-semibold text-emerald-700">{form.intensidadEmocion}%</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  className="w-full accent-emerald-600 mt-2"
                  value={form.intensidadEmocion}
                  onChange={(e) => set("intensidadEmocion", Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>0 — Ninguna</span>
                  <span>100 — Máxima</span>
                </div>
              </div>
            </div>
            <div>
              <label className={labelClass}>Conducta / Respuesta conductual</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Ej. Evitación, aislamiento, conductas de seguridad"
                value={form.conducta}
                onChange={(e) => set("conducta", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Objetivos terapéuticos */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Objetivos Terapéuticos</h2>
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Objetivo 1</label>
              <textarea
                rows={2}
                className={textareaClass}
                placeholder="Ej. Reducir la intensidad de los episodios depresivos mediante la identificación y reestructuración de pensamientos automáticos negativos"
                value={form.objetivo1}
                onChange={(e) => set("objetivo1", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Objetivo 2</label>
              <textarea
                rows={2}
                className={textareaClass}
                placeholder="Ej. Modificar las creencias nucleares de inutilidad a través de experimentos conductuales"
                value={form.objetivo2}
                onChange={(e) => set("objetivo2", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Objetivo 3</label>
              <textarea
                rows={2}
                className={textareaClass}
                placeholder="Ej. Desarrollar habilidades de regulación emocional y tolerancia a la incertidumbre"
                value={form.objetivo3}
                onChange={(e) => set("objetivo3", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Hipótesis de trabajo */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Hipótesis de Trabajo</h2>
          <p className="text-xs text-slate-500 mb-3">
            Integra todos los elementos en una narrativa explicativa coherente
          </p>
          <textarea
            rows={6}
            className={textareaClass}
            placeholder={`La problemática actual de ${form.nombre || "[paciente]"} se explica por... (integra historia, creencias, supuestos y situación actual en una hipótesis explicativa coherente)`}
            value={form.hipotesisTrabajo}
            onChange={(e) => set("hipotesisTrabajo", e.target.value)}
          />
        </div>

        {/* Mapa Cognitivo */}
        <div className={`${cardClass} mapa-cognitivo`}>
          <h2 className={`${sectionHeadingClass} mb-6`}>
            Mapa Cognitivo — Diagrama de Flujo
          </h2>
          {form.nombre && (
            <p className="text-sm text-slate-500 mb-4">
              Paciente:{" "}
              <span className="font-semibold text-[#0f2744]">
                {form.nombre}
                {form.edad ? ` · ${form.edad}` : ""}
                {form.diagnostico ? ` · ${form.diagnostico}` : ""}
              </span>
            </p>
          )}

          <div className="max-w-lg mx-auto">
            {/* Historia / Eventos predisponentes */}
            <MapBox
              label="Eventos Predisponentes"
              value={form.historiaEventos}
              placeholder="Historia y eventos vitales relevantes"
            />
            <Arrow />

            {/* Creencias nucleares */}
            <div className="rounded-xl border border-[#0f2744] bg-[#0f2744]/5 px-4 py-3 mb-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0f2744] text-center mb-3">
                Creencias Nucleares
              </p>
              <div className="grid grid-cols-1 gap-2">
                <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-[#0f2744]">Yo: </span>
                  {form.creenciaNuclear1 || (
                    <span className="text-slate-400 italic">"Soy..."</span>
                  )}
                </div>
                <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-[#0f2744]">Los demás: </span>
                  {form.creenciaNuclear2 || (
                    <span className="text-slate-400 italic">"Los demás son..."</span>
                  )}
                </div>
                <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-[#0f2744]">El mundo: </span>
                  {form.creenciaNuclear3 || (
                    <span className="text-slate-400 italic">"El mundo es..."</span>
                  )}
                </div>
              </div>
            </div>
            <Arrow />

            {/* Supuestos disfuncionales */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 mb-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 text-center mb-3">
                Supuestos Disfuncionales
              </p>
              <div className="grid grid-cols-1 gap-2">
                <div className="rounded-lg border border-amber-100 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-amber-700">Si/Entonces: </span>
                  {form.supuesto1 || (
                    <span className="text-slate-400 italic">"Si... entonces..."</span>
                  )}
                </div>
                <div className="rounded-lg border border-amber-100 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-amber-700">Debo: </span>
                  {form.supuesto2 || (
                    <span className="text-slate-400 italic">"Debo..."</span>
                  )}
                </div>
                <div className="rounded-lg border border-amber-100 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-amber-700">Valía: </span>
                  {form.supuesto3 || (
                    <span className="text-slate-400 italic">"Para ser valioso/a..."</span>
                  )}
                </div>
              </div>
            </div>
            <Arrow />

            {/* Situación */}
            <MapBox
              label="Situación Disparadora"
              value={form.situacionDisparo}
              placeholder="Situación que activó el problema"
            />
            <Arrow />

            {/* Pensamiento automático */}
            <MapBox
              label="Pensamiento Automático"
              value={form.pensamientoAutomatico}
              placeholder="¿Qué pensó en ese momento?"
              accent
            />
            <Arrow />

            {/* Emoción */}
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 mb-1 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-700 mb-1">
                Emoción
              </p>
              <p className="text-sm text-slate-700">
                {form.emocion || (
                  <span className="text-slate-400 italic">Emoción identificada</span>
                )}
                {form.emocion && (
                  <span className="ml-2 text-xs text-rose-600 font-medium">
                    ({form.intensidadEmocion}%)
                  </span>
                )}
              </p>
              {form.emocion && (
                <div className="mt-2 h-2 rounded-full bg-rose-100 overflow-hidden">
                  <div
                    className="h-full bg-rose-400 rounded-full transition-all"
                    style={{ width: `${form.intensidadEmocion}%` }}
                  />
                </div>
              )}
            </div>
            <Arrow />

            {/* Conducta */}
            <MapBox
              label="Conducta / Respuesta"
              value={form.conducta}
              placeholder="Comportamiento resultante"
            />

            {/* Hipótesis de trabajo */}
            {form.hipotesisTrabajo && (
              <>
                <div className="my-4 border-t border-slate-100" />
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-2">
                    Hipótesis de Trabajo
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {form.hipotesisTrabajo}
                  </p>
                </div>
              </>
            )}

            {/* Objetivos */}
            {(form.objetivo1 || form.objetivo2 || form.objetivo3) && (
              <>
                <div className="my-4 border-t border-slate-100" />
                <div className="rounded-xl border border-[#0f2744]/20 bg-[#0f2744]/5 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#0f2744] mb-3">
                    Objetivos Terapéuticos
                  </p>
                  <ol className="list-decimal list-inside space-y-2">
                    {form.objetivo1 && (
                      <li className="text-sm text-slate-700">{form.objetivo1}</li>
                    )}
                    {form.objetivo2 && (
                      <li className="text-sm text-slate-700">{form.objetivo2}</li>
                    )}
                    {form.objetivo3 && (
                      <li className="text-sm text-slate-700">{form.objetivo3}</li>
                    )}
                  </ol>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="flex flex-wrap gap-3 mt-2 no-print">
          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {saved ? "¡Guardado!" : "Guardar borrador"}
          </button>
          <button
            onClick={handlePrint}
            className="bg-[#0f2744] hover:bg-[#1e3a5f] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Imprimir formulación
          </button>
          <button
            onClick={handleNew}
            className="border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Nueva formulación
          </button>
        </div>
      </div>
    </>
  );
}
