import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portafolio/grafico")({
  head: () => ({
    meta: [
      { title: "Diseño Gráfico — Portafolio" },
      { name: "description", content: "Proyectos de identidad de marca, editorial e ilustración." },
    ],
  }),
  component: GraficoPage,
});

const projects = [
  { t: "Casa Botánica", y: "2024", c: "Identidad de marca", d: "Sistema visual para una tienda de plantas con enfoque editorial.", tone: "from-clay/30 to-clay/5" },
  { t: "Revista Albor", y: "2023", c: "Editorial", d: "Diseño y dirección de arte para revista cultural trimestral.", tone: "from-foreground/10 to-foreground/0" },
  { t: "Olivar 1908", y: "2023", c: "Packaging", d: "Línea de empaques para aceite de oliva artesanal.", tone: "from-accent/25 to-accent/5" },
  { t: "Festival Trama", y: "2022", c: "Identidad + cartelería", d: "Sistema gráfico para festival de tejido contemporáneo.", tone: "from-clay/20 to-foreground/5" },
];

function GraficoPage() {
  return (
    <section className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
      {projects.map((p, i) => (
        <article key={p.t} className={i % 2 === 1 ? "md:mt-24" : ""}>
          <div className={`aspect-[4/5] w-full overflow-hidden rounded-sm bg-gradient-to-br ${p.tone} flex items-center justify-center`}>
            <span className="font-display text-6xl italic text-foreground/30 md:text-7xl">{p.t.split(" ")[0]}</span>
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
