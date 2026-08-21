import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const checklist = {
  preSession: [
    "Stable internet connection verified (>10 Mbps recommended)",
    "Camera at eye level, front-facing lighting",
    "Neutral, professional background (or a distraction-free virtual background)",
    "Headset with microphone connected and tested",
    "Video call platform open and ready",
    "Backup platform agreed with the patient (phone / alternative app)",
    "Patient's physical address and emergency contact on hand",
    "Patient history and notes from previous sessions reviewed",
    "Worksheets or session materials prepared and ready to share",
    "Phone on silent, notifications disabled",
    "Door closed and privacy guaranteed",
    "Water nearby for the session",
  ],
  firstSession: [
    "Patient's privacy in their own space confirmed",
    "Online framework and its limitations explained",
    "Patient's full physical address collected",
    "Name and phone number of patient's emergency contact collected",
    "Protocol explained if the connection drops",
    "Confirmed that the patient has the therapist's phone number",
    "Explained what happens in the event of a severe crisis",
    "Specific informed consent for teletherapy obtained",
    "Suitability of teletherapy for this patient explored",
    "Secure channel for between-session communication agreed",
  ],
};

const secciones = [
  {
    titulo: "Optimal technical setup",
    icono: "💻",
    color: "border-blue-200 bg-blue-50",
    items: [
      { titulo: "Secure platform", desc: "Use a platform with end-to-end encryption. Recommended clinical options: Doxy.me (free, no installation, designed for healthcare), Whereby, Zoom for Healthcare, or your institution's platform. Avoid WhatsApp or Skype for clinical sessions." },
      { titulo: "Visual framing", desc: "Camera at eye level (not angled up or down). Natural front-facing lighting or a soft lamp — never with a window behind you. The patient should see you as if you are at the same level, not looking up or down at you." },
      { titulo: "Quality audio", desc: "Headphones with a microphone reduce echo and improve privacy. Use a room with little reverberation. Alert the patient if there is unavoidable background noise. Poor audio impairs emotional connection more than poor video." },
      { titulo: "Mandatory backup plan", desc: "Before each session, confirm: the patient's phone number, the agreed backup platform, and what to do if the call drops during a crisis. Practice switching to the backup plan at least once with each patient." },
      { titulo: "Connection speed", desc: "Minimum 5 Mbps upload/download. Use a wired ethernet connection if possible. Close applications that consume bandwidth. If drops are frequent, consider switching to audio only — voice without video is better than choppy video." },
      { titulo: "Virtual waiting room", desc: "Some platforms have a waiting room — use it to maintain the therapeutic frame. The patient enters when you admit them, just as in an in-person setting. This reinforces the therapeutic boundary and professional frame." },
    ],
  },
  {
    titulo: "Therapeutic alliance through the screen",
    icono: "🤝",
    color: "border-emerald-200 bg-emerald-50",
    items: [
      { titulo: "The first 5 minutes", desc: "Start with a brief personal connection before the clinical work. Ask how they are, whether they are in a private space, and whether there is anything they need before starting. The screen makes explicit connection even more necessary — don't assume it's already there." },
      { titulo: "Adapted eye contact", desc: "Look directly at the camera (not at the patient's image) when you want to convey presence and active listening. Nod frequently. Use more facial gestures than in person to compensate for the loss of body language." },
      { titulo: "Check understanding more often", desc: "Online, about 70% of non-verbal communication is lost. Ask more explicitly and more frequently: 'How does what we discussed land for you?' 'Is there anything that wasn't clear?' Do not assume silence means understanding." },
      { titulo: "Intentional pauses", desc: "Pauses online are more uncomfortable than in person. Normalize them: 'I'm going to leave a moment of silence for you to process.' The patient may interpret silence as a technical disconnection if you don't warn them." },
      { titulo: "Explicit and ritualized closing", desc: "Closing a session online needs to be more intentional than in person. Dedicate the last 7–10 minutes to actively closing: summarizing, agreeing on homework, checking how the patient is before disconnecting. Don't end abruptly." },
      { titulo: "Use the patient's name more often", desc: "Using the patient's name more frequently than in person reinforces connection and helps maintain attention. The screen creates distance — the name reduces it." },
    ],
  },
  {
    titulo: "Adapting CBT techniques",
    icono: "🔧",
    color: "border-purple-200 bg-purple-50",
    items: [
      { titulo: "Screen sharing as a whiteboard", desc: "For the cognitive model, thought maps, or exposure hierarchies, share your screen with a Google Doc or Word document. The patient sees you writing in real time — more dynamic than a physical whiteboard." },
      { titulo: "Collaborative worksheets in real time", desc: "Share a link to a worksheet from this app with the patient. Both of you can view it simultaneously. The patient fills it in on their device while you talk — much more effective than dictating answers." },
      { titulo: "Exposure with real-time support", desc: "The patient performs the exposure in their natural environment while keeping the video call active. You provide support and measure SUDS in real time. For situational phobias (elevators, supermarkets), the patient can carry their phone during exposure." },
      { titulo: "Guided relaxation and mindfulness", desc: "These work excellently online — the patient can lie on their sofa or bed. Let them know they can close their eyes. Speak more slowly than in person. Wait before ending to verify that they return gradually." },
      { titulo: "Role-play and social skills", desc: "Role-play works well by video call. For social phobia, the video call itself can serve as a progressive exposure. For communication skills, the screen adds a layer of distance that sometimes facilitates getting started." },
      { titulo: "Digital between-session tasks", desc: "Send worksheets by email before the session so the patient has them ready. Use Google Forms or the worksheets in this app for the patient to record tasks, which you can review before the session." },
    ],
  },
];

