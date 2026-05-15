import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Estudio" },
      { name: "description", content: "Escríbeme para colaborar en proyectos de diseño gráfico, editorial o UX/UI." },
      { property: "og:title", content: "Contacto — Estudio" },
      { property: "og:description", content: "Escríbeme para colaborar." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Tu nombre, por favor.").max(100),
  email: z.string().trim().email("Email inválido.").max(255),
  message: z.string().trim().min(10, "Cuéntame un poco más.").max(2000),
});

const EMAIL_TO = "hola@estudio.com"; // edita aquí

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Revisa los campos.");
      return;
    }
    setError(null);
    const subject = encodeURIComponent(`Nuevo proyecto — ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name}\n${result.data.email}`);
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="grain min-h-screen">
      <SiteHeader />
      <main className="relative px-6 pb-24 md:px-12">
        <section className="pt-12 md:pt-24">
          <p className="eyebrow text-muted-foreground">Contacto</p>
          <h1 className="display-xl mt-6 max-w-4xl">
            Empecemos algo <em className="text-accent">juntos</em>.
          </h1>
        </section>

        <section className="mt-20 grid gap-12 border-t border-border pt-12 md:grid-cols-12">
          <aside className="md:col-span-4 space-y-8">
            <div>
              <p className="eyebrow text-muted-foreground">Email</p>
              <a href={`mailto:${EMAIL_TO}`} className="mt-2 block font-display text-2xl hover:text-accent">
                {EMAIL_TO}
              </a>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">Disponibilidad</p>
              <p className="mt-2 text-sm text-foreground/80">
                Acepto proyectos a partir de marzo. Identidad, editorial y producto digital.
              </p>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">En otros lugares</p>
              <ul className="mt-2 space-y-1 text-sm">
                {[
                  { l: "Instagram", h: "#" },
                  { l: "Behance", h: "#" },
                  { l: "Are.na", h: "#" },
                  { l: "LinkedIn", h: "#" },
                ].map((s) => (
                  <li key={s.l}>
                    <a href={s.h} className="border-b border-border pb-0.5 hover:text-accent hover:border-accent">
                      {s.l} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="md:col-span-8 space-y-8">
            <div>
              <label htmlFor="name" className="eyebrow text-muted-foreground">Nombre</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 font-display text-2xl outline-none focus:border-accent"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="eyebrow text-muted-foreground">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 font-display text-2xl outline-none focus:border-accent"
                placeholder="hola@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="eyebrow text-muted-foreground">Cuéntame sobre tu proyecto</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={2000}
                className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-base leading-relaxed outline-none focus:border-accent"
                placeholder="Tipo de proyecto, plazos, referencias…"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button
              type="submit"
              className="eyebrow inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-background transition-colors hover:bg-accent"
            >
              Enviar mensaje →
            </button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
