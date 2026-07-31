"use client";

import { useState } from "react";
import type { Ficha, CampoFicha } from "@/app/data/fichas";

interface Props {
  ficha: Ficha;
}

export default function FichaInteractiva({ ficha }: Props) {
  const [valores, setValores] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setValores((prev) => ({ ...prev, [id]: value }));
  };

  const handleReset = () => {
    if (confirm("¿Estás seguro de que quieres borrar todos los datos de la ficha?")) {
      setValores({});
    }
  };

  const renderCampo = (campo: CampoFicha) => {
    const value = valores[campo.id] || "";

    return (
      <div key={campo.id} className="ficha-field-wrapper mb-5">
        <label className="block text-sm font-medium text-[#1e3a5f] mb-1.5 leading-snug">
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
      {/* Print header - only shows when printing */}
      <div className="hidden print:block mb-6 pb-4 border-b border-gray-300">
        <h1 className="text-xl font-bold text-black">{ficha.titulo}</h1>
        <p className="text-sm text-gray-600 mt-1">{ficha.descripcion}</p>
        <p className="text-xs text-gray-500 mt-2">Fecha: _________________ Paciente: _________________</p>
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Limpiar
        </button>
      </div>
    </div>
  );
}
