import { createFileRoute } from "@tanstack/react-router";
import aquaforce from "@/assets/projects/aquaforce.jpg";
import durma from "@/assets/projects/durma.jpg";
import logistica from "@/assets/projects/logistica.jpg";
import cuadernillos from "@/assets/projects/cuadernillos.jpg";
import globalFrozen from "@/assets/projects/global-frozen.jpg";
import sheriffWeb from "@/assets/projects/sheriff-web.jpg";

export const Route = createFileRoute("/portafolio/grafico")({
  head: () => ({
    meta: [
      { title: "Diseño Gráfico — Portafolio" },
      { name: "description", content: "Proyectos de packaging, editorial, branding e ilustración." },
    ],
  }),
  component: GraficoPage,
});

const projects = [
  {
    t: "Empaque Stand Up Paddle",
    y: "2024",
    c: "Packaging · AquaForce",
    d: "Empaque para tablas de Stand Up Paddle de AquaForce. La ilustración principal protagoniza el diseño, integrándose a la forma horizontal del empaque y transmitiendo el dinamismo y la energía del deporte desde el punto de venta.",
    img: aquaforce,
  },
  {
    t: "Etiquetas Sleep & Awake",
    y: "2024",
    c: "Packaging · Durma",
    d: "Dos etiquetas complementarias para una línea de suplementos que regulan los ciclos de descanso y energía. Paleta inspirada en el anochecer y el amanecer, reforzando la función de cada producto mediante el color.",
    img: durma,
  },
  {
    t: "Guías de Buenas Prácticas Logísticas",
    y: "2024",
    c: "Editorial · MTT + Conecta Logística",
    d: "Tres guías diseñadas en conjunto con la Organización de Logística Urbana y el Ministerio de Transportes y Telecomunicaciones, orientadas a mejorar la gestión logística comunal, comunidades logísticas y comercio exterior. Impresas y entregadas a autoridades municipales.",
    img: logistica,
  },
  {
    t: "Cuadernillos de Educación Socioemocional",
    y: "2023",
    c: "Editorial educativo · UDD",
    d: "Cinco cuadernillos para estudiantes de 3° a 8° básico, diseñados para trabajar habilidades socioemocionales en el aula. Ilustraciones lúdicas y lenguaje visual cercano adaptado a cada grupo etario.",
    img: cuadernillos,
  },
  {
    t: "Etiquetas Global Frozen",
    y: "2024",
    c: "Packaging · Global Frozen",
    d: "Línea de etiquetas para productos congelados de Global Frozen: empanadas, arrollados primavera, gyozas y salsa de soya. Identidad visual coherente, paleta diferenciada por producto e imágenes generadas con IA.",
    img: globalFrozen,
  },
  {
    t: "Página Web Sheriff",
    y: "2025",
    c: "Web · TheSheriff.cl",
    d: "Rediseño completo del sitio web de Sheriff para mejorar la navegación, reforzar la identidad visual y comunicar el valor de la plataforma. Diseñado en Figma e implementado en Webflow con animaciones en LottieFiles.",
    img: sheriffWeb,
  },
];

function GraficoPage() {
  return (
    <section className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
      {projects.map((p, i) => (
        <article key={p.t} className={i % 2 === 1 ? "md:mt-24" : ""}>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-muted">
            <img
              src={p.img}
              alt={p.t}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <h2 className="font-display text-3xl">{p.t}</h2>
            <span className="eyebrow text-muted-foreground">{p.y}</span>
          </div>
          <p className="eyebrow mt-1 text-accent">{p.c}</p>
          <p className="mt-2 text-sm text-foreground/70">{p.d}</p>
        </article>
      ))}
    </section>
  );
}
