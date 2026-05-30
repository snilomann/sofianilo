import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estudio — Diseñadora gráfica & UX/UI" },
      { name: "description", content: "Portafolio de diseño gráfico y UX/UI: juguetón, editorial y con mucho color." },
      { property: "og:title", content: "Estudio — Diseñadora gráfica & UX/UI" },
      { property: "og:description", content: "Portafolio de diseño gráfico y UX/UI." },
    ],
  }),
  component: Index,
});

const stickers = ["Diseño gráfico", "UX / UI", "Branding", "Editorial", "Color", "Tipografía", "Sistemas", "Ilustración"];

function Index() {
  return (
    <div className="grain min-h-screen overflow-hidden">
      <SiteHeader />
      <main className="relative px-6 md:px-12">
        {/* Hero */}
        <section className="relative pt-10 pb-28 md:pt-20 md:pb-40">
          {/* blobs decorativos */}
          <div
            aria-hidden
            className="blob animate-float absolute -top-10 right-0 h-64 w-64 bg-[var(--color-lime)] opacity-80 md:h-80 md:w-80"
            style={{ ["--r" as never]: "-8deg" }}
          />
          <div
            aria-hidden
            className="blob animate-float absolute top-40 -left-16 h-44 w-44 bg-[var(--color-lilac)] opacity-90 md:h-56 md:w-56"
            style={{ ["--r" as never]: "12deg", animationDelay: "1.5s" }}
          />
          <div
            aria-hidden
            className="blob animate-float absolute bottom-10 right-1/3 h-32 w-32 bg-[var(--color-sky)] opacity-90"
            style={{ ["--r" as never]: "-15deg", animationDelay: "3s" }}
          />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <span className="sticker">★ Portafolio 2020 — 2025</span>
              <span className="hand text-2xl text-[var(--color-clay)] -rotate-3">¡hola, qué bueno verte!</span>
            </div>

            <h1 className="display-xl mt-8">
              <span className="inline-block">Diseño</span>{" "}
              <span className="inline-block italic text-[var(--color-clay)]">con</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10">chispa,</span>
                <svg
                  aria-hidden
                  viewBox="0 0 300 30"
                  className="absolute -bottom-3 left-0 w-full text-[var(--color-lime)]"
                  preserveAspectRatio="none"
                >
                  <path d="M5,20 Q75,5 150,18 T295,15" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              forma y mucho{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-3 text-background">color.</span>
                <span aria-hidden className="absolute inset-0 -z-0 bg-[var(--color-coral)] -skew-x-6 rounded-md" />
              </span>
            </h1>

            <div className="mt-14 grid gap-10 md:grid-cols-12">
              <div className="md:col-span-6 md:col-start-7">
                <p className="text-lg leading-relaxed text-foreground/80">
                  Soy diseñadora visual e interactiva. Vivo en el cruce entre la
                  identidad de marca, lo editorial y los productos digitales —
                  buscando piezas honestas, sensibles al detalle y con un guiño juguetón.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/portafolio/grafico"
                    className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-background shadow-[4px_4px_0_var(--color-coral)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--color-coral)]"
                  >
                    <span className="eyebrow">Ver portafolio</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    to="/contacto"
                    className="eyebrow inline-flex items-center gap-2 rounded-full border-2 border-foreground px-5 py-3 hover:bg-[var(--color-lime)]"
                  >
                    Escríbeme ✿
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee de stickers */}
        <section className="-mx-6 md:-mx-12 border-y-2 border-foreground bg-[var(--color-lime)] py-5">
          <div className="marquee">
            {[0, 1].map((k) => (
              <div className="marquee-track" key={k} aria-hidden={k === 1}>
                {stickers.concat(stickers).map((s, i) => (
                  <span key={`${k}-${i}`} className="flex items-center gap-12">
                    <span className="font-display text-3xl md:text-5xl italic">{s}</span>
                    <span className="text-2xl">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* About snippet */}
        <section className="relative grid gap-10 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-3">
            <span className="sticker">01 · Qué hago</span>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-lg max-w-3xl">
              Identidades, sistemas editoriales y productos digitales pensados{" "}
              <em className="text-[var(--color-clay)]">con cariño</em> y curiosidad.
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                { n: "01", t: "Identidad de marca", d: "Sistemas visuales completos: logotipo, paleta, tipografía, voz.", bg: "var(--color-coral)", rot: "-1.5deg" },
                { n: "02", t: "Diseño editorial", d: "Revistas, libros, publicaciones impresas y digitales.", bg: "var(--color-lilac)", rot: "1deg" },
                { n: "03", t: "UX / UI", d: "Productos digitales centrados en personas reales.", bg: "var(--color-sky)", rot: "-0.5deg" },
              ].map((s) => (
                <div
                  key={s.n}
                  className="relative rounded-2xl border-2 border-foreground p-6 transition-transform hover:-translate-y-1 hover:rotate-0"
                  style={{ background: s.bg, transform: `rotate(${s.rot})` }}
                >
                  <p className="eyebrow">{s.n}</p>
                  <h3 className="mt-3 font-display text-3xl">{s.t}</h3>
                  <p className="mt-3 text-sm text-foreground/80">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="grid gap-10 border-t-2 border-foreground py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-3">
            <span className="sticker">02 · Trabajos recientes</span>
          </div>
          <div className="md:col-span-9">
            {[
              { t: "Sheriff — Plataforma", c: "UX/UI · 2025", tag: "Producto", color: "var(--color-coral)" },
              { t: "AquaForce SUP", c: "Empaque · 2024", tag: "Gráfico", color: "var(--color-lime)" },
              { t: "Durma — Sleep & Awake", c: "Etiquetas · 2024", tag: "Gráfico", color: "var(--color-lilac)" },
              { t: "Mottai", c: "UX/UI · 2026", tag: "Producto", color: "var(--color-sky)" },
            ].map((p) => (
              <Link
                key={p.t}
                to="/portafolio"
                className="group relative flex items-center justify-between border-t border-border py-7 transition-colors hover:text-[var(--color-clay)]"
              >
                <div className="flex items-baseline gap-5">
                  <span
                    aria-hidden
                    className="h-5 w-5 rounded-full border-2 border-foreground transition-transform group-hover:scale-150"
                    style={{ background: p.color }}
                  />
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl italic">{p.t}</h3>
                    <p className="eyebrow mt-2 text-muted-foreground">{p.c}</p>
                  </div>
                </div>
                <span className="eyebrow hidden md:inline-block opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-[-8px]">
                  {p.tag} →
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
