import { createFileRoute, Link } from "@tanstack/react-router";
import { byCategory } from "@/data/projects";

export const Route = createFileRoute("/portafolio/ux-ui")({
  head: () => ({
    meta: [
      { title: "UX / UI — Portafolio" },
      { name: "description", content: "Productos digitales, plataformas y experiencias diseñadas para distintos sectores." },
    ],
  }),
  component: UxPage,
});

function UxPage() {
  const projects = byCategory("ux-ui");
  return (
    <section className="mt-12 space-y-px">
      {projects.map((p) => (
        <Link
          key={p.slug}
          to="/proyecto/$slug"
          params={{ slug: p.slug }}
          className="group grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10"
        >
          <div className="md:col-span-5">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-sm bg-muted">
              <img
                src={p.cover}
                alt={p.t}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow text-accent">{p.c}</p>
            <h2 className="mt-3 font-display text-4xl group-hover:italic md:text-5xl">{p.t}</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">{p.d}</p>
            <p className="eyebrow mt-6 text-foreground/60 group-hover:text-accent">Ver proyecto →</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
