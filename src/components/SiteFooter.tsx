import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-12 md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display-lg max-w-xl">
            ¿Tienes una idea? <em className="text-accent">Conversemos.</em>
          </p>
          <Link
            to="/contacto"
            className="eyebrow mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 hover:text-accent hover:border-accent"
          >
            Escríbeme →
          </Link>
        </div>
        <div className="eyebrow flex flex-col gap-2 text-muted-foreground">
          <span>© {new Date().getFullYear()} — Estudio</span>
          <span>Hecho con cuidado</span>
        </div>
      </div>
    </footer>
  );
}
