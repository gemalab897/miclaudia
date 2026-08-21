"use client";

import { useState } from "react";
import type { Sesion } from "@/data/casos";

interface Props {
  sesiones: Sesion[];
  accent: string;
}

export default function SessionReveal({ sesiones, accent }: Props) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggle = (num: number) =>
    setRevealed((prev) => {
      const next = new Set(prev);
      next.has(num) ? next.delete(num) : next.add(num);
      return next;
    });

  return (
    <section className="mb-6">
      <h2 className="text-base font-bold text-[#1e3a5f] mb-2">Sessions ({sesiones.length})</h2>
      <p className="text-sm text-slate-500 mb-5">
        Reflect on each session before revealing the therapist&apos;s outcome.
      </p>

      <div className="space-y-3">
        {sesiones.map((sesion) => {
          const isRevealed = revealed.has(sesion.numero);
          return (
            <div key={sesion.numero} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: accent }}
                  >
                    {sesion.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1e3a5f] text-sm mb-2">{sesion.titulo}</h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {sesion.objetivos.map((obj) => (
                        <span key={obj} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{obj}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {sesion.tecnicas.map((t) => (
                        <span key={t} className="text-[11px] px-2 py-0.5 rounded-full text-white" style={{ background: `${accent}cc` }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mt-4 md:ml-[52px]">
                  {sesion.descripcion}
                </p>
              </div>

              <div className="border-t border-slate-100">
                {!isRevealed ? (
                  <button
                    onClick={() => toggle(sesion.numero)}
                    className="w-full py-3 text-sm font-semibold text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Reveal session outcome
                  </button>
                ) : (
                  <div className="p-5" style={{ background: `${accent}10` }}>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: accent }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="flex-1">
                        <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: accent }}>Outcome</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{sesion.resultado}</p>
                        {sesion.tarea && (
                          <div className="mt-3 pt-3 border-t border-black/5">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Assigned homework</p>
                            <p className="text-sm text-slate-600 leading-relaxed">{sesion.tarea}</p>
                          </div>
                        )}
                        <button onClick={() => toggle(sesion.numero)} className="mt-3 text-xs text-slate-400 hover:text-slate-600 transition-colors">
                          Hide outcome
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
