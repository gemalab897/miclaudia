import PageHeader from "@/components/PageHeader";
import CopyButton from "./CopyButton";

const secciones = [
  {
    titulo: "Identifying automatic thoughts",
    color: "border-blue-200 bg-blue-50",
    headerColor: "bg-blue-600",
    descripcion: "Help the patient become aware of what they are thinking in the moment",
    items: [
      "What was going through your mind just before you felt that way?",
      "What image or thought appeared in that moment?",
      "What did that situation mean to you?",
      "If you had to guess what you were thinking, what would you say?",
      "What was the worst thing you believed could happen?",
      "What was that inner voice saying about you?",
      "What did you think others were thinking about you in that moment?",
      "What did that situation mean for your future?",
      "Was there any mental image accompanying that feeling?",
      "If that feeling could speak, what would it say?",
      "What part of the situation affected you the most?",
      "Were you thinking something bad was going to happen? What exactly?",
      "What interpretation did you give to what that person did or said?",
      "Was there something you felt you had to do or avoid?",
      "What did you think that moment said about you as a person?",
    ],
  },
  {
    titulo: "Evaluating the evidence",
    color: "border-emerald-200 bg-emerald-50",
    headerColor: "bg-emerald-600",
    descripcion: "Examine the validity of the thought in an empirical and objective way",
    items: [
      "What evidence do you have that this thought is true?",
      "What evidence is there against this thought?",
      "What would you say to a friend who had that thought?",
      "Have you had this thought before? What actually happened?",
      "If another person were in your situation, would they see things the same way?",
      "Are you basing this on facts or on feelings?",
      "How many times has what you feared actually happened?",
      "Is there another way to interpret what happened?",
      "What is the real probability that what you fear will occur?",
      "What does the objective evidence say about this situation?",
      "If you had to defend this thought before a jury, what evidence would you present?",
      "Would someone who knows you well agree with that thought?",
      "Are you confusing a thought with a fact?",
      "What would happen if the worst thing you imagine actually occurred?",
      "Is there something you are ignoring or overlooking?",
      "How much of that thought is yours and how much is what others have told you?",
    ],
  },
  {
    titulo: "Generating alternative thoughts",
    color: "border-purple-200 bg-purple-50",
    headerColor: "bg-purple-600",
    descripcion: "Facilitate the construction of more balanced and functional interpretations",
    items: [
      "Is there a more balanced way to see this situation?",
      "If your best friend were in this situation, what would you tell them?",
      "What would you think if you were feeling well and confident?",
      "How would you see this in 5 years?",
      "What is the most realistic outcome?",
      "What have you learned from similar situations in the past?",
      "How would you describe this situation without using absolute words like 'always' or 'never'?",
      "What part of the situation is within your control?",
      "Is there something positive or neutral in this situation you are not considering?",
      "What would someone more compassionate toward yourself say?",
      "What is the most useful thing you could think right now?",
      "How would your behavior change if you thought differently?",
      "Can you separate what is a fact from what is your interpretation?",
      "What advice would you give to someone who thought the same as you?",
      "If you saw this situation as a challenge rather than a threat, how would you describe it?",
    ],
  },
  {
    titulo: "Phrases for resistance",
    color: "border-amber-200 bg-amber-50",
    headerColor: "bg-amber-600",
    descripcion: "When the patient refuses to question their thoughts or says 'yes, but...'",
    items: [
      "I understand it is difficult to see things differently right now. I am not asking you to believe it, just to consider it together.",
      "I do not need you to change your mind right now. I just want to explore other possibilities with you.",
      "It seems like part of you wants to hold on to that thought. What function do you think it serves?",
      "What would happen if that thought were just a hypothesis and not a certainty?",
      "I am not saying your thought is wrong. I am asking if it is the only possible one.",
      "What would you lose if you started to see things differently?",
      "I notice there is a lot of certainty in what you are saying. How do you know for sure that is the case?",
      "What would you need to see or hear to be able to consider another perspective?",
      "It seems that thought has been with you for a long time. When did you start thinking this way?",
      "I understand you feel that thought is true. Feelings are always valid, even though thoughts can be revisited.",
    ],
  },
  {
    titulo: "Phrases for emotional validation",
    color: "border-rose-200 bg-rose-50",
    headerColor: "bg-rose-600",
    descripcion: "Before any cognitive intervention, validate the patient's emotional experience",
    items: [
      "It makes a lot of sense that you feel this way given everything you have been through.",
      "What you are describing sounds very painful. Thank you for sharing it with me.",
      "It does not surprise me that this has affected you so much.",
      "Your emotions are completely understandable in this situation.",
      "I can see this is costing you a great deal. I am here.",
      "You do not have to justify how you feel. It is valid just as it is.",
      "I hear that you are suffering and that matters.",
      "It seems like you have been carrying this alone for a long time.",
      "What you feel is real and deserves to be heard.",
      "Before we continue, I want to make sure you know that what you feel makes sense.",
    ],
  },
  {
    titulo: "Phrases for crisis moments",
    color: "border-red-200 bg-red-50",
    headerColor: "bg-red-600",
    descripcion: "When the patient is in a state of intense distress or emotional overwhelm",
    items: [
      "Right now you are safe. I am with you. Let us take it one step at a time.",
      "I notice this is very intense right now. Let us breathe together for a moment.",
      "You do not have to solve anything right now. Just be here.",
      "What you are feeling right now is very intense, but it will pass. Emotions always pass.",
      "Let us ground ourselves a little. Tell me three things you can see right now.",
      "What do you need right now in this moment?",
      "You do not have to talk if you do not want to. You can simply be here.",
      "What you are feeling has a name. It is called [anxiety/panic/pain]. And it can be worked through.",
      "You have gotten through difficult moments before. You have resources even if you cannot see them right now.",
      "You are not alone in this. We will work through it together.",
    ],
  },
];

