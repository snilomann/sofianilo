import { createFileRoute, Link } from "@tanstack/react-router";
import { byCategory } from "@/data/projects";

export const Route = createFileRoute("/portafolio/grafico")({
  head: () => ({
    meta: [
      { title: "Diseño Gráfico — Portafolio" },
      { name: "description", content: "Proyectos de packaging, editorial, branding e ilustración." },
    ],
  }),
  component: GraficoPage,
});

function GraficoPage() {
  const projects = byCategory("grafico");
  return (
    <section className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
      {projects.map((p, i) => (
        <Link
          key={p.slug}
          to="/proyecto/$slug"
          params={{ slug: p.slug }}
          className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
        >
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-muted">
            <img
              src={p.cover}
              alt={p.t}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <h2 className="font-display text-3xl group-hover:italic">{p.t}</h2>
            <span className="eyebrow text-muted-foreground">{p.y}</span>
          </div>
          <p className="eyebrow mt-1 text-accent">{p.c}</p>
          <p className="mt-2 text-sm text-foreground/70">{p.d}</p>
          <p className="eyebrow mt-3 text-foreground/60 group-hover:text-accent">Ver proyecto →</p>
        </Link>
      ))}
    </section>
  );
}
