import Link from "next/link";
import { categories, worksheets } from "@/app/data/worksheets";

export default function AllWorksheetsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-4">
            <Link href="/" className="hover:text-teal-600 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-slate-600">Todas las fichas</span>
          </div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-[24px] font-extrabold text-slate-900 leading-tight mb-1">Todas las fichas</h1>
              <p className="text-sm text-slate-400">{worksheets.length} fichas en {categories.length} áreas clínicas</p>
            </div>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mt-5">
            {categories.map((cat) => {
              const count = worksheets.filter((w) => w.category === cat.id).length;
              return (
                <a key={cat.id} href={`#${cat.id}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all hover:opacity-80"
                  style={{ borderColor: `${cat.color}30`, background: `${cat.color}0c`, color: cat.color }}>
                  {cat.icon} {cat.title}
                  <span className="opacity-60">·{count}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-14">
        {categories.map((cat) => {
          const catWorksheets = worksheets.filter((w) => w.category === cat.id);
          return (
            <div key={cat.id} id={cat.id}>
              {/* Section header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${cat.color}15`, border: `1.5px solid ${cat.color}20` }}>
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-slate-900 text-[16px] leading-tight">{cat.title}</h2>
                    <p className="text-[11px] text-slate-400 font-medium">{catWorksheets.length} fichas</p>
                  </div>
                </div>
                <Link href={`/worksheets/${cat.id}`}
                  className="text-[11px] font-bold flex items-center gap-1 transition-colors hover:opacity-80"
                  style={{ color: cat.color }}>
                  Ver categoría
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Divider */}
              <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${cat.color}40 0%, transparent 60%)` }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {catWorksheets.map((ws) => (
                  <Link
                    key={ws.id}
                    href={`/worksheets/${cat.id}/${ws.id}`}
                    className="group bg-white rounded-xl p-4 flex flex-col transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      boxShadow: "0 1px 3px rgba(15,23,42,0.05), 0 2px 8px rgba(15,23,42,0.04)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      borderLeft: `3px solid ${cat.color}`,
                    }}
                  >
                    <h3 className="font-bold text-slate-800 text-[13px] mb-1.5 group-hover:text-teal-700 transition-colors leading-snug">
                      {ws.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed flex-1 line-clamp-2">{ws.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-medium">{ws.fields.length} campos</span>
                      <span className="text-[11px] font-bold flex items-center gap-0.5 group-hover:gap-1 transition-all"
                        style={{ color: cat.color }}>
                        Abrir
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