const ejerciciosSomaticos = [
  {
    titulo: "Grounding",
    subtitulo: "Somatic grounding",
    icono: "🌿",
    acento: "border-teal-400",
    badge: "bg-teal-600",
    fondo: "bg-teal-50",
    numeroBadge: "bg-teal-600",
    items: [
      "Bring your attention to the soles of your feet. Notice the contact with the floor. Press down gently. What do you feel there?",
      "Feel the weight of your body in the chair. The chair supports all your weight. You do not have to hold yourself up right now.",
      "Slowly look around the room. Quietly name five things you can see. No rush.",
      "Listen to the sounds in the room right now. The nearby ones, the distant ones. Without judging them, just listen.",
      "Touch the surface of [the chair / the table / your clothing] with your hands. Notice the texture, the temperature. Is it smooth, rough, cold, warm?",
      "Breathe slowly. You do not have to do it perfectly. Just notice the air coming in and going out. Each breath anchors you a little more here.",
      "Name three things you can see, two you can hear, and one you can feel in your body right now.",
      "Place your feet on the floor, your back against the backrest. Feel supported. You are here. You are safe.",
      "Orient yourself in space: where are you? What day is it? What time approximately? Let your nervous system know the danger has passed.",
      "Can you notice any part of your body that feels a little calmer than the rest? Stay with that sensation for a moment.",
    ],
  },
  {
    titulo: "Body Scan",
    subtitulo: "Observe without judging or changing",
    icono: "🫁",
    acento: "border-cyan-400",
    badge: "bg-cyan-600",
    fondo: "bg-cyan-50",
    numeroBadge: "bg-cyan-600",
    items: [
      "Close your eyes if that is comfortable, or lower your gaze. Start by noticing your breath just as it is right now, without changing it.",
      "Bring your attention to your feet. Is there tension, tingling, warmth, coolness? You do not have to change anything, just observe.",
      "Move your attention up through your legs, calves, knees, thighs. What do you notice? Heaviness, lightness, tension?",
      "Arrive at the abdomen. Is it tense or relaxed? Do you feel something moving with the breath?",
      "Notice the chest. How is it breathing? Does the chest rise and fall freely or is there constriction?",
      "Bring your attention to your shoulders. Are they raised, tense, tight? Simply observe.",
      "Now the neck and jaw. Is there tension there? Are the teeth clenched? Just notice.",
      "Scan the face: forehead, eyebrows, eyes, cheeks. Is there tension or softness?",
      "Take a sweep from head to toe: which area has the most tension? Which area feels most at ease?",
      "If you found an area of tension, breathe gently toward it. Not to change it, but to be with it.",
    ],
  },
  {
    titulo: "Nervous System Regulation",
    subtitulo: "Activating the parasympathetic brake",
    icono: "💨",
    acento: "border-indigo-400",
    badge: "bg-indigo-600",
    fondo: "bg-indigo-50",
    numeroBadge: "bg-indigo-600",
    items: [
      "Let us breathe together. Inhale counting to 4... hold for a moment... exhale slowly to 6. The longer exhale activates the nervous system's brake.",
      "Physiological sigh: a normal inhale and, at the end, take one more sip of air before a long exhale. It is a nervous system reset.",
      "Inhale through the nose for 4 counts, exhale through the mouth for 8 counts with lips pursed as if blowing out a candle. Do this three times.",
      "Is your nervous system revved up (hyperactivation) or shut down (hypoactivation)? Is there more tension or more numbness?",
      "If there is hyperactivation: feet on the ground, slow breathing, orienting to the environment. We activate the brake.",
      "If there is hypoactivation: small movements, rubbing hands together, more energizing breathing. We wake the system up.",
      "Place one hand on your chest and one on your abdomen. Which moves more? Let us try to make it the abdomen — a sign of diaphragmatic breathing.",
      "Physiological sigh: two quick inhales through the nose followed by one long exhale through the mouth. Do it once. How do you feel?",
      "The voice regulates the nervous system. Try humming softly (hmmm) with lips closed. Can you feel the vibration in your chest?",
      "How much has your activation level changed from 0 to 10 since we started? Notice the change, even if it is small.",
    ],
  },
  {
    titulo: "Trauma Work",
    subtitulo: "Titration, pendulation, and somatic resources",
    icono: "🕊️",
    acento: "border-violet-400",
    badge: "bg-violet-600",
    fondo: "bg-violet-50",
    numeroBadge: "bg-violet-600",
    items: [
      "Before we approach the difficult material, we need a somatic resource. Think of a place where you felt safe. What body sensations arise?",
      "That resource is your anchor. We can return to it at any moment. You just need to say 'pause' and we go back to the resource.",
      "We are going to approach the material in small doses. Not all at once. Like dipping a foot in cold water before getting in.",
      "When do you start to feel tension or discomfort when thinking about that? Stop there. That is the limit for now.",
      "Now return to the somatic resource. Remember the sensations of safety. Stay there for a moment.",
      "This is called pendulation: moving toward the difficult material and returning to the resource. The nervous system regulates itself by oscillating between the two.",
      "What body sensation accompanies that difficult memory? Not the content — the sensation. Where do you notice it in the body?",
      "The physical sensations of trauma shift when we name them and observe them. You do not have to do anything with them, just be with them.",
      "If the intensity rises above 7, we pause and return to the resource. Above that level, the work is not possible or useful.",
      "Has anything changed in that body sensation since we have been observing it? Sensations move when we give them attention.",
    ],
  },
];

