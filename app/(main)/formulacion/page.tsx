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
        "Do you want to start a new formulation? Unsaved data will be lost."
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
          title="Interactive Cognitive Formulation"
          description="Build a complete cognitive map of the patient integrating history, beliefs, assumptions, and current responses."
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 no-print">
          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {saved ? "Saved!" : "Save draft"}
          </button>
          <button
            onClick={handlePrint}
            className="bg-[#0f2744] hover:bg-[#1e3a5f] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Print formulation
          </button>
          <button
            onClick={handleNew}
            className="border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            New formulation
          </button>
        </div>

        {/* Patient information */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Patient Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Name / Initials</label>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. M.G.C."
                value={form.nombre}
                onChange={(e) => set("nombre", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Age</label>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. 34 years old"
                value={form.edad}
                onChange={(e) => set("edad", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Primary diagnosis</label>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. Major depressive disorder"
                value={form.diagnostico}
                onChange={(e) => set("diagnostico", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Date</label>
              <input
                type="date"
                className={inputClass}
                value={form.fecha}
                onChange={(e) => set("fecha", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* History and life events */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>History and Life Events</h2>
          <p className="text-xs text-slate-500 mb-3">
            Predisposing events that explain the origin of core beliefs
          </p>
          <textarea
            rows={5}
            className={textareaClass}
            placeholder="Describe significant early events, learning experiences, attachment relationships, traumas, or losses that contributed to the formation of the patient's core beliefs..."
            value={form.historiaEventos}
            onChange={(e) => set("historiaEventos", e.target.value)}
          />
        </div>

        {/* Core beliefs */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Core Beliefs</h2>
          <p className="text-xs text-slate-500 mb-4">
            Deep beliefs about oneself, others, and the world
          </p>
          <div className="space-y-4">
            <div>
              <label className={labelClass}>About oneself — "I am..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='e.g. "I am incompetent and undeserving of love"'
                value={form.creenciaNuclear1}
                onChange={(e) => set("creenciaNuclear1", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>About others — "Others are..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='e.g. "Others are critical and won&apos;t accept me"'
                value={form.creenciaNuclear2}
                onChange={(e) => set("creenciaNuclear2", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>About the world — "The world is..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='e.g. "The world is a dangerous and unfair place"'
                value={form.creenciaNuclear3}
                onChange={(e) => set("creenciaNuclear3", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Dysfunctional assumptions */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Dysfunctional Assumptions</h2>
          <p className="text-xs text-slate-500 mb-4">
            Rules and attitudes that mediate between core beliefs and everyday situations
          </p>
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Conditional — "If... then..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='e.g. "If I make a mistake, then it means I am a failure"'
                value={form.supuesto1}
                onChange={(e) => set("supuesto1", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Imperative — "I must..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='e.g. "I must be perfect in everything I do"'
                value={form.supuesto2}
                onChange={(e) => set("supuesto2", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Worth — "To be worthy..."</label>
              <input
                type="text"
                className={inputClass}
                placeholder='e.g. "To be worthy I need constant approval from others"'
                value={form.supuesto3}
                onChange={(e) => set("supuesto3", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Current situation and response */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Current Situation and Response</h2>
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Triggering situation</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Current situation that triggered the problem"
                value={form.situacionDisparo}
                onChange={(e) => set("situacionDisparo", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Automatic thought</label>
              <input
                type="text"
                className={inputClass}
                placeholder='e.g. "I am not capable of doing anything right"'
                value={form.pensamientoAutomatico}
                onChange={(e) => set("pensamientoAutomatico", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Emotion</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Sadness, anxiety, shame"
                  value={form.emocion}
                  onChange={(e) => set("emocion", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Emotional intensity:{" "}
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
                  <span>0 — None</span>
                  <span>100 — Maximum</span>
                </div>
              </div>
            </div>
            <div>
              <label className={labelClass}>Behavior / Behavioral response</label>
              <input
                type="text"
                className={inputClass}
                placeholder="e.g. Avoidance, isolation, safety behaviors"
                value={form.conducta}
                onChange={(e) => set("conducta", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Therapeutic goals */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Therapeutic Goals</h2>
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Goal 1</label>
              <textarea
                rows={2}
                className={textareaClass}
                placeholder="e.g. Reduce the intensity of depressive episodes through identification and restructuring of negative automatic thoughts"
                value={form.objetivo1}
                onChange={(e) => set("objetivo1", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Goal 2</label>
              <textarea
                rows={2}
                className={textareaClass}
                placeholder="e.g. Modify core beliefs of worthlessness through behavioral experiments"
                value={form.objetivo2}
                onChange={(e) => set("objetivo2", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Goal 3</label>
              <textarea
                rows={2}
                className={textareaClass}
                placeholder="e.g. Develop emotional regulation skills and tolerance for uncertainty"
                value={form.objetivo3}
                onChange={(e) => set("objetivo3", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Working hypothesis */}
        <div className={cardClass}>
          <h2 className={sectionHeadingClass}>Working Hypothesis</h2>
          <p className="text-xs text-slate-500 mb-3">
            Integrate all elements into a coherent explanatory narrative
          </p>
          <textarea
            rows={6}
            className={textareaClass}
            placeholder={`The current presenting concerns of ${form.nombre || "[patient]"} are explained by... (integrate history, beliefs, assumptions, and current situation into a coherent explanatory hypothesis)`}
            value={form.hipotesisTrabajo}
            onChange={(e) => set("hipotesisTrabajo", e.target.value)}
          />
        </div>

        {/* Mapa Cognitivo */}
        <div className={`${cardClass} mapa-cognitivo`}>
          <h2 className={`${sectionHeadingClass} mb-6`}>
            Cognitive Map — Flow Diagram
          </h2>
          {form.nombre && (
            <p className="text-sm text-slate-500 mb-4">
              Patient:{" "}
              <span className="font-semibold text-[#0f2744]">
                {form.nombre}
                {form.edad ? ` · ${form.edad}` : ""}
                {form.diagnostico ? ` · ${form.diagnostico}` : ""}
              </span>
            </p>
          )}

          <div className="max-w-lg mx-auto">
            {/* History / Predisposing events */}
            <MapBox
              label="Predisposing Events"
              value={form.historiaEventos}
              placeholder="History and relevant life events"
            />
            <Arrow />

            {/* Core beliefs */}
            <div className="rounded-xl border border-[#0f2744] bg-[#0f2744]/5 px-4 py-3 mb-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0f2744] text-center mb-3">
                Core Beliefs
              </p>
              <div className="grid grid-cols-1 gap-2">
                <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-[#0f2744]">Self: </span>
                  {form.creenciaNuclear1 || (
                    <span className="text-slate-400 italic">"I am..."</span>
                  )}
                </div>
                <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-[#0f2744]">Others: </span>
                  {form.creenciaNuclear2 || (
                    <span className="text-slate-400 italic">"Others are..."</span>
                  )}
                </div>
                <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-[#0f2744]">World: </span>
                  {form.creenciaNuclear3 || (
                    <span className="text-slate-400 italic">"The world is..."</span>
                  )}
                </div>
              </div>
            </div>
            <Arrow />

            {/* Dysfunctional assumptions */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 mb-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 text-center mb-3">
                Dysfunctional Assumptions
              </p>
              <div className="grid grid-cols-1 gap-2">
                <div className="rounded-lg border border-amber-100 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-amber-700">If/Then: </span>
                  {form.supuesto1 || (
                    <span className="text-slate-400 italic">"If... then..."</span>
                  )}
                </div>
                <div className="rounded-lg border border-amber-100 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-amber-700">Must: </span>
                  {form.supuesto2 || (
                    <span className="text-slate-400 italic">"I must..."</span>
                  )}
                </div>
                <div className="rounded-lg border border-amber-100 bg-white px-3 py-2 text-sm text-slate-700">
                  <span className="font-medium text-amber-700">Worth: </span>
                  {form.supuesto3 || (
                    <span className="text-slate-400 italic">"To be worthy..."</span>
                  )}
                </div>
              </div>
            </div>
            <Arrow />

            {/* Triggering situation */}
            <MapBox
              label="Triggering Situation"
              value={form.situacionDisparo}
              placeholder="Situation that triggered the problem"
            />
            <Arrow />

            {/* Automatic thought */}
            <MapBox
              label="Automatic Thought"
              value={form.pensamientoAutomatico}
              placeholder="What were they thinking in that moment?"
              accent
            />
            <Arrow />

            {/* Emotion */}
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 mb-1 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-700 mb-1">
                Emotion
              </p>
              <p className="text-sm text-slate-700">
                {form.emocion || (
                  <span className="text-slate-400 italic">Identified emotion</span>
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

            {/* Behavior */}
            <MapBox
              label="Behavior / Response"
              value={form.conducta}
              placeholder="Resulting behavior"
            />

            {/* Working hypothesis */}
            {form.hipotesisTrabajo && (
              <>
                <div className="my-4 border-t border-slate-100" />
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-2">
                    Working Hypothesis
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
                    Therapeutic Goals
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
            {saved ? "Saved!" : "Save draft"}
          </button>
          <button
            onClick={handlePrint}
            className="bg-[#0f2744] hover:bg-[#1e3a5f] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Print formulation
          </button>
          <button
            onClick={handleNew}
            className="border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            New formulation
          </button>
        </div>
      </div>
    </>
  );
}
