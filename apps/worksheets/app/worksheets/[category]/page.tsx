import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getWorksheetsByCategory } from "@/app/data/worksheets";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.id === category);
  if (!cat) notFound();

  const ws = getWorksheetsByCategory(category);
  const printable = ws.filter((w) => w.printable).length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Category hero */}
      <div className="relative overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top right, ${cat.color}0c 0%, transparent 65%)` }} />
        <div className="max-w-4xl mx-auto px-6 pt-8 pb-10 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
            <Link href="/" className="hover:text-teal-600 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/worksheets" className="hover:text-teal-600 transition-colors">Fichas</Link>
            <span>/</span>
            <span className="text-slate-600">{cat.title}</span>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: `${cat.color}18`, border: `2px solid ${cat.color}20` }}>
              {cat.icon}
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: cat.color }}>
                Área clínica
              </p>
              <h1 className="text-[26px] font-extrabold text-slate-900 leading-tight mb-2">{cat.title}</h1>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xl">{cat.description}</p>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full"
                  style={{ background: `${cat.color}12`, color: cat.color }}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {ws.length} fichas
                </span>
                {printable > 0 && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-500">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    {printable} imprimibles
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-500">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  Autoguardado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Worksheets grid */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ws.map((sheet, i) => (
            <Link
              key={sheet.id}
              href={`/worksheets/${category}/${sheet.id}`}
              className="group bg-white rounded-2xl p-5 flex flex-col transition-all duration-200 hover:-translate-y-0.5"
              style={{
                boxShadow: "0 1px 3px rgba(15,23,42,0.05), 0 4px 16px rgba(15,23,42,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
                borderLeft: `4px solid ${cat.color}`,
              }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-start gap-2.5 flex-1 min-w-0">
                  <span className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black mt-0.5"
                    style={{ background: `${cat.color}15`, color: cat.color }}>
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-slate-900 text-[14px] leading-snug group-hover:text-teal-700 transition-colors">
                    {sheet.title}
                  </h3>
                </div>
                {sheet.printable && (
                  <span className="flex-shrink-0 text-[9px] font-black px-2 py-0.5 rounded bg-slate-100 text-slate-400 uppercase tracking-wide">
                    PDF
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed flex-1 ml-7">{sheet.description}</p>

              {/* Card footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  {sheet.fields.length} campos interactivos
                </span>
                <span className="text-xs font-bold flex items-center gap-1 transition-all group-hover:gap-1.5"
                  style={{ color: cat.color }}>
                  Abrir ficha
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
