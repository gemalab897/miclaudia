import PageHeader from "@/components/PageHeader";
import CopyButton from "./CopyButton";

const secciones = [
  {
    titulo: "Identificar pensamientos automáticos",
    color: "border-blue-200 bg-blue-50",
    headerColor: "bg-blue-600",
    descripcion: "Ayudan al paciente a tomar conciencia de lo que está pensando en el momento",
    items: [
      "¿Qué pasaba por tu mente justo antes de sentirte así?",
      "¿Qué imagen o pensamiento apareció en ese momento?",
      "¿Qué significaba esa situación para ti?",
      "Si tuvieras que adivinar qué estabas pensando, ¿qué dirías?",
      "¿Qué es lo peor que creías que podía pasar?",
      "¿Qué decía esa voz interna sobre ti mismo/a?",
      "¿Qué creías que pensaban los demás de ti en ese momento?",
      "¿Qué significaba esa situación sobre tu futuro?",
      "¿Había alguna imagen mental que acompañaba ese sentimiento?",
      "Si ese sentimiento pudiera hablar, ¿qué diría?",
      "¿Qué parte de la situación te afectó más?",
      "¿Estabas pensando que algo malo iba a ocurrir? ¿Qué exactamente?",
      "¿Qué interpretación diste a lo que hizo o dijo esa persona?",
      "¿Había algo que sentías que debías hacer o evitar?",
      "¿Qué pensabas que decía de ti como persona ese momento?",
    ],
  },
  {
    titulo: "Evaluar la evidencia",
    color: "border-emerald-200 bg-emerald-50",
    headerColor: "bg-emerald-600",
    descripcion: "Examinan la validez del pensamiento de forma empírica y objetiva",
    items: [
      "¿Qué pruebas tienes de que ese pensamiento es verdad?",
      "¿Qué evidencia hay en contra de ese pensamiento?",
      "¿Qué le dirías a un amigo/a que tuviera ese pensamiento?",
      "¿Has tenido este pensamiento antes? ¿Qué ocurrió realmente?",
      "Si otra persona estuviera en tu situación, ¿vería las cosas igual?",
      "¿Estás basándote en hechos o en sensaciones?",
      "¿Cuántas veces ha ocurrido lo que temías realmente?",
      "¿Hay otra forma de interpretar lo que pasó?",
      "¿Qué probabilidad real existe de que ocurra lo que temes?",
      "¿Qué dice la evidencia objetiva sobre esta situación?",
      "Si tuvieras que defender este pensamiento ante un jurado, ¿qué pruebas presentarías?",
      "¿Alguien que te conoce bien estaría de acuerdo con ese pensamiento?",
      "¿Estás confundiendo un pensamiento con un hecho?",
      "¿Qué pasaría si lo peor que imaginas ocurriera realmente?",
      "¿Hay algo que estés ignorando o pasando por alto?",
      "¿Cuánto de ese pensamiento es tuyo y cuánto es lo que otros te han dicho?",
    ],
  },
  {
    titulo: "Generar pensamientos alternativos",
    color: "border-purple-200 bg-purple-50",
    headerColor: "bg-purple-600",
    descripcion: "Facilitan la construcción de interpretaciones más equilibradas y funcionales",
    items: [
      "¿Existe una forma más equilibrada de ver esta situación?",
      "Si tu mejor amigo/a estuviera en esta situación, ¿qué le dirías?",
      "¿Qué pensarías si te sintieras bien y con confianza?",
      "¿Cómo verías esto dentro de 5 años?",
      "¿Qué es lo más realista que puede pasar?",
      "¿Qué has aprendido de situaciones similares en el pasado?",
      "¿Cómo describirías esta situación sin usar palabras absolutas como 'siempre' o 'nunca'?",
      "¿Qué parte de la situación sí está bajo tu control?",
      "¿Hay algo positivo o neutro en esta situación que no estás considerando?",
      "¿Qué diría alguien más compasivo contigo mismo/a?",
      "¿Qué es lo más útil que podrías pensar ahora mismo?",
      "¿Cómo cambiaría tu forma de actuar si pensaras de otra manera?",
      "¿Puedes separar lo que es un hecho de lo que es tu interpretación?",
      "¿Qué consejo le darías a alguien que pensara lo mismo que tú?",
      "Si vieras esta situación como un reto en lugar de una amenaza, ¿cómo la describirías?",
    ],
  },
  {
    titulo: "Frases para la resistencia",
    color: "border-amber-200 bg-amber-50",
    headerColor: "bg-amber-600",
    descripcion: "Cuando el paciente se niega a cuestionar sus pensamientos o dice 'sí, pero...'",
    items: [
      "Entiendo que es difícil ver las cosas de otra manera ahora mismo. No te pido que lo creas, solo que lo consideremos juntos.",
      "No necesito que cambies de opinión ahora. Solo quiero explorar otras posibilidades contigo.",
      "Parece que una parte de ti quiere mantener ese pensamiento. ¿Qué función crees que cumple?",
      "¿Qué pasaría si ese pensamiento fuera solo una hipótesis y no una certeza?",
      "No estoy diciendo que tu pensamiento esté equivocado. Estoy preguntando si es el único posible.",
      "¿Qué perderías si empezaras a ver las cosas de otra manera?",
      "Noto que hay mucha certeza en lo que dices. ¿Cómo sabes con seguridad que es así?",
      "¿Qué necesitarías ver o escuchar para poder considerar otra perspectiva?",
      "Parece que ese pensamiento lleva mucho tiempo contigo. ¿Cuándo empezaste a pensar así?",
      "Entiendo que sientes que ese pensamiento es verdad. Los sentimientos son siempre válidos, aunque los pensamientos puedan revisarse.",
    ],
  },
  {
    titulo: "Frases de validación emocional",
    color: "border-rose-200 bg-rose-50",
    headerColor: "bg-rose-600",
    descripcion: "Antes de cualquier intervención cognitiva, valida la experiencia emocional del paciente",
    items: [
      "Tiene mucho sentido que te sientas así dado todo lo que has vivido.",
      "Lo que describes suena muy doloroso. Gracias por contármelo.",
      "No me sorprende que eso te haya afectado tanto.",
      "Tus emociones son completamente comprensibles en esta situación.",
      "Veo que esto te está costando mucho. Estoy aquí.",
      "No tienes que justificar cómo te sientes. Es válido tal como es.",
      "Escucho que estás sufriendo y eso importa.",
      "Parece que llevas mucho tiempo cargando con esto solo/a.",
      "Lo que sientes es real y merece ser escuchado.",
      "Antes de seguir, quiero asegurarme de que sabes que lo que sientes tiene sentido.",
    ],
  },
  {
    titulo: "Frases para momentos de crisis",
    color: "border-red-200 bg-red-50",
    headerColor: "bg-red-600",
    descripcion: "Cuando el paciente está en un estado de angustia intensa o desbordamiento emocional",
    items: [
      "Ahora mismo estás seguro/a. Estoy contigo. Vamos paso a paso.",
      "Noto que esto es muy intenso ahora. Vamos a respirar juntos un momento.",
      "No tienes que resolver nada en este momento. Solo estar aquí.",
      "Lo que sientes ahora es muy intenso, pero pasará. Las emociones siempre pasan.",
      "Vamos a anclar un poco. Dime tres cosas que puedes ver en este momento.",
      "¿Qué necesitas ahora mismo en este momento?",
      "No tienes que hablar si no quieres. Puedes simplemente estar aquí.",
      "Eso que estás sintiendo tiene un nombre. Se llama [ansiedad/pánico/dolor]. Y tiene solución.",
      "Has superado momentos difíciles antes. Tienes recursos aunque ahora no los veas.",
      "No estás solo/a en esto. Trabajaremos juntos.",
    ],
  },
  {
    titulo: "Ejercicios de Terapia Somática — Enraizamiento",
    color: "border-teal-200 bg-teal-50",
    headerColor: "bg-teal-700",
    descripcion: "Instrucciones verbales para guiar ejercicios de grounding y conexión con el cuerpo en sesión",
    items: [
      "Lleva tu atención a la suela de los pies. Nota el contacto con el suelo. Presiona un poco hacia abajo. ¿Qué sientes ahí?",
      "Siente el peso de tu cuerpo en la silla. La silla sostiene todo tu peso. No tienes que sostenerte tú solo/a en este momento.",
      "Mira lentamente alrededor de la habitación. Nombra en voz baja cinco cosas que puedes ver. Sin prisa.",
      "Escucha los sonidos que hay en la habitación ahora mismo. Los cercanos, los lejanos. Sin juzgarlos, solo escucha.",
      "Toca con las manos la superficie de [la silla / la mesa / tu ropa]. Nota la textura, la temperatura. ¿Es suave, rugosa, fría, cálida?",
      "Respira despacio. No tienes que hacerlo perfecto. Solo nota el aire entrando y saliendo. Cada respiración te ancla un poco más aquí.",
      "Nombra tres cosas que puedes ver, dos que puedes oír y una que puedes sentir en tu cuerpo ahora mismo.",
      "Lleva los pies al suelo, la espalda al respaldo. Siéntete sostenido/a. Estás aquí. Estás seguro/a.",
      "Oriéntate en el espacio: ¿dónde estás? ¿Qué día es? ¿Qué hora aproximadamente? Dejar que tu sistema nervioso sepa que el peligro ha pasado.",
      "¿Puedes notar alguna parte de tu cuerpo que esté un poco más tranquila que el resto? Quédate con esa sensación un momento.",
    ],
  },
  {
    titulo: "Ejercicios de Terapia Somática — Escaneo Corporal",
    color: "border-cyan-200 bg-cyan-50",
    headerColor: "bg-cyan-700",
    descripcion: "Guía verbal para el escaneo corporal progresivo: observar sensaciones sin juzgar ni cambiar",
    items: [
      "Cierra los ojos si te resulta cómodo, o baja la mirada. Empieza por notar tu respiración tal como es ahora, sin cambiarla.",
      "Lleva la atención a los pies. ¿Hay tensión, hormigueo, calor, frío? No tienes que cambiar nada, solo observar.",
      "Sube la atención por las piernas, las pantorrillas, las rodillas, los muslos. ¿Qué notas? ¿Peso, ligereza, tensión?",
      "Llega al abdomen. ¿Está tenso o relajado? ¿Sientes algo moviéndose con la respiración?",
      "Nota el pecho. ¿Cómo respira? ¿El pecho sube y baja libremente o hay constricción?",
      "Lleva la atención a los hombros. ¿Están elevados, tensos, apretados? Simplemente obsérvalo.",
      "Ahora el cuello y la mandíbula. ¿Hay tensión ahí? ¿Los dientes apretados? Solo nota.",
      "Escanea la cara: frente, cejas, ojos, mejillas. ¿Hay tensión o suavidad?",
      "Ahora haz un recorrido de cabeza a pies: ¿qué zona tiene más tensión? ¿Qué zona está más tranquila?",
      "Si has encontrado alguna zona de tensión, respira suavemente hacia ella. No para cambiarla, sino para acompañarla.",
    ],
  },
  {
    titulo: "Ejercicios de Terapia Somática — Regulación del Sistema Nervioso",
    color: "border-indigo-200 bg-indigo-50",
    headerColor: "bg-indigo-700",
    descripcion: "Técnicas verbales de respiración y regulación para activar el sistema parasimpático",
    items: [
      "Vamos a respirar juntos. Inhala contando mentalmente hasta 4... mantén un momento... exhala lentamente hasta 6. La exhalación más larga activa el freno del sistema nervioso.",
      "Prueba la respiración fisiológica: una inhalación normal, y al final añade un sorbo más de aire antes de exhalar largo. Es un reset del sistema nervioso.",
      "Inhala por la nariz 4 tiempos, exhala por la boca 8 tiempos con los labios fruncidos como si soplaras una vela. Hazlo tres veces.",
      "Nota si tu sistema nervioso ahora mismo está acelerado (hiperactivación) o apagado (hipoactivación). ¿Hay más tensión o más entumecimiento?",
      "Si hay hiperactivación: pies en el suelo, respiración lenta, orientación al entorno. Activamos el freno.",
      "Si hay hipoactivación: pequeños movimientos, frotarse las manos, respiración más energizante. Despertamos el sistema.",
      "Pon una mano en el pecho y otra en el abdomen. ¿Cuál se mueve más? Intentemos que sea la del abdomen — señal de respiración diafragmática.",
      "Suspiro fisiológico: dos inhalaciones rápidas por la nariz seguidas de una exhalación larga por la boca. Hazlo una vez. ¿Cómo quedas?",
      "La voz regula el sistema nervioso. Prueba a humear suavemente (hmmm) con los labios cerrados. ¿Sientes la vibración en el pecho?",
      "¿Cuánto ha cambiado tu nivel de activación del 0 al 10 desde que empezamos el ejercicio? Nota el cambio, aunque sea pequeño.",
    ],
  },
  {
    titulo: "Ejercicios de Terapia Somática — Trabajo con Trauma",
    color: "border-violet-200 bg-violet-50",
    headerColor: "bg-violet-700",
    descripcion: "Titulación, pendulación y recursos somáticos para aproximarse al material traumático con seguridad",
    items: [
      "Antes de acercarnos al material difícil, necesitamos un recurso somático. Piensa en un lugar o momento donde te sentiste seguro/a. ¿Qué sensaciones corporales aparecen cuando lo imaginas?",
      "Ese recurso es tu ancla. Podemos volver ahí en cualquier momento. Solo tienes que decirme 'pausa' y volvemos al recurso.",
      "Vamos a acercarnos al material en dosis pequeñas. No de golpe. Como meter el pie en agua fría antes de entrar.",
      "¿Cuándo empiezas a sentir tensión o incomodidad al pensar en eso? Para ahí. Ese es el límite por ahora.",
      "Ahora vuelve al recurso somático. Recuerda las sensaciones de seguridad. Quédate ahí un momento.",
      "Eso se llama pendulación: ir hacia el material difícil y volver al recurso. El sistema nervioso se regula oscilando entre los dos.",
      "¿Qué sensación corporal acompaña a ese recuerdo difícil? No el contenido — la sensación. ¿Dónde la notas en el cuerpo?",
      "Las sensaciones físicas del trauma cambian cuando las nombramos y las observamos. No tienes que hacer nada con ellas, solo acompañarlas.",
      "Si la intensidad sube de 7, hacemos pausa y volvemos al recurso. Por encima de ese nivel, el trabajo no es posible ni útil.",
      "¿Ha cambiado algo en esa sensación corporal desde que la estamos observando? Las sensaciones se mueven cuando les damos atención.",
    ],
  },
];


export default function DialogoSocratico() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        title="Diálogo Socrático"
        description="Preguntas socráticas, frases terapéuticas y guías verbales para ejercicios somáticos. Pasa el cursor sobre cualquier frase para copiarla."
        badge="💬 Técnicas verbales y somáticas"
      />

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
    </div>
  );
}
