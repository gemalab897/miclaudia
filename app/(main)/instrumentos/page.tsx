"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

// ─── Types ───────────────────────────────────────────────────────────────────

interface HistoryEntry {
  date: string;
  score: number;
  severity: string;
}

type InstrumentKey = "phq9" | "gad7" | "pcl5";

// ─── Instrument Definitions ──────────────────────────────────────────────────

const PHQ9_QUESTIONS = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people could have noticed. Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
  "Thoughts that you would be better off dead, or of hurting yourself in some way",
];

const PHQ9_OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

function getPHQ9Severity(score: number): { label: string; color: string; bg: string } {
  if (score <= 4) return { label: "Minimal", color: "text-emerald-700", bg: "bg-emerald-100" };
  if (score <= 9) return { label: "Mild", color: "text-yellow-700", bg: "bg-yellow-100" };
  if (score <= 14) return { label: "Moderate", color: "text-orange-700", bg: "bg-orange-100" };
  if (score <= 19) return { label: "Moderately Severe", color: "text-red-600", bg: "bg-red-100" };
  return { label: "Severe", color: "text-red-800", bg: "bg-red-200" };
}

const GAD7_QUESTIONS = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it is hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid, as if something awful might happen",
];

const GAD7_OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

function getGAD7Severity(score: number): { label: string; color: string; bg: string } {
  if (score <= 4) return { label: "Minimal", color: "text-emerald-700", bg: "bg-emerald-100" };
  if (score <= 9) return { label: "Mild", color: "text-yellow-700", bg: "bg-yellow-100" };
  if (score <= 14) return { label: "Moderate", color: "text-orange-700", bg: "bg-orange-100" };
  return { label: "Severe", color: "text-red-700", bg: "bg-red-100" };
}

const PCL5_QUESTIONS = [
  "Repeated, disturbing, and unwanted memories of the stressful experience",
  "Repeated, disturbing dreams of the stressful experience",
  "Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)",
  "Feeling very upset when something reminded you of the stressful experience",
  "Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)",
  "Avoiding memories, thoughts, or feelings related to the stressful experience",
  "Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)",
  "Trouble remembering important parts of the stressful experience",
  "Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)",
  "Blaming yourself or someone else for the stressful experience or what happened after it",
  "Having strong negative feelings such as fear, horror, anger, guilt, or shame",
  "Loss of interest in activities that you used to enjoy",
  "Feeling distant or cut off from other people",
  "Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)",
  "Irritable behavior, angry outbursts, or acting aggressively",
  "Taking too many risks or doing things that could cause you harm",
  "Being \"superalert\" or watchful or on guard",
  "Feeling jumpy or easily startled",
  "Having difficulty concentrating",
  "Trouble falling or staying asleep",
];

const PCL5_OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "A little bit", value: 1 },
  { label: "Moderately", value: 2 },
  { label: "Quite a bit", value: 3 },
  { label: "Extremely", value: 4 },
];

function getPCL5Severity(score: number): { label: string; color: string; bg: string } {
  if (score < 33) return { label: "Below cutoff", color: "text-emerald-700", bg: "bg-emerald-100" };
  return { label: "Probable PTSD (≥33)", color: "text-red-700", bg: "bg-red-100" };
}

// ─── History Chart ───────────────────────────────────────────────────────────

