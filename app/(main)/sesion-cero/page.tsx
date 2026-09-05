import PageHeader from "@/components/PageHeader";

const checklist = [
  { area: "Informed consent", items: ["Explain confidentiality and its limits", "Sign informed consent form", "Explain recording (if applicable)", "Give patient a copy"] },
  { area: "Chief complaint", items: ["What brings you here today?", "How long has this been happening?", "What led you to seek help now?", "Any prior treatment?"] },
  { area: "Clinical history", items: ["Relevant medical history", "Current medications", "Family history of mental health", "Previous similar episodes"] },
  { area: "Risk assessment", items: ["Suicidal or self-harm ideation", "Substance use", "Social support network", "Protective factors"] },
  { area: "Life context", items: ["Work / academic situation", "Significant relationships", "Daily routine", "Current stressors"] },
];

const questions = [
  { category: "Opening", questions: ["What brought you here today?", "How would you describe the main problem?", "What do you hope to get from this process?"] },
  { category: "Impact", questions: ["How does this affect your daily life?", "Which areas are most affected (work, relationships, health)?", "Is there anything you can no longer do because of this?"] },
  { category: "History", questions: ["When did this start?", "Was there a trigger or event that set it off?", "Were there periods when you felt better? What changed?"] },
  { category: "Resources", questions: ["What have you tried to feel better?", "What has worked, even partially?", "Who can you turn to when you need support?"] },
  { category: "Expectations", questions: ["How would you know the treatment is working?", "What changes do you hope to see in 2–3 months?", "Do you have any doubts or concerns about the process?"] },
];

const scripts = [
  {
    moment: "Opening the session",
    text: "Hi, welcome. Before we start, I'd like to explain how this works and answer any questions you might have. Today's goal is to get to know each other, understand what brought you here, and see if we're a good fit to work together. Does that sound okay?",
  },
  {
    moment: "Explaining CBT",
    text: "Cognitive-behavioral therapy works with the relationship between what we think, how we feel, and what we do. The idea is that when we change thought patterns that are hurting us, our emotions and behaviors shift too. It's an active therapy — we work in session and between sessions as well.",
  },
  {
    moment: "Discussing confidentiality",
    text: "Everything we talk about here is confidential. There are exceptions: if there is a risk of harm to you or others, or if there is a court order. Outside of those, nothing leaves this room without your consent.",
  },
  {
    moment: "Closing the session",
    text: "To wrap up, I'd like to summarize what I understood today and check if that matches your perspective... Does it make sense to start there? For next session, I'd like you to notice when [the problem] shows up and briefly jot down what you were thinking and feeling in that moment.",
  },
];

const instruments = [
  { name: "PHQ-9", use: "Depression", when: "If there is low mood, anhedonia, or somatic complaints" },
  { name: "GAD-7", use: "Generalized anxiety", when: "If there is excessive worry or chronic tension" },
  { name: "BAI", use: "Anxiety (physical symptoms)", when: "If there are somatic complaints or panic attacks" },
  { name: "PCL-5", use: "Trauma / PTSD", when: "If there is a history of traumatic events" },
  { name: "BDI-II", use: "Depression (more detailed)", when: "If the PHQ-9 suggests moderate or severe depression" },
];

export default function SesionCeroPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="Zero Session, No Improvising"
        description="Complete guide for the first session: clinical checklist, key questions, suggested scripts, and initial assessment instruments."
        badge="First Session"
        badgeColor="bg-violet-600"
      />

      <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5 mb-8">
        <h2 className="font-bold text-violet-800 mb-3 flex items-center gap-2">
          <span>🎯</span> Goals of the zero session
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {["Build the therapeutic alliance", "Gather the chief complaint", "Initial risk assessment", "Obtain informed consent", "Explain the CBT model", "Agree on preliminary goals"].map((obj) => (
            <div key={obj} className="flex items-start gap-2 text-sm text-violet-900">
              <span className="text-violet-500 mt-0.5 flex-shrink-0">✓</span>
              {obj}
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Checklist by area</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {checklist.map((area) => (
          <div key={area.area} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
            <h3 className="font-semibold text-[#1e3a5f] text-sm mb-2">{area.area}</h3>
            <ul className="space-y-1">
              {area.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">□</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Key questions by category</h2>
      <div className="space-y-4 mb-8">
        {questions.map((cat) => (
          <div key={cat.category} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
            <h3 className="font-semibold text-[#1e3a5f] text-sm mb-2 flex items-center gap-1">
              <span className="text-amber-500">❓</span> {cat.category}
            </h3>
            <ul className="space-y-1">
              {cat.questions.map((q) => (
                <li key={q} className="text-xs text-gray-600 flex items-start gap-2 italic">
                  <span className="text-amber-400 mt-0.5 flex-shrink-0">—</span>
                  &ldquo;{q}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Suggested scripts</h2>
      <div className="space-y-4 mb-8">
        {scripts.map((s) => (
          <div key={s.moment} className="bg-teal-50 border border-teal-200 rounded-xl p-4">
            <div className="text-xs font-semibold text-teal-700 uppercase mb-2 flex items-center gap-1">
              <span>💬</span> {s.moment}
            </div>
            <p className="text-sm text-teal-900 leading-relaxed italic">&ldquo;{s.text}&rdquo;</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Which instrument to use today?</h2>
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="text-left px-4 py-3 text-xs font-semibold text-[#1e3a5f]">Instrument</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-[#1e3a5f]">Assesses</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-[#1e3a5f]">Use when…</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {instruments.map((i) => (
              <tr key={i.name}>
                <td className="px-4 py-3 font-medium text-[#1e3a5f]">{i.name}</td>
                <td className="px-4 py-3 text-gray-600">{i.use}</td>
                <td className="px-4 py-3 text-gray-500 text-xs">{i.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="text-xs font-semibold text-amber-700 uppercase mb-2 flex items-center gap-1">
          <span>⚠️</span> Clinical note
        </div>
        <p className="text-sm text-amber-800 leading-relaxed">
          The zero session is not just data collection. It is the most important moment for building the therapeutic alliance.
          Balance the structured interview with moments of genuine listening. The patient should leave feeling understood,
          not evaluated.
        </p>
      </div>
    </div>
  );
}
