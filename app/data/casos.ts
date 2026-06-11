export interface Sesion {
  numero: number;
  titulo: string;
  objetivos: string[];
  tecnicas: string[];
  descripcion: string;
  resultado: string;
  tarea?: string;
}

export interface CasoClinico {
  id: string;
  titulo: string;
  diagnostico: string;
  paciente: string;
  edad: number;
  sexo: string;
  totalSesiones: number;
  resumen: string;
  presentacion: string;
  formulacionCognitiva: {
    eventosVitales: string;
    creenciasNucleares: string[];
    supuestosDisfuncionales: string[];
    pensamientosAutomaticos: string[];
    conductas: string[];
    emocionesPrevalentes: string[];
  };
  objetivosTerapeuticos: string[];
  sesiones: Sesion[];
  resultados: string;
  aprendizajesClinicos: string[];
}

export const casos: CasoClinico[] = [
  {
    id: "ansiedad-generalizada",
    titulo: "Ansiedad Generalizada: El caso de Elena",
    diagnostico: "Trastorno de Ansiedad Generalizada (F41.1)",
    paciente: "Elena M.",
    edad: 34,
    sexo: "Mujer",
    totalSesiones: 6,
    resumen:
      "Elena es una abogada de 34 años que consulta por preocupación excesiva e incontrolable sobre múltiples áreas de su vida (trabajo, salud, familia, economía). Presenta tensión muscular crónica, insomnio y dificultad para concentrarse. El tratamiento combina psicoeducación, reestructuración cognitiva y técnicas de relajación.",
    presentacion:
      "Elena acude a consulta por iniciativa propia tras un período de 8 meses con preocupación excesiva. Describe que 'no puede apagar el cerebro': constantemente anticipa problemas, planifica situaciones de crisis que nunca ocurren y siente que si deja de preocuparse, algo malo pasará. Aunque reconoce que sus miedos son desproporcionados, no puede controlarlos. Presenta insomnio de conciliación (tarda 1-2 horas en dormirse), tensión muscular en cuello y hombros, y ha reducido sus actividades sociales por cansancio. Trabaja en un bufete de abogados con alta carga laboral. Vive sola. No tiene antecedentes psiquiátricos ni tratamientos previos.",
    formulacionCognitiva: {
      eventosVitales:
        "Criada por una madre muy protectora y ansiosa que transmitió el mensaje de que el mundo es peligroso y hay que estar siempre alerta. Padre muy exigente. En la infancia, tomó el rol de 'cuidadora' de las emociones maternas. Nunca aprendió a tolerar la incertidumbre.",
      creenciasNucleares: [
        "El mundo es un lugar peligroso e impredecible",
        "Soy responsable de prevenir todo lo malo que pueda ocurrir",
        "Si me preocupo, estaré preparada; si no me preocupo, algo malo pasará",
      ],
      supuestosDisfuncionales: [
        "Si no anticipo los problemas, me pillarán desprevenida y no podré afrontarlos",
        "Debo tener todo bajo control para estar segura",
        "La preocupación es útil y necesaria",
      ],
      pensamientosAutomaticos: [
        "¿Y si el proyecto sale mal y me despiden?",
        "¿Y si mi madre enferma?",
        "Tengo que resolver esto ahora o será demasiado tarde",
        "No puedo permitirme relajarme, hay demasiado en juego",
      ],
      conductas: [
        "Preocupación excesiva y rumiación",
        "Búsqueda de tranquilización (preguntar repetidamente a colegas)",
        "Preparación excesiva (revisar documentos múltiples veces)",
        "Evitación de situaciones de incertidumbre",
        "Reducción de actividades placenteras",
      ],
      emocionesPrevalentes: ["Ansiedad crónica", "Tensión", "Irritabilidad", "Agotamiento"],
    },
    objetivosTerapeuticos: [
      "Reducir la frecuencia e intensidad de episodios de preocupación excesiva",
      "Aprender a tolerar la incertidumbre sin necesidad de control",
      "Mejorar la calidad del sueño",
      "Reanudar actividades sociales placenteras",
      "Reconocer y cuestionar los metapensamentos sobre la utilidad de preocuparse",
    ],
    sesiones: [
      {
        numero: 1,
        titulo: "Evaluación e inicio de la formulación",
        objetivos: ["Establecer alianza terapéutica", "Evaluar síntomas y historia", "Presentar modelo cognitivo"],
        tecnicas: ["Entrevista clínica", "GAD-7 (puntuación: 18/21)", "Psicoeducación inicial"],
        descripcion:
          "Se realizó evaluación completa. Elena describió su historia de preocupación con gran claridad y articulación. Se administró el GAD-7 (18/21, ansiedad severa). Se explicó el modelo cognitivo de la ansiedad: el papel de los pensamientos automáticos y las conductas de evitación en el mantenimiento del problema. Elena se reconoció claramente en el modelo.",
        resultado:
          "Elena mostró alta motivación y aceptó la formulación. Expresó alivio al saber que existe un modelo claro para su problema. Estableció alianza terapéutica sólida.",
        tarea: "Registro de pensamientos durante la semana: anotar situaciones de preocupación, qué se temia y nivel de angustia (0-10).",
      },
      {
        numero: 2,
        titulo: "Metapensamentos: la trampa de la preocupación útil",
        objetivos: [
          "Identificar creencias positivas sobre la preocupación",
          "Cuestionar la utilidad real de preocuparse",
        ],
        tecnicas: ["Análisis de ventajas e inconvenientes", "Preguntas socráticas", "Diferenciación preocupación útil vs. inútil"],
        descripcion:
          "Se revisó el registro de pensamientos. Elena identificó que su preocupación giraba en torno a tres temas: trabajo, salud de la madre, y economía. Se exploró la meta-creencia 'preocuparme me protege'. Se hizo un análisis de costes-beneficios de la preocupación. Se introdujo la distinción entre preocupaciones 'con solución posible ahora' (acción) y 'sin solución posible ahora' (soltar).",
        resultado:
          "Elena comenzó a cuestionar la utilidad de las preocupaciones incontrolables. Reconoció que 8 de cada 10 cosas por las que se preocupa nunca ocurren. Este insight fue importante para su motivación.",
        tarea: "Clasificar cada preocupación: ¿tiene solución ahora? Si sí, actuar. Si no, usar técnica de posponer la preocupación al 'tiempo de preocupación' (15 min al día a las 19h).",
      },
      {
        numero: 3,
        titulo: "Reestructuración cognitiva y tolerancia a la incertidumbre",
        objetivos: [
          "Aplicar reestructuración cognitiva a preocupaciones específicas",
          "Trabajar la intolerancia a la incertidumbre",
        ],
        tecnicas: ["Registro de pensamientos de 6 columnas", "Decatastrofización", "Técnica del peor caso-mejor caso-más probable"],
        descripcion:
          "Se trabajó en profundidad la preocupación central: '¿Y si cometemos un error en el caso y pierdo el trabajo?' Se aplicó la reestructuración de 6 columnas. Se exploró la evidencia real: años de historial profesional positivo, feedback del jefe. Se realizó la técnica del peor caso-mejor caso-más probable para tolerar la incertidumbre sin necesidad de resolver todo de antemano.",
        resultado:
          "La creencia en el pensamiento catastrófico bajó del 85% al 35%. Elena dijo: 'Me doy cuenta de que he pasado años preocupándome por cosas que no han ocurrido.'",
        tarea: "Practicar el registro de pensamientos con al menos 2 preocupaciones durante la semana. Aplicar la técnica del peor-mejor-más probable.",
      },
      {
        numero: 4,
        titulo: "Relajación muscular progresiva e higiene del sueño",
        objetivos: [
          "Entrenar en RMP para reducir tensión crónica",
          "Establecer higiene del sueño para el insomnio",
        ],
        tecnicas: ["RMP (Jacobson, protocolo de 16 grupos)", "Psicoeducación sobre sueño", "Restricción de cama"],
        descripcion:
          "Se realizó la primera sesión de RMP completa en consulta. Elena experimentó una reducción significativa de la tensión muscular. Se discutió el impacto de la ansiedad en el sueño. Se estableció un plan de higiene del sueño: horario regular, sin pantallas 1h antes, no llevar el trabajo a la cama, técnica de 'preocupación pospuesta' antes de dormir.",
        resultado:
          "Elena describió la RMP como 'la primera vez que siento mi cuerpo realmente relajado'. Su puntuación de tensión bajó de 8/10 a 3/10 después de la práctica.",
        tarea: "Práctica diaria de RMP (15-20 min, preferiblemente antes de dormir). Registro del sueño (hora de acostarse, latencia, calidad).",
      },
      {
        numero: 5,
        titulo: "Exposición a la incertidumbre y prevención de conductas de seguridad",
        objetivos: [
          "Identificar y reducir conductas de seguridad",
          "Tolerar activamente la incertidumbre sin buscar tranquilización",
        ],
        tecnicas: ["Análisis funcional de conductas de seguridad", "Exposición a incertidumbre", "Jerarquía de conductas de seguridad a eliminar"],
        descripcion:
          "Se identificaron las conductas de seguridad principales: revisar los documentos del trabajo más de 3 veces, preguntar a colegas si 'lo hizo bien', llamar a su madre todos los días para confirmar que está bien. Se diseñó una jerarquía de reducción gradual: pasar de revisar 5 veces a 3 veces, luego a 1 vez. Reducir llamadas a la madre a días alternos.",
        resultado:
          "Elena completó el experimento de no revisar un documento más de 2 veces. Describió ansiedad inicial (SUDS 65) que bajó a 20 sin que ocurriera ningún desastre. Insight clave: 'La ansiedad pasa sola si no la alimento.'",
        tarea: "Continuar reduciendo conductas de seguridad según la jerarquía. Registrar el nivel de ansiedad antes y después.",
      },
      {
        numero: 6,
        titulo: "Cierre, prevención de recaídas y mantenimiento",
        objetivos: [
          "Consolidar los aprendizajes",
          "Elaborar plan de prevención de recaídas",
          "Cerrar el proceso terapéutico",
        ],
        tecnicas: ["Revisión de logros", "Plan de mantenimiento", "GAD-7 final"],
        descripcion:
          "Se realizó una revisión completa del proceso: desde el primer GAD-7 (18/21) hasta el actual (7/21, rango leve). Se identificaron los principales aprendizajes: distinción preocupación útil/inútil, la preocupación no previene el peligro, la incertidumbre es tolerable. Se elaboró el plan de mantenimiento y señales de alerta para posibles recaídas.",
        resultado:
          "GAD-7 final: 7/21 (ansiedad leve, reducción del 61%). Elena reporta dormir bien 6/7 noches, ha retomado actividades sociales y se siente 'más libre'. Refiere haber recuperado la sensación de disfrute del presente.",
        tarea: "Continuar práctica de RMP 3 veces por semana. Usar registros de pensamientos en momentos de alta preocupación. Sesión de seguimiento en 3 meses.",
      },
    ],
    resultados:
      "Reducción del 61% en el GAD-7 (de 18 a 7). Mejora significativa del sueño, reducción de conductas de seguridad, y reanudación de actividades sociales. Elena mantuvo los avances en el seguimiento a los 3 meses.",
    aprendizajesClinicos: [
      "Trabajar explícitamente los metapensamentos sobre la utilidad de preocuparse es clave en TAG",
      "La distinción entre preocupaciones con/sin solución inmediata es una herramienta poderosa",
      "La RMP debe entrenarse en sesión antes de asignarse como tarea",
      "Las conductas de seguridad mantienen la ansiedad: su reducción gradual es fundamental",
    ],
  },
  {
    id: "depresion-mayor",
    titulo: "Depresión Mayor: El caso de Marcos",
    diagnostico: "Trastorno Depresivo Mayor, episodio moderado (F32.1)",
    paciente: "Marcos R.",
    edad: 28,
    sexo: "Hombre",
    totalSesiones: 8,
    resumen:
      "Marcos es un diseñador gráfico de 28 años que consulta tras perder su trabajo hace 4 meses. Presenta estado de ánimo deprimido, anhedonia, aislamiento social, pensamientos negativos sobre sí mismo y el futuro. El tratamiento combina activación conductual, reestructuración cognitiva de la tríada de Beck y prevención de recaídas.",
    presentacion:
      "Marcos es derivado por su médico de cabecera con diagnóstico de depresión. Lleva 4 meses sin trabajar tras cierre de la empresa donde trabajaba. Describe días 'en blanco': se levanta tarde, pasa horas en el sofá, come mal y ha dejado de ver a sus amigos. Refiere sentir que 'ya nada le importa' y que 'es un fracasado'. Niega ideación suicida activa pero refiere pensamientos de 'sería mejor no estar'. Duerme en exceso (12-14h). Historial: episodio depresivo leve a los 22 años, resuelto sin tratamiento formal.",
    formulacionCognitiva: {
      eventosVitales:
        "Padre exigente y emocionalmente distante. Mensajes tempranos: 'el valor de una persona depende de sus logros'. Primera depresión a los 22 años coincidiendo con malas notas. Identidad muy ligada al trabajo y al rendimiento.",
      creenciasNucleares: [
        "Soy un fracasado",
        "No soy suficientemente bueno",
        "Si no soy productivo, no tengo valor",
      ],
      supuestosDisfuncionales: [
        "Si trabajo duro y tengo éxito, tengo valor. Si fallo, no tengo valor.",
        "Las personas que me quieren me abandonarán si ven que soy un fracasado",
      ],
      pensamientosAutomaticos: [
        "No sirvo para nada",
        "Nunca volveré a encontrar trabajo",
        "Mis amigos están hartos de mí",
        "¿Para qué esforzarme si de todas formas voy a fallar?",
        "Soy una carga para todos",
      ],
      conductas: [
        "Aislamiento social completo",
        "Hipersomnia (12-14h diarias)",
        "Dejar de hacer actividades que antes disfrutaba (diseño personal, deporte, música)",
        "Rumiación sobre el fracaso",
        "Procrastinación en búsqueda de empleo (por miedo al rechazo)",
      ],
      emocionesPrevalentes: ["Tristeza profunda", "Culpa", "Vergüenza", "Desesperanza", "Apatía"],
    },
    objetivosTerapeuticos: [
      "Reducir síntomas depresivos (PHQ-9)",
      "Aumentar gradualmente nivel de actividad y contacto social",
      "Cuestionar creencias nucleares de fracaso e inutilidad",
      "Elaborar plan de búsqueda de empleo",
      "Trabajar pensamientos de 'sería mejor no estar'",
    ],
    sesiones: [
      {
        numero: 1,
        titulo: "Evaluación, psicoeducación y plan de seguridad",
        objetivos: ["Evaluar riesgo y síntomas", "Establecer alianza", "Plan de seguridad si procede"],
        tecnicas: ["PHQ-9 (puntuación: 19/27)", "Entrevista de evaluación de riesgo", "Plan de seguridad"],
        descripcion:
          "PHQ-9: 19/27 (depresión moderada-severa). Se evaluó ideación suicida: Marcos refirió pensamientos pasivos de 'sería mejor no estar' sin plan ni intención. Se elaboró plan de seguridad con personas de apoyo (hermana, amigo Pedro) y línea de crisis 024. Se realizó psicoeducación sobre depresión: la inactividad mantiene la depresión, no esperar a sentirse bien para actuar.",
        resultado:
          "Marcos se mostró aliviado de poder hablar de sus pensamientos sin ser juzgado. El plan de seguridad fue bien recibido. Comprometido a llamar a su hermana si los pensamientos se intensifican.",
        tarea: "Registro de actividades durante la semana: anotar qué hace cada día y nivel de ánimo y placer (0-10).",
      },
      {
        numero: 2,
        titulo: "Activación conductual: análisis e inicio",
        objetivos: [
          "Revisar registro de actividades",
          "Iniciar planificación de actividades graduales",
        ],
        tecnicas: ["Análisis del registro de actividades", "Programación de actividades agradables", "Graduación"],
        descripcion:
          "Se revisó el registro: la semana de Marcos era casi completamente plana (ánimo 2-3/10, placer casi 0). Pequeñas excepciones: el domingo cocinó y el estado de ánimo subió a 5. Se usó esto como evidencia del impacto de las actividades. Se planificó una semana con actividades pequeñas y concretas: salir 15 min al día, cocinar 3 veces, enviar un mensaje a Pedro.",
        resultado:
          "Marcos reconoció la relación entre cocinar el domingo y sentirse un poco mejor. Motivación inicial para intentar 'pequeños experimentos'.",
        tarea: "Seguir el plan de actividades semanal. Anotar el estado de ánimo antes y después de cada actividad.",
      },
      {
        numero: 3,
        titulo: "Activación conductual: revisión y ampliación",
        objetivos: ["Reforzar avances", "Ampliar el repertorio de actividades"],
        tecnicas: ["Revisión de tareas", "Solución de problemas", "Refuerzo verbal"],
        descripcion:
          "Marcos completó el 70% del plan. Salió a caminar 4/7 días, cocinó 3 veces, envió un mensaje a Pedro (quien respondió proponiéndole quedar). Estado de ánimo medio subió de 2.5 a 3.8. El pensamiento 'mis amigos están hartos de mí' se puso a prueba involuntariamente (Pedro respondió con entusiasmo). Se amplió el plan incluyendo quedar con Pedro y retomar diseño personal 30 min.",
        resultado:
          "Primera semana con tendencia positiva. Marcos mostró cierta sorpresa: 'No esperaba que Pedro quisiera quedar'. Inicio del cuestionamiento de sus predicciones negativas.",
        tarea: "Continuar plan de actividades ampliado. Registrar pensamientos automáticos cuando aparezca la voz de 'para qué'.",
      },
      {
        numero: 4,
        titulo: "Reestructuración cognitiva: tríada de Beck",
        objetivos: ["Identificar y evaluar pensamientos automáticos negativos", "Trabajar la tríada de Beck"],
        tecnicas: ["Registro de pensamientos de 6 columnas", "Preguntas socráticas", "Revisión de evidencia"],
        descripcion:
          "Se introdujo el concepto de la tríada de Beck: visión negativa de uno mismo, del mundo y del futuro. Se trabajó el pensamiento central 'soy un fracasado' con el registro de 6 columnas. Evidencia a favor: perdí el trabajo. Evidencia en contra: 4 años de éxito en la empresa, dos premios de diseño, la empresa cerró por causas externas. Pensamiento alternativo: 'Estoy en un momento difícil, no soy un fracasado'.",
        resultado:
          "Credibilidad de 'soy un fracasado' bajó del 90% al 45%. Marcos dijo: 'Supongo que lo sé racionalmente pero no lo siento así.' Se normalizó esta diferencia y se explicó que el cambio emocional lleva más tiempo que el cognitivo.",
        tarea: "Aplicar registro de pensamientos a al menos 2 pensamientos automáticos durante la semana.",
      },
      {
        numero: 5,
        titulo: "Reanudación de actividades significativas y red social",
        objetivos: ["Conectar con actividades de valor", "Fortalecer red de apoyo social"],
        tecnicas: ["Valores y actividades significativas", "Planificación de actividades sociales", "Experimentos conductuales"],
        descripcion:
          "Se trabajó con el concepto de actividades conectadas con valores: la creatividad, el diseño y las amistades como cosas que importan a Marcos. Se planificó retomar el proyecto de diseño personal que había dejado. Se acordó quedar con Pedro y también contactar a otro amigo. Se hizo un experimento: publicar un diseño en Instagram.",
        resultado:
          "Marcos retomó el proyecto de diseño personal y pasó 2 horas trabajando en él. 'Por primera vez en meses me olvidé del tiempo.' La publicación en Instagram recibió 12 likes y un comentario positivo de un colega.",
        tarea: "Continuar con el proyecto de diseño. Iniciar plan de búsqueda de empleo: actualizar CV.",
      },
      {
        numero: 6,
        titulo: "Creencias nucleares: el valor personal más allá del rendimiento",
        objetivos: ["Trabajar creencias nucleares", "Ampliar la definición de valor personal"],
        tecnicas: ["Técnica de la flecha descendente", "Cuestionamiento de creencias nucleares", "Continuo de evidencia"],
        descripcion:
          "Se exploró la creencia nuclear: 'mi valor depende de mis logros'. Origen: mensajes paternos. Se usó la técnica de continuo: 'Si en una escala de 0 a 100% de fracasado, ¿dónde estaría Hitler? ¿Dónde una persona que perdió su trabajo pero tiene amigos que le quieren, fue bueno en su trabajo durante años y es buena persona?' Marcos se ubicó en un 30%, no en el 100%.",
        resultado:
          "Importante desinflamiento de la creencia nuclear. Marcos comenzó a construir una definición de valor personal más amplia que incluye relaciones, valores y carácter.",
        tarea: "Escribir una carta a su yo de 22 años durante la primera depresión. Qué le diría.",
      },
      {
        numero: 7,
        titulo: "Búsqueda de empleo activa y manejo del rechazo",
        objetivos: ["Abordar la evitación en la búsqueda de empleo", "Trabajar el miedo al rechazo"],
        tecnicas: ["Análisis de conductas de evitación", "Exposición gradual a búsqueda de empleo", "Reestructuración del rechazo"],
        descripcion:
          "Se exploró la parálisis en la búsqueda de empleo: el miedo al rechazo activaba la creencia 'soy un fracasado'. Se diseñó una jerarquía: actualizar CV, enviar a agencias, enviar a conocidos, responder ofertas. Se reestructuró el rechazo: una oferta no contestada no es un juicio sobre su valor como persona.",
        resultado:
          "Marcos envió el CV a 3 ofertas durante la semana. Recibió una respuesta positiva para entrevista. PHQ-9 en esta sesión: 10/27 (reducción de 9 puntos).",
        tarea: "Preparar la entrevista. Practicar el role-play de presentación personal.",
      },
      {
        numero: 8,
        titulo: "Cierre terapéutico y prevención de recaídas",
        objetivos: ["Consolidar logros", "Plan de prevención de recaídas", "Cierre del proceso"],
        tecnicas: ["PHQ-9 final", "Revisión de aprendizajes", "Plan de mantenimiento"],
        descripcion:
          "PHQ-9 final: 8/27 (depresión leve, reducción del 58%). Se revisaron los logros: reanudación de actividades, fortalecimiento de la red social, primer entrevista de trabajo. Se identificaron las señales de alerta (aislamiento, hipersomnia, pensamientos de fracaso) y el plan de respuesta. Se reconoció el enorme trabajo realizado por Marcos.",
        resultado:
          "Marcos dijo: 'Por primera vez en meses tengo algo de esperanza'. Aunque no ha conseguido trabajo aún, se siente capaz de afrontar el proceso. La entrevista fue bien y está en el segundo paso de selección.",
        tarea: "Sesión de seguimiento en 6 semanas. Continuar con registro de pensamientos si aparecen pensamientos depresivos intensos.",
      },
    ],
    resultados:
      "Reducción del 58% en el PHQ-9 (de 19 a 8). Reanudación de actividades creativas y sociales. Inicio activo de búsqueda de empleo. Sin pensamientos suicidas en las últimas 4 sesiones.",
    aprendizajesClinicos: [
      "En depresión, la activación conductual debe preceder a la reestructuración cognitiva en las primeras sesiones",
      "Evaluar siempre riesgo en primera sesión y elaborar plan de seguridad",
      "La carta al yo pasado es una técnica muy poderosa para trabajar creencias nucleares con compasión",
      "Reforzar TODOS los esfuerzos, por pequeños que sean, especialmente en las primeras sesiones",
    ],
  },
  {
    id: "toc",
    titulo: "TOC: El caso de Laura",
    diagnostico: "Trastorno Obsesivo-Compulsivo (F42)",
    paciente: "Laura G.",
    edad: 22,
    sexo: "Mujer",
    totalSesiones: 10,
    resumen:
      "Laura es una estudiante de medicina de 22 años con TOC de contaminación. Realiza rituales de lavado de manos (1-2 horas al día), evita tocar superficies públicas, y pasa horas revisando si se ha contaminado. El tratamiento aplica exposición con prevención de respuesta (EPR), el tratamiento de primera elección para TOC.",
    presentacion:
      "Laura es derivada por psiquiatría con diagnóstico de TOC. Lleva 18 meses con obsesiones de contaminación (miedo a gérmenes, suciedad, enfermedades). Realiza rituales de lavado de manos entre 30 y 50 veces al día (total 1-2 horas). Usa guantes para tocar pomos de puertas, evita transporte público y lugares concurridos. Las obsesiones le generan nivel de ansiedad 90/100. Las compulsiones reducen temporalmente la ansiedad pero la vuelven con más fuerza. Ha abandonado actividades sociales y su rendimiento académico ha bajado.",
    formulacionCognitiva: {
      eventosVitales:
        "Madre con rasgos obsesivos sobre la limpieza y la salud. Laura creció con mensajes de que 'contaminarse' tiene consecuencias graves. En la infancia padeció una enfermedad seria (hospitalización) que fue vivida como amenaza de muerte. A los 20 años aumentaron las obsesiones con el comienzo de la carrera de medicina (exposición a enfermedades).",
      creenciasNucleares: [
        "Contaminarme puede matarme o matar a alguien que quiero",
        "Soy responsable de prevenir cualquier daño",
        "La duda significa peligro real",
      ],
      supuestosDisfuncionales: [
        "Si no me lavo las manos el número correcto de veces, algo malo ocurrirá",
        "Si tengo la duda, es porque hay una amenaza real",
        "Debo tener certeza absoluta de que no hay peligro",
      ],
      pensamientosAutomaticos: [
        "Si toco esa puerta me contaminaré y enfermaré",
        "¿Y si no me lavé suficiente?",
        "Tengo que volver a revisar, puede que me haya contaminado",
        "Si no lo hago bien, seré responsable de enfermar a alguien",
      ],
      conductas: [
        "Rituales de lavado (30-50 veces/día)",
        "Revisión compulsiva de manos",
        "Uso de guantes en lugares públicos",
        "Evitación de transporte público, hospitales, zonas concurridas",
        "Pedido de tranquilización a familiar",
        "Búsqueda en internet sobre enfermedades",
      ],
      emocionesPrevalentes: ["Ansiedad intensa", "Asco", "Culpa", "Vergüenza"],
    },
    objetivosTerapeuticos: [
      "Reducir los rituales de lavado a una frecuencia normal (<10 veces/día)",
      "Reducir la evitación de situaciones públicas",
      "Aprender a tolerar la incertidumbre sin realizar compulsiones",
      "Comprender el papel de las compulsiones en el mantenimiento del TOC",
      "Reanudación de vida académica y social",
    ],
    sesiones: [
      {
        numero: 1,
        titulo: "Evaluación y psicoeducación sobre TOC",
        objetivos: ["Evaluar severidad", "Psicoeducación sobre el modelo del TOC"],
        tecnicas: ["Y-BOCS (puntuación: 26/40, severo)", "Psicoeducación TOC"],
        descripcion:
          "Se administró la Y-BOCS: 26/40 (TOC severo). Se realizó psicoeducación fundamental: las obsesiones son pensamientos intrusivos normales que se vuelven problemáticos cuando se les da demasiada importancia. Las compulsiones reducen la ansiedad a corto plazo pero la refuerzan a largo plazo. La incertidumbre es parte de la vida y no hay forma de obtener certeza absoluta.",
        resultado:
          "Laura comprendió el modelo, aunque mostró resistencia: 'Pero ¿y si de verdad hay riesgo?' Se normalizó esta duda como parte del TOC.",
        tarea: "Observar (sin cambiar nada) cuántas veces se lava las manos y la ansiedad antes y después del ritual.",
      },
      {
        numero: 2,
        titulo: "Construcción de la jerarquía EPR",
        objetivos: ["Construir jerarquía de exposición", "Explicar principios de la EPR"],
        tecnicas: ["Construcción de jerarquía SUDS", "Psicoeducación EPR", "Contrato terapéutico"],
        descripcion:
          "Se explicó la EPR: exponerse al estímulo temido SIN realizar la compulsión hasta que la ansiedad baje. Se elaboró la jerarquía de 10 ítems: desde tocar el pomos de la puerta de la consulta (SUDS 40) hasta tocar el pomos de un hospital sin lavarse (SUDS 98). Se estableció el contrato terapéutico: Laura se compromete a no huir durante la exposición.",
        resultado:
          "Jerarquía completa elaborada. Laura mostró alta ansiedad anticipatoria. Se usó la metáfora de la ola de ansiedad: sube, alcanza el pico y baja sola.",
        tarea: "Revisar la jerarquía en casa. Identificar qué conductas de evitación realiza actualmente.",
      },
      {
        numero: 3,
        titulo: "Primera exposición: nivel bajo de la jerarquía",
        objetivos: ["Realizar primera exposición in vivo", "Experiencia de habituación sin compulsión"],
        tecnicas: ["EPR in vivo", "Registro SUDS cada 5 minutos", "Prevención de respuesta"],
        descripcion:
          "Primera exposición en sesión: Laura toca el pomo de la puerta de la consulta sin lavarse las manos durante 45 minutos. SUDS inicial: 55. Pico: 70 a los 10 min. Al final: 25. Laura experimentó la habituación por primera vez. Se procesó la experiencia: la ansiedad bajó SOLA sin que ocurriera nada malo.",
        resultado:
          "Experiencia muy impactante para Laura. 'No me lo creo, la ansiedad bajó.' Este fue un punto de inflexión en la motivación para continuar.",
        tarea: "EPR en casa: tocar el pomos de todas las puertas del hogar sin lavarse. 2 veces al día, 30 minutos.",
      },
      {
        numero: 4,
        titulo: "Progresión en la jerarquía: objetos comunes",
        objetivos: ["Avanzar en la jerarquía", "Consolidar la no-realización de rituales"],
        tecnicas: ["EPR nivel medio-bajo", "Prevención de respuesta", "Revisión de tareas"],
        descripcion:
          "Se revisaron las tareas: Laura realizó EPR 9/14 sesiones en casa. Los SUDS bajaron a <20 en los ítems de inicio. Se avanzó a ítems de nivel medio: tocar el teléfono móvil (que considera muy contaminado), tocar el pasamanos de la escalera, usar el ascensor. Se realizaron in vivo en sesión.",
        resultado:
          "Reducción del ritual de lavado de 50 veces/día a 22 veces/día. Laura reporta sentir que 'puedo hacerlo'.",
        tarea: "EPR con los ítems trabajados hoy. Intentar reducir el lavado a <15 veces/día.",
      },
      {
        numero: 5,
        titulo: "Reestructuración cognitiva: el papel de la duda e incertidumbre",
        objetivos: ["Cuestionar la creencia 'duda = peligro'", "Tolerancia a la incertidumbre"],
        tecnicas: ["Preguntas socráticas", "Análisis de probabilidad real", "Continuo de certeza"],
        descripcion:
          "Se trabajó cognitivamente la creencia 'si tengo la duda, es que hay peligro real'. Preguntas: ¿Con qué frecuencia tus dudas sobre contaminación se han hecho realidad en los últimos 18 meses? (respuesta: cero). ¿Cuántas veces al día tienes la duda? ¿Cuántas se han cumplido? Se abordó la intolerancia a la incertidumbre: vivir sin certeza absoluta es la norma, no la excepción.",
        resultado:
          "Laura calculó que ha tenido ~10.000 pensamientos obsesivos en 18 meses, ninguno se ha cumplido. 'Cuando lo dices así, suena absurdo.' Insight cognitivo importante.",
        tarea: "Cuando aparezca la duda, en lugar de comprobar, decir en voz alta: 'Esto es el TOC, no la realidad.'",
      },
      {
        numero: 6,
        titulo: "EPR: nivel medio-alto de la jerarquía",
        objetivos: ["Avanzar a ítems más difíciles de la jerarquía"],
        tecnicas: ["EPR nivel medio-alto", "Prevención de respuesta", "Procesamiento posterior"],
        descripcion:
          "Exposición en sesión: salir a la calle, tocar barandillas y superficies públicas sin guantes, usar el transporte público. Laura realizó EPR de 75 minutos. SUDS inicial: 80, pico: 85, final: 35. Fue muy difícil pero lo completó. Se celebró el logro.",
        resultado:
          "Primer uso del metro en 6 meses sin guantes. Lavados de manos: 12 veces/día. Laura dijo: 'Me siento como si hubiera escalado el Everest.'",
        tarea: "Usar transporte público 3 veces esta semana. Registrar SUDS.",
      },
      {
        numero: 7,
        titulo: "Consolidación y reducción del ritual de lavado",
        objetivos: ["Consolidar avances en EPR", "Protocolo de reducción de rituales de lavado"],
        tecnicas: ["Protocolo de lavado de manos normalizado", "EPR continua", "Prevención de rituales de comprobación"],
        descripcion:
          "Se estableció el protocolo de lavado normalizado: lavarse las manos solo en situaciones realmente sucias (cocinar carne, ir al baño, etc.) máximo 10 veces/día. Se practicaron los momentos de resistencia a la compulsión. Se trabajó también la compulsión de búsqueda de tranquilización en internet.",
        resultado:
          "Rituales de lavado: 9 veces/día (dentro del rango normal). Gran logro después de 50 veces/día al inicio.",
        tarea: "Mantener máximo 10 lavados al día. Sin búsqueda en internet sobre enfermedades.",
      },
      {
        numero: 8,
        titulo: "Reanudación de vida social y académica",
        objetivos: ["Reanudación de actividades evitadas", "Generalización de los avances"],
        tecnicas: ["EPR en situaciones sociales", "Planificación de actividades"],
        descripcion:
          "Laura ha vuelto a clases presenciales. Se trabajó la EPR en entornos académicos (laboratorio, biblioteca). Se planificó una salida con amigas que había cancelado repetidamente. Se abordó la vergüenza residual sobre el TOC.",
        resultado:
          "Laura asistió a clases toda la semana y salió con sus amigas el fin de semana. 'Recuperé mi vida.' Y-BOCS en esta sesión: 14/40 (moderado-leve, reducción de 12 puntos).",
        tarea: "Continuar con EPR en situaciones nuevas que surjan. Registrar avances.",
      },
      {
        numero: 9,
        titulo: "Trabajo con creencias nucleares de responsabilidad",
        objetivos: ["Abordar la creencia de responsabilidad excesiva"],
        tecnicas: ["Técnica del pastel de responsabilidad", "Cuestionamiento de inflación de responsabilidad"],
        descripcion:
          "Se trabajó la creencia central: 'soy responsable de prevenir cualquier daño'. Técnica del pastel de responsabilidad: si alguien enferma, ¿qué porcentaje real de responsabilidad tiene Laura? Se distribuyó el 100% entre todos los factores posibles (patógeno, sistema inmune, exposición previa, etc.). Laura se atribuyó el 2% realista.",
        resultado:
          "Importante reducción de la sensación de responsabilidad hipotética. 'Nunca lo había pensado así. No puedo ser responsable de todo.'",
        tarea: "Continuar práctica de EPR. Escribir carta de compasión a sí misma por los 18 meses de sufrimiento.",
      },
      {
        numero: 10,
        titulo: "Cierre y prevención de recaídas en TOC",
        objetivos: ["Consolidar logros", "Plan de prevención de recaídas", "Cierre"],
        tecnicas: ["Y-BOCS final", "Plan de mantenimiento", "Psicoeducación sobre recaídas en TOC"],
        descripcion:
          "Y-BOCS final: 12/40 (leve, reducción del 54%). Se revisaron los aprendizajes centrales del tratamiento. Se elaboró el plan de prevención: si aparecen obsesiones, la respuesta es SIEMPRE EPR, nunca el ritual. Las recaídas son normales y manejables. Se explicó que puede buscar tratamiento en el futuro si necesita refuerzo.",
        resultado:
          "Laura terminó el tratamiento con rituales dentro del rango normal, vida social y académica recuperada. Dijo: 'Aprendí que puedo tolerar el malestar sin hacer nada, y que el mundo no se acaba.'",
        tarea: "Sesión de seguimiento en 2 meses. Libro recomendado: 'Vencer el TOC' de Gavino.",
      },
    ],
    resultados:
      "Reducción del 54% en Y-BOCS (de 26 a 12). Rituales de lavado reducidos de 50 a <10 por día. Reanudación de vida académica y social. Sin evitaciones significativas.",
    aprendizajesClinicos: [
      "La primera exposición exitosa es el punto de inflexión más importante en el tratamiento del TOC",
      "El modelo explicativo del TOC (compulsión → alivio temporal → refuerzo) debe ser perfectamente comprendido antes de iniciar EPR",
      "La técnica del pastel de responsabilidad es muy efectiva para la creencia de responsabilidad inflada",
      "Celebrar explícitamente cada logro, especialmente los primeros, que son los más costosos",
    ],
  },
  {
    id: "fobia-social",
    titulo: "Fobia Social: El caso de Pablo",
    diagnostico: "Trastorno de Ansiedad Social (F40.1)",
    paciente: "Pablo L.",
    edad: 19,
    sexo: "Hombre",
    totalSesiones: 7,
    resumen:
      "Pablo es un estudiante universitario de 19 años con fobia social severa. Evita situaciones sociales por miedo al ridículo y al juicio negativo. No puede hablar en clases, tiene dificultades para hacer amigos y ha faltado a exámenes orales. El tratamiento combina psicoeducación, reestructuración cognitiva, EHS y exposición graduada.",
    presentacion:
      "Pablo es derivado por el servicio de orientación universitaria. Lleva desde los 14 años con miedo intenso a situaciones sociales donde puede ser observado o evaluado. En la universidad ha dejado de asistir a clases que implican participación, tiene pocas amistades y ha suspenso un examen oral porque no pudo entrar al aula. Describe rubor, taquicardia y mente en blanco en situaciones sociales. Anticipa de forma catastrófica: 'me pondré rojo y todos se reirán'. Tiene acceso a redes sociales pero evita el contacto en persona.",
    formulacionCognitiva: {
      eventosVitales:
        "Fue víctima de burlas en el instituto (14-16 años) por su manera de hablar y su físico. Familia sobreprotectora que no facilitó la exposición social. Experiencia de hablar en público en el instituto con bloqueo total y risas de compañeros. Esto consolidó la creencia de que es ridículo.",
      creenciasNucleares: [
        "Soy ridículo y defectuoso",
        "Los demás son superiores a mí y me juzgarán negativamente",
        "Si me ven nervioso, pensarán que soy raro",
      ],
      supuestosDisfuncionales: [
        "Si me expongo socialmente, quedaré en ridículo",
        "Debo controlar perfectamente mis reacciones físicas antes de exponerme",
        "La ansiedad que muestro es visible para todos",
      ],
      pensamientosAutomaticos: [
        "Me voy a poner rojo y todos lo verán",
        "Voy a decir algo estúpido",
        "Están pensando que soy raro",
        "No sé qué decir, haré el ridículo",
        "Mi voz va a temblar",
      ],
      conductas: [
        "Evitación de clases con participación",
        "No levantar la mano en clase",
        "Evitar situaciones donde puede conocer gente nueva",
        "Mirar hacia abajo en situaciones sociales",
        "Hablar poco para no llamar la atención",
        "Escapar de situaciones cuando aparece la ansiedad",
        "Post-procesamiento negativo tras situaciones sociales",
      ],
      emocionesPrevalentes: ["Ansiedad social intensa", "Vergüenza", "Humillación anticipatoria"],
    },
    objetivosTerapeuticos: [
      "Asistir a clases con participación sin escapar",
      "Realizar exámenes orales",
      "Iniciar y mantener conversaciones con compañeros",
      "Reducir la autoconsciencia y el monitoreo interno durante situaciones sociales",
      "Cuestionar las creencias de ridículo y juicio negativo",
    ],
    sesiones: [
      {
        numero: 1,
        titulo: "Evaluación y modelo cognitivo de la ansiedad social",
        objetivos: ["Evaluar severidad", "Psicoeducación sobre el modelo de Clark & Wells"],
        tecnicas: ["SPIN (Social Phobia Inventory: 42/68, severo)", "Modelo cognitivo de la ansiedad social (Clark & Wells)"],
        descripcion:
          "Se evaluó con el SPIN: 42/68 (fobia social severa). Se explicó el modelo de Clark & Wells: en situaciones sociales, Pablo dirige su atención hacia adentro (monitorea su cara, voz, manos) y percibe sus síntomas como más visibles de lo que son. También realiza conductas de seguridad (evitar contacto visual, hablar poco) que paradójicamente hacen la situación más difícil.",
        resultado:
          "Pablo reconoció perfectamente el modelo. 'Sí, siempre estoy pendiente de si me estoy poniendo rojo.' El reconocimiento de las conductas de seguridad fue revelador.",
        tarea: "Observar qué conductas de seguridad usa en situaciones sociales esta semana.",
      },
      {
        numero: 2,
        titulo: "Reestructuración cognitiva: el juicio de los demás",
        objetivos: ["Cuestionar las predicciones de juicio negativo", "Trabajo con la atención autofocalizada"],
        tecnicas: ["Encuesta social (sondeo de la predicción)", "Estimación de probabilidades", "Video-feedback si disponible"],
        descripcion:
          "Se trabajaron las predicciones: '¿con qué probabilidad realmente la gente nota tu rubor?' Se diseñó una encuesta social: Pablo preguntaría a 5 personas si alguna vez les habían notado ponerse rojos sin que ellos lo dijeran. También se practicó dirigir la atención hacia FUERA (la conversación) en lugar de hacia dentro (mis síntomas).",
        resultado:
          "Los 5 encuestados dijeron que sí se habían puesto rojos y que nadie lo había notado. Pablo bajó la estimación de que los demás notan su rubor del 90% al 40%.",
        tarea: "En situaciones sociales, practicar deliberadamente dirigir la atención hacia la otra persona, no hacia sus propios síntomas.",
      },
      {
        numero: 3,
        titulo: "Entrenamiento en habilidades sociales básicas",
        objetivos: ["Desarrollar habilidades de inicio y mantenimiento de conversación"],
        tecnicas: ["Modelado", "Role-play", "Feedback", "Ensayo de habilidades"],
        descripcion:
          "Se trabajaron habilidades básicas: mantener contacto visual natural, preguntas abiertas para mantener conversaciones, responder sin monosílabos. Role-plays de: presentarse a alguien, pedir información a un compañero, responder en clase. Se hizo video-feedback de una pequeña presentación.",
        resultado:
          "Pablo se sorprendió al verse en el video: 'Me veo bastante normal. No se nota tanto como pensaba.' Este efecto del video-feedback fue muy poderoso.",
        tarea: "Iniciar una conversación con al menos un compañero de clase esta semana. Registrar la situación, predicción y resultado real.",
      },
      {
        numero: 4,
        titulo: "Exposición graduada: situaciones de nivel bajo",
        objetivos: ["Iniciar exposición a situaciones sociales evitadas"],
        tecnicas: ["Exposición in vivo nivel bajo", "Prevención de conductas de seguridad", "Registro SUDS"],
        descripcion:
          "Se empezó con los ítems bajos de la jerarquía: preguntar la hora a un extraño (SUDS 35), preguntar algo al dependiente de una tienda (SUDS 45), mantener conversación con compañero de clase (SUDS 55). Se realizaron in vivo en la primera parte de la sesión (saliendo a la calle). Sin conductas de seguridad.",
        resultado:
          "Pablo preguntó la hora a tres personas en la calle. SUDS máximo: 50, final: 15. 'No ha pasado nada malo.' Experimenta la habituación por primera vez.",
        tarea: "EPR diaria con ítems de nivel bajo-medio de la jerarquía.",
      },
      {
        numero: 5,
        titulo: "Exposición: situaciones académicas y reducción del post-procesamiento",
        objetivos: ["Exposición en situaciones académicas", "Reducir el rumiativo post-procesamiento social"],
        tecnicas: ["EPR en situaciones académicas", "Técnica para reducir post-procesamiento", "Reatribución"],
        descripcion:
          "Pablo asistió a una clase pequeña y levantó la mano para responder una pregunta. SUDS inicial: 75, final: 40. Se trabajó el post-procesamiento: la tendencia de Pablo a repasar negativamente cada interacción durante horas después. Técnica: cuando aparezca el post-procesamiento, redirigir la atención a evidencias objetivas (¿qué ocurrió realmente?).",
        resultado:
          "Primera participación voluntaria en clase en varios meses. Pablo no se bloqueó. Hay alta emoción de orgullo pero también ansiedad residual. Gran avance.",
        tarea: "Participar en clase al menos una vez más. Sin post-procesamiento negativo: si aparece, recuerda los hechos reales.",
      },
      {
        numero: 6,
        titulo: "Trabajo con la creencia de ser ridículo",
        objetivos: ["Cuestionar la creencia central de ridiculez y defecto"],
        tecnicas: ["Técnica de encuesta social ampliada", "Experimento conductual de actuar 'ridículamente'", "Reestructuración de la vergüenza"],
        descripcion:
          "Se hizo un experimento radical: Pablo entró a una tienda y preguntó por un producto inexistente con calma. ¿Se reían? ¿Le juzgaban? Resultado: el dependiente le dijo amablemente que no tenía ese producto. Se trabajó la vergüenza: sentirse avergonzado no significa que los demás te juzguen negativamente.",
        resultado:
          "Pablo realizó el experimento con SUDS 85 inicial. Al terminar: 'No pasó nada. Me siento ridículo yo solo.' Insight clave: la vergüenza viene de dentro, no de los demás.",
        tarea: "Hacer 2 experimentos conductuales 'de vergüenza controlada' por semana.",
      },
      {
        numero: 7,
        titulo: "Cierre, examen oral y mantenimiento",
        objetivos: ["Preparar el examen oral", "Plan de mantenimiento", "Cierre"],
        tecnicas: ["Role-play de examen oral", "SPIN final", "Plan de mantenimiento"],
        descripcion:
          "Pablo tiene un examen oral en 2 semanas. Se practicó mediante role-play. Se trabajaron las predicciones específicas sobre el examen. Se celebraron los avances del tratamiento. SPIN final: 21/68 (reducción del 50%). Se elaboró plan de mantenimiento.",
        resultado:
          "SPIN final: 21 (reducción del 50%). Pablo asistió al examen oral y lo aprobó. Tiene tres nuevos amigos en la universidad. Dijo: 'Antes me veía solo para siempre. Ahora me parece posible tener una vida social.'",
        tarea: "Continuar EPR con nuevas situaciones sociales. Lecturas: 'Supera tu fobia social' de Clark. Sesión de seguimiento en 2 meses.",
      },
    ],
    resultados:
      "Reducción del 50% en SPIN (de 42 a 21). Reanudación de asistencia a clases, aprobación del examen oral, inicio de nuevas amistades.",
    aprendizajesClinicos: [
      "El video-feedback es una de las técnicas más potentes para la fobia social: ver la realidad vs. la imagen interna",
      "Trabajar la atención autofocalizada es clave: entrenar al paciente a dirigir la atención hacia afuera",
      "Los experimentos conductuales 'de vergüenza controlada' (actuar intencionadamente de forma 'tonta') son muy efectivos",
      "El post-procesamiento negativo es un mantenedor fundamental de la fobia social que debe trabajarse explícitamente",
    ],
  },
  {
    id: "trastorno-panico",
    titulo: "Trastorno de Pánico: El caso de Marta",
    diagnostico: "Trastorno de Pánico sin Agorafobia (F41.0)",
    paciente: "Marta R.",
    edad: 31,
    sexo: "Mujer",
    totalSesiones: 8,
    resumen: "Marta consulta tras 4 meses de ataques de pánico recurrentes e inesperados con miedo intenso a morir o volverse loca. El tratamiento se centra en psicoeducación sobre el pánico, desmitificación de las sensaciones físicas y exposición interoceptiva.",
    presentacion: "Marta acude derivada por su médico de cabecera tras descartar causa orgánica. Describe episodios súbitos de taquicardia intensa, dificultad para respirar, mareo, sensación de irrealidad y terror a morirse o perder el control. Los ataques duran 10-15 minutos y ocurren 2-3 veces por semana. Entre ataques vive con miedo constante a que ocurra el siguiente. Ha reducido sus salidas, dejó de ir al gimnasio y evita quedarse sola en casa. Trabaja como enfermera, lo que paradójicamente aumenta su catastrofización de las sensaciones físicas.",
    formulacionCognitiva: {
      eventosVitales: "Primer ataque tras una discusión laboral intensa. Personalidad con tendencia a la hipervigilancia corporal. Historia de asma infantil que dejó miedo a sensaciones respiratorias. Madre hipocondríaca.",
      creenciasNucleares: [
        "Mi cuerpo es vulnerable y puede fallar",
        "Las sensaciones físicas intensas son señal de peligro real",
        "Si pierdo el control, algo catastrófico ocurrirá",
      ],
      supuestosDisfuncionales: [
        "Si siento el corazón acelerado, algo malo le pasa a mi corazón",
        "Si me mareo, voy a desmayarme o volverme loca",
        "Debo vigilar constantemente mis sensaciones corporales para prevenir el peligro",
      ],
      pensamientosAutomaticos: [
        "Me está dando un infarto",
        "Me voy a desmayar",
        "Estoy perdiendo el control",
        "No puedo respirar, me voy a ahogar",
        "Esta vez sí que me voy a morir",
      ],
      conductas: [
        "Evitación de lugares donde tuvo ataques",
        "Hipervigilancia de sensaciones corporales",
        "Búsqueda de tranquilización médica",
        "Evitación de ejercicio físico (por miedo a la taquicardia)",
        "Necesidad de acompañante",
      ],
      emocionesPrevalentes: ["Terror", "Ansiedad anticipatoria", "Vergüenza", "Desesperanza"],
    },
    objetivosTerapeuticos: [
      "Comprender el mecanismo del pánico y desmitificar las sensaciones físicas",
      "Eliminar la interpretación catastrófica de las sensaciones corporales",
      "Eliminar las conductas de evitación y seguridad",
      "Recuperar la funcionalidad completa (ejercicio, salidas, trabajo autónomo)",
    ],
    sesiones: [
      {
        numero: 1,
        titulo: "Evaluación y psicoeducación básica sobre el pánico",
        objetivos: ["Evaluar historial y características de los ataques", "Introducir el modelo del pánico"],
        tecnicas: ["Entrevista clínica", "Psicoeducación", "Metáfora de la alarma de incendios"],
        descripcion: "Se recoge historia detallada de los ataques: primer episodio, características, contexto, conductas de seguridad y evitación. Se introduce el modelo cognitivo del pánico: el ataque no es peligroso sino el resultado de interpretar erróneamente sensaciones físicas normales (activación del sistema nervioso autónomo). Se usa la metáfora de la alarma de incendios defectuosa: suena sin que haya fuego, pero el peligro es la alarma, no el incendio.",
        resultado: "Marta muestra alivio al entender que no está 'loca' ni tiene una enfermedad cardíaca. Por primera vez alguien le da una explicación lógica de lo que ocurre. Motivación alta.",
        tarea: "Leer folleto sobre el pánico. Registrar el próximo ataque con detalle (situación, pensamientos, sensaciones, conducta).",
      },
      {
        numero: 2,
        titulo: "El círculo vicioso del pánico",
        objetivos: ["Construir el modelo del círculo vicioso personalizado", "Identificar pensamientos catastrofistas específicos"],
        tecnicas: ["Formulación compartida", "Registro de ataques", "Identificación de distorsiones"],
        descripcion: "Se revisa el registro de la semana. Se construye junto a Marta su círculo vicioso personalizado: sensación física → interpretación catastrófica → más ansiedad → más sensaciones → confirmación del peligro. Se identifican sus pensamientos automáticos más frecuentes y se analizan las distorsiones (catastrofización, lectura de señales corporales). Se trabaja el concepto de 'profecía autocumplida': su miedo al ataque genera la activación que interpreta como peligro.",
        resultado: "Marta identifica claramente su patrón. Reconoce que en cada ataque busca síntomas de infarto que 'confirmen' su miedo. Gran insight.",
        tarea: "Anotar en qué momentos aparece la hipervigilancia corporal y qué busca exactamente.",
      },
      {
        numero: 3,
        titulo: "Reestructuración cognitiva de las interpretaciones del pánico",
        objetivos: ["Cuestionar las interpretaciones catastrofistas", "Generar interpretaciones alternativas"],
        tecnicas: ["Cuestionamiento socrático", "Evidencia a favor/en contra", "Experimento conductual verbal"],
        descripcion: "Se trabajan los pensamientos 'Me da un infarto' y 'Me voy a desmayar' con evidencia empírica: ¿Cuántos ataques ha tenido? ¿Cuántos infartos reales ha tenido? ¿Qué diferencia hay entre taquicardia de ansiedad y de infarto? Se explica la fisiología: en el pánico la presión arterial sube (no baja), por lo que el desmayo es casi imposible. Marta queda muy impactada por este dato: lleva meses creyendo que se iba a desmayar sin saber que la ansiedad hace exactamente lo contrario.",
        resultado: "Reducción significativa del miedo al desmayo. Las interpretaciones alternativas le parecen creíbles, no solo intelectualmente.",
        tarea: "Practicar leer las tarjetas de respuesta alternativa durante los próximos síntomas.",
      },
      {
        numero: 4,
        titulo: "Exposición interoceptiva: provocar las sensaciones",
        objetivos: ["Eliminar el miedo a las sensaciones físicas mediante exposición", "Demostrar que las sensaciones son inocuas"],
        tecnicas: ["Exposición interoceptiva", "Jerarquía de sensaciones", "Prevención de respuesta"],
        descripcion: "Se explica el fundamento: si el miedo al pánico mantiene el pánico, la solución es exponerse a las sensaciones de forma voluntaria y controlada para aprender que no son peligrosas. Se construye una jerarquía de ejercicios: girar en silla (mareo), respirar por pajita (ahogo), hacer ejercicio intenso (taquicardia), hiperventilación controlada (entumecimiento, irrealidad). Se realizan en sesión, empezando por los menos temidos. Marta se permite sentir la taquicardia del ejercicio sin catastrofizar.",
        resultado: "La taquicardia voluntaria es mucho menos aterradora que la 'espontánea'. Gran aprendizaje: son las mismas sensaciones pero con diferente significado.",
        tarea: "Practicar exposición interoceptiva 10 minutos diarios con los ejercicios ensayados en sesión.",
      },
      {
        numero: 5,
        titulo: "Eliminar conductas de seguridad y evitación",
        objetivos: ["Identificar todas las conductas de seguridad", "Eliminarlas sistemáticamente"],
        tecnicas: ["Análisis funcional", "Experimentos conductuales", "Exposición situacional"],
        descripcion: "Se revisan todas las conductas que Marta usa para 'prevenir' o 'controlar' los ataques: llevar agua, teléfono siempre en mano, evitar el gimnasio, no quedarse sola. Se analiza cómo cada conducta de seguridad mantiene la creencia de que hay un peligro real. Se diseña un plan de eliminación gradual. Marta va al gimnasio en sesión (simbólicamente: hace ejercicio en la sala de espera) y tolera la taquicardia sin escapar.",
        resultado: "Marta comprende que las conductas de seguridad son el problema, no la solución. Primera vez en meses que hace ejercicio.",
        tarea: "Esta semana: ir al gimnasio sin acompañante, sin teléfono visible, 20 minutos.",
      },
      {
        numero: 6,
        titulo: "Exposición a situaciones evitadas",
        objetivos: ["Recuperar actividades y lugares evitados", "Consolidar aprendizajes"],
        tecnicas: ["Exposición in vivo", "Registro de éxitos", "Refuerzo positivo"],
        descripcion: "Revisión de logros: Marta fue al gimnasio 3 veces, solo tuvo un ataque (mucho más breve y menos intenso). Se trabaja la interpretación del ataque: ¿fue un fracaso o una oportunidad de practicar? Marta reconoce que no huyó, que le pasó y sobrevivió. Se planifican exposiciones a situaciones pendientes: metro, supermercado en hora punta, quedarse sola en casa.",
        resultado: "Frecuencia de ataques reducida a 1 por semana. Duración mucho más corta. Marta siente que puede manejarlos.",
        tarea: "Exposición al metro 3 veces sin conductas de seguridad.",
      },
      {
        numero: 7,
        titulo: "Manejo del ataque en tiempo real",
        objetivos: ["Dotarle de herramientas para manejar el ataque cuando ocurra", "Reducir el miedo anticipatorio"],
        tecnicas: ["Respiración diafragmática", "Tarjetas de manejo", "Ensayo mental"],
        descripcion: "Se entrena la respiración diafragmática lenta (4-4-6) como herramienta de manejo (no de escape). Se diseñan tarjetas de manejo con: '1. Esto es pánico, no peligro. 2. Las sensaciones son incómodas pero no peligrosas. 3. Si no añado más miedo, esto pasará en 10 minutos.' Se hacen ensayos mentales de afrontar un ataque con las nuevas herramientas.",
        resultado: "Marta se siente preparada. El miedo anticipatorio ha reducido notablemente.",
        tarea: "Llevar las tarjetas. Próximo ataque: aplicar el protocolo y registrar.",
      },
      {
        numero: 8,
        titulo: "Consolidación, prevención de recaídas y cierre",
        objetivos: ["Consolidar aprendizajes", "Planificar prevención de recaídas"],
        tecnicas: ["Revisión de progresos", "Carta al yo futuro", "Plan de acción ante recaída"],
        descripcion: "Se revisan todos los avances: de 2-3 ataques semanales a 0 en las últimas 2 semanas. Marta ha recuperado el gimnasio, el metro, la autonomía en casa. Se trabaja la prevención de recaídas: qué señales vigilar, qué hacer si reaparecen los ataques, cómo no volver a las conductas de seguridad. Marta escribe una carta a su yo de hace 2 meses explicándole lo que sabe ahora.",
        resultado: "Alta terapéutica. Marta llora de alivio. Seguimiento programado a 1 y 6 meses.",
        tarea: "Mantener el plan de actividad física. Leer la carta si aparecen síntomas. Contactar si la frecuencia vuelve a aumentar.",
      },
    ],
    resultados: "Remisión completa del trastorno de pánico. De 2-3 ataques semanales a 0 en las últimas 3 semanas. Recuperación total de actividades evitadas. Score en PDSS reducido de 18 a 3.",
    aprendizajesClinicos: [
      "La psicoeducación detallada sobre la fisiología del pánico es terapéutica por sí misma: muchos pacientes mejoran significativamente solo con entender el mecanismo",
      "La exposición interoceptiva es el elemento diferencial de la TCC para el pánico: no basta con la reestructuración cognitiva",
      "Las conductas de seguridad son el principal mantenedor del trastorno y deben ser el objetivo explícito del tratamiento",
      "El dato de que en el pánico la presión sube (no baja) es especialmente efectivo para desmontar el miedo al desmayo",
    ],
  },
  {
    id: "insomnio",
    titulo: "Insomnio Crónico: El caso de Carmen",
    diagnostico: "Insomnio Crónico (G47.0) — Trastorno de insomnio primario",
    paciente: "Carmen V.",
    edad: 45,
    sexo: "Mujer",
    totalSesiones: 6,
    resumen: "Carmen consulta por insomnio de 3 años de evolución con dificultad para conciliar y mantener el sueño. Se aplica TCC para el Insomnio (TCC-I) con higiene del sueño, control de estímulos, restricción de sueño y reestructuración cognitiva.",
    presentacion: "Carmen es maestra de 45 años que lleva 3 años durmiendo mal. Tarda entre 1 y 2 horas en dormirse, se despierta 2-3 veces por noche y amanece cansada. Ha probado melatonina, infusiones, música relajante y pastillas para dormir (que dejó por miedo a la dependencia). Describe una 'lucha' con el sueño cada noche. Durante el día: fatiga, dificultad de concentración y irritabilidad. Ha desarrollado ansiedad anticipatoria intensa: empieza a preocuparse por si dormirá desde las 6 de la tarde.",
    formulacionCognitiva: {
      eventosVitales: "El insomnio comenzó durante un período de estrés laboral intenso. Aunque el estrés se resolvió, el insomnio persistió por factores de mantenimiento cognitivos y conductuales.",
      creenciasNucleares: [
        "Si no duermo 8 horas, el día siguiente será un desastre",
        "Tengo el sueño roto y no hay solución",
        "Mi cuerpo no sabe dormir",
      ],
      supuestosDisfuncionales: [
        "Necesito dormir exactamente 8 horas para funcionar",
        "Si estoy en cama más tiempo, duermo más",
        "Tengo que esforzarme para conseguir dormirme",
      ],
      pensamientosAutomaticos: [
        "Son las 2 de la mañana y mañana tengo que madrugar",
        "Si no duermo ahora, mañana no podré dar clase",
        "¿Por qué no puedo dormir como todo el mundo?",
        "Nunca voy a mejorar",
      ],
      conductas: [
        "Acostarse muy temprano 'para compensar'",
        "Quedarse en cama aunque no duerma",
        "Mirar el reloj repetidamente",
        "Esforzarse activamente por dormirse",
        "Siestas largas para 'recuperar'",
        "Evitar actividades por fatiga",
      ],
      emocionesPrevalentes: ["Ansiedad nocturna", "Frustración", "Desesperanza", "Fatiga crónica"],
    },
    objetivosTerapeuticos: [
      "Reducir la latencia de inicio del sueño a menos de 20 minutos",
      "Reducir los despertares nocturnos",
      "Eliminar la ansiedad anticipatoria sobre el sueño",
      "Modificar creencias disfuncionales sobre el sueño",
    ],
    sesiones: [
      {
        numero: 1,
        titulo: "Evaluación y psicoeducación sobre el sueño",
        objetivos: ["Evaluar el patrón de sueño completo", "Explicar la fisiología del sueño"],
        tecnicas: ["Diario de sueño", "Psicoeducación", "Cálculo de eficiencia de sueño"],
        descripcion: "Se recoge historia detallada del insomnio y se entrega el diario de sueño (hora de acostarse, tiempo en dormirse, despertares, hora de levantarse, calidad). Se explica la fisiología del sueño: presión homeostática, ritmo circadiano, arquitectura del sueño. Carmen aprende que intentar dormirse activamente es contraproducente: el sueño es un proceso involuntario que se facilita, no se fuerza. Se introduce el concepto de 'hiperactivación' como mecanismo central.",
        resultado: "Carmen aprende que muchas de sus estrategias para dormir más (acostarse antes, siestas, esforzarse) son en realidad parte del problema.",
        tarea: "Completar diario de sueño durante 1 semana.",
      },
      {
        numero: 2,
        titulo: "Higiene del sueño y control de estímulos",
        objetivos: ["Establecer rutinas de sueño saludables", "Recondicionar la cama como señal de sueño"],
        tecnicas: ["Higiene del sueño", "Control de estímulos", "Horario de sueño fijo"],
        descripcion: "Revisión del diario: eficiencia de sueño del 55% (muy baja). Se establecen las reglas de higiene del sueño. Se introduce el control de estímulos: la cama solo para dormir (y sexo), no para ver series, preocuparse o intentar dormirse sin éxito. Regla clave: si no está dormida en 20 minutos, levantarse y hacer algo tranquilo hasta tener sueño. Carmen reacciona con incredulidad: 'Si me levanto me despierto más'. Se trabaja el argumento: la cama asociada al insomnio es peor.",
        resultado: "Carmen acepta el protocolo con resistencia. Acuerdo para probarlo 1 semana.",
        tarea: "Aplicar control de estímulos. Hora de levantarse fija: 7:00 AM independientemente de cuánto haya dormido.",
      },
      {
        numero: 3,
        titulo: "Restricción de sueño",
        objetivos: ["Aumentar la presión homeostática de sueño", "Aumentar la eficiencia del sueño"],
        tecnicas: ["Restricción de sueño", "Titulación progresiva", "Registro de eficiencia"],
        descripcion: "Se introduce la restricción de sueño: limitar el tiempo en cama al tiempo real que duerme (calculado del diario: 5.5 horas). Ventana de sueño inicial: 1:00 AM a 7:00 AM. El objetivo es aumentar la presión de sueño acumulada para facilitar el inicio y mantenimiento. Carmen protesta: 'Pero si ya duermo poco'. Se explica el mecanismo: pasar más tiempo en cama con menos sueño aumenta la presión. Se proyecta que en 1-2 semanas dormirá más profundamente.",
        resultado: "Carmen acepta con mucha resistencia. Primera semana: más cansancio pero sí, se duerme más rápido.",
        tarea: "Seguir la ventana de sueño estrictamente. Registrar eficiencia diaria.",
      },
      {
        numero: 4,
        titulo: "Reestructuración cognitiva sobre el sueño",
        objetivos: ["Modificar creencias disfuncionales sobre el sueño", "Reducir ansiedad anticipatoria"],
        tecnicas: ["Registro de creencias", "Cuestionamiento socrático", "Experimentos conductuales"],
        descripcion: "Eficiencia de sueño subida al 75%. Se trabajan las creencias: '¿Qué evidencia hay de que necesitas exactamente 8 horas? ¿Has funcionado con menos alguna vez?' Se trabaja la catastrofización: 'Cuando dormiste 5 horas, ¿realmente no pudiste dar clase? ¿Qué pasó realmente?' Se introduce el concepto de 'paradoja del esfuerzo': cuanto más te esfuerzas en dormir, más te activas. Se practica la 'intención paradójica': acostarse intentando mantenerse despierta.",
        resultado: "Carmen se da cuenta de que ha sobrevivido muchos días con poco sueño. La creencia 'sin 8 horas el día es un desastre' pierde fuerza.",
        tarea: "Practicar intención paradójica. Ampliar ventana de sueño a 6 horas (12:30 AM a 7:00 AM).",
      },
      {
        numero: 5,
        titulo: "Manejo de la activación nocturna y preocupaciones",
        objetivos: ["Reducir la activación cognitiva nocturna", "Técnicas de desactivación"],
        tecnicas: ["Tiempo de preocupación", "Mindfulness del sueño", "Técnica de 'parar el tren'"],
        descripcion: "Se trabaja la activación cognitiva nocturna: el cerebro de Carmen 'repasa' listas de tareas y preocupaciones en cuanto apaga la luz. Se introduce el 'tiempo de preocupación' programado: 30 minutos al atardecer para escribir preocupaciones y planes. Si aparecen de noche: 'Ya me preocupé de esto, ahora no es el momento'. Se practica la técnica de la imagen mental tranquilizadora para interrumpir el ruido mental. Eficiencia de sueño: 82%.",
        resultado: "Carmen reporta que el tiempo de preocupación programado 'atrapa' muchas preocupaciones antes de la noche.",
        tarea: "Mantener el tiempo de preocupación diario. Ampliar ventana: 12:00 AM a 7:00 AM.",
      },
      {
        numero: 6,
        titulo: "Consolidación y prevención de recaídas",
        objetivos: ["Consolidar los logros", "Planificar el mantenimiento"],
        tecnicas: ["Revisión de progresos", "Plan de respuesta ante recaída", "Alta gradual"],
        descripcion: "Eficiencia de sueño: 88%. Latencia de inicio: 15 minutos. Despertares nocturnos: 1 breve. Carmen ya no tiene ansiedad anticipatoria. Se trabaja la prevención de recaídas: 'Una noche mala no es una recaída. El problema sería volver a las estrategias antiguas.' Se diseña el plan: si aparecen 2-3 noches malas seguidas, volver temporalmente a la restricción de sueño. Se da de alta con seguimiento a 1 mes.",
        resultado: "Alta terapéutica exitosa. Carmen describe el cambio como 'haber recuperado mi vida nocturna'.",
        tarea: "Mantener horario de sueño regular. Evitar siestas largas. Aplicar el plan de respuesta ante noches malas.",
      },
    ],
    resultados: "Eficiencia de sueño de 55% a 88%. Latencia de inicio de 90 minutos a 15 minutos. Remisión de la ansiedad anticipatoria. Suspensión de ayudas para el sueño.",
    aprendizajesClinicos: [
      "La restricción de sueño es la técnica más potente de la TCC-I pero genera mucha resistencia inicial: hay que prepararla bien",
      "La 'paradoja del esfuerzo' es un concepto clave: el intento de control del sueño es el principal mantenedor del insomnio",
      "El control de estímulos (cama = sueño) recondiciona la asociación cama-activación que se ha establecido con el tiempo",
      "Las creencias disfuncionales sobre las 'necesidades de sueño' son fundamentales: muchos pacientes funcionan mejor de lo que creen con menos horas",
    ],
  },
  {
    id: "manejo-ira",
    titulo: "Trastorno de Manejo de la Ira: El caso de Rodrigo",
    diagnostico: "Trastorno Explosivo Intermitente (F63.81) / Problemas de regulación emocional",
    paciente: "Rodrigo M.",
    edad: 38,
    sexo: "Hombre",
    totalSesiones: 8,
    resumen: "Rodrigo acude por explosiones de ira en el entorno laboral y familiar que están dañando sus relaciones. El tratamiento combina identificación de señales de alerta, reestructuración cognitiva de pensamientos de injusticia, técnicas de regulación emocional y entrenamiento en asertividad.",
    presentacion: "Rodrigo acude por indicación de su pareja, que le ultimó buscar ayuda tras un episodio en que golpeó la mesa y rompió objetos durante una discusión. Ingeniero de 38 años, describe explosiones de ira 'de la nada' en el trabajo (con subordinados y superiores) y en casa. Tras los episodios siente vergüenza y arrepentimiento intensos. Describe la ira como 'un volcán que estalla sin aviso'. No hay violencia física hacia personas. Patrón desde la adolescencia, intensificado en los últimos 2 años coincidiendo con un ascenso que trajo más responsabilidad.",
    formulacionCognitiva: {
      eventosVitales: "Padre autoritario que resolvía conflictos con gritos. Nunca aprendió a identificar ni expresar emociones de forma adaptativa. El modelo aprendido era: frustración → explosión → resolución. Ascenso laboral reciente con alta carga de responsabilidad.",
      creenciasNucleares: [
        "La gente es incompetente e irresponsable",
        "Si alguien me falta al respeto, debo responder con fuerza",
        "La debilidad se paga cara",
      ],
      supuestosDisfuncionales: [
        "Si no reacciono con fuerza ante las injusticias, me pisotearán",
        "Las personas competentes hacen las cosas bien a la primera",
        "La ira es una respuesta legítima y efectiva ante la injusticia",
      ],
      pensamientosAutomaticos: [
        "¿Cómo puede ser tan incompetente?",
        "Me está faltando al respeto deliberadamente",
        "No voy a aguantar esto",
        "Todo recae sobre mí, nadie hace nada bien",
      ],
      conductas: [
        "Explosiones verbales",
        "Conductas agresivas con objetos",
        "Rumiación sobre injusticias",
        "Evitación posterior por vergüenza",
        "Hipervigilancia ante señales de falta de respeto",
      ],
      emocionesPrevalentes: ["Ira intensa", "Frustración", "Vergüenza posterior", "Resentimiento crónico"],
    },
    objetivosTerapeuticos: [
      "Identificar las señales de alerta tempranas de la ira",
      "Interrumpir el ciclo de escalada antes de la explosión",
      "Reestructurar las interpretaciones de injusticia/falta de respeto",
      "Aprender a expresar la ira de forma asertiva",
    ],
    sesiones: [
      {
        numero: 1,
        titulo: "Evaluación y psicoeducación sobre la ira",
        objetivos: ["Evaluar el patrón de ira", "Establecer alianza terapéutica sin culpabilizar"],
        tecnicas: ["Entrevista motivacional", "Psicoeducación", "Modelo ABC de la ira"],
        descripcion: "Se evalúa el patrón con cuidado: Rodrigo espera ser juzgado y llega a la defensiva. Se valida que la ira tiene una función legítima (señal de injusticia o amenaza) pero el problema es su intensidad y forma de expresión. Se introduce el modelo ABC: no son las situaciones las que generan la ira explosiva, sino las interpretaciones. Se traza el mapa de la ira de Rodrigo: disparadores, pensamientos, sensaciones físicas, conducta, consecuencias.",
        resultado: "Rodrigo se muestra sorprendido de que sus interpretaciones sean el núcleo del problema. Alianza terapéutica sólida al sentirse respetado, no juzgado.",
        tarea: "Registrar los próximos episodios de ira con: situación, nivel de ira (0-10), pensamientos exactos, conducta, consecuencias.",
      },
      {
        numero: 2,
        titulo: "Señales de alerta y termómetro de la ira",
        objetivos: ["Identificar las señales físicas y cognitivas tempranas", "Crear el termómetro de la ira personalizado"],
        tecnicas: ["Termómetro de ira", "Conciencia interoceptiva", "Plan de detección temprana"],
        descripcion: "Se construye el termómetro de ira personalizado (0-10): Rodrigo identifica que a nivel 3 empieza la tensión de mandíbula; a nivel 5 hay pensamientos de injusticia recurrentes; a nivel 7 siente calor en cara y el pensamiento 'voy a explotar'. La clave es intervenir en el nivel 3-4, antes de que la escalada sea irreversible. Se diseñan señales de alerta personalizadas.",
        resultado: "Rodrigo nunca había identificado las fases de la escalada. Descubrir que hay señales tempranas le da una ventana de intervención.",
        tarea: "Esta semana: detectar cuándo llega al nivel 4 y registrarlo antes de que escale.",
      },
      {
        numero: 3,
        titulo: "Tiempo fuera y desactivación fisiológica",
        objetivos: ["Aprender a interrumpir la escalada", "Técnicas de regulación fisiológica"],
        tecnicas: ["Tiempo fuera", "Respiración diafragmática", "Actividad física como regulación"],
        descripcion: "Se trabaja el 'tiempo fuera' como herramienta de intervención temprana: cuando llega al nivel 5, pedir 15-20 minutos para regularse antes de continuar. Se distingue del 'escape' (huir del conflicto) del 'tiempo fuera' (volver con más recursos). Se practica respiración 4-4-6 en sesión. Rodrigo identifica que el ejercicio físico intenso es su mejor regulador fisiológico.",
        resultado: "Rodrigo aplica el tiempo fuera en casa con resultados. Primer episodio en el que 'abortó' la explosión antes de que ocurriera.",
        tarea: "Practicar el tiempo fuera en situaciones de nivel 5+. Registrar el resultado.",
      },
      {
        numero: 4,
        titulo: "Reestructuración cognitiva de los pensamientos de injusticia",
        objetivos: ["Cuestionar las interpretaciones de incompetencia e irrespeto", "Generar alternativas"],
        tecnicas: ["Cuestionamiento socrático", "Perspectiva del otro", "Técnica de la intención"],
        descripcion: "Se trabajan los pensamientos más frecuentes: '¿Me está faltando al respeto deliberadamente?' Se introduce la 'técnica de la intención': ¿está el subordinado siendo negligente deliberadamente o simplemente no sabe, está saturado, tiene otra forma de trabajar? Rodrigo reconoce que proyecta intención maliciosa donde probablemente hay incompetencia sin intención. Se trabaja la diferencia entre estándares altos (legítimos) y exigencia absolutista ('debe ser perfecto o es inaceptable').",
        resultado: "Rodrigo empieza a ver que sus interpretaciones de 'falta de respeto deliberada' raramente son correctas.",
        tarea: "Antes de reaccionar con ira, preguntarse: '¿Está siendo malicioso o simplemente incompetente/diferente?'",
      },
      {
        numero: 5,
        titulo: "Comunicación asertiva de la ira",
        objetivos: ["Aprender a expresar la ira de forma adaptativa", "Entrenamiento en asertividad"],
        tecnicas: ["Modelado", "Role-play", "Feedback inmediato"],
        descripcion: "Se trabaja la diferencia entre agresividad (explosión) y asertividad (expresión clara de necesidades). Se introduce la fórmula asertiva: 'Cuando ocurre X (conducta específica), yo siento Y (emoción), y necesito Z (petición concreta).' Se hacen role-plays de situaciones reales del trabajo de Rodrigo: el subordinado que no entregó el informe, el jefe que cambió el proyecto sin avisar. Se graban y se revisan juntos.",
        resultado: "Rodrigo descubre que puede expresar su malestar de forma que obtiene mejores resultados que con la explosión.",
        tarea: "Esta semana: usar la fórmula asertiva en una situación laboral real.",
      },
      {
        numero: 6,
        titulo: "Trabajar el resentimiento crónico",
        objetivos: ["Reducir la rumiación sobre injusticias pasadas", "Técnicas de resolución del resentimiento"],
        tecnicas: ["Técnica de la carta sin enviar", "Perspectiva temporal", "Práctica del perdón como liberación"],
        descripcion: "Rodrigo reporta que entre los episodios vive con un resentimiento crónico hacia varias personas. Se trabaja la rumiación: ¿qué función tiene seguir 'repasando' la injusticia? ¿Le ayuda a resolver algo o solo le activa? Se introduce la carta sin enviar a una persona con quien tiene resentimiento (su jefe anterior). No para perdonar moralmente sino para liberarse del peso.",
        resultado: "Rodrigo escribe la carta y llora por primera vez en la terapia. Reconoce que el resentimiento le consume energía.",
        tarea: "Escribir carta sin enviar a la segunda persona de su lista de resentimientos.",
      },
      {
        numero: 7,
        titulo: "Aplicación en situaciones de alta intensidad",
        objetivos: ["Practicar todas las herramientas en situaciones difíciles", "Consolidar el repertorio"],
        tecnicas: ["Role-play de alta intensidad", "Revisión de episodios reales", "Ajuste de estrategias"],
        descripcion: "Se revisan los últimos episodios de ira. Rodrigo tuvo un episodio moderado (nivel 6) pero aplicó el tiempo fuera y luego la comunicación asertiva. Primera vez que resuelve un conflicto sin explotar y con un resultado positivo. Se analizan qué funcionó y qué ajustar. Se ensayan las situaciones más temidas: revisión de rendimiento anual con su jefe.",
        resultado: "Rodrigo describe sentir que 'tiene herramientas'. La frecuencia de explosiones: de 3-4 semanales a 1 en el último mes.",
        tarea: "Afrontar la revisión de rendimiento usando las herramientas.",
      },
      {
        numero: 8,
        titulo: "Consolidación y plan de mantenimiento",
        objetivos: ["Revisar progreso global", "Plan de mantenimiento y prevención de recaídas"],
        tecnicas: ["Balance terapéutico", "Carta al yo futuro", "Plan de acción ante recaídas"],
        descripcion: "Revisión global: explosiones reducidas de 3-4 semanales a 0 en las últimas 3 semanas. Rodrigo y su pareja reportan mejora significativa en el hogar. La revisión laboral fue bien. Se trabaja el plan de mantenimiento: practicar asertividad como hábito, no solo en crisis. Señales de alerta de recaída: aumento del resentimiento crónico, reducción del ejercicio físico.",
        resultado: "Alta terapéutica. Seguimiento a 2 meses.",
        tarea: "Mantener el ejercicio físico como regulador. Practicar la asertividad proactivamente, no solo reactivamente.",
      },
    ],
    resultados: "Reducción de explosiones de ira de 3-4 semanales a 0 en las últimas 3 semanas. Mejora significativa en relaciones laborales y de pareja. Rodrigo describe sentirse 'en control' por primera vez.",
    aprendizajesClinicos: [
      "La alianza terapéutica con pacientes con problemas de ira requiere validación antes que confrontación: llegan a la defensiva",
      "El termómetro de ira y la identificación de señales tempranas es la intervención más práctica e inmediata",
      "La distinción entre intención maliciosa y incompetencia sin intención es cognitivamente muy potente para estos pacientes",
      "El resentimiento crónico como mantenedor de la ira requiere trabajo específico más allá de los episodios agudos",
    ],
  },
  {
    id: "duelo-complicado",
    titulo: "Duelo Complicado: El caso de Rosa",
    diagnostico: "Trastorno de Duelo Prolongado (F43.81)",
    paciente: "Rosa C.",
    edad: 55,
    sexo: "Mujer",
    totalSesiones: 10,
    resumen: "Rosa acude 2 años después de la muerte de su marido con duelo complicado: incapacidad para aceptar la pérdida, evitación del dolor, retirada social y pérdida de sentido vital. El tratamiento combina elementos de TCC, terapia de duelo y ACT.",
    presentacion: "Rosa acude derivada por su médico de familia. Su marido falleció hace 2 años de un infarto súbito. Describe que 'el tiempo no ha curado nada': sigue llorando diariamente, no puede entrar en el cuarto del marido, evita los lugares donde iban juntos, ha rechazado todas las invitaciones sociales y describe la vida sin él como 'sin sentido'. Ha dejado de hacer todas las actividades que disfrutaba. Sus hijos están preocupados. No hay ideación suicida activa, aunque sí deseos de 'no estar aquí'.",
    formulacionCognitiva: {
      eventosVitales: "Matrimonio de 30 años con alta dependencia emocional y funcional. El marido era su principal red de apoyo. Rosa nunca trabajó fuera del hogar: identidad construida alrededor del rol de esposa. Muerte súbita sin despedida.",
      creenciasNucleares: [
        "Sin él no soy nadie",
        "Avanzar significa olvidarle y traicionarle",
        "No merezco ser feliz si él no está",
      ],
      supuestosDisfuncionales: [
        "Si dejo de sufrir, significa que no le quería suficientemente",
        "Debo guardar luto indefinidamente para honrar su memoria",
        "La vida sin él no puede tener sentido",
      ],
      pensamientosAutomaticos: [
        "¿Para qué, si él no está?",
        "Si salgo y me divierto, le estoy traicionando",
        "Nunca voy a superarlo",
        "Estoy sola para siempre",
      ],
      conductas: [
        "Evitación de objetos, lugares y personas asociadas al marido",
        "Aislamiento social total",
        "Abandono de actividades placenteras",
        "Rituales de mantenimiento del duelo (ver fotos horas, no cambiar nada)",
        "Hablar en presente sobre él como si siguiera vivo",
      ],
      emocionesPrevalentes: ["Tristeza profunda", "Soledad", "Culpa", "Vacío existencial"],
    },
    objetivosTerapeuticos: [
      "Procesar el dolor de la pérdida de forma activa y no evitativa",
      "Modificar las creencias sobre lo que significa avanzar",
      "Reconstruir una identidad y un sentido vital más allá del rol de esposa",
      "Reintegrarse gradualmente en la vida social",
    ],
    sesiones: [
      {
        numero: 1,
        titulo: "Acogida, evaluación y validación del duelo",
        objetivos: ["Crear espacio seguro", "Evaluar características del duelo", "Descartar riesgo"],
        tecnicas: ["Escucha activa", "Evaluación del duelo complicado", "Validación emocional"],
        descripcion: "Se crea un espacio de escucha sin prisas. Rosa llora durante casi toda la sesión mientras relata la muerte de su marido. Se valida profundamente el dolor: perder a su compañero de 30 años es una de las pérdidas más difíciles. Se evalúa el duelo complicado (criterios de duelo prolongado: duración, deterioro funcional, evitación). Se descarta ideación suicida activa. No se introduce ninguna intervención: esta sesión es solo escuchar y crear alianza.",
        resultado: "Rosa describe sentirse 'entendida por primera vez'. No había podido hablar del marido sin que los demás cambiaran de tema.",
        tarea: "Traer una foto del marido a la próxima sesión.",
      },
      {
        numero: 2,
        titulo: "Psicoeducación sobre el duelo y el duelo complicado",
        objetivos: ["Normalizar el dolor", "Explicar la diferencia entre duelo normal y complicado"],
        tecnicas: ["Psicoeducación", "Modelo de las tareas del duelo de Worden", "Metáfora del duelo"],
        descripcion: "Se trabaja con la foto del marido: Rosa habla de él, de cómo era, de lo que compartieron. Se introduce el modelo de las tareas del duelo: aceptar la realidad de la pérdida, elaborar el dolor, adaptarse al mundo sin el ser querido, encontrar una conexión duradera mientras se emprende una nueva vida. Se explica que el duelo complicado no es un fracaso sino que Rosa está atascada en la primera tarea (aceptación) y evitando la segunda (elaborar el dolor).",
        resultado: "Rosa entiende que no está 'loca' sino atascada. La idea de que avanzar no significa olvidar es nueva para ella.",
        tarea: "Escribir una lista de 10 cosas que su marido quería para ella.",
      },
      {
        numero: 3,
        titulo: "Trabajar la evitación del dolor",
        objetivos: ["Reducir la evitación del dolor", "Exposición gradual a recuerdos"],
        tecnicas: ["Exposición a recuerdos", "Técnica de la silla vacía", "Escritura expresiva"],
        descripcion: "Rosa trajo la lista: su marido quería que fuera feliz, que no se quedara sola, que siguiera viajando. Se trabaja la paradoja: evitar el dolor lo perpetúa; atravesarlo lo transforma. Se introduce la exposición gradual a recuerdos: empezar con recuerdos neutros del marido, luego positivos, luego el momento de su muerte. Rosa entra en el cuarto del marido por primera vez en 2 años en casa (tarea) y lo describe en sesión.",
        resultado: "Rosa llora intensamente pero describe el llanto como 'diferente, más limpio'.",
        tarea: "Entrar en el cuarto del marido 5 minutos al día. Escribir un recuerdo feliz de él cada día.",
      },
      {
        numero: 4,
        titulo: "Reestructuración de 'avanzar es traicionar'",
        objetivos: ["Modificar la creencia central que bloquea el duelo"],
        tecnicas: ["Cuestionamiento socrático", "Perspectiva del ser querido", "Experimento cognitivo"],
        descripcion: "Se trabaja directamente la creencia 'si avanzo, le traiciono'. Preguntas clave: '¿Qué hubiera querido él para ti?' (La lista de la sesión anterior). '¿Amar a alguien significa querer que sufra indefinidamente?' '¿Qué diferencia hay entre olvidar a alguien y encontrar una razón para seguir viviendo?' Se introduce la idea del amor que continúa: se puede amar a alguien que ya no está y aun así construir una vida.",
        resultado: "Rosa llora y dice: 'Él me habría dicho que dejara de hacer el tonto y saliera a vivir'. Gran momento de apertura.",
        tarea: "Escribirle una carta al marido contándole cómo está y preguntándole qué le diría.",
      },
      {
        numero: 5,
        titulo: "Reconstrucción de identidad",
        objetivos: ["Explorar quién es Rosa más allá del rol de esposa"],
        tecnicas: ["Mapa de identidad", "Exploración de valores", "Activación conductual gradual"],
        descripcion: "Se trabaja la identidad: Rosa construyó toda su identidad alrededor de ser la esposa de Juan. Sin ese rol, se siente inexistente. Se hace un mapa de identidad: ¿Quién es Rosa además de esposa? ¿Qué le gustaba antes de casarse? ¿Qué intereses, talentos, valores tiene? Rosa recuerda que le encantaba pintar, que tenía amigas íntimas, que soñaba con viajar a Italia. Se diseña plan de activación conductual muy gradual.",
        resultado: "Rosa describe el ejercicio como 'encontrarse a sí misma'. No había pensado en ella como persona independiente en décadas.",
        tarea: "Esta semana: llamar a una amiga a quien no ha llamado desde la muerte del marido.",
      },
      {
        numero: 6,
        titulo: "Reintegración social gradual",
        objetivos: ["Reanudar conexiones sociales", "Trabajar la culpa por disfrutar"],
        tecnicas: ["Exposición social gradual", "Reestructuración de la culpa", "Experimentos conductuales"],
        descripcion: "Rosa llamó a su amiga Carmen: fue bien, lloró un poco, pero describe haber sentido 'calor humano por primera vez'. Se trabaja la culpa que sintió al reírse durante la llamada: '¿Está mal reír? ¿Te imaginas a tu marido enfadándose porque te reíste con Carmen?' Se diseña una escalera de reintegración social muy gradual: café con Carmen, cena familiar, visita al mercado donde iban.",
        resultado: "Reducción del aislamiento. Rosa reporta que las conversaciones con Carmen le 'recuerdan que existe'.",
        tarea: "Café con Carmen esta semana. Entrar en el mercado del barrio.",
      },
      {
        numero: 7,
        titulo: "Encontrar sentido y conexión duradera",
        objetivos: ["Integrar la pérdida en la narrativa vital", "Encontrar conexión simbólica con el marido"],
        tecnicas: ["Construcción de sentido", "Ritual de conexión", "Carta de integración"],
        descripcion: "Se trabaja la cuarta tarea del duelo: encontrar una conexión duradera mientras se construye una nueva vida. No significa olvidar sino encontrar una forma de llevar al marido dentro de sí en lugar de aferrarse a su ausencia. Se propone un ritual de conexión diario: hablar con él internamente, preguntarle qué haría él. Se trabaja el sentido: ¿qué quiere hacer Rosa con el tiempo que le queda? ¿Qué legado quiere dejar?",
        resultado: "Rosa describe que el marido 'sigue con ella' de una forma diferente: como una presencia interior, no como una ausencia lacerante.",
        tarea: "Escribir sobre qué quiere hacer con los próximos 5 años de vida.",
      },
      {
        numero: 8,
        titulo: "Proyecto vital post-pérdida",
        objetivos: ["Construir un proyecto vital con sentido", "Activación de áreas de vida abandonadas"],
        tecnicas: ["Activación conductual", "Planificación de objetivos", "Valores en acción"],
        descripcion: "Rosa trajo un texto de 3 páginas sobre lo que quiere hacer: retomar la pintura, hacer el viaje a Italia que siempre postergaron, volver a ver a sus amigas regularmente, pasar más tiempo con sus nietos. Se trabajan los obstáculos cognitivos: 'Es egoísta disfrutar sin él'. Se diseña un plan concreto para retomar la pintura (se apunta a un taller).",
        resultado: "Rosa se apunta al taller de pintura. Es el primer compromiso vital que adquiere en 2 años.",
        tarea: "Asistir al primer día del taller de pintura.",
      },
      {
        numero: 9,
        titulo: "Integración del duelo",
        objetivos: ["Revisar el proceso de duelo", "Consolidar la nueva narrativa"],
        tecnicas: ["Revisión narrativa", "Carta de despedida y continuación"],
        descripcion: "Rosa fue al taller de pintura y lo describe como 'volver a ser yo'. Revisión del proceso: de no poder entrar en el cuarto del marido a hablar de él con afecto y seguir adelante. Se trabaja la carta de integración: una carta al marido contándole que va a estar bien, que le lleva dentro, que va a vivir la vida que él también habría querido para ella.",
        resultado: "Rosa lee la carta en sesión. Llora pero con una expresión diferente: paz. 'Siento que le he despedido de verdad'.",
        tarea: "Continuar con el taller. Planificar el viaje a Italia para el año próximo.",
      },
      {
        numero: 10,
        titulo: "Cierre terapéutico",
        objetivos: ["Reconocer el trabajo realizado", "Planificar el mantenimiento"],
        tecnicas: ["Balance terapéutico", "Plan de cuidados", "Alta"],
        descripcion: "Revisión de todo el camino recorrido. Rosa describe el cambio: 'Vine pensando que me ibais a decir que pasara página. En cambio, me enseñasteis a llevarle conmigo mientras sigo viviendo.' Se trabaja el plan de mantenimiento: qué hacer en las fechas difíciles (aniversarios, cumpleaños), cómo manejar las olas de duelo que aún aparecerán.",
        resultado: "Alta terapéutica. Rosa está asistiendo al taller de pintura, ha retomado la relación con sus amigas y planifica el viaje a Italia.",
        tarea: "Vivir. Y cuando sea difícil, recordar que el amor y la vida no son incompatibles.",
      },
    ],
    resultados: "Remisión del duelo complicado. Recuperación de identidad propia. Reintegración social. Retoma de actividades placenteras. Planificación del primer viaje desde la muerte del marido.",
    aprendizajesClinicos: [
      "El duelo complicado requiere trabajar explícitamente la creencia 'avanzar = traicionar': es el núcleo cognitivo más frecuente",
      "Dar espacio al dolor antes de cualquier intervención es terapéutico en sí mismo: muchos pacientes no han podido hablar de la pérdida",
      "La reconstrucción de identidad es fundamental cuando la persona construyó su yo alrededor del rol perdido",
      "El modelo de tareas del duelo de Worden es más útil que el de etapas porque orienta la intervención hacia acciones concretas",
    ],
  },
  {
    id: "ptsd-trauma",
    titulo: "PTSD/Trauma: El caso de Ana",
    diagnostico: "Trastorno de Estrés Postraumático (F43.1)",
    paciente: "Ana L.",
    edad: 29,
    sexo: "Mujer",
    totalSesiones: 12,
    resumen: "Ana consulta por PTSD tras un accidente de tráfico grave hace 8 meses. Presenta flashbacks, hipervigilancia, evitación de conducir y pesadillas. El tratamiento sigue el protocolo de Terapia de Procesamiento Cognitivo (CPT) combinado con técnicas de estabilización.",
    presentacion: "Ana sufrió un accidente de tráfico grave siendo pasajera: el conductor perdió el control, el coche volcó y Ana quedó atrapada durante 20 minutos. Físicamente se recuperó. Psicológicamente: desde entonces tiene flashbacks del accidente varias veces al día, pesadillas nocturnas, evita subir a cualquier vehículo (se ha mudado cerca del trabajo para ir andando), está permanentemente alerta (se sobresalta con cualquier ruido), se siente 'separada' de la vida y ha dejado de quedar con amigos.",
    formulacionCognitiva: {
      eventosVitales: "El accidente ocurrió en un momento de su vida de alta vulnerabilidad (ruptura reciente, estrés laboral). No tuvo acompañamiento psicológico inmediato. Los primeros meses minimizó los síntomas ('debería haberlo superado ya').",
      creenciasNucleares: [
        "El mundo es fundamentalmente peligroso",
        "No puedo confiar en mi capacidad de estar segura",
        "Fui una estúpida por subir a ese coche",
      ],
      supuestosDisfuncionales: [
        "Si pienso en el accidente, será como revivirlo y no podré soportarlo",
        "Si conduzco o viajo en coche, tendré otro accidente",
        "Debería haber podido prevenir o manejar mejor el accidente",
      ],
      pensamientosAutomaticos: [
        "¿Y si vuelve a pasar?",
        "Fue culpa mía por no haber protestado cuando vi que conducía rápido",
        "Nunca volveré a ser la de antes",
        "Estoy rota",
      ],
      conductas: [
        "Evitación de vehículos",
        "Evitación de recuerdos y conversaciones sobre el accidente",
        "Hipervigilancia constante",
        "Aislamiento social",
        "Uso de rutas alternativas para evitar el lugar del accidente",
      ],
      emocionesPrevalentes: ["Miedo", "Culpa", "Vergüenza", "Entumecimiento emocional", "Irritabilidad"],
    },
    objetivosTerapeuticos: [
      "Reducir la frecuencia e intensidad de los flashbacks y pesadillas",
      "Procesar las memorias traumáticas y modificar las cogniciones postraumáticas",
      "Eliminar la evitación y recuperar la movilidad",
      "Reconstruir el sentido de seguridad y confianza",
    ],
    sesiones: [
      {
        numero: 1,
        titulo: "Evaluación, psicoeducación y estabilización",
        objetivos: ["Evaluar síntomas PTSD", "Introducir psicoeducación sobre el trauma", "Técnicas de estabilización"],
        tecnicas: ["PCL-5", "Psicoeducación sobre PTSD", "Técnica del lugar seguro"],
        descripcion: "Se evalúa con PCL-5 (puntuación: 52/80). Se explica el PTSD como una respuesta normal del sistema nervioso a una experiencia anormal: el cerebro no ha 'archivado' el recuerdo como pasado. Se introduce la ventana de tolerancia: trabajaremos dentro de ella. Se entrena el 'lugar seguro': Ana visualiza la playa de su infancia con detalle sensorial. Se practica como recurso de regulación.",
        resultado: "Ana se siente validada: no está 'loca', tiene una respuesta documentada con tratamiento efectivo.",
        tarea: "Practicar el lugar seguro 10 minutos al día. Anotar en qué momentos los flashbacks son más intensos.",
      },
      {
        numero: 2,
        titulo: "Grounding y técnicas de anclaje",
        objetivos: ["Ampliar el repertorio de técnicas de estabilización", "Aprender a manejar la activación"],
        tecnicas: ["Técnica 5-4-3-2-1", "Grounding corporal", "Respiración reguladora"],
        descripcion: "Se entrenan técnicas de grounding para usar cuando aparecen flashbacks: 5-4-3-2-1 (5 cosas que ve, 4 que toca, 3 que escucha, 2 que huele, 1 que saborea). Técnica de anclaje con los pies en el suelo. Se practica en sesión provocando brevemente la imagen del accidente y luego aplicando grounding. Ana aprende que puede interrumpir el flashback.",
        resultado: "Ana aplica 5-4-3-2-1 durante un flashback en el metro y lo interrumpe por primera vez.",
        tarea: "Usar grounding cada vez que aparezca un flashback. Registrar efectividad.",
      },
      {
        numero: 3,
        titulo: "Introducción al procesamiento cognitivo",
        objetivos: ["Introducir el modelo de CPT", "Identificar los 'puntos de atasco'"],
        tecnicas: ["Psicoeducación CPT", "Identificación de puntos de atasco", "Hoja de impacto inicial"],
        descripcion: "Se introduce el modelo de CPT: el PTSD se mantiene por cogniciones postraumáticas que interrumpen el procesamiento natural del trauma. Los 'puntos de atasco' son pensamientos que bloquean el procesamiento: culpa, vergüenza, falta de control, peligro permanente. Ana completa la 'hoja de impacto': escribe cómo el accidente ha cambiado su visión de sí misma, del mundo y del futuro. Identifica su mayor punto de atasco: 'Fue culpa mía'.",
        resultado: "Ana nunca había escrito sobre el impacto del accidente. Proceso catártico e informativo.",
        tarea: "Escribir un relato detallado del accidente, incluyendo pensamientos y emociones.",
      },
      {
        numero: 4,
        titulo: "Lectura del relato traumático y procesamiento",
        objetivos: ["Exposición a la memoria traumática dentro de la ventana de tolerancia"],
        tecnicas: ["Lectura del relato", "Procesamiento emocional", "Hoja ABC"],
        descripcion: "Ana lee su relato del accidente en sesión. Nivel de angustia: 8/10. Se aplican técnicas de regulación cuando sube de 7. Se trabaja el relato con preguntas de procesamiento: ¿Qué es lo más difícil de esto? ¿Qué pensabas en el momento? Se trabaja la diferencia entre 'recordar' (el pasado) y 'estar en peligro ahora'. Ana se da cuenta de que puede recordar sin que la mate.",
        resultado: "Ana termina la sesión agotada pero con sensación de logro: 'Pude contarlo sin disociarme completamente'.",
        tarea: "Leer el relato en casa una vez al día hasta la próxima sesión.",
      },
      {
        numero: 5,
        titulo: "Trabajar la culpa postraumática",
        objetivos: ["Reestructurar el pensamiento 'fue culpa mía'"],
        tecnicas: ["Cuestionamiento socrático", "Análisis de responsabilidad", "Perspectiva temporal"],
        descripcion: "Se trabaja directamente el punto de atasco de la culpa. Técnica de la tarta de responsabilidad: ¿Quién más tuvo responsabilidad en el accidente? El conductor (velocidad excesiva), el estado de la carretera, la lluvia. Ana asigna porcentajes: conductor 70%, carretera 15%, condiciones 10%, ella 5%. Pregunta clave: '¿Habrías podido predecir con certeza lo que iba a pasar?' 'Con la información que tenías entonces, ¿qué hubiera hecho cualquier persona razonable?'",
        resultado: "Reducción significativa de la culpa. Ana reconoce por primera vez que no podía haber previsto ni controlado el accidente.",
        tarea: "Escribir una carta a la Ana del momento del accidente desde la perspectiva de hoy.",
      },
      {
        numero: 6,
        titulo: "Trabajar el sentido de seguridad",
        objetivos: ["Reestructurar 'el mundo es fundamentalmente peligroso'"],
        tecnicas: ["Evidencia estadística", "Distinguir probabilidad de posibilidad", "Escalera de seguridad"],
        descripcion: "Se trabaja la creencia 'viajar en coche es peligroso'. Se introducen estadísticas: probabilidad de accidente grave en un trayecto concreto. Se trabaja la distinción entre posibilidad (todo es posible) y probabilidad (¿cuánto probable es?). Se diseña una jerarquía de exposición gradual a vehículos: ver coches desde la calle, sentarse en un coche parado, coche en movimiento corto, trayecto en taxi.",
        resultado: "Ana acuerda hacer el primer paso: sentarse en el coche de su hermana aparcado.",
        tarea: "Sentarse en el coche de su hermana aparcado durante 10 minutos.",
      },
      {
        numero: 7,
        titulo: "Exposición gradual a vehículos",
        objetivos: ["Eliminar la evitación de vehículos"],
        tecnicas: ["Exposición in vivo", "Registro SUDS", "Prevención de respuesta"],
        descripcion: "Ana se sentó en el coche aparcado: SUDS máximo 6, bajó a 3 en 15 minutos. Gran logro. Se avanza en la jerarquía: coche en movimiento en el aparcamiento. Ana va en el coche de su hermana al supermercado (5 minutos). SUDS 7, baja a 4. Se trabaja cognitivamente durante la exposición: '¿Qué está pasando ahora realmente? ¿Estás en peligro?'",
        resultado: "Primera vez en 8 meses que va en coche. Llora de alivio y de orgullo.",
        tarea: "Ir en autobús al trabajo 3 veces esta semana.",
      },
      {
        numero: 8,
        titulo: "Trabajar el entumecimiento emocional y el aislamiento",
        objetivos: ["Reducir el aislamiento social", "Reconectar con las emociones positivas"],
        tecnicas: ["Activación conductual", "Experimentos conductuales", "Reconexión con valores"],
        descripcion: "Ana va en autobús regularmente. Los flashbacks han reducido de 5-6 al día a 1-2. Se trabaja el aislamiento: Ana describe sentirse 'detrás de un cristal' en las interacciones sociales. Se introduce la activación conductual para reconectar con el placer: una cena con amigas. Se trabajan los pensamientos que aparecen: 'No soy la misma, no van a entenderme'.",
        resultado: "Ana cena con sus amigas por primera vez en meses. Describe momentos de 'sentirse ella de nuevo'.",
        tarea: "Quedar con amigas una vez más esta semana.",
      },
      {
        numero: 9,
        titulo: "Procesamiento del significado del trauma",
        objetivos: ["Integrar el trauma en la narrativa vital", "Trabajar el crecimiento postraumático"],
        tecnicas: ["Reescritura del relato", "Crecimiento postraumático", "Carta de integración"],
        descripcion: "Se reescribe el relato del accidente incluyendo lo que Ana ha aprendido, cómo ha cambiado y qué ha descubierto de sí misma. Se trabaja el crecimiento postraumático: ¿qué ha aprendido sobre sí misma, sobre lo que valora, sobre sus recursos? Ana reconoce que ha descubierto una fortaleza que no sabía que tenía.",
        resultado: "Ana describe el accidente como 'la peor cosa que me ha pasado y de la que más he aprendido'.",
        tarea: "Completar la hoja de impacto final (la misma de la sesión 3 para comparar).",
      },
      {
        numero: 10,
        titulo: "Consolidación y planificación del alta",
        objetivos: ["Revisar progresos", "Planificar mantenimiento y prevención de recaídas"],
        tecnicas: ["Comparación hoja de impacto", "Plan de recaídas", "Alta gradual"],
        descripcion: "PCL-5: 18/80 (de 52 a 18). Ana va en transporte público, ha retomado la vida social, los flashbacks son ocasionales y menos intensos. Se trabaja el plan de mantenimiento: qué hacer si los síntomas aumentan (aniversarios, ver accidentes en la TV), cómo usar las herramientas aprendidas.",
        resultado: "Alta terapéutica exitosa. Seguimiento a 1 y 6 meses.",
        tarea: "Vivir. Usar las herramientas cuando las necesite. Sabe que puede.",
      },
    ],
    resultados: "PCL-5 de 52 a 18 puntos. Remisión de flashbacks frecuentes. Recuperación del uso de transporte público. Reintegración social completa. Crecimiento postraumático.",
    aprendizajesClinicos: [
      "La estabilización antes del procesamiento es fundamental: pacientes sin recursos de regulación no pueden tolerar el trabajo con el trauma",
      "El trabajo con la culpa postraumática requiere la técnica de la tarta de responsabilidad: devuelve la perspectiva de forma muy concreta",
      "Los puntos de atasco son individuales: es fundamental identificar cuál es el principal para cada paciente",
      "El crecimiento postraumático no es un objetivo terapéutico sino una posibilidad: surge cuando el trauma se integra en la narrativa vital",
    ],
  },
  {
    id: "baja-autoestima",
    titulo: "Baja Autoestima: El caso de Lucía",
    diagnostico: "Trastorno de Personalidad con rasgos dependientes / Baja autoestima crónica",
    paciente: "Lucía P.",
    edad: 24,
    sexo: "Mujer",
    totalSesiones: 7,
    resumen: "Lucía acude por baja autoestima crónica, autocrítica intensa y dificultad para establecer límites en relaciones. El tratamiento trabaja la creencia nuclear de incompetencia, el autoconcepto negativo y el entrenamiento en autocompasión y asertividad.",
    presentacion: "Lucía es diseñadora gráfica de 24 años que acude por 'no sentirme suficiente'. Describe una autocrítica constante: nunca está satisfecha con su trabajo aunque los demás la elogien, pide disculpas constantemente, tiene dificultad para decir no, acepta relaciones en que se siente menospreciada por miedo al rechazo. En el trabajo, deja que sus compañeros se atribuyan sus ideas. No tiene claro lo que quiere porque 'siempre pienso que lo que quiero los demás no lo van a aprobar'.",
    formulacionCognitiva: {
      eventosVitales: "Criada con una madre muy crítica que comparaba constantemente a Lucía con su hermana mayor. Mensajes aprendidos: 'nunca es suficiente', 'hay que ganarse el amor'. No recuerda recibir elogios genuinos en la infancia.",
      creenciasNucleares: [
        "No soy suficiente",
        "No soy digna de amor ni de respeto",
        "Si muestro mis necesidades, seré rechazada",
      ],
      supuestosDisfuncionales: [
        "Si no soy perfecta, los demás se darán cuenta de que soy un fraude",
        "Para que me quieran, debo complacer siempre",
        "Mis necesidades y deseos son una carga para los demás",
      ],
      pensamientosAutomaticos: [
        "Esto que he hecho es una mierda",
        "Seguro que piensan que soy tonta",
        "No debería pedir eso, voy a molestar",
        "¿Quién soy yo para opinar?",
      ],
      conductas: [
        "Autocrítica constante",
        "Pedir disculpas excesivamente",
        "Dificultad para recibir elogios",
        "Incapacidad de decir no",
        "Dejar que otros se lleven el mérito de su trabajo",
        "Compararse constantemente con los demás",
      ],
      emocionesPrevalentes: ["Vergüenza", "Ansiedad social", "Tristeza", "Ira suprimida"],
    },
    objetivosTerapeuticos: [
      "Identificar y modificar la creencia nuclear 'no soy suficiente'",
      "Reducir la autocrítica y desarrollar la autocompasión",
      "Aprender a recibir elogios y reconocer logros propios",
      "Establecer límites asertivos en relaciones",
    ],
    sesiones: [
      {
        numero: 1,
        titulo: "Evaluación y formulación cognitiva",
        objetivos: ["Evaluar el patrón de baja autoestima", "Construir formulación compartida"],
        tecnicas: ["Entrevista clínica", "Flecha descendente", "Historia de la autoestima"],
        descripcion: "Se evalúa el patrón de baja autoestima con la técnica de la flecha descendente: '¿Qué pasaría si esto fuera verdad? ¿Y eso qué significaría?' Llegamos a la creencia nuclear: 'No soy suficiente'. Se recoge la historia: cuándo empezó, quién lo transmitió, cómo se ha mantenido. Lucía relata la relación con su madre: las comparaciones constantes, los logros nunca suficientes. Se normaliza: las creencias nucleares no son verdades sino aprendizajes.",
        resultado: "Lucía conecta por primera vez su presente con su historia: 'Es la voz de mi madre la que escucho'.",
        tarea: "Llevar un registro de la autocrítica durante una semana: ¿cuándo aparece?, ¿qué desencadena la voz crítica?",
      },
      {
        numero: 2,
        titulo: "Identificar el crítico interno y el yo compasivo",
        objetivos: ["Personificar y externalizar el crítico interno", "Introducir la autocompasión"],
        tecnicas: ["Silla del crítico interno", "Autocompasión de Neff", "Técnica del amigo compasivo"],
        descripcion: "Se trabaja el crítico interno como una voz aprendida, no como la verdad. Se le pone nombre y cara (Lucía lo llama 'la señora del dedo'). Se introduce la autocompasión: ¿cómo tratas a una amiga cuando comete un error? ¿Por qué no te tratas igual a ti? Se practica la técnica del amigo compasivo: escribir desde la perspectiva de un amigo que te quiere de forma incondicional.",
        resultado: "Lucía se rompe al darse cuenta de que jamás le hablaría a una amiga como se habla a sí misma.",
        tarea: "Cada vez que aparezca la autocrítica, preguntarse: '¿Le diría esto a mi mejor amiga?'",
      },
      {
        numero: 3,
        titulo: "Reestructuración de la creencia 'no soy suficiente'",
        objetivos: ["Cuestionar la creencia nuclear con evidencia"],
        tecnicas: ["Registro de logros y fortalezas", "Tarjeta de identidad positiva", "Experimento conductual"],
        descripcion: "Se trabaja la creencia 'no soy suficiente' con evidencia: ¿hay algún área de tu vida en que sí seas suficiente? Lucía identifica su trabajo (los clientes están satisfechos), sus amistades (sus amigas la valoran), su creatividad. Se construye una lista de logros y fortalezas reales. Se introduce la idea de que ser 'suficiente' no requiere ser perfecta: nadie es perfecto y todos son suficientes.",
        resultado: "Lucía dice: 'Nunca me había parado a listar lo que sí tengo'.",
        tarea: "Añadir un logro o fortaleza a la lista cada día durante una semana.",
      },
      {
        numero: 4,
        titulo: "Trabajar la dificultad para recibir elogios",
        objetivos: ["Aprender a recibir elogios sin descartarlos ni minimizarlos"],
        tecnicas: ["Análisis de descuentos", "Práctica de recibir elogios", "Experimentos conductuales"],
        descripcion: "Se trabaja el patrón: cuando alguien le da un elogio, Lucía lo minimiza ('fue suerte') o lo descarta ('está siendo amable'). Se analiza la función: mantiene la creencia nuclear al filtrar la información positiva. Se practica en sesión: el terapeuta le da elogios genuinos y Lucía practica recibirlos con solo 'gracias'. Se diseña experimento: esta semana, recibir un elogio sin minimizarlo.",
        resultado: "Lucía experimenta incomodidad al recibir el elogio sin descartarlo: 'Me parece mentira que sea cierto'.",
        tarea: "Esta semana: recibir todos los elogios con 'gracias' sin añadir nada más. Registrar cómo se siente.",
      },
      {
        numero: 5,
        titulo: "Entrenamiento en asertividad y límites",
        objetivos: ["Aprender a decir no y establecer límites"],
        tecnicas: ["Psicoeducación sobre asertividad", "Role-play", "Jerarquía de asertividad"],
        descripcion: "Se trabaja el patrón de complacencia: Lucía dice sí a todo para evitar el rechazo. Se analiza el coste: agotamiento, resentimiento, pérdida de respeto propio. Se introduce la asertividad como derecho: tiene derecho a decir no sin dar explicaciones. Se diseña jerarquía de situaciones donde quiere establecer límites (de menor a mayor dificultad). Role-play del 'no' asertivo en situaciones laborales.",
        resultado: "Lucía practica el 'no' en el role-play y describe que 'no pasa nada tan terrible como imaginaba'.",
        tarea: "Esta semana: decir no a una petición pequeña en el trabajo.",
      },
      {
        numero: 6,
        titulo: "Aplicación en relaciones significativas",
        objetivos: ["Aplicar los aprendizajes en relaciones importantes"],
        tecnicas: ["Análisis de relaciones", "Role-play de relaciones", "Trabajo de valores en relaciones"],
        descripcion: "Lucía dijo no a una compañera por primera vez: 'No puedo hacer eso ahora'. La compañera respondió bien. Sorpresa de Lucía: 'No me rechazó'. Se trabajan relaciones más significativas: su pareja (que a veces la menosprecia) y su madre. Se trabaja cuánto de su conducta en esas relaciones refleja la creencia 'debo complacer para que me quieran'.",
        resultado: "Lucía decide hablar con su pareja sobre cómo se siente cuando hace ciertos comentarios.",
        tarea: "Conversación asertiva con la pareja usando la fórmula aprendida.",
      },
      {
        numero: 7,
        titulo: "Consolidación y construcción del yo positivo",
        objetivos: ["Integrar los cambios", "Construir una identidad más positiva y estable"],
        tecnicas: ["Carta al yo del futuro", "Mapa de identidad positiva", "Plan de mantenimiento"],
        descripcion: "Revisión de todo el proceso. Lucía reporta: menos autocrítica, puede recibir elogios mejor, dijo no varias veces, habló con su pareja. Se construye un mapa de identidad positiva: quién es Lucía con todas sus dimensiones (creativa, leal, empática, valiente). Se escribe una carta al yo del futuro describiendo la persona que está llegando a ser.",
        resultado: "Lucía lee la carta y dice: 'Esta persona que describo parece yo pero más libre'.",
        tarea: "Cada semana: una acción que refleje quién quiere ser, no quién cree que deben querer los demás.",
      },
    ],
    resultados: "Reducción significativa de la autocrítica. Mayor capacidad para recibir elogios. Primeras conductas asertivas. Inicio de conversación sobre límites con pareja. Mejora del autoconcepto.",
    aprendizajesClinicos: [
      "La técnica del 'amigo compasivo' es especialmente potente para la autocrítica: la doble vara de medir es inmediatamente visible",
      "Trabajar la dificultad para recibir elogios es fundamental: es el mecanismo que descarta la evidencia positiva y mantiene la creencia nuclear",
      "La asertividad en pacientes con baja autoestima requiere primero trabajar el derecho a tener necesidades: sin ese paso, las técnicas de asertividad no se sostienen",
      "La flecha descendente es la mejor herramienta para llegar a la creencia nuclear subyacente",
    ],
  },
];
