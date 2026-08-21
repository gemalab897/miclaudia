export interface DiagnosticoGuia {
  id: string;
  name: string;
  descripcion: string;
  criteriosClave: string[];
  instrumentos: string[];
  formulacionTipica: string;
  protocolosRecomendados: {
    slug: string;
    name: string;
    prioridad: "primera" | "segunda" | "complementaria";
    justificacion: string;
  }[];
  fichasUtiles: string[];
  alertas: string[];
  consideracionesEspeciales: string;
  prognotico: string;
  bibliografiaEvidence: string[];
}

export const guiaClinica: DiagnosticoGuia[] = [
  {
    id: "anxiety-generalizada",
    name: "Generalized Anxiety Disorder (GAD)",
    descripcion:
      "GAD is characterized by excessive, persistent worry that is difficult to control across multiple life areas, accompanied by physical and cognitive symptoms of tension and arousal.",
    criteriosClave: [
      "Excessive worry about multiple topics for ≥6 months",
      "Difficulty controlling the worry",
      "At least 3 associated symptoms: muscle tension, fatigue, irritability, difficulty concentrating, sleep disturbances",
      "Clinically significant distress or functional impairment",
    ],
    instrumentos: [
      "GAD-7 (Spitzer et al., 2006) — Cut-off ≥10 for probable GAD",
      "Penn State Worry Questionnaire (PSWQ)",
      "State-Trait Anxiety Inventory (STAI)",
    ],
    formulacionTipica:
      "History of early messages about the world being dangerous. Core belief: 'I must stay alert to prevent danger'. Positive metacognition about worry ('worrying protects me') maintains the cycle. Intolerance of uncertainty as central vulnerability. Safety behaviors (reassurance-seeking, excessive preparation) that reinforce the belief of vulnerability.",
    protocolosRecomendados: [
      {
        slug: "relajacion-muscular-progresiva",
        name: "Progressive Muscle Relaxation",
        prioridad: "primera",
        justificacion:
          "Directly addresses chronic muscle tension and physiological hyperarousal. Reduces physical symptoms and trains autonomic regulation.",
      },
      {
        slug: "reestructuracion-cognitiva",
        name: "Cognitive Restructuring",
        prioridad: "primera",
        justificacion:
          "Targets metacognitions about the usefulness of worrying and intolerance-of-uncertainty beliefs. Central to the cognitive model of GAD.",
      },
      {
        slug: "exposicion-graduada",
        name: "Graded Exposure (to uncertainty)",
        prioridad: "segunda",
        justificacion:
          "Exposure to uncertain situations without safety behaviors to develop tolerance for not knowing.",
      },
    ],
    fichasUtiles: ["automonitoreo-anxiety", "record-thoughts", "diario-estado-animo"],
    alertas: [
      "Rule out medical causes of anxiety (hyperthyroidism, arrhythmias)",
      "Assess for depression comorbidity (very common: 50-70%)",
      "Inquire about substance use (caffeine, alcohol, benzodiazepines)",
      "Assess suicidal ideation if depression is present",
    ],
    consideracionesEspeciales:
      "GAD responds well to long-term CBT. Specific work on intolerance of uncertainty and metacognitions is key and distinguishes the GAD approach from that of other anxiety disorders. Remission is possible but relapses during periods of stress are frequent; always include relapse prevention.",
    prognotico:
      "Good with CBT. Response rate: 50-60% full remission. Long-term maintenance of gains is good when metacognitions are addressed.",
    bibliografiaEvidence: [
      "Wells, A. (2008). Metacognitive Therapy for Anxiety and Depression. Guilford Press",
      "Dugas, M.J. & Robichaud, M. (2007). Cognitive-Behavioral Treatment for Generalized Anxiety Disorder. Routledge",
      "NICE Guidelines CG113 (2011). Generalised anxiety disorder and panic disorder in adults",
    ],
  },
  {
    id: "depresion",
    name: "Major Depressive Disorder (MDD)",
    descripcion:
      "Major depression is characterized by episodes of depressed mood or anhedonia, with cognitive, physical, and behavioral symptoms that produce significant functional impairment.",
    criteriosClave: [
      "Depressed mood and/or anhedonia for ≥2 weeks",
      "≥5 symptoms: changes in weight/appetite, insomnia/hypersomnia, agitation/psychomotor retardation, fatigue, worthlessness/guilt, difficulty concentrating, thoughts of death",
      "Significant functional impairment",
      "Rule out medical cause or substances",
    ],
    instrumentos: [
      "PHQ-9 (Kroenke et al., 2001) — Cut-off ≥10 for probable depression",
      "BDI-II (Beck Depression Inventory)",
      "HDRS (Hamilton Depression Rating Scale) — for clinical evaluation",
    ],
    formulacionTipica:
      "Beck's cognitive triad: negative view of self ('I am a failure'), the world ('nothing works'), and the future ('I will never get better'). Early losses or excessive parental criticism form core beliefs of worthlessness. Depressive cycle: inactivity → loss of reinforcement → more depression → more inactivity. Deficits in problem solving and social skills.",
    protocolosRecomendados: [
      {
        slug: "activacion-conductual",
        name: "Behavioral Activation",
        prioridad: "primera",
        justificacion:
          "First-line intervention in depression. Breaks the inactivity-anhedonia cycle. Should precede cognitive restructuring in moderate-to-severe depression.",
      },
      {
        slug: "reestructuracion-cognitiva",
        name: "Cognitive Restructuring",
        prioridad: "primera",
        justificacion:
          "Addresses Beck's triad and core beliefs of worthlessness, helplessness, and inadequacy. Central to Beck's model of depression.",
      },
      {
        slug: "habilidades-sociales",
        name: "Social Skills Training",
        prioridad: "complementaria",
        justificacion:
          "When significant interpersonal deficits or social isolation are present. Helps restore social reinforcement.",
      },
    ],
    fichasUtiles: [
      "diario-estado-animo",
      "actividades-agradables",
      "plan-activacion",
      "record-thoughts",
    ],
    alertas: [
      "ALWAYS assess suicidal ideation with direct questions",
      "Assess for previous manic or hypomanic episodes (rule out Bipolar Disorder)",
      "Consider need for medication (collaboration with psychiatry in moderate-to-severe depression)",
      "Hypersomnia and appetite changes may indicate atypical depression",
    ],
    consideracionesEspeciales:
      "In depression with active suicidal ideation, develop a safety plan in the first session. Behavioral activation should precede cognitive restructuring (first change behavior to generate evidence, then change thoughts). CBT has evidence for preventing relapse long-term better than medication alone.",
    prognotico:
      "Good for the acute episode (50-60% full remission). Continuation or maintenance CBT recommended to reduce relapse.",
    bibliografiaEvidence: [
      "Beck, A.T. et al. (1979). Cognitive Therapy of Depression. Guilford Press",
      "Martell, C.R. et al. (2001). Depression in Context: Strategies for Guided Action. Norton",
      "Dimidjian, S. et al. (2006). Randomized trial of behavioral activation. Journal of Consulting and Clinical Psychology",
    ],
  },
  {
    id: "toc",
    name: "Obsessive-Compulsive Disorder (OCD)",
    descripcion:
      "OCD is characterized by obsessions (intrusive thoughts, images, or impulses that generate anxiety) and compulsions (behaviors or mental acts performed to reduce anxiety or prevent a feared event).",
    criteriosClave: [
      "Presence of obsessions and/or compulsions",
      "Obsessions/compulsions consume >1 hour/day or cause significant impairment",
      "Egodystonic nature (patient recognizes them as excessive/irrational)",
      "Not explained by another medical condition or substance",
    ],
    instrumentos: [
      "Y-BOCS (Yale-Brown Obsessive Compulsive Scale) — Gold standard for severity",
      "OCI-R (Obsessive Compulsive Inventory-Revised)",
      "Padua Inventory",
    ],
    formulacionTipica:
      "Inflated responsibility ('if I don't do it, something bad will happen because of me'). Intolerance of uncertainty. Thought-action fusion ('having the thought is as bad as acting on it'). Compulsions produce temporary relief and negative reinforcement that maintains the cycle. Avoidance prevents disconfirmation of feared beliefs.",
    protocolosRecomendados: [
      {
        slug: "exposicion-graduada",
        name: "Exposure with Response Prevention (ERP)",
        prioridad: "primera",
        justificacion:
          "First-line treatment for OCD with the strongest empirical evidence. Exposure to the stimulus without compulsion generates habituation and extinction. It is necessarily uncomfortable but highly effective.",
      },
      {
        slug: "reestructuracion-cognitiva",
        name: "Cognitive Restructuring",
        prioridad: "segunda",
        justificacion:
          "Especially useful for addressing inflated responsibility, thought-action fusion, and intolerance of uncertainty. Complements ERP but does not replace it.",
      },
    ],
    fichasUtiles: ["jerarquia-exposicion", "automonitoreo-anxiety", "experimentos-conductuales"],
    alertas: [
      "Rule out pure-O OCD (obsessions without observable compulsions)",
      "Assess for presence of tics (comorbid Tourette's syndrome)",
      "Distinguish OCD from intrusive thoughts in PTSD or psychosis",
      "High comorbidity with depression: 40-70% of cases",
      "Assess for family accommodation behaviors that maintain OCD",
    ],
    consideracionesEspeciales:
      "ERP is the only Grade A evidence treatment for OCD. Cognitive restructuring alone is insufficient. Involve family to eliminate accommodation behaviors. OCD with poor insight requires prior motivational work. In severe OCD, consider combined medication (SSRIs) with CBT.",
    prognotico:
      "Good with ERP. Response rate: 60-80% significant symptom reduction. OCD tends to be chronic; active maintenance with occasional ERP is necessary.",
    bibliografiaEvidence: [
      "Foa, E.B. & Franklin, M.E. (2001). Obsessive-Compulsive Disorder. In Barlow (Ed.), Clinical Handbook of Psychological Disorders",
      "Clark, D.A. (2004). Cognitive-Behavioral Therapy for OCD. Guilford Press",
      "NICE Guidelines CG31 (2005). Obsessive-compulsive disorder",
    ],
  },
  {
    id: "fobia-especifica",
    name: "Specific Phobia",
    descripcion:
      "Intense, excessive, and irrational fear of a specific stimulus (animal, situation, blood/injury, natural environment, other) that causes avoidance and functional impairment.",
    criteriosClave: [
      "Marked fear of a specific object or situation",
      "The object/situation provokes an immediate fear response",
      "Fear is excessive and disproportionate to the actual danger",
      "The object/situation is actively avoided",
      "Functional impairment or significant distress",
    ],
    instrumentos: [
      "Fear Survey Schedule",
      "BAT (Behavioral Avoidance Test) — direct exposure to the stimulus with SUDS measurement",
      "Specific scales by type (SPQ for spiders, etc.)",
    ],
    formulacionTipica:
      "Direct or vicarious conditioning experience (seeing another person frightened by the stimulus) or negative information transmission. Fear is maintained by avoidance that prevents extinction. Overestimation of the danger of the stimulus. In blood/injury phobia: vasovagal response (syncope) differentiates this type from others.",
    protocolosRecomendados: [
      {
        slug: "exposicion-graduada",
        name: "Graded Exposure In Vivo",
        prioridad: "primera",
        justificacion:
          "Treatment of choice with the highest success rates in all of clinical psychology (80-95%). In vivo exposure is superior to imaginal. Single-session exposure (3h) is as effective as multiple sessions for many specific phobias.",
      },
      {
        slug: "reestructuracion-cognitiva",
        name: "Cognitive Restructuring",
        prioridad: "complementaria",
        justificacion:
          "Useful for addressing excessive danger beliefs but does not replace exposure. Helps motivate the patient for exposure.",
      },
    ],
    fichasUtiles: ["jerarquia-exposicion", "automonitoreo-anxiety"],
    alertas: [
      "In blood/injection phobia: train applied muscle tension technique (Öst) to prevent vasovagal syncope",
      "Distinguish from agoraphobia (in panic disorder) vs. specific situational phobia",
      "Assess real functional impact: does the phobia limit important daily activities?",
    ],
    consideracionesEspeciales:
      "Single-session extended exposure (OST, Öst) can be as effective as multiple sessions for many specific phobias. In blood/injury/injection phobia, use applied muscle tension technique (muscle contraction to raise blood pressure and prevent syncope). Do not use benzodiazepines just before exposure (interferes with inhibitory learning).",
    prognotico:
      "Excellent. This is the disorder with the best outcomes in clinical psychology. 80-95% significant clinical improvement with in vivo exposure.",
    bibliografiaEvidence: [
      "Öst, L.G. (1989). One-session treatment for specific phobias. Behaviour Research and Therapy",
      "Choy, Y. et al. (2007). Treatment of specific phobia. Clinical Psychology Review",
      "Wolitzky-Taylor, K.B. et al. (2008). Meta-analysis of specific phobia treatment. Clinical Psychology Review",
    ],
  },
  {
    id: "ptsd",
    name: "PTSD / Post-Traumatic Stress Disorder",
    descripcion:
      "PTSD arises following exposure to a traumatic event and includes symptoms of intrusion, avoidance, negative cognitive/emotional alterations, and hyperarousal/reactivity.",
    criteriosClave: [
      "Exposure to a real or threatened traumatic event",
      "Intrusion symptoms: flashbacks, nightmares, distress at trauma reminders",
      "Avoidance of trauma-related stimuli",
      "Negative cognitive and emotional alterations",
      "Hyperarousal: hypervigilance, exaggerated startle, irritability, sleep disturbances",
      "Duration >1 month, significant impairment",
    ],
    instrumentos: [
      "PCL-5 (PTSD Checklist, DSM-5 version)",
      "CAPS-5 (Clinician-Administered PTSD Scale) — Gold standard",
      "Detailed clinical trauma interview",
    ],
    formulacionTipica:
      "Fragmented, temporally unintegrated traumatic memory. Negative beliefs about self ('it was my fault'), the world ('the world is completely dangerous'), and others ('I can't trust anyone'). Avoidance prevents trauma processing. Thought suppression strategies that paradoxically increase intrusions.",
    protocolosRecomendados: [
      {
        slug: "reestructuracion-cognitiva",
        name: "Cognitive Processing (based on restructuring)",
        prioridad: "primera",
        justificacion:
          "Cognitive Processing Therapy (CPT) by Resick & Schnicke is a first-line treatment for PTSD. Targets cognitive 'stuck points' that prevent trauma resolution.",
      },
      {
        slug: "exposicion-graduada",
        name: "Prolonged Exposure (PE)",
        prioridad: "primera",
        justificacion:
          "Foa's Prolonged Exposure Therapy is the other first-line treatment. Imaginal exposure to the traumatic memory + in vivo exposure to avoided situations.",
      },
      {
        slug: "relajacion-muscular-progresiva",
        name: "Relaxation and Grounding",
        prioridad: "segunda",
        justificacion:
          "Grounding techniques (5-4-3-2-1, sensory anchoring) and relaxation for the stabilization phase before addressing the trauma.",
      },
    ],
    fichasUtiles: ["plan-seguridad", "automonitoreo-anxiety", "record-thoughts"],
    alertas: [
      "PHASE 1: Stabilization always before working the trauma directly",
      "Assess dissociation: severe dissociative symptoms require differentiated management",
      "Assess suicide risk: high comorbidity with depression and suicidal ideation",
      "Complex trauma (DESNOS) requires a different, longer approach",
      "Inform about the expected reaction at the start of exposure (transient symptom increase)",
    ],
    consideracionesEspeciales:
      "PTSD treatment follows three phases: (1) Stabilization/safety, (2) Trauma processing, (3) Integration/reconnection. Do not begin the processing phase until the patient has sufficient emotional regulation resources. EMDR has equal evidence to CPT and PE. Trauma history should be collected in a sensitive manner, without re-victimizing.",
    prognotico:
      "Good with specialized treatment. 50-60% of patients achieve diagnostic remission. Treatment may take longer with complex trauma.",
    bibliografiaEvidence: [
      "Foa, E.B. et al. (2007). Prolonged Exposure Therapy for PTSD. Oxford University Press",
      "Resick, P.A. et al. (2010). Cognitive Processing Therapy for PTSD. Guilford Press",
      "NICE Guidelines NG116 (2018). Post-traumatic stress disorder",
    ],
  },
  {
    id: "fobia-social",
    name: "Social Anxiety Disorder (Social Phobia)",
    descripcion:
      "Intense fear of social situations in which the individual may be observed and negatively evaluated by others, with anticipation of humiliation, embarrassment, or rejection.",
    criteriosClave: [
      "Marked fear of social or performance situations",
      "Fear of acting in a humiliating way or of showing visible anxiety symptoms",
      "Social situations almost invariably provoke anxiety",
      "Avoidance or endurance with intense distress",
      "Significant functional impairment",
      "Duration ≥6 months",
    ],
    instrumentos: [
      "SPIN (Social Phobia Inventory — Connor et al., 2000) — Cut-off ≥19",
      "LSAS (Liebowitz Social Anxiety Scale)",
      "Brief Fear of Negative Evaluation Scale (BFNE)",
    ],
    formulacionTipica:
      "Clark & Wells model (1995): in social situations, the individual directs attention inward (monitoring symptoms), which increases self-perceived anxiety and impairs functioning. Safety behaviors (avoiding eye contact, speaking little) paradoxically increase anxiety. Dysfunctional assumptions about impossible social standards. Beliefs of defectiveness/ridiculousness.",
    protocolosRecomendados: [
      {
        slug: "habilidades-sociales",
        name: "Social Skills Training",
        prioridad: "primera",
        justificacion:
          "Develops deficient skills and provides exposure opportunities in a controlled context. Role-play and feedback are central components.",
      },
      {
        slug: "exposicion-graduada",
        name: "Graded Exposure to Social Situations",
        prioridad: "primera",
        justificacion:
          "In vivo exposure to avoided social situations, with progressive elimination of safety behaviors, is the central behavioral component.",
      },
      {
        slug: "reestructuracion-cognitiva",
        name: "Cognitive Restructuring",
        prioridad: "segunda",
        justificacion:
          "Addresses negative predictions and judgment beliefs. Social surveys and video feedback are particularly useful techniques.",
      },
    ],
    fichasUtiles: [
      "record-thoughts",
      "distorsiones-cognitivas",
      "experimentos-conductuales",
      "jerarquia-exposicion",
    ],
    alertas: [
      "Distinguish normal shyness from disorder: the criterion is functional impairment",
      "Assess depression comorbidity (high: 30-50%)",
      "Assess alcohol or other substance use as a social anxiolytic",
      "The generalized type (majority of social situations) has a worse prognosis than the specific type (public speaking)",
    ],
    consideracionesEspeciales:
      "The Clark & Wells model should be explained in detail to the patient because it guides the entire intervention. Video feedback is one of the most powerful techniques: it allows the patient to see the difference between their distorted internal image and reality. Explicitly address post-event processing (rumination after social situations), which is a fundamental maintaining factor.",
    prognotico:
      "Good to moderate. 50-60% significant clinical improvement. The specific type (public speaking) has a better prognosis than the generalized type.",
    bibliografiaEvidence: [
      "Clark, D.M. & Wells, A. (1995). A cognitive model of social phobia. In Heimberg et al., Social Phobia",
      "Heimberg, R.G. et al. (2002). Cognitive-Behavioral Group Therapy for Social Anxiety Disorder. Guilford",
      "Mayo-Wilson, E. et al. (2014). Meta-analysis of psychological treatments for social phobia. Psychological Medicine",
    ],
  },
];
