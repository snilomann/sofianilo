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
    y: "dic. 2025 — actualidad",
    r: "UX Designer",
    p: "Banco Ripley Chile · Jornada completa · Chile · Híbrido (6 meses).",
  },
  {
    y: "feb. 2025 — dic. 2025",
    r: "UX/UI Designer",
    p: "Sheriff · 11 meses.",
  },
  {
    y: "jun. 2025 — jul. 2025",
    r: "Diseñadora freelance",
    p: "Alken Energía · Temporal · Diseño de presentaciones corporativas, plantillas de documentos institucionales y tarjetas de presentación, alineadas con la identidad visual de la empresa.",
  },
  {
    y: "feb. 2025 — jun. 2025",
    r: "UX/UI Designer",
    p: "TIMIX · Contrato temporal · Región Metropolitana, Chile. Proyecto CATI — Centro Automatizado de Tratamiento de Infracciones impulsado por el Ministerio de Transportes y Telecomunicaciones. Diseño y prototipado de la plataforma y pruebas de usabilidad.",
  },
  {
    y: "feb. 2025 — dic. 2025",
    r: "Diseñadora gráfica (Temporal)",
    p: "Global Frozen · Región Metropolitana de Santiago, Chile · Diseñadora gráfica freelance para Global Frozen (11 meses).",
  },
  {
    y: "oct. 2024 — feb. 2025",
    r: "Diseñadora & Community Manager",
    p: "Global Frozen · Jornada completa · Chile · Presencial (5 meses).",
  },
];

const estudios = [
  { y: "2023", t: "Diplomado en UX Research", i: "Interaction Design Foundation" },
  { y: "2020", t: "Licenciatura en Diseño Gráfico", i: "Universidad Nacional" },
  { y: "2018", t: "Tipografía avanzada", i: "Type@Cooper, Nueva York" },
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
                  <h3 className="font-display text-2xl">{t.r}</h3>
                  <p className="text-sm text-foreground/70">{t.p}</p>
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
            {["Figma", "Adobe Illustrator", "InDesign", "Photoshop", "After Effects", "Webflow", "Notion", "Glyphs"].map(
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
