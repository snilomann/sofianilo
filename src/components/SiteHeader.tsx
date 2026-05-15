import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/portafolio/grafico", label: "Portafolio" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
      <Link to="/" className="flex items-baseline gap-2">
        <span className="font-display text-2xl tracking-tight">Estudio</span>
        <span className="eyebrow text-muted-foreground">— design</span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="eyebrow text-foreground/70 transition-colors hover:text-accent"
            activeProps={{ className: "eyebrow text-accent" }}
            activeOptions={{ exact: item.to === "/" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        to="/contacto"
        className="eyebrow rounded-full border border-foreground px-4 py-2 transition-colors hover:bg-foreground hover:text-background md:hidden"
      >
        Contacto
      </Link>
    </header>
  );
}
