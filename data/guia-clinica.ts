export interface DiagnosticoGuia {
  id: string;
  nombre: string;
  descripcion: string;
  criteriosClave: string[];
  instrumentos: string[];
  formulacionTipica: string;
  protocolosRecomendados: {
    slug: string;
    nombre: string;
    prioridad: "primera" | "segunda" | "complementaria";
    justificacion: string;
  }[];
  fichasUtiles: string[];
  alertas: string[];
  consideracionesEspeciales: string;
  prognotico: string;
  bibliografiaEvidencia: string[];
}

export const guiaClinica: DiagnosticoGuia[] = [
  {
    id: "ansiedad-generalizada",
    nombre: "Trastorno de Ansiedad Generalizada (TAG)",
    descripcion:
      "El TAG se caracteriza por preocupación excesiva, persistente y difícil de controlar sobre múltiples áreas de la vida, acompañada de síntomas físicos y cognitivos de tensión y activación.",
    criteriosClave: [
      "Preocupación excesiva sobre múltiples temas durante ≥6 meses",
      "Dificultad para controlar la preocupación",
      "Al menos 3 síntomas asociados: tensión muscular, fatiga, irritabilidad, dificultad de concentración, alteraciones del sueño",
      "Malestar clínicamente significativo o deterioro funcional",
    ],
    instrumentos: [
      "GAD-7 (Spitzer et al., 2006) — Punto de corte ≥10 para TAG probable",
      "Penn State Worry Questionnaire (PSWQ)",
      "Inventario de Ansiedad Estado-Rasgo (STAI)",
    ],
    formulacionTipica:
      "Historia de mensajes tempranos sobre el peligro del mundo. Creencia nuclear: 'debo estar alerta para prevenir el peligro'. Metapensamiento positivo sobre la preocupación ('preocuparme me protege') que mantiene el ciclo. Intolerancia a la incertidumbre como vulnerabilidad central. Conductas de seguridad (búsqueda de tranquilización, preparación excesiva) que refuerzan la creencia de vulnerabilidad.",
    protocolosRecomendados: [
      {
        slug: "relajacion-muscular-progresiva",
        nombre: "Relajación Muscular Progresiva",
        prioridad: "primera",
        justificacion:
          "Aborda directamente la tensión muscular crónica y la hiperactivación fisiológica. Reduce síntomas físicos y entrena la regulación autonómica.",
      },
      {
        slug: "reestructuracion-cognitiva",
        nombre: "Reestructuración Cognitiva",
        prioridad: "primera",
        justificacion:
          "Trabaja los metapensamientos sobre la utilidad de preocuparse y las creencias de intolerancia a la incertidumbre. Central en el modelo cognitivo del TAG.",
      },
      {
        slug: "exposicion-graduada",
        nombre: "Exposición Graduada (a la incertidumbre)",
        prioridad: "segunda",
        justificacion:
          "Exposición a situaciones de incertidumbre sin conductas de seguridad para desarrollar tolerancia a no saber.",
      },
    ],
    fichasUtiles: ["automonitoreo-ansiedad", "registro-pensamientos", "diario-estado-animo"],
    alertas: [
      "Descartar causas médicas de ansiedad (hipertiroidismo, arritmias)",
      "Evaluar comorbilidad con depresión (muy frecuente: 50-70%)",
      "Preguntar por consumo de sustancias (cafeína, alcohol, benzodiacepinas)",
      "Valorar ideación suicida si depresión asociada",
    ],
    consideracionesEspeciales:
      "El TAG responde bien al tratamiento cognitivo-conductual a largo plazo. Trabajo específico sobre intolerancia a la incertidumbre y metapensamientos es clave y diferencia el abordaje del TAG del de otros trastornos de ansiedad. La remisión es posible pero las recaídas en períodos de estrés son frecuentes; incluir siempre prevención de recaídas.",
    prognotico:
      "Bueno con TCC. Tasa de respuesta: 50-60% remisión completa. El mantenimiento de ganancias a largo plazo es bueno cuando se trabajan los metacogniciones.",
    bibliografiaEvidencia: [
      "Wells, A. (2008). Metacognitive Therapy for Anxiety and Depression. Guilford Press",
      "Dugas, M.J. & Robichaud, M. (2007). Cognitive-Behavioral Treatment for Generalized Anxiety Disorder. Routledge",
      "NICE Guidelines CG113 (2011). Generalised anxiety disorder and panic disorder in adults",
    ],
  },
  {
    id: "depresion",
    nombre: "Trastorno Depresivo Mayor (TDM)",
    descripcion:
      "La depresión mayor se caracteriza por episodios de estado de ánimo deprimido o anhedonia, con síntomas cognitivos, físicos y conductuales que generan deterioro funcional significativo.",
    criteriosClave: [
      "Estado de ánimo deprimido y/o anhedonia ≥2 semanas",
      "≥5 síntomas: cambios en peso/apetito, insomnio/hipersomnia, agitación/enlentecimiento, fatiga, inutilidad/culpa, dificultad de concentración, pensamientos de muerte",
      "Deterioro funcional significativo",
      "Descartar causa médica o sustancias",
    ],
    instrumentos: [
      "PHQ-9 (Kroenke et al., 2001) — Punto de corte ≥10 para depresión probable",
      "BDI-II (Beck Depression Inventory)",
      "HDRS (Escala de Hamilton) — para evaluación clínica",
    ],
    formulacionTipica:
      "Tríada cognitiva de Beck: visión negativa de uno mismo ('soy un fracasado'), del mundo ('nada funciona') y del futuro ('nunca mejoraré'). Pérdidas tempranas o crítica parental excesiva forman creencias nucleares de inutilidad. Ciclo depresivo: inactividad → pérdida de refuerzo → más depresión → más inactividad. Déficits en resolución de problemas y habilidades sociales.",
    protocolosRecomendados: [
      {
        slug: "activacion-conductual",
        nombre: "Activación Conductual",
        prioridad: "primera",
        justificacion:
          "Intervención de primera línea en depresión. Rompe el ciclo de inactividad-anhedonia. Debe preceder a la reestructuración cognitiva en depresión moderada-severa.",
      },
      {
        slug: "reestructuracion-cognitiva",
        nombre: "Reestructuración Cognitiva",
        prioridad: "primera",
        justificacion:
          "Trabaja la tríada de Beck y las creencias nucleares de inutilidad, indefensión y falta de valía. Central en el modelo de Beck para la depresión.",
      },
      {
        slug: "habilidades-sociales",
        nombre: "Entrenamiento en Habilidades Sociales",
        prioridad: "complementaria",
        justificacion:
          "Cuando hay déficits interpersonales o aislamiento social significativo. Contribuye a recuperar el refuerzo social.",
      },
    ],
    fichasUtiles: [
      "diario-estado-animo",
      "actividades-agradables",
      "plan-activacion",
      "registro-pensamientos",
    ],
    alertas: [
      "SIEMPRE evaluar ideación suicida con preguntas directas",
      "Evaluar si hay episodios maníacos o hipomaníacos previos (descartar Trastorno Bipolar)",
      "Valorar necesidad de medicación (colaboración con psiquiatría en depresión moderada-severa)",
      "Hipersomnia y cambios en apetito pueden indicar depresión atípica",
    ],
    consideracionesEspeciales:
      "En depresión con ideación suicida activa, elaborar plan de seguridad en primera sesión. La activación conductual debe preceder a la reestructuración cognitiva (primero cambiar la conducta para generar evidencia, luego cambiar los pensamientos). La TCC tiene evidencia de prevenir recaídas a largo plazo mejor que la medicación sola.",
    prognotico:
      "Bueno para episodio agudo (50-60% remisión completa). TCC de continuación o mantenimiento recomendada para reducir recaídas.",
    bibliografiaEvidencia: [
      "Beck, A.T. et al. (1979). Cognitive Therapy of Depression. Guilford Press",
      "Martell, C.R. et al. (2001). Depression in Context: Strategies for Guided Action. Norton",
      "Dimidjian, S. et al. (2006). Randomized trial of behavioral activation. Journal of Consulting and Clinical Psychology",
    ],
  },
  {
    id: "toc",
    nombre: "Trastorno Obsesivo-Compulsivo (TOC)",
    descripcion:
      "El TOC se caracteriza por obsesiones (pensamientos, imágenes o impulsos intrusivos que generan ansiedad) y compulsiones (conductas o actos mentales realizados para reducir la ansiedad o prevenir un evento temido).",
    criteriosClave: [
      "Presencia de obsesiones y/o compulsiones",
      "Las obsesiones/compulsiones consumen >1 hora/día o causan deterioro significativo",
      "Carácter egodistónico (el paciente reconoce que son excesivas/irracionales)",
      "No se explica por otra condición médica o sustancia",
    ],
    instrumentos: [
      "Y-BOCS (Yale-Brown Obsessive Compulsive Scale) — Gold standard para severidad",
      "OCI-R (Obsessive Compulsive Inventory-Revised)",
      "Inventario Padua",
    ],
    formulacionTipica:
      "Inflación de responsabilidad ('si no lo hago, algo malo ocurrirá por mi culpa'). Intolerancia a la incertidumbre. Fusión pensamiento-acción ('tener el pensamiento es tan malo como actuar'). Las compulsiones producen alivio temporal y refuerzo negativo que mantiene el ciclo. La evitación impide la desconfirmación de las creencias temidas.",
    protocolosRecomendados: [
      {
        slug: "exposicion-graduada",
        nombre: "Exposición con Prevención de Respuesta (EPR)",
        prioridad: "primera",
        justificacion:
          "Tratamiento de primera línea para TOC con mayor evidencia empírica. La exposición al estímulo sin compulsión genera habituación y extinción. Es necesariamente incómodo pero altamente efectivo.",
      },
      {
        slug: "reestructuracion-cognitiva",
        nombre: "Reestructuración Cognitiva",
        prioridad: "segunda",
        justificacion:
          "Especialmente para trabajar inflación de responsabilidad, fusión pensamiento-acción e intolerancia a la incertidumbre. Complementa la EPR pero no la sustituye.",
      },
    ],
    fichasUtiles: ["jerarquia-exposicion", "automonitoreo-ansiedad", "experimentos-conductuales"],
    alertas: [
      "Descartar TOC de tipo obsesiones puras (sin compulsiones observables)",
      "Evaluar presencia de tics (síndrome de Tourette comórbido)",
      "Distinguir TOC de pensamientos intrusivos en PTSD o psicosis",
      "Alta comorbilidad con depresión: 40-70% de los casos",
      "Evaluar conductas de tranquilización familiares que mantienen el TOC",
    ],
    consideracionesEspeciales:
      "La EPR es el único tratamiento con evidencia A para TOC. La reestructuración cognitiva sola es insuficiente. Involucrar a la familia para eliminar conductas de acomodación. El TOC con escasa conciencia de enfermedad (insight pobre) requiere trabajo motivacional previo. En TOC severo, considerar medicación (ISRS) combinada con TCC.",
    prognotico:
      "Bueno con EPR. Tasa de respuesta: 60-80% reducción significativa de síntomas. El TOC tiende a ser crónico; el mantenimiento activo con EPR esporádica es necesario.",
    bibliografiaEvidencia: [
      "Foa, E.B. & Franklin, M.E. (2001). Obsessive-Compulsive Disorder. In Barlow (Ed.), Clinical Handbook of Psychological Disorders",
      "Clark, D.A. (2004). Cognitive-Behavioral Therapy for OCD. Guilford Press",
      "NICE Guidelines CG31 (2005). Obsessive-compulsive disorder",
    ],
  },
  {
    id: "fobia-especifica",
    nombre: "Fobia Específica",
    descripcion:
      "Miedo intenso, excesivo e irracional a un estímulo específico (animal, situación, sangre/heridas, entorno natural, otros) que provoca evitación y deterioro funcional.",
    criteriosClave: [
      "Miedo marcado a objeto o situación específica",
      "El objeto/situación provoca respuesta de miedo inmediata",
      "El miedo es excesivo y desproporcionado al peligro real",
      "El objeto/situación es evitado activamente",
      "Deterioro funcional o malestar significativo",
    ],
    instrumentos: [
      "Fear Survey Schedule",
      "BAT (Behavioral Avoidance Test) — exposición directa al estímulo con medida de SUDS",
      "Escalas específicas según el tipo (SPQ para arañas, etc.)",
    ],
    formulacionTipica:
      "Experiencia condicionante directa o vicaria (ver a otro asustar al estímulo) o transmisión de información negativa. El miedo es mantenido por la evitación que impide la extinción. Sobreestimación de la peligrosidad del estímulo. En fobia a sangre/heridas: respuesta vasovagal (síncope) diferencia este tipo de los demás.",
    protocolosRecomendados: [
      {
        slug: "exposicion-graduada",
        nombre: "Exposición Graduada In Vivo",
        prioridad: "primera",
        justificacion:
          "Tratamiento de elección con las tasas de éxito más altas de toda la psicología clínica (80-95%). La exposición in vivo es superior a la imaginaria. La exposición en una sola sesión de 3h es tan efectiva como múltiples sesiones en muchas fobias específicas.",
      },
      {
        slug: "reestructuracion-cognitiva",
        nombre: "Reestructuración Cognitiva",
        prioridad: "complementaria",
        justificacion:
          "Útil para abordar creencias de peligrosidad excesiva pero no sustituye a la exposición. Ayuda a motivar al paciente para la exposición.",
      },
    ],
    fichasUtiles: ["jerarquia-exposicion", "automonitoreo-ansiedad"],
    alertas: [
      "En fobia a sangre/inyecciones: entrenar en técnica de tensión muscular aplicada (Öst) para prevenir el síncope vasovagal",
      "Distinguir de agorafobia (en trastorno de pánico) vs. fobia situacional específica",
      "Evaluar impacto funcional real: ¿la fobia limita actividades cotidianas importantes?",
    ],
    consideracionesEspeciales:
      "La exposición en una sola sesión extendida (OST, Öst) puede ser tan efectiva como múltiples sesiones para muchas fobias específicas. En fobia a sangre/heridas/inyecciones, usar técnica de tensión muscular (contracción muscular para elevar la presión arterial y prevenir el síncope). No usar benzodiacepinas justo antes de la exposición (interfiere con el aprendizaje inhibitorio).",
    prognotico:
      "Excelente. Es el trastorno con mejores resultados en psicología clínica. 80-95% de mejora clínica significativa con exposición in vivo.",
    bibliografiaEvidencia: [
      "Öst, L.G. (1989). One-session treatment for specific phobias. Behaviour Research and Therapy",
      "Choy, Y. et al. (2007). Treatment of specific phobia. Clinical Psychology Review",
      "Wolitzky-Taylor, K.B. et al. (2008). Meta-analysis of specific phobia treatment. Clinical Psychology Review",
    ],
  },
  {
    id: "ptsd",
    nombre: "PTSD / Trastorno de Estrés Postraumático",
    descripcion:
      "El PTSD surge tras la exposición a un evento traumático e incluye síntomas de intrusión, evitación, alteraciones cognitivas/emocionales negativas e hiperactivación/reactividad.",
    criteriosClave: [
      "Exposición a evento traumático real o amenazante",
      "Síntomas intrusivos: flashbacks, pesadillas, malestar ante recordatorios",
      "Evitación de estímulos relacionados con el trauma",
      "Alteraciones cognitivas y emocionales negativas",
      "Hiperactivación: hipervigilancia, sobresalto, irritabilidad, alteraciones del sueño",
      "Duración >1 mes, deterioro significativo",
    ],
    instrumentos: [
      "PCL-5 (PTSD Checklist, DSM-5 version)",
      "CAPS-5 (Clinician-Administered PTSD Scale) — Gold standard",
      "Entrevista clínica detallada del trauma",
    ],
    formulacionTipica:
      "Memoria traumática fragmentada y sin integración temporal. Creencias negativas sobre uno mismo ('tengo la culpa'), el mundo ('el mundo es completamente peligroso') y los demás ('no puedo confiar en nadie'). La evitación impide el procesamiento del trauma. Estrategias de supresión del pensamiento que paradójicamente aumentan las intrusiones.",
    protocolosRecomendados: [
      {
        slug: "reestructuracion-cognitiva",
        nombre: "Procesamiento Cognitivo (basado en reestructuración)",
        prioridad: "primera",
        justificacion:
          "La Terapia de Procesamiento Cognitivo (CPT) de Resick & Schnicke es tratamiento de primera línea para PTSD. Trabaja los 'puntos bloqueados' cognitivos que impiden la resolución del trauma.",
      },
      {
        slug: "exposicion-graduada",
        nombre: "Exposición Prolongada (PE)",
        prioridad: "primera",
        justificacion:
          "La Terapia de Exposición Prolongada de Foa es el otro tratamiento de primera línea. Exposición imaginaria al recuerdo traumático + exposición in vivo a situaciones evitadas.",
      },
      {
        slug: "relajacion-muscular-progresiva",
        nombre: "Relajación y Grounding",
        prioridad: "segunda",
        justificacion:
          "Técnicas de grounding (5-4-3-2-1, ancla sensorial) y relajación para la fase de estabilización antes de abordar el trauma.",
      },
    ],
    fichasUtiles: ["plan-seguridad", "automonitoreo-ansiedad", "registro-pensamientos"],
    alertas: [
      "FASE 1: Estabilización siempre antes de trabajar el trauma directamente",
      "Evaluar disociación: síntomas disociativos severos requieren manejo diferenciado",
      "Evaluar riesgo suicida: alta comorbilidad con depresión e ideación suicida",
      "Trauma complejo (DESNOS) requiere enfoque diferenciado más largo",
      "Informar sobre reacción esperada al inicio de la exposición (aumento transitorio de síntomas)",
    ],
    consideracionesEspeciales:
      "El tratamiento del PTSD sigue tres fases: (1) Estabilización/seguridad, (2) Procesamiento del trauma, (3) Integración/reconexión. No comenzar la fase de procesamiento hasta que el paciente tenga recursos de regulación emocional suficientes. EMDR tiene igual evidencia que CPT y PE. La historia del trauma debe recogerse de forma sensible, sin revictimizar.",
    prognotico:
      "Bueno con tratamiento especializado. 50-60% de los pacientes logran remisión del diagnóstico. El tratamiento puede llevar más tiempo en trauma complejo.",
    bibliografiaEvidencia: [
      "Foa, E.B. et al. (2007). Prolonged Exposure Therapy for PTSD. Oxford University Press",
      "Resick, P.A. et al. (2010). Cognitive Processing Therapy for PTSD. Guilford Press",
      "NICE Guidelines NG116 (2018). Post-traumatic stress disorder",
    ],
  },
  {
    id: "fobia-social",
    nombre: "Trastorno de Ansiedad Social (Fobia Social)",
    descripcion:
      "Miedo intenso a situaciones sociales donde el individuo puede ser observado y evaluado negativamente por los demás, con anticipación de humillación, vergüenza o rechazo.",
    criteriosClave: [
      "Miedo marcado a situaciones sociales o de actuación",
      "Miedo a actuar de manera humillante o a mostrar síntomas de ansiedad visibles",
      "Las situaciones sociales provocan ansiedad casi invariablemente",
      "Evitación o tolerancia con intensa angustia",
      "Deterioro funcional significativo",
      "Duración ≥6 meses",
    ],
    instrumentos: [
      "SPIN (Social Phobia Inventory — Connor et al., 2000) — Punto de corte ≥19",
      "LSAS (Liebowitz Social Anxiety Scale)",
      "Brief Fear of Negative Evaluation Scale (BFNE)",
    ],
    formulacionTipica:
      "Modelo de Clark & Wells (1995): en situaciones sociales, el individuo dirige la atención hacia adentro (monitoreo de síntomas), lo que aumenta la autopercepción de ansiedad y deteriora el funcionamiento. Conductas de seguridad (evitar contacto visual, hablar poco) aumentan paradójicamente la ansiedad. Supuestos disfuncionales sobre estándares sociales imposibles. Creencias de defecto/ridiculez.",
    protocolosRecomendados: [
      {
        slug: "habilidades-sociales",
        nombre: "Entrenamiento en Habilidades Sociales",
        prioridad: "primera",
        justificacion:
          "Desarrolla las habilidades deficitarias y proporciona oportunidades de exposición en un contexto controlado. El role-play y el feedback son componentes centrales.",
      },
      {
        slug: "exposicion-graduada",
        nombre: "Exposición Graduada a Situaciones Sociales",
        prioridad: "primera",
        justificacion:
          "La exposición in vivo a situaciones sociales evitadas, con eliminación progresiva de conductas de seguridad, es el componente conductual central.",
      },
      {
        slug: "reestructuracion-cognitiva",
        nombre: "Reestructuración Cognitiva",
        prioridad: "segunda",
        justificacion:
          "Aborda las predicciones negativas y las creencias de juicio. Las encuestas sociales y el video-feedback son técnicas especialmente útiles.",
      },
    ],
    fichasUtiles: [
      "registro-pensamientos",
      "distorsiones-cognitivas",
      "experimentos-conductuales",
      "jerarquia-exposicion",
    ],
    alertas: [
      "Distinguir de timidez normal vs. trastorno: el criterio es el deterioro funcional",
      "Evaluar comorbilidad con depresión (alta: 30-50%)",
      "Evaluar consumo de alcohol u otras sustancias como ansiolítico social",
      "El tipo generalizado (mayoría de situaciones sociales) tiene peor pronóstico que el tipo específico (hablar en público)",
    ],
    consideracionesEspeciales:
      "El modelo de Clark & Wells debe explicarse en detalle al paciente porque guía toda la intervención. Video-feedback es una de las técnicas más potentes: permite al paciente ver la diferencia entre su imagen interna distorsionada y la realidad. Trabajar explícitamente el post-procesamiento negativo (rumiación post-situación social) que es un mantenedor fundamental.",
    prognotico:
      "Bueno a moderado. 50-60% de mejora clínica significativa. El tipo específico (hablar en público) tiene mejor pronóstico que el tipo generalizado.",
    bibliografiaEvidencia: [
      "Clark, D.M. & Wells, A. (1995). A cognitive model of social phobia. In Heimberg et al., Social Phobia",
      "Heimberg, R.G. et al. (2002). Cognitive-Behavioral Group Therapy for Social Anxiety Disorder. Guilford",
      "Mayo-Wilson, E. et al. (2014). Meta-analysis of psychological treatments for social phobia. Psychological Medicine",
    ],
  },
];
