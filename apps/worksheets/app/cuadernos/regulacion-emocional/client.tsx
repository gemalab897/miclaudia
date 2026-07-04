"use client";

import Link from "next/link";

export default function CuadernoClient() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Barra superior */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/worksheets/self-esteem"
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-teal-600 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver
            </Link>
            <span className="text-slate-200">|</span>
            <div className="flex items-center gap-2">
              <span className="text-lg">🧠</span>
              <div>
                <h1 className="text-sm font-bold text-slate-900 leading-tight">
                  Cuaderno de Regulación Emocional
                </h1>
                <p className="text-[11px] text-slate-400 leading-tight">62 páginas · 8 módulos · TCD + TCC</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Usa Ctrl+P para imprimir
            </span>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors px-4 py-1.5 rounded-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Imprimir / PDF
            </button>
          </div>
        </div>
      </div>

      {/* Contenido del cuaderno en iframe */}
      <div className="w-full" style={{ height: "calc(100vh - 57px)" }}>
        <iframe
          src="/cuadernos/regulacion-emocional.html"
          className="w-full h-full border-0"
          title="Cuaderno Terapéutico de Regulación Emocional"
        />
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          iframe { height: 100vh; }
        }
      `}</style>
    </div>
  );
}
