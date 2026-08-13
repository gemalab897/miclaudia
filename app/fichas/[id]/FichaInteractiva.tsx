"use client";

import { useState, useEffect, useCallback } from "react";
import type { Ficha, CampoFicha } from "@/app/data/fichas";

interface Props {
  ficha: Ficha;
}

export default function FichaInteractiva({ ficha }: Props) {
  const storageKey = `ficha-${ficha.id}`;
  const [valores, setValores] = useState<Record<string, string>>({});
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const { valores: v, savedAt: s } = JSON.parse(stored);
        setValores(v);
        setSavedAt(s);
      }
    } catch {}
  }, [storageKey]);

  const save = useCallback(
    (newValores: Record<string, string>) => {
      try {
        const now = new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
        localStorage.setItem(storageKey, JSON.stringify({ valores: newValores, savedAt: now }));
        setSavedAt(now);
        setJustSaved(true);
        setTimeout(() => setJustSaved(false), 2000);
      } catch {}
    },
    [storageKey]
  );

  const handleChange = (id: string, value: string) => {
    const next = { ...valores, [id]: value };
    setValores(next);
    save(next);
  };

  const handleReset = () => {
    if (confirm("¿Borrar todas las respuestas guardadas de esta ficha?")) {
      setValores({});
      setSavedAt(null);
      localStorage.removeItem(storageKey);
    }
  };

  const renderCampo = (campo: CampoFicha) => {
    const value = valores[campo.id] || "";

    return (
      <div key={campo.id} className="ficha-field-wrapper mb-5">
        <label className="block text-sm font-medium text-[#1e3a5f] mb-1.5 leading-snug whitespace-pre-line">
          {campo.label}
        </label>

        {campo.tipo === "textarea" && (
          <textarea
            value={value}
            onChange={(e) => handleChange(campo.id, e.target.value)}
            placeholder={campo.placeholder}
            rows={campo.filas || 3}
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent resize-y transition-shadow placeholder:text-gray-300 bg-white"
          />
        )}

        {campo.tipo === "texto" && (
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(campo.id, e.target.value)}
            placeholder={campo.placeholder}
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-shadow placeholder:text-gray-300 bg-white"
          />
        )}

        {campo.tipo === "numero" && (
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={value}
              onChange={(e) => handleChange(campo.id, e.target.value)}
              placeholder={campo.placeholder}
              min={campo.min}
              max={campo.max}
              className="w-28 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-shadow bg-white"
            />
            {campo.min !== undefined && campo.max !== undefined && (
              <div className="flex-1">
                <input
                  type="range"
                  value={value || campo.min}
                  onChange={(e) => handleChange(campo.id, e.target.value)}
                  min={campo.min}
                  max={campo.max}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                  <span>{campo.min}</span>
                  <span>{campo.max}</span>
                </div>
              </div>
            )}
            {value && (
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${
                  Number(value) <= 30
                    ? "bg-emerald-500"
                    : Number(value) <= 60
                    ? "bg-amber-500"
                    : "bg-red-500"
                }`}
              >
                {value}
              </div>
            )}
          </div>
        )}

        {campo.tipo === "select" && campo.opciones && (
          <select
            value={value}
            onChange={(e) => handleChange(campo.id, e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent bg-white"
          >
            <option value="">Seleccionar...</option>
            {campo.opciones.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 ficha-container">
      {/* Print header */}
      <div className="hidden print:block mb-6 pb-4 border-b border-gray-300">
        <h1 className="text-xl font-bold text-black">{ficha.titulo}</h1>
        <p className="text-sm text-gray-600 mt-1">{ficha.descripcion}</p>
        <p className="text-xs text-gray-500 mt-2">Fecha: _________________ Paciente: _________________</p>
      </div>

      {/* Save indicator */}
      <div className="flex items-center justify-between mb-4 no-print">
        <span className="text-xs text-gray-400">Las respuestas se guardan automáticamente en este dispositivo</span>
        <span
          className={`text-xs font-medium transition-all duration-300 ${
            justSaved ? "text-emerald-600" : savedAt ? "text-gray-400" : "text-transparent"
          }`}
        >
          {justSaved ? "✓ Guardado" : savedAt ? `Guardado a las ${savedAt}` : "·"}
        </span>
      </div>

      {ficha.campos.map(renderCampo)}

      {/* Action buttons */}
      <div className="flex gap-3 mt-6 pt-4 border-t border-slate-100 no-print">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-[#1e3a5f] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#2a4a6f] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Imprimir
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 bg-slate-100 text-gray-600 text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-slate-200 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Borrar respuestas
        </button>
      </div>
    </div>
  );
}
