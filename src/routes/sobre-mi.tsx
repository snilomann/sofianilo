import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Estudio" },
      { name: "description", content: "Trayectoria, estudios y enfoque de trabajo de la diseñadora." },
      { property: "og:title", content: "Sobre mí — Estudio" },
      { property: "og:description", content: "Trayectoria, estudios y enfoque." },
    ],
  }),
  component: About,
});

const trayectoria = [
  {
    y: "dic. 2025 — actualidad · 6 meses",
    empresa: "Banco Ripley Chile",
    r: "UX Designer",
    p: "Jornada completa · Chile · Híbrido.",
  },
  {
    y: "feb. 2025 — dic. 2025 · 11 meses",
    empresa: "Sheriff",
    r: "UX/UI Designer",
    p: "",
  },
  {
    y: "jun. 2025 — jul. 2025 · 2 meses",
    empresa: "Alken Energía",
    r: "Diseñadora freelance",
    p: "Temporal · Diseño de presentaciones corporativas, plantillas de documentos institucionales y tarjetas de presentación, alineadas con la identidad visual de la empresa.",
  },
  {
    y: "feb. 2025 — jun. 2025 · 5 meses",
    empresa: "TIMIX",
    r: "UX/UI Designer",
    p: "Contrato temporal · Región Metropolitana, Chile. Proyecto CATI — Centro Automatizado de Tratamiento de Infracciones impulsado por el Ministerio de Transportes y Telecomunicaciones. Diseño y prototipado de la plataforma y pruebas de usabilidad.",
  },
  {
    y: "feb. 2025 — dic. 2025 · 11 meses",
    empresa: "Global Frozen",
    r: "Diseñadora gráfica · Temporal",
    p: "Región Metropolitana de Santiago, Chile · Diseñadora gráfica freelance.",
  },
  {
    y: "oct. 2024 — feb. 2025 · 5 meses",
    empresa: "Global Frozen",
    r: "Diseñadora & Community Manager",
    p: "Jornada completa · Chile · Presencial.",
  },
];

const estudios = [
  {
    y: "Ago. — Dic. 2025",
    t: "Diplomado en Branding",
    i: "Pontificia Universidad Católica de Chile",
  },
  {
    y: "Abr. — Sept. 2024",
    t: "Diplomado en UX/UI",
    i: "Pontificia Universidad Católica de Chile",
  },
  {
    y: "2020 — 2023",
    t: "Título de Diseñadora Integral",
    i: "Pontificia Universidad Católica de Chile",
  },
  {
    y: "2016 — 2020",
    t: "Licenciatura en Artes Visuales",
    i: "Pontificia Universidad Católica de Chile",
  },
];

const herramientas = [
  "Figma",
  "Figma Make",
  "Webflow",
  "Hotjar",
  "Maze",
  "Illustrator",
  "Photoshop",
  "After Effects",
  "LottieLab",
  "Nano Banana",
  "DALL·E",
  "Shots.so",
];


function About() {
  return (
    <div className="grain min-h-screen">
      <SiteHeader />
      <main className="relative px-6 pb-24 md:px-12">
        <section className="pt-12 md:pt-24">
          <p className="eyebrow text-muted-foreground">Sobre mí</p>
          <h1 className="display-xl mt-6 max-w-5xl">
            Diseño desde la <em className="text-accent">curiosidad</em> y la pausa.
          </h1>
        </section>

        <section className="mt-20 grid gap-10 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">Manifiesto</p>
          </div>
          <div className="md:col-span-9 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Soy diseñadora gráfica y de experiencia, con base en una mirada editorial
              y un cariño particular por la tipografía. Llevo más de cinco años
              ayudando a marcas y equipos de producto a comunicar con claridad,
              calidez y carácter.
            </p>
            <p>
              Creo que el buen diseño no se nota: simplemente funciona, emociona
              y queda. Trabajo despacio, con conversación, prototipos y muchas
              pruebas — porque cada proyecto merece tiempo para encontrar su forma.
            </p>
          </div>
        </section>

        <section className="mt-20 grid gap-10 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">Trayectoria</p>
          </div>
          <div className="md:col-span-9 space-y-px">
            {trayectoria.map((t) => (
              <div key={t.y} className="grid gap-2 border-t border-border py-6 md:grid-cols-12">
                <p className="eyebrow md:col-span-3 text-accent">{t.y}</p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl">{t.empresa}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground/80">{t.r}</p>
                  {t.p && <p className="mt-1 text-sm text-foreground/70">{t.p}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-10 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">Estudios</p>
          </div>
          <div className="md:col-span-9 space-y-px">
            {estudios.map((e) => (
              <div key={e.t} className="grid gap-2 border-t border-border py-6 md:grid-cols-12">
                <p className="eyebrow md:col-span-3 text-accent">{e.y}</p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl">{e.t}</h3>
                  <p className="text-sm text-foreground/70">{e.i}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-10 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">Herramientas</p>
          </div>
          <div className="md:col-span-9 flex flex-wrap gap-2">
            {herramientas.map(
              (h) => (
                <span key={h} className="eyebrow rounded-full border border-border px-4 py-2">
                  {h}
                </span>
              ),
            )}

          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