const casosGestion = [
  {
    situacion: "The patient is in crisis during the session",
    indicadores: "Intense crying that does not subside, visible dissociation, mentions active self-harm or suicide.",
    accion: "1) Verify that they are in a safe space. 2) Keep the call active. 3) Speak slowly and clearly: 'Are you in a safe place right now?' 4) If there is immediate risk: ask them to call emergency services while you remain on the call, or activate the emergency contact you have on file. 5) Do not hang up until safety is verified.",
    prevenir: "Always collect the address and emergency contact in the first session. Have the crisis plan agreed before it is needed.",
  },
  {
    situacion: "The connection drops during a crisis",
    indicadores: "The patient disconnects abruptly without warning, especially at an emotionally intense moment.",
    accion: "1) Try to reconnect immediately through the platform. 2) If they do not respond within 2 minutes, call their phone. 3) If they do not answer the phone, send a text message. 4) If there is no response within 10 minutes and the risk was high, activate the emergency contact. 5) Document the entire process.",
    prevenir: "Explicitly agree in the first session on what you will do if the connection drops. The patient should know you will try to reconnect.",
  },
  {
    situacion: "The patient does not have real privacy",
    indicadores: "Someone can be heard in their space, they suddenly lower their voice, they glance around nervously.",
    accion: "1) Ask directly: 'Are you in a private space where you can speak freely?' 2) If they cannot speak: agree on a code ('say yes if everything is okay') or postpone the session. 3) Work the session at a surface level if there is no privacy. 4) Never pressure them to continue if there is a risk of being overheard.",
    prevenir: "In the first session, discuss the importance of privacy and plan how the patient will ensure it.",
  },
  {
    situacion: "The patient shows signs of dissociation",
    indicadores: "Glazed look, very slow responses, disconnection from the emotional content being worked on.",
    accion: "1) Interrupt the content: 'Are you still with me?' 2) Use verbal grounding techniques: 'Can you name 3 things you can see right now?' 3) Ask them to do something physical: stand up, touch something with temperature. 4) Reduce the intensity of the content. 5) Do not continue with trauma or difficult material until they are present again.",
    prevenir: "Establish the signs of dissociation and the agreed protocol with the patient before working on difficult material.",
  },
  {
    situacion: "The therapist detects alcohol or substance use",
    indicadores: "Slurred speech, disorganized thinking, references to recent use, the patient confesses to having used.",
    accion: "1) Do not continue with substantive clinical session work. 2) Verify immediate safety: 'Are you alone? Are you safe?' 3) Shorten the session kindly: 'Today we won't be able to work on our usual topics. Let's leave it here and continue next time.' 4) If there is a safety risk: activate the crisis protocol. 5) Address the episode in the next session without judgment.",
    prevenir: "Include in the online framework that sessions require being in a condition to participate fully.",
  },
];

