"use client";

import { useState } from "react";
import { Field, TextInput, ResultBox } from "./ui";

function pct(n: number) {
  return `${Math.round(n * 100)}%`;
}

export default function DashboardMetricas() {
  const [leads, setLeads] = useState("");
  const [citasAgendadas, setCitasAgendadas] = useState("");
  const [citasCompletadas, setCitasCompletadas] = useState("");
  const [pacientesActivos, setPacientesActivos] = useState("");
  const [gastoAds, setGastoAds] = useState("");

  const L = Number(leads) || 0;
  const CA = Number(citasAgendadas) || 0;
  const CC = Number(citasCompletadas) || 0;
  const PA = Number(pacientesActivos) || 0;
  const G = Number(gastoAds) || 0;

  const hasData = L > 0;

  const costoPorLead = L > 0 ? G / L : 0;
  const tasaAgendamiento = L > 0 ? CA / L : 0;
  const tasaAsistencia = CA > 0 ? CC / CA : 0;
  const tasaConversion = CC > 0 ? PA / CC : 0;
  const costoPorPaciente = PA > 0 ? G / PA : 0;

  const diagnosticos: string[] = [];
  if (hasData) {
    if (L >= 10 && tasaAgendamiento < 0.2) {
      diagnosticos.push(
        "Tenés bastantes leads pero pocos agendan cita: el cuello de botella está en la conversión (mensaje → cita). Revisá tu script de primera respuesta y manejo de objeciones — Lección 9."
      );
    }
    if (CA >= 3 && tasaAsistencia < 0.7) {
      diagnosticos.push(
        "Agendás bien, pero la asistencia es baja: el problema está en el seguimiento previo a la sesión. Reforzá tus recordatorios — Lección 11."
      );
    }
    if (CC >= 3 && tasaConversion < 0.5) {
      diagnosticos.push(
        "Tenés buena asistencia pero poca continuidad: revisá la experiencia de la primera sesión y cómo comunicás el valor de continuar el proceso — Lección 4."
      );
    }
    if (diagnosticos.length === 0) {
      diagnosticos.push(
        "Tu embudo se ve saludable en las etapas que completaste. Si ya tenés capacidad de agenda, este es un buen momento para evaluar escalar con pauta publicitaria — Lección 10."
      );
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <Field label="Leads del mes">
          <TextInput type="number" min={0} value={leads} onChange={(e) => setLeads(e.target.value)} />
        </Field>
        <Field label="Citas agendadas">
          <TextInput type="number" min={0} value={citasAgendadas} onChange={(e) => setCitasAgendadas(e.target.value)} />
        </Field>
        <Field label="Citas completadas (show-up)">
          <TextInput type="number" min={0} value={citasCompletadas} onChange={(e) => setCitasCompletadas(e.target.value)} />
        </Field>
        <Field label="Pacientes activos resultantes">
          <TextInput type="number" min={0} value={pacientesActivos} onChange={(e) => setPacientesActivos(e.target.value)} />
        </Field>
        <Field label="Gasto en publicidad (USD)">
          <TextInput type="number" min={0} value={gastoAds} onChange={(e) => setGastoAds(e.target.value)} />
        </Field>
      </div>

      {hasData && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Kpi label="Costo por lead" value={`$${costoPorLead.toFixed(2)}`} />
            <Kpi label="Tasa de agendamiento" value={pct(tasaAgendamiento)} />
            <Kpi label="Tasa de asistencia" value={pct(tasaAsistencia)} />
            <Kpi label="Tasa de conversión a activo" value={pct(tasaConversion)} />
            <Kpi label="Costo por paciente adquirido" value={`$${costoPorPaciente.toFixed(2)}`} />
          </div>

          <ResultBox title="Diagnóstico y siguiente foco">
            <ul className="space-y-2">
              {diagnosticos.map((d, i) => (
                <li key={i} className="text-sm" style={{ color: "var(--ink)" }}>
                  {d}
                </li>
              ))}
            </ul>
          </ResultBox>
        </>
      )}
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3.5 rounded-lg" style={{ border: "1px solid var(--border)" }}>
      <p className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{ color: "var(--ink-soft)" }}>
        {label}
      </p>
      <p className="text-lg font-bold" style={{ color: "var(--navy)" }}>
        {value}
      </p>
    </div>
  );
}
