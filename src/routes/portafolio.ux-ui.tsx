import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portafolio/ux-ui")({
  head: () => ({
    meta: [
      { title: "UX / UI — Portafolio" },
      { name: "description", content: "Productos digitales, sistemas de diseño y aplicaciones móviles." },
    ],
  }),
  component: UxPage,
});

const projects = [
  { t: "Marea", c: "App móvil · 2024", d: "Aplicación de meditación con ritmos del mar. UX research, IA y UI completa.", role: "Diseño de producto", tone: "from-accent/20 to-clay/10" },
  { t: "Hilo Bank", c: "Banca digital · 2023", d: "Rediseño completo de la experiencia de banca personal y sistema de diseño.", role: "Lead UX/UI", tone: "from-foreground/10 to-foreground/0" },
  { t: "Sembrar", c: "Web app · 2023", d: "Plataforma de inversión en proyectos agrícolas sostenibles.", role: "UX/UI", tone: "from-clay/25 to-accent/5" },
  { t: "Atlas Docs", c: "Sistema de diseño · 2022", d: "Librería de componentes y documentación para equipo de 30 diseñadores.", role: "Design Systems", tone: "from-foreground/5 to-accent/15" },
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
              <span className="font-display text-5xl italic text-foreground/30">{p.t}</span>
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