export default function DialogoSocratico() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        title="Socratic Dialogue"
        description="Socratic questions, therapeutic phrases, and verbal guides for somatic exercises. Hover over any phrase to copy it."
        badge="💬 Verbal and somatic techniques"
      />

      {/* Secciones cognitivas */}
      <div className="space-y-8 mt-8">
        {secciones.map((seccion) => (
          <div key={seccion.titulo} className={`rounded-2xl border ${seccion.color} overflow-hidden`}>
            <div className={`${seccion.headerColor} text-white px-6 py-4`}>
              <h2 className="text-lg font-bold">{seccion.titulo}</h2>
              <p className="text-white/80 text-sm mt-0.5">{seccion.descripcion}</p>
            </div>
            <div className="p-4 grid gap-2">
              {seccion.items.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow cursor-default"
                >
                  <span className="text-gray-400 text-xs font-mono mt-0.5 flex-shrink-0 w-5">{i + 1}.</span>
                  <span className="text-sm text-gray-700 leading-relaxed flex-1">{item}</span>
                  <CopyButton text={item} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Somatic Therapy Block ── */}
      <div className="mt-14">
        {/* Separator banner */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-800 rounded-2xl px-8 py-7 mb-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-white" />
            <div className="absolute -bottom-8 -left-4 w-32 h-32 rounded-full bg-teal-300" />
          </div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🧘</span>
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">Body techniques</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Somatic Therapy Exercises</h2>
            <p className="text-teal-200 text-sm leading-relaxed max-w-xl">
              Verbal instructions to guide the patient in body regulation techniques. Each phrase is designed to be spoken aloud during the session. Hover to copy it.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {ejerciciosSomaticos.map((e) => (
                <span key={e.titulo} className="text-xs bg-white/15 text-white px-3 py-1 rounded-full">
                  {e.icono} {e.titulo}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grid of somatic subsections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ejerciciosSomaticos.map((ejercicio) => (
            <div
              key={ejercicio.titulo}
              className={`rounded-2xl border-2 ${ejercicio.acento} bg-white shadow-sm overflow-hidden flex flex-col`}
            >
              {/* Subsection header */}
              <div className={`${ejercicio.fondo} px-5 py-4 border-b-2 ${ejercicio.acento}`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{ejercicio.icono}</span>
                  <div>
                    <h3 className="font-bold text-slate-800 text-base">{ejercicio.titulo}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{ejercicio.subtitulo}</p>
                  </div>
                  <span className={`ml-auto text-xs font-bold text-white ${ejercicio.badge} px-2.5 py-1 rounded-full flex-shrink-0`}>
                    {ejercicio.items.length} guides
                  </span>
                </div>
              </div>

              {/* Items: step-by-step layout */}
              <div className="p-4 space-y-2 flex-1">
                {ejercicio.items.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3 bg-slate-50 hover:bg-white rounded-xl px-3 py-3 transition-colors border border-transparent hover:border-slate-200 hover:shadow-sm"
                  >
                    <span className={`w-6 h-6 rounded-full ${ejercicio.numeroBadge} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-700 leading-relaxed flex-1 italic">
                      &ldquo;{item}&rdquo;
                    </span>
                    <CopyButton text={item} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