const guiaBienvenida = {
  intro: "Adaptable text to send to the patient before the first online session:",
  partes: [
    {
      titulo: "Before the first session",
      contenido: `Hi [name],

Before our first online session, I would like to share a few guidelines to make sure everything goes smoothly.

SPACE: Find a private place where no one can overhear you. Put a sign on the door if necessary. If you live with others, let them know you will have an important meeting.

DEVICE: You can use a computer, tablet, or phone. If you use a phone, place it on a stand — don't hold it in your hand. Close other applications.

CONNECTION: Connect 5 minutes early to check that everything is working. We have the phone as a backup if there are technical problems.

PRIVACY: Everything we discuss is confidential. Make sure there are no speakers or devices that could be recording you without your knowledge.

If you have any technical questions before the session, feel free to message me.`,
    },
    {
      titulo: "What to expect from online sessions",
      contenido: `Online sessions have some differences compared to in-person:

✓ Same duration: 50–60 minutes
✓ Same confidentiality as in person
✓ Same effectiveness for most presentations
✓ Ability to use worksheets and digital materials during the session

Differences to keep in mind:
— Occasional minor technical interruptions may occur (this is normal; we will handle them)
— At first it may feel a bit different — that is completely normal
— It is important to close other tabs and put your phone on silent

In case of emergency outside of sessions: [phone number or crisis protocol].`,
    },
  ],
};

const protocoloCrisis = [
  {
    paso: "01",
    titulo: "Early detection",
    desc: "Warning signs: the patient mentions suicidal ideation, recent self-harm, severe panic attack, or intense dissociation. Do not minimize any verbal sign.",
    color: "bg-red-50 border-red-200",
    numColor: "bg-red-500",
  },
  {
    paso: "02",
    titulo: "Verify immediate safety",
    desc: "Ask directly: 'Are you in a safe place right now?' 'Is there anything in your immediate environment that poses a risk?' Maintain a calm voice and slow pace.",
    color: "bg-orange-50 border-orange-200",
    numColor: "bg-orange-500",
  },
  {
    paso: "03",
    titulo: "Maintain the connection",
    desc: "Do not hang up under any circumstances until safety is verified. If the call drops, call their phone immediately. If they do not answer within 2 minutes, activate the emergency contact.",
    color: "bg-amber-50 border-amber-200",
    numColor: "bg-amber-500",
  },
  {
    paso: "04",
    titulo: "Activate support network",
    desc: "Ask the patient to contact their support person while you keep the call active. If risk is high: ask them to call emergency services or a crisis line. Offer to wait while they make the call.",
    color: "bg-yellow-50 border-yellow-200",
    numColor: "bg-yellow-600",
  },
  {
    paso: "05",
    titulo: "Refer to emergency services if necessary",
    desc: "If risk is imminent and the patient cannot guarantee their safety: directly activate the registered emergency contact, or instruct the patient to call emergency services. Document everything that occurred.",
    color: "bg-blue-50 border-blue-200",
    numColor: "bg-blue-500",
  },
  {
    paso: "06",
    titulo: "Documentation and follow-up",
    desc: "After the crisis: document the entire episode (time, risk assessment, actions taken, patient's state at the end). Contact the patient the following day. Bring the case to supervision.",
    color: "bg-purple-50 border-purple-200",
    numColor: "bg-purple-500",
  },
];

