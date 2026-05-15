import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estudio — Diseñadora gráfica & UX/UI" },
      { name: "description", content: "Portafolio de diseño gráfico y UX/UI con un enfoque editorial, moderno y aesthetic." },
      { property: "og:title", content: "Estudio — Diseñadora gráfica & UX/UI" },
      { property: "og:description", content: "Portafolio de diseño gráfico y UX/UI." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain min-h-screen">
      <SiteHeader />
      <main className="relative px-6 md:px-12">
        {/* Hero */}
        <section className="relative pt-12 pb-24 md:pt-24 md:pb-40">
          <p className="eyebrow text-muted-foreground">Portafolio · 2020 — 2025</p>
          <h1 className="display-xl mt-6">
            Diseño con <em className="text-accent">intención,</em>
            <br />
            forma y ritmo.
          </h1>
          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-lg leading-relaxed text-foreground/80">
                Soy una diseñadora visual e interactiva. Trabajo en el cruce entre la
                identidad de marca, lo editorial y los productos digitales — siempre
                buscando soluciones honestas, sensibles al detalle y a la emoción.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/portafolio/grafico"
                  className="eyebrow inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-background hover:bg-accent"
                >
                  Ver portafolio →
                </Link>
                <Link
                  to="/sobre-mi"
                  className="eyebrow inline-flex items-center gap-2 border-b border-foreground pb-1 hover:text-accent hover:border-accent"
                >
                  Sobre mí
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About snippet */}
        <section className="grid gap-10 border-t border-border py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">01 — Qué hago</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-lg max-w-3xl">
              Identidades visuales, sistemas editoriales y experiencias digitales
              pensadas <em className="text-accent">con calma</em>.
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { n: "01", t: "Identidad de marca", d: "Sistemas visuales completos: logotipo, paleta, tipografía, voz." },
                { n: "02", t: "Diseño editorial", d: "Revistas, libros, publicaciones impresas y digitales." },
                { n: "03", t: "UX / UI", d: "Productos digitales centrados en personas reales." },
              ].map((s) => (
                <div key={s.n} className="border-t border-border pt-4">
                  <p className="eyebrow text-accent">{s.n}</p>
                  <h3 className="mt-3 font-display text-2xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="grid gap-10 border-t border-border py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">02 — Trabajos recientes</p>
          </div>
          <div className="md:col-span-9 space-y-px">
            {[
              { t: "Casa Botánica", c: "Identidad · 2024", tag: "Gráfico" },
              { t: "Marea App", c: "UX/UI · 2024", tag: "Producto" },
              { t: "Revista Albor", c: "Editorial · 2023", tag: "Gráfico" },
              { t: "Hilo — banca digital", c: "UX/UI · 2023", tag: "Producto" },
            ].map((p) => (
              <div
                key={p.t}
                className="group flex items-baseline justify-between border-t border-border py-6 transition-colors hover:bg-secondary/40"
              >
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{p.t}</h3>
                  <p className="eyebrow mt-1 text-muted-foreground">{p.c}</p>
                </div>
                <span className="eyebrow text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  {p.tag} →
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
