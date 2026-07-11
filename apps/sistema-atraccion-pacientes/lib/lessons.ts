import { ContentBlock, Lesson, Phase } from "./types";

export const phases: Phase[] = [
  {
    id: 1,
    slug: "fundamentos",
    title: "Fundamentos",
    description: "La base mental y estratégica antes de escribir un solo mensaje.",
  },
  {
    id: 2,
    slug: "presencia-y-atraccion",
    title: "Presencia y Atracción",
    description: "Convierte tu perfil y tu contenido en un imán de pacientes ideales.",
  },
  {
    id: 3,
    slug: "conversion-y-escalamiento",
    title: "Conversión y Escalamiento",
    description: "De la conversación a la cita agendada, y cómo invertir para crecer.",
  },
  {
    id: 4,
    slug: "operacion-y-crecimiento",
    title: "Operación y Crecimiento",
    description: "Sostén la agenda llena y mejora tu sistema con datos reales.",
  },
];

const p = (text: string): ContentBlock => ({ type: "p", text });
const h3 = (text: string, icon?: string): ContentBlock => ({ type: "h3", text, icon });
const list = (items: string[]): ContentBlock => ({ type: "list", items });
const quote = (text: string): ContentBlock => ({ type: "quote", text });

export const lessons: Lesson[] = [
  // ───────────────────── FASE 1 — FUNDAMENTOS ─────────────────────
  {
    id: 0,
    slug: "mentalidad-de-venta-etica",
    phaseId: 1,
    title: "Mentalidad de venta ética",
    objective: "Eliminar el bloqueo de \"vender terapia se siente mal\".",
    toolLabel: "Quiz de autoevaluación de creencias",
    content: [
      p("Antes de construir cualquier estrategia de atracción de pacientes, hay que resolver un problema que ocurre en tu cabeza, no en tu perfil de Instagram. La mayoría de los terapeutas no tienen un problema de habilidades de marketing: tienen un conflicto de identidad. Sienten que promocionarse, cobrar con seguridad o pedir una venta contradice quiénes son como profesionales de la salud mental. Ese conflicto, si no se resuelve primero, sabotea en silencio cada acción de marketing que intentes después."),
      h3("El silencio no es neutral", "🔇"),
      p("Existe la fantasía de que no promocionarse es una postura ética segura: \"si no vendo, al menos no hago daño\". Pero el silencio tiene un costo real, solo que es invisible porque ocurre fuera de tu vista. Cuando una persona con ansiedad, duelo o una crisis de pareja busca ayuda y no logra encontrarte, no se queda esperando sentada. Tres cosas pueden pasar: encuentra a otro profesional —a veces menos calificado o menos alineado con lo que necesita—, cae en manos de contenido de autoayuda de dudosa calidad en redes sociales, o simplemente desiste de buscar ayuda. En los tres escenarios, tu silencio no protegió a nadie. Simplemente cedió el espacio a alguien o algo más, y esa persona siguió sufriendo un poco más tiempo del necesario."),
      p("Visto así, comunicar con claridad qué haces, a quién ayudas y cómo pueden contactarte no es un acto de vanidad: es una forma de reducir la fricción entre alguien que sufre y la ayuda calificada que tú puedes ofrecer. Callar no es el camino neutral; es una decisión con consecuencias, solo que recaen sobre otra persona."),
      h3("Vender ético vs. manipular", "⚖️"),
      p("La palabra \"vender\" carga con un estigma que conviene desarmar. Manipular es crear una necesidad que no existe, presionar a alguien en un momento de vulnerabilidad, o exagerar resultados que no puedes garantizar. Vender de forma ética es exactamente lo opuesto: es facilitar el acceso a alguien que ya tiene la necesidad, comunicando con honestidad qué puedes ofrecer y dejando la decisión final en manos de esa persona. Un consultorio lleno de pacientes que necesitaban ayuda y la encontraron a tiempo no es el resultado de la manipulación; es el resultado de haber sido visible, claro y accesible en el momento correcto."),
      p("El marketing de respuesta directa —la disciplina que sostiene este curso— no se trata de trucos psicológicos oscuros. Se trata de estructura: entender a quién le hablas, qué le preocupa, y comunicarlo de forma clara y con una siguiente acción concreta. Esa estructura es neutral; lo que la vuelve ética o no es la intención y la honestidad de quien la usa."),
      h3("Tres creencias limitantes del gremio, y su reencuadre", "🔄"),
      list([
        "\"Si cobro, soy codicioso\" → Cobrar de forma justa por tu tiempo y expertise es lo que te permite sostener tu práctica a largo plazo, seguir formándote, y estar disponible para más pacientes en el futuro. Un terapeuta que no puede sostenerse económicamente termina por cerrar su consulta, y eso beneficia a nadie.",
        "\"Promocionarme es poco profesional\" → La profesión médica y de salud ya normalizó que los especialistas se den a conocer: clínicas, hospitales y profesionales de otras áreas de salud comunican sus servicios sin que eso reduzca su seriedad. Comunicar con transparencia tu especialidad y tu enfoque es un acto profesional, no lo contrario.",
        "\"La terapia se gana por referidos, no se vende\" → Depender exclusivamente de referidos es depender de la suerte y de la red social de otras personas. Es un canal válido, pero no es un sistema: no lo controlas, no lo puedes escalar y no puedes predecir cuándo llegará el próximo paciente. Construir un sistema de atracción no reemplaza los referidos, los complementa con algo que sí depende de ti.",
      ]),
      p("El objetivo de esta lección no es convencerte de que te conviertas en un vendedor agresivo. Es ayudarte a notar en qué momentos estas creencias limitantes te frenan, para que puedas avanzar con las herramientas de este curso sin ese freno de mano puesto."),
    ],
  },
  {
    id: 1,
    slug: "diagnostico-y-posicionamiento",
    phaseId: 1,
    title: "Diagnóstico y posicionamiento",
    objective: "Elegir una especialidad rentable y diferenciada.",
    toolLabel: "Matriz de decisión de especialidad",
    content: [
      p("\"Atiendo a todo tipo de pacientes\" suena generoso, pero en marketing es la forma más rápida de volverte invisible. Cuando tu mensaje intenta hablarle a todo el mundo, no le habla directamente a nadie: ni la persona con ansiedad ni la pareja en crisis ni el adolescente con autoestima baja sienten que ese perfil fue hecho pensando en ellos. El posicionamiento resuelve esto: elegir con quién trabajas mejor, para que tu comunicación pueda ser específica y, por lo tanto, resonar con más fuerza."),
      h3("Por qué \"atiendo a todos\" mata la conversión", "🎯"),
      p("Piensa en dos bios de Instagram. La primera dice \"Psicóloga clínica. Atiendo adultos, adolescentes, parejas y niños. Todas las modalidades.\" La segunda dice \"Ayudo a mujeres profesionales con ansiedad y burnout a recuperar el control de su vida, sin dejar el trabajo que aman.\" Una mujer profesional agotada que ve la segunda bio siente que fue escrita para ella. La primera bio es correcta y honesta, pero no genera ese reconocimiento inmediato. La especialización no significa que dejarás de atender otros casos —eso lo decides tú clínicamente—, significa que tu comunicación de marketing habla con precisión a un segmento, porque eso es lo que convierte."),
      h3("La matriz de decisión", "🧭"),
      p("Elegir una especialidad rentable y diferenciada no es una corazonada, es el cruce de cuatro variables:"),
      list([
        "Urgencia del dolor: cuánto empuja el problema a la persona a buscar ayuda ahora mismo, no \"algún día\". Una crisis de pareja o un ataque de pánico generan más urgencia que \"quiero conocerme mejor\".",
        "Competencia: cuántos otros profesionales ya comunican activamente en esa especialidad en tu zona o en tu idioma. Poca competencia facilita destacar; mucha competencia exige una diferenciación más nítida.",
        "Expertise propio: tu formación, experiencia clínica y resultados reales en esa población o problema.",
        "Pasión propia: qué tanto disfrutas trabajar con ese tipo de caso. Una especialidad rentable pero que te agota no es sostenible a largo plazo.",
      ]),
      p("Ninguna de las cuatro variables por sí sola determina la mejor especialidad. Una alta urgencia con cero expertise es riesgosa clínicamente; mucha pasión sin ningún mercado real no sostiene un consultorio. El ejercicio consiste en puntuar tus candidatas en las cuatro dimensiones y comparar los resultados de forma objetiva, en lugar de decidir por intuición o por lo último que leíste en un congreso."),
      p("Usa la herramienta de abajo para anotar entre dos y tres especialidades que estés considerando, puntuarlas, y ver cuál tiene el mejor balance para convertirse en el eje de tu comunicación durante los próximos meses."),
    ],
  },
  {
    id: 2,
    slug: "investigacion-de-avatar",
    phaseId: 1,
    title: "Investigación de Avatar",
    objective: "Conocer a fondo al paciente ideal antes de escribir cualquier mensaje.",
    toolLabel: "Constructor de ficha de avatar",
    content: [
      p("Todo mensaje de marketing que funciona nace de una investigación previa, no de la creatividad del que lo escribe. Antes de definir tu promesa de venta o escribir tu primer post, necesitas conocer a tu paciente ideal —tu \"avatar\"— con un nivel de detalle que te permita hablar su idioma exacto, no el idioma clínico que aprendiste en la universidad."),
      h3("Qué investigar", "🔍"),
      list([
        "Dolores y frustraciones actuales: qué está viviendo hoy, en sus propias palabras, no en las tuyas. No es \"trastorno de ansiedad generalizada\", es \"no puedo dormir pensando en todo lo que tengo que resolver mañana\".",
        "El deseo del \"después\": cómo se ve su vida si el problema se resuelve. No es \"reducción de síntomas\", es \"poder disfrutar una cena sin que la ansiedad le arruine la noche\".",
        "Miedos y objeciones específicas de buscar terapia: el estigma de \"ir al psicólogo\", el miedo a ser juzgado, la desconfianza hacia un desconocido, la preocupación por el costo. Estas objeciones son distintas a las objeciones generales de compra; están cargadas de vulnerabilidad emocional.",
        "El lenguaje exacto que usa para describir su problema: las frases textuales, no la traducción clínica. Ese lenguaje es el que después usarás en tus posts, tu bio y tus anuncios.",
        "Dónde busca ayuda hoy: qué cuentas sigue, qué grupos consulta, qué busca en Google, a quién le pregunta.",
      ]),
      h3("Cómo investigar sin tener un negocio real todavía", "🗂️"),
      p("No necesitas una base de pacientes activa para hacer esta investigación. Existen fuentes abiertas donde tu avatar ya está hablando de su problema con sus propias palabras:"),
      list([
        "Foros y grupos de Facebook o Reddit relacionados con tu especialidad, donde las personas describen su situación sin filtro clínico.",
        "Comentarios en cuentas de otros terapeutas del mismo nicho: ahí ves qué preguntan, qué objetan y qué agradecen.",
        "Autocompletado de Google: escribe \"cómo saber si tengo...\" o \"qué hacer cuando mi pareja...\" y observa qué sugiere Google según lo que la gente busca realmente.",
        "Conversaciones informales con conocidos, excompañeros o pacientes anteriores (respetando siempre la confidencialidad) que puedan compartir cómo describen su malestar antes de buscar ayuda.",
      ]),
      p("El resultado de esta lección no es un documento teórico, es una ficha de avatar concreta: una persona ficticia pero basada en patrones reales, con nombre, edad, situación de vida, dolor principal, deseo principal, objeciones y frases textuales. Esa ficha se convierte en la referencia obligada para cada pieza de contenido, cada anuncio y cada respuesta que escribas de aquí en adelante."),
    ],
  },
  {
    id: 3,
    slug: "dolor-creencias-y-mecanismo-unico",
    phaseId: 1,
    title: "Dolor, creencias y tu mecanismo único",
    objective: "Profundizar en la psicología de tu avatar y definir el mecanismo que te diferencia de todo lo que ya intentó.",
    toolLabel: "Ficha de dolor, creencias y mecanismo",
    content: [
      p("La ficha de avatar de la lección anterior te da el retrato general de tu paciente ideal. Esta lección va un nivel más profundo: separa cinco piezas específicas de su psicología que, tomadas juntas, explican por qué todavía no dio el paso de buscar ayuda —y qué necesita escuchar de vos para finalmente darlo. Estas cinco piezas son las que después van a alimentar tu Promesa de Venta, tu oferta y cada pieza de contenido que crees."),
      h3("Puntos de dolor", "💔"),
      p("El punto de dolor es la molestia concreta que tu avatar siente hoy, en carne propia, no la categoría clínica que vos usarías para nombrarla. No es \"trastorno de ansiedad\", es lo que esa ansiedad le hace sentir en un momento específico del día. Cuanto más preciso y sensorial sea el dolor que identifiques, más se va a reconocer tu avatar cuando lo lea en tu contenido."),
      quote("Ejemplo: \"Se despierta a las 3am con el corazón acelerado pensando en todo lo que dejó pendiente, y al otro día llega agotada al trabajo sin haber descansado nada.\""),
      h3("Objeciones", "🚧"),
      p("La objeción es la barrera concreta que frena la acción incluso cuando el dolor ya es evidente. No es un rechazo a vos como profesional; es una duda razonable que necesita una respuesta antes de que tu avatar se sienta listo para agendar. Identificar la objeción con precisión te permite desactivarla por adelantado en tu comunicación, en lugar de descubrirla recién en la conversación de venta."),
      quote("Ejemplo: \"No tengo tiempo para agregar una hora más a mi semana\", o \"ya fui a terapia antes y sentí que no avancé nada\"."),
      h3("Falsas creencias", "🌀"),
      p("La falsa creencia es una idea que tu avatar acepta como verdad y que, precisamente por eso, lo mantiene atascado. A diferencia de la objeción —que es una duda puntual sobre tu servicio—, la falsa creencia es más profunda: una historia que se cuenta sobre sí mismo, sobre el problema, o sobre lo que significa pedir ayuda. Nombrar esa creencia en tu contenido, y ofrecer un reencuadre honesto, es una de las formas más rápidas de generar conexión."),
      quote("Ejemplo: \"Si necesito ayuda para manejar esto, es que soy débil\", o \"esto se soluciona solo con fuerza de voluntad, no necesito a nadie más\"."),
      h3("La vieja forma", "🔙"),
      list([
        "Lo que ya probó y compró antes, y que no le dio un resultado duradero.",
        "¿Cómo ha intentado antes resolver su problema?",
      ]),
      p("Antes de llegar a vos, casi todo tu avatar ya intentó algo: un libro, una app, un consejo de un amigo, incluso otro profesional que no fue el indicado. Ninguno de esos intentos fracasó por falta de esfuerzo de su parte; fracasaron porque atacaban el síntoma y no la causa, o porque no estaban hechos para sostenerse en el tiempo. Nombrar con respeto esa \"vieja forma\" —sin descalificar lo que ya intentó— es lo que prepara el terreno para presentar tu método como algo genuinamente distinto."),
      quote("Ejemplo: \"Probó meditar con una app, leyó un par de libros de autoayuda y habló varias veces con amigos cercanos — sintió alivio por un rato, pero el problema siempre volvía apenas bajaba la guardia.\""),
      h3("La nueva forma", "🚀"),
      list([
        "Tu mecanismo único: ese vehículo con el que por fin va a lograr resultados.",
      ]),
      p("La \"nueva forma\" es tu método, tu enfoque, tu manera particular de acompañar el proceso — el elemento que hace que tu propuesta no sea \"más de lo mismo que ya intentó y no funcionó\". No hace falta inventar una técnica nueva: alcanza con nombrar con claridad qué hace diferente tu forma de trabajar (tu combinación de enfoque terapéutico, estructura de seguimiento, o especialización) frente a los intentos anteriores de tu avatar. Este mecanismo es, en el fondo, la semilla de la Promesa de Venta que vas a construir en la próxima lección."),
      quote("Ejemplo: \"Un proceso de 8 semanas que combina terapia cognitivo-conductual con seguimiento breve entre sesiones, diseñado específicamente para que lo aprendido se sostenga después de que termine el proceso, no solo durante.\""),
      p("Usa la ficha de esta lección para completar tus propios cinco puntos. Cuanto más específicos y basados en tu investigación real de la lección anterior, más filoso va a quedar cada mensaje que escribas de acá en adelante."),
    ],
  },
  {
    id: 4,
    slug: "promesa-de-venta",
    phaseId: 1,
    title: "Promesa de Venta (PVU)",
    objective: "Construir una promesa clara y diferenciada, basada en el avatar de la lección anterior.",
    toolLabel: "Constructor de PVU",
    content: [
      p("La Promesa de Venta Única (PVU) es la frase que resume, en una sola oración, a quién ayudas, qué resultado logras y por qué eres diferente. Es probablemente el activo de marketing más importante que construirás en este curso: aparecerá en tu bio de Instagram, en la apertura de tus posts, en tus anuncios y en la forma en que te presentas cuando alguien te pregunta \"¿a qué te dedicas?\"."),
      h3("La fórmula", "🧩"),
      quote("Ayudo a [avatar específico] a lograr [resultado deseado] a través de [método/enfoque], sin [objeción/miedo común]."),
      p("Cada uno de los cuatro componentes tiene un propósito específico. El avatar específico —construido en la lección anterior— hace que la persona correcta se sienta identificada de inmediato. El resultado deseado debe estar expresado en términos de vida, no en términos clínicos: no es \"reducir síntomas depresivos\", es \"volver a sentir ganas de salir con amigos\". El método o enfoque le da credibilidad y diferenciación a tu promesa —terapia cognitivo-conductual, terapia de pareja basada en apego, EMDR, etc.—. Y el \"sin [objeción/miedo común]\" desactiva por adelantado la principal barrera que tu avatar tiene para dar el primer paso, la que identificaste al investigar sus miedos y objeciones."),
      h3("Errores comunes", "⚠️"),
      list([
        "Promesas vagas: \"Ayudo a las personas a sentirse mejor\" no le habla a nadie en particular ni promete nada verificable. Cuanto más específica la promesa, más fuerte el reconocimiento.",
        "Promesas de curación poco éticas: prometer eliminar por completo un trastorno, garantizar un resultado clínico específico, o usar lenguaje absoluto (\"nunca más sentirás ansiedad\") no solo es poco ético, es clínicamente insostenible. La promesa debe hablar de dirección y proceso, no de garantías imposibles.",
      ]),
      h3("Ejemplos aplicados", "💡"),
      list([
        "\"Ayudo a mujeres profesionales con ansiedad y burnout a recuperar el control de su día a día a través de terapia cognitivo-conductual, sin tener que dejar el trabajo que aman.\"",
        "\"Ayudo a parejas que sienten que se distanciaron a reconstruir la conexión a través de terapia basada en apego, sin señalar culpables.\"",
        "\"Ayudo a adolescentes con ansiedad social a sentirse seguros en el colegio a través de terapia cognitivo-conductual adaptada a su edad, sin que sientan que 'algo está mal' con ellos.\"",
        "\"Ayudo a adultos que atravesaron un duelo reciente a procesar la pérdida a través de un acompañamiento terapéutico gradual, sin apurar los tiempos del dolor.\"",
        "\"Ayudo a personas con insomnio crónico relacionado a la ansiedad a recuperar noches de sueño reparador a través de TCC para el insomnio, sin depender de medicación de por vida.\"",
      ]),
      p("Usa la herramienta de abajo para completar los cuatro campos de tu propia fórmula. Si ya construiste tu ficha de avatar en la lección anterior, esos datos pueden guiar tu redacción aquí."),
    ],
  },
  {
    id: 5,
    slug: "creacion-de-ofertas",
    phaseId: 1,
    title: "Creación de Ofertas",
    objective: "Empaquetar el servicio de forma atractiva.",
    toolLabel: "Constructor de oferta",
    content: [
      p("Tener una promesa clara no es suficiente si lo que ofreces después es genérico: \"una sesión de una hora\". La oferta es cómo empaquetas tu servicio para que el valor percibido sea evidente antes de que la persona pague. No se trata de inflar precios ni de prometer de más; se trata de comunicar con claridad todo lo que ya haces —y que probablemente no estás mencionando— para que la decisión de agendar se sienta obvia."),
      h3("El value stack: qué incluir más allá de \"una sesión\"", "📦"),
      p("La mayoría de los terapeutas ya ofrecen más valor del que comunican. Piensa en todo lo que rodea a una sesión: la evaluación inicial donde entiendes a fondo la situación, el material de apoyo que compartes entre sesiones, el seguimiento por mensaje ante dudas puntuales, los recursos descargables (guías, ejercicios, audios de respiración). Cuando ese conjunto de elementos se hace visible como parte del paquete —el \"value stack\"— la sesión suelta deja de ser el único punto de comparación de precio."),
      h3("Tipos de oferta", "🗂️"),
      list([
        "Sesión suelta: flexible, pero con menor compromiso y menor previsibilidad de ingresos.",
        "Paquete de sesiones: por ejemplo, un paquete de 4 u 8 sesiones con un objetivo terapéutico definido, que favorece la continuidad del proceso.",
        "Programa con duración fija: un proceso estructurado con inicio y fin claros (por ejemplo, un programa de 8 semanas para manejo de ansiedad), ideal cuando el enfoque terapéutico se presta a una estructura por fases.",
      ]),
      h3("Pricing psicológico y anclaje", "⚓"),
      p("La forma en que presentas el precio afecta cómo se percibe, incluso si el número es el mismo. Mostrar el precio de una sesión individual junto al precio por sesión dentro de un paquete (\"$X la sesión suelta, $Y por sesión si tomas el paquete de 8\") usa el anclaje para que el paquete se perciba como la opción más razonable. Esto no es manipulación si ambos precios son reales y el paquete efectivamente aporta ese valor adicional."),
      h3("Garantías éticas", "🛡️"),
      p("En terapia no se puede —ni se debe— garantizar un resultado clínico. Lo que sí puedes garantizar es la experiencia: por ejemplo, \"si en la primera sesión sientes que no hay compatibilidad conmigo, esa sesión no se cobra\". Este tipo de garantía reduce el riesgo percibido de dar el primer paso sin prometer nada sobre el resultado terapéutico, que depende de múltiples factores fuera de tu control absoluto."),
      h3("Escasez honesta", "⏳"),
      p("A diferencia del marketing agresivo de otros rubros, en terapia la escasez no debe fabricarse con countdowns falsos o \"quedan 2 cupos\" cuando no es cierto. La escasez ética es simplemente la verdad de tu agenda: si tienes cupo real para 3 pacientes nuevos este mes, comunícalo tal cual. Es honesto, genera urgencia real, y no compromete tu credibilidad ni tu ética profesional."),
    ],
  },

  // ───────────────────── FASE 2 — PRESENCIA Y ATRACCIÓN ─────────────────────
  {
    id: 6,
    slug: "perfil-instagram-landing-page",
    phaseId: 2,
    title: "Perfil de Instagram como landing page",
    objective: "Que el perfil convierta visitas en interesados.",
    toolLabel: "Checklist auditable del perfil",
    content: [
      p("Cuando alguien descubre tu contenido y siente curiosidad, el siguiente paso casi siempre es el mismo: entra a tu perfil. Ese perfil funciona exactamente como una landing page —la página a la que llega alguien después de hacer clic en un anuncio—: tiene unos segundos para comunicar quién eres, a quién ayudas y qué hacer a continuación. Si el perfil no cumple esa función, todo el esfuerzo de crear contenido se pierde en esa última milla."),
      h3("Anatomía de un perfil que convierte", "📱"),
      list([
        "Foto de perfil: rostro visible, buena iluminación, expresión cercana. No un logo, no una foto grupal recortada.",
        "Nombre visible: incluye tu especialidad o público al que ayudas, no solo tu nombre propio (ej. \"María Pérez | Psicóloga de Parejas\").",
        "Bio con tu PVU resumida: la promesa de venta que construiste en la lección 4, condensada en una o dos líneas.",
        "Link en bio funcional: que lleve a agendar, a WhatsApp, o a una página con más información — no un link roto ni una landing genérica sin actualizar.",
        "Highlights estratégicos: organizados por temas que responden preguntas frecuentes (ej. \"Cómo trabajo\", \"Preguntas frecuentes\", \"Testimonios éticos\", \"Sobre mí\").",
      ]),
      h3("Los primeros 9 posts como vitrina", "🖼️"),
      p("Cuando alguien nuevo llega a tu perfil, lo primero que ve es la grilla de tus publicaciones más recientes, no tu contenido más antiguo ni el más viral. Los primeros nueve posts —los que ve sin hacer scroll— funcionan como la vitrina de una tienda: deben transmitir en conjunto de qué se trata tu cuenta, a quién ayudas y qué pueden esperar. Esto no significa que todo tenga que ser publicidad directa; significa tener presente que esa vitrina se está evaluando en todo momento, no solo cuando publicas contenido nuevo."),
      h3("Errores comunes", "⚠️"),
      list([
        "Bio genérica que podría aplicar a cualquier psicólogo, sin especificidad de a quién ayudas.",
        "Ausencia de un llamado a la acción (CTA) claro: el visitante no sabe qué hacer después de leer la bio.",
        "Link en bio roto, desactualizado, o que no lleva a ningún lugar accionable.",
      ]),
      p("La herramienta de esta lección es un checklist auditable: revisa tu perfil actual (o planifica uno nuevo) elemento por elemento y marca qué está resuelto y qué falta ajustar."),
    ],
  },
  {
    id: 7,
    slug: "niveles-de-consciencia",
    phaseId: 2,
    title: "Niveles de consciencia de la audiencia",
    objective: "Hablarle a la audiencia en el idioma correcto según su etapa mental.",
    toolLabel: "Diagnóstico rápido de nivel de consciencia",
    content: [
      p("Uno de los errores más comunes en el contenido de salud mental es hablarle a toda la audiencia como si estuviera en el mismo punto de decisión. En realidad, las personas que ven tu contenido están repartidas en distintos niveles de consciencia respecto a su problema y a las soluciones disponibles. Adaptar tu mensaje al nivel correcto es lo que hace que el contenido conecte en lugar de pasar desapercibido."),
      h3("Los 5 niveles adaptados a salud mental", "🪜"),
      list([
        "Inconsciente del problema: la persona ni siquiera identifica que lo que vive tiene nombre o solución. Contenido educativo que ayuda a poner en palabras lo que siente (\"si te pasa esto, podría ser...\") es lo que mejor conecta aquí.",
        "Consciente del problema: ya sabe que algo no anda bien, pero no conoce las opciones. Contenido que valida su experiencia y empieza a nombrar que existen caminos posibles.",
        "Consciente de que hay soluciones: sabe que la terapia (u otras alternativas) existen, pero no está segura de cuál es la indicada para su caso. Contenido que explica enfoques y diferencia opciones.",
        "Consciente del método: ya identificó que la terapia —o un enfoque específico— es el camino, y está evaluando con quién hacerlo. Contenido que demuestra tu forma de trabajar y tu diferenciación.",
        "Listo para decidir: solo necesita el empujón final para agendar. Contenido con un CTA directo y claro, sin rodeos.",
      ]),
      h3("Cómo detectar el nivel predominante de tu audiencia", "🔎"),
      p("No necesitas una encuesta formal para saber en qué nivel está tu audiencia mayoritaria: los comentarios, los mensajes directos y las preguntas frecuentes que recibes son la mejor fuente de información. Si la mayoría de los comentarios describen síntomas sin nombrarlos (\"a mí también me pasa esto, ¿es normal?\"), tu audiencia está mayormente en los niveles 1 y 2. Si las preguntas son sobre modalidades y diferencias entre enfoques, estás ante los niveles 3 y 4. Si te escriben directamente preguntando por precios y disponibilidad, ya están en el nivel 5."),
      p("Usa el diagnóstico rápido de esta lección para identificar en qué nivel predomina tu audiencia actual, y ajusta la proporción de tu contenido futuro en consecuencia."),
    ],
  },
  {
    id: 8,
    slug: "arquitectura-de-contenido-persuasivo",
    phaseId: 2,
    title: "Arquitectura de contenido persuasivo",
    objective: "Crear contenido que mueva a la acción, no solo que eduque.",
    toolLabel: "Librería de ganchos",
    content: [
      p("Educar es valioso, pero no es suficiente. Mucho contenido de salud mental informa correctamente y aun así no genera ninguna acción: no consigue que alguien comente, escriba por mensaje o agende una cita. La diferencia entre contenido que solo educa y contenido que persuade está en su arquitectura: cómo se abre, cómo se desarrolla y cómo se cierra."),
      h3("Estructura gancho–desarrollo–CTA", "🪝"),
      p("Todo post persuasivo sigue la misma estructura de tres partes. El gancho es la primera línea o los primeros segundos: su único trabajo es detener el scroll y generar la pregunta \"¿esto me aplica a mí?\". El desarrollo entrega el contenido de valor prometido por el gancho, con ejemplos concretos y lenguaje accesible. El CTA (llamado a la acción) le dice explícitamente a la audiencia qué hacer después: comentar, guardar, escribir por mensaje o agendar. Omitir el CTA —algo muy común en el gremio por miedo a sonar \"vendedor\"— es dejar sobre la mesa a personas que sí estaban listas para actuar, pero no sabían qué paso dar."),
      h3("Atracción vs. conversión, según el nivel de consciencia", "⚖️"),
      p("El contenido de atracción está dirigido a los niveles 1 y 2 de consciencia: su objetivo es alcance y reconocimiento, no venta directa. El contenido de conversión está dirigido a los niveles 4 y 5: su objetivo es mover a la acción concreta. Un calendario de contenido balanceado combina ambos tipos, en lugar de publicar solo contenido educativo genérico o solo contenido de venta directa."),
      h3("Tipos de gancho", "🎣"),
      list([
        "Pregunta: \"¿Te cuesta dormir pensando en todo lo que dejaste pendiente?\"",
        "Mito vs. realidad: \"Mito: ir a terapia es solo para 'casos graves'. Realidad: ...\"",
        "Caso anonimizado: \"Una paciente me contó que llevaba años pensando que su ansiedad era 'solo estrés'...\"",
        "Dato sorprendente: \"El 1 de cada 3 adultos experimenta síntomas de ansiedad significativos en algún momento de su vida.\"",
      ]),
      h3("Calendario tipo semanal", "📅"),
      p("Una cadencia sostenible combina, por ejemplo, dos posts de atracción (educativos, ganchos de pregunta o dato) con un post de autoridad (caso anonimizado o detrás de escena de tu forma de trabajar) y un post de conversión directa (CTA claro para agendar) por semana. No hace falta publicar todos los días para ser efectivo; hace falta ser consistente con esta mezcla."),
      p("La herramienta de esta lección es una librería de ganchos filtrable por especialidad y nivel de consciencia, lista para adaptar a tu propio contenido."),
    ],
  },
  {
    id: 9,
    slug: "prueba-social-y-autoridad",
    phaseId: 2,
    title: "Prueba social y autoridad",
    objective: "Generar confianza sin romper la confidencialidad del gremio.",
    toolLabel: "Checklist de prueba social",
    content: [
      p("En la mayoría de los rubros, la prueba social se construye con testimonios explícitos: \"esto cambió mi vida, mira los resultados\". En salud mental, ese camino está limitado —y con razón— por la confidencialidad y la ética profesional. Eso no significa que no puedas generar confianza; significa que necesitas alternativas éticas que logren el mismo efecto sin exponer a nadie."),
      h3("Alternativas éticas a los testimonios explícitos", "🤝"),
      list([
        "Casos anonimizados: relatar una situación clínica típica (sin datos identificables, cambiando detalles no esenciales, o combinando elementos de varios casos) para ilustrar cómo trabajas y qué tipo de transformación es posible.",
        "Certificaciones y formación visibles: mostrar tu formación, especializaciones y afiliaciones profesionales de forma natural, no como un currículum aislado sino integrado al contenido.",
        "Contenido que demuestra expertise en acción: explicar cómo abordarías una situación específica, qué preguntas harías, qué enfoque usarías. Esto genera confianza porque la audiencia \"ve\" cómo piensas, sin necesitar el testimonio de un tercero.",
      ]),
      h3("Cómo pedir reseñas de forma ética", "⭐"),
      p("Las reseñas en plataformas como Google Business son una fuente de prueba social perfectamente ética, siempre que se pidan sobre la experiencia general del servicio —puntualidad, calidez, facilidad de agendamiento, ambiente del consultorio— y nunca sobre el contenido específico de las sesiones. Pedir una reseña de este tipo, después de un proceso donde el paciente sintió una buena experiencia, no compromete la confidencialidad clínica."),
      p("Usa el checklist de esta lección para revisar qué elementos de prueba social y autoridad ya tienes visibles, y cuáles podrías incorporar sin comprometer la ética del gremio."),
    ],
  },

  // ───────────────────── FASE 3 — CONVERSIÓN Y ESCALAMIENTO ─────────────────────
  {
    id: 10,
    slug: "conversion-mensaje-a-cita",
    phaseId: 3,
    title: "Conversión: de mensaje a cita agendada",
    objective: "Convertir DMs y comentarios en citas.",
    toolLabel: "Simulador de conversación",
    content: [
      p("Todo el trabajo de atracción se pierde si, cuando alguien finalmente escribe, la conversación no sabe convertir ese interés en una cita agendada. Esta lección se enfoca en el momento más delicado del proceso: la primera respuesta y el manejo de las objeciones que casi siempre aparecen antes de decir que sí."),
      h3("El script de primera respuesta", "💬"),
      p("Cuando alguien escribe por primera vez, generalmente lo hace con un mensaje breve y algo de incertidumbre (\"hola, quería consultarte sobre...\"). La primera respuesta debe lograr tres cosas: agradecer el contacto con calidez, mostrar que entendiste (aunque sea brevemente) lo que la persona está buscando, y hacer una pregunta simple que abra la conversación sin sentirse como un interrogatorio clínico. Responder solo con \"claro, cuéntame más\" es válido, pero responder con una frase que demuestre que ya conoces el terreno (\"entiendo, es común sentir eso cuando...\") genera más confianza desde el primer intercambio."),
      h3("Manejo de objeciones típicas", "🛑"),
      list([
        "\"Es caro\": reconocer la preocupación sin ponerse a la defensiva, y reconectar con el valor: \"entiendo que es una inversión importante. Por eso la primera sesión está pensada para que ambos evaluemos si es el camino correcto para ti antes de comprometerte a un proceso más largo.\"",
        "\"Lo voy a pensar\": es válido, pero suele esconder una objeción no dicha (miedo, dudas sobre el enfoque, costo). Una respuesta útil es preguntar con calidez qué es lo que le gustaría pensar mejor, para poder ayudar a resolver esa duda puntual en lugar de dejar la conversación en el aire.",
        "\"No sé si funciona conmigo\": normalizar la duda (\"es una pregunta súper válida, muchas personas la tienen antes de la primera sesión\") y ofrecer la primera sesión como un espacio de evaluación mutua, no como un compromiso de largo plazo.",
        "\"Prefiero intentarlo solo primero\": validar el intento de autonomía sin desalentarlo, y dejar la puerta abierta con calidez: \"tiene todo el sentido querer intentarlo así. Si en algún momento sientes que te vendría bien acompañamiento, aquí vas a tener las puertas abiertas.\"",
      ]),
      h3("El cierre suave", "🤝"),
      p("Uno de los ajustes de mayor impacto en la tasa de conversión es cambiar la pregunta \"¿cuándo te viene bien?\" —que exige a la otra persona hacer el trabajo de proponer un horario— por ofrecer directamente dos opciones concretas: \"tengo disponible el martes a las 5pm o el jueves a las 10am, ¿cuál te queda mejor?\". Este cierre suave reduce la fricción de decisión y acelera el paso de la conversación a la cita en la agenda."),
      p("Usa el simulador de esta lección: elige una objeción típica y mira el script de respuesta sugerido, listo para adaptar a tu propio estilo."),
    ],
  },
  {
    id: 11,
    slug: "pauta-publicitaria",
    phaseId: 3,
    title: "Pauta publicitaria",
    objective: "Escalar la atracción con inversión paga, solo cuando la conversión orgánica ya funciona.",
    toolLabel: "Calculadora de presupuesto",
    content: [
      p("Invertir en publicidad paga antes de tiempo es uno de los errores más costosos que puede cometer un terapeuta que recién empieza a construir su presencia. Los anuncios no arreglan un mensaje débil ni una conversión que no funciona: simplemente le dan más volumen a lo que ya tienes, sea bueno o no. Por eso esta lección va después, no antes, del resto del sistema."),
      h3("Cuándo NO escalar todavía", "🚦"),
      p("Antes de destinar presupuesto a anuncios, verifica que lo orgánico ya esté funcionando: ¿tu perfil convierte visitas en mensajes? ¿tus respuestas logran convertir mensajes en citas agendadas? ¿tu tasa de asistencia a esas citas es razonable? Si la respuesta a alguna de estas preguntas es no, invertir en más tráfico solo amplifica el problema: más personas van a llegar a un sistema que todavía tiene fugas."),
      h3("Estructura de campaña", "🏗️"),
      list([
        "Objetivo: define con claridad qué acción quieres que tome la persona que ve el anuncio (mensaje directo, agendar una llamada, visitar un link). Un objetivo difuso arruina la optimización de la campaña.",
        "Segmentación básica: ubicación geográfica relevante para tu consultorio (o país, si trabajas online), rango de edad de tu avatar, e intereses relacionados a tu especialidad.",
        "Presupuesto de prueba: empezar con un monto acotado, suficiente para generar datos pero sin comprometer un presupuesto grande antes de validar qué anuncio funciona mejor.",
      ]),
      h3("Creativos basados en tus ganchos", "🎨"),
      p("Los anuncios que mejor funcionan no son piezas publicitarias genéricas; son versiones amplificadas de los ganchos que ya identificaste como efectivos en tu contenido orgánico de la lección 8. Si un gancho de pregunta o un caso anonimizado ya generó buena interacción orgánica, es una señal de que ese mismo ángulo puede funcionar como creativo pago."),
      p("Usa la calculadora de esta lección para estimar, a partir de tu meta de pacientes nuevos por mes y un costo por lead estimado, qué presupuesto mensual sería razonable destinar y qué resultados puedes esperar."),
    ],
  },

  // ───────────────────── FASE 4 — OPERACIÓN Y CRECIMIENTO ─────────────────────
  {
    id: 12,
    slug: "agendamiento-seguimiento-retencion",
    phaseId: 4,
    title: "Agendamiento, seguimiento y retención",
    objective: "Sostener la agenda llena y reducir inasistencias.",
    toolLabel: "Plantilla de checklist semanal",
    content: [
      p("Conseguir que alguien agende una cita es solo la mitad del trabajo: la otra mitad es asegurarse de que esa cita se concrete, y que el paciente continúe el proceso si es clínicamente indicado. Esta lección se enfoca en la operación semanal que sostiene una agenda llena y con baja inasistencia."),
      h3("Recordatorios automatizados en 3 momentos", "⏰"),
      p("La inasistencia se reduce significativamente con una secuencia simple de recordatorios: uno 72 horas antes (para dar tiempo a reprogramar si es necesario), otro 24 horas antes (confirmación más cercana), y uno final 2 horas antes (recordatorio de último momento). No hace falta una herramienta compleja: un mensaje de WhatsApp programado o una plantilla de calendario cumplen la función."),
      h3("Intake digital previo", "📝"),
      p("Pedir que el paciente complete una ficha de intake antes de la primera sesión —datos de contacto, motivo de consulta breve, expectativas— reduce el tiempo administrativo dentro de la sesión y aumenta el compromiso del paciente con el proceso desde antes de sentarse frente a ti."),
      h3("Política de cancelación clara", "📋"),
      p("Una política de cancelación comunicada por adelantado —por ejemplo, un cargo moderado por cancelaciones fuera de un plazo razonable— no es agresiva si se comunica con transparencia desde el inicio. Protege tu tiempo y, paradójicamente, aumenta el compromiso del paciente con la continuidad del proceso."),
      h3("Reactivación de pacientes inactivos", "🔄"),
      p("Los pacientes que discontinuaron el proceso sin un cierre formal son una fuente de reactivación válida: un mensaje breve, cálido y sin presión (\"quería saber cómo estás, las puertas siguen abiertas si en algún momento quieres retomar\") puede reabrir la conversación sin invadir su proceso personal."),
      p("La herramienta de esta lección es una plantilla de checklist semanal reseteable, para convertir estas prácticas en un hábito operativo recurrente en lugar de una intención aislada."),
    ],
  },
  {
    id: 13,
    slug: "metricas-y-mejora-continua",
    phaseId: 4,
    title: "Métricas y mejora continua",
    objective: "Saber qué mirar para diagnosticar qué módulo está fallando.",
    toolLabel: "Dashboard de métricas y KPIs",
    content: [
      p("Un sistema de atracción de pacientes no se mejora por intuición, se mejora mirando los números correctos. Esta última lección te da el marco para diagnosticar, con datos, en qué parte del sistema —atracción, conversión o retención— está el cuello de botella real, en lugar de adivinar o cambiar todo a la vez."),
      h3("KPIs clave", "📊"),
      list([
        "Costo por lead: cuánto te cuesta generar un contacto interesado (orgánico o pago).",
        "Tasa de agendamiento: qué porcentaje de esos contactos termina agendando una cita.",
        "Tasa de asistencia (show-up): qué porcentaje de las citas agendadas efectivamente se concretan.",
        "Costo por paciente adquirido: cuánto te cuesta, en total, conseguir un paciente que efectivamente comienza el proceso.",
        "Tasa de conversión a cliente activo: qué porcentaje de quienes tuvieron la primera sesión continúan el proceso terapéutico.",
      ]),
      h3("Lógica de diagnóstico", "🩺"),
      p("El valor real de estos KPIs está en cómo se leen en conjunto, no de forma aislada. Si generas muchos leads pero pocas citas agendadas, el problema no está en la atracción —eso ya funciona— sino en la conversión: tu script de primera respuesta o tu manejo de objeciones necesita ajustes. Si agendas muchas citas pero la asistencia es baja, el problema está en el seguimiento previo a la sesión, no en el mensaje de venta. Si tienes buena asistencia pero baja continuidad, el problema puede estar en la experiencia de la primera sesión o en cómo se comunica el valor de continuar el proceso."),
      p("Esta forma de diagnosticar evita la trampa más común: cambiar el contenido de Instagram cuando en realidad el problema está en cómo respondes los mensajes, o invertir en publicidad cuando el problema está en la tasa de asistencia. Cada síntoma numérico apunta a un módulo específico de este curso."),
      p("Usa el dashboard de esta lección: ingresa tus números del mes (leads, citas agendadas, citas completadas, pacientes activos, gasto en publicidad) y la herramienta va a calcular automáticamente tus KPIs y sugerirte en qué módulo enfocar tu energía este mes."),
    ],
  },
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getPhaseById(id: number): Phase | undefined {
  return phases.find((ph) => ph.id === id);
}

export function getLessonsByPhase(phaseId: number): Lesson[] {
  return lessons.filter((l) => l.phaseId === phaseId).sort((a, b) => a.id - b.id);
}

export function getAdjacentLessons(id: number): { prev?: Lesson; next?: Lesson } {
  const sorted = [...lessons].sort((a, b) => a.id - b.id);
  const idx = sorted.findIndex((l) => l.id === id);
  return {
    prev: idx > 0 ? sorted[idx - 1] : undefined,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : undefined,
  };
}
