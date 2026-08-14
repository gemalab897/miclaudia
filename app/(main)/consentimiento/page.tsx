"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

const DEFAULT_TEMPLATE = {
  // Terapeuta
  terapeutaNombre: "",
  terapeutaNumColegiado: "",
  terapeutaDireccion: "",
  terapeutaTelefono: "",
  terapeutaEmail: "",
  // Paciente
  pacienteNombre: "",
  pacienteDNI: "",
  pacienteDireccion: "",
  pacienteTelefono: "",
  pacienteEmail: "",
  tutorNombre: "",
  // Secciones de texto
  descripcionTratamiento:
    "La Terapia Cognitivo-Conductual (TCC) es un tratamiento psicológico con amplia evidencia científica. Se basa en la relación entre pensamientos, emociones y conductas. Las sesiones tienen una duración aproximada de 50 minutos y frecuencia generalmente semanal. El tratamiento es estructurado y orientado a objetivos, con tareas entre sesiones.",
  objetivosTratamiento:
    "- Reducción de los síntomas actuales que motivan la consulta.\n- Identificación y modificación de pensamientos disfuncionales.\n- Desarrollo de habilidades de afrontamiento adaptativas.\n- Mejora del funcionamiento en áreas personal, social y/o laboral.\n- Prevención de recaídas mediante estrategias de mantenimiento.",
  riesgosBeneficios:
    "Como en cualquier proceso terapéutico, pueden surgir momentos de malestar emocional al abordar temas difíciles. Estos momentos son parte del proceso terapéutico y serán trabajados con el/la terapeuta. Los beneficios esperados incluyen la reducción de síntomas, mejora del funcionamiento y adquisición de habilidades de afrontamiento.",
  alternativas:
    "Existen otras modalidades de tratamiento psicológico (psicodinámica, humanista, EMDR) y opciones farmacológicas. Puede consultarse con el médico de cabecera o psiquiatra sobre estas alternativas.",
  confidencialidad:
    "Toda la información compartida en sesión es estrictamente confidencial y está protegida por el Reglamento General de Protección de Datos (RGPD - UE 2016/679). La confidencialidad solo podrá romperse en caso de riesgo grave e inminente para el/la paciente u otras personas, o por requerimiento judicial. Los datos serán tratados con la máxima discreción y no serán cedidos a terceros sin consentimiento expreso.",
  grabacionAutoriza: "no_autorizo",
  grabacionNota:
    "En caso de autorización, las grabaciones se utilizarán exclusivamente con fines de supervisión clínica y serán eliminadas una vez finalizado su uso. Nunca serán compartidas con terceros sin consentimiento adicional.",
  honorariosPorSesion: "",
  cancelacionTexto:
    "La cancelación de sesiones deberá comunicarse con un mínimo de 24 horas de antelación. Las sesiones canceladas sin el preaviso requerido podrán ser facturadas en su totalidad. Se permite la reprogramación sujeta a disponibilidad.",
  derechoAbandonar:
    "El/la paciente tiene derecho a finalizar el tratamiento en cualquier momento sin necesidad de justificación. Se recomienda comunicarlo al/la terapeuta para planificar una terminación adecuada. Asimismo, puede solicitar el acceso, rectificación, supresión o portabilidad de sus datos personales.",
  // Firma
  firmaLugar: "",
  firmaFecha: "",
  firmaTerapeuta: "",
  firmaPaciente: "",
};

type ConsentimientoData = typeof DEFAULT_TEMPLATE;

const STORAGE_KEY = "consentimiento-data";

const SECTION_TITLE =
  "text-sm font-semibold uppercase tracking-wide text-[#0f2744] mb-3";
const LABEL = "block text-xs font-medium text-slate-500 mb-1";
const INPUT =
  "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-white";
const TEXTAREA =
  "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-white resize-y leading-relaxed";