const recursos = [
  {
    categoria: "Clinical video call platforms",
    icono: "📹",
    color: "bg-blue-50 border-blue-200",
    items: [
      { nombre: "Doxy.me", desc: "Free, no installation required, designed for healthcare. Virtual waiting room. HIPAA-compliant." },
      { nombre: "Whereby", desc: "Simple, no download needed, with a fixed room link. Free plan sufficient for individual practice." },
      { nombre: "Zoom for Healthcare", desc: "The most widely known. Healthcare-specific version with BAA agreement for HIPAA compliance." },
      { nombre: "Google Meet", desc: "Easy to use, integrated with Google Calendar. Good option for institutions using Google Workspace." },
    ],
  },
  {
    categoria: "In-session collaboration tools",
    icono: "🛠️",
    color: "bg-emerald-50 border-emerald-200",
    items: [
      { nombre: "Shared Google Doc", desc: "For collaborative thought records, cognitive formulations, and session notes." },
      { nombre: "Miro / FigJam", desc: "Virtual whiteboards for concept maps, ABC model, behavior chains, exposure hierarchies." },
      { nombre: "Google Forms", desc: "For the patient to complete questionnaires or worksheets between sessions, with responses sent to you." },
      { nombre: "Notion", desc: "For creating a shared patient–therapist space with resources, tasks, and progress tracking." },
    ],
  },
  {
    categoria: "Resources for the patient between sessions",
    icono: "📱",
    color: "bg-purple-50 border-purple-200",
    items: [
      { nombre: "Headspace / Calm", desc: "Guided meditation apps for mindfulness practice between sessions." },
      { nombre: "Daylio / Bearable", desc: "Mood and symptom tracking apps. Useful as a structured emotional journal." },
      { nombre: "Woebot", desc: "CBT chatbot for between-session support. Does not replace therapy; complements the work." },
      { nombre: "PTSD Coach (VA)", desc: "Free app from the US Department of Veterans Affairs for trauma symptoms. Very comprehensive." },
    ],
  },
  {
    categoria: "Online practice management",
    icono: "📋",
    color: "bg-amber-50 border-amber-200",
    items: [
      { nombre: "SimplePractice", desc: "All-in-one platform: video calls, clinical records, notes, billing. Designed for therapists." },
      { nombre: "TheraPlatform", desc: "Alternative with integrated virtual whiteboard, especially useful for CBT and worksheet-based work." },
      { nombre: "Calendly", desc: "Online appointment scheduling. The patient books directly in your available slots — eliminates email back-and-forth." },
      { nombre: "Docusign / HelloSign", desc: "For obtaining digitally signed informed consent before the first session." },
    ],
  },
];

const eticaLegal = [
  {
    titulo: "Specific informed consent for teletherapy",
    desc: "Consent for teletherapy must differ from in-person consent. It should include: specific risks of the online format (technical confidentiality, crisis limitations), crisis protocol, technology backup plan, and recording policy. Always obtain it in writing before the first session.",
    icono: "📝",
  },
  {
    titulo: "Jurisdictional competence and licensure",
    desc: "Licensing requirements for teletherapy vary by jurisdiction. Within your licensed region you may generally practice teletherapy freely. For patients in other regions or countries, verify the applicable regulations. Some countries (USA, Germany, France) have strict restrictions on cross-border teletherapy.",
    icono: "⚖️",
  },
  {
    titulo: "Data protection (GDPR / HIPAA)",
    desc: "The platforms you use must comply with applicable data protection law (GDPR in Europe, HIPAA in the USA). Videoconferences must not be recorded without explicit consent. Clinical data stored in the cloud must reside on compliant servers with appropriate guarantees.",
    icono: "🔒",
  },
  {
    titulo: "Digital clinical records",
    desc: "Digital clinical records carry the same legal requirements as paper ones: minimum retention period, restricted access, backups. Always use tools with password protection and encryption. Avoid storing clinical data in Google Drive or Dropbox without additional encryption.",
    icono: "🗂️",
  },
  {
    titulo: "Patient suitability for teletherapy",
    desc: "Not all patients are suitable for online teletherapy. Relative contraindications: active psychosis, high active suicide risk, severe personality disorders in an acute phase, patients without access to a private space, active severe substance dependence. Assess case by case.",
    icono: "🩺",
  },
  {
    titulo: "Professional liability insurance",
    desc: "Verify that your professional liability insurance covers online practice. Some policies expressly exclude teletherapy or have specific conditions (same-country patients only, exclusions for non-in-person crises). Check with your professional body.",
    icono: "🛡️",
  },
  {
    titulo: "Technical confidentiality",
    desc: "Inform the patient of the technical risks that may affect confidentiality: unauthorized recordings, third parties on the same WiFi network, browser history. Recommend that they use headphones and a private WiFi connection. You should do the same.",
    icono: "🔐",
  },
  {
    titulo: "Crisis documentation",
    desc: "In teletherapy, documenting crisis episodes is especially important from a legal standpoint. Always document: date and time, risk assessment performed, actions taken, patient's state at the end, and subsequent follow-up. For any incident, consult your professional body.",
    icono: "📋",
  },
];

