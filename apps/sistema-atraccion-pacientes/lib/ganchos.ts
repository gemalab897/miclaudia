export type Gancho = {
  id: number;
  texto: string;
  especialidad: string;
  nivel: number; // 1-5, ver lección 6
  tipo: "Pregunta" | "Mito vs. realidad" | "Caso anonimizado" | "Dato sorprendente";
};

export const especialidades = [
  "Ansiedad",
  "Depresión",
  "Parejas",
  "Autoestima",
  "Duelo",
  "Adolescentes",
  "General",
] as const;

export const ganchos: Gancho[] = [
  { id: 1, texto: "¿Te cuesta dormir pensando en todo lo que dejaste pendiente?", especialidad: "Ansiedad", nivel: 1, tipo: "Pregunta" },
  { id: 2, texto: "¿Sientes que tu cabeza no se apaga ni cuando por fin te sientas a descansar?", especialidad: "Ansiedad", nivel: 1, tipo: "Pregunta" },
  { id: 3, texto: "Mito: la ansiedad es 'solo estrés'. Realidad: puede tener un componente clínico tratable.", especialidad: "Ansiedad", nivel: 2, tipo: "Mito vs. realidad" },
  { id: 4, texto: "El 1 de cada 3 adultos experimenta síntomas de ansiedad significativos en algún momento de su vida.", especialidad: "Ansiedad", nivel: 2, tipo: "Dato sorprendente" },
  { id: 5, texto: "Una paciente me contó que llevaba años pensando que su ansiedad era 'solo su personalidad'.", especialidad: "Ansiedad", nivel: 3, tipo: "Caso anonimizado" },
  { id: 6, texto: "3 técnicas de respiración que uso con pacientes con ansiedad (y cuándo cada una funciona mejor).", especialidad: "Ansiedad", nivel: 4, tipo: "Dato sorprendente" },
  { id: 7, texto: "Si ya identificaste que necesitas ayuda con tu ansiedad, así es como trabajo en las primeras sesiones.", especialidad: "Ansiedad", nivel: 5, tipo: "Caso anonimizado" },
  { id: 8, texto: "¿Últimamente todo te da lo mismo, incluso lo que antes disfrutabas?", especialidad: "Depresión", nivel: 1, tipo: "Pregunta" },
  { id: 9, texto: "Mito: la depresión es 'estar triste'. Realidad: muchas veces es no sentir nada en absoluto.", especialidad: "Depresión", nivel: 2, tipo: "Mito vs. realidad" },
  { id: 10, texto: "La falta de energía constante puede ser un síntoma, no un rasgo de carácter.", especialidad: "Depresión", nivel: 2, tipo: "Dato sorprendente" },
  { id: 11, texto: "Un paciente me dijo una vez: 'no estoy triste, simplemente ya no siento nada'.", especialidad: "Depresión", nivel: 3, tipo: "Caso anonimizado" },
  { id: 12, texto: "Así diferencio, en primera sesión, entre un bajón pasajero y un cuadro que necesita acompañamiento.", especialidad: "Depresión", nivel: 4, tipo: "Dato sorprendente" },
  { id: 13, texto: "Si ya decidiste buscar ayuda para tu estado de ánimo, tengo disponibilidad esta semana.", especialidad: "Depresión", nivel: 5, tipo: "Pregunta" },
  { id: 14, texto: "¿Sientes que hace tiempo hablan más de logística que de ustedes como pareja?", especialidad: "Parejas", nivel: 1, tipo: "Pregunta" },
  { id: 15, texto: "Mito: si tienes que ir a terapia de pareja es porque la relación 'ya fracasó'. Realidad: es lo contrario.", especialidad: "Parejas", nivel: 2, tipo: "Mito vs. realidad" },
  { id: 16, texto: "El silencio después de una discusión no siempre es calma: a veces es distancia acumulándose.", especialidad: "Parejas", nivel: 2, tipo: "Dato sorprendente" },
  { id: 17, texto: "Una pareja llegó a consulta diciendo 'ya no sabemos ni de qué hablar', y hoy vuelven a reírse juntos.", especialidad: "Parejas", nivel: 3, tipo: "Caso anonimizado" },
  { id: 18, texto: "Así es una primera sesión de terapia de pareja conmigo: sin señalar culpables, con foco en reconstruir.", especialidad: "Parejas", nivel: 4, tipo: "Caso anonimizado" },
  { id: 19, texto: "Si sienten que es momento de trabajar en su relación juntos, agendemos su primera sesión.", especialidad: "Parejas", nivel: 5, tipo: "Pregunta" },
  { id: 20, texto: "¿Te cuesta reconocer tus propios logros, aunque otros los noten?", especialidad: "Autoestima", nivel: 1, tipo: "Pregunta" },
  { id: 21, texto: "Mito: la autoestima baja se soluciona 'con pensar positivo'. Realidad: requiere trabajar creencias de fondo.", especialidad: "Autoestima", nivel: 2, tipo: "Mito vs. realidad" },
  { id: 22, texto: "El diálogo interno que usas contigo mismo/a probablemente no se lo dirías a nadie más.", especialidad: "Autoestima", nivel: 2, tipo: "Dato sorprendente" },
  { id: 23, texto: "Una paciente identificó que su autoexigencia venía de un patrón familiar de nunca sentirse 'suficiente'.", especialidad: "Autoestima", nivel: 3, tipo: "Caso anonimizado" },
  { id: 24, texto: "Así trabajo la reestructuración del diálogo interno en terapia cognitivo-conductual.", especialidad: "Autoestima", nivel: 4, tipo: "Dato sorprendente" },
  { id: 25, texto: "¿Buscas empezar a trabajar en tu autoestima con acompañamiento profesional? Escríbeme.", especialidad: "Autoestima", nivel: 5, tipo: "Pregunta" },
  { id: 26, texto: "¿Sientes que 'ya debería estar mejor' con tu duelo, aunque nadie te lo dijo directamente?", especialidad: "Duelo", nivel: 1, tipo: "Pregunta" },
  { id: 27, texto: "Mito: el duelo tiene un tiempo 'normal'. Realidad: cada proceso tiene su propio ritmo.", especialidad: "Duelo", nivel: 2, tipo: "Mito vs. realidad" },
  { id: 28, texto: "Acompaño procesos de duelo sin apurar los tiempos de nadie.", especialidad: "Duelo", nivel: 4, tipo: "Caso anonimizado" },
  { id: 29, texto: "¿Notas que tu hijo/a adolescente se aísla más de lo habitual últimamente?", especialidad: "Adolescentes", nivel: 1, tipo: "Pregunta" },
  { id: 30, texto: "Mito: 'son cosas de la edad'. Realidad: a veces son señales que vale la pena mirar de cerca.", especialidad: "Adolescentes", nivel: 2, tipo: "Mito vs. realidad" },
  { id: 31, texto: "Trabajo con adolescentes usando un lenguaje adaptado a su edad, sin que sientan que 'algo está mal' con ellos.", especialidad: "Adolescentes", nivel: 4, tipo: "Dato sorprendente" },
  { id: 32, texto: "Buscar ayuda profesional no es una señal de debilidad, es una decisión activa por tu bienestar.", especialidad: "General", nivel: 1, tipo: "Dato sorprendente" },
  { id: 33, texto: "¿Qué pasaría si le dieras a tu bienestar mental la misma prioridad que le das a un chequeo médico anual?", especialidad: "General", nivel: 2, tipo: "Pregunta" },
  { id: 34, texto: "La primera sesión no es un compromiso de por vida, es un espacio para evaluar si somos compatibles.", especialidad: "General", nivel: 4, tipo: "Dato sorprendente" },
  { id: 35, texto: "Tengo disponibilidad esta semana para primeras sesiones — escríbeme si quieres dar el paso.", especialidad: "General", nivel: 5, tipo: "Pregunta" },
];
