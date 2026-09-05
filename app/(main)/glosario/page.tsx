import PageHeader from "@/components/PageHeader";

const terms = [
  {
    category: "Core concepts",
    color: "bg-blue-50 border-blue-200",
    headerColor: "text-blue-800",
    items: [
      { term: "Automatic thought", definition: "Fast, involuntary thoughts that arise in response to situations. They are not reasoned — they simply occur. In emotional disorders they tend to be negative and distorted.", example: "\"I definitely ruined everything\" immediately after making a minor mistake." },
      { term: "Core belief", definition: "A deep, global conviction about oneself, others, or the world. Formed in childhood and operating silently, these beliefs are the nucleus of cognitive schemas.", example: "\"I am incompetent\", \"The world is dangerous\", \"Others cannot be trusted\"." },
      { term: "Intermediate assumption", definition: "A rule or attitude that links core beliefs to automatic thoughts. Often takes the form of \"if…then\" or \"should\" statements.", example: "\"If I am not perfect, then I am a failure.\"" },
      { term: "Cognitive distortion", definition: "A systematic error in information processing that maintains emotional problems. These are not random errors — they follow predictable patterns.", example: "Catastrophizing: \"If I fail this interview, I'll never find a job.\"" },
      { term: "Beck's cognitive triad", definition: "Simultaneously negative view of oneself, the world, and the future. A core feature of depression according to Beck's model.", example: "\"I am worthless (self), nothing works (world), I will never get better (future).\"" },
    ],
  },
  {
    category: "Therapeutic techniques",
    color: "bg-emerald-50 border-emerald-200",
    headerColor: "text-emerald-800",
    items: [
      { term: "Cognitive restructuring", definition: "The process of identifying, evaluating, and modifying distorted thoughts. It is not about positive thinking — it is about thinking with greater accuracy and flexibility.", example: "Identify the thought \"I always fail\", look for evidence for and against it, and generate a more balanced alternative." },
      { term: "Behavioral activation", definition: "A technique that involves scheduling activities that increase contact with positive reinforcers. Especially useful in depression, where avoidance perpetuates low mood.", example: "Planning a 20-minute walk every morning, regardless of mood." },
      { term: "Graded exposure", definition: "Systematic, progressive confrontation with feared situations, without safety behaviors. Allows the alarm system to habituate and corrects catastrophic predictions.", example: "Someone afraid of public speaking starts by speaking with one person, then three, then small groups." },
      { term: "Behavioral experiment", definition: "An empirical test designed to check a prediction or belief. It transforms therapy into a kind of laboratory where the patient verifies their assumptions.", example: "\"This week I'll greet a coworker to check whether they ignore me, as I expect, or not.\"" },
      { term: "Socratic dialogue", definition: "A guided questioning technique that helps the patient examine the validity of their thoughts independently. The therapist does not give the answer — they guide the patient to discover it.", example: "\"What evidence do you have for that?\", \"What would you say to a friend in your situation?\"" },
      { term: "Problem solving", definition: "A structured process for tackling difficult situations: define the problem, generate solutions, evaluate consequences, choose and implement a solution.", example: "When facing workplace conflict, listing all possible options before acting impulsively." },
    ],
  },
  {
    category: "Therapeutic process concepts",
    color: "bg-amber-50 border-amber-200",
    headerColor: "text-amber-800",
    items: [
      { term: "Therapeutic alliance", definition: "A collaborative bond between therapist and patient, characterized by agreement on goals, tasks, and a positive emotional bond. It is the most robust predictor of therapeutic success.", example: "The patient feels the therapist understands their problem and that they are working toward the same goal." },
      { term: "Psychoeducation", definition: "Teaching the patient the explanatory model of their problem and how therapy works. It increases adherence and turns the patient into an active agent of their own change.", example: "Explaining the thought-emotion-behavior cycle using an example from the patient's own life." },
      { term: "Homework", definition: "Activities carried out between sessions that reinforce and consolidate what was worked on in the consultation. They are an essential part of the CBT model — change primarily happens outside the session.", example: "Recording automatic thoughts during the week using a thought record." },
      { term: "Case conceptualization", definition: "An individualized map of how the patient's problem developed and is maintained. It integrates history, beliefs, triggers, and response patterns.", example: "Understanding that Maria's perfectionism stems from a core belief of \"I am not enough\" learned in childhood." },
      { term: "Relapse prevention", definition: "The final phase of therapy where the return of symptoms is anticipated, early warning signs are identified, and coping strategies are rehearsed to maintain progress.", example: "The patient identifies their three early warning signs and what they will do if they detect them." },
    ],
  },
  {
    category: "Types of cognitive distortions",
    color: "bg-rose-50 border-rose-200",
    headerColor: "text-rose-800",
    items: [
      { term: "Catastrophizing", definition: "Anticipating the worst possible outcome as if it were probable or inevitable.", example: "\"If I make a mistake in the presentation, I'll lose my job and never find another one.\"" },
      { term: "Mind reading", definition: "Assuming you know what others are thinking, usually in a negative way.", example: "\"I know they find me boring even though they don't say it.\"" },
      { term: "Overgeneralization", definition: "Drawing a sweeping conclusion from a single negative event.", example: "\"I made a mistake today — I always make mistakes at everything.\"" },
      { term: "Mental filter", definition: "Focusing exclusively on negative aspects while ignoring positives.", example: "Receiving 9 positive comments and 1 criticism, and ruminating only on the criticism." },
      { term: "Personalization", definition: "Taking responsibility for negative external events without evidence.", example: "\"If my child has problems at school, it's my fault.\"" },
      { term: "All-or-nothing thinking", definition: "Seeing situations in absolute terms, with no middle ground.", example: "\"Either I am completely successful or I am a total failure.\"" },
    ],
  },
];

export default function GlosarioPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="CBT in Plain Language"
        description="Clinical glossary of essential cognitive-behavioral therapy concepts, explained with precise definitions and concrete clinical examples."
        badge="Glossary"
        badgeColor="bg-blue-600"
      />

      <div className="space-y-8">
        {terms.map((cat) => (
          <div key={cat.category}>
            <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">{cat.category}</h2>
            <div className="space-y-3">
              {cat.items.map((item) => (
                <div key={item.term} className={`rounded-xl border p-4 ${cat.color}`}>
                  <h3 className={`font-bold text-sm mb-1 ${cat.headerColor}`}>{item.term}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">{item.definition}</p>
                  <div className="bg-white/60 rounded-lg px-3 py-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Example: </span>
                    <span className="text-xs text-gray-600 italic">{item.example}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
