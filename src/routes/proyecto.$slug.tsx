import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/proyecto/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.t} — Portafolio` },
          { name: "description", content: loaderData.project.d },
          { property: "og:title", content: loaderData.project.t },
          { property: "og:description", content: loaderData.project.d },
          { property: "og:image", content: loaderData.project.cover },
        ]
      : [{ title: "Proyecto" }],
  }),
  notFoundComponent: () => (
    <div className="grain min-h-screen">
      <SiteHeader />
      <main className="px-6 py-32 text-center md:px-12">
        <p className="eyebrow text-muted-foreground">404</p>
        <h1 className="display-xl mt-4">Proyecto no encontrado</h1>
        <Link to="/portafolio/grafico" className="eyebrow mt-8 inline-block text-accent">
          ← Volver al portafolio
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
  errorComponent: () => (
    <div className="grain min-h-screen">
      <SiteHeader />
      <main className="px-6 py-32 text-center md:px-12">
        <h1 className="display-xl">Algo salió mal</h1>
      </main>
      <SiteFooter />
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const categoryHref = project.category === "grafico" ? "/portafolio/grafico" : "/portafolio/ux-ui";
  const categoryLabel = project.category === "grafico" ? "Diseño Gráfico" : "UX / UI";

  // Next project in same category for navigation
  const sameCat = projects.filter((p) => p.category === project.category);
  const idx = sameCat.findIndex((p) => p.slug === project.slug);
  const next = sameCat[(idx + 1) % sameCat.length];

  return (
    <div className="grain min-h-screen">
      <SiteHeader />
      <main className="relative px-6 pb-24 md:px-12">
        {/* Breadcrumb */}
        <div className="pt-12 md:pt-20">
          <Link to={categoryHref} className="eyebrow text-muted-foreground hover:text-accent">
            ← Portafolio / {categoryLabel}
          </Link>
        </div>

        {/* Title block */}
        <section className="mt-8 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow text-accent">{project.c}</p>
            <h1 className="display-xl mt-4">
              <em className="text-accent">{project.t.split(" ")[0]}</em>{" "}
              {project.t.split(" ").slice(1).join(" ")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80 max-w-2xl">{project.d}</p>
          </div>
          <aside className="md:col-span-4 md:border-l md:border-border md:pl-8 space-y-6 md:mt-4">
            {project.client && (
              <div>
                <p className="eyebrow text-muted-foreground">Cliente</p>
                <p className="mt-1 font-display text-xl">{project.client}</p>
              </div>
            )}
            {project.role && (
              <div>
                <p className="eyebrow text-muted-foreground">Rol</p>
                <p className="mt-1 text-sm text-foreground/80">{project.role}</p>
              </div>
            )}
            <div>
              <p className="eyebrow text-muted-foreground">Año</p>
              <p className="mt-1 text-sm text-foreground/80">{project.y}</p>
            </div>
            {project.tools && (
              <div>
                <p className="eyebrow text-muted-foreground">Herramientas</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="eyebrow rounded-full border border-border px-3 py-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </section>

        {/* Hero image */}
        <div className="mt-16 overflow-hidden rounded-sm bg-muted">
          <img src={project.cover} alt={project.t} className="w-full object-cover" />
        </div>

        {/* About the project */}
        <section className="mt-20 grid gap-10 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">Sobre el proyecto</p>
          </div>
          <div className="md:col-span-9 space-y-6 text-lg leading-relaxed text-foreground/80">
            {project.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Gallery */}
        {project.gallery.length > 1 && (
          <section className="mt-20 border-t border-border pt-12">
            <p className="eyebrow text-muted-foreground">Galería</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
              {project.gallery.slice(1).map((img, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-sm bg-muted ${
                    // First gallery item full-width for visual rhythm
                    i === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.t} — imagen ${i + 2}`}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Next project */}
        <section className="mt-24 border-t border-border pt-12">
          <Link
            to="/proyecto/$slug"
            params={{ slug: next.slug }}
            className="group block"
          >
            <p className="eyebrow text-muted-foreground">Siguiente proyecto</p>
            <h2 className="mt-3 font-display text-5xl group-hover:italic md:text-6xl">
              {next.t} <span className="text-accent">→</span>
            </h2>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
