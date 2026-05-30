import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portafolio/ux-ui")({
  head: () => ({
    meta: [
      { title: "UX / UI — Portafolio" },
      { name: "description", content: "Productos digitales, plataformas y experiencias diseñadas para distintos sectores." },
    ],
  }),
  component: UxPage,
});

const projects = [
  {
    t: "Sistema de Notificaciones Sheriff",
    c: "Producto digital · 2025",
    d: "Rediseño del sistema de notificaciones de Sheriff. Tabla adaptable a web y móvil que organiza la información clave priorizando legibilidad, jerarquía visual y experiencia de usuario.",
    role: "UX/UI · Figma, Notion",
    tone: "from-accent/20 to-clay/10",
  },
  {
    t: "Creador de Formularios Sheriff",
    c: "Plataforma · 2025",
    d: "Nueva funcionalidad para crear, personalizar y distribuir formularios digitales. Diseñado con foco en usabilidad, flexibilidad y escalabilidad: configuración dinámica de campos, validaciones y flujos de envío.",
    role: "UX/UI · Figma, Hotjar, LottieFiles",
    tone: "from-foreground/10 to-foreground/0",
  },
  {
    t: "Vista Compliance Sheriff",
    c: "Producto digital · 2025",
    d: "Rediseño de la funcionalidad Compliance con una interfaz más limpia y coherente. El nuevo diseño reduce fricciones en el flujo de trabajo y permite ejecutar tareas de forma más ágil e intuitiva.",
    role: "UX/UI · Figma, Hotjar",
    tone: "from-clay/25 to-accent/5",
  },
  {
    t: "Plataforma CATI",
    c: "Ministerio de Transportes · 2025",
    d: "Diseño UX/UI de la Plataforma CATI (Centro Automatizado de Tratamiento de Infracciones) del MTT. Definición de flujos, arquitectura de información, prototipado y validación con pruebas de usabilidad con distintos perfiles del ministerio.",
    role: "Lead UX/UI · Figma, Hotjar",
    tone: "from-foreground/5 to-accent/15",
  },
  {
    t: "thesheriff.cl",
    c: "Sitio web · 2025",
    d: "Rediseño integral del sitio web de Sheriff: arquitectura de información, interfaz visual y flujos de navegación. Una experiencia coherente, escalable y orientada a la conversión.",
    role: "Lead UX/UI · Webflow, Figma, LottieFiles",
    tone: "from-accent/25 to-clay/10",
  },
  {
    t: "Mottai",
    c: "StartUp Fintech HORECA · 2026",
    d: "Diseño de producto, branding y experiencia de usuario de Mottai, plataforma de finanzas para el sector HORECA. Transforma la facturación electrónica en una herramienta de inteligencia financiera con detección de oportunidades de ahorro en tiempo real.",
    role: "Product Design · Figma, UX Pilot",
    tone: "from-clay/20 to-foreground/5",
  },
];

function UxPage() {
  return (
    <section className="mt-12 space-y-px">
      {projects.map((p) => (
        <article
          key={p.t}
          className="group grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10"
        >
          <div className="md:col-span-5">
            <div className={`aspect-[16/10] w-full overflow-hidden rounded-sm bg-gradient-to-br ${p.tone} flex items-center justify-center`}>
              <span className="font-display text-4xl italic text-foreground/30 text-center px-4">{p.t}</span>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow text-accent">{p.c}</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">{p.t}</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">{p.d}</p>
            <p className="eyebrow mt-6 text-muted-foreground">Rol — {p.role}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
