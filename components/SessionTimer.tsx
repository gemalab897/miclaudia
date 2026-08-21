"use client";

import { useState, useEffect, useRef } from "react";

const PRESETS = [
  {
    label: "Sesión estándar (50 min)",
    fases: [
      { nombre: "Revisión y agenda", minutos: 5, color: "bg-blue-500" },
      { nombre: "Trabajo terapéutico", minutos: 35, color: "bg-emerald-500" },
      { nombre: "Cierre y tareas", minutos: 10, color: "bg-amber-500" },
    ],
  },
  {
    label: "Sesión breve (30 min)",
    fases: [
      { nombre: "Revisión", minutos: 5, color: "bg-blue-500" },
      { nombre: "Trabajo terapéutico", minutos: 20, color: "bg-emerald-500" },
      { nombre: "Cierre", minutos: 5, color: "bg-amber-500" },
    ],
  },
  {
    label: "Primera sesión (60 min)",
    fases: [
      { nombre: "Acogida y motivo de consulta", minutos: 15, color: "bg-blue-500" },
      { nombre: "Evaluación y formulación", minutos: 30, color: "bg-emerald-500" },
      { nombre: "Psicoeducación TCC", minutos: 10, color: "bg-purple-500" },
      { nombre: "Cierre y plan", minutos: 5, color: "bg-amber-500" },
    ],
  },
];

export default function SessionTimer() {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState(0);
  const [faseActual, setFaseActual] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [running, setRunning] = useState(false);
  const [alertado, setAlertado] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fases = PRESETS[preset].fases;
  const totalSegundos = fases[faseActual].minutos * 60;
  const restantes = totalSegundos - segundos;
  const progreso = (segundos / totalSegundos) * 100;

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSegundos((s) => {
          const next = s + 1;
          if (next >= totalSegundos - 300 && !alertado) {
            setAlertado(true);
          }
          if (next >= totalSegundos) {
            setRunning(false);
            return totalSegundos;
          }
          return next;
        });
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running, totalSegundos, alertado]);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const reset = () => {
    setRunning(false);
    setSegundos(0);
    setAlertado(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const nextFase = () => {
    if (faseActual < fases.length - 1) {
      setFaseActual((f) => f + 1);
      setSegundos(0);
      setAlertado(false);
      setRunning(false);
    }
  };

  const changePreset = (i: number) => {
    setPreset(i);
    setFaseActual(0);
    reset();
  };

  const fase = fases[faseActual];
  const isCritical = restantes <= 300 && restantes > 0 && running;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#1e3a5f] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#2a4a6f] transition-colors"
        title="Temporizador de sesión"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      {/* Timer panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="bg-[#1e3a5f] text-white px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-sm">Temporizador de Sesión</span>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4">
            {/* Preset selector */}
            <select
              value={preset}
              onChange={(e) => changePreset(Number(e.target.value))}
              className="w-full text-xs border border-slate-200 rounded-lg px-2 py-1.5 mb-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#10b981]"
            >
              {PRESETS.map((p, i) => (
                <option key={i} value={i}>{p.label}</option>
              ))}
            </select>

            {/* Phase indicators */}
            <div className="flex gap-1 mb-3">
              {fases.map((f, i) => (
                <div
                  key={i}
                  onClick={() => { setFaseActual(i); reset(); }}
                  className={`flex-1 rounded-full h-1.5 cursor-pointer transition-all ${
                    i < faseActual ? "bg-slate-300" : i === faseActual ? f.color : "bg-slate-100"
                  }`}
                />
              ))}
            </div>

            {/* Current phase */}
            <div className={`rounded-xl p-3 mb-3 ${isCritical ? "bg-red-50 border border-red-200" : "bg-slate-50"}`}>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-medium ${isCritical ? "text-red-600" : "text-gray-600"}`}>
                  Fase {faseActual + 1}/{fases.length} — {fase.nombre}
                  {isCritical && " ⚠️"}
                </span>
                <span className="text-xs text-gray-400">{fase.minutos} min</span>
              </div>

              <div className={`text-4xl font-mono font-bold text-center py-2 ${isCritical ? "text-red-600" : "text-[#1e3a5f]"}`}>
                {fmt(restantes)}
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                <div
                  className={`h-1.5 rounded-full transition-all ${isCritical ? "bg-red-500" : fase.color}`}
                  style={{ width: `${progreso}%` }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-2">
              <button
                onClick={() => setRunning(!running)}
                className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${
                  running
                    ? "bg-amber-100 text-amber-700 hover:bg-amber-200"
                    : "bg-emerald-500 text-white hover:bg-emerald-600"
                }`}
              >
                {running ? "Pausar" : segundos === 0 ? "Iniciar" : "Continuar"}
              </button>
              <button
                onClick={reset}
                className="px-3 py-2 bg-slate-100 text-gray-600 rounded-xl text-sm hover:bg-slate-200 transition-colors"
              >
                ↺
              </button>
              {faseActual < fases.length - 1 && (
                <button
                  onClick={nextFase}
                  className="px-3 py-2 bg-[#1e3a5f] text-white rounded-xl text-sm hover:bg-[#2a4a6f] transition-colors"
                >
                  →
                </button>
              )}
            </div>

            {/* All phases list */}
            <div className="mt-3 space-y-1">
              {fases.map((f, i) => (
                <div key={i} className={`flex items-center gap-2 text-xs py-1 px-2 rounded-lg ${i === faseActual ? "bg-slate-100" : ""}`}>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${i < faseActual ? "bg-slate-300" : i === faseActual ? f.color : "bg-slate-200"}`} />
                  <span className={i < faseActual ? "text-gray-400 line-through" : i === faseActual ? "text-gray-800 font-medium" : "text-gray-500"}>
                    {f.nombre}
                  </span>
                  <span className="ml-auto text-gray-400">{f.minutos}′</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
