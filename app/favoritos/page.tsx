"use client";

import { useState, useEffect } from "react";
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
  "Terapia Somática": "bg-green-100 text-green-700",
};

export default function FavoritosPage() {
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("favoritos");
    if (stored) {
      try {
        setFavoritos(JSON.parse(stored));
      } catch {
        setFavoritos([]);
      }
    }
    setMounted(true);
  }, []);

  const toggleFavorito = (e: React.MouseEvent, fichaId: string) => {
    e.preventDefault();
    e.stopPropagation();
    const next = favoritos.includes(fichaId)
      ? favoritos.filter((id) => id !== fichaId)
      : [...favoritos, fichaId];
    setFavoritos(next);
    localStorage.setItem("favoritos", JSON.stringify(next));
  };

  const fichasGuardadas = fichas.filter((f) => favoritos.includes(f.id));

  if (!mounted) return null;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="Fichas Guardadas"
        description="Tus fichas marcadas como favoritas"
        badge={`${fichasGuardadas.length} Fichas`}
        badgeColor="bg-emerald-600"
      />

      {fichasGuardadas.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-5">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">No tienes fichas guardadas</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-xs">
            Guarda tus fichas favoritas desde el catálogo para acceder a ellas rápidamente.
          </p>
          <Link
            href="/fichas"
            className="inline-flex items-center gap-2 bg-purple-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-purple-700 transition-colors"
          >
            Ver todas las fichas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fichasGuardadas.map((ficha) => (
              <div key={ficha.id} className="relative">
                <Link
                  href={`/fichas/${ficha.id}`}
                  className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 p-5 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoriaColors[ficha.categoria] || "bg-gray-100 text-gray-600"}`}>
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
                <button
                  onClick={(e) => toggleFavorito(e, ficha.id)}
                  aria-label="Quitar de favoritos"
                  className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 hover:scale-110 transition-transform"
                >
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/fichas"
              className="inline-flex items-center gap-2 text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors"
            >
              Ver todas las fichas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
