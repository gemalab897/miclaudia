"use client";

import { useState, useEffect } from "react";
import type { CasoClinico, Sesion } from "@/app/data/casos";

interface Props {
  caso: CasoClinico;
}

interface SesionCardProps {
  sesion: Sesion;
  index: number;
  casoId: string;
  revisadas: Set<number>;
  toggleRevisada: (numero: number) => void;
}

function SesionCard({ sesion, index, revisadas, toggleRevisada }: SesionCardProps) {
  const [respuesta, setRespuesta] = useState("");
  const [revelado, setRevelado] = useState(false);
  const esRevisada = revisadas.has(sesion.numero);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] px-5 py-4 flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {sesion.numero}
        </div>
        <div className="flex-1">
          <div className="text-white font-semibold text-sm flex items-center gap-2">
            {sesion.titulo}
            {esRevisada && (
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white text-xs font-bold flex-shrink-0">
                ✓
              </span>
            )}
          </div>
          <div className="text-white/60 text-xs">Sesión {sesion.numero} de {index + 1}</div>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Objetivos y técnicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-blue-50 rounded-xl p-3">
            <div className="text-xs font-semibold text-blue-700 mb-1.5">Objetivos</div>
            <ul className="space-y-1">
              {sesion.objetivos.map((o, i) => (
                <li key={i} className="text-xs text-blue-800 flex gap-1.5">
                  <span className="text-blue-400 flex-shrink-0">→</span>{o}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-50 rounded-xl p-3">
            <div className="text-xs font-semibold text-emerald-700 mb-1.5">Técnicas</div>
            <div className="flex flex-wrap gap-1">
              {sesion.tecnicas.map((t, i) => (
                <span key={i} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Pregunta de reflexión */}
        {!revelado && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-amber-600">🤔</span>
              <span className="text-sm font-semibold text-amber-800">Reflexión clínica</span>
            </div>
            <p className="text-sm text-amber-700 mb-3">
              Antes de ver cómo se trabajó esta sesión: ¿qué harías tú? ¿Qué técnica aplicarías para lograr estos objetivos?
            </p>
            <textarea
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
              placeholder="Escribe tu planteamiento aquí..."
              rows={3}
              className="w-full border border-amber-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white resize-none placeholder:text-amber-300"
            />
            <button
              onClick={() => setRevelado(true)}
              className="mt-3 bg-amber-500 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-amber-600 transition-colors"
            >
              Ver resolución del caso →
            </button>
          </div>
        )}

        {/* Descripción revelada */}
        {revelado && (
          <div className="space-y-3">
            {respuesta && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                <div className="text-xs font-semibold text-amber-700 mb-1">Tu respuesta</div>
                <p className="text-sm text-amber-800">{respuesta}</p>
              </div>
            )}
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="text-xs font-semibold text-gray-500 mb-2">Cómo se trabajó en el caso</div>
              <p className="text-sm text-gray-700 leading-relaxed">{sesion.descripcion}</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
              <div className="text-xs font-semibold text-emerald-700 mb-1">Resultado</div>
              <p className="text-sm text-emerald-800">{sesion.resultado}</p>
            </div>
            {sesion.tarea && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
                <div className="text-xs font-semibold text-blue-700 mb-1">Tarea para casa</div>
                <p className="text-sm text-blue-800">{sesion.tarea}</p>
              </div>
            )}
          </div>
        )}

        {/* Marcar como revisada */}
        <div className="pt-2 border-t border-slate-100">
          {esRevisada ? (
            <button
              onClick={() => toggleRevisada(sesion.numero)}
              className="text-sm font-medium text-emerald-600 flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
            >
              <span className="text-emerald-500">✓</span> Sesión revisada
            </button>
          ) : (
            <button
              onClick={() => toggleRevisada(sesion.numero)}
              className="text-sm font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-colors"
            >
              Marcar como revisada
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CasoInteractivo({ caso }: Props) {
  const [mostrarFormulacion, setMostrarFormulacion] = useState(false);
  const [revisadas, setRevisadas] = useState<Set<number>>(new Set());

  useEffect(() => {
    const key = `caso-progreso-${caso.id}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        const parsed: number[] = JSON.parse(stored);
        setRevisadas(new Set(parsed));
      } catch {
        // ignore malformed data
      }
    }
  }, [caso.id]);

  const toggleRevisada = (numero: number) => {
    setRevisadas((prev) => {
      const next = new Set(prev);
      if (next.has(numero)) {
        next.delete(numero);
      } else {
        next.add(numero);
      }
      const key = `caso-progreso-${caso.id}`;
      localStorage.setItem(key, JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const totalSesiones = caso.sesiones.length;
  const sesionesRevisadas = caso.sesiones.filter((s) => revisadas.has(s.numero)).length;
  const progresoPct = totalSesiones > 0 ? (sesionesRevisadas / totalSesiones) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Barra de progreso */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-slate-700">
            {sesionesRevisadas} de {totalSesiones} sesiones revisadas
          </span>
          <span className="text-sm font-bold text-emerald-600">{Math.round(progresoPct)}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-emerald-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progresoPct}%` }}
          />
        </div>
      </div>

      {/* Presentación */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-3">Presentación del caso</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{caso.presentacion}</p>
      </div>

      {/* Formulación cognitiva (colapsable) */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <button
          onClick={() => setMostrarFormulacion(!mostrarFormulacion)}
          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
        >
          <span className="font-bold text-[#1e3a5f]">Formulación cognitiva</span>
          <svg className={`w-5 h-5 text-gray-400 transition-transform ${mostrarFormulacion ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {mostrarFormulacion && (
          <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100">
            <div className="mt-4">
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">Historia relevante</div>
              <p className="text-sm text-gray-700 leading-relaxed">{caso.formulacionCognitiva.eventosVitales}</p>
            </div>
            <div className="mt-4">
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">Creencias nucleares</div>
              <ul className="space-y-1.5">
                {caso.formulacionCognitiva.creenciasNucleares.map((c, i) => (
                  <li key={i} className="text-sm text-gray-700 bg-red-50 px-3 py-1.5 rounded-lg">"{c}"</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">Supuestos disfuncionales</div>
              <ul className="space-y-1.5">
                {caso.formulacionCognitiva.supuestosDisfuncionales.map((s, i) => (
                  <li key={i} className="text-sm text-gray-700 bg-amber-50 px-3 py-1.5 rounded-lg">{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">Pensamientos automáticos</div>
              <ul className="space-y-1.5">
                {caso.formulacionCognitiva.pensamientosAutomaticos.map((p, i) => (
                  <li key={i} className="text-sm text-gray-700 bg-blue-50 px-3 py-1.5 rounded-lg italic">"{p}"</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">Conductas problemáticas</div>
              <ul className="space-y-1">
                {caso.formulacionCognitiva.conductas.map((c, i) => (
                  <li key={i} className="text-sm text-gray-600 flex gap-2"><span className="text-gray-400">·</span>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">Emociones prevalentes</div>
              <div className="flex flex-wrap gap-2">
                {caso.formulacionCognitiva.emocionesPrevalentes.map((e, i) => (
                  <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full">{e}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Objetivos terapéuticos */}
      <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-5">
        <h2 className="text-sm font-bold text-emerald-800 mb-3">Objetivos terapéuticos</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {caso.objetivosTerapeuticos.map((o, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
              <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>{o}
            </li>
          ))}
        </ul>
      </div>

      {/* Sesiones interactivas */}
      <div>
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">Desarrollo sesión a sesión</h2>
        <div className="space-y-4">
          {caso.sesiones.map((sesion, i) => (
            <SesionCard
              key={sesion.numero}
              sesion={sesion}
              index={i}
              casoId={caso.id}
              revisadas={revisadas}
              toggleRevisada={toggleRevisada}
            />
          ))}
        </div>
      </div>

      {/* Resultados y aprendizajes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h2 className="text-sm font-bold text-[#1e3a5f] mb-3">Resultados finales</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{caso.resultados}</p>
        </div>
        <div className="bg-[#1e3a5f] rounded-2xl p-5">
          <h2 className="text-sm font-bold text-white mb-3">Aprendizajes clínicos clave</h2>
          <ul className="space-y-2">
            {caso.aprendizajesClinicos.map((a, i) => (
              <li key={i} className="text-sm text-white/80 flex gap-2 leading-relaxed">
                <span className="text-[#10b981] flex-shrink-0 font-bold">{i + 1}.</span>{a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
