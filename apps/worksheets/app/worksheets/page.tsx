import Link from "next/link";
import { categories, worksheets } from "@/app/data/worksheets";

const colorMap: Record<string, { bg: string; border: string; badge: string }> = {
  "#3b82f6": { bg: "rgba(59,130,246,0.08)", border: "#bfdbfe", badge: "rgba(59,130,246,0.12)" },
  "#8b5cf6": { bg: "rgba(139,92,246,0.08)", border: "#ddd6fe", badge: "rgba(139,92,246,0.12)" },
  "#f59e0b": { bg: "rgba(245,158,11,0.08)", border: "#fde68a", badge: "rgba(245,158,11,0.12)" },
  "#06b6d4": { bg: "rgba(6,182,212,0.08)",  border: "#a5f3fc", badge: "rgba(6,182,212,0.12)"  },
  "#ec4899": { bg: "rgba(236,72,153,0.08)", border: "#fbcfe8", badge: "rgba(236,72,153,0.12)" },
  "#10b981": { bg: "rgba(16,185,129,0.08)", border: "#a7f3d0", badge: "rgba(16,185,129,0.12)" },
  "#f97316": { bg: "rgba(249,115,22,0.08)", border: "#fed7aa", badge: "rgba(249,115,22,0.12)" },
  "#64748b": { bg: "rgba(100,116,139,0.08)",border: "#cbd5e1", badge: "rgba(100,116,139,0.12)"},
};

export default function AllWorksheetsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-teal-600 font-medium hover:text-teal-700 mb-4 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-[28px] font-extrabold text-slate-900 mb-2">All Worksheets</h1>
        <p className="text-slate-500 text-sm">{worksheets.length} worksheets across {categories.length} clinical domains</p>
      </div>

      {/* Each category section */}
      <div className="space-y-12">
        {categories.map((cat) => {
          const catWorksheets = worksheets.filter((w) => w.category === cat.id);
          const colors = colorMap[cat.color] ?? { bg: "rgba(100,116,139,0.08)", border: "#cbd5e1", badge: "rgba(100,116,139,0.12)" };

          return (
            <div key={cat.id}>
              {/* Category header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900 text-[17px]">{cat.title}</h2>
                    <p className="text-xs text-slate-400">{catWorksheets.length} worksheets</p>
                  </div>
                </div>
                <Link
                  href={`/worksheets/${cat.id}`}
                  className="text-xs font-bold transition-colors"
                  style={{ color: cat.color }}
                >
                  View all →
                </Link>
              </div>

              {/* Worksheet cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {catWorksheets.map((ws) => (
                  <Link
                    key={ws.id}
                    href={`/worksheets/${cat.id}/${ws.id}`}
                    className="group bg-white rounded-xl p-4 flex flex-col hover:shadow-md transition-all"
                    style={{
                      boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
                      border: `1px solid ${colors.border}`,
                      borderLeft: `3px solid ${cat.color}`,
                    }}
                  >
                    <h3 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-teal-700 transition-colors leading-snug">
                      {ws.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1">{ws.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[10px] font-medium text-slate-400">
                        {ws.fields.length} fields
                      </span>
                      <span className="text-[11px] font-bold text-teal-600 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                        Open
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
