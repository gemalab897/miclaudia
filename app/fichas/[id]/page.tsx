import { notFound } from "next/navigation";
import Link from "next/link";
import { fichas } from "@/app/data/fichas";
import FichaInteractiva from "./FichaInteractiva";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return fichas.map((f) => ({ id: f.id }));
}

export default async function FichaPage({ params }: Props) {
  const { id } = await params;
  const ficha = fichas.find((f) => f.id === id);

  if (!ficha) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Back + Print buttons */}
      <div className="flex items-center justify-between mb-6 no-print">
        <Link
          href="/fichas"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1e3a5f] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a Fichas
        </Link>

        <button
          onClick={() => typeof window !== "undefined" && window.print()}
          className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-[#2a4a6f] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Imprimir ficha
        </button>
      </div>

      {/* Ficha Header */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl p-6 mb-6">
        <div className="text-xs bg-white/20 inline-block px-3 py-1 rounded-full mb-3">{ficha.categoria}</div>
        <h1 className="text-2xl font-bold mb-2">{ficha.titulo}</h1>
        <p className="text-purple-200 text-sm leading-relaxed">{ficha.descripcion}</p>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 no-print">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <div className="font-semibold text-blue-800 text-sm mb-1">Instrucciones</div>
            <p className="text-blue-700 text-sm leading-relaxed">{ficha.instrucciones}</p>
          </div>
        </div>
      </div>

      {/* Interactive Form */}
      <FichaInteractiva ficha={ficha} />

      {/* Clinical Notes */}
      {ficha.notaClinica && (
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 no-print">
          <div className="font-semibold text-amber-800 text-sm mb-1 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Nota Clínica (solo para el terapeuta)
          </div>
          <p className="text-amber-800 text-sm leading-relaxed">{ficha.notaClinica}</p>
        </div>
      )}
    </div>
  );
}
