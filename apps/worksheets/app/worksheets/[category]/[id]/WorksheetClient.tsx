"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import type { Worksheet, Field } from "@/app/data/worksheets";

interface Props {
  worksheet: Worksheet;
  categoryId: string;
  categoryTitle: string;
  categoryColor: string;
  categoryIcon: string;
}

function scaleColor(value: number, min: number, max: number, baseColor: string): string {
  const pct = (value - min) / (max - min);
  if (pct < 0.33) return "#22c55e";
  if (pct < 0.66) return "#f59e0b";
  return "#ef4444";
}

function completion(fields: Field[], values: Record<string, string | string[]>): number {
  if (!fields.length) return 0;
  let filled = 0;
  for (const f of fields) {
    const v = values[f.id];
    if (f.type === "checklist") {
      if (Array.isArray(v) && v.length > 0) filled++;
    } else if (f.type === "scale") {
      filled++; // always has a value
    } else if (typeof v === "string" && v.trim().length > 0) {
      filled++;
    }
  }
  return Math.round((filled / fields.length) * 100);
}

export default function WorksheetClient({ worksheet, categoryId, categoryTitle, categoryColor, categoryIcon }: Props) {
  const storageKey = `ws-${worksheet.id}`;
  const [values, setValues] = useState<Record<string, string | string[]>>({});
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  // Initialize scale fields with their min value
  useEffect(() => {
    const defaults: Record<string, string | string[]> = {};
    for (const f of worksheet.fields) {
      if (f.type === "scale") defaults[f.id] = String(f.min ?? 0);
    }
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        setValues({ ...defaults, ...(parsed.values ?? {}) });
        setSavedAt(parsed.savedAt ?? null);
      } else {
        setValues(defaults);
      }
    } catch {
      setValues(defaults);
    }
  }, [storageKey, worksheet.fields]);

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
    if (confirm("¿Borrar todas las respuestas de esta ficha? Esta acción no se puede deshacer.")) {
      const defaults: Record<string, string | string[]> = {};
      for (const f of worksheet.fields) {
        if (f.type === "scale") defaults[f.id] = String(f.min ?? 0);
      }
      setValues(defaults);
      setSavedAt(null);
      localStorage.removeItem(storageKey);
    }
  };

  const pct = useMemo(() => completion(worksheet.fields, values), [worksheet.fields, values]);
  const filledCount = useMemo(() => {
    let n = 0;
    for (const f of worksheet.fields) {
      const v = values[f.id];
      if (f.type === "checklist" && Array.isArray(v) && v.length > 0) n++;
      else if (f.type === "scale") n++;
      else if (typeof v === "string" && v.trim().length > 0) n++;
    }
    return n;
  }, [worksheet.fields, values]);

  const ringColor = `${categoryColor}60`;

  const renderField = (field: Field, index: number) => {
    return (
      <div key={field.id} className="field-block">
        {/* Field header */}
        <div className="field-header">
          <div className="field-number" style={{ background: `${categoryColor}18`, color: categoryColor }}>
            {index + 1}
          </div>
          <label htmlFor={field.id} className="field-label">
            {field.label}
          </label>
          {field.type === "checklist" && field.options && (
            <span className="field-badge" style={{ color: categoryColor }}>
              {((values[field.id] as string[]) ?? []).length}/{field.options.length} seleccionados
            </span>
          )}
          {field.type === "textarea" && typeof values[field.id] === "string" && (
            <span className="field-badge" style={{ color: categoryColor }}>
              {(values[field.id] as string).length} car.
            </span>
          )}
        </div>

        {field.hint && (
          <p className="field-hint">{field.hint}</p>
        )}

        {field.type === "text" && (
          <input
            id={field.id}
            type="text"
            value={(values[field.id] as string) ?? ""}
            onChange={(e) => handleText(field.id, e.target.value)}
            placeholder={field.placeholder}
            className="field-input"
            style={{ "--ring": ringColor } as React.CSSProperties}
          />
        )}

        {field.type === "textarea" && (
          <textarea
            id={field.id}
            value={(values[field.id] as string) ?? ""}
            onChange={(e) => handleText(field.id, e.target.value)}
            placeholder={field.placeholder}
            rows={field.rows ?? 3}
            className="field-input field-textarea"
            style={{ "--ring": ringColor } as React.CSSProperties}
          />
        )}

        {field.type === "scale" && (() => {
          const min = field.min ?? 0;
          const max = field.max ?? 10;
          const raw = (values[field.id] as string) ?? String(min);
          const num = Number(raw);
          const pctScale = ((num - min) / (max - min)) * 100;
          const color = scaleColor(num, min, max, categoryColor);
          return (
            <div className="scale-wrapper">
              <div className="scale-track">
                <div className="scale-fill" style={{ width: `${pctScale}%`, background: color }} />
              </div>
              <input
                id={field.id}
                type="range"
                min={min}
                max={max}
                value={raw}
                onChange={(e) => handleText(field.id, e.target.value)}
                className="scale-input"
                style={{ "--accent": color } as React.CSSProperties}
              />
              <div className="scale-labels">
                <span className="scale-label-num">{min}</span>
                <div className="scale-value-pill" style={{ background: color }}>
                  {num}
                </div>
                <span className="scale-label-num">{max}</span>
              </div>
            </div>
          );
        })()}

        {field.type === "checklist" && field.options && (
          <div className="checklist-grid">
            {field.options.map((opt) => {
              const checked = ((values[field.id] as string[]) ?? []).includes(opt.id);
              return (
                <label
                  key={opt.id}
                  className={`checklist-item${checked ? " checked" : ""}`}
                  style={checked ? { borderColor: categoryColor, background: `${categoryColor}0c` } : {}}
                >
                  <span className="checklist-box" style={checked ? { background: categoryColor, borderColor: categoryColor } : {}}>
                    {checked && (
                      <svg viewBox="0 0 12 10" fill="none" className="w-3 h-2.5">
                        <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => handleChecklist(field.id, opt.id, e.target.checked)}
                    className="sr-only"
                  />
                  <span className="checklist-label">{opt.label}</span>
                </label>
              );
            })}
          </div>
        )}

        {field.type === "table" && field.columns && (() => {
          const rows = field.rows ?? 4;
          return (
            <div className="table-wrapper">
              <table className="ws-table">
                <thead>
                  <tr>
                    {field.columns.map((col) => (
                      <th key={col.key} style={{ color: categoryColor }}>{col.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: rows }).map((_, ri) => (
                    <tr key={ri}>
                      {field.columns!.map((col) => {
                        const cellId = `${field.id}_${ri}_${col.key}`;
                        return (
                          <td key={col.key}>
                            <input
                              type="text"
                              value={(values[cellId] as string) ?? ""}
                              onChange={(e) => handleText(cellId, e.target.value)}
                              placeholder="—"
                              className="table-cell-input"
                            />
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })()}
      </div>
    );
  };

  return (
    <>
      <style>{`
        /* ── Layout ── */
        .ws-page { max-width: 780px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }

        /* ── Header ── */
        .ws-header {
          border-radius: 20px;
          padding: 1.5rem;
          margin-bottom: 1.75rem;
          position: relative;
          overflow: hidden;
        }
        .ws-header-top { display: flex; align-items: flex-start; gap: 1rem; }
        .ws-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.6rem; flex-shrink: 0;
        }
        .ws-meta { flex: 1; min-width: 0; }
        .ws-category-label {
          font-size: 10px; font-weight: 800; letter-spacing: .18em;
          text-transform: uppercase; margin-bottom: .25rem;
        }
        .ws-title {
          font-size: 1.4rem; font-weight: 900; color: #0f172a;
          line-height: 1.25; margin-bottom: .4rem;
        }
        .ws-desc { font-size: .82rem; color: #475569; line-height: 1.6; }

        /* Progress */
        .ws-progress-row {
          display: flex; align-items: center; gap: .75rem;
          margin-top: 1rem; padding-top: 1rem;
          border-top: 1px solid rgba(0,0,0,.06);
        }
        .ws-progress-track {
          flex: 1; height: 6px; background: rgba(0,0,0,.07);
          border-radius: 99px; overflow: hidden;
        }
        .ws-progress-fill {
          height: 100%; border-radius: 99px;
          transition: width .4s ease;
        }
        .ws-progress-label {
          font-size: 11px; font-weight: 700; white-space: nowrap; flex-shrink: 0;
        }

        /* Info cards */
        .ws-info-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: .75rem;
          margin-top: 1rem;
        }
        @media (max-width: 540px) { .ws-info-grid { grid-template-columns: 1fr; } }
        .ws-info-card {
          background: rgba(255,255,255,.75); backdrop-filter: blur(4px);
          border-radius: 12px; padding: .875rem;
        }
        .ws-info-card-label {
          font-size: 9.5px; font-weight: 800; text-transform: uppercase;
          letter-spacing: .16em; margin-bottom: .3rem;
        }
        .ws-info-card-text { font-size: .78rem; color: #475569; line-height: 1.55; }

        /* Therapist note */
        .ws-note {
          display: flex; gap: .75rem; padding: .875rem 1rem;
          background: #fffbeb; border: 1px solid #fde68a;
          border-radius: 14px; margin-bottom: 1.25rem;
        }
        .ws-note-icon { color: #d97706; flex-shrink: 0; margin-top: 1px; }
        .ws-note-title { font-size: 9.5px; font-weight: 800; text-transform: uppercase; letter-spacing: .15em; color: #92400e; margin-bottom: .2rem; }
        .ws-note-text { font-size: .78rem; color: #78350f; line-height: 1.55; }

        /* Save status */
        .ws-save-row {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 1rem;
        }
        .ws-save-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .ws-save-text { font-size: .72rem; color: #94a3b8; margin-left: .4rem; }

        /* Fields container */
        .ws-fields {
          background: white; border-radius: 20px; padding: 1.75rem;
          box-shadow: 0 1px 3px rgba(15,23,42,.05), 0 8px 24px rgba(15,23,42,.06);
          border: 1px solid #f1f5f9;
          display: flex; flex-direction: column; gap: 0;
        }
        .field-block {
          padding: 1.25rem 0;
          border-bottom: 1px solid #f1f5f9;
        }
        .field-block:last-child { border-bottom: none; padding-bottom: 0; }
        .field-block:first-child { padding-top: 0; }

        .field-header {
          display: flex; align-items: flex-start; gap: .6rem;
          margin-bottom: .6rem;
        }
        .field-number {
          width: 22px; height: 22px; border-radius: 6px; font-size: 10px;
          font-weight: 800; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }
        .field-label {
          font-size: .84rem; font-weight: 700; color: #1e293b;
          line-height: 1.45; flex: 1; white-space: pre-line; cursor: pointer;
        }
        .field-badge {
          font-size: 10px; font-weight: 700; white-space: nowrap;
          flex-shrink: 0; opacity: .8;
        }
        .field-hint {
          font-size: .75rem; color: #94a3b8; margin-bottom: .6rem;
          line-height: 1.5; margin-left: 1.65rem;
        }

        /* Inputs */
        .field-input {
          width: 100%; border: 1.5px solid #e2e8f0; border-radius: 10px;
          padding: .6rem .85rem; font-size: .84rem; color: #334155;
          background: #f8fafc; outline: none; transition: border-color .15s, box-shadow .15s;
          font-family: inherit;
        }
        .field-input:focus {
          border-color: var(--ring, #64748b);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring, #64748b) 20%, transparent);
          background: white;
        }
        .field-input::placeholder { color: #cbd5e1; }
        .field-textarea { resize: vertical; min-height: 72px; line-height: 1.6; }

        /* Scale */
        .scale-wrapper { display: flex; flex-direction: column; gap: .5rem; }
        .scale-track {
          height: 8px; background: #e2e8f0; border-radius: 99px;
          overflow: hidden; pointer-events: none;
        }
        .scale-fill { height: 100%; border-radius: 99px; transition: width .2s, background .2s; }
        .scale-input {
          width: 100%; accent-color: var(--accent, #64748b);
          cursor: pointer; margin: 0;
        }
        .scale-labels { display: flex; align-items: center; justify-content: space-between; }
        .scale-label-text { font-size: .72rem; color: #64748b; font-weight: 600; flex: 1; }
        .scale-label-text:last-child { text-align: right; }
        .scale-label-num { font-size: .72rem; color: #94a3b8; }
        .scale-value-pill {
          font-size: .85rem; font-weight: 900; color: white;
          padding: .15rem .6rem; border-radius: 99px;
          min-width: 36px; text-align: center;
          transition: background .2s;
        }

        /* Checklist */
        .checklist-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: .5rem;
        }
        @media (max-width: 540px) { .checklist-grid { grid-template-columns: 1fr; } }
        .checklist-item {
          display: flex; align-items: flex-start; gap: .6rem;
          padding: .6rem .75rem; border-radius: 10px; cursor: pointer;
          border: 1.5px solid #e2e8f0; background: #f8fafc;
          transition: border-color .15s, background .15s;
        }
        .checklist-item:hover { border-color: #cbd5e1; background: #f1f5f9; }
        .checklist-item.checked { }
        .checklist-box {
          width: 18px; height: 18px; border-radius: 5px; flex-shrink: 0;
          border: 1.5px solid #cbd5e1; background: white;
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px; transition: background .15s, border-color .15s;
        }
        .checklist-label { font-size: .8rem; color: #334155; line-height: 1.45; }

        /* Table */
        .table-wrapper { overflow-x: auto; border-radius: 10px; border: 1.5px solid #e2e8f0; }
        .ws-table { width: 100%; border-collapse: collapse; font-size: .8rem; }
        .ws-table th {
          padding: .6rem .75rem; font-size: .72rem; font-weight: 800;
          text-transform: uppercase; letter-spacing: .1em;
          background: #f8fafc; border-bottom: 1.5px solid #e2e8f0;
          text-align: left; white-space: nowrap;
        }
        .ws-table td { padding: 0; border-bottom: 1px solid #f1f5f9; }
        .ws-table tr:last-child td { border-bottom: none; }
        .table-cell-input {
          width: 100%; padding: .55rem .75rem; font-size: .8rem; color: #334155;
          border: none; outline: none; background: transparent; font-family: inherit;
        }
        .table-cell-input:focus { background: #f0fdf4; }
        .ws-table tr:hover td { background: #fafafa; }

        /* Bottom bar */
        .ws-bottom {
          margin-top: 1.5rem;
          display: flex; align-items: center; justify-content: space-between; gap: 1rem;
        }
        .ws-btn-back {
          display: flex; align-items: center; gap: .4rem;
          font-size: .84rem; font-weight: 600; color: #64748b;
          transition: color .15s; text-decoration: none;
        }
        .ws-btn-back:hover { color: #0d9488; }
        .ws-btn-print {
          display: flex; align-items: center; gap: .5rem;
          font-size: .84rem; font-weight: 700; color: white;
          padding: .6rem 1.25rem; border-radius: 12px; border: none; cursor: pointer;
          transition: opacity .15s, transform .1s;
        }
        .ws-btn-print:hover { opacity: .9; transform: translateY(-1px); }

        /* Header action buttons */
        .ws-header-actions { display: flex; gap: .5rem; flex-shrink: 0; }
        .ws-btn-icon {
          display: flex; align-items: center; gap: .4rem;
          font-size: .75rem; font-weight: 700;
          padding: .4rem .75rem; border-radius: 8px;
          border: 1.5px solid #e2e8f0; background: white; cursor: pointer;
          color: #475569; transition: all .15s;
        }
        .ws-btn-icon:hover { background: #f8fafc; border-color: #cbd5e1; }
        .ws-btn-icon.danger:hover { color: #ef4444; border-color: #fca5a5; }

        /* Print */
        @media print {
          .no-print { display: none !important; }
          .ws-fields { box-shadow: none; border: 1px solid #e2e8f0; }
          .field-input, .table-cell-input { background: white !important; }
        }
      `}</style>

      <div className="ws-page">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-5 no-print">
          <Link href="/" className="hover:text-teal-600 transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/worksheets" className="hover:text-teal-600 transition-colors">Fichas</Link>
          <span>/</span>
          <Link href={`/worksheets/${categoryId}`} className="hover:text-teal-600 transition-colors">{categoryTitle}</Link>
          <span>/</span>
          <span className="text-slate-700 font-medium truncate max-w-[180px]">{worksheet.title}</span>
        </div>

        {/* Header card */}
        <div
          className="ws-header"
          style={{ background: `linear-gradient(135deg, ${categoryColor}12, ${categoryColor}05)`, border: `1px solid ${categoryColor}22` }}
        >
          <div className="ws-header-top">
            <div className="ws-icon" style={{ background: `${categoryColor}1e` }}>{categoryIcon}</div>
            <div className="ws-meta">
              <div className="ws-category-label" style={{ color: categoryColor }}>{categoryTitle}</div>
              <h1 className="ws-title">{worksheet.title}</h1>
              <p className="ws-desc">{worksheet.description}</p>
            </div>
            <div className="ws-header-actions no-print">
              <button onClick={() => window.print()} className="ws-btn-icon">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Imprimir
              </button>
              <button onClick={handleReset} className="ws-btn-icon danger">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Borrar
              </button>
            </div>
          </div>

          {/* Progress */}
          <div className="ws-progress-row no-print">
            <div className="ws-progress-track">
              <div className="ws-progress-fill" style={{ width: `${pct}%`, background: categoryColor }} />
            </div>
            <span className="ws-progress-label" style={{ color: categoryColor }}>
              {filledCount}/{worksheet.fields.length} campos · {pct}%
            </span>
          </div>

          {/* Goal + Instructions */}
          <div className="ws-info-grid">
            <div className="ws-info-card">
              <div className="ws-info-card-label" style={{ color: categoryColor }}>🎯 Objetivo</div>
              <p className="ws-info-card-text">{worksheet.goal}</p>
            </div>
            <div className="ws-info-card">
              <div className="ws-info-card-label" style={{ color: "#64748b" }}>📋 Instrucciones</div>
              <p className="ws-info-card-text">{worksheet.instructions}</p>
            </div>
          </div>
        </div>

        {/* Therapist note */}
        {worksheet.therapistNote && (
          <div className="ws-note no-print">
            <svg className="ws-note-icon w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <div className="ws-note-title">Nota para el terapeuta</div>
              <p className="ws-note-text">{worksheet.therapistNote}</p>
            </div>
          </div>
        )}

        {/* Save status */}
        <div className="ws-save-row no-print">
          <div className="flex items-center">
            <div
              className="ws-save-dot"
              style={{ background: justSaved ? "#10b981" : savedAt ? "#94a3b8" : "#e2e8f0" }}
            />
            <span className="ws-save-text">
              {justSaved ? "✓ Guardado" : savedAt ? `Guardado a las ${savedAt}` : "Se guarda automáticamente al escribir"}
            </span>
          </div>
          {pct === 100 && (
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${categoryColor}15`, color: categoryColor }}>
              ✓ Ficha completada
            </span>
          )}
        </div>

        {/* Fields */}
        <div className="ws-fields">
          {worksheet.fields.map((field, i) => renderField(field, i))}
        </div>

        {/* Bottom bar */}
        <div className="ws-bottom no-print">
          <Link href={`/worksheets/${categoryId}`} className="ws-btn-back">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a {categoryTitle}
          </Link>
          <button
            onClick={() => window.print()}
            className="ws-btn-print"
            style={{ background: `linear-gradient(135deg, ${categoryColor}, ${categoryColor}cc)`, boxShadow: `0 4px 14px ${categoryColor}40` }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Imprimir / Guardar PDF
          </button>
        </div>
      </div>
    </>
  );
}
