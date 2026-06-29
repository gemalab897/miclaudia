"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import type { Worksheet, Field } from "@/app/data/worksheets";

interface Props {
  worksheet: Worksheet;
  categoryId: string;
  categoryTitle: string;
  categoryColor: string;
  categoryIcon: string;
}

export default function WorksheetClient({ worksheet, categoryId, categoryTitle, categoryColor, categoryIcon }: Props) {
  const storageKey = `ws-${worksheet.id}`;
  const [values, setValues] = useState<Record<string, string | string[]>>({});
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        setValues(parsed.values ?? {});
        setSavedAt(parsed.savedAt ?? null);
      }
    } catch {}
  }, [storageKey]);

  const save = useCallback((newValues: Record<string, string | string[]>) => {
    try {
      const now = new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
      localStorage.setItem(storageKey, JSON.stringify({ values: newValues, savedAt: now }));
      setSavedAt(now);
      setJustSaved(true);
      setTimeout(() => setJustSaved(false), 2000);
    } catch {}
  }, [storageKey]);

  const handleText = (id: string, value: string) => {
    const next = { ...values, [id]: value };
    setValues(next);
    save(next);
  };

  const handleChecklist = (fieldId: string, optionId: string, checked: boolean) => {
    const current = (values[fieldId] as string[]) ?? [];
    const next = checked ? [...current, optionId] : current.filter((x) => x !== optionId);
    const newValues = { ...values, [fieldId]: next };
    setValues(newValues);
    save(newValues);
  };

  const handleReset = () => {
    if (confirm("¿Borrar todas las respuestas de esta ficha?")) {
      setValues({});
      setSavedAt(null);
      localStorage.removeItem(storageKey);
    }
  };

  const renderField = (field: Field) => {
    const baseInput = "w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:border-transparent resize-y bg-white placeholder:text-slate-300";

    return (
      <div key={field.id} className="mb-6">
        <label className="block text-sm font-semibold text-slate-800 mb-2 leading-snug whitespace-pre-line">
          {field.label}
        </label>
        {field.hint && (
          <p className="text-xs text-slate-400 mb-2 leading-relaxed">{field.hint}</p>
        )}

        {field.type === "text" && (
          <input
            type="text"
            value={(values[field.id] as string) ?? ""}
            onChange={(e) => handleText(field.id, e.target.value)}
            placeholder={field.placeholder}
            className={baseInput}
            style={{ "--tw-ring-color": categoryColor } as React.CSSProperties}
          />
        )}

        {field.type === "textarea" && (
          <textarea
            value={(values[field.id] as string) ?? ""}
            onChange={(e) => handleText(field.id, e.target.value)}
            placeholder={field.placeholder}
            rows={field.rows ?? 3}
            className={baseInput}
            style={{ "--tw-ring-color": categoryColor } as React.CSSProperties}
          />
        )}

        {field.type === "scale" && (
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">{field.min ?? 0}</span>
            <input
              type="range"
              min={field.min ?? 0}
              max={field.max ?? 10}
              value={(values[field.id] as string) ?? String((field.min ?? 0))}
              onChange={(e) => handleText(field.id, e.target.value)}
              className="flex-1"
              style={{ accentColor: categoryColor }}
            />
            <span className="text-xs text-slate-400">{field.max ?? 10}</span>
            <span
              className="text-sm font-bold w-8 text-center"
              style={{ color: categoryColor }}
            >
              {(values[field.id] as string) ?? (field.min ?? 0)}
            </span>
          </div>
        )}

        {field.type === "checklist" && field.options && (
          <div className="checklist-grid">
            {field.options.map((opt) => {
              const checked = ((values[field.id] as string[]) ?? []).includes(opt.id);
              return (
                <label
                  key={opt.id}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg cursor-pointer transition-colors hover:bg-slate-50"
                  style={checked ? { background: `${categoryColor}10` } : {}}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => handleChecklist(field.id, opt.id, e.target.checked)}
                    className="mt-0.5 flex-shrink-0"
                    style={{ accentColor: categoryColor }}
                  />
                  <span className="text-sm text-slate-700 leading-snug">{opt.label}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Migas de pan */}
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 no-print">
        <Link href="/" className="hover:text-teal-600 transition-colors">Inicio</Link>
        <span>/</span>
        <Link href="/worksheets" className="hover:text-teal-600 transition-colors">Fichas</Link>
        <span>/</span>
        <Link href={`/worksheets/${categoryId}`} className="hover:text-teal-600 transition-colors">{categoryTitle}</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">{worksheet.title}</span>
      </div>

      {/* Cabecera */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{ background: `linear-gradient(135deg,${categoryColor}14,${categoryColor}06)`, border: `1px solid ${categoryColor}25` }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${categoryColor}20` }}
            >
              {categoryIcon}
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] mb-1" style={{ color: categoryColor }}>
                {categoryTitle}
              </div>
              <h1 className="text-[22px] font-extrabold text-slate-900 leading-tight mb-2">{worksheet.title}</h1>
              <p className="text-sm text-slate-600 leading-relaxed">{worksheet.description}</p>
            </div>
          </div>
          {/* Botones de acción */}
          <div className="flex items-center gap-2 flex-shrink-0 no-print">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Imprimir
            </button>
            <button
              onClick={handleReset}
              className="text-xs font-bold px-3 py-2 rounded-lg border border-slate-200 text-slate-400 hover:text-rose-500 hover:border-rose-200 transition-colors"
            >
              Borrar
            </button>
          </div>
        </div>

        {/* Objetivo e instrucciones */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-xl p-4">
            <div className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{ color: categoryColor }}>Objetivo</div>
            <p className="text-xs text-slate-600 leading-relaxed">{worksheet.goal}</p>
          </div>
          <div className="bg-white/70 rounded-xl p-4">
            <div className="text-[10px] font-bold uppercase tracking-wide mb-1 text-slate-400">Instrucciones</div>
            <p className="text-xs text-slate-600 leading-relaxed">{worksheet.instructions}</p>
          </div>
        </div>
      </div>

      {/* Nota para el terapeuta */}
      {worksheet.therapistNote && (
        <div className="mb-6 flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 no-print">
          <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-amber-600 mb-0.5">Nota para el terapeuta</div>
            <p className="text-xs text-amber-800 leading-relaxed">{worksheet.therapistNote}</p>
          </div>
        </div>
      )}

      {/* Estado de guardado */}
      <div className="flex items-center justify-between mb-4 no-print">
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: justSaved ? "#10b981" : savedAt ? "#94a3b8" : "#e2e8f0" }}
          />
          {justSaved ? (
            <span className="text-emerald-600 font-medium">Guardado</span>
          ) : savedAt ? (
            <span>Guardado a las {savedAt}</span>
          ) : (
            <span>Se guarda automáticamente mientras escribes</span>
          )}
        </div>
      </div>

      {/* Campos */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        {worksheet.fields.map((field) => renderField(field))}
      </div>

      {/* Botones inferiores */}
      <div className="mt-6 flex items-center justify-between no-print">
        <Link
          href={`/worksheets/${categoryId}`}
          className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-teal-600 transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a {categoryTitle}
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl text-white transition-all hover:opacity-90"
          style={{ background: `linear-gradient(135deg,${categoryColor},${categoryColor}cc)`, boxShadow: `0 4px 14px ${categoryColor}40` }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Imprimir ficha
        </button>
      </div>
    </div>
  );
}
