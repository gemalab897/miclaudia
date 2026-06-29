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

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/worksheets" className="hover:text-teal-600 transition-colors">Worksheets</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">{cat.title}</span>
      </div>

      {/* Category hero */}
      <div
        className="rounded-2xl p-7 mb-8 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg,${cat.color}18,${cat.color}08)`, border: `1px solid ${cat.color}30` }}
      >
        <div className="flex items-start gap-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
            style={{ background: `${cat.color}20` }}
          >
            {cat.icon}
          </div>
          <div>
            <h1 className="text-[24px] font-extrabold text-slate-900 mb-2 leading-tight">{cat.title}</h1>
            <p className="text-slate-600 text-sm leading-relaxed">{cat.description}</p>
            <div className="mt-3 flex items-center gap-2">
              <span
                className="text-[11px] font-bold px-3 py-1 rounded-full"
                style={{ background: `${cat.color}18`, color: cat.color }}
              >
                {ws.length} worksheets
              </span>
              <span className="text-[11px] text-slate-400">Interactive · Printable · Auto-saved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Worksheet list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ws.map((sheet) => (
          <Link
            key={sheet.id}
            href={`/worksheets/${category}/${sheet.id}`}
            className="group bg-white rounded-2xl p-5 flex flex-col card-hover"
            style={{
              boxShadow: "0 1px 3px rgba(15,23,42,0.06), 0 4px 12px rgba(15,23,42,0.06)",
              border: "1px solid #e2e8f0",
              borderLeft: `4px solid ${cat.color}`,
            }}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-bold text-slate-900 text-[15px] leading-snug group-hover:text-teal-700 transition-colors">
                {sheet.title}
              </h3>
              {sheet.printable && (
                <span className="flex-shrink-0 text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500 uppercase tracking-wide">
                  Printable
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed flex-1">{sheet.description}</p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">{sheet.fields.length} interactive fields</span>
              <span className="text-sm font-bold text-teal-600 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                Open worksheet
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
