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
];
