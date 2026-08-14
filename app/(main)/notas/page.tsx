"use client";

import { useState, useEffect } from "react";

interface NotaSesion {
  id: string;
  paciente: string;
  numeroSesion: number;
  fecha: string;
  tecnicas: string[];
  contenido: string;
  tareaAsignada: string;
  proximaSesion: string;
  creadaEn: string;
}

const STORAGE_KEY = "notas-sesion";

const tecnicaColors = [
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
  "bg-violet-100 text-violet-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-teal-100 text-teal-700",
  "bg-sky-100 text-sky-700",
  "bg-indigo-100 text-indigo-700",
  "bg-orange-100 text-orange-700",
  "bg-pink-100 text-pink-700",
];

function getTecnicaColor(tecnica: string): string {
  let hash = 0;
  for (let i = 0; i < tecnica.length; i++) {
    hash = tecnica.charCodeAt(i) + ((hash << 5) - hash);
  }
  return tecnicaColors[Math.abs(hash) % tecnicaColors.length];
}

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

const emptyForm = {
  paciente: "",
  numeroSesion: 1,
  fecha: todayISO(),
  tecnicas: "",
  contenido: "",
  tareaAsignada: "",
  proximaSesion: "",
};

export default function NotasPage() {
  const [notas, setNotas] = useState<NotaSesion[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [busqueda, setBusqueda] = useState("");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [collapsedPacientes, setCollapsedPacientes] = useState<Set<string>>(new Set());

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setNotas(JSON.parse(stored));
    } catch {
      setNotas([]);
    }
  }, []);

  function saveNotas(next: NotaSesion[]) {
    setNotas(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function handleSave() {
    if (!form.paciente.trim() || !form.contenido.trim()) return;
    const nueva: NotaSesion = {
      id: Date.now().toString(),
      paciente: form.paciente.trim(),
      numeroSesion: Number(form.numeroSesion) || 1,
      fecha: form.fecha,
      tecnicas: form.tecnicas
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      contenido: form.contenido.trim(),
      tareaAsignada: form.tareaAsignada.trim(),
      proximaSesion: form.proximaSesion.trim(),
      creadaEn: new Date().toISOString(),
    };
    saveNotas([nueva, ...notas]);
    setForm({ ...emptyForm, fecha: todayISO() });
    setShowForm(false);
  }

  function handleDelete(id: string) {
    saveNotas(notas.filter((n) => n.id !== id));
    setConfirmDeleteId(null);
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }

  function toggleExpand(id: string) {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function togglePaciente(paciente: string) {
    setCollapsedPacientes((prev) => {
      const next = new Set(prev);
      if (next.has(paciente)) next.delete(paciente);
      else next.add(paciente);
      return next;
    });
  }

  // Filter and group
  const notasFiltradas = busqueda.trim()
    ? notas.filter((n) =>
        n.paciente.toLowerCase().includes(busqueda.toLowerCase())
      )
    : notas;

  const grouped: Record<string, NotaSesion[]> = {};
  for (const nota of notasFiltradas) {
    if (!grouped[nota.paciente]) grouped[nota.paciente] = [];
    grouped[nota.paciente].push(nota);
  }
  const pacientesOrdenados = Object.keys(grouped).sort((a, b) =>
    a.localeCompare(b, "es")
  );

  function formatFecha(fecha: string) {
    if (!fecha) return "";
    const [year, month, day] = fecha.split("-");
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Page header */}
      <div className="mb-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-[#1e3a5f] mb-3">
          {notas.length} {notas.length === 1 ? "nota" : "notas"}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2">
          Notas de Sesión
        </h1>
        <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
          Registra el contenido de cada sesión, las técnicas utilizadas y las
          tareas asignadas al paciente.
        </p>
      </div>

      {/* Actions row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <button
          onClick={() => setShowForm((v) => !v)}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-lg shadow-emerald-500/25"
        >
          {showForm ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancelar
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nueva nota
            </>
          )}
        </button>

        {/* Search */}
        {notas.length > 0 && (
          <div className="relative flex-1 max-w-sm">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar por paciente..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-[#1e3a5f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition"
            />
            {busqueda && (
              <button
                onClick={() => setBusqueda("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Inline form */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8">
          <h2 className="font-bold text-[#1e3a5f] text-base mb-5">Nueva nota de sesión</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="sm:col-span-1">
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                Paciente <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Nombre del paciente"
                value={form.paciente}
                onChange={(e) => setForm({ ...form, paciente: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 text-[#1e3a5f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                Nº Sesión
              </label>
              <input
                type="number"
                min={1}
                value={form.numeroSesion}
                onChange={(e) =>
                  setForm({ ...form, numeroSesion: Number(e.target.value) })
                }
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                Fecha
              </label>
              <input
                type="date"
                value={form.fecha}
                onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">
              Técnicas usadas{" "}
              <span className="font-normal text-slate-400">(separadas por coma)</span>
            </label>
            <input
              type="text"
              placeholder="Ej: Reestructuración cognitiva, Respiración diafragmática, Exposición gradual"
              value={form.tecnicas}
              onChange={(e) => setForm({ ...form, tecnicas: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 text-[#1e3a5f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition"
            />
            {form.tecnicas && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {form.tecnicas
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean)
                  .map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${getTecnicaColor(t)}`}
                    >
                      {t}
                    </span>
                  ))}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">
              Contenido de la sesión <span className="text-rose-400">*</span>
            </label>
            <textarea
              rows={6}
              placeholder="Describe lo que ocurrió en la sesión, temas tratados, estado del paciente..."
              value={form.contenido}
              onChange={(e) => setForm({ ...form, contenido: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 text-[#1e3a5f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                Tarea asignada
              </label>
              <textarea
                rows={3}
                placeholder="Tarea o ejercicio para realizar entre sesiones..."
                value={form.tareaAsignada}
                onChange={(e) =>
                  setForm({ ...form, tareaAsignada: e.target.value })
                }
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 text-[#1e3a5f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition resize-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                Plan próxima sesión
              </label>
              <textarea
                rows={3}
                placeholder="Objetivos y temas para abordar en la siguiente sesión..."
                value={form.proximaSesion}
                onChange={(e) =>
                  setForm({ ...form, proximaSesion: e.target.value })
                }
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 text-[#1e3a5f] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition resize-none"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={!form.paciente.trim() || !form.contenido.trim()}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-lg shadow-emerald-500/25"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Guardar nota
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setForm({ ...emptyForm, fecha: todayISO() });
              }}
              className="text-sm font-medium text-slate-500 hover:text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Notes list */}
      {notas.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            Aún no hay notas. Crea la primera con el botón de arriba.
          </p>
        </div>
      ) : busqueda && pacientesOrdenados.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <p className="text-slate-500 text-sm">
            No se encontraron notas para{" "}
            <span className="font-semibold text-[#1e3a5f]">&ldquo;{busqueda}&rdquo;</span>
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {pacientesOrdenados.map((paciente) => {
            const notasPaciente = grouped[paciente];
            const isCollapsed = collapsedPacientes.has(paciente);
            return (
              <div key={paciente}>
                {/* Patient group header */}
                <button
                  onClick={() => togglePaciente(paciente)}
                  className="w-full flex items-center gap-3 mb-3 group text-left"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1e3a5f] to-[#1e4a7f] rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {paciente.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-[#1e3a5f] text-sm group-hover:text-emerald-600 transition-colors">
                      {paciente}
                    </span>
                    <span className="ml-2 text-xs text-slate-400">
                      {notasPaciente.length}{" "}
                      {notasPaciente.length === 1 ? "sesión" : "sesiones"}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${isCollapsed ? "-rotate-90" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Notes for this patient */}
                {!isCollapsed && (
                  <div className="space-y-3 pl-11">
                    {notasPaciente
                      .slice()
                      .sort((a, b) => b.numeroSesion - a.numeroSesion)
                      .map((nota) => {
                        const isExpanded = expandedIds.has(nota.id);
                        const isConfirmingDelete = confirmDeleteId === nota.id;
                        return (
                          <div
                            key={nota.id}
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                          >
                            {/* Card header */}
                            <div className="px-5 py-4 flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                    Sesión {nota.numeroSesion}
                                  </span>
                                  <span className="text-xs text-slate-400">
                                    {formatFecha(nota.fecha)}
                                  </span>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed mt-1.5 line-clamp-2">
                                  {nota.contenido.length > 100 && !isExpanded
                                    ? nota.contenido.slice(0, 100) + "…"
                                    : nota.contenido}
                                </p>
                                {nota.tecnicas.length > 0 && (
                                  <div className="flex flex-wrap gap-1.5 mt-2">
                                    {nota.tecnicas.map((t, i) => (
                                      <span
                                        key={i}
                                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${getTecnicaColor(t)}`}
                                      >
                                        {t}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {/* Card actions */}
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <button
                                  onClick={() => toggleExpand(nota.id)}
                                  className="text-xs font-medium text-slate-400 hover:text-emerald-600 transition-colors px-2 py-1 rounded-lg hover:bg-emerald-50"
                                >
                                  {isExpanded ? "Cerrar" : "Ver más"}
                                </button>

                                {isConfirmingDelete ? (
                                  <div className="flex items-center gap-1.5">
                                    <button
                                      onClick={() => handleDelete(nota.id)}
                                      className="text-xs font-semibold text-white bg-rose-500 hover:bg-rose-600 px-2.5 py-1 rounded-lg transition-colors"
                                    >
                                      Sí, eliminar
                                    </button>
                                    <button
                                      onClick={() => setConfirmDeleteId(null)}
                                      className="text-xs font-medium text-slate-400 hover:text-slate-600 px-2 py-1 rounded-lg transition-colors"
                                    >
                                      No
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => setConfirmDeleteId(nota.id)}
                                    className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-300 hover:text-rose-400 hover:bg-rose-50 transition-colors"
                                    aria-label="Eliminar nota"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Expanded content */}
                            {isExpanded && (
                              <div className="px-5 pb-5 border-t border-slate-50 pt-4 space-y-4">
                                <div>
                                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                                    Contenido completo
                                  </p>
                                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                                    {nota.contenido}
                                  </p>
                                </div>

                                {nota.tareaAsignada && (
                                  <div className="bg-amber-50 rounded-xl p-3.5">
                                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
                                      Tarea asignada
                                    </p>
                                    <p className="text-sm text-amber-800 leading-relaxed whitespace-pre-wrap">
                                      {nota.tareaAsignada}
                                    </p>
                                  </div>
                                )}

                                {nota.proximaSesion && (
                                  <div className="bg-blue-50 rounded-xl p-3.5">
                                    <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
                                      Plan próxima sesión
                                    </p>
                                    <p className="text-sm text-blue-800 leading-relaxed whitespace-pre-wrap">
                                      {nota.proximaSesion}
                                    </p>
                                  </div>
                                )}

                                <p className="text-xs text-slate-300">
                                  Creada el{" "}
                                  {new Date(nota.creadaEn).toLocaleString("es-ES", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
