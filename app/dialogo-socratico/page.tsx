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
];


export default function DialogoSocratico() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        title="Diálogo Socrático"
        description="Preguntas, frases y técnicas de cuestionamiento para cada momento de la sesión TCC. Pasa el cursor sobre cualquier frase para copiarla."
        badge="💬 Técnicas verbales"
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
