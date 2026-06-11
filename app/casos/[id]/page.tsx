import { notFound } from "next/navigation";
import Link from "next/link";
import { casos } from "@/app/data/casos";
import CasoInteractivo from "./CasoInteractivo";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return casos.map((c) => ({ id: c.id }));
}

export default async function CasoPage({ params }: Props) {
  const { id } = await params;
  const caso = casos.find((c) => c.id === id);
  if (!caso) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link
        href="/casos"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1e3a5f] transition-colors mb-6"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Volver a casos
      </Link>

      {/* Header */}
      <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a5080] rounded-2xl p-6 mb-8 text-white">
        <div className="text-xs bg-white/20 inline-block px-3 py-1 rounded-full mb-3">{caso.diagnostico}</div>
        <h1 className="text-2xl font-bold mb-2">{caso.titulo}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-white/70 mb-3">
          <span>Paciente: {caso.paciente}</span>
          <span>{caso.sexo}, {caso.edad} años</span>
          <span>{caso.totalSesiones} sesiones</span>
        </div>
        <p className="text-white/80 text-sm leading-relaxed">{caso.resumen}</p>
      </div>

      <CasoInteractivo caso={caso} />
    </div>
  );
}