const autocuidado = [
  {
    titulo: "Daily session limit",
    desc: "Online sessions are 20–30% more draining than in-person sessions due to the greater sustained attention required. Reduce your daily maximum compared to in-person practice. Many therapists who see 7–8 in-person sessions reduce to 5–6 online.",
    icono: "⏱️",
  },
  {
    titulo: "Mandatory breaks between sessions",
    desc: "Schedule at least 15 minutes between sessions, not 5. Use that time to step away from the screen: stretch, go outside for a few minutes, drink water. The transition between online sessions is harder than in person because the physical change of space does not exist.",
    icono: "☕",
  },
  {
    titulo: "Start- and end-of-day rituals",
    desc: "Without commuting, online workdays begin and end in a blurry way. Create clear rituals: 10 minutes of preparation before the first session (review notes, breathe, set an intention for the day), and a closing ritual at the end (notes, leaving the workspace, physical activity or leisure).",
    icono: "🌅",
  },
  {
    titulo: "Dedicated physical workspace",
    desc: "If possible, always work in the same physical space and dedicate it exclusively to work. When you finish, physically leave that space. Physical separation helps mental separation. Avoid doing teletherapy from the sofa or bed.",
    icono: "🏠",
  },
  {
    titulo: "Screen fatigue (Zoom fatigue)",
    desc: "Video calls are more exhausting because they require greater cognitive processing of non-verbal cues. Symptoms: difficulty concentrating, irritability, headache at the end of the day. Remedies: camera off in non-session meetings, more breaks, screen-free days.",
    icono: "👁️",
  },
  {
    titulo: "Regular supervision — especially online",
    desc: "Teletherapy requires more supervision, not less. The limitations of the online format generate complex clinical situations that are important to discuss. Schedule regular supervision (at least monthly) and bring cases that present difficulties in the online format to supervision.",
    icono: "👥",
  },
  {
    titulo: "Connection with colleagues",
    desc: "Teletherapy can be isolating. Seek peer consultation groups with other therapists who also work online. The isolation of the online therapist is a real risk to professional well-being and clinical quality.",
    icono: "🌐",
  },
  {
    titulo: "Attention to the body",
    desc: "Eight hours sitting in front of a screen deteriorates posture and generates muscle tension. Invest in a good chair and a desk at the correct height. Take active breaks every 90 minutes: 5 minutes of movement. The therapist's body is a clinical tool.",
    icono: "🧘",
  },
];

const fichasOnline = [
  { id: "registro-pensamientos", nombre: "Automatic thought record" },
  { id: "diario-estado-animo", nombre: "Mood diary" },
  { id: "actividades-agradables", nombre: "Pleasant activities list" },
  { id: "plan-activacion-conductual", nombre: "Behavioral activation plan" },
  { id: "plan-seguridad-emocional", nombre: "Emotional safety plan" },
  { id: "ptsd-grounding", nombre: "Grounding techniques (PTSD)" },
  { id: "tlp-habilidades-crisis", nombre: "DBT crisis skills" },
  { id: "sueno-higiene", nombre: "Sleep hygiene plan" },
];