export default function ConsentimientoPage() {
  const [data, setData] = useState<ConsentimientoData>(DEFAULT_TEMPLATE);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<ConsentimientoData>;
        setData((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [data, loaded]);

  function update<K extends keyof ConsentimientoData>(
    key: K,
    value: ConsentimientoData[K]
  ) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleRestore() {
    if (
      window.confirm(
        "¿Restaurar la plantilla por defecto? Se perderán todos los cambios actuales."
      )
    ) {
      setData(DEFAULT_TEMPLATE);
    }
  }

  return (
    <>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #consent-document, #consent-document * { visibility: visible; }
          #consent-document { position: absolute; left: 0; top: 0; width: 100%; }
          .no-print { display: none !important; }
          textarea, input[type="text"], input[type="date"], input[type="email"], input[type="tel"] {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            background: transparent !important;
            resize: none !important;
            font-size: 11pt;
          }
          .print-border-bottom {
            border-bottom: 1px solid #333 !important;
          }
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <PageHeader
          title="Consentimiento Informado"
          description="Plantilla editable de consentimiento informado para terapia cognitivo-conductual. Los cambios se guardan automáticamente."
          badge="TCC"
        />

        {/* Action buttons */}
        <div className="no-print flex gap-3 mb-6">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-[#0f2744] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#1a3a6b] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Imprimir / Guardar como PDF
          </button>
          <button
            onClick={handleRestore}
            className="flex items-center gap-2 border border-slate-200 text-slate-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Restaurar plantilla
          </button>
        </div>

        {/* Consent Document */}
        <div
          id="consent-document"
          className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-8"
        >
          {/* Title */}
          <div className="text-center border-b border-slate-200 pb-6">
            <h2 className="text-xl font-bold text-[#0f2744] mb-1">
              DOCUMENTO DE CONSENTIMIENTO INFORMADO
            </h2>
            <p className="text-sm text-slate-500">
              Terapia Cognitivo-Conductual (TCC) — Psicología Clínica
            </p>
          </div>

          {/* Section 1: Datos del terapeuta y del paciente */}
          <section>
            <h3 className={SECTION_TITLE}>
              1. Datos del Terapeuta y del Paciente
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Terapeuta */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">
                  Terapeuta
                </p>
                <div>
                  <label className={LABEL}>Nombre completo</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="Nombre y apellidos"
                    value={data.terapeutaNombre}
                    onChange={(e) => update("terapeutaNombre", e.target.value)}
                  />
                </div>
                <div>
                  <label className={LABEL}>N.º Colegiado/a</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="Ej: M-12345"
                    value={data.terapeutaNumColegiado}
                    onChange={(e) =>
                      update("terapeutaNumColegiado", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={LABEL}>Dirección del centro</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="Calle, número, ciudad, CP"
                    value={data.terapeutaDireccion}
                    onChange={(e) =>
                      update("terapeutaDireccion", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={LABEL}>Teléfono</label>
                  <input
                    type="tel"
                    className={INPUT}
                    placeholder="Ej: 600 000 000"
                    value={data.terapeutaTelefono}
                    onChange={(e) =>
                      update("terapeutaTelefono", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={LABEL}>Email profesional</label>
                  <input
                    type="email"
                    className={INPUT}
                    placeholder="terapeuta@ejemplo.com"
                    value={data.terapeutaEmail}
                    onChange={(e) => update("terapeutaEmail", e.target.value)}
                  />
                </div>
              </div>

              {/* Paciente */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">
                  Paciente
                </p>
                <div>
                  <label className={LABEL}>Nombre completo</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="Nombre y apellidos"
                    value={data.pacienteNombre}
                    onChange={(e) => update("pacienteNombre", e.target.value)}
                  />
                </div>
                <div>
                  <label className={LABEL}>DNI / NIE</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="00000000X"
                    value={data.pacienteDNI}
                    onChange={(e) => update("pacienteDNI", e.target.value)}
                  />
                </div>
                <div>
                  <label className={LABEL}>Dirección</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="Calle, número, ciudad, CP"
                    value={data.pacienteDireccion}
                    onChange={(e) =>
                      update("pacienteDireccion", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={LABEL}>Teléfono</label>
                  <input
                    type="tel"
                    className={INPUT}
                    placeholder="Ej: 600 000 000"
                    value={data.pacienteTelefono}
                    onChange={(e) =>
                      update("pacienteTelefono", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={LABEL}>Email</label>
                  <input
                    type="email"
                    className={INPUT}
                    placeholder="paciente@ejemplo.com"
                    value={data.pacienteEmail}
                    onChange={(e) => update("pacienteEmail", e.target.value)}
                  />
                </div>
                <div>
                  <label className={LABEL}>
                    Nombre del tutor/a legal (si es menor o incapacitado/a)
                  </label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="Nombre y apellidos del tutor/a (si aplica)"
                    value={data.tutorNombre}
                    onChange={(e) => update("tutorNombre", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2: Descripción del tratamiento */}
          <section>
            <h3 className={SECTION_TITLE}>2. Descripción del Tratamiento</h3>
            <textarea
              className={TEXTAREA}
              rows={5}
              value={data.descripcionTratamiento}
              onChange={(e) => update("descripcionTratamiento", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 3: Objetivos */}
          <section>
            <h3 className={SECTION_TITLE}>3. Objetivos del Tratamiento</h3>
            <textarea
              className={TEXTAREA}
              rows={6}
              value={data.objetivosTratamiento}
              onChange={(e) => update("objetivosTratamiento", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 4: Riesgos y beneficios */}
          <section>
            <h3 className={SECTION_TITLE}>
              4. Posibles Riesgos y Beneficios
            </h3>
            <textarea
              className={TEXTAREA}
              rows={5}
              value={data.riesgosBeneficios}
              onChange={(e) => update("riesgosBeneficios", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 5: Alternativas */}
          <section>
            <h3 className={SECTION_TITLE}>
              5. Alternativas de Tratamiento
            </h3>
            <textarea
              className={TEXTAREA}
              rows={4}
              value={data.alternativas}
              onChange={(e) => update("alternativas", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 6: Confidencialidad */}
          <section>
            <h3 className={SECTION_TITLE}>
              6. Confidencialidad y sus Límites
            </h3>
            <textarea
              className={TEXTAREA}
              rows={5}
              value={data.confidencialidad}
              onChange={(e) => update("confidencialidad", e.target.value)}
            />
            <p className="mt-2 text-xs text-slate-400">
              Base legal: RGPD (UE) 2016/679 y Ley Orgánica 3/2018 de Protección de Datos (LOPDGDD).
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 7: Grabación de sesiones */}
          <section>
            <h3 className={SECTION_TITLE}>7. Grabación de Sesiones</h3>
            <p className="text-sm text-slate-600 mb-3">
              En relación con la posible grabación de sesiones con fines de supervisión clínica:
            </p>
            <div className="space-y-2 mb-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="grabacion"
                  value="autorizo"
                  checked={data.grabacionAutoriza === "autorizo"}
                  onChange={() => update("grabacionAutoriza", "autorizo")}
                  className="w-4 h-4 accent-emerald-500"
                />
                <span className="text-sm text-slate-700 font-medium group-hover:text-[#0f2744] transition-colors">
                  Autorizo la grabación de sesiones para los fines indicados
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="grabacion"
                  value="no_autorizo"
                  checked={data.grabacionAutoriza === "no_autorizo"}
                  onChange={() => update("grabacionAutoriza", "no_autorizo")}
                  className="w-4 h-4 accent-emerald-500"
                />
                <span className="text-sm text-slate-700 font-medium group-hover:text-[#0f2744] transition-colors">
                  No autorizo la grabación de sesiones
                </span>
              </label>
            </div>
            <label className={LABEL}>Nota adicional sobre grabaciones</label>
            <textarea
              className={TEXTAREA}
              rows={3}
              value={data.grabacionNota}
              onChange={(e) => update("grabacionNota", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 8: Honorarios y cancelación */}
          <section>
            <h3 className={SECTION_TITLE}>
              8. Honorarios y Política de Cancelación
            </h3>
            <div className="mb-4">
              <label className={LABEL}>Honorario por sesión (€)</label>
              <input
                type="text"
                className={`${INPUT} max-w-xs`}
                placeholder="Ej: 70,00 €"
                value={data.honorariosPorSesion}
                onChange={(e) => update("honorariosPorSesion", e.target.value)}
              />
            </div>
            <label className={LABEL}>Política de cancelación</label>
            <textarea
              className={TEXTAREA}
              rows={4}
              value={data.cancelacionTexto}
              onChange={(e) => update("cancelacionTexto", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 9: Derecho a abandonar */}
          <section>
            <h3 className={SECTION_TITLE}>
              9. Derecho a Abandonar el Tratamiento
            </h3>
            <textarea
              className={TEXTAREA}
              rows={4}
              value={data.derechoAbandonar}
              onChange={(e) => update("derechoAbandonar", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 10: Firma */}
          <section>
            <h3 className={SECTION_TITLE}>10. Declaración y Firma</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Declaro haber leído y comprendido la información contenida en este documento, haber
              podido formular las preguntas que he considerado oportunas y haber recibido respuestas
              satisfactorias. Consiento voluntariamente participar en el tratamiento descrito.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={LABEL}>Lugar</label>
                <input
                  type="text"
                  className={`${INPUT} print-border-bottom`}
                  placeholder="Ciudad"
                  value={data.firmaLugar}
                  onChange={(e) => update("firmaLugar", e.target.value)}
                />
              </div>
              <div>
                <label className={LABEL}>Fecha</label>
                <input
                  type="date"
                  className={`${INPUT} print-border-bottom`}
                  value={data.firmaFecha}
                  onChange={(e) => update("firmaFecha", e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <label className={LABEL}>
                  Firma del/la terapeuta
                </label>
                <input
                  type="text"
                  className={`${INPUT} print-border-bottom`}
                  placeholder="Nombre y firma"
                  value={data.firmaTerapeuta}
                  onChange={(e) => update("firmaTerapeuta", e.target.value)}
                />
                <div className="mt-4 border-b border-slate-300 h-12" />
                <p className="text-xs text-slate-400 mt-1 text-center">
                  Firma del/la terapeuta
                </p>
              </div>
              <div>
                <label className={LABEL}>
                  Firma del/la paciente o tutor/a legal
                </label>
                <input
                  type="text"
                  className={`${INPUT} print-border-bottom`}
                  placeholder="Nombre y firma"
                  value={data.firmaPaciente}
                  onChange={(e) => update("firmaPaciente", e.target.value)}
                />
                <div className="mt-4 border-b border-slate-300 h-12" />
                <p className="text-xs text-slate-400 mt-1 text-center">
                  Firma del/la paciente / tutor/a legal
                </p>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <div className="border-t border-slate-100 pt-4">
            <p className="text-xs text-slate-400 text-center leading-relaxed">
              Este documento se cumplimenta por duplicado. Una copia queda en poder del/la terapeuta
              y otra se entrega al/la paciente o su tutor/a legal. Conserve este documento en lugar seguro.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