function HistoryChart({
  history,
  maxScore,
  accentClass,
}: {
  history: HistoryEntry[];
  maxScore: number;
  accentClass: string;
}) {
  if (history.length === 0) return null;

  const last5 = history.slice(-5);

  return (
    <div className="mt-4 pt-4 border-t border-slate-100">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
        Session history (last {last5.length})
      </p>
      <div className="flex items-end gap-3 h-20">
        {last5.map((entry, i) => {
          const pct = Math.max(4, Math.round((entry.score / maxScore) * 100));
          return (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <span className="text-xs font-bold text-slate-700">{entry.score}</span>
              <div className="w-full rounded-t-md relative" style={{ height: "48px" }}>
                <div
                  className={`absolute bottom-0 w-full rounded-t-md ${accentClass} opacity-80 transition-all`}
                  style={{ height: `${pct}%` }}
                />
              </div>
              <span
                className="text-[10px] text-slate-400 text-center leading-tight"
                style={{ fontSize: "10px" }}
              >
                {new Date(entry.date + "T00:00:00").toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                })}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {last5.map((entry, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 text-xs bg-slate-50 border border-slate-200 rounded-full px-2 py-0.5"
          >
            <span className="text-slate-400">
              {new Date(entry.date + "T00:00:00").toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}
            </span>
            <span className="font-semibold text-slate-700">{entry.score}</span>
            <span className="text-slate-400">— {entry.severity}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Question Row ─────────────────────────────────────────────────────────────

function QuestionRow({
  index,
  text,
  options,
  value,
  onChange,
  accentSelectedClass,
}: {
  index: number;
  text: string;
  options: { label: string; value: number }[];
  value: number | null;
  onChange: (v: number) => void;
  accentSelectedClass: string;
}) {
  return (
    <div className="py-4 border-b border-slate-100 last:border-0">
      <p className="text-sm font-medium text-slate-700 mb-2.5 leading-snug">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold mr-2 shrink-0">
          {index + 1}
        </span>
        {text}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                selected
                  ? `${accentSelectedClass} border-transparent shadow-sm`
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {opt.value} – {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Instrument Panel ─────────────────────────────────────────────────────────

function InstrumentPanel({
  id,
  title,
  subtitle,
  badge,
  questions,
  options,
  maxScore,
  getSeverity,
  storageKey,
  accentSelectedClass,
  accentBarClass,
  accentBorderClass,
  accentHeaderClass,
  cutoffNote,
}: {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  questions: string[];
  options: { label: string; value: number }[];
  maxScore: number;
  getSeverity: (score: number) => { label: string; color: string; bg: string };
  storageKey: string;
  accentSelectedClass: string;
  accentBarClass: string;
  accentBorderClass: string;
  accentHeaderClass: string;
  cutoffNote?: string;
}) {
  const today = new Date().toISOString().split("T")[0];
  const [expanded, setExpanded] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [evalDate, setEvalDate] = useState(today);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setHistory(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  const answeredCount = answers.filter((a) => a !== null).length;
  const score = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const allAnswered = answeredCount === questions.length;
  const severity = getSeverity(score);

  function handleAnswer(i: number, v: number) {
    setSaved(false);
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = v;
      return next;
    });
  }

  function handleSave() {
    if (!allAnswered) return;
    const entry: HistoryEntry = {
      date: evalDate,
      score,
      severity: severity.label,
    };
    const next = [...history, entry];
    setHistory(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
    setSaved(true);
  }

  function handleReset() {
    setAnswers(Array(questions.length).fill(null));
    setSaved(false);
    setEvalDate(today);
  }

  const progressPct = Math.round((answeredCount / questions.length) * 100);

  return (
    <div
      className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-200 ${accentBorderClass}`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${accentHeaderClass}`}
      >
        <div className="flex items-center gap-4">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white ${accentSelectedClass.split(" ")[0]}`}
          >
            {badge}
          </span>
          <div>
            <h2 className="text-base font-bold text-[#1e3a5f]">{title}</h2>
            <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {answeredCount > 0 && !expanded && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <span
                className={`inline-block w-2 h-2 rounded-full ${allAnswered ? "bg-emerald-500" : "bg-amber-400"}`}
              />
              {answeredCount}/{questions.length} answered
            </span>
          )}
          <svg
            className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Body */}
      {expanded && (
        <div className="px-6 pb-6">
          {/* Progress + date row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5 pt-2">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-slate-500">
                  Progress: {answeredCount}/{questions.length} questions
                </span>
                <span className="text-xs font-bold text-slate-700">{progressPct}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${accentBarClass}`}
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <label className="text-xs font-medium text-slate-500 whitespace-nowrap">
                Assessment date
              </label>
              <input
                type="date"
                value={evalDate}
                onChange={(e) => setEvalDate(e.target.value)}
                className="text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          </div>

          {/* Score badge */}
          {answeredCount > 0 && (
            <div className="flex items-center gap-3 mb-5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-center px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-sm">
                <p className="text-2xl font-extrabold text-[#1e3a5f] leading-none">{score}</p>
                <p className="text-xs text-slate-400 mt-0.5">/ {maxScore}</p>
              </div>
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${severity.bg} ${severity.color}`}
                >
                  {severity.label}
                </span>
                {cutoffNote && score >= 33 && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{cutoffNote}</p>
                )}
              </div>
            </div>
          )}

          {/* Questions */}
          <div className="divide-y divide-slate-50">
            {questions.map((q, i) => (
              <QuestionRow
                key={i}
                index={i}
                text={q}
                options={options}
                value={answers[i]}
                onChange={(v) => handleAnswer(i, v)}
                accentSelectedClass={accentSelectedClass}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <button
              type="button"
              onClick={handleSave}
              disabled={!allAnswered}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                allAnswered
                  ? `${accentSelectedClass.split(" ")[0]} hover:opacity-90 shadow-sm`
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>
              Save result
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Reset
            </button>
            {saved && (
              <span className="inline-flex items-center gap-1.5 text-sm text-emerald-600 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Saved successfully
              </span>
            )}
            {!allAnswered && answeredCount > 0 && (
              <span className="text-xs text-amber-600">
                {questions.length - answeredCount} question{questions.length - answeredCount !== 1 ? "s" : ""} remaining
              </span>
            )}
          </div>

          {/* History */}
          <HistoryChart history={history} maxScore={maxScore} accentClass={accentBarClass} />
        </div>
      )}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

const INSTRUMENTS: InstrumentKey[] = ["phq9", "gad7", "pcl5"];

const INSTRUMENT_LABELS: Record<InstrumentKey, string> = {
  phq9: "PHQ-9 · Depression",
  gad7: "GAD-7 · Anxiety",
  pcl5: "PCL-5 · PTSD",
};

export default function InstrumentosPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<InstrumentKey | "all">("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const showAll = activeTab === "all";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 print:py-4">
      <PageHeader
        title="Instrument Calculator"
        description="Score and track patient progress session by session"
        badge="CBT Atlas"
        badgeColor="bg-[#0f2744]"
      />

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 print:hidden">
        {(["all", ...INSTRUMENTS] as const).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 border focus:outline-none ${
              activeTab === key
                ? "bg-[#0f2744] text-white border-[#0f2744] shadow-sm"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            {key === "all" ? "All instruments" : INSTRUMENT_LABELS[key]}
          </button>
        ))}
      </div>

      {/* Instruments */}
      <div className="flex flex-col gap-5">
        {/* PHQ-9 */}
        {(showAll || activeTab === "phq9") && (
          <InstrumentPanel
            id="phq9"
            title="PHQ-9 — Patient Health Questionnaire"
            subtitle="Depression screening and severity scale · 9 items · 0–27 points"
            badge="PHQ-9"
            questions={PHQ9_QUESTIONS}
            options={PHQ9_OPTIONS}
            maxScore={27}
            getSeverity={getPHQ9Severity}
            storageKey="phq9-history"
            accentSelectedClass="bg-indigo-600 text-white"
            accentBarClass="bg-indigo-500"
            accentBorderClass="border-indigo-100 hover:border-indigo-200"
            accentHeaderClass="hover:bg-indigo-50"
          />
        )}

        {/* GAD-7 */}
        {(showAll || activeTab === "gad7") && (
          <InstrumentPanel
            id="gad7"
            title="GAD-7 — Generalized Anxiety Disorder"
            subtitle="Anxiety screening and severity scale · 7 items · 0–21 points"
            badge="GAD-7"
            questions={GAD7_QUESTIONS}
            options={GAD7_OPTIONS}
            maxScore={21}
            getSeverity={getGAD7Severity}
            storageKey="gad7-history"
            accentSelectedClass="bg-blue-600 text-white"
            accentBarClass="bg-blue-500"
            accentBorderClass="border-blue-100 hover:border-blue-200"
            accentHeaderClass="hover:bg-blue-50"
          />
        )}

        {/* PCL-5 */}
        {(showAll || activeTab === "pcl5") && (
          <InstrumentPanel
            id="pcl5"
            title="PCL-5 — PTSD Checklist (DSM-5)"
            subtitle="Posttraumatic stress disorder symptom scale · 20 items · 0–80 points"
            badge="PCL-5"
            questions={PCL5_QUESTIONS}
            options={PCL5_OPTIONS}
            maxScore={80}
            getSeverity={getPCL5Severity}
            storageKey="pcl5-history"
            accentSelectedClass="bg-rose-600 text-white"
            accentBarClass="bg-rose-500"
            accentBorderClass="border-rose-100 hover:border-rose-200"
            accentHeaderClass="hover:bg-rose-50"
            cutoffNote="Cutoff reached — Probable PTSD"
          />
        )}
      </div>

      {/* Legend / scale guide */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 print:mt-4">
        <div className="bg-white rounded-2xl border border-indigo-100 p-4">
          <p className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2">PHQ-9 Severity</p>
          <div className="space-y-1 text-xs text-slate-600">
            <div className="flex justify-between"><span>0–4</span><span className="font-medium text-emerald-600">Minimal</span></div>
            <div className="flex justify-between"><span>5–9</span><span className="font-medium text-yellow-600">Mild</span></div>
            <div className="flex justify-between"><span>10–14</span><span className="font-medium text-orange-600">Moderate</span></div>
            <div className="flex justify-between"><span>15–19</span><span className="font-medium text-red-600">Moderately Severe</span></div>
            <div className="flex justify-between"><span>20–27</span><span className="font-bold text-red-800">Severe</span></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-blue-100 p-4">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">GAD-7 Severity</p>
          <div className="space-y-1 text-xs text-slate-600">
            <div className="flex justify-between"><span>0–4</span><span className="font-medium text-emerald-600">Minimal</span></div>
            <div className="flex justify-between"><span>5–9</span><span className="font-medium text-yellow-600">Mild</span></div>
            <div className="flex justify-between"><span>10–14</span><span className="font-medium text-orange-600">Moderate</span></div>
            <div className="flex justify-between"><span>15–21</span><span className="font-bold text-red-700">Severe</span></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-rose-100 p-4">
          <p className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-2">PCL-5 Interpretation</p>
          <div className="space-y-1 text-xs text-slate-600">
            <div className="flex justify-between"><span>0–32</span><span className="font-medium text-emerald-600">No probable PTSD</span></div>
            <div className="flex justify-between"><span>≥ 33</span><span className="font-bold text-red-700">Probable PTSD</span></div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 leading-tight">
            Provisional cutoff. Confirm with structured clinical evaluation.
          </p>
        </div>
      </div>

      {/* Print note */}
      <p className="mt-6 text-xs text-slate-400 text-center print:hidden">
        Data is stored only on this device (localStorage). For formal clinical records, export or print the result.
      </p>

      {/* Print styles */}
      <style>{`
        @media print {
          body { background: white !important; }
          button { display: none !important; }
          input[type="date"] { border: none; }
        }
      `}</style>
    </div>
  );
}