export default function TeleterapiaPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        title="Complete Teletherapy Guide"
        description="Best practices, protocols, resources, and ethical considerations for delivering quality CBT in an online format."
        badge="💻 Teletherapy"
      />

      {/* ── Main sections ── */}
      <div className="space-y-6">
        {secciones.map((seccion) => (
          <div key={seccion.titulo} className={`rounded-2xl border ${seccion.color} overflow-hidden`}>
            <div className="px-6 py-4 border-b border-inherit flex items-center gap-3">
              <span className="text-2xl">{seccion.icono}</span>
              <h2 className="font-bold text-[#1e3a5f] text-lg">{seccion.titulo}</h2>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {seccion.items.map((item) => (
                <div key={item.titulo} className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-semibold text-[#1e3a5f] text-sm mb-1.5">{item.titulo}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Checklist ── */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-3">
          <span className="text-2xl">✅</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Session Checklist</h2>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-[#1e3a5f] text-sm mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-bold">A</span>
              Before each session
            </h3>
            <ul className="space-y-2">
              {checklist.preSession.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="w-4 h-4 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1e3a5f] text-sm mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center font-bold">F</span>
              First online session (additional)
            </h3>
            <ul className="space-y-2">
              {checklist.firstSession.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="w-4 h-4 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Welcome guide ── */}
      <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-indigo-200 flex items-center gap-3">
          <span className="text-2xl">👋</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Patient Welcome Guide</h2>
        </div>
        <div className="p-5">
          <p className="text-sm text-indigo-700 mb-4 font-medium">{guiaBienvenida.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guiaBienvenida.partes.map((parte) => (
              <div key={parte.titulo} className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-[#1e3a5f] text-sm mb-3">{parte.titulo}</h3>
                <pre className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap font-sans">{parte.contenido}</pre>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Crisis protocol ── */}
      <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-red-200 flex items-center gap-3">
          <span className="text-2xl">🚨</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Online Crisis Protocol — Step by Step</h2>
        </div>
        <div className="p-5 space-y-3">
          {protocoloCrisis.map((paso) => (
            <div key={paso.paso} className={`rounded-xl border ${paso.color} p-4 flex gap-4`}>
              <div className={`w-8 h-8 rounded-full ${paso.numColor} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                {paso.paso}
              </div>
              <div>
                <h3 className="font-semibold text-[#1e3a5f] text-sm mb-1">{paso.titulo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{paso.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-red-600 rounded-xl p-4 mt-2">
            <p className="text-white text-sm font-semibold">Key emergency numbers:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              {[
                { nombre: "Emergencies", num: "911" },
                { nombre: "Suicide crisis", num: "988" },
                { nombre: "Crisis text line", num: "Text HOME to 741741" },
                { nombre: "Domestic violence", num: "1-800-799-7233" },
              ].map((t) => (
                <div key={t.nombre} className="bg-white/15 rounded-lg px-3 py-2 text-center">
                  <div className="text-white font-bold text-lg leading-none">{t.num}</div>
                  <div className="text-white/80 text-[10px] mt-0.5">{t.nombre}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practical case management */}
        <div className="px-5 pb-5">
          <h3 className="font-bold text-[#1e3a5f] text-sm mb-3 mt-2">Practical cases — How to handle these situations?</h3>
          <div className="space-y-3">
            {casosGestion.map((caso) => (
              <details key={caso.situacion} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <summary className="px-4 py-3 cursor-pointer font-semibold text-sm text-[#1e3a5f] flex items-center justify-between list-none">
                  <span>⚠️ {caso.situacion}</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 pt-1 border-t border-slate-100 space-y-2">
                  <div>
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">Indicators</span>
                    <p className="text-sm text-gray-600 mt-1">{caso.indicadores}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">What to do</span>
                    <p className="text-sm text-gray-600 mt-1">{caso.accion}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wide">How to prevent it</span>
                    <p className="text-sm text-gray-600 mt-1">{caso.prevenir}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* ── Digital resources ── */}
      <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-sky-200 flex items-center gap-3">
          <span className="text-2xl">🌐</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Recommended Digital Resources</h2>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {recursos.map((cat) => (
            <div key={cat.categoria} className={`rounded-xl border ${cat.color} p-4`}>
              <h3 className="font-semibold text-[#1e3a5f] text-sm mb-3 flex items-center gap-2">
                <span>{cat.icono}</span>{cat.categoria}
              </h3>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <div key={item.nombre} className="bg-white rounded-lg px-3 py-2">
                    <span className="text-xs font-bold text-[#1e3a5f]">{item.nombre}</span>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Ethics and legal ── */}
      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-amber-200 flex items-center gap-3">
          <span className="text-2xl">⚖️</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Ethical and Legal Considerations</h2>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {eticaLegal.map((item) => (
            <div key={item.titulo} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{item.icono}</span>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] text-sm mb-1.5">{item.titulo}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Therapist self-care ── */}
      <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-teal-200 flex items-center gap-3">
          <span className="text-2xl">🌿</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Online Therapist Self-Care</h2>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {autocuidado.map((item) => (
            <div key={item.titulo} className="bg-white rounded-xl p-4 shadow-sm flex gap-3">
              <span className="text-xl flex-shrink-0">{item.icono}</span>
              <div>
                <h3 className="font-semibold text-[#1e3a5f] text-sm mb-1.5">{item.titulo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Recommended worksheets ── */}
      <div className="mt-6 bg-[#1e3a5f] rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-2">Recommended worksheets for teletherapy</h2>
        <p className="text-white/70 text-sm mb-4">Worksheets that work especially well in digital format during the video call.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {fichasOnline.map((f) => (
            <Link
              key={f.id}
              href={`/fichas/${f.id}`}
              className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-3 text-sm text-white/90 hover:text-white font-medium"
            >
              {f.nombre}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
