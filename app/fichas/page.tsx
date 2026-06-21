"use client";

import { useState } from "react";
import Link from "next/link";
import { fichas } from "@/app/data/fichas";
import PageHeader from "@/components/PageHeader";

const categoriaColors: Record<string, string> = {
  "Reestructuración Cognitiva": "bg-blue-100 text-blue-700",
  "Activación Conductual": "bg-emerald-100 text-emerald-700",
  "Exposición": "bg-amber-100 text-amber-700",
  "Evaluación": "bg-purple-100 text-purple-700",
  "Prevención de Crisis": "bg-rose-100 text-rose-700",
  "Evaluación de Proceso": "bg-teal-100 text-teal-700",
  "Ansiedad": "bg-sky-100 text-sky-700",
  "Depresión": "bg-indigo-100 text-indigo-700",
  "PTSD y Trauma": "bg-orange-100 text-orange-700",
  "TOC": "bg-yellow-100 text-yellow-700",
  "Sueño": "bg-violet-100 text-violet-700",
  "Consumo de Sustancias": "bg-red-100 text-red-700",
  "Trastorno Bipolar": "bg-pink-100 text-pink-700",
  "Trastornos Sexuales": "bg-fuchsia-100 text-fuchsia-700",
  "Fobias": "bg-lime-100 text-lime-700",
  "Personalidad Límite": "bg-cyan-100 text-cyan-700",
};

export default function FichasPage() {
  const categorias = ["Todas", ...Array.from(new Set(fichas.map((f) => f.categoria)))];
  const [categoriaActiva, setCategoriaActiva] = useState<string>("Todas");

  const fichasFiltradas =
    categoriaActiva === "Todas"
      ? fichas
      : fichas.filter((f) => f.categoria === categoriaActiva);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="Fichas Clínicas Interactivas"
        description="Fichas para completar en pantalla durante la sesión o imprimir para el paciente. Todas incluyen instrucciones clínicas y notas para el terapeuta."
        badge={`${fichas.length} Fichas`}
        badgeColor="bg-purple-600"
      />

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-150 border ${
              categoriaActiva === cat
                ? cat === "Todas"
                  ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                  : `${categoriaColors[cat] || "bg-gray-100 text-gray-600"} border-transparent shadow-sm ring-2 ring-offset-1 ring-current`
                : cat === "Todas"
                ? "bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200"
                : `${categoriaColors[cat] || "bg-gray-100 text-gray-600"} border-transparent opacity-70 hover:opacity-100`
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {fichasFiltradas.map((ficha) => (
          <Link
            key={ficha.id}
            href={`/fichas/${ficha.id}`}
            className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 p-5 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoriaColors[ficha.categoria] || "bg-gray-100 text-gray-600"}`}
              >
                {ficha.categoria}
              </span>
            </div>

            <h3 className="font-bold text-[#1e3a5f] mb-2 group-hover:text-purple-600 transition-colors leading-tight">
              {ficha.titulo}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed flex-1">{ficha.descripcion}</p>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
              <span className="text-xs text-gray-400">{ficha.campos.length} campos</span>
              <span className="text-sm text-purple-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Abrir ficha
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-purple-50 rounded-2xl border border-purple-100 p-6">
        <h3 className="font-bold text-[#1e3a5f] mb-3">Cómo usar las fichas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
            <div>
              <div className="font-semibold text-[#1e3a5f] mb-1">Rellenar en pantalla</div>
              <p className="text-gray-500 text-xs">Completa los campos directamente en el navegador durante la sesión.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
            <div>
              <div className="font-semibold text-[#1e3a5f] mb-1">Imprimir para el paciente</div>
              <p className="text-gray-500 text-xs">Usa el botón de imprimir. Las fichas tienen estilos optimizados para impresión.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
            <div>
              <div className="font-semibold text-[#1e3a5f] mb-1">Tarea entre sesiones</div>
              <p className="text-gray-500 text-xs">Asigna fichas como tarea y revísalas en la siguiente sesión.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
