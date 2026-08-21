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
    "Cognitive Behavioral Therapy (CBT) is a psychological treatment with extensive scientific evidence. It is based on the relationship between thoughts, emotions, and behaviors. Sessions last approximately 50 minutes and are generally scheduled weekly. Treatment is structured and goal-oriented, with homework assignments between sessions.",
  objetivosTratamiento:
    "- Reduction of current symptoms that prompted the consultation.\n- Identification and modification of dysfunctional thoughts.\n- Development of adaptive coping skills.\n- Improvement of functioning in personal, social, and/or occupational areas.\n- Relapse prevention through maintenance strategies.",
  riesgosBeneficios:
    "As with any therapeutic process, there may be moments of emotional discomfort when addressing difficult topics. These moments are part of the therapeutic process and will be worked through with the therapist. Expected benefits include symptom reduction, improved functioning, and the acquisition of coping skills.",
  alternativas:
    "Other psychological treatment modalities exist (psychodynamic, humanistic, EMDR) as well as pharmacological options. You may consult with your primary care physician or psychiatrist regarding these alternatives.",
  confidencialidad:
    "All information shared in session is strictly confidential and protected by applicable data protection regulations. Confidentiality may only be broken in the event of a serious and imminent risk to the patient or others, or by court order. Data will be handled with the utmost discretion and will not be shared with third parties without express consent.",
  grabacionAutoriza: "no_autorizo",
  grabacionNota:
    "If authorized, recordings will be used exclusively for clinical supervision purposes and will be deleted once their use is complete. They will never be shared with third parties without additional consent.",
  honorariosPorSesion: "",
  cancelacionTexto:
    "Session cancellations must be communicated at least 24 hours in advance. Sessions cancelled without the required notice may be charged in full. Rescheduling is permitted subject to availability.",
  derechoAbandonar:
    "The patient has the right to end treatment at any time without needing to provide justification. It is recommended to communicate this to the therapist in order to plan an appropriate termination. The patient may also request access, rectification, deletion, or portability of their personal data.",
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
        "Restore the default template? All current changes will be lost."
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
          title="Informed Consent"
          description="Editable informed consent template for cognitive-behavioral therapy. Changes are saved automatically."
          badge="CBT"
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
            Print / Save as PDF
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
            Restore template
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
              INFORMED CONSENT DOCUMENT
            </h2>
            <p className="text-sm text-slate-500">
              Cognitive Behavioral Therapy (CBT) — Clinical Psychology
            </p>
          </div>

          {/* Section 1: Therapist and patient information */}
          <section>
            <h3 className={SECTION_TITLE}>
              1. Therapist and Patient Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Therapist */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">
                  Therapist
                </p>
                <div>
                  <label className={LABEL}>Full name</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="Full name"
                    value={data.terapeutaNombre}
                    onChange={(e) => update("terapeutaNombre", e.target.value)}
                  />
                </div>
                <div>
                  <label className={LABEL}>License No.</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="e.g. M-12345"
                    value={data.terapeutaNumColegiado}
                    onChange={(e) =>
                      update("terapeutaNumColegiado", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={LABEL}>Practice address</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="Street, number, city, ZIP"
                    value={data.terapeutaDireccion}
                    onChange={(e) =>
                      update("terapeutaDireccion", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={LABEL}>Phone</label>
                  <input
                    type="tel"
                    className={INPUT}
                    placeholder="e.g. 555-000-0000"
                    value={data.terapeutaTelefono}
                    onChange={(e) =>
                      update("terapeutaTelefono", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={LABEL}>Professional email</label>
                  <input
                    type="email"
                    className={INPUT}
                    placeholder="therapist@example.com"
                    value={data.terapeutaEmail}
                    onChange={(e) => update("terapeutaEmail", e.target.value)}
                  />
                </div>
              </div>

              {/* Patient */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">
                  Patient
                </p>
                <div>
                  <label className={LABEL}>Full name</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="Full name"
                    value={data.pacienteNombre}
                    onChange={(e) => update("pacienteNombre", e.target.value)}
                  />
                </div>
                <div>
                  <label className={LABEL}>ID / Passport No.</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="ID number"
                    value={data.pacienteDNI}
                    onChange={(e) => update("pacienteDNI", e.target.value)}
                  />
                </div>
                <div>
                  <label className={LABEL}>Address</label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="Street, number, city, ZIP"
                    value={data.pacienteDireccion}
                    onChange={(e) =>
                      update("pacienteDireccion", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className={LABEL}>Phone</label>
                  <input
                    type="tel"
                    className={INPUT}
                    placeholder="e.g. 555-000-0000"
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
                    placeholder="patient@example.com"
                    value={data.pacienteEmail}
                    onChange={(e) => update("pacienteEmail", e.target.value)}
                  />
                </div>
                <div>
                  <label className={LABEL}>
                    Legal guardian name (if minor or legally incapacitated)
                  </label>
                  <input
                    type="text"
                    className={INPUT}
                    placeholder="Full name of guardian (if applicable)"
                    value={data.tutorNombre}
                    onChange={(e) => update("tutorNombre", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2: Description of treatment */}
          <section>
            <h3 className={SECTION_TITLE}>2. Description of Treatment</h3>
            <textarea
              className={TEXTAREA}
              rows={5}
              value={data.descripcionTratamiento}
              onChange={(e) => update("descripcionTratamiento", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 3: Objectives */}
          <section>
            <h3 className={SECTION_TITLE}>3. Treatment Objectives</h3>
            <textarea
              className={TEXTAREA}
              rows={6}
              value={data.objetivosTratamiento}
              onChange={(e) => update("objetivosTratamiento", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 4: Risks and benefits */}
          <section>
            <h3 className={SECTION_TITLE}>
              4. Possible Risks and Benefits
            </h3>
            <textarea
              className={TEXTAREA}
              rows={5}
              value={data.riesgosBeneficios}
              onChange={(e) => update("riesgosBeneficios", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 5: Alternatives */}
          <section>
            <h3 className={SECTION_TITLE}>
              5. Treatment Alternatives
            </h3>
            <textarea
              className={TEXTAREA}
              rows={4}
              value={data.alternativas}
              onChange={(e) => update("alternativas", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 6: Confidentiality */}
          <section>
            <h3 className={SECTION_TITLE}>
              6. Confidentiality and Its Limits
            </h3>
            <textarea
              className={TEXTAREA}
              rows={5}
              value={data.confidencialidad}
              onChange={(e) => update("confidencialidad", e.target.value)}
            />
            <p className="mt-2 text-xs text-slate-400">
              Legal basis: GDPR (EU) 2016/679 and applicable data protection laws.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 7: Session recording */}
          <section>
            <h3 className={SECTION_TITLE}>7. Session Recording</h3>
            <p className="text-sm text-slate-600 mb-3">
              Regarding the possible recording of sessions for clinical supervision purposes:
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
                  I authorize the recording of sessions for the stated purposes
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
                  I do not authorize the recording of sessions
                </span>
              </label>
            </div>
            <label className={LABEL}>Additional note on recordings</label>
            <textarea
              className={TEXTAREA}
              rows={3}
              value={data.grabacionNota}
              onChange={(e) => update("grabacionNota", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 8: Fees and cancellation */}
          <section>
            <h3 className={SECTION_TITLE}>
              8. Fees and Cancellation Policy
            </h3>
            <div className="mb-4">
              <label className={LABEL}>Session fee ($)</label>
              <input
                type="text"
                className={`${INPUT} max-w-xs`}
                placeholder="e.g. $150.00"
                value={data.honorariosPorSesion}
                onChange={(e) => update("honorariosPorSesion", e.target.value)}
              />
            </div>
            <label className={LABEL}>Cancellation policy</label>
            <textarea
              className={TEXTAREA}
              rows={4}
              value={data.cancelacionTexto}
              onChange={(e) => update("cancelacionTexto", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 9: Right to withdraw */}
          <section>
            <h3 className={SECTION_TITLE}>
              9. Right to Withdraw from Treatment
            </h3>
            <textarea
              className={TEXTAREA}
              rows={4}
              value={data.derechoAbandonar}
              onChange={(e) => update("derechoAbandonar", e.target.value)}
            />
          </section>

          <hr className="border-slate-100" />

          {/* Section 10: Declaration and signature */}
          <section>
            <h3 className={SECTION_TITLE}>10. Declaration and Signature</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              I declare that I have read and understood the information contained in this document, that I have
              had the opportunity to ask any questions I deemed appropriate and have received satisfactory answers.
              I voluntarily consent to participate in the described treatment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={LABEL}>Place</label>
                <input
                  type="text"
                  className={`${INPUT} print-border-bottom`}
                  placeholder="City"
                  value={data.firmaLugar}
                  onChange={(e) => update("firmaLugar", e.target.value)}
                />
              </div>
              <div>
                <label className={LABEL}>Date</label>
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
                  Therapist&apos;s signature
                </label>
                <input
                  type="text"
                  className={`${INPUT} print-border-bottom`}
                  placeholder="Name and signature"
                  value={data.firmaTerapeuta}
                  onChange={(e) => update("firmaTerapeuta", e.target.value)}
                />
                <div className="mt-4 border-b border-slate-300 h-12" />
                <p className="text-xs text-slate-400 mt-1 text-center">
                  Therapist&apos;s signature
                </p>
              </div>
              <div>
                <label className={LABEL}>
                  Patient&apos;s or legal guardian&apos;s signature
                </label>
                <input
                  type="text"
                  className={`${INPUT} print-border-bottom`}
                  placeholder="Name and signature"
                  value={data.firmaPaciente}
                  onChange={(e) => update("firmaPaciente", e.target.value)}
                />
                <div className="mt-4 border-b border-slate-300 h-12" />
                <p className="text-xs text-slate-400 mt-1 text-center">
                  Patient&apos;s / legal guardian&apos;s signature
                </p>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <div className="border-t border-slate-100 pt-4">
            <p className="text-xs text-slate-400 text-center leading-relaxed">
              This document is completed in duplicate. One copy is kept by the therapist
              and the other is given to the patient or their legal guardian. Please keep this document in a safe place.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
