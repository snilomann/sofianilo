import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estudio — Diseñadora gráfica & UX/UI" },
      { name: "description", content: "Portafolio minimalista de diseño gráfico y UX/UI." },
      { property: "og:title", content: "Estudio — Diseñadora gráfica & UX/UI" },
      { property: "og:description", content: "Portafolio de diseño gráfico y UX/UI." },
    ],
  }),
  component: Index,
});

const stickers = ["Diseño gráfico", "UX / UI", "Branding", "Editorial", "Tipografía", "Sistemas"];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="relative px-6 md:px-12">
        {/* Hero */}
        <section className="relative pt-12 pb-28 md:pt-24 md:pb-40">
          <div className="flex flex-wrap items-center gap-3">
            <span className="sticker">● Portafolio 2020 — 2025</span>
            <span className="eyebrow text-muted-foreground">Disponible para nuevos proyectos</span>
          </div>

          <h1 className="display-xl mt-10">
            Diseño con <span className="hand">intención,</span>
            <br />
            forma y silencio.
          </h1>

          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-lg leading-relaxed text-foreground/80">
                Soy diseñadora visual e interactiva. Trabajo en el cruce entre
                identidad de marca, lo editorial y los productos digitales —
                buscando piezas honestas y sensibles al detalle.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/portafolio/grafico"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-background transition-colors hover:bg-foreground/85"
                >
                  <span className="eyebrow">Ver portafolio</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/contacto"
                  className="eyebrow inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-3 transition-colors hover:bg-foreground hover:text-background"
                >
                  Escríbeme
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <section className="-mx-6 md:-mx-12 border-y border-foreground py-5">
          <div className="marquee">
            {[0, 1].map((k) => (
              <div className="marquee-track" key={k} aria-hidden={k === 1}>
                {stickers.concat(stickers).map((s, i) => (
                  <span key={`${k}-${i}`} className="flex items-center gap-10">
                    <span className="font-display text-3xl md:text-5xl italic">{s}</span>
                    <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-foreground" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* About snippet */}
        <section className="grid gap-10 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">01 — Qué hago</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-lg max-w-3xl">
              Identidades, sistemas editoriales y productos digitales pensados{" "}
              <span className="hand">con calma</span>.
            </h2>
            <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
              {[
                { n: "01", t: "Identidad de marca", d: "Sistemas visuales completos: logotipo, paleta, tipografía, voz." },
                { n: "02", t: "Diseño editorial", d: "Revistas, libros, publicaciones impresas y digitales." },
                { n: "03", t: "UX / UI", d: "Productos digitales centrados en personas reales." },
              ].map((s) => (
                <div key={s.n} className="bg-background p-8 transition-colors hover:bg-secondary">
                  <p className="eyebrow text-muted-foreground">{s.n}</p>
                  <h3 className="mt-4 font-display text-3xl">{s.t}</h3>
                  <p className="mt-3 text-sm text-foreground/70">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="grid gap-10 border-t border-border py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">02 — Trabajos recientes</p>
          </div>
          <div className="md:col-span-9">
            {[
              { t: "Sheriff — Plataforma", c: "UX/UI · 2025", tag: "Producto" },
              { t: "AquaForce SUP", c: "Empaque · 2024", tag: "Gráfico" },
              { t: "Durma — Sleep & Awake", c: "Etiquetas · 2024", tag: "Gráfico" },
              { t: "Mottai", c: "UX/UI · 2026", tag: "Producto" },
            ].map((p) => (
              <Link
                key={p.t}
                to="/portafolio"
                className="group flex items-center justify-between border-t border-border py-7 transition-colors hover:bg-secondary/60"
              >
                <div className="flex items-baseline gap-6">
                  <span className="eyebrow text-muted-foreground">{String(["01","02","03","04"][0])}</span>
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl">
                      <span className="italic">{p.t}</span>
                    </h3>
                    <p className="eyebrow mt-2 text-muted-foreground">{p.c}</p>
                  </div>
                </div>
                <span className="eyebrow hidden md:inline-flex items-center gap-2 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-[-6px]">
                  {p.tag} <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
